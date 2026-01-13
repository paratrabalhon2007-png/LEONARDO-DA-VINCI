
import React, { useRef } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-school-blue font-display font-extrabold text-3xl md:text-5xl mb-4">Nossa Vida Escolar</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Momentos especiais que constroem o futuro e as memórias das nossas crianças.</p>
        </div>

        <div className="relative group/gallery">
          {/* Mobile Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg text-school-blue sm:hidden"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg text-school-blue sm:hidden"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Container: Flex/Scroll on mobile, Grid on desktop */}
          <div 
            ref={scrollRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="min-w-[85%] sm:min-w-0 snap-center group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500 aspect-[3/4]"
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
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 italic block sm:hidden">Arraste para o lado ou use as setas para ver mais</p>
          <p className="text-slate-500 italic hidden sm:block">Clique para ampliar (em breve)</p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
