import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Configuração do EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'diegomelo.suporte@gmail.com'
      };

      // Envia email usando EmailJS
      await emailjs.send(
        'service_b51gmpl', // Service ID
        'template_3dyt68n',  // Template ID
        templateParams,
        'qG8QJCCgOxd4xTQva' // Public Key
      );

      console.log('Email enviado com sucesso!');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white relative overflow-hidden">
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
            Vamos Conversar
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100/80 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Interessado em trabalhar juntos? Entre em contato e vamos criar algo extraordinário
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-8 lg:space-y-12 animate-slide-left">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        ✉️
                      </div>
                      <div>
                        <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300 text-sm lg:text-base">Email</p>
                        <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300 text-base lg:text-lg">
                          diegomelo.suporte@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        💼
                      </div>
                      <div>
                        <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300 text-sm lg:text-base">LinkedIn</p>
                        <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-violet-400 transition-all duration-300 text-base lg:text-lg">
                          linkedin.com/in/devmelo
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500">
                      <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        💻
                      </div>
                      <div>
                        <p className="text-blue-100/70 group-hover:text-blue-100 transition-colors duration-300 text-sm lg:text-base">GitHub</p>
                        <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-blue-400 transition-all duration-300 text-base lg:text-lg">
                          github.com/DiegoHenriqueMelo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">🚀</div>
                  <h4 className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Disponibilidade
                  </h4>
                </div>
                <p className="text-blue-100/80 text-base lg:text-lg leading-relaxed">
                  Atualmente <span className="font-semibold text-green-400">disponível</span> para novos projetos e oportunidades freelance.
                  Respondo em até <span className="font-semibold text-blue-400">24 horas</span>.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 animate-slide-right">
              <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 mb-8">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                <div className="animate-slide-up" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
                  <label className="block text-blue-100/80 mb-3 font-medium text-base lg:text-lg">Nome</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:scale-105 text-white text-base lg:text-lg transition-all duration-300 placeholder:text-blue-100/50"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                  <label className="block text-blue-100/80 mb-3 font-medium text-base lg:text-lg">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:scale-105 text-white text-base lg:text-lg transition-all duration-300 placeholder:text-blue-100/50"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="animate-slide-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                  <label className="block text-blue-100/80 mb-3 font-medium text-base lg:text-lg">Mensagem</label>
                  <textarea 
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 focus:scale-105 text-white text-base lg:text-lg resize-none transition-all duration-300 placeholder:text-blue-100/50"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300 p-4 rounded-xl text-center animate-fade-in backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">✅</span>
                      <span className="font-semibold">Mensagem enviada com sucesso!</span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-400/30 text-red-300 p-4 rounded-xl text-center animate-fade-in backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">❌</span>
                      <span className="font-semibold">Erro ao enviar. Tente novamente!</span>
                    </div>
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 lg:py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 text-white rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-violet-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 font-semibold text-base lg:text-lg animate-scale-in ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  style={{animationDelay: '0.4s', animationFillMode: 'both'}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <span>Enviar Mensagem</span>
                      <span className="text-xl">🚀</span>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;