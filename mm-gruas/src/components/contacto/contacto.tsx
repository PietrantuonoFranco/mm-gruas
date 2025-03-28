'use client'

import { motion } from "framer-motion"
import ContactButton from "../contactButton/contactButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Formulario from './components/form/form';

export default function Contacto() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="contacto" className="w-full gap-y-6 px-10 lg:px-56 scroll-mt-[85px] text-black text-center space-y-3">
      <p className="inline-block flex font-semibold text-[#F4AF00] py-1 px-4 bg-[#222] rounded-3xl shadow-md">
        <span className="pr-2 font-bold">•</span>Contacto<span className="pl-2 font-bold">•</span>
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-8">
      <motion.div  
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }} 
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d12909.680473705863!2d-59.112888!3d-36.010033!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDAwJzQwLjYiUyA1OcKwMDYnNDIuOSJX!5e0!3m2!1ses-419!2sar!4v1740777228160!5m2!1ses-419!2sar"
            title="Mapa mostrando la ubicación de nuestro lugar de atención."
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full shadow-sm">
          </iframe>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }} 
          className="text-black space-y-4 md:text-left text-center"
        >
          <div className="space-y-2">
            <h2 className="font-bold text-4xl [text-shadow:0px_1px_2px_rgba(0,0,0,1)]">Información de contacto</h2>

            <p className="">En MM Grúas estamos disponibles para atenderte en cualquier momento del día. Nuestro servicio de grúas cubre Las Flores y alrededores, ofreciendo una respuesta rápida y eficiente para emergencia o traslados programados.</p>

            <p className="">Además, contamos con canales de atención para brindarte toda la información que necesites.</p>

            <p className="">¡Estamos aquí para ayudarte!</p>
          </div>
          
          <div className="space-y-3">
            <ul className="list-none p-0 space-y-4 text-center md:text-left">
              <li>
                <h3 className="text-lg mb-1 flex items-center md:justify-start justify-center gap-x-2"><FontAwesomeIcon icon={faLocationDot} className="inline text-md"/>Ubicación</h3>
                  <a
                    href="https://www.google.com/maps?q=-36.011277, -59.111919"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#483EBB] hover:text-[#362D95] hover:text-shadow-md text-center py-1 font-medium mb-2"
                  >
                    Moreno esq. R. Vera, Las Flores, Pcia. de Buenos Aires
                  </a>
              </li>
          
              <li>
                <h3 className="text-lg mb-1 flex items-center md:justify-start justify-center gap-x-2">
                  <FontAwesomeIcon icon={faClock} className="inline text-md"/>Horario de atención (en la sede)
                </h3>
                <p className="text-gray-500 py-1">9:00 a 17:00hs</p>
              </li>

              <li>
                <div>
                  <h3 className="text-lg mb-1 flex items-center md:justify-start justify-center gap-x-2"><FontAwesomeIcon icon={faPhone} className="inline text-sm"/>Teléfono</h3>
                    <a
                      href="tel:+5492244462235"
                      className="text-[#483EBB] hover:text-[#362D95] hover:text-shadow-md py-1 font-medium"
                    >
                      +54 9 2244 46-2235
                    </a>
                </div>

                <div className="grid grid-cols-1 w-full mt-6 gap-y-6 justify-items-center text-white">
                  <ContactButton type="Llamar" justify=""/>
                  <ContactButton type="WhatsApp" justify=""/>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <h2 className="mt-12 mb-8 font-bold text-4xl text-center [text-shadow:0px_1px_2px_rgba(0,0,0,1)]">Envianos tu consulta</h2>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }} 
        className='mb-4 p-8 md:py-10 md:px-14 rounded-3xl  shadow-lg bg-gray-50'
      >
        <Formulario />
      </motion.div>
    </section>
  );
}