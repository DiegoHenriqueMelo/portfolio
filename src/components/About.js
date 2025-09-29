import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-padding container-max relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 mb-12 lg:mb-20 text-center animate-slide-up">
            Sobre Mim
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slide-left">
              <div className="space-y-6">
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed hover:text-slate-800 transition-colors duration-300">
                  Sou um desenvolvedor <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">apaixonado por tecnologia</span>, 
                  especializado em criar soluções digitais robustas e escaláveis. 
                  Com foco em API's Rest e código de qualidade, transformo ideias em 
                  realidade através da inovação.
                </p>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed hover:text-slate-800 transition-colors duration-300">
                  Especializando em <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">desenvolvimento back-end</span>, 
                  sempre buscando as melhores práticas e tecnologias mais recentes para 
                  entregar projetos excepcionais que fazem a diferença.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-6">
                {[
                  { trait: 'Criativo', color: 'from-blue-500 to-cyan-500' },
                  { trait: 'Detalhista', color: 'from-purple-500 to-violet-500' },
                  { trait: 'Colaborativo', color: 'from-indigo-500 to-blue-500' },
                  { trait: 'Inovador', color: 'from-violet-500 to-purple-500' }
                ].map((item, index) => (
                  <span 
                    key={item.trait}
                    className={`px-6 py-3 bg-gradient-to-r ${item.color} text-white rounded-full text-sm sm:text-base font-semibold hover:scale-110 hover:shadow-lg transition-all duration-300 animate-scale-in cursor-default`}
                    style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
                  >
                    {item.trait}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 animate-slide-right">
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    Estatísticas
                  </h3>
                  <p className="text-slate-600">Minha jornada em números</p>
                </div>
                
                <div className="space-y-6">
                  <div className="group cursor-default">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl">
                          🚀
                        </div>
                        <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors duration-300">
                          Projetos Desenvolvidos
                        </span>
                      </div>
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:scale-110 transition-transform duration-300">
                        3+
                      </span>
                    </div>
                  </div>
                  
                  <div className="group cursor-default">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 hover:from-purple-100 hover:to-violet-100 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-white text-xl">
                          📅
                        </div>
                        <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors duration-300">
                          Anos de Experiência
                        </span>
                      </div>
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 group-hover:scale-110 transition-transform duration-300">
                        1+
                      </span>
                    </div>
                  </div>
                  
                  <div className="group cursor-default">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 hover:from-indigo-100 hover:to-blue-100 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                          ⚡
                        </div>
                        <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors duration-300">
                          Tecnologias Dominadas
                        </span>
                      </div>
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                        11+
                      </span>
                    </div>
                  </div>
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