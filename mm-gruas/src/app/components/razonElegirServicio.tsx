import { Timer, DollarSign, Route  } from "lucide-react"

type Parameters = {
  title: string,
  text: string
}

const RazonElegirServicio: React.FC<Parameters> = ({ title, text }) => {

  return (
    <div className="flex flex-col items-center space-y-3 rounded-xl py-10 px-10 sm:px-16 bg-gray-100 shadow-md">
      <div className="p-3 rounded-[100%] mb-1 bg-[#FFCA3A] shadow-md">
        {title === "24 Horas" && (
          <Timer size={32} strokeWidth={2.5}/>
        )}

        {title === "Precios Asequibles" && (
          <DollarSign size={32} strokeWidth={2.5}/>
        )}

        {title === "Amplia Cobertura" && (
          <Route size={32} strokeWidth={2.5}/>
        )}
      </div>

      <h3 className="font-bold text-2xl">{title}</h3>
      
      <p>{text}</p>
    </div>
  );
}

export default RazonElegirServicio;