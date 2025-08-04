import { useChat } from '../../context/ChatContext'
import './MessageList.css'

function MessageList({ contactId }) {
  const { messages, currentUser } = useChat()
  const contactMessages = messages[contactId] || []

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  if (contactMessages.length === 0) {
    return (
      <div className="messages-container">
        <div className="empty-chat">
          <p>Inicia una conversación con este contacto</p>
        </div>
      </div>
    )
  }

  return (
    <div className="messages-container">
      {contactMessages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === currentUser ? 'message-sent' : 'message-received'}`}
        >
          <div className="message-content">
            <p>{message.text}</p>
            <span className="message-time">{formatTime(message.timestamp)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessageList