'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function WhatsApp () {
  const handleClick = () => {
    const phoneNumber = "5492244462235";
    const message = "¡Hola! Quiero hacer una consulta.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="button"
      aria-label="Enviar un WhatsApp"
      onClick={handleClick}
      className="z-100 fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 w-16 h-16 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-4xl"/>
    </div>
  );
}