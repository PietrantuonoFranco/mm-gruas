import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './components/layout/footer/footer.tsx'
import Header from './components/layout/header/header.tsx'
import WhatsApp from './components/layout/whatsApp/whatsApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <WhatsApp />
    <Footer />
  </StrictMode>,
)
