import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormApp from './FormApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormApp/>
    
  </StrictMode>,
)
