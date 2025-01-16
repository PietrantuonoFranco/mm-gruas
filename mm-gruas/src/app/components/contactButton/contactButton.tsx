'use client'

import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"


type Parameters = {
  type: string,
  justify: string
}

const ContactButton: React.FC<Parameters> = ({ type, justify }) => {

  const router = useRouter();
      
  const handleClickLlamar = ( url:string ) => {
    router.push(url);
  }

  const handleClickWhatsApp = () => {
    const phoneNumber = "5492244462235";
    const message = "¡Hola! Quiero hacer una consulta.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  console.log (justify);

  return (
    <>
      <button
        onClick={() => {type === "Llamar" ? handleClickLlamar('tel:+5492244462235') : handleClickWhatsApp()}}
        className={`flex gap-x-2 p-3 w-[70%] lg:w-[45%] rounded-3xl justify-center items-center shadow-md hover:shadow-lg ${
          type === "Llamar" 
            ? "bg-[#F4AF00] hover:bg-[#C69104]" 
            : "bg-green-500 hover:bg-green-600"
        } ${ justify } cursor-pointer transition-transform transform hover:scale-110`}
      >
        <div className="flex justify-center items-center gap-2">
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