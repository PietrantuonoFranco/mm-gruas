import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Footer from './components/layout/footer/footer.tsx'
import Header from './components/layout/header/header.tsx'
import WhatsApp from './components/layout/whatsApp/whatsApp.tsx'
import NotFoundPage from "./components/notFoundPage/notFoundPage";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        {/* Ruta comodín para la página 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    <WhatsApp />
    <Footer />
  </StrictMode>,
)
