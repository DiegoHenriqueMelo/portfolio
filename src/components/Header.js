import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-gray-100">
      <nav className="section-padding container-max py-2 lg:py-3">
        <div className="flex justify-between items-center">
          <div 
            onClick={handleLogoClick}
            className="group cursor-pointer flex items-center gap-2"
          >
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <span className="text-white font-bold text-sm lg:text-lg">DM</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                Diego Melo
              </div>
              <div className="text-xs lg:text-sm text-gray-500 font-medium">
                Full Stack Developer
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {isHomePage ? (
              ['Início', 'Sobre', 'Projetos', 'Stack', 'Contato'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i'))}
                  className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-sm lg:text-base group py-1"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
              ))
            ) : (
              <button
                onClick={() => navigate('/')}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-sm lg:text-base group flex items-center gap-2 py-1"
              >
                <span className="text-lg">←</span> Voltar ao Portfólio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 rounded-lg hover:bg-gray-100">
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