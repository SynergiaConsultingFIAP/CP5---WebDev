import React from 'react';

const Apresentacao = () => {
  return (
    <section className="bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 py-20 px-6 text-center text-white" id='apresentacao'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8">
          Por que escolher o GourmetOn?
        </h2>
        <p className="text-2xl mb-14 opacity-200">
          O <span className="font-semibold">GourmetOn</span> é mais que um aplicativo de delivery: é a sua solução completa para refeições deliciosas e práticas. Oferecemos a melhor experiência, combinando conveniência, qualidade e segurança em cada pedido. Descubra os benefícios que tornam nossa plataforma a escolha ideal para o seu dia a dia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/90 border-b-4 border-red-600 shadow-xl rounded-2xl p-10 min-h-[300px] 
                        hover:bg-red-50 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-red-700 mb-5">
              🛵 Entrega Rápida
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              Receba sua refeição no menor tempo possível com sistemas de logística otimizados 
              e acompanhamento em tempo real do seu pedido.
            </p>
          </div>

          <div className="bg-white/90 border-b-4 border-green-600 shadow-xl rounded-2xl p-10 min-h-[300px] 
                        hover:bg-green-50 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-green-700 mb-5">
              🍲 Variedade de Restaurantes
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              Explore uma ampla seleção de estabelecimentos, desde comida caseira até 
              culinária internacional, tudo reunido em um só lugar.
            </p>
          </div>

          <div className="bg-white/90 border-b-4 border-blue-600 shadow-xl rounded-2xl p-10 min-h-[300px] 
                        hover:bg-blue-50 transition duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-blue-700 mb-5">
              💳 Pagamento Fácil e Seguro
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              Finalize seu pedido de forma prática, com múltiplas opções de pagamento, 
              incluindo cartão, PIX e carteiras digitais, sempre com total segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;