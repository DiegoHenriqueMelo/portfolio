import React from 'react';

const Stack = () => {
  const technologies = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "React", level: 60 },
        { name: "Tailwind CSS", level: 60 },
        { name: "Bootstrap", level: 60 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 95 },
        { name: "PostgreSQL", level: 75 },
        { name: "Oracle", level: 70 },
        { name: "Java", level: 60 }
      ]
    },
    {
      category: "Ferramentas",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git", level: 90 },
        { name: "Figma", level: 80 },
        { name: "IntelliJ IDEA", level: 70 },
        { name: "Postman", level: 70 }
      ]
    }
  ];

  return (
    <section id="stack" className="py-20 bg-white">
      <div className="section-padding container-max">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Stack Tecnológica
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-500 group animate-scale-in"
              style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium group-hover/skill:text-gray-900 transition-colors duration-300">{skill.name}</span>
                      <span className="text-gray-500 text-sm group-hover/skill:text-blue-600 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out hover:from-blue-600 hover:to-purple-600"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${0.5 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 hover:from-blue-100 hover:to-purple-100 hover:scale-105 transition-all duration-300 group">
            <div className="text-3xl group-hover:animate-bounce">🚀</div>
            <div>
              <p className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors duration-300">Sempre Aprendendo</p>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Constantemente explorando novas tecnologias e metodologias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;