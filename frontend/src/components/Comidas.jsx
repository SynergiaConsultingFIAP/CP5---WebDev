import { useState, useEffect } from "react";

const Comidas = () => {
  const [comidas, setComidas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComidas = async () => {
      try {
        const response = await fetch("http://localhost:3001/comidas");
        const data = await response.json();
        setComidas(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar comidas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComidas();
  }, []);

  if (loading) return <p>Carregando comidas...</p>;

  if (comidas.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Nenhuma comida encontrada 😢
      </p>
    );
  }

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600" id="comidas">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {comidas.map((comida) => (
          <div
            key={comida.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={comida.image}
              alt={comida.title}
              className="w-full h-60 object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{comida.title}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {comida.category} - {comida.area}
              </p>

              {comida.youtube && (
                <a
                  href={comida.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-3 block"
                >
                  Ver no YouTube
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comidas;