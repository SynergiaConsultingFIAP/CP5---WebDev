import Apresentacao from './components/Apresentacao';
import Contato from './components/Contato';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';
import Funcionalidades from './components/Funcionalidades';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <Hero/>
      <div className="h-8 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400"></div>
      <Apresentacao/>
      <Contato/>
      <Depoimentos/>
      <Funcionalidades/>
      <Footer/>
    </div>
  )
}

export default App;