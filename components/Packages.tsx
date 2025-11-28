import React from 'react';
import { PACKAGES } from '../constants';
import { Clock, CheckCircle } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-24 px-6 md:px-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-italy-gold uppercase tracking-[0.2em] text-sm font-bold">Le Nostre Proposte</span>
          <h2 className="text-4xl md:text-5xl font-serif text-italy-green mt-4 mb-6">Itinerari d'Autore</h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-light">
            Viaggi curati nei minimi dettagli per farti vivere l'essenza della Tunisia senza pensieri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="group relative flex flex-col bg-italy-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              {/* Image Header */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={pkg.imageUrl} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-italy-white/90 backdrop-blur-sm text-italy-green px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-sm">
                  {pkg.price}
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-italy-red uppercase tracking-widest">{pkg.subtitle}</span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {pkg.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-italy-green mb-4 group-hover:text-italy-red transition-colors">
                  {pkg.title}
                </h3>
                
                <p className="text-gray-500 font-light text-sm mb-6 leading-relaxed flex-1">
                  {pkg.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase text-gray-400 mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-italy-gold mr-2 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-4 border border-italy-green text-italy-green font-bold uppercase text-xs tracking-widest hover:bg-italy-green hover:text-white transition-all duration-300">
                  Richiedi Programma
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;