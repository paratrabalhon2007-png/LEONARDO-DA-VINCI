
import React from 'react';
import { WHATSAPP_URL } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-school-yellow font-bold uppercase tracking-widest text-sm mb-4">Visite-nos</h2>
            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-school-blue mb-10">Onde estamos</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-school-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-school-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-school-blue mb-1">Endereço</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Rua Ozano Pereira, n. 5, Centro<br />
                    Heliópolis / BA
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-school-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-school-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-school-blue mb-1">Horário de Funcionamento</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Segunda a Sexta<br />
                    Manhã: 08:00h às 11:00h<br />
                    Tarde: 13:30h às 16:00h
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-school-blue mb-1">WhatsApp</h4>
                  <a href={WHATSAPP_URL} className="text-green-600 font-bold text-lg hover:underline">(75) 99709-8720</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl relative group">
              {/* Actual Map Image Background */}
              <img 
                src="https://i.imgur.com/hRlOtk6.png" 
                alt="Fachada da Escola" 
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-school-blue/40 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                <div className="bg-white/90 p-8 rounded-3xl shadow-xl max-w-sm">
                  <svg className="w-12 h-12 text-school-blue mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  <h4 className="font-bold text-school-blue text-2xl mb-2">Heliópolis / BA</h4>
                  <p className="text-slate-600 mb-6 font-medium">Estamos localizados no coração da cidade.</p>
                  <a 
                    href="https://maps.app.goo.gl/qB61j2Z6Nkcpcdt46" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-school-blue text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-800 transition shadow-lg inline-block"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-school-yellow/30 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
