'use client'

import { useRouter } from "next/navigation";
import { Phone } from "lucide-react"
import WhatsApp from "./whatsAppIcon"

export default function Nosotros() {
    const router = useRouter();
    
    const handleClick = ( url:string ) => {
      router.push(url);
    }

    return (
        <section id="nosotros" className="w-full">
          <div className="relative flex flex-col items-center bg-cover bg-center w-full py-16 md:py-32" style={{ backgroundImage: "url('https://www.cronista.com/files/image/516/516370/640c4bab6de22.jpg')" }}>
          {/* Pseudo elemento para el blur */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0 min-h-screen"></div>
            <div className="relative z-10 w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold mb-6 text-center">GRUAS LAS 24HS</h1>
              <p className="text-md text-center">En MM Grúas brindamos servicios de grúas a todo el país con sede en Las Flores. Trasladamos motos, autos, camionetas y utilitarios.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 w-full mt-6 gap-y-6 justify-items-center lg:justify-items-start">
                <button
                  onClick={() => {handleClick("tel:+5492244462235")}}
                  className="flex lg:justify-self-end gap-x- p-3 w-[70%] lg:w-[45%] justify-evenly rounded-3xl items-center shadow-md bg-[#F4AF00] hover:shadow-lg hover:bg-[#C69104]"
                >
                  <Phone size={20}/>
                  Telefono
                </button>
                <button
                  onClick={() => {handleClick("tel:+5492244462235")}}
                  className="flex p-3 w-[70%] lg:w-[45%] justify-evenly rounded-3xl items-center shadow-md bg-green-500 hover:shadow-lg hover:bg-green-600"
                >
                  <WhatsApp circle={24} phone={11}/>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
    );
}