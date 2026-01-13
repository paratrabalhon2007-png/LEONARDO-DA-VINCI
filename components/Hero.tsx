
import React from 'react';
import { WHATSAPP_URL, GALLERY_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('diferenciais');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="inicio" className="relative pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-school-blue/5 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-school-yellow/10 border border-school-yellow text-school-yellow font-bold text-sm mb-6 uppercase tracking-widest">
            Matrículas Abertas 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-school-blue leading-tight mb-6">
            Inovação que forma cidadãos <br />
            <span className="text-school-lightBlue">preparados para o amanhã</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl">
            Desde a Educação Infantil até o Fundamental II, oferecemos um ensino que integra tecnologia, valores e excelência acadêmica em Heliópolis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-school-blue text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Garantir minha vaga
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <button 
              onClick={handleScroll}
              className="px-8 py-4 bg-white text-school-blue border-2 border-school-blue rounded-xl font-bold text-lg hover:bg-school-blue/5 transition flex items-center justify-center cursor-pointer shadow-md"
            >
              Conhecer cursos
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                src={GALLERY_IMAGES[0]} 
                alt="Educação" 
                className="rounded-2xl shadow-2xl w-full h-48 object-cover object-top transform -rotate-3 hover:rotate-0 transition duration-500"
              />
              <img 
                src={GALLERY_IMAGES[2]} 
                alt="Educação" 
                className="rounded-2xl shadow-2xl w-full h-64 object-cover object-top transform rotate-2 hover:rotate-0 transition duration-500"
              />
            </div>
            <div className="space-y-4">
              <img 
                src={GALLERY_IMAGES[1]} 
                alt="Educação" 
                className="rounded-2xl shadow-2xl w-full h-64 object-cover object-top transform rotate-3 hover:rotate-0 transition duration-500"
              />
              <img 
                src={GALLERY_IMAGES[3]} 
                alt="Educação" 
                className="rounded-2xl shadow-2xl w-full h-48 object-cover object-top transform -rotate-2 hover:rotate-0 transition duration-500"
              />
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-school-yellow rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-school-blue rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
