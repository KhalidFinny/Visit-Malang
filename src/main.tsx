import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts.css'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { TripProvider } from './context/TripContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TripProvider>
        <App />
      </TripProvider>
    </BrowserRouter>
  </StrictMode>,
)