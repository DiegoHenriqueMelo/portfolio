import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="section-padding container-max py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-900 hover:scale-105 transition-transform duration-300 cursor-pointer">
            Portfólio | Dev Melo
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Início', 'Sobre', 'Projetos', 'Stack', 'Contato'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i'))}
                className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;