import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AplPcdProject = () => {
  useScrollAnimation();

  const techStack = [
    "Node.js 18+", "TypeScript 5.0+", "Express.js", "PostgreSQL 15+", 
    "Jest 29+", "JWT", "bcrypt", "Rate Limiting", "Helmet", "CORS"
  ];

  const features = [
    {
      icon: "👥",
      title: "Gestão de Candidatos PCD",
      description: "Cadastro completo com validação de CPF, idade mínima e dados pessoais"
    },
    {
      icon: "🏢",
      title: "Gestão de Empresas",
      description: "Cadastro de empresas contratantes e vinculação de colaboradores"
    },
    {
      icon: "💼",
      title: "Sistema de Vagas",
      description: "Criação, publicação e gestão do ciclo de vida das oportunidades"
    },
    {
      icon: "♿",
      title: "Gestão de Deficiências",
      description: "Sistema completo de acessibilidade e identificação de barreiras"
    },
    {
      icon: "📅",
      title: "Calendário e Eventos",
      description: "Sistema de calendários por empresa e gestão de eventos"
    },
    {
      icon: "🛡️",
      title: "Segurança Enterprise",
      description: "Rate limiting, JWT, bcrypt, validações e logs sanitizados"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 animate-float">🧠</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up px-2">
              APL PCD API
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto animate-fade-in px-4" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              Sistema de Gestão de Inclusão Profissional para Pessoas com Deficiência
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 animate-scale-in px-4" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 rounded-full text-sm sm:text-base md:text-lg">Node.js + TypeScript</span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 rounded-full text-sm sm:text-base md:text-lg">PostgreSQL</span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 rounded-full text-sm sm:text-base md:text-lg">Enterprise-Grade</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <a 
                href="https://github.com/caua-mendonca/APL_PCD_API" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo do Projeto */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 scroll-animate px-2">
              📊 Objetivo do Projeto
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed scroll-animate px-4">
              Criação de uma <strong>plataforma back-end completa</strong> para promover a inclusão profissional 
              de pessoas com deficiência no mercado de trabalho. A API realiza a intermediação entre 
              <strong> candidatos, empresas, vagas e colaboradores</strong>, oferecendo um controle 
              padronizado, validado e seguro com <strong>aderência total às normas legais</strong> de contratação PCD.
            </p>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 scroll-animate px-2">
              ✅ Funcionalidades Implementadas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 group cursor-pointer scroll-animate-scale"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:animate-pulse-soft transition-all duration-300">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 scroll-animate px-2">
              🛠️ Stack Tecnológico
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2 scroll-animate">
            {techStack.map((tech, index) => (
              <span 
                key={tech}
                className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-sm sm:text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Arquitetura e Segurança */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="scroll-animate-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                🏗️ Arquitetura Enterprise
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Arquitetura <strong>enterprise-grade</strong> baseada em <strong>Clean Architecture</strong> 
                com Service Layer e Dependency Injection para máxima maintibilidade e escalabilidade.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-green-500 mr-3">✅</span>
                  Clean Architecture com Service Layer
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-green-500 mr-3">✅</span>
                  Dependency Injection Container
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-green-500 mr-3">✅</span>
                  Repository Pattern
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-green-500 mr-3">✅</span>
                  Interface Segregation
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-green-500 mr-3">✅</span>
                  SOLID Principles
                </li>
              </ul>
            </div>
            
            <div className="scroll-animate-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                🔐 Segurança Enterprise-Grade
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Sistema de segurança multicamada com proteção contra ataques, 
                validações rigorosas e conformidade com <strong>LGPD</strong> e 
                <strong> Lei de Cotas PCD</strong>.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-blue-500 mr-3">🛡️</span>
                  Rate Limiting (100 req/15min)
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-blue-500 mr-3">🛡️</span>
                  Login Rate Limiting (5 attempts/15min)
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-blue-500 mr-3">🛡️</span>
                  Helmet Security Headers
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-blue-500 mr-3">🛡️</span>
                  CORS configurado
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-blue-500 mr-3">🛡️</span>
                  Input Sanitization
                </li>
                <li className="flex items-center text-sm sm:text-base text-gray-700">
                  <span className="text-blue-500 mr-3">🛡️</span>
                  Prepared Statements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Banco de Dados */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 scroll-animate">
              🛢️ Estrutura do Banco de Dados
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto scroll-animate px-4">
              Banco de dados <strong>PostgreSQL</strong> com estrutura normalizada, 
              relacionamentos bem definidos e <strong>16 tabelas</strong> especializadas.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm scroll-animate-scale">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">👥 Entidades Principais</h4>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <div>• tb_candidato</div>
                  <div>• tb_empresa</div>
                  <div>• tb_colaborador</div>
                  <div>• tb_vaga</div>
                  <div>• tb_administrador</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">🔗 Relacionamentos</h4>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <div>• tb_candidato_vaga</div>
                  <div>• tb_empresa_vaga</div>
                  <div>• tb_empresa_colaborador</div>
                  <div>• tb_barreira_acessibilidade</div>
                  <div>• tb_sub_tipo_barreira</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">♿ Acessibilidade</h4>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <div>• tb_acessibilidade</div>
                  <div>• tb_barreira</div>
                  <div>• tb_tipo_deficiencia</div>
                  <div>• tb_sub_tipo_deficiencia</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">📅 Sistema Auxiliar</h4>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <div>• tb_calendario</div>
                  <div>• tb_evento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema de IDs */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 scroll-animate">
              🆔 Sistema de Identificação
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto scroll-animate px-4">
              Todos os registros utilizam <strong>IDs únicos</strong> com prefixos semânticos 
              para fácil identificação e organização.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl scroll-animate-scale">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
              {[
                {icon: "👤", id: "CAND-563829", desc: "Candidatos"},
                {icon: "🏢", id: "EMP-123456", desc: "Empresas"},
                {icon: "👨💼", id: "COLAB-87274", desc: "Colaboradores"},
                {icon: "💼", id: "VAGA-763239", desc: "Vagas"},
                {icon: "📅", id: "EVENT-567890", desc: "Eventos"},
                {icon: "📅", id: "CALENDAR-456789", desc: "Calendários"},
                {icon: "📋", id: "SUBT-901234", desc: "Subtipo Deficiência"},
                {icon: "🦾", id: "DMOTO-123456", desc: "Deficiência Motora"},
                {icon: "🦻", id: "DAUDI-789012", desc: "Deficiência Auditiva"},
                {icon: "👁️", id: "DVISU-345678", desc: "Deficiência Visual"},
                {icon: "🚧", id: "BARR-234567", desc: "Barreiras"},
                {icon: "♿", id: "ACES-567890", desc: "Acessibilidade"}
              ].map((item, index) => (
                <div key={index} className="bg-white p-3 sm:p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                  <div className="font-mono text-xs sm:text-sm text-blue-600 mb-1">{item.id}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testes e Qualidade */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 scroll-animate">
              🧪 Testes e Qualidade
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {icon: "📊", number: "110+", title: "Testes Implementados", subtitle: "60 unitários + 50 integração", color: "green"},
              {icon: "🎯", number: "99%+", title: "Cobertura de Código", subtitle: "Funções críticas testadas", color: "blue"},
              {icon: "🏆", number: "8.7/10", title: "Nota Geral", subtitle: "Production-Ready", color: "purple"}
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl text-center hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 group scroll-animate-scale">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:animate-pulse-soft">{item.icon}</div>
                <div className={`text-2xl sm:text-3xl font-bold text-${item.color}-600 mb-2`}>{item.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{item.title}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desenvolvimento */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 scroll-animate">
              🚀 Desenvolvimento e Versionamento
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="scroll-animate-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">📝 Conventional Commits</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                O projeto segue rigorosamente o padrão <strong>Conventional Commits</strong> 
                para manter um histórico limpo e semântico.
              </p>
              <div className="space-y-3">
                {[
                  {type: "feat:", desc: "Nova funcionalidade", color: "green"},
                  {type: "fix:", desc: "Correção de bug", color: "red"},
                  {type: "docs:", desc: "Documentação", color: "blue"},
                  {type: "test:", desc: "Testes", color: "purple"},
                  {type: "chore:", desc: "Tarefas de manutenção", color: "yellow"},
                  {type: "refactor:", desc: "Refatoração de código", color: "indigo"}
                ].map((commit, index) => (
                  <div key={index} className="flex items-center">
                    <span className={`bg-${commit.color}-100 text-${commit.color}-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono mr-2 sm:mr-3`}>{commit.type}</span>
                    <span className="text-sm sm:text-base text-gray-600">{commit.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scroll-animate-right">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">🌿 Estrutura de Branches</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                O projeto utiliza uma estrutura de <strong>3 branches principais</strong> 
                para organizar o desenvolvimento e deployment.
              </p>
              <div className="space-y-4">
                {[
                  {name: "master", desc: "Branch principal com código estável para produção", color: "green"},
                  {name: "develop", desc: "Branch de desenvolvimento com novas features", color: "yellow"},
                  {name: "test", desc: "Branch para testes e validações", color: "blue"}
                ].map((branch, index) => (
                  <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <span className={`bg-${branch.color}-500 w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3`}></span>
                      <span className="text-sm sm:text-base font-semibold">{branch.name}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">{branch.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status e Links */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 scroll-animate px-2">
              📊 Status do Projeto
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 scroll-animate">
              {[
                {icon: "🚀", title: "PRODUCTION-READY", subtitle: "Versão 3.0.0 Enterprise"},
                {icon: "🔒", title: "Segurança 9/10", subtitle: "Rate limiting + Helmet"},
                {icon: "🏗️", title: "Arquitetura 9/10", subtitle: "Service Layer + DI"},
                {icon: "📝", title: "Documentação", subtitle: "Completa + Guias"}
              ].map((status, index) => (
                <div key={index} className="bg-white/10 p-4 sm:p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <div className="text-xl sm:text-2xl mb-2">{status.icon}</div>
                  <div className="text-sm sm:text-base font-semibold">{status.title}</div>
                  <div className="text-xs sm:text-sm opacity-80">{status.subtitle}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 scroll-animate px-4">
              <a 
                href="https://github.com/caua-mendonca/APL_PCD_API" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                📧 Ver Repositório
              </a>
              <a 
                href="https://www.linkedin.com/in/devmelo/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                💼 LinkedIn
              </a>
            </div>
            
            <div className="mt-8 sm:mt-12 text-center scroll-animate px-4">
              <p className="text-base sm:text-lg opacity-90">
                <em>Desenvolvido com ❤️ para promover a inclusão profissional de pessoas com deficiência</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AplPcdProject;