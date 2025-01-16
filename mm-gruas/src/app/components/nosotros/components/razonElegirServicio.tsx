import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStopwatch, faDollarSign, faRoute } from "@fortawesome/free-solid-svg-icons"

type Parameters = {
  title: string,
  text: string
}

const RazonElegirServicio: React.FC<Parameters> = ({ title, text }) => {

  return (
    <div className="flex flex-col items-center space-y-3 rounded-xl p-10 bg-gray-100 shadow-md">
      <div className="w-14 h-14 flex items-center justify-center rounded-full mb-1 bg-[#FFCA3A] shadow-md">
        {title === "24 Horas" && (
          <FontAwesomeIcon icon={faStopwatch} className="text-2xl"/>
        )}

        {title === "Precios Accesibles" && (
          <FontAwesomeIcon icon={faDollarSign} className="text-2xl"/>
        )}

        {title === "Amplia Cobertura" && (
          <FontAwesomeIcon icon={faRoute} className="text-2xl"/>
        )}
      </div>

      <h3 className="font-bold text-2xl">{title}</h3>
      
      <p>{text}</p>
    </div>
  );
}

export default RazonElegirServicio;