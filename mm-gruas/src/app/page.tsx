'use client'

import Nosotros from "./components/nosotros"

export default function Home() {
return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Nosotros */}
        <Nosotros/>

        {/* Servicios */}
        <section id="servicios"></section>

        {/* Contacto */}
        <section id="contacto"></section>
      </main>
    </div>
  );
}
