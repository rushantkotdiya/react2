import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EmailValidationForm from './Email'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailValidationForm />
  </StrictMode>,
)
