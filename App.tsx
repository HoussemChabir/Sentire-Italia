import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-italy-white">
      <Navbar />
      <Hero />
      <Mission />
      <Packages />
      <Destinations />
      <Experiences />
      
      {/* CTA Section */}
      <div className="bg-italy-red py-32 text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Pronto a scoprire la vera Tunisia?</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto mb-10"></div>
          <p className="text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed opacity-90">
            Scrivici: ti aiuteremo a creare un viaggio che rispecchia i tuoi interessi, il tuo ritmo e il tuo modo di viaggiare.
          </p>
          <button className="bg-white text-italy-red px-10 py-5 font-bold hover:bg-italy-green hover:text-white transition-all duration-300 shadow-2xl uppercase tracking-widest text-xs">
              Contattaci Ora
          </button>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;