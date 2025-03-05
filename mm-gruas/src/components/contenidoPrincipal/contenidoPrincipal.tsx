'use client'

import { motion } from "framer-motion"
import background from "./assets/background.webp";
import ContactButton from "../contactButton/contactButton";

export default function ContenidoPrincipal() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      <section id="principal" className="w-full scroll-mt-[100px]">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex flex-col items-center w-full py-16 md:py-32"
        >
          {/* Imagen de fondo */}
          <img
            src={background}
            alt="Fondo de grúas"
            className="z-0 absolute inset-0 w-full h-full object-cover"
          />

          {/* Capa de blur y superposición */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px] z-10"></div>
          {/* Contenido */}
          <div className="relative z-20 w-4/5 md:w-1/2 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-6 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">GRÚAS EN LAS FLORES LAS 24HS</h1>
            <p className="text-md [text-shadow:2px_2px_4px_rgba(0,0,0,1)]">
              En MM Grúas brindamos servicios de grúas a todo el país con sede en Las Flores. Trasladamos motos, autos, camionetas, utilitarios y maquinaria agrícola.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 w-full mt-6 gap-y-6 justify-items-center lg:justify-items-start">
              <ContactButton type="Llamar" justify="lg:justify-self-end"/>
              <ContactButton type="WhatsApp" justify=""/>
            </div>
          </div>
          </motion.div>
      </section>
    </>
  );
}