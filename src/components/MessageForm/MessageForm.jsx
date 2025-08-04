import { useState } from 'react'
import { useChat } from '../../context/ChatContext'
import './MessageForm.css'

function MessageForm({ contactId }) {
  const [message, setMessage] = useState('')
  const { sendMessage } = useChat()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      sendMessage(contactId, message.trim())
      setMessage('')
    }
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <div className="message-input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="message-input"
          maxLength={1000}
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={!message.trim()}
        >
          ➤
        </button>
      </div>
    </form>
  )
}

export default MessageForm