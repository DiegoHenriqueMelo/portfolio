import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="section-padding container-max">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 animate-fade-in">
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              © 2025 Portfólio. Desenvolvido com <span className="text-red-500 animate-pulse">❤️</span> usando React e Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-6 animate-slide-up">
            <a 
              href="https://github.com/DiegoHenriqueMelo" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 relative group"
              aria-label="GitHub"
            >
              GitHub
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="https://www.linkedin.com/in/devmelo/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 relative group"
              aria-label="LinkedIn"
            >
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="mailto:diegomelo.suporte@gmail.com" 
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 relative group"
              aria-label="Email"
            >
              Email
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;