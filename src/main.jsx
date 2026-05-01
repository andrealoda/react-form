import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Supports weights 100-800
import '@fontsource-variable/jetbrains-mono/wght.css';
// Supports weights 100-900
import '@fontsource-variable/geist-mono/wght.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
