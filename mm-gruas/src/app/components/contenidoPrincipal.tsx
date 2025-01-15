'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Phone } from "lucide-react"
import WhatsApp from "./whatsAppIcon"
import Background from "../../../public/background.jpeg"

export default function ContenidoPrincipal() {
  const router = useRouter();
    
  const handleClick = ( url:string ) => {
    router.push(url);
  }

  return (
    <section id="principal" className="w-full">
      <div className="relative flex flex-col items-center w-full py-16 md:py-32">
        {/* Imagen de fondo */}
        <Image
          src={Background}
          alt="Fondo de grúas"
          layout="fill"
          objectFit="cover"
          className="z-0 relative top-8"
        />

        {/* Capa de blur y superposición */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>
        {/* Contenido */}
        <div className="relative z-20 w-4/5 md:w-1/2 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-6">GRÚAS LAS 24HS</h1>
          <p className="text-md">
            En MM Grúas brindamos servicios de grúas a todo el país con sede en Las Flores. Trasladamos motos, autos, camionetas y utilitarios.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 w-full mt-6 gap-y-6 justify-items-center lg:justify-items-start">
            <button
              onClick={() => handleClick('tel:+5492244462235')}
              className="flex lg:justify-self-end gap-x-2 p-3 w-[70%] lg:w-[45%] rounded-3xl justify-center items-center shadow-md bg-[#F4AF00] hover:shadow-lg hover:bg-[#C69104]"
            >
              <div className="flex justify-center items-center gap-2">
                <Phone size={20} />
                Teléfono
              </div>
            </button>
            <button
              onClick={() => handleClick('tel:+5492244462235')}
              className="flex p-3 w-[70%] lg:w-[45%] rounded-3xl justify-center items-center shadow-md bg-green-500 hover:shadow-lg hover:bg-green-600"
            >
              <div className="flex justify-center items-center gap-2">
                <WhatsApp circle={24} phone={11} />
                WhatsApp
              </div>
            </button>
          </div>
        </div>
        </div>
    </section>
  );
}