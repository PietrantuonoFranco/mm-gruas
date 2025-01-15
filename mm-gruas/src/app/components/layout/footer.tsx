'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../../public/logo-blanco.png"
import { Phone, MapPin, Linkedin, Github, Mail } from 'lucide-react'
import WhatsApp from "../whatsAppIcon"

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
          <p className="text-gray-500 py-1 font-medium">Grúas y remolques para autos, motos, camionetas y utilitarios.</p>
        </div>
        <div className="flex flex-col justify-start text-center">
          <h3 className="text-xl mb-4">Contacto</h3>
          <ul className="list-none p-0 space-y-2">
              <li>
              <h4 className="text-lg mb-1 flex justify-center items-center gap-x-1"><Phone className="inline" size={18}/>Teléfono</h4>
                <Link
                  href="tel:+5492244462235"
                  className="text-gray-500 py-1 font-medium relative group hover:text-gray-700"
                >
                  +54 9 2244 46-2235
                </Link>
              </li>
              <li>
              <h4 className="text-lg mb-1 flex justify-center items-center gap-x-1"><MapPin className="inline" size={18}/>Ubicación</h4>
                <Link
                  href="/"
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
          <Linkedin size={18}/>
        </Link>
        <Link
          href="https://github.com/PietrantuonoFranco"
          className="inline text-gray-300"
          target="_blank"
        >
          <Github size={18}/>
        </Link>
        <Link
          href="mailto:francopietrantuono999@gmail.com"
          className="inline text-gray-300"
          target="_blank"
        >
          <Mail size={18}/>
        </Link>
        <Link
          href="tel:+5492241470878"
          className="inline text-gray-300"
          target="_blank"
        >
          <WhatsApp circle={18} phone={8}/>
        </Link>
      </div>
    </footer>
  );
};