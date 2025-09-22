import React from 'react'

const Hero = () => {
  return (
    <section classname="bg-gradient-to-r from red-500 to orange-500 text-white text-center py-20">
        <h1 classname="text-5x1 font-bold">🍔 GourmetOn</h1>
        <p classname="mt-4 text-lg">Seu delivery de comida favorito, rápido e fácil!</p>
        <button classname="mt-6 px-6 py-3 bg-white text-red-300 font-semibold rounded-x1 shadow-hover:scale-105 transition">
            Baixar App
        </button>
    </section> 
  )
}

export default Hero
