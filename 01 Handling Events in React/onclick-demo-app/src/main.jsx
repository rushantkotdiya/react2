import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OnClickApp from './OnClickApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OnClickApp />
  </StrictMode>,
)
