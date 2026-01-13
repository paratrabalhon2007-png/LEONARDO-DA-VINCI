
import React, { useState } from 'react';
import { LOGO_URL, SCHOOL_NAME, WHATSAPP_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt={SCHOOL_NAME} className="h-14 w-auto rounded" />
            <div className="hidden sm:block">
              <span className="text-xl font-display font-bold text-school-blue leading-tight block uppercase">
                LEONARDO DA VINCI
              </span>
              <span className="text-xs font-semibold text-school-yellow uppercase tracking-wider">
                Centro Educacional
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-slate-600 hover:text-school-blue font-medium transition cursor-pointer">Início</button>
            <button onClick={() => scrollToSection('nossos-niveis')} className="text-slate-600 hover:text-school-blue font-medium transition cursor-pointer">Níveis</button>
            <button onClick={() => scrollToSection('diferenciais')} className="text-slate-600 hover:text-school-blue font-medium transition cursor-pointer">Diferenciais</button>
            <button onClick={() => scrollToSection('galeria')} className="text-slate-600 hover:text-school-blue font-medium transition cursor-pointer">Galeria</button>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-school-blue text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition shadow-lg hover:shadow-xl"
            >
              Matrículas Abertas
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl">
          <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-slate-700 font-medium py-2">Início</button>
          <button onClick={() => scrollToSection('nossos-niveis')} className="block w-full text-left text-slate-700 font-medium py-2">Níveis</button>
          <button onClick={() => scrollToSection('diferenciais')} className="block w-full text-left text-slate-700 font-medium py-2">Diferenciais</button>
          <button onClick={() => scrollToSection('galeria')} className="block w-full text-left text-slate-700 font-medium py-2">Galeria</button>
          <a 
            href={WHATSAPP_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-school-blue text-white text-center py-3 rounded-lg font-bold"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
