import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCarSide, faTruckPickup, faMotorcycle, faVanShuttle, faTractor } from "@fortawesome/free-solid-svg-icons"

type Parameters = {
  title: string,
  service: string
}

const Servicio: React.FC<Parameters> = ({ title, service }) => {
  return (
    <div className="flex flex-col items-center text-black md:text-left rounded-xl shadow-md bg-gray-100 gap-y-6 p-6">
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
        <h5 className="font-bold text-xl mb-3">{title}</h5>
        <h6 className="text-gray-600">{service}</h6>
      </div>
    </div>
  );
}

export default Servicio