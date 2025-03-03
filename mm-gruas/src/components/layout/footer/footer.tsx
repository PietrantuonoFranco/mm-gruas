'use client'

import logo from "../../../assets/logo-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"


export default function Footer() {
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const element = document.getElementById(id); // Obtiene el elemento por su ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <footer className="flex shadow-lg flex-col justify-center items-center bg-[#222222] shadow-black p-2.5 sm:px-12 text-[#edf2efbb]">
      <div className="mt-5 w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col items-center text-center">
          <div className="w-24">
            <a href="/">
              <img
                src={logo}
                alt="MM Grúas Logo"
                className="w-full"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start text-center">
          <h3 className="text-xl mb-4">Empresa</h3>
          <nav>
            <ul className="list-none p-0 space-y-2">
              <li>
                <a href="#nosotros"
                  className="text-[#7267ED] py-1 font-medium relative group hover:text-[#5D50E8]"
                  onClick={(e) => handleSmoothScroll(e, 'nosotros')}
                >
                  Nosotros
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-[#7267ED] py-1 font-medium relative group hover:text-[#5D50E8]"
                  onClick={(e) => handleSmoothScroll(e, 'servicios')}
                >
                  Servicios
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-[#7267ED] py-1 font-medium relative group hover:text-[#5D50E8]"
                  onClick={(e) => handleSmoothScroll(e, 'contacto')}
                >
                  Contacto
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-700 scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
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
              <a
                href="tel:+5492244462235"
                className="text-[#7267ED] py-1 font-medium relative group hover:text-[#5D50E8]"
              >
                +54 9 2244 46-2235      
              </a>
            </li>
            <li>
              <h4 className="text-lg mb-1 flex justify-center items-center gap-x-1"><FontAwesomeIcon icon={faLocationDot} className="inline"/>Ubicación</h4>              
              <a
                href="https://www.google.com/maps?q=-36.011277, -59.111919"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7267ED] py-1 font-medium relative group hover:text-[#5D50E8]"
              >
                Moreno esq. R. Vera, Las Flores, Pcia. de Buenos Aires
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 mb-4 w-full text-center text-white flex flex-col sm:flex-row justify-center items-center">
        <p className="text-gray-300 my-2">Copyright © 2025 MM Grúas</p>
         
        <div className="block sm:hidden w-[90%] h-[2px] bg-gray-600 my-4 justify-center"></div>
        <p className="text-gray-300 m-2 hidden sm:inline">|</p>

        <p className="text-gray-300 my-2">Designed by Pietrantuono Franco</p>


        <div className="px-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/franco-pietrantuono-a43a8a345/"
            className="inline text-gray-300 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a
            href="https://github.com/PietrantuonoFranco"
            className="inline text-gray-300 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a
            href="mailto:francopietrantuono999@gmail.com"
            className="inline text-gray-300 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope}/>
          </a>
        </div>
      </div>
    </footer>
  );
};