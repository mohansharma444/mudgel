import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-dark text-white pt-20 pb-28 md:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <span className="font-heading text-2xl tracking-tight text-white flex items-center">
                <span className="font-light">MUDGAL</span>
                <span className="font-extrabold ml-1.5">HEALTH</span>
                <span className="w-1.5 h-1.5 bg-gold rounded-full mx-1.5 group-hover:scale-150 transition-transform duration-300"></span>
                <span className="font-extrabold text-gold">CARE</span>
              </span>
            </Link>
            <p className="text-gray-400 font-medium tracking-wide text-sm uppercase">Physiotherapy & Rehabilitation</p>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Personalized physiotherapy and rehabilitation services focused on improving mobility, reducing pain and helping you return to your daily activities with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-gold"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Home Visit', path: '/home-physiotherapy' },
                { name: 'Conditions', path: '/conditions' },
                { name: 'Packages', path: '/packages' },
                { name: 'FAQ', path: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 text-sm group">
                    <ChevronRight className="w-3 h-3 text-gold/50 group-hover:text-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-gold"></span>
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 text-sm">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <span className="text-gold font-heading font-bold">Dr.</span>
                </div>
                <div className="mt-1">
                  <p className="font-medium text-white text-base">Dr. Neeraj Mudgal</p>
                  <p className="text-gray-500 font-light text-xs uppercase tracking-widest mt-1">Physiotherapist</p>
                </div>
              </li>
              <li>
                <a href="tel:9785078209" className="flex items-center gap-4 text-gray-400 hover:text-gold transition-colors text-sm group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-gold/30 group-hover:bg-gold/10 transition-colors">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  9785078209
                </a>
              </li>
              <li>
                <a href="https://instagram.com/mudgal_health_care2772" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-gold transition-colors text-sm group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-gold/30 group-hover:bg-gold/10 transition-colors">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  @mudgal_health_care2772
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-gold"></span>
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight className="w-3 h-3 text-gold/50 group-hover:text-gold transition-colors" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight className="w-3 h-3 text-gold/50 group-hover:text-gold transition-colors" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 text-sm group">
                  <ChevronRight className="w-3 h-3 text-gold/50 group-hover:text-gold transition-colors" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            
            <div className="mt-8">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-dark-dark px-8 py-3 rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-glow transform hover:-translate-y-1"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left font-light">
            &copy; {currentYear} Mudgal Health Care. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right font-light flex items-center gap-2">
            Designed for better mobility <span className="w-1 h-1 bg-gold rounded-full"></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
