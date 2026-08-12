import { createHash } from 'node:crypto'

const PLACEHOLDER_MODE = !process.env.OPENAI_API_KEY
const MAX_MESSAGE_LENGTH = 500
const MAX_HISTORY_MESSAGES = 8

const clinicFacts = `
Pediatric & Young Adult Medicine (PYAM) provides pediatric care in Maplewood and Eagan, Minnesota.

Appointments:
- Online scheduling is available for Well Exam, Sick Visit, Medication Check, and eligible Eagan Saturday appointments.
- The central appointment line is (651) 256-6714.
- Same-day acute-care appointments may be available; families should call the appointment line.

Locations and hours:
- Maplewood Office: 1965 11th Avenue East, Suite 102, Maplewood, MN 55109. Monday-Friday, 9:00 AM-5:00 PM.
- Eagan Office: 3470 Washington Drive, Suite 201, Eagan, MN 55122. Monday-Friday, 8:00 AM-5:00 PM. Saturday medical appointments, 9:00 AM-4:00 PM.

Services:
- Well child visits, health issues and illnesses, safety and minor injury care, immunizations, and newborn care.
- Safety services include laceration evaluation, sutures, and X-rays when clinically appropriate.
- The Eagan office offers outpatient surgical procedures.
- Both offices provide behavioral disorder support, chronic medication management, and ongoing pediatric support.
- Telemedicine is available for select visit types. Families should call (651) 256-6714 to confirm whether a virtual visit is appropriate.

Patient resources:
- FollowMyHealth is the patient portal.
- Medical Records: (651) 256-6717 or medicalrecords@pyam.com.
- Prescription refill line: (651) 256-6796.
- Billing and insurance referrals: (651) 227-7806, option 2.
`

const assistantInstructions = `
You are the website assistant for Pediatric & Young Adult Medicine (PYAM). Answer only from the approved clinic facts below.

Keep answers brief, friendly, and practical. Help with office hours, locations, scheduling, services, telemedicine, the patient portal, medical records, billing, referrals, and prescription refill contact information.

Safety boundaries:
- Do not diagnose, assess symptoms, recommend treatment, provide medication instructions, or decide whether a patient needs emergency care.
- Do not ask for or repeat names, dates of birth, addresses, insurance details, medical-record information, symptoms, or other private health information.
- If someone shares private health information, tell them not to post it in chat and direct them to call the clinic.
- For medical or symptom questions, say the chatbot cannot provide medical advice and direct the person to call (651) 256-6714.
- If the user mentions an emergency, severe symptoms, immediate danger, self-harm, or harm to another person, tell them to call 911 or go to the nearest emergency department now.
- Do not claim an appointment is confirmed and do not promise same-day availability.
- If the approved facts do not answer the question, say you are not sure and direct the person to call (651) 256-6714.

Approved clinic facts:
${clinicFacts}
`

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  response.end(JSON.stringify(payload))
}

function normalizeMessages(body) {
  const rawMessages = Array.isArray(body?.messages)
    ? body.messages
    : [{ role: 'user', content: body?.message }]

  return rawMessages
    .filter((message) => message && ['user', 'assistant'].includes(message.role))
    .map((message) => ({
      role: message.role,
      content: String(message.content ?? '').trim().slice(0, MAX_MESSAGE_LENGTH),
    }))
    .filter((message) => message.content)
    .slice(-MAX_HISTORY_MESSAGES)
}

function hasOversizedMessage(body) {
  const rawMessages = Array.isArray(body?.messages)
    ? body.messages
    : [{ content: body?.message }]

  return rawMessages.some(
    (message) => String(message?.content ?? '').length > MAX_MESSAGE_LENGTH,
  )
}

function placeholderReply(message) {
  const normalized = message.toLowerCase()

  if (/emergency|can'?t breathe|cannot breathe|trouble breathing|difficulty breathing|not breathing|unconscious|self[- ]?harm|suicid/.test(normalized)) {
    return 'If this may be an emergency or someone is in immediate danger, call 911 or go to the nearest emergency department now.'
  }

  if (/symptom|fever|rash|pain|sick|medicine|medication|dose|diagnos|treat/.test(normalized)) {
    return 'I can’t provide medical advice or assess symptoms. Please call PYAM at (651) 256-6714, and do not share private health information in this chat.'
  }

  if (/hour|open|close|saturday/.test(normalized)) {
    return 'Maplewood is open Monday-Friday, 9:00 AM-5:00 PM. Eagan is open Monday-Friday, 8:00 AM-5:00 PM, with Saturday medical appointments from 9:00 AM-4:00 PM.'
  }

  if (/schedule|appointment|visit|book/.test(normalized)) {
    return 'Use the Schedule page to choose an online appointment type, or call the central appointment line at (651) 256-6714 for help.'
  }

  if (/portal|followmyhealth|record/.test(normalized)) {
    return 'FollowMyHealth is the PYAM patient portal. For portal or medical-records help, call (651) 256-6717 or email medicalrecords@pyam.com.'
  }

  if (/telemedicine|virtual|video/.test(normalized)) {
    return 'Telemedicine is available for select visit types. Call (651) 256-6714 to confirm whether a virtual visit is appropriate.'
  }

  if (/refill|prescription/.test(normalized)) {
    return 'For prescription refills, call (651) 256-6796 and follow the recorded instructions.'
  }

  if (/address|location|maplewood|eagan|direction/.test(normalized)) {
    return 'PYAM has offices in Maplewood and Eagan. Visit the Locations & Hours page for addresses, hours, and directions.'
  }

  return 'The full virtual assistant is waiting for the clinic’s organization account. For now, I can help with scheduling, office hours, locations, telemedicine, the patient portal, and prescription refills.'
}

function extractResponseText(payload) {
  if (typeof payload?.output_text === 'string' && payload.output_text.trim()) {
    return payload.output_text.trim()
  }

  for (const item of payload?.output ?? []) {
    for (const content of item?.content ?? []) {
      if (content?.type === 'output_text' && typeof content.text === 'string') {
        return content.text.trim()
      }
    }
  }

  return ''
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return sendJson(response, 405, { error: 'Method not allowed.' })
  }

  let body

  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : request.body
  } catch {
    return sendJson(response, 400, { error: 'Invalid JSON request.' })
  }

  if (hasOversizedMessage(body)) {
    return sendJson(response, 413, {
      error: `Messages must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
    })
  }

  const messages = normalizeMessages(body)
  const latestMessage = messages.at(-1)?.content

  if (!latestMessage || messages.at(-1)?.role !== 'user') {
    return sendJson(response, 400, { error: 'A user message is required.' })
  }

  if (PLACEHOLDER_MODE) {
    return sendJson(response, 200, {
      mode: 'placeholder',
      reply: placeholderReply(latestMessage),
    })
  }

  const sessionId = String(body?.sessionId ?? 'anonymous').slice(0, 100)
  const safetyIdentifier = createHash('sha256').update(sessionId).digest('hex')

  try {
    const openAIResponse = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5.6-luna',
        instructions: assistantInstructions,
        input: messages,
        max_output_tokens: 260,
        store: false,
        safety_identifier: safetyIdentifier,
      }),
    })

    if (!openAIResponse.ok) {
      const errorText = await openAIResponse.text()
      console.error('OpenAI request failed:', openAIResponse.status, errorText.slice(0, 500))
      return sendJson(response, 502, {
        error: 'The virtual assistant is temporarily unavailable.',
      })
    }

    const payload = await openAIResponse.json()
    const reply = extractResponseText(payload)

    if (!reply) {
      return sendJson(response, 502, {
        error: 'The virtual assistant returned an empty response.',
      })
    }

    return sendJson(response, 200, { mode: 'openai', reply })
  } catch (error) {
    console.error('Chat endpoint error:', error)
    return sendJson(response, 500, {
      error: 'The virtual assistant is temporarily unavailable.',
    })
  }
}
