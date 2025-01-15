'use client'

import ContenidoPrincipal from "./components/contenidoPrincipal/contenidoPrincipal"
import Nosotros from "./components/nosotros/nosotros"
import Servicios from "./components/servicios/servicios"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start space-y-8">
        {/* Contenido principal */}
        <ContenidoPrincipal/>

        {/* Nosotros */}
        <Nosotros/>

        {/* Servicios */}
        <Servicios/>

        {/* Contacto */}
        <section id="contacto"></section>
      </main>
    </div>
  );
}
