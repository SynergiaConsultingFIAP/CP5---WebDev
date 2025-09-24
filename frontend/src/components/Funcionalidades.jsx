import { useEffect, useState } from "react";

const Funcionalidades = () => {
  const [funcionalidades, setFuncionalidades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/funcionalidades") 
      .then((res) => res.json())
      .then((data) => {
        setFuncionalidades(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar funcionalidades:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-100" id="funcionalidades">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black-800 mb-8">
          Funcionalidades
        </h2>

        {loading ? (
          <p className="text-gray-500">Carregando funcionalidades...</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {funcionalidades.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">{item.descricao}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Funcionalidades;

