import React from 'react';
import { EXPERIENCES, WHY_US } from '../constants';
import { Check } from 'lucide-react';

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="bg-italy-white py-24">
      {/* Split Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-italy-green mb-6">Esperienze Esclusive</h2>
          <p className="max-w-2xl text-gray-600 font-light text-lg">
            La Tunisia offre momenti indimenticabili per ogni viaggiatore. Dai tour culturali alle avventure nel deserto.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Modular Grid of Experiences */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="bg-white p-8 border border-gray-100 hover:border-italy-gold/50 hover:shadow-lg transition-all duration-300 rounded-sm group">
                <div className="mb-6 text-italy-green group-hover:text-italy-red transition-colors">
                  {React.cloneElement(exp.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">{exp.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Why Us (Side Block) */}
          <div className="lg:w-1/3">
            <div className="bg-italy-green text-white p-10 h-full relative overflow-hidden rounded-sm shadow-xl">
                <div className="relative z-10">
                    <h3 className="text-2xl font-serif mb-8 border-b border-white/20 pb-4">
                    Perché Sceglierci
                    </h3>
                    <ul className="space-y-6">
                    {WHY_US.map((reason, idx) => (
                        <li key={idx} className="flex items-start text-base group">
                        <Check className="w-5 h-5 text-italy-gold mr-4 mt-0.5 flex-shrink-0" />
                        <span className="font-sans font-light text-white/90">{reason}</span>
                        </li>
                    ))}
                    </ul>
                    
                    <button className="mt-12 w-full bg-italy-white text-italy-green py-4 px-6 font-bold uppercase tracking-widest text-xs hover:bg-italy-gold hover:text-white transition-colors">
                        Richiedi Preventivo
                    </button>
                </div>
                
                {/* Decorative circle */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-italy-gold/10 rounded-full blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiences;