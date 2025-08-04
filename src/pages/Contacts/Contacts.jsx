import { Link } from 'react-router-dom'
import { useChat } from '../../context/ChatContext'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'
import './Contacts.css'

function Contacts() {
  const { messages } = useChat()
  
  const contacts = [
    { id: 'juan', name: 'Juan Pérez' },
    { id: 'maria', name: 'María García' },
    { id: 'carlos', name: 'Carlos López' },
    { id: 'ana', name: 'Ana Rodríguez' },
    { id: 'pedro', name: 'Pedro Martínez' }
  ]

  const getLastMessage = (contactId) => {
    const contactMessages = messages[contactId]
    if (!contactMessages || contactMessages.length === 0) {
      return 'Inicia una conversación...'
    }
    const lastMessage = contactMessages[contactMessages.length - 1]
    return lastMessage.text.length > 30 
      ? lastMessage.text.substring(0, 30) + '...' 
      : lastMessage.text
  }

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h1>Conversaciones</h1>
        <ThemeToggle />
      </div>
      <div className="contacts-list">
        {contacts.map(contact => (
          <Link 
            key={contact.id} 
            to={`/chat/${contact.id}`} 
            className="contact-item"
          >
            <div className="contact-avatar">
              {contact.name.charAt(0)}
            </div>
            <div className="contact-info">
              <h3>{contact.name}</h3>
              <p>{getLastMessage(contact.id)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Contacts