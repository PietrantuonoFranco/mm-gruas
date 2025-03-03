'use client';

import { motion } from "framer-motion";
import grua from "../../assets/img-example.jpeg";
import RazonElegirServicio from "./components/razonElegirServicio";

export default function Servicios() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="nosotros" className="w-full gap-y-6 px-10 lg:px-56 scroll-mt-[100px]">
      {/* Contenedor principal sin stagger */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-8">
        {/* Imagen con animación fadeInUp */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }} // Solo se anima una vez y cuando el 20% del elemento es visible
        >
          <img
            src={grua}
            alt="Imagen de una de nuestras grúas."
            className="h-full object-cover shadow-md sm:block hidden"
          />
        </motion.div>

        {/* Texto con animación fadeInUp */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }} // Solo se anima una vez y cuando el 20% del elemento es visible
          className="text-black space-y-2 md:text-left text-center"
        >
          <h4 className="font-bold text-[#FFCA3A] text-shadow-xl">Sobre nosotros</h4>
          <h2 className="font-bold text-4xl mb-12">Grúas en Las Flores y todo el país: Con más de 35 años de experiencia en el rubro</h2>
          <p>En MM Grúas, somos especialistas en brindar soluciones confiables y eficientes para el transporte y remolque de vehículos. Con años de experiencia en el sector, nos hemos consolidado como un aliado clave para conductores y empresas que necesitan servicios de grúa rápidos, seguros y profesionales.</p>
          <p>Ya sea que necesite asistencia en carretera, traslado de un vehículo por mantenimiento o apoyo para operaciones logísticas, en MM Grúas estamos aquí para ayudar. Nuestro objetivo es brindarle tranquilidad y confianza, sabiendo que su vehículo está en las mejores manos.</p>
        </motion.div>
      </div>

      {/* Sección "¿Por qué elegirnos?" con stagger */}
      <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.1 }} // Solo se anima una vez y cuando el 20% del elemento es visible
        className="flex flex-col text-black"
      >
        <h2 className="font-bold text-4xl text-center mt-16 mb-10">¿Por qué debería elegir nuestros servicios?</h2>

        {/* Contenedor de razones con animación stagger */}
        <motion.div
          variants={staggerContainer}
          className="grid lg:grid-cols-3 grid-cols-1 gap-8 text-center"
        >
          <motion.div variants={fadeInUp}>
            <RazonElegirServicio
              title="24 Horas"
              text="Estamos disponibles las 24 horas del día de la semana, lo que significa que atendemos tus emergencias en todo momento, incluso los días festivos, los 365 días del año."
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <RazonElegirServicio
              title="Precios Accesibles"
              text="Contamos con precios asequibles que se ajustan a tu presupuesto, garantizando un servicio de calidad, seguro y eficiente en todo momento."
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <RazonElegirServicio
              title="Amplia Cobertura"
              text="Somos una empresa de grúas con sede en Las Flores, expertos en brindar respuesta inmediata a cualquier urgencia, las 24 horas y hacia cualquier destino del país."
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}