import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


console.log ("hello")
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)