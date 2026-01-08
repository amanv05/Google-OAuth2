import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <GoogleOAuthProvider clientId='877721332320-hk9o5vml1behatfilpt646l77tsqnuu0.apps.googleusercontent.com'>
  <App />
  </GoogleOAuthProvider>
  </StrictMode>,
)
