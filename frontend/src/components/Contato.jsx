import React from 'react'

const Contato = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Fique por dentro!</h2>
      <p className="text-gray-600">Cadastre seu e-mail para receber novidades.</p>
      <form className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Seu e-mail"
          className="px-4 py-2 rounded-lg border border-gray-300 w-64"
        />
        <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600">
          Inscrever-se
        </button>
      </form>
    </section>
  )
}

export default Contato