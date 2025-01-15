import Image from "next/image";
import Grua from "../../../public/img-example.jpeg";
import RazonElegirServicio from "./razonElegirServicio";

export default function Servicios() {

  return (
    <section id="nosotros" className="w-full gap-y-6 px-16 lg:px-56 scroll-mt-16">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-8">
        <Image
          src={Grua}
          alt="Imagen de una de nuestras grúas."
          className="h-full object-cover shadow-md sm:block hidden"
        />

        <div className="text-black space-y-2 md:text-left text-center">
          <h4 className="font-bold text-[#FFCA3A] text-shadow-xl">Sobre nosotros</h4>

          <h2 className="font-bold text-4xl mb-12">Grúas en Las Flores y todo el país: Con más de 35 años de experiencia en el rubro</h2>

          <p className="">En MM Grúas, somos especialistas en brindar soluciones confiables y eficientes para el transporte y remolque de vehículos. Con años de experiencia en el sector, nos hemos consolidado como un aliado clave para conductores y empresas que necesitan servicios de grúa rápidos, seguros y profesionales.</p>

          <p className="">Ya sea que necesite asistencia en carretera, traslado de un vehículo por mantenimiento o apoyo para operaciones logísticas, en MM Grúas estamos aqui para ayudar. Nuestro objetivo es brindarle tranquilidad y confianza, sabiendo que su vehículo está en las mejores manos.</p>
        </div>
      </div>

      <div className="text-black">
        <h2 className="font-bold text-4xl text-center mt-16 mb-10">¿Por qué debería elegir nuestros servicios?</h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 text-center">
          <RazonElegirServicio
            title="24 Horas"
            text="Estamos disponibles las 24 horas del día de la semana, lo que significa que atendemos tus emergencias en todo momento, incluso los días festivos, los 356 días del año."
          />
          
          <RazonElegirServicio
            title="Precios Asequibles"
            text="Contamos con precios asequibles que se ajustan a tu presupuesto, garantizando un servicio de calidad, seguro y eficiente de todo momento."
          />
          
          <RazonElegirServicio
            title="Amplia Cobertura"
            text="Somos una empresa de grúas con sede en Las Flores, expertos en brindar respuesta inmediata a cualquier urgencia, las 24 horas y hacia cualquier destino del país."
          />
        </div>
      </div>
    </section>
  );
}