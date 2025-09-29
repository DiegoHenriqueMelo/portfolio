import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white py-12 lg:py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>
      
      <div className="section-padding container-max relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Left side - Copyright */}
            <div className="text-center lg:text-left animate-fade-in">
              <p className="text-blue-100/80 hover:text-blue-100 transition-colors duration-300 text-base lg:text-lg">
                © 2025 <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Portfólio Dev Melo</span>
              </p>
              <p className="text-blue-100/60 mt-2 flex items-center justify-center lg:justify-start gap-2">
                Desenvolvido com 
                <span className="text-red-400 animate-pulse text-xl">❤️</span> 
                usando 
                <span className="font-semibold text-cyan-400">React</span> 
                e 
                <span className="font-semibold text-blue-400">Tailwind CSS</span>
              </p>
            </div>
            
            {/* Right side - Social Links */}
            <div className="flex gap-6 lg:gap-8 animate-slide-up">
              <a 
                href="https://github.com/DiegoHenriqueMelo" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
                aria-label="GitHub"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <span className="text-blue-100/80 group-hover:text-white font-medium">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/devmelo/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                <span className="text-blue-100/80 group-hover:text-white font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="mailto:diegomelo.suporte@gmail.com" 
                className="group flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
                aria-label="Email"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  ✉️
                </div>
                <span className="text-blue-100/80 group-hover:text-white font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-8 lg:mt-12 pt-6 lg:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-100/60">
              <p>Feito com dedicação e muito ☕</p>
              <p className="flex items-center gap-2">
                <span>Always learning, always growing</span>
                <span className="text-lg animate-bounce">🚀</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;