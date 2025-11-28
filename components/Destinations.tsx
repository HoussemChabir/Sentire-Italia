import React from 'react';
import { DESTINATIONS } from '../constants';

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 px-6 md:px-12 bg-italy-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-italy-red uppercase tracking-[0.2em] text-sm font-bold">Esplora</span>
          <h2 className="text-5xl md:text-6xl font-serif text-italy-green mt-4 mb-6">Destinazioni</h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="group cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-500 ease-out flex flex-col h-full rounded-sm overflow-hidden">
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={dest.imageUrl} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-serif text-italy-green mb-4 group-hover:text-italy-red transition-colors">
                  {dest.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed text-base flex-1">
                  {dest.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-italy-green transition-colors">Scopri di più</span>
                   <span className="text-italy-gold text-xl opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;