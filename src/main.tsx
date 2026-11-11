import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// busca el div llamado root y pinta dentro mi app
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
})
