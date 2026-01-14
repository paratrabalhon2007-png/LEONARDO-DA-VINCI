
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

  // Imagens para a colagem do Hero ajustadas conforme o print:
  // 1. Menino com camisa amarela (2gSsCMX)
  // 2. Menino com gola laranja (HSTbReH)
  // 3. Menina com certificado fundo verde (N96JzpV)
  // 4. Menina com saia laranja (CxXNfP6)
  const heroImages = [
    "https://i.imgur.com/2gSsCMX.png",
    "https://i.imgur.com/HSTbReH.png",
    "https://i.imgur.com/N96JzpV.png",
    "https://i.imgur.com/CxXNfP6.png"
  ];

  return (
    <div id="inicio" className="relative pt-20 overflow-hidden bg-slate-50 min-h-[85vh] flex items-center">
      {/* Decoração de Fundo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-school-blue/5 -skew-x-12 transform translate-x-1/4 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Texto e Botões */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-school-yellow/10 border border-school-yellow/40 text-school-yellow font-bold text-sm mb-8 uppercase tracking-[0.2em] shadow-sm">
              Matrículas Abertas 2026
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-school-blue leading-[1.1] mb-8 tracking-tight">
              Inovação que forma cidadãos <br className="hidden md:block" />
              <span className="text-school-lightBlue">preparados para o amanhã</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Desde a Educação Infantil até o Fundamental II, oferecemos um ensino que integra tecnologia, valores e excelência acadêmica em Heliópolis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-school-blue text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Garantir minha vaga
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button 
                onClick={handleScroll}
                className="px-8 py-4 bg-white text-school-blue border-2 border-school-blue rounded-2xl font-bold text-lg hover:bg-school-blue/5 transition-all flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg"
              >
                Conhecer cursos
              </button>
            </div>
          </div>

          {/* Lado Direito: Grid de Fotos (Alinhado e preenchendo o quadrado) */}
          <div className="hidden lg:grid grid-cols-2 gap-6 relative">
            {heroImages.map((src, idx) => (
              <div 
                key={idx}
                className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white transition-transform duration-500 hover:scale-105 hover:z-20 bg-white"
              >
                <img 
                  src={src} 
                  alt="Aluno Leonardo Da Vinci" 
                  className="w-full h-full aspect-square object-cover object-center"
                />
              </div>
            ))}
            {/* Elemento Decorativo atrás das fotos */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-school-yellow/15 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>

      {/* Elementos flutuantes decorativos */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-school-yellow/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-school-blue/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default Hero;
