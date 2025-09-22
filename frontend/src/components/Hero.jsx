import BannerImage from "../assets/BannerImage.png";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center py-24 px-8">
      <img
        src={BannerImage}
        alt="Banner GourmetOn"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-orange-500/80 to-yellow-500/80 rounded-2xl"></div>
        <div className="relative z-10 text-center text-white p-12">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            🍕 GourmetOn
          </h1>
          <p className="mt-6 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Seu delivery de comida favorito, rápido e fácil!
            Explore restaurantes, descubra novos sabores e peça em segundos.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="px-8 py-4 bg-white text-red-600 font-semibold text-lg rounded-xl shadow-md hover:scale-105 transition transform duration-300 flex items-center gap-2">
              📲 Baixar App
            </button>
            <button className="px-8 py-4 bg-white text-red-600 border border-white font-semibold text-lg rounded-xl hover:scale-105 transition transform duration-300 flex items-center gap-2">
              🍽️ Ver Cardápio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
