import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HackathonProject = () => {
  useScrollAnimation();

  const techStack = [
    "React.js 18+", "Node.js 18+", "Express.js", "PostgreSQL 15+", 
    "Jest", "Tailwind CSS", "JavaScript ES6+", "CSS3", "HTML5", "Git"
  ];

  const features = [
    {
      icon: "🤖",
      title: "Inteligência Artificial",
      description: "Sistema inteligente com IA para análise e processamento de dados avançados"
    },
    {
      icon: "⚡",
      title: "Performance Otimizada",
      description: "Interface responsiva e rápida com carregamento otimizado"
    },
    {
      icon: "🔐",
      title: "Sistema Seguro",
      description: "Implementação de segurança robusta com validações e proteções"
    },
    {
      icon: "📱",
      title: "Design Responsivo",
      description: "Interface adaptável para todos os dispositivos e tamanhos de tela"
    },
    {
      icon: "🎯",
      title: "Experiência do Usuário",
      description: "UX/UI moderna e intuitiva focada na facilidade de uso"
    },
    {
      icon: "🚀",
      title: "Deploy Automatizado",
      description: "Pipeline de CI/CD para deploy contínuo e atualizações automáticas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-bounce-slow"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>
      
      <div className="min-h-screen relative z-10 pt-16 sm:pt-20">
      {/* Header */}
      <section className="py-20 lg:py-32">
        <div className="section-padding container-max">
          <div className="text-center">
            <div className="text-6xl mb-8 animate-float">🏆</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 mb-8 animate-slide-up">
              Hackathon 2025
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              Sistema Inovador com Inteligência Artificial para Competição Nacional
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              {['React.js + Node.js', 'PostgreSQL', 'AI-Powered'].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 text-blue-200 rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
            <button 
              onClick={() => window.open('https://github.com/DiegoHenriqueMelo/hackathon-2025', '_blank')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold text-lg"
            >
              🚀 Ver no GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Objetivo do Projeto */}
      <section className="py-20 lg:py-32">
        <div className="section-padding container-max">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 mb-8 scroll-animate">
              🎯 Objetivo do Projeto
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto hover:bg-white/10 hover:border-white/20 transition-all duration-500 scroll-animate">
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 leading-relaxed">
                Desenvolvimento de uma <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">solução inovadora com Inteligência Artificial</span> para o 
                Hackathon 2025. O projeto combina <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">tecnologias modernas</span> e <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">design intuitivo</span> 
                para resolver problemas complexos de forma eficiente. A aplicação integra <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">frontend responsivo</span>, 
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> backend robusto</span> e <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">algoritmos de IA</span> para entregar uma experiência única aos usuários.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 lg:py-32">
        <div className="section-padding container-max">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 mb-8 scroll-animate">
              ✨ Funcionalidades Principais
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer scroll-animate-scale"
                style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
              >
                <div className="text-4xl lg:text-5xl mb-6 group-hover:animate-pulse-soft group-hover:scale-110 transition-all duration-300">{feature.icon}</div>
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-blue-100/70 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 lg:py-32">
        <div className="section-padding container-max">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 mb-8 scroll-animate">
              🛠️ Stack Tecnológico
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 max-w-6xl mx-auto hover:bg-white/10 hover:border-white/20 transition-all duration-500 scroll-animate">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {techStack.map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 lg:px-6 lg:py-3 bg-white/10 text-blue-200 rounded-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer font-medium border border-white/20 hover:border-transparent"
                  style={{transitionDelay: `${index * 50}ms`}}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status e Links */}
      <section className="py-20 lg:py-32">
        <div className="section-padding container-max">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 mb-12 scroll-animate">
              � Status do Projeto
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20 scroll-animate">
              {[
                {icon: "🏆", title: "HACKATHON 2025", subtitle: "Competição Nacional", gradient: "from-yellow-500 to-orange-500"},
                {icon: "🤖", title: "IA Integrada", subtitle: "Machine Learning", gradient: "from-purple-500 to-violet-500"},
                {icon: "⚡", title: "Performance A+", subtitle: "95+ Lighthouse Score", gradient: "from-blue-500 to-cyan-500"},
                {icon: "�", title: "Mobile First", subtitle: "100% Responsivo", gradient: "from-indigo-500 to-purple-500"}
              ].map((status, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer"
                  style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
                >
                  <div className="text-3xl lg:text-4xl mb-4 group-hover:animate-pulse-soft transition-all duration-300">{status.icon}</div>
                  <div className={`font-semibold text-lg lg:text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r ${status.gradient}`}>{status.title}</div>
                  <div className="text-sm lg:text-base text-blue-100/70 group-hover:text-blue-100/90 transition-colors duration-300">{status.subtitle}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 scroll-animate">
              <button 
                onClick={() => window.open('https://github.com/DiegoHenriqueMelo/hackathon-2025', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold text-lg"
              >
                📧 Ver Repositório
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/devmelo/', '_blank')}
                className="px-8 py-4 border-2 border-white/30 text-blue-200 rounded-xl hover:bg-white/10 hover:border-white/50 hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
              >
                💼 LinkedIn
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto hover:bg-white/10 hover:border-white/20 transition-all duration-500 scroll-animate">
              <p className="text-lg lg:text-xl text-blue-100/80 italic leading-relaxed">
                Desenvolvido com <span className="text-2xl animate-pulse-soft">🚀</span> para inovar e competir no Hackathon 2025
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default HackathonProject;