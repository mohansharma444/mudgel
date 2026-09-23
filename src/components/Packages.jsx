import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: 'ADVANCE PACKAGE',
      price: '449',
      isPopular: false,
      features: [
        'Comprehensive assessment',
        'Basic modality treatment',
        'Home exercise guidance',
        'Progress monitoring'
      ]
    },
    {
      name: 'RECOVERY PACKAGE',
      price: '549',
      isPopular: true,
      features: [
        'Advanced clinical assessment',
        'Combined modality therapy',
        'Manual therapy techniques',
        'Personalized exercise plan',
        'Post-session support'
      ]
    },
    {
      name: 'PERFORMANCE PACKAGE',
      price: '649',
      isPopular: false,
      features: [
        'Detailed biomechanical assessment',
        'Advanced pain management',
        'Sports-specific rehabilitation',
        'Complete functional restoration',
        'Priority appointment scheduling'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold font-semibold tracking-widest uppercase text-sm">
                Pricing Plans
              </span>
              <span className="w-8 h-px bg-gold"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-dark mb-6">
              Treatment Packages
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Affordable and transparent pricing for your recovery journey.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 flex flex-col h-full ${
                pkg.isPopular 
                  ? 'bg-dark-dark text-white shadow-2xl md:-translate-y-4 border border-dark-light/50' 
                  : 'bg-white text-dark-dark border border-gray-200 shadow-sm hover:shadow-soft'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] py-2 px-6 rounded-full shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-10 mt-4">
                <h3 className={`text-sm font-semibold tracking-widest uppercase mb-6 ${pkg.isPopular ? 'text-gold' : 'text-gray-500'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-start justify-center">
                  <span className="text-2xl font-medium mt-1 mr-1">₹</span>
                  <span className="text-6xl font-heading font-bold tracking-tight">{pkg.price}</span>
                </div>
                <span className={`text-sm font-medium mt-2 block ${pkg.isPopular ? 'text-gray-400' : 'text-gray-400'}`}>per session</span>
              </div>
              
              <ul className="space-y-5 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <Check className={`w-5 h-5 mr-4 flex-shrink-0 ${pkg.isPopular ? 'text-gold' : 'text-gold/70'}`} />
                    <span className={`${pkg.isPopular ? 'text-gray-300' : 'text-gray-600'} font-light leading-relaxed`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                    pkg.isPopular 
                      ? 'bg-gold hover:bg-gold-light text-white shadow-[0_0_20px_rgba(197,160,89,0.3)]' 
                      : 'bg-gray-50 hover:bg-dark-dark hover:text-white border border-gray-200 hover:border-dark-dark'
                  }`}
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 font-light italic">
            * Package prices and services may be updated by Mudgal Health Care.
          </p>
        </div>
        
      </div>
    </section>
  );
}
