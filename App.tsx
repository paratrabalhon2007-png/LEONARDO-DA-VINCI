
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EducationLevels from './components/EducationLevels';
import FeaturesGrid from './components/FeaturesGrid';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <section id="nossos-niveis" className="scroll-mt-20">
          <EducationLevels />
        </section>
        <section id="diferenciais" className="bg-school-blue py-24 text-white scroll-mt-20">
          <FeaturesGrid />
        </section>
        <section id="galeria" className="scroll-mt-20">
          <Gallery />
        </section>
        <section id="contato" className="scroll-mt-20">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
