import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Elementos flutuantes modernos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-10 w-28 h-28 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      <div className="section-padding container-max text-center relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm animate-slide-up">
                ✨ Desenvolvedor Full Stack
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white/90 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                Olá, eu sou
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-size-200 animate-gradient animate-slide-up" style={{animationDelay: '0.4s', animationFillMode: 'both', backgroundSize: '200% 200%'}}>
                Diego Melo
              </span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/80 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            Desenvolvedor Back-End especializado em soluções escaláveis e APIs robustas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-scale-in mb-12" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
            <button 
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-lg"
            >
              🚀 Ver Projetos
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-300 rounded-xl hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
            >
              💬 Entre em Contato
            </button>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '1s', animationFillMode: 'both'}}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-blue-100/70 text-sm sm:text-base">Projetos</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">11+</div>
              <div className="text-blue-100/70 text-sm sm:text-base">Tecnologias</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-violet-400 mb-2">1+</div>
              <div className="text-blue-100/70 text-sm sm:text-base">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;