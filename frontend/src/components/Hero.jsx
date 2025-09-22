import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white text-center py-24 px-6"
    >
      <div className="absolute inset-0">
        <img
          src="/src/assets/img/Bannerimage.jpg"
          alt="Comida deliciosa"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          🍕 GourmetOn
        </h1>
        <p className="mt-6 text-lg md:text-xl font-medium">
          Seu delivery de comida favorito, rápido e fácil!  
          Explore restaurantes, descubra novos sabores e peça em segundos.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-8 py-4 bg-white text-red-600 font-semibold text-lg rounded-xl shadow-md hover:scale-105 hover:bg-red-100 transition transform duration-300">
            📲 Baixar App
          </button>
          <button className="px-8 py-4 border border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-red-600 transition transform duration-300">
            🍽️ Ver Cardápio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
