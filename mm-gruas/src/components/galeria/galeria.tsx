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
    <section id="galeria" className="w-full px-10 lg:px-52 text-black space-y-2 text-center scroll-mt-[80px]">
      <h4 className="font-bold text-[#FFCA3A] text-shadow-xl">Galería</h4>
      <h2 className="font-bold text-4xl mb-8">Nuestros trabajos realizados</h2>
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
              { publicId: 'mm-gruas-1' },
              { publicId: 'mm-gruas-2' },
              { publicId: 'mm-gruas-3' },
              { publicId: 'mm-gruas-4' },
              { publicId: 'mm-gruas-5' },
              { publicId: 'mm-gruas-6' },
              { publicId: 'mm-gruas-7' },
              { publicId: 'mm-gruas-8' },
              { publicId: 'mm-gruas-9' }
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
            aspectRatio: '22:9',
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