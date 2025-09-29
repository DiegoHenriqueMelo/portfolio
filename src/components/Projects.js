import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgHackathon from './img_hackathon.jpg';

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "ReduzAI",
      description: "Plataforma de gestão financeira pessoal com Inteligência Artificial. Sistema completo com dashboard interativo e análises preditivas.",
      tech: ["React", "Node.js", "PostgreSQL", "OpenAI", "Tailwind"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/DiegoHenriqueMelo/ReduzAi_back-end",
      status: "Em Desenvolvimento",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "APL PCD API",
      description: "Sistema Enterprise de Gestão de Inclusão Profissional para PCD's. Arquitetura robusta com Node.js, TypeScript e PostgreSQL.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Jest", "JWT", "..."],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/caua-mendonca/APL_PCD_API",
      hasDetailPage: true,
      detailPath: "/projeto/apl-pcd-api",
      status: "Em Desenvolvimento",
      icon: "♿",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Hackathon 2025",
      description: "Sistema inovador com IA desenvolvido para o Hackathon 2025. Solução completa com interface moderna e backend robusto.",
      tech: ["React.js", "PostgresSQL", "Tailwind", "Express.js", "Jest.ts"],
      image: imgHackathon,
      github: "https://github.com/DiegoHenriqueMelo/hackathon-2025",
      hasDetailPage: true,
      detailPath: "/projeto/hackathon-2025",
      status: "Finalizado ",
      icon: "🏆",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>
      
      <div className="section-padding container-max relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 mb-6 animate-slide-up">
            Projetos
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Alguns dos projetos que desenvolvi, demonstrando diferentes tecnologias e soluções inovadoras
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 animate-scale-in"
              style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
            >
              {/* Project Header */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <div className="text-3xl sm:text-4xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-white/30">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full backdrop-blur-sm`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-blue-100/70 mb-6 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-300 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-blue-200 rounded-lg text-xs sm:text-sm font-medium hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105 border border-white/20"
                      style={{transitionDelay: `${techIndex * 50}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-white/10 text-blue-200 rounded-lg text-xs sm:text-sm font-medium border border-white/20">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {project.hasDetailPage ? (
                    <>
                      <button 
                        onClick={() => {
                          navigate(project.detailPath);
                          window.scrollTo(0, 0);
                        }}
                        className={`flex-1 text-center py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold`}
                      >
                        Ver Detalhes
                      </button>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-3 border border-white/30 text-blue-200 rounded-xl hover:bg-white/10 hover:border-white/50 hover:text-white hover:scale-105 transition-all duration-300 font-semibold"
                      >
                        GitHub
                      </a>
                    </>
                  ) : (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 border border-white/30 text-blue-200 rounded-xl hover:bg-white/10 hover:border-white/50 hover:text-white hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      Ver no GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 lg:mt-24 animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300">
            <div className="text-4xl animate-bounce">🚀</div>
            <div className="text-left">
              <p className="text-white font-semibold text-lg lg:text-xl">Quer ver mais?</p>
              <p className="text-blue-100/70">Confira meu GitHub para todos os projetos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;