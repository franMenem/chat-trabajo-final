# Chat App Frontend 💬

Una aplicación de chat estilo WhatsApp desarrollada en React para trabajo final de frontend.

## 🚀 Descripción del Desafío

Este proyecto implementa una aplicación web de chat funcional que replica las características básicas de WhatsApp, cumpliendo con todos los requisitos del trabajo final:

- ✅ Aplicación completamente responsiva (320px - 2000px)
- ✅ Desarrollada en React con Vite
- ✅ Enrutamiento con React Router
- ✅ Estados y Context API
- ✅ Formularios funcionales
- ✅ Componentes reutilizables
- ✅ Estilos accesibles
- ✅ Desplegada en Vercel

## 🛠️ Tecnologías y Librerías Utilizadas

### Core
- **React 19.1.0** - Biblioteca principal para la UI
- **React Router DOM 7.7.1** - Manejo de rutas y navegación
- **Vite 7.0.4** - Herramienta de build y desarrollo

### Desarrollo
- **ESLint** - Linting de código
- **CSS Modules** - Estilos componentes

### Arquitectura
- **Context API** - Manejo de estado global
- **Custom Hooks** - Lógica reutilizable
- **Componentes funcionales** - Patrón moderno de React

## 📱 Características Implementadas

### Funcionalidades Principales
- **Lista de contactos** con últimos mensajes
- **Chat en tiempo real** con interfaz similar a WhatsApp
- **Envío de mensajes** con formulario validado
- **Navegación fluida** entre contactos y chats
- **Diseño responsivo** adaptable a todos los dispositivos

### Características Técnicas
- **Enrutamiento dinámico** (`/chat/:contactId`)
- **Estado persistente** con Context API
- **Componentes reutilizables** con estructura modular
- **Estilos accesibles** con soporte para temas oscuros
- **Optimización de rendimiento** con React hooks

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── MessageForm/     # Formulario de envío de mensajes
│   │   ├── MessageForm.jsx
│   │   └── MessageForm.css
│   └── MessageList/     # Lista de mensajes del chat
│       ├── MessageList.jsx
│       └── MessageList.css
├── pages/              # Páginas principales
│   ├── Chat/           # Página del chat individual
│   │   ├── Chat.jsx
│   │   └── Chat.css
│   └── Contacts/       # Página de lista de contactos
│       ├── Contacts.jsx
│       └── Contacts.css
├── context/            # Context API para estado global
│   └── ChatContext.jsx
├── utils/              # Funciones auxiliares
├── App.jsx             # Componente principal
├── App.css             # Estilos globales de la app
├── index.css           # Estilos base y variables CSS
└── main.jsx            # Punto de entrada
```

## 🎯 Requisitos Cumplidos

### Obligatorios ✅
- [x] **React** - Desarrollado completamente en React
- [x] **Estados** - `useState` y Context API implementados
- [x] **React Router** - Enrutamiento completo con parámetros
- [x] **Responsivo** - 320px a 2000px con breakpoints
- [x] **Formulario** - Formulario de envío de mensajes funcional
- [x] **Componentes** - Arquitectura basada en componentes
- [x] **2+ páginas** - Contacts y Chat implementadas
- [x] **Parámetros de búsqueda** - `/chat/:contactId` implementado
- [x] **Estilos accesibles** - Contrastes y focus states adecuados

### Opcionales/Valorados ✅
- [x] **Context API** - Implementado para estado global
- [x] **Calidad de código** - Principios DRY, KISS, YAGNI
- [x] **README.md** - Documentación completa

## 🚧 Dificultades Presentadas

### 1. **Manejo de Estados**
Compartir el estado de mensajes entre múltiples componentes.

### 2. **Responsividad**
Mantener usabilidad en el rango amplio de 320px-2000px.
