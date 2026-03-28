import { useEffect, useMemo, useState } from 'react'

const quickReplies = ['Schedule a visit', 'Office hours', 'Telemedicine', 'Prescription refill']

const botAnswers = {
  'Schedule a visit':
    'You can schedule a visit online from the hero section or call the clinic for same-day appointment support.',
  'Office hours':
    'Our clinic hours are Monday through Friday, 8:00 AM to 5:00 PM at our St. Paul, Maplewood, and Eagan locations.',
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

function ChatbotWidget() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [draftMessage, setDraftMessage] = useState('')
  const [isAgentThinking, setIsAgentThinking] = useState(false)
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

  const currentStatus = useMemo(() => {
    const now = new Date()
    const hour = now.getHours()
    const isWeekday = now.getDay() >= 1 && now.getDay() <= 5
    const isOpenNow = isWeekday && hour >= 8 && hour < 17

    return isOpenNow ? 'Clinic is open now' : 'Chat available anytime'
  }, [])

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

    setMessages((previous) => [
      ...previous,
      {
        id: `user-${previous.length}`,
        sender: 'user',
        text: nextMessage,
      },
    ])
    setDraftMessage('')
    setIsOpen(true)
    setIsAgentThinking(true)

    try {
      // Replace this placeholder with your API call once the backend endpoint is ready.
      await new Promise((resolve) => {
        window.setTimeout(resolve, 700)
      })

      appendBotMessage(
        "I'm ready to connect to your virtual agent endpoint. Once you add it, this message can be replaced with the real assistant response.",
      )
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

        <p className="chatbot-status">{currentStatus}</p>

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
            />
            <button type="submit" className="chatbot-send" disabled={!draftMessage.trim() || isAgentThinking}>
              Send
            </button>
          </div>
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
          <svg viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 3.58-9 8 0 2.4 1.2 4.54 3.1 6.01V21l4.09-2.05c.59.12 1.2.18 1.81.18 4.97 0 9-3.58 9-8s-4.03-8.13-9-8.13Zm-3.75 8.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm3.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm3.75 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
          </svg>
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
