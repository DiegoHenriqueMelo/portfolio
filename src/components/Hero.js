import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elementos flutuantes de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-pulse-slow"></div>
      </div>
      
      <div className="section-padding container-max text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                Olá, eu sou
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-size-200 animate-gradient animate-slide-up" style={{animationDelay: '0.4s', animationFillMode: 'both', backgroundSize: '200% 200%'}}>
                Diego Melo
              </span>
            </h1>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed animate-slide-up px-4" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            Desenvolvedor Back-End especializado em soluções escaláveis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in px-4" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
            <button 
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300 font-medium"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;