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
      <Apresentacao/>
      <Contato/>
      <Depoimentos/>
      <Funcionalidades/>
      <Footer/>
    </div>
  )
}

export default App;