import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ChatProvider } from './context/ChatContext'
import { ThemeProvider } from './context/ThemeContext'
import Main from './pages/Main/Main'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<Navigate to="/contacts" replace />} />
              <Route path="/contacts" element={<Main />} />
              <Route path="/chat/:contactId" element={<Main />} />
            </Routes>
          </div>
        </Router>
      </ChatProvider>
    </ThemeProvider>
  )
}

export default App
