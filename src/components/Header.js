import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled || !isHomePage 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <nav className="section-padding container-max py-4 lg:py-6">
        <div className="flex justify-between items-center">
          <div 
            onClick={handleLogoClick}
            className="group cursor-pointer"
          >
            <div className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 hover:from-blue-700 hover:via-purple-700 hover:to-violet-700 transition-all duration-300 group-hover:scale-105">
              <span className="drop-shadow-sm">Portfólio</span>
              <span className="text-slate-600 mx-2">|</span>
              <span className="drop-shadow-sm">Dev Melo</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 lg:space-x-10">
            {isHomePage ? (
              ['Início', 'Sobre', 'Projetos', 'Stack', 'Contato'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i'))}
                  className="relative text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold text-base lg:text-lg group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-500 delay-100 rounded-full"></span>
                </button>
              ))
            ) : (
              <button
                onClick={() => navigate('/')}
                className="relative text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold text-base lg:text-lg group flex items-center gap-2"
              >
                <span className="text-xl">←</span> Voltar ao Portfólio
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
              </button>
            )}
          </div>

          {/* Mobile menu button - pode ser implementado depois se necessário */}
          <div className="md:hidden">
            <button className="p-2 text-slate-700 hover:text-blue-600 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;