import Image from "next/image";
import Background from "../../../../public/background.jpeg"
import ContactButton from "../contactButton/contactButton";

export default function ContenidoPrincipal() {
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
            <ContactButton type="Llamar"/>
            <ContactButton type="WhatsApp"/>
          </div>
        </div>
        </div>
    </section>
  );
}