import { createContext, useContext, useReducer } from 'react'

const ChatContext = createContext()

const initialState = {
  messages: {
    jinwoo: [
      { id: 1, text: 'El sistema me está dando misiones cada vez más difíciles', sender: 'jinwoo', timestamp: '2024-01-15T10:30:00Z' },
      { id: 2, text: '¿Has sentido algo extraño últimamente?', sender: 'me', timestamp: '2024-01-15T10:32:00Z' },
      { id: 3, text: 'Sí... es como si algo hubiera despertado', sender: 'jinwoo', timestamp: '2024-01-15T10:33:00Z' },
      { id: 4, text: 'Las sombras susurran cosas que no entiendo', sender: 'jinwoo', timestamp: '2024-01-15T10:35:00Z' },
      { id: 5, text: 'Ten cuidado. Los dungeons están cambiando', sender: 'me', timestamp: '2024-01-15T10:36:00Z' },
      { id: 6, text: 'Lo sé. Pero debo seguir adelante', sender: 'jinwoo', timestamp: '2024-01-15T10:38:00Z' },
      { id: 7, text: 'Ayer entré al dungeon de rango A en Gangnam', sender: 'jinwoo', timestamp: '2024-01-15T10:40:00Z' },
      { id: 8, text: '¿Solo? Eso es muy peligroso', sender: 'me', timestamp: '2024-01-15T10:41:00Z' },
      { id: 9, text: 'Los golems de piedra eran enormes, 5 metros de altura', sender: 'jinwoo', timestamp: '2024-01-15T10:42:00Z' },
      { id: 10, text: 'Pero mis sombras los derrotaron sin problemas', sender: 'jinwoo', timestamp: '2024-01-15T10:43:00Z' },
      { id: 11, text: 'Igris cortó a tres de un solo golpe', sender: 'jinwoo', timestamp: '2024-01-15T10:44:00Z' },
      { id: 12, text: 'El boss era un Rey Golem... nivel 85', sender: 'jinwoo', timestamp: '2024-01-15T10:45:00Z' },
      { id: 13, text: '¡Nivel 85! Eso es casi S-rank', sender: 'me', timestamp: '2024-01-15T10:46:00Z' },
      { id: 14, text: 'Usé "Monarch\'s Domain" por primera vez', sender: 'jinwoo', timestamp: '2024-01-15T10:47:00Z' },
      { id: 15, text: 'Todo el dungeon se llenó de sombras...', sender: 'jinwoo', timestamp: '2024-01-15T10:48:00Z' },
      { id: 16, text: 'Fue como si controlara la oscuridad misma', sender: 'jinwoo', timestamp: '2024-01-15T10:49:00Z' },
      { id: 17, text: 'Increíble... tu poder sigue creciendo', sender: 'me', timestamp: '2024-01-15T10:50:00Z' },
      { id: 18, text: 'El Rey Golem se rindió antes de morir', sender: 'jinwoo', timestamp: '2024-01-15T10:51:00Z' }
    ],
    chae: [
      { id: 1, text: '¡Hey! ¿Viste las noticias sobre el nuevo dungeon?', sender: 'chae', timestamp: '2024-01-14T16:20:00Z' },
      { id: 2, text: 'Sí, parece peligroso. Rango S al menos', sender: 'me', timestamp: '2024-01-14T16:22:00Z' },
      { id: 3, text: 'Mi papá dice que es mejor evitarlo por ahora', sender: 'chae', timestamp: '2024-01-14T16:25:00Z' },
      { id: 4, text: 'Tu padre tiene razón. Es muy arriesgado', sender: 'me', timestamp: '2024-01-14T16:26:00Z' },
      { id: 5, text: 'Pero Jinwoo-oppa quiere investigarlo 😰', sender: 'chae', timestamp: '2024-01-14T16:28:00Z' },
      { id: 6, text: 'Él sabe lo que hace. Confía en él', sender: 'me', timestamp: '2024-01-14T16:30:00Z' },
      { id: 7, text: 'Tienes razón... Es el Shadow Monarch después de todo', sender: 'chae', timestamp: '2024-01-14T16:32:00Z' },
      { id: 8, text: 'Hoy fui a una raid de rango B con mi equipo', sender: 'chae', timestamp: '2024-01-14T16:35:00Z' },
      { id: 9, text: '¿Cómo te fue? ¿Algún problema?', sender: 'me', timestamp: '2024-01-14T16:36:00Z' },
      { id: 10, text: 'Los orcos rojos eran más fuertes de lo esperado', sender: 'chae', timestamp: '2024-01-14T16:37:00Z' },
      { id: 11, text: 'Tuve que usar mi "Sword Dance" al máximo', sender: 'chae', timestamp: '2024-01-14T16:38:00Z' },
      { id: 12, text: 'El jefe era un Orc Berserker con hachas gemelas', sender: 'chae', timestamp: '2024-01-14T16:39:00Z' },
      { id: 13, text: '¡Eso suena aterrador! ¿Te lastimaste?', sender: 'me', timestamp: '2024-01-14T16:40:00Z' },
      { id: 14, text: 'Solo un rasguño en el brazo, nada serio', sender: 'chae', timestamp: '2024-01-14T16:41:00Z' },
      { id: 15, text: 'Mi espada cortó sus hachas como mantequilla ⚔️', sender: 'chae', timestamp: '2024-01-14T16:42:00Z' },
      { id: 16, text: 'El equipo se sorprendió de mi velocidad', sender: 'chae', timestamp: '2024-01-14T16:43:00Z' },
      { id: 17, text: 'Eres increíble, Hae-In', sender: 'me', timestamp: '2024-01-14T16:44:00Z' },
      { id: 18, text: 'Pero aún no soy tan fuerte como Jinwoo-oppa', sender: 'chae', timestamp: '2024-01-14T16:45:00Z' },
      { id: 19, text: 'Cada uno tiene su propio poder único', sender: 'me', timestamp: '2024-01-14T16:46:00Z' }
    ],
    goojin: [
      { id: 1, text: 'Hunter, necesito que revises estos reportes', sender: 'goojin', timestamp: '2024-01-13T09:15:00Z' },
      { id: 2, text: 'Por supuesto, Presidente. ¿Algo urgente?', sender: 'me', timestamp: '2024-01-13T09:17:00Z' },
      { id: 3, text: 'Las actividades de monstruos han aumentado un 300%', sender: 'goojin', timestamp: '2024-01-13T09:18:00Z' },
      { id: 4, text: 'Esto no es normal. Algo grande se acerca', sender: 'goojin', timestamp: '2024-01-13T09:20:00Z' },
      { id: 5, text: '¿Crees que tiene que ver con las sombras?', sender: 'me', timestamp: '2024-01-13T09:22:00Z' },
      { id: 6, text: 'Es posible. Mantente alerta', sender: 'goojin', timestamp: '2024-01-13T09:24:00Z' },
      { id: 7, text: 'Ayer dirigí una raid de emergencia en Busan', sender: 'goojin', timestamp: '2024-01-13T09:26:00Z' },
      { id: 8, text: '¿Qué tipo de dungeon era?', sender: 'me', timestamp: '2024-01-13T09:27:00Z' },
      { id: 9, text: 'Un dungeon rojo que apareció de la nada', sender: 'goojin', timestamp: '2024-01-13T09:28:00Z' },
      { id: 10, text: 'Estaba lleno de dragones menores', sender: 'goojin', timestamp: '2024-01-13T09:29:00Z' },
      { id: 11, text: 'Tuve que usar mi "Authority" para controlarlos', sender: 'goojin', timestamp: '2024-01-13T09:30:00Z' },
      { id: 12, text: '¡Controlaste dragones! Increíble', sender: 'me', timestamp: '2024-01-13T09:31:00Z' },
      { id: 13, text: 'El boss era un Wyvern de tres cabezas', sender: 'goojin', timestamp: '2024-01-13T09:32:00Z' },
      { id: 14, text: 'Cada cabeza escupía un elemento diferente', sender: 'goojin', timestamp: '2024-01-13T09:33:00Z' },
      { id: 15, text: 'Fuego, hielo y veneno al mismo tiempo', sender: 'goojin', timestamp: '2024-01-13T09:34:00Z' },
      { id: 16, text: 'Fue la pelea más dura que he tenido', sender: 'goojin', timestamp: '2024-01-13T09:35:00Z' },
      { id: 17, text: '¿Cómo lograste vencerlo?', sender: 'me', timestamp: '2024-01-13T09:36:00Z' },
      { id: 18, text: 'Usé toda mi experiencia de 30 años como hunter', sender: 'goojin', timestamp: '2024-01-13T09:37:00Z' }
    ],
    thomas: [
      { id: 1, text: 'Korea\'s hunters are getting stronger', sender: 'thomas', timestamp: '2024-01-12T14:45:00Z' },
      { id: 2, text: 'Especially that Sung Jinwoo', sender: 'thomas', timestamp: '2024-01-12T14:46:00Z' },
      { id: 3, text: 'He\'s definitely not ordinary', sender: 'me', timestamp: '2024-01-12T14:48:00Z' },
      { id: 4, text: 'I need to test his real strength', sender: 'thomas', timestamp: '2024-01-12T14:50:00Z' },
      { id: 5, text: 'Be careful, Thomas. He\'s not what he seems', sender: 'me', timestamp: '2024-01-12T14:52:00Z' },
      { id: 6, text: 'That\'s exactly why I\'m interested', sender: 'thomas', timestamp: '2024-01-12T14:54:00Z' },
      { id: 7, text: 'Yesterday I cleared an S-rank dungeon in Nevada', sender: 'thomas', timestamp: '2024-01-12T14:56:00Z' },
      { id: 8, text: 'Alone? That\'s incredible even for you', sender: 'me', timestamp: '2024-01-12T14:57:00Z' },
      { id: 9, text: 'The dungeon was filled with Frost Giants', sender: 'thomas', timestamp: '2024-01-12T14:58:00Z' },
      { id: 10, text: 'Each one was 15 feet tall, pure muscle', sender: 'thomas', timestamp: '2024-01-12T14:59:00Z' },
      { id: 11, text: 'I fought 50 of them with my bare hands', sender: 'thomas', timestamp: '2024-01-12T15:00:00Z' },
      { id: 12, text: 'Your physical strength is unmatched', sender: 'me', timestamp: '2024-01-12T15:01:00Z' },
      { id: 13, text: 'The boss was an Ancient Frost King', sender: 'thomas', timestamp: '2024-01-12T15:02:00Z' },
      { id: 14, text: 'He had an ice crown and a massive club', sender: 'thomas', timestamp: '2024-01-12T15:03:00Z' },
      { id: 15, text: 'I crushed his club with one punch', sender: 'thomas', timestamp: '2024-01-12T15:04:00Z' },
      { id: 16, text: 'Then I grabbed him and threw him into the wall', sender: 'thomas', timestamp: '2024-01-12T15:05:00Z' },
      { id: 17, text: 'The entire dungeon shook from the impact', sender: 'thomas', timestamp: '2024-01-12T15:06:00Z' },
      { id: 18, text: 'But I wonder if Jinwoo could do the same', sender: 'thomas', timestamp: '2024-01-12T15:07:00Z' }
    ],
    igris: [
      { id: 1, text: 'Mi señor, las sombras están inquietas', sender: 'igris', timestamp: '2024-01-11T22:30:00Z' },
      { id: 2, text: '¿Qué han visto?', sender: 'me', timestamp: '2024-01-11T22:32:00Z' },
      { id: 3, text: 'Enemigos poderosos se acercan desde las profundidades', sender: 'igris', timestamp: '2024-01-11T22:33:00Z' },
      { id: 4, text: 'El ejército de sombras está listo para la batalla', sender: 'igris', timestamp: '2024-01-11T22:35:00Z' },
      { id: 5, text: 'Bien. Mantén la vigilancia', sender: 'me', timestamp: '2024-01-11T22:36:00Z' },
      { id: 6, text: 'Como ordene, mi señor', sender: 'igris', timestamp: '2024-01-11T22:37:00Z' },
      { id: 7, text: 'Hoy luchamos contra los caballeros de sangre', sender: 'igris', timestamp: '2024-01-11T22:40:00Z' },
      { id: 8, text: '¿En qué dungeon?', sender: 'me', timestamp: '2024-01-11T22:41:00Z' },
      { id: 9, text: 'El castillo carmesí que emergió en el Mar del Este', sender: 'igris', timestamp: '2024-01-11T22:42:00Z' },
      { id: 10, text: 'Era un dungeon de rango S lleno de vampiros', sender: 'igris', timestamp: '2024-01-11T22:43:00Z' },
      { id: 11, text: 'Dirigí a 100 sombras soldados al combate', sender: 'igris', timestamp: '2024-01-11T22:44:00Z' },
      { id: 12, text: 'Impresionante. ¿Cómo fue la batalla?', sender: 'me', timestamp: '2024-01-11T22:45:00Z' },
      { id: 13, text: 'El lord vampiro tenía una armadura de sangre', sender: 'igris', timestamp: '2024-01-11T22:46:00Z' },
      { id: 14, text: 'Su espada podía drenar la vida de los enemigos', sender: 'igris', timestamp: '2024-01-11T22:47:00Z' },
      { id: 15, text: 'Pero mi hoja sombría cortó su magia', sender: 'igris', timestamp: '2024-01-11T22:48:00Z' },
      { id: 16, text: 'Lo derroté en un duelo de caballeros', sender: 'igris', timestamp: '2024-01-11T22:49:00Z' },
      { id: 17, text: 'Excelente trabajo, Igris', sender: 'me', timestamp: '2024-01-11T22:50:00Z' },
      { id: 18, text: 'Todo por la gloria del Shadow Monarch', sender: 'igris', timestamp: '2024-01-11T22:51:00Z' }
    ]
  },
  currentUser: 'me'
}

function chatReducer(state, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.contactId]: [
            ...(state.messages[action.payload.contactId] || []),
            {
              id: Date.now(),
              text: action.payload.message,
              sender: state.currentUser,
              timestamp: new Date().toISOString()
            }
          ]
        }
      }
    
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.contactId]: [
            ...(state.messages[action.payload.contactId] || []),
            {
              id: Date.now(),
              text: action.payload.message,
              sender: action.payload.contactId,
              timestamp: new Date().toISOString()
            }
          ]
        }
      }
    
    default:
      return state
  }
}

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  const sendMessage = (contactId, message) => {
    dispatch({
      type: 'SEND_MESSAGE',
      payload: { contactId, message }
    })
  }

  const value = {
    messages: state.messages,
    currentUser: state.currentUser,
    sendMessage
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat debe ser usado dentro de ChatProvider')
  }
  return context
}