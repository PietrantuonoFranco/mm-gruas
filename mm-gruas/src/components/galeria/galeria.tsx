'use client'

import { motion } from "framer-motion"
import CloudinaryGallery from './components/CloudinaryGallery';

export default function Galeria() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="galeria" className="w-full mb-16 px-10 lg:px-52 text-black space-y-2 text-center scroll-mt-[80px]">
      <p className="font-bold text-[#F4AF00] text-shadow-xl">Galería</p>

      <h2 className="font-bold text-4xl mb-6 [text-shadow:0px_1px_2px_rgba(0,0,0,1)]">Trabajos realizados</h2>

      <p className="mb-6 px-0 lg:px-2">Explora nuestra galería y conoce el trabajo que realizamos. Cada imagen muestra la seguridad y profesionalismo con los que transportamos vehículos, asegurando un servicio eficiente y confiable en cada traslado.</p>

      <motion.div
        className="max-w-full mx-auto drop-shadow-md"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }} 
      >
        <CloudinaryGallery
          galleryConfig={{
            mediaAssets: [
              { tag: 'mmgruas' }
            ],
            displayProps: {
              spacing: 15
            },
            transformation: {
              crop: "fill"
            },
            loaderProps: {
              style:'circle'
            },
            aspectRatio: '20:9',
            carouselLocation: 'bottom',
            bgColor: "transparent",
            thumbnailProps: {
              mediaSymbolSize: 42,
              mediaSymbolPosition: "center",
              spacing: 5,
              width: 90,
              height: 67.5,
              navigationFloat: true,
              navigationShape: "none",
              navigationSize: 40,
              selectedStyle: "gradient",
              navigationColor: "#000000",
              navigationIconColor: "#ffffff"
            },
            navigationButtonProps: {
              shape: "none",
              iconColor: "#ffffff",
              color: "#000000",
              size: 50
            },
            themeProps: {
              primary: "#000000",
              active: "#777777"
            },
            zoom: false,
            viewportBreakpoints: [
              {
                breakpoint: 600,
                aspectRatio: '4:3',
                navigationButtonProps: {
                  size: 30,
                  navigation: "always"
                },
                thumbnailProps: {
                  navigation: "always",
                }
              }
            ],
            secureDistribution: "res-s.cloudinary.com"
          }}
        />
      </motion.div>
    </section>
  );
}