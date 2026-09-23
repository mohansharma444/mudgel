import { motion } from 'framer-motion';

export default function Techniques() {
  const techniques = [
    'TENS Therapy',
    'Ultrasound Therapy',
    'Cupping Therapy',
    'Dry Needling',
    'IASTM',
    'Massage Gun',
    'Therapeutic Exercise',
    'Mobility & Stretching',
    'Manual Therapy'
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="text-gold font-semibold tracking-widest uppercase text-sm">
                Treatment Approaches
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-dark mb-6 text-balance">
              Physiotherapy Techniques & Modalities
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Our treatment may include, when clinically appropriate:
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-center">
          {techniques.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:bg-dark-dark hover:border-transparent transition-all duration-300 group flex items-center justify-center min-h-[120px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-soft"
            >
              <span className="font-medium text-dark-light group-hover:text-gold transition-colors duration-300">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
            <p className="text-sm text-gray-500 font-medium italic">
              * Treatment and modalities are selected according to individual assessment and clinical requirements.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
