import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FromApp from './FormApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FromApp />
  </StrictMode>,
)
