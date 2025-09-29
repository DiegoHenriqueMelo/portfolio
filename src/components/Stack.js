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
    <section id="stack" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0), 
                           radial-gradient(circle at 75px 75px, #8b5cf6 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      <div className="section-padding container-max relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-semibold tracking-wider uppercase">
              Stack Tecnológico
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Tecnologias & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ferramentas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Arsenal completo para desenvolvimento de soluções modernas e escaláveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-3 animate-scale-in"
              style={{animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both'}}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Header */}
              <div className="relative text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl text-white text-2xl mb-4 bg-gradient-to-r ${category.gradient} shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {category.category}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="relative space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover/skill:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Decorative Element */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${category.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;