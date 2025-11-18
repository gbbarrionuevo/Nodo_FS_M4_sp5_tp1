import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none opacity-20 blur-lg select-none">
        <img
          src="/portada.png"
          alt="Portada"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.img
          src="/portada.png"
          alt="Portada"
          className="mx-auto drop-shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="space-y-6 text-center md:text-left max-w-md">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">Explorá tus Pokémon</h1>

          <p className="text-lg text-gray-700 dark:text-gray-300">Un panel elegante con animaciones suaves y una experiencia más inmersiva. Perfecto para administrar y descubrir nuevos Pokémon.</p>

          <Link
            to="/pokemon/list"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-xl transition"
          >
            Ver Pokémon
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
