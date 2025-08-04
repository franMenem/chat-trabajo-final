import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useChat } from '../../context/ChatContext'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'
import MessageList from '../../components/MessageList/MessageList'
import MessageForm from '../../components/MessageForm/MessageForm'
import './Main.css'

function Main() {
  const { contactId } = useParams()
  const navigate = useNavigate()
  const { messages } = useChat()
  const [isMobileContactsOpen, setIsMobileContactsOpen] = useState(!contactId)
  const [selectedContact, setSelectedContact] = useState(contactId)

  const contacts = [
    { id: 'jinwoo', name: 'Sung Jinwoo', avatar: '/avatars/jinwoo.jpg', title: 'Shadow Monarch' },
    { id: 'chae', name: 'Cha Hae-In', avatar: '/avatars/chae.jpg', title: 'S-Rank Hunter' },
    { id: 'goojin', name: 'Go Gunhee', avatar: '/avatars/goojin.jpg', title: 'Guild Master' },
    { id: 'thomas', name: 'Thomas Andre', avatar: '/avatars/thomas.jpg', title: 'Nation Level Hunter' },
    { id: 'igris', name: 'Igris', avatar: '/avatars/igris.jpg', title: 'Shadow Knight' }
  ]

  useEffect(() => {
    setSelectedContact(contactId)
    setIsMobileContactsOpen(!contactId)
  }, [contactId])

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

  const getContactName = (id) => {
    const contact = contacts.find(c => c.id === id)
    return contact ? contact.name : id
  }

  const handleContactClick = (id) => {
    setSelectedContact(id)
    navigate(`/chat/${id}`)
    setIsMobileContactsOpen(false)
  }

  const handleBackToContacts = () => {
    setSelectedContact(null)
    navigate('/contacts')
    setIsMobileContactsOpen(true)
  }

  return (
    <div className="main-container">
      {/* Sidebar de conversaciones */}
      <div className={`contacts-sidebar ${isMobileContactsOpen ? 'mobile-open' : 'mobile-hidden'}`}>
        <div className="contacts-header">
          <h1>Conversaciones</h1>
          <ThemeToggle />
        </div>
        <div className="contacts-list">
          {contacts.map(contact => (
            <div
              key={contact.id}
              onClick={() => handleContactClick(contact.id)}
              className={`contact-item ${selectedContact === contact.id ? 'active' : ''}`}
            >
              <div className="contact-avatar">
                <img 
                  src={contact.avatar} 
                  alt={contact.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="avatar-fallback" style={{display: 'none'}}>
                  {contact.name.charAt(0)}
                </div>
              </div>
              <div className="contact-info">
                <h3>{contact.name}</h3>
                <span className="contact-title">{contact.title}</span>
                <p>{getLastMessage(contact.id)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Área del chat */}
      <div className={`chat-area ${isMobileContactsOpen ? 'mobile-hidden' : 'mobile-open'}`}>
        {selectedContact ? (
          <>
            <div className="chat-header">
              <button 
                className="back-button mobile-only"
                onClick={handleBackToContacts}
              >
                ←
              </button>
              <div className="chat-contact-info">
                <div className="chat-avatar">
                  <img 
                    src={contacts.find(c => c.id === selectedContact)?.avatar} 
                    alt={getContactName(selectedContact)}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="avatar-fallback" style={{display: 'none'}}>
                    {getContactName(selectedContact).charAt(0)}
                  </div>
                </div>
                <div className="chat-details">
                  <h2>{getContactName(selectedContact)}</h2>
                  <span className="chat-status">{contacts.find(c => c.id === selectedContact)?.title || 'Hunter'}</span>
                </div>
              </div>
            </div>
            <MessageList contactId={selectedContact} />
            <MessageForm contactId={selectedContact} />
          </>
        ) : (
          <div className="welcome-message">
            <h2>¡Bienvenido a WhatsApp Clone!</h2>
            <p>Selecciona una conversación para comenzar a chatear</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Main