'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

type ContactButtonProps = {
  type: string;
  justify: string;
};

const ContactButton: React.FC<ContactButtonProps> = ({ type, justify }) => {

  const handleClickLlamar = (telefono: string) => {
    window.location.href = `tel:${telefono}`;
  };
  
  const handleClickWhatsApp = (phoneNumber: string) => {
    const message = "¡Hola! Quiero hacer una consulta.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        onClick={() => {type === "Llamar" ? handleClickLlamar('+5492244462235') : handleClickWhatsApp("5492244462235")}}
        className={`flex gap-x-2 p-3 w-[70%] lg:w-[45%] rounded-3xl justify-center items-center shadow-md hover:shadow-lg ${
          type === "Llamar" ? "bg-[#F4AF00]" : "bg-green-500" } ${ justify } cursor-pointer transition-transform transform hover:scale-110`}
      >
        <div className="flex justify-center items-center gap-1 font-medium">
          {type === "Llamar" && (
            <>
              <FontAwesomeIcon icon={faPhone}/>
              Llamar
            </>
          )}

          {type === "WhatsApp" && (
            <>
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl"/>
              WhatsApp
            </>
          )}
        </div>
      </button>
    </>
  );
}

export default ContactButton;