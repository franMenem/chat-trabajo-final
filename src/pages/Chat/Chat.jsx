import { useParams, Link } from 'react-router-dom'
import MessageList from '../../components/MessageList/MessageList'
import MessageForm from '../../components/MessageForm/MessageForm'
import './Chat.css'

function Chat() {
  const { contactId } = useParams()
  
  const getContactName = (id) => {
    const contacts = {
      juan: 'Juan Pérez',
      maria: 'María García',
      carlos: 'Carlos López',
      ana: 'Ana Rodríguez',
      pedro: 'Pedro Martínez'
    }
    return contacts[id] || id
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <Link to="/contacts" className="back-button">←</Link>
        <h2>{getContactName(contactId)}</h2>
      </div>
      <MessageList contactId={contactId} />
      <MessageForm contactId={contactId} />
    </div>
  )
}

export default Chat