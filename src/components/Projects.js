import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "ReduzAI",
      description: "Plataforma de gestão financeira pessoal com Inteligencia Artificial. EM DESENVOLVIEMNTO",
      tech: ["React", "Node.js", "PostgreSQL", "OpenAI", "Tailwind"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/DiegoHenriqueMelo/ReduzAi_back-end",
    },
    {
      title: "APL PCD API",
      description: "Sistema Enterprise de Gestão de Inclusão Profissional para PCD's com Node.js + TypeScript + PostgreSQL.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Jest", "JWT", "..."],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      github: "https://github.com/caua-mendonca/APL_PCD_API",
      hasDetailPage: true,
      detailPath: "/projeto/apl-pcd-api"
    },
    {
      title: "Hackathon 2025",
      description: "Sistema com IA para o Hackathon 2025.",
      tech: ["React.js", "PostgresSQL", "Tailwind", "Express.js", "Jest.ts"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      github: "https://github.com/DiegoHenriqueMelo/hackathon-2025"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="section-padding container-max">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up px-4">
            Projetos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in px-4" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Alguns dos projetos que desenvolvi, demonstrando diferentes tecnologias e soluções
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group animate-scale-in"
              style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
            >
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                <div className="text-4xl sm:text-6xl group-hover:scale-110 group-hover:animate-bounce transition-transform duration-300">💻</div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 hover:scale-105"
                      style={{transitionDelay: `${techIndex * 50}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.hasDetailPage ? (
                    <>
                      <button 
                        onClick={() => {
                          navigate(project.detailPath);
                          window.scrollTo(0, 0);
                        }}
                        className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                      >
                        Ver Detalhes
                      </button>
                      <a 
                        href={project.github}
                        className="flex-1 text-center py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-300"
                      >
                        GitHub
                      </a>
                    </>
                  ) : (
                    <a 
                      href={project.github}
                      className="flex-1 text-center py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;