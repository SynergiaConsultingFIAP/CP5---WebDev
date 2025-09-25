import React, { useState } from 'react';

const Contato = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMensagem("⚠️ Por favor, insira um e-mail válido.");
      return;
    }
    setMensagem("✅ Obrigado! Você foi inscrito com sucesso 🚀");
    setEmail("");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-700 to-blue-500 text-center" id='contato'>
      <h2 className="text-3xl font-bold mb-4 text-white">Fique por dentro!</h2>
      <p className="text-white text-opacity-170 mb-6">
        Cadastre seu e-mail para receber novidades, ofertas exclusivas e concorrer a premios imperdíveis.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4"
      >
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 w-72 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md text-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-red-600"
        >
          Inscrever-se
        </button>
      </form>

      {mensagem && (
        <p className="mt-6 text-sm font-medium text-blue-100">{mensagem}</p>
      )}
    </section>
  );
};

export default Contato;
