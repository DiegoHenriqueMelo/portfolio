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
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="section-padding container-max">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-float">🏆</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
              Hackathon 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto animate-fade-in text-white" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              Sistema Inovador com Inteligência Artificial para Competição Nacional
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-scale-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              {['React.js + Node.js', 'PostgreSQL', 'AI-Powered'].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-white/20 text-white rounded-full border-0">
                  {tech}
                </span>
              ))}
            </div>
            <button 
              onClick={() => window.open('https://github.com/DiegoHenriqueMelo/hackathon-2025', '_blank')}
              className="px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-300"
            >
              Ver no GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Objetivo do Projeto */}
      <section className="py-20 bg-white">
        <div className="section-padding container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 scroll-animate">
              🎯 Objetivo do Projeto
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed scroll-animate">
              Desenvolvimento de uma <strong>solução inovadora com Inteligência Artificial</strong> para o 
              Hackathon 2025. O projeto combina <strong>tecnologias modernas</strong> e <strong>design intuitivo</strong> 
              para resolver problemas complexos de forma eficiente. A aplicação integra <strong>frontend responsivo</strong>, 
              <strong>backend robusto</strong> e <strong>algoritmos de IA</strong> para entregar uma experiência única aos usuários.
            </p>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-gray-50">
        <div className="section-padding container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 scroll-animate">
              ✨ Funcionalidades Principais
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer scroll-animate-scale"
              >
                <div className="text-4xl mb-4 group-hover:animate-pulse-soft transition-all duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 bg-white">
        <div className="section-padding container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 scroll-animate">
              🛠️ Stack Tecnológico
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate">
            {techStack.map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Status e Links */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="section-padding container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 scroll-animate text-white">
              🚀 Status do Projeto
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 scroll-animate">
              {[
                {icon: "🏆", title: "HACKATHON 2025", subtitle: "Competição Nacional"},
                {icon: "🤖", title: "IA Integrada", subtitle: "Machine Learning"},
                {icon: "⚡", title: "Performance A+", subtitle: "95+ Lighthouse Score"},
                {icon: "📱", title: "Mobile First", subtitle: "100% Responsivo"}
              ].map((status, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 text-white">
                  <div className="text-2xl mb-2">{status.icon}</div>
                  <div className="font-semibold text-white">{status.title}</div>
                  <div className="text-sm opacity-80 text-white">{status.subtitle}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 scroll-animate mb-12">
              <button 
                onClick={() => window.open('https://github.com/DiegoHenriqueMelo/hackathon-2025', '_blank')}
                className="px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-300"
              >
                📧 Ver Repositório
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/devmelo/', '_blank')}
                className="px-8 py-3 bg-white/20 text-white border border-white/30 hover:bg-white/30 rounded-lg font-medium transition-all duration-300"
              >
                💼 LinkedIn
              </button>
            </div>
            
            <div className="text-center scroll-animate">
              <p className="text-lg opacity-90 text-white italic">
                Desenvolvido com 🚀 para inovar e competir no Hackathon 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonProject;