import { motion } from 'framer-motion';

export default function Conditions() {
  const conditions = [
    'Knee Pain',
    'Back Pain',
    'Sciatica',
    'Neck Pain',
    'Shoulder Pain',
    'Sports Injuries',
    'Muscle Pain',
    'Joint Stiffness',
    'Reduced Mobility',
    'Muscle Weakness',
    'Post-Injury Recovery',
    'Post-Operative Rehabilitation'
  ];

  return (
    <section className="py-24 bg-gray-50/50 border-y border-gray-100">
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
                What We Treat
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-dark mb-6">
              Conditions We Can Help With
            </h2>
            <p className="text-lg text-gray-500 font-light text-balance">
              Our physiotherapy services are designed to support management, rehabilitation, and recovery for a variety of conditions.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] rounded-full px-6 py-3.5 text-dark font-medium hover:border-gold hover:text-gold hover:shadow-md transition-all duration-300 cursor-default"
            >
              {condition}
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
