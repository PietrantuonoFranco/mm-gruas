'use client'

import { motion } from "framer-motion"
import Servicio from "./components/servicio";

export default function Servicios() {
  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.05
      }
    }
  };

  return (
    <section id="servicios" className="w-full gap-y-6 px-10 lg:px-56 scroll-mt-[100px] text-center text-black space-y-3">
      <p className="inline-block flex font-semibold text-[#F4AF00] py-1 px-4 bg-[#222] rounded-3xl shadow-md">
        <span className="pr-2 font-bold">•</span>Nuestros servicios<span className="pl-2 font-bold">•</span>
      </p>

      <h2 className="font-bold text-4xl mb-3 [text-shadow:0px_1px_2px_rgba(0,0,0,1)]">Conocé nuestros servicios</h2>
      
      <p className="mb-3">Ya sea para emergencias o traslados planificados, ofrecemos un servicio confiable, ágil y seguro, adaptado a tus necesidades.</p>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.2 }} 
        className="grid lg:grid-cols-5 grid-cols-1 gap-y-8 gap-x-6 mb-8 items-start"
      >
        <Servicio title="Autos" service="Grúas y remolques"/>

        <Servicio title="Camionetas" service="Grúas y remolques"/>

        <Servicio title="Motos" service="Grúas"/>

        <Servicio title="Utilitarios" service="Grúas y remolques"/>

        <Servicio title="Máquinas Agrícolas" service="Grúas y remolques"/>
      </motion.div>

      <p className="text-gray-600 text-lg">Todos nuestros servicios llegan a todo el país, tanto en casos de imprevistos como para los traslados programados a las 24hs del dia.</p>
    </section>
  );
}