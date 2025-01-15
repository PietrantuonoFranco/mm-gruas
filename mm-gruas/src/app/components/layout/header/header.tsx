'use client';

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X} from 'lucide-react'
import Link from "next/link"
import Logo from "../../../../../public/logo.png"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleClick = (page: string) =>{
    router.push(page);
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky w-[100%] top-0 z-50 bg-white shadow-md">
      <nav>
        <div className="container mx-auto px-8 sm:px-6">
          <div className="flex items-center justify-between sm:justify-around h-16">
            {/* Logo */}
            <div className="flex-shrink-1 h-full">
              <div
                onClick={() => handleClick("/")} 
                className="cursor-pointer h-full p-1"
              >
                <Image
                  src={Logo}
                  alt="MM Grúas Logo"
                  className="cover h-full w-auto"
                />
              </div>
            </div>

            {/* Navigation elements */}
            <div className="text-center hidden md:flex text-black text-sm text-bold">
              <div className="flex items-baseline space-x-8 justify-center">
                <Link
                  href="/#nosotros"
                  className="px-1 py-1 font-medium relative group"
                >
                  Nosotros
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  </Link>
                  <Link
                  href="/#servicios"
                  className="px-1 py-1 font-medium relative group"
                >
                  Servicios
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  </Link>
                  <Link
                  href="/#contacto"
                  className="px-1 py-1 font-medium relative group"
                >
                  Contacto
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#F42F00] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F4AF00]"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 bg-white shadow-lg text-center text-black">
              <Link
                href="/#nosotros"
                className="hover:text-gray-700 hover:font-bold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/#servicios"
                className="hover:text-gray-700 hover:font-bold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/#contacto"
                className="hover:text-gray-700 hover:font-bold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </header>
  );
}