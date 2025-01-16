'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../../../public/logo-blanco.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"


export default function Footer() {
  
  return (
    <footer className="flex shadow-lg flex-col justify-center items-center bg-[#222222] shadow-black p-2.5 sm:px-12 text-[#edf2efbb]">
      <div className="mt-5 w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col items-center text-center">
          <div className="w-24">
            <Link href="/">
              <Image
                src={Logo}
                alt="MM Grúas Logo"
                className="w-full"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start text-center">
          <h3 className="text-xl mb-4">Empresa</h3>
          <nav>
            <ul className="list-none p-0 space-y-2">
              <li>
                <Link
                  href="/#nosotros"
                  className="text-gray-500 py-1 font-medium relative group hover:text-gray-700"
                >
                  Nosotros
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-gray-500 py-1 font-medium relative group hover:text-gray-700"
                >
                  Servicios
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-gray-500 py-1 font-medium relative group hover:text-gray-700"
                >
                  Contacto
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-start text-center">
          <h3 className="text-xl mb-4">Servicios</h3>
          <p className="text-gray-500 py-1 font-medium">Grúas y remolques para autos, motos, camionetas, utilitarios y maquinaria agrícola.</p>
        </div>
        <div className="flex flex-col justify-start text-center">
          <h3 className="text-xl mb-4">Contacto</h3>
          <ul className="list-none p-0 space-y-2">
              <li>
              <h4 className="text-lg mb-1 flex justify-center items-center gap-x-1"><FontAwesomeIcon icon={faPhone} className="inline text-md"/>Teléfono</h4>
                <Link
                  href="tel:+5492244462235"
                  className="text-gray-500 py-1 font-medium relative group hover:text-gray-700"
                >
                  +54 9 2244 46-2235
                </Link>
              </li>
              <li>
              <h4 className="text-lg mb-1 flex justify-center items-center gap-x-1"><FontAwesomeIcon icon={faLocationDot} className="inline"/>Ubicación</h4>
                <Link
                  href="https://www.google.com/maps?q=-36.011277, -59.111919"
                  target="_blank"
                  className="text-gray-500 py-1 font-medium relative group hover:text-gray-700"
                >
                  Moreno esq. R. Vera, Las Flores, Pcia. de Buenos Aires
                </Link>
              </li>
            </ul>
        </div>
      </div>

      <div className="mt-6 w-full text-center text-white flex justify-center items-center gap-x-4">
        <p className="text-gray-300 my-2">Copyright © 2025 MM Grúas | Designed by Pietrantuono Franco</p>

        <Link
          href="https://www.linkedin.com/in/franco-pietrantuono-a43a8a345/"
          className="inline text-gray-300"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin}/>
        </Link>
        <Link
          href="https://github.com/PietrantuonoFranco"
          className="inline text-gray-300"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub}/>
        </Link>
        <Link
          href="mailto:francopietrantuono999@gmail.com"
          className="inline text-gray-300"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope}/>
        </Link>
        <Link
          href="tel:+5492241470878"
          className="inline text-gray-300"
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsapp}/>
        </Link>
      </div>
    </footer>
  );
};