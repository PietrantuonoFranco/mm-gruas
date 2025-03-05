'use client'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <h1 className="text-6xl font-bold text-gray-800">Error 404</h1>
      <p className="text-2xl text-gray-600 mt-4">Página no encontrada</p>
      <p className="text-gray-500 mt-2">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 hover:shadow-md transition-colors"
      >
        Volver al inicio
      </Link>
    </motion.div>
  );
};

export default NotFoundPage;