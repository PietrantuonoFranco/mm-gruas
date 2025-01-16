import Link from "next/link"
import ContactButton from "../contactButton/contactButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Contacto() {
  return (
    <section id="contacto" className="w-full gap-y-6 px-16 lg:px-56 scroll-mt-16 text-black">
      <h4 className="font-bold text-[#FFCA3A] text-shadow-xl text-center mb-4">Contacto</h4>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-8">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3227.3701225841623!2d-59.11378980963016!3d-36.01125416316514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDAwJzQwLjYiUyA1OcKwMDYnNDIuOSJX!5e0!3m2!1ses-419!2sar!4v1736972419406!5m2!1ses-419!2sar" 
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
            ></iframe>
        </div>

        <div className="text-black space-y-4 md:text-left text-center">
          <div className="space-y-2">
            <h2 className="font-bold text-4xl">Información de contacto</h2>

            <p className="">En MM Grúas estamos disponibles para atenderte en cualquier momento del día. Nuestro servicio de grúas cubre Las Flores y alrededores, ofreciendo una respuesta rápida y eficiente para emergencia o traslados programados.</p>

            <p className="">Además, contamos con canales de atención para brindarte toda la información que necesites.</p>

            <p className="">¡Estamos aquí para ayudarte!</p>
          </div>
          
          <div className="space-y-3">
            <ul className="list-none p-0 space-y-4 text-center md:text-left">
              <li>
                <h4 className="text-lg mb-1 flex items-center md:justify-start justify-center gap-x-2"><FontAwesomeIcon icon={faLocationDot} className="inline text-md"/>Ubicación</h4>
                <Link
                  href="https://www.google.com/maps?q=-36.011277, -59.111919"
                  target="_blank"
                  className="text-gray-500 text-center py-1 font-medium hover:text-gray-700 mb-2"
                >
                  Moreno esq. R. Vera, Las Flores, Pcia. de Buenos Aires
                </Link>
              </li>

              <li>
                <h4 className="text-lg mb-1 flex items-center md:justify-start justify-center gap-x-2"><FontAwesomeIcon icon={faClock} className="inline text-md"/>Horario de atención (en la sede)</h4>
                <p className="text-gray-500 py-1">9:00 a 17:00hs</p>
              </li>

              <li>
                <div>
                  <h4 className="text-lg mb-1 flex items-center md:justify-start justify-center gap-x-2"><FontAwesomeIcon icon={faPhone} className="inline text-sm"/>Teléfono</h4>
                  <Link
                    href="tel:+5492244462235"
                    className="text-gray-500 py-1 font-medium hover:text-gray-700"
                  >
                    +54 9 2244 46-2235
                  </Link>
                </div>

                <div className="grid grid-cols-1 w-full mt-6 gap-y-6 justify-items-center text-white">
                  <ContactButton type="Llamar" justify=""/>
                  <ContactButton type="WhatsApp" justify=""/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}