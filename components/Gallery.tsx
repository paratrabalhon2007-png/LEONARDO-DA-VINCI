
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-school-blue font-display font-extrabold text-3xl md:text-5xl mb-4">Nossa Vida Escolar</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Momentos especiais que constroem o futuro e as memórias das nossas crianças.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500 aspect-[3/4]"
            >
              <img 
                src={img} 
                alt={`Atividade Escolar ${idx + 1}`} 
                className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <span className="text-school-yellow font-bold text-xs uppercase tracking-widest block mb-1">Destaque</span>
                  <span className="text-white font-bold text-lg">Leonardo Da Vinci</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 italic">Arraste para o lado ou clique para ampliar (em breve)</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
