import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="section-padding container-max">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center animate-slide-up">
            Sobre Mim
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 animate-slide-left">
              <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Sou um desenvolvedor iniciante, apaixonado por criar soluções digitais funcionais. 
                Com foco em API's Rest e Restfull e código de qualidade, transformo ideias em 
                realidade através da tecnologia.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Especializando em desenvolvimento back-end, sempre buscando as melhores 
                práticas e tecnologias mais recentes para entregar projetos excepcionais.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['Criativo', 'Detalhista', 'Colaborativo', 'Inovador'].map((trait, index) => (
                  <span 
                    key={trait}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-300 animate-scale-in"
                    style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-slide-right">
              <div className="space-y-4">
                <div className="flex items-center justify-between group">
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Projetos em Desenvolvimento</span>
                  <span className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">3+</span>
                </div>
                <div className="flex items-center justify-between group">
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Anos de Experiência</span>
                  <span className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">1+</span>
                </div>
                <div className="flex items-center justify-between group">
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Tecnologias</span>
                  <span className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-300">11+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;