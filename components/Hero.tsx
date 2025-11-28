import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('mission');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Tunisia Landscape" 
          className="w-full h-full object-cover scale-105 animate-[kenburns_30s_ease-out_infinite_alternate]"
        />
        {/* Soft overlay using theme colors */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 drop-shadow-2xl text-italy-white">
            {HERO_TITLE}
          </h1>
          <div className="w-24 h-1 bg-italy-gold mx-auto mb-8"></div>
          <p className="font-sans text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-white/90 drop-shadow-md">
            {HERO_SUBTITLE}
          </p>
          
          <button 
            onClick={scrollToContent}
            className="mt-12 px-8 py-4 border-2 border-white hover:bg-white hover:text-italy-green transition-all duration-300 uppercase tracking-[0.2em] text-sm font-bold rounded-sm"
          >
            Inizia il Viaggio
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={scrollToContent}>
        <ChevronDown className="w-8 h-8 text-white animate-bounce" strokeWidth={1.5} />
      </div>
      
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Hero;