import { FaFacebook, FaInstagram } from 'react-icons/fa';
import XIcon from '../assets/XIcon.svg';

const Footer = () => {
  return (
    <footer className="z-100 bottom-0 w-full bg-gradient-to-b from-blue-700 to-blue-500 text-[#F4E1C1] py-6 ">
      <div className="text-center text-sm">
        <div className="flex justify-center space-x-4 mb-2 space-y-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={XIcon} alt="X" className='h-6 w-6' />
          </a>
        </div>
          <div className='flex flex-col items-center space-y-4'>
          <div className="flex justify-center">
            <span className=''>Email de Contato - gourmet.on@gmail.com / Telefone: (11) 97832-6521</span>
          </div>
          <h5 className="flex justify-center">
            &copy; 2025 - Todos os direitos reservados
          </h5>
          </div>
      </div>
    </footer>
  );
}

export default Footer;