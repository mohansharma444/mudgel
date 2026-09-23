import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Home Visit', path: '/home-physiotherapy' },
    { name: 'Packages', path: '/packages' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav
      className={twMerge(
        clsx(
          'fixed w-full top-0 z-50 transition-all duration-500 border-b',
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3' 
            : 'bg-white border-transparent py-5'
        )
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-1.5 group">
            <span className="font-heading text-2xl tracking-tight text-dark-dark flex items-center">
              <span className="font-light">MUDGAL</span>
              <span className="font-extrabold ml-1.5">HEALTH</span>
              <span className="w-1.5 h-1.5 bg-gold rounded-full mx-1.5 group-hover:scale-150 transition-transform duration-300"></span>
              <span className="font-extrabold text-gold">CARE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={twMerge(
                  clsx(
                    'text-sm font-medium transition-colors duration-300 hover:text-gold relative group',
                    location.pathname === link.path ? 'text-gold' : 'text-dark-light'
                  )
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"></span>
                )}
              </Link>
            ))}
            
            <div className="flex items-center gap-6 ml-2 pl-6 border-l border-gray-200">
              <a href="tel:9785078209" className="flex items-center gap-2 text-dark font-medium hover:text-gold transition-colors group">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <span className="hidden xl:inline text-sm">9785078209</span>
              </a>
              <Link
                to="/contact"
                className="bg-dark-dark hover:bg-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-soft hover:shadow-glow transform hover:-translate-y-0.5"
              >
                Book Home Visit
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-gold focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 pb-6 pt-2">
          <div className="px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={twMerge(
                  clsx(
                    'block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300',
                    location.pathname === link.path
                      ? 'text-gold bg-gold/5'
                      : 'text-dark hover:text-gold hover:bg-gray-50'
                  )
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 px-4 pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center bg-dark-dark text-white px-4 py-3.5 rounded-xl font-semibold shadow-md hover:bg-gold transition-colors duration-300"
              >
                Book Home Visit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
