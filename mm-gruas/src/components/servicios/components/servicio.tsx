'use client'

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCarSide, faTruckPickup, faMotorcycle, faVanShuttle, faTractor } from "@fortawesome/free-solid-svg-icons"

type Parameters = {
  title: string,
  service: string
}

const Servicio: React.FC<Parameters> = ({ title, service }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.div variants={fadeInUp} className="flex flex-col items-center text-black md:text-left rounded-xl shadow-md bg-gray-50 gap-y-6 p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div>
        {title === "Autos" && (
          <FontAwesomeIcon icon={faCarSide} className="text-6xl"/>
        )}
        
        {title === "Camionetas" && (
          <FontAwesomeIcon icon={faTruckPickup} className="text-6xl"/>
        )}

        {title === "Motos" && (
          <FontAwesomeIcon icon={faMotorcycle} className="text-6xl"/>
        )}

        {title === "Utilitarios" && (
          <FontAwesomeIcon icon={faVanShuttle} className="text-6xl"/>
        )}

        {title === "Máquinas Agrícolas" && (
          <FontAwesomeIcon icon={faTractor} className="text-6xl"/>
        )}
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <h4 className="text-gray-900">{service}</h4>
      </div>
    </motion.div>
  );
}

export default Servicio