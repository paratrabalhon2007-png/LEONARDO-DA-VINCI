
import React from 'react';
import { EDUCATION_LEVELS } from '../constants';

const EducationLevels: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-school-yellow font-bold tracking-widest uppercase text-sm mb-3">Onde tudo começa</h2>
        <h3 className="text-3xl md:text-5xl font-display font-extrabold text-school-blue">Nossos Níveis de Ensino</h3>
        <div className="w-20 h-1.5 bg-school-yellow mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {EDUCATION_LEVELS.map((level, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-slate-100"
          >
            <div className="h-60 overflow-hidden">
              <img 
                src={level.image} 
                alt={level.title} 
                className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-school-blue mb-4">{level.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {level.description}
              </p>
              <div className="flex items-center text-school-lightBlue font-bold group-hover:translate-x-2 transition cursor-pointer">
                Saiba mais
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            {/* Hover overlay accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-school-blue scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationLevels;
