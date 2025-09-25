const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/20 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h2 className="text-2xl font-extrabold text-white">🍕 GourmetOn</h2>
          <ul className="flex space-x-6 font-semibold text-white">
            <li><a href="#apresentacao" className="hover:text-orange-300">Apresentação</a></li>
            <li><a href="#contato" className="hover:text-orange-300">Contato</a></li>
            <li><a href="#funcionalidades" className="hover:text-orange-300">Funcionalidades</a></li>
            <li><a href="#comidas" className="hover:text-orange-300">Comidas</a></li>
            <li><a href="#depoimentos" className="hover:text-orange-300">Depoimentos</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header