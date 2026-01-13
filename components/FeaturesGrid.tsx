
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3">
          <h2 className="text-school-yellow font-bold uppercase tracking-wider mb-4">Diferenciais</h2>
          <h3 className="text-3xl md:text-5xl font-display font-extrabold mb-8 leading-tight">Por que escolher a nossa escola?</h3>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Oferecemos uma estrutura completa e projetos que vão além da sala de aula tradicional, preparando o aluno para a vida.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/20">
              <div className="bg-school-yellow text-school-blue p-3 rounded-xl shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" /></svg>
              </div>
              <span className="font-bold text-xl">+15 Anos de Tradição</span>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-school-yellow flex items-center justify-center text-school-blue shrink-0 font-bold group-hover:scale-110 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-semibold text-lg">{feature}</span>
            </div>
          ))}
          {/* Decorative visual for 'and much more' */}
          <div className="col-span-full mt-4 text-center p-8 border-2 border-dashed border-white/20 rounded-3xl bg-white/5">
            <span className="text-school-yellow font-bold text-xl italic block">E muito mais para o crescimento do seu filho!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
