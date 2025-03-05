'use client'

import ContenidoPrincipal from "./components/contenidoPrincipal/contenidoPrincipal";
import Nosotros from "./components/nosotros/nosotros";
import Servicios from "./components/servicios/servicios";
import Contacto from "./components/contacto/contacto";
import Galeria from "./components/galeria/galeria";

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start space-y-8">
          {/* Contenido principal */}
          <ContenidoPrincipal/>

          {/* Nosotros */}
          <Nosotros/>

          {/* Servicios */}
          <Servicios/>

          {/* Contacto */}
          <Contacto/>

          {/* Galeria */}
          <Galeria/>
        </main>
      </div>
    </>
  )
}

export default App
