
import React from 'react';
import { WHATSAPP_URL } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('diferenciais');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="inicio" className="relative pt-20 overflow-hidden bg-slate-50 min-h-[80vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-school-blue/5 -skew-x-12 transform translate-x-1/4 hidden lg:block"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-school-yellow/5 skew-x-12 transform -translate-x-1/4 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full flex flex-col items-center">
        <div className="max-w-5xl w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-school-yellow/10 border border-school-yellow/40 text-school-yellow font-bold text-sm mb-10 uppercase tracking-[0.2em] shadow-sm">
            Matrículas Abertas 2026
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-school-blue leading-[1.1] mb-10 tracking-tight max-w-4xl">
            Inovação que forma cidadãos <br className="hidden md:block" />
            <span className="text-school-lightBlue">preparados para o amanhã</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Desde a Educação Infantil até o Fundamental II, oferecemos um ensino que integra tecnologia, valores e excelência acadêmica em Heliópolis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto items-center">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-school-blue text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 min-w-[260px] w-full sm:w-auto"
            >
              Garantir minha vaga
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button 
              onClick={handleScroll}
              className="px-10 py-5 bg-white text-school-blue border-2 border-school-blue rounded-2xl font-bold text-lg hover:bg-school-blue/5 transition-all flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg min-w-[260px] w-full sm:w-auto"
            >
              Conhecer cursos
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-school-yellow/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-school-blue/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default Hero;