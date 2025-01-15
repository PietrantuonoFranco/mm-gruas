import Image from "next/image"
import ImgAutos from "../../../../../public/grua-auto.jpeg"
import ImgCamionetas from "../../../../../public/grua-camioneta.jpeg"
import ImgUtilitarios from "../../../../../public/grua-utilitario.jpeg"

type Parameters = {
  title: string,
  service: string,
  imgUrl: string,
  imgDescription: string
}

const Servicio: React.FC<Parameters> = ({ title, service, imgUrl, imgDescription }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 text-black md:text-left rounded shadow-md bg-gray-100 p-10 gap-6">
      <Image
        src={title ==="Autos"? ImgAutos : title === "Camionetas"? ImgCamionetas : ImgUtilitarios}
        alt={imgDescription}
        className="w-full object-cover inline"
      />

      <div className="h-full flex flex-col justify-center">
        <h5 className="font-bold text-xl">{title}</h5>
        <h6 className="text-gray-600">{service}</h6>
      </div>
    </div>
  );
}

export default Servicio