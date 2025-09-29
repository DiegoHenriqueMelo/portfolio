import React from 'react';

const Stack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", description: "Linguagem principal para desenvolvimento web moderno" },
        { name: "TypeScript", description: "Superset do JavaScript com tipagem estática" },
        { name: "React", description: "Biblioteca para construção de interfaces de usuário" },
        { name: "Tailwind CSS", description: "Framework CSS utilitário para estilização rápida" },
        { name: "Bootstrap", description: "Framework CSS para desenvolvimento responsivo" },
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      gradient: "from-purple-500 to-violet-500",
      skills: [
        { name: "Node.js", description: "Runtime JavaScript para desenvolvimento server-side" },
        { name: "Express.js", description: "Framework web minimalista para Node.js" },
        { name: "PostgreSQL", description: "Sistema de gerenciamento de banco de dados relacional" },
        { name: "Oracle", description: "Sistema de banco de dados corporativo robusto" },
        { name: "Java", description: "Linguagem de programação orientada a objetos" }
      ]
    },
    {
      category: "Ferramentas & DevOps",
      icon: "🛠️",
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Visual Studio Code", description: "Editor de código com extensibilidade avançada" },
        { name: "Git", description: "Sistema de controle de versão distribuído" },
        { name: "Figma", description: "Ferramenta de design colaborativo para UI/UX" },
        { name: "IntelliJ IDEA", description: "IDE inteligente para desenvolvimento Java" },
        { name: "Postman", description: "Plataforma para desenvolvimento e teste de APIs" }
      ]
    }
  ];

  return (
    <section id="stack" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-padding container-max relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 mb-6 animate-slide-up">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Domínio técnico em tecnologias modernas para desenvolvimento de soluções escaláveis e robustas
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {technologies.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 lg:p-10 hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 animate-scale-in"
              style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {category.category}
                </h3>
              </div>
              
              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-200/50 hover:border-slate-300/50 hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover/skill:text-slate-900 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed group-hover/skill:text-slate-700 transition-colors duration-300">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-20 lg:mt-32 text-center animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 lg:p-10 hover:bg-white/90 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group max-w-3xl">
            <div className="text-5xl group-hover:animate-bounce">�</div>
            <div className="text-center sm:text-left">
              <p className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                Aprendizado Contínuo
              </p>
              <p className="text-slate-700 text-lg group-hover:text-slate-800 transition-colors duration-300">
                Comprometido com a evolução constante e adoção de melhores práticas de desenvolvimento para entregar soluções de alta qualidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;