import { useEffect, useRef, useState } from 'react'

const quickReplies = ['Schedule a visit', 'Office hours', 'Telemedicine', 'Prescription refill']

const botAnswers = {
  'Schedule a visit':
    'Use the Schedule page to choose a Well Exam, Sick Visit, Medication Check, or Eagan Saturday appointment. You can also call (651) 256-6714 for help.',
  'Office hours':
    'Our Maplewood office is open Monday through Friday, 9:00 AM to 5:00 PM. Our Eagan office is open Monday through Friday, 8:00 AM to 5:00 PM, with Saturday medical appointments from 9:00 AM to 5:00 PM.',
  Telemedicine:
    'Telemedicine is available for select visit types, so families can connect with care from home when appropriate.',
  'Prescription refill':
    'For prescription refills, call the refill line at (651) 256-6796 and follow the recorded instructions.',
}

function getGreeting() {
  const hour = new Date().getHours()

  if (hour < 12) {
    return 'Good morning'
  }

  if (hour < 18) {
    return 'Good afternoon'
  }

  return 'Good evening'
}

function ChatbotWidget({ openSignal = 0 }) {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [draftMessage, setDraftMessage] = useState('')
  const [isAgentThinking, setIsAgentThinking] = useState(false)
  const sessionId = useRef(
    globalThis.crypto?.randomUUID?.() ?? `pyam-${Date.now()}-${Math.random()}`,
  )
  const [messages, setMessages] = useState([
    {
      id: 'intro',
      sender: 'bot',
      text: `${getGreeting()}! I can help you find scheduling, office, and telemedicine information.`,
    },
  ])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsMounted(true)
    }, 700)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!openSignal) {
      return
    }

    setIsOpen(true)
  }, [openSignal])

  const appendBotMessage = (text) => {
    setMessages((previous) => [
      ...previous,
      {
        id: `bot-${previous.length}`,
        sender: 'bot',
        text,
      },
    ])
  }

  const handleQuickReply = (reply) => {
    setMessages((previous) => [
      ...previous,
      {
        id: `${reply}-user-${previous.length}`,
        sender: 'user',
        text: reply,
      },
      {
        id: `${reply}-bot-${previous.length + 1}`,
        sender: 'bot',
        text: botAnswers[reply],
      },
    ])

    setIsOpen(true)
  }

  const handleSendMessage = async (event) => {
    event.preventDefault()

    const nextMessage = draftMessage.trim()

    if (!nextMessage || isAgentThinking) {
      return
    }

    const nextUserMessage = {
      id: `user-${messages.length}`,
      sender: 'user',
      text: nextMessage,
    }
    const nextMessages = [...messages, nextUserMessage]

    setMessages(nextMessages)
    setDraftMessage('')
    setIsOpen(true)
    setIsAgentThinking(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId.current,
          messages: nextMessages.slice(-8).map((message) => ({
            role: message.sender === 'bot' ? 'assistant' : 'user',
            content: message.text,
          })),
        }),
      })

      const payload = await response.json()

      if (!response.ok || !payload.reply) {
        throw new Error(payload.error || 'Chat request failed')
      }

      appendBotMessage(payload.reply)
    } catch (error) {
      console.error('Chat request failed:', error)
      appendBotMessage('I’m temporarily unable to answer. Please call PYAM at (651) 256-6714 for assistance.')
    } finally {
      setIsAgentThinking(false)
    }
  }

  return (
    <div className={`chatbot-widget ${isMounted ? 'chatbot-widget-visible' : ''}`}>
      <div
        className={`chatbot-panel ${isOpen ? 'chatbot-panel-open' : ''}`}
        id="chatbot-panel"
        aria-hidden={!isOpen}
      >
        <div className="chatbot-panel-header">
          <div>
            <p className="chatbot-kicker">PYAM Assistant</p>
            <h2>How can we help?</h2>
          </div>
          <button
            type="button"
            className="chatbot-close"
            aria-label="Close chatbot"
            onClick={() => setIsOpen(false)}
          >
            <span aria-hidden="true">x</span>
          </button>
        </div>

        <p className="chatbot-status">General clinic information only</p>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chatbot-message chatbot-message-${message.sender}`}
            >
              {message.text}
            </div>
          ))}
          {isAgentThinking ? (
            <div className="chatbot-message chatbot-message-bot chatbot-message-pending">
              Virtual agent is typing...
            </div>
          ) : null}
        </div>

        <div className="chatbot-quick-replies-section">
          <p className="chatbot-quick-replies-label">Quick questions</p>
          <div className="chatbot-quick-replies">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                type="button"
                className="chatbot-chip"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        <form className="chatbot-composer" onSubmit={handleSendMessage}>
          <label className="chatbot-composer-label" htmlFor="chatbot-input">
            Talk to the virtual agent
          </label>
          <div className="chatbot-composer-row">
            <input
              id="chatbot-input"
              type="text"
              value={draftMessage}
              onChange={(event) => setDraftMessage(event.target.value)}
              placeholder="Type your message here..."
              autoComplete="off"
              maxLength={500}
            />
            <button type="submit" className="chatbot-send" disabled={!draftMessage.trim() || isAgentThinking}>
              Send
            </button>
          </div>
          <p className="chatbot-privacy-note">
            Please don&apos;t share names, birth dates, symptoms, or medical information here.
          </p>
        </form>
      </div>

      <button
        type="button"
        className={`chatbot-trigger ${isOpen ? 'chatbot-trigger-active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="chatbot-trigger-icon" aria-hidden="true">
          <span className="chatbot-trigger-image">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M15 14h34a7 7 0 0 1 7 7v19a7 7 0 0 1-7 7H32l-11 8v-8h-6a7 7 0 0 1-7-7V21a7 7 0 0 1 7-7Z" />
              <path className="chatbot-trigger-smile" d="M22 31c2.5 4 6 6 10 6s7.5-2 10-6" />
              <circle cx="23" cy="26" r="2.2" />
              <circle cx="41" cy="26" r="2.2" />
            </svg>
          </span>
        </span>
        <span className="chatbot-trigger-copy">
          <strong>Chat with us</strong>
          <small>Quick help</small>
        </span>
      </button>
    </div>
  )
}

export default ChatbotWidget
