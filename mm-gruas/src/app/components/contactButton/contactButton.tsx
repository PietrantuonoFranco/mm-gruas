'use client'

import { useRouter } from "next/navigation"
import { Phone } from "lucide-react"
import WhatsApp from "../whatsAppIcon"

type Parameters = {
  type: string,
  justify: string
}

const ContactButton: React.FC<Parameters> = ({ type, justify }) => {
  const router = useRouter();
      
  const handleClick = ( url:string ) => {
    router.push(url);
  }

  return (
    <>
      <button
        onClick={() => handleClick('tel:+5492244462235')}
        className={`flex gap-x-2 p-3 w-[70%] lg:w-[45%] rounded-3xl justify-center items-center shadow-md hover:shadow-lg ${
          type === "Llamar" 
            ? "bg-[#F4AF00] hover:bg-[#C69104]" 
            : "bg-green-500 hover:bg-green-600"
        } ${
          justify !== "" 
            ? "lg:justify-self-" + justify
            : ""
        }`}
      >
        <div className="flex justify-center items-center gap-2">
          {type === "Llamar" && (
            <>
              <Phone size={20} />
              Llamar
            </>
          )}

          {type === "WhatsApp" && (
            <>
              <WhatsApp circle={24} phone={11} />
              WhatsApp
            </>
          )}
        </div>
      </button>
    </>
  );
}

export default ContactButton;