import { motion } from 'framer-motion';
import { User, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          <div className="mb-16 lg:mb-0 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[650px] z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80"
                alt="Doctor in white coat with stethoscope"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-dark/10 mix-blend-multiply"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dark-dark text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-dark-dark text-lg leading-tight">Dr. Neeraj Mudgal</h4>
                    <p className="text-gold font-medium text-sm">Physiotherapist</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Background decorative square */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-3xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10"></div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-px bg-gold"></span>
                <span className="text-gold font-semibold tracking-widest uppercase text-sm">
                  About Us
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark-dark mb-8 leading-[1.15] text-balance">
                Your Recovery.<br/>
                <span className="text-gold font-light">Our Priority.</span>
              </h2>
              
              <div className="prose prose-lg text-gray-500 font-light leading-relaxed">
                <p className="mb-8">
                  Mudgal Health Care provides physiotherapy and rehabilitation services with a patient-centered approach. We focus on understanding each patient's condition, movement limitations and functional requirements before selecting an appropriate treatment and rehabilitation approach.
                </p>
                
                <div className="bg-gray-50/80 border-l-2 border-gold p-6 rounded-r-2xl mb-10 shadow-sm">
                  <p className="text-dark-light font-medium italic m-0 text-base leading-relaxed">
                    "Home-visit physiotherapy is also available for suitable patients who prefer to receive care in the comfort of their home."
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    'Comprehensive clinical assessment',
                    'Evidence-based treatment protocols',
                    'Focus on functional independence',
                    'Personalized exercise prescription'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <CheckCircle2 className="h-5 w-5 text-gold mr-4 flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="text-dark-light font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
