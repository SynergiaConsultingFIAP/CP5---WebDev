import React, { useEffect, useState } from "react";

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/depoimentos") 
      .then((res) => res.json())
      .then((data) => {
        setDepoimentos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar depoimentos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 py-12 px-6 text-white" id="depoimentos">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          O que nossos clientes dizem 😊
        </h2>

        {loading ? (
          <p className="text-lg">Carregando depoimentos...</p>
        ) : depoimentos.length === 0 ? (
          <p className="text-lg">Nenhum depoimento encontrado.</p>
        ) : (
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {depoimentos.map((dep) => (
              <div key={dep.id} className="relative flex flex-col items-center">
                <div
                  className="bg-white text-black p-6 rounded-xl shadow-md border border-blue-500 
                             transform transition-transform duration-500 hover:scale-102 hover:shadow-lg 
                             hover:text-black relative"
                >
                  <p className="italic mb-4">"{dep.mensagem}"</p>
                </div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                <h3 className="font-semibold text-orange-600 mt-2">
                  - {dep.nome}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Depoimentos;
