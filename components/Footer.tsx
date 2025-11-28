import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-italy-green text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Brand */}
          <div className="md:pr-10">
            <h2 className="text-3xl font-serif font-bold text-italy-white mb-6">Sentire Tunisia</h2>
            <p className="text-white/70 mb-8 font-light leading-relaxed font-serif italic text-lg">
              "Il viaggio che inizia dai sensi."
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-italy-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/60 hover:text-italy-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-italy-gold">Menu</h3>
            <ul className="space-y-4 text-white/70 font-light">
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinazioni</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Esperienze</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Chi Siamo</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-italy-gold">Contatti</h3>
            <ul className="space-y-6 text-white/70 font-light">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-italy-gold mr-4 mt-1" />
                <span>Tunisi, Avenue Habib Bourguiba<br/>Roma, Via dei Condotti</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-italy-gold mr-4" />
                <span>+39 06 12345678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-italy-gold mr-4" />
                <span>info@sentiretunisia.it</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Sentire Tunisia. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;