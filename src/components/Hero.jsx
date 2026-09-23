import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-dark-light">Physiotherapy & Rehabilitation</span>
              </div>
              
              <h1 className="text-4xl tracking-tight font-heading font-extrabold text-dark-dark sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] mb-6 text-balance">
                Recover Better.<br/>
                <span className="text-gold">Move Better.</span><br/>
                Live Better.
              </h1>
              
              <p className="mt-4 text-base text-gray-500 sm:text-lg md:text-xl lg:mx-0 leading-relaxed font-light text-balance mb-10 max-w-xl">
                Personalized physiotherapy and rehabilitation services focused on improving mobility, reducing pain and helping you return to your daily activities with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full shadow-soft hover:shadow-glow text-white bg-dark-dark hover:bg-gold transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1"
                >
                  Book a Home Visit
                </Link>
                <a
                  href="https://wa.me/919785078209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-semibold rounded-full text-dark hover:bg-gray-50 hover:border-gold hover:text-gold transition-all duration-300 w-full sm:w-auto group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gold transition-colors" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gray-100 rounded-[2.5rem] transform rotate-3 -z-10 hidden sm:block"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Professional Physiotherapy Session"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-dark/40 to-transparent mix-blend-multiply"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-50 backdrop-blur-md bg-white/90"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Call for inquiry</p>
                  <a href="tel:9785078209" className="text-dark-dark font-heading font-bold text-lg hover:text-gold transition-colors">
                    9785078209
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
