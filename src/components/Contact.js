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
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="section-padding container-max">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Vamos Conversar
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            Interessado em trabalhar juntos? Entre em contato e vamos criar algo incrível
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-8 animate-slide-left">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                      📧
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Email</p>
                      <p className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">diegomelo.suporte@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* LinkedIn - Com ícone no desktop, sem ícone no mobile */}
                  <div className="flex items-center gap-4 group hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                    <div className="hidden sm:flex w-12 h-12 bg-purple-600 rounded-lg items-center justify-center group-hover:scale-110 group-hover:bg-purple-500 transition-all duration-300">
                      💼
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">LinkedIn</p>
                      <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">https://www.linkedin.com/in/devmelo/</p>
                    </div>
                  </div>
                  
                  {/* GitHub - Com ícone no desktop, sem ícone no mobile */}
                  <div className="flex items-center gap-4 group hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                    <div className="hidden sm:flex w-12 h-12 bg-green-600 rounded-lg items-center justify-center group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
                      💻
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">GitHub</p>
                      <p className="text-white font-medium group-hover:text-green-300 transition-colors duration-300">https://github.com/DiegoHenriqueMelo</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 hover:scale-105 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-3">Disponibilidade</h4>
                <p className="text-gray-300">
                  Atualmente disponível para novos projetos e oportunidades freelance.
                  Respondo em até 24 horas.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300 animate-slide-right">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slide-up" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
                  <label className="block text-gray-300 mb-2">Nome</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:scale-105 text-white transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:scale-105 text-white transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="animate-slide-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                  <label className="block text-gray-300 mb-2">Mensagem</label>
                  <textarea 
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:scale-105 text-white resize-none transition-all duration-300"
                    placeholder="Conte-me sobre seu projeto..."
                  ></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-600 text-white p-3 rounded-lg text-center animate-fade-in">
                    ✅ Mensagem enviada com sucesso! Você receberá no seu email.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-600 text-white p-3 rounded-lg text-center animate-fade-in">
                    ❌ Erro ao enviar mensagem. Tente novamente.
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium animate-scale-in ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  style={{animationDelay: '0.4s', animationFillMode: 'both'}}
                >
                  {isSubmitting ? '⏳ Enviando...' : 'Enviar Mensagem'}
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