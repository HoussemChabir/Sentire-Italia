import React from 'react';
import { INTRO_PARAGRAPHS, MISSION_TITLE, MISSION_INTRO, MISSION_POINTS, MISSION_CONCLUSION } from '../constants';
import { Star } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="bg-italy-white overflow-hidden">
      {/* Introduction Block - Full Width text */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-italy-green mb-10 tracking-tight">
          Scopri l'autentico
        </h2>
        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-600 font-sans">
            {INTRO_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
        <div className="w-16 h-1 bg-italy-red mx-auto mt-12"></div>
      </div>

      {/* Split Layout: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row">
        {/* Image Side */}
        <div className="w-full md:w-1/2 h-[600px] md:h-auto relative">
          <img 
            src="https://picsum.photos/800/1200?random=15" 
            alt="Tunisia Culture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-italy-green/10"></div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 bg-white p-12 md:p-20 flex flex-col justify-center">
          <div className="max-w-lg">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-italy-red mb-6">
              {MISSION_TITLE}
            </h3>
            <h4 className="text-3xl font-serif text-italy-green mb-8 leading-snug">
              {MISSION_INTRO}
            </h4>

            <ul className="space-y-6 mb-10">
              {MISSION_POINTS.map((point, index) => (
                <li key={index} className="flex items-start group">
                  <div className="w-2 h-2 bg-italy-gold mt-2 mr-4 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-light text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <p className="font-serif italic text-xl text-gray-500 border-l-4 border-italy-gold pl-6 py-2">
              {MISSION_CONCLUSION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;