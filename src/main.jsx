import './index.css'
import { App } from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

if (__IS_STAGING__) {
  console.log(`Aplicación ejecutándose en modo preproducción`)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
