'use client';

import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import logo from "./assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const element = document.getElementById(id); // Obtiene el elemento por su ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  const handleClick = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Cierra el menú después de hacer clic
  };

  return (
    <header className="sticky w-full top-0 z-50 bg-white shadow-md">
      <nav>
        <div className="container mx-auto px-8 sm:px-6">
          <div className="flex items-center justify-between sm:justify-around h-18">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center h-16">
              <a href="/" className="cursor-pointer h-full p-1 flex items-center">
                <img src={logo} alt="MM Grúas Logo" className="h-full w-auto" />
              </a>
            </div>

            {/* Navigation elements */}
            <div className="text-center hidden md:flex text-black text-sm font-semibold">
              <div className="flex items-baseline space-x-8 justify-center">
                <a
                  href="#nosotros"
                  className="px-1 py-1 font-large relative group hover:text-gray-700 drop-shadow-md"
                  onClick={(e) => handleSmoothScroll(e, 'nosotros')}
                >
                  Nosotros
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-90"></span>
                </a>

                <a
                  href="#servicios"
                  className="px-1 py-1 font-large relative group hover:text-gray-700 drop-shadow-md"
                  onClick={(e) => handleSmoothScroll(e, 'servicios')}
                >
                  Servicios
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-90"></span>
                </a>

                <a
                  href="#galeria"
                  className="px-1 py-1 font-large relative group hover:text-gray-700 drop-shadow-md"
                  onClick={(e) => handleSmoothScroll(e, 'galeria')}
                >
                  Galería
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-90"></span>
                </a>

                <a
                  href="#contacto"
                  className="px-1 py-1 font-large relative group hover:text-gray-700 drop-shadow-md"
                  onClick={(e) => handleSmoothScroll(e, 'contacto')}
                >
                  Contacto
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-90"></span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F4AF00]"
              >
                {isOpen ? (
                  <FontAwesomeIcon icon={faX} className="text-lg" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="text-lg" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 bg-white shadow-lg text-center text-black">
                <a
                  href="#nosotros"
                  className="hover:text-gray-700 hover:font-bold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => handleClick('nosotros')}
                >
                  Nosotros
                </a>

                <a
                  href="#servicios"
                  className="hover:text-gray-700 hover:font-bold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => handleClick('servicios')}
                >
                  Servicios
                </a>

                <a
                  href="#galeria"
                  className="hover:text-gray-700 hover:font-bold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => handleClick('galeria')}
                >
                  Galería
                </a>

                <a
                  href="#contacto"
                  className="hover:text-gray-700 hover:font-bold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => handleClick('contacto')}
                >
                  Contacto
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}