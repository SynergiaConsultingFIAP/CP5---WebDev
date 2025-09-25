import { useState, useEffect } from "react";

const Comidas = () => {
  const [comidas, setComidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoria, setCategoria] = useState("");

  const fetchComidas = async () => {
    try {
      setLoading(true);
      let url = "http://localhost:3001/comidas";

      const params = [];
      if (nome) params.push(`nome=${encodeURIComponent(nome)}`);
      if (categoria) params.push(`categoria=${encodeURIComponent(categoria)}`);
      if (params.length > 0) url += "?" + params.join("&");

      const response = await fetch(url);
      const data = await response.json();
      setComidas(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao buscar comidas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComidas();
  }, [nome, categoria]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setNome(searchTerm); 
    }
  };

  if (loading) {
    return (
      <section className="py-20 flex flex-col items-center justify-center bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-6 text-white text-lg font-semibold animate-pulse">
          Carregando comidas...
        </p>
      </section>
    );
  }

  if (comidas.length === 0) {
    return (
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-2 rounded-lg border border-gray-300"
          />
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="p-2 rounded-lg border border-gray-300"
          >
            <option value="">Todas as categorias</option>
            <option value="Carne">Carne</option>
            <option value="Frutos do Mar">Frutos do Mar</option>
            <option value="Massa">Massa</option>
            <option value="Sobremesa">Sobremesa</option>
            <option value="Diversos">Diversos</option>
            <option value="Frango">Frango</option>
          </select>
        </div>
        <p className="text-center text-gray-500">
          Nenhuma comida encontrada 😢
        </p>
      </section>
    );
  }

  return (
    <section
      className="py-12 px-6 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400"
      id="comidas"
    >
      <div className="text-black max-w-6xl mx-auto mb-6 flex flex-col md:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="p-2 rounded-lg border border-white bg-white"
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="p-2 rounded-lg border border-white bg-white"
        >
          <option value="">Todas as categorias</option>
          <option value="Carne">Carne</option>
          <option value="Frutos do Mar">Frutos do Mar</option>
          <option value="Massa">Massa</option>
          <option value="Sobremesa">Sobremesa</option>
        </select>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {comidas.map((comida) => (
          <div
            key={comida.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-orange-700"
          >
            <img
              src={comida.image}
              alt={comida.titulo}
              className="w-full h-60 object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{comida.titulo}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {comida.categoria} - {comida.area}
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
              <button
                onClick={() => alert(`Você pediu: ${comida.titulo} 🍽️`)}
                className="mt-4 w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition"
              >
                Pedir agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comidas;
