
import React from 'react';
import { SCHOOL_FULL_NAME, LOGO_URL, INSTAGRAM_URL, WHATSAPP_URL } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-school-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={LOGO_URL} alt="Logo" className="h-16 w-auto brightness-110" />
              <div>
                <h4 className="text-2xl font-display font-bold leading-tight">CENTRO EDUCACIONAL<br />LEONARDO DA VINCI</h4>
              </div>
            </div>
            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              Formando muito mais que alunos, formamos cidadãos conscientes e preparados para os desafios de um mundo em constante evolução.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-6 text-school-yellow uppercase tracking-wider">Acesso Rápido</h5>
            <div className="flex flex-col space-y-4 text-slate-300 items-start">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-white transition cursor-pointer">Início</button>
              <button onClick={() => scrollToSection('nossos-niveis')} className="hover:text-white transition cursor-pointer">Nossos Níveis</button>
              <button onClick={() => scrollToSection('diferenciais')} className="hover:text-white transition cursor-pointer">Diferenciais</button>
              <button onClick={() => scrollToSection('galeria')} className="hover:text-white transition cursor-pointer">Galeria</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-white transition cursor-pointer">Localização</button>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-xl mb-6 text-school-yellow uppercase tracking-wider">Social</h5>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-school-yellow hover:text-school-blue transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.481 8.413-.003 6.557-5.338-11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.303-1.654l.361.214a9.854 9.854 0 005.031 1.378h.005c5.454 0 9.889-4.435 9.892-9.889.002-2.64-1.03-5.122-2.898-6.99a9.825 9.825 0 00-6.994-2.893c-5.449 0-9.883 4.434-9.888 9.883-.001 2.096.547 4.142 1.51 5.26l.235.374-1.001 3.65 3.743-.981z"/></svg>
              </a>
            </div>
            <div className="mt-10">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-school-yellow text-school-blue font-bold px-8 py-3.5 rounded-xl inline-block hover:scale-105 transition shadow-lg text-lg uppercase tracking-wider"
              >
                MATRÍCULAS 2026
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_FULL_NAME}. Todos os direitos reservados.</p>
          <p className="mt-2">Feito com seriedade para o futuro das nossas crianças.</p>
        </div>
      </div>
      
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white md:hidden z-50 animate-bounce"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.481 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.303-1.654l.361.214a9.854 9.854 0 005.031 1.378h.005c5.454 0 9.889-4.435 9.892-9.889.002-2.64-1.03-5.122-2.898-6.99a9.825 9.825 0 00-6.994-2.893c-5.449 0-9.883 4.434-9.888 9.883-.001 2.096.547 4.142 1.51 5.26l.235.374-1.001 3.65 3.743-.981z"/></svg>
      </a>
    </footer>
  );
};

export default Footer;
