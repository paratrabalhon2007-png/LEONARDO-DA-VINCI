
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

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500">
              <img 
                src={img} 
                alt={`Atividade Escolar ${idx + 1}`} 
                className="w-full h-auto object-cover object-top group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <span className="text-white font-bold text-sm">Leonardo Da Vinci</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
