import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone } from 'lucide-react';

export default function HomePhysiotherapy() {
  const benefits = [
    'Convenient for patients',
    'Personalized attention',
    'Suitable for elderly and mobility-limited patients',
    'Individualized exercise guidance',
    'Treatment in a comfortable home environment'
  ];

  return (
    <section className="py-24 bg-dark-dark text-white overflow-hidden relative">
      {/* Premium Dark Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          <div className="mb-16 lg:mb-0 order-2 lg:order-1 mt-16 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] aspect-[4/3] border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Home visit physiotherapy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-dark/80 via-dark-dark/20 to-transparent mix-blend-multiply"></div>
            </motion.div>
            
            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#c5a059_2px,transparent_2px)] [background-size:12px_12px] opacity-30 -z-10"></div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-gold"></span>
                <span className="text-gold font-semibold tracking-widest uppercase text-sm">
                  Doorstep Service
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-[1.15] text-balance">
                Physiotherapy at Your Doorstep
              </h2>
              
              <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light text-balance">
                Can't travel to a clinic? Mudgal Health Care provides physiotherapy home visits for suitable patients who prefer treatment at home.
              </p>
              
              <div className="mb-12 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <h3 className="text-lg font-heading font-semibold text-white mb-6">Why Home Physiotherapy?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-gold mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link
                  to="/contact"
                  className="bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] w-full sm:w-auto text-center transform hover:-translate-y-1"
                >
                  Book Your Home Visit
                </Link>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300 border border-white/5 group-hover:border-gold/30">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5 font-medium">Call for query</p>
                    <a href="tel:9785078209" className="text-white font-heading font-bold text-lg hover:text-gold transition-colors">
                      9785078209
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
