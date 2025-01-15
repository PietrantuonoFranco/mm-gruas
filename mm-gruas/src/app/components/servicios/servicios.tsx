import Servicio from "./components/servicio";

export default function Servicios() {
  return (
    <section id="servicios" className="w-full gap-y-6 px-16 lg:px-56 scroll-mt-16 text-center text-black">
      <h4 className="font-bold text-[#FFCA3A] text-shadow-xl">Nuestros servicios</h4>
      <h2 className="font-bold text-4xl mb-12">Conocé nuestros servicios</h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-8">
        <Servicio title="Autos" service="Grúas y remolques" imgUrl="../../../../../public/grua-auto.jpeg" imgDescription=""/>

        <Servicio title="Camionetas" service="Grúas y remolques" imgUrl="../../../../../public/grua-camioneta.jpeg" imgDescription=""/>

        <Servicio title="Motos" service="Grúas" imgUrl="" imgDescription=""/>

        <Servicio title="Utilitarios" service="Grúas y remolques" imgUrl="../../../../../public/grua-utilitario.jpeg" imgDescription=""/>
      </div>

      <p className="text-gray-500">Todos nuestros servicios llegan a todo el país, tanto en casos de imrevistos como para los traslados programados a las 24hs del dia.</p>
    </section>
  );
}