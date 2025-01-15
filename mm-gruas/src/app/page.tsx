'use client'

import ContenidoPrincipal from "./components/contenidoPrincipal"
import Nosotros from "./components/nosotros"

export default function Home() {
return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start space-y-8">
        {/* Contenido principal */}
        <ContenidoPrincipal/>

        {/* Nosotros */}
        <Nosotros/>

        {/* Servicios */}
        

        {/* Contacto */}
        <section id="contacto"></section>
      </main>
    </div>
  );
}
