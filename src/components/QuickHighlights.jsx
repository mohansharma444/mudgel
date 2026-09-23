import { Home, UserCheck, Activity, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuickHighlights() {
  const highlights = [
    {
      name: 'Home Visit Physiotherapy',
      icon: Home,
      description: 'Professional care in the comfort of your home.'
    },
    {
      name: 'Personalized Care',
      icon: UserCheck,
      description: 'Treatment plans designed for your specific needs.'
    },
    {
      name: 'Rehabilitation & Exercise',
      icon: Activity,
      description: 'Structured programs to restore strength and function.'
    },
    {
      name: 'Modern Techniques',
      icon: Stethoscope,
      description: 'Advanced modalities for effective recovery.'
    }
  ];

  return (
    <section className="bg-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 lg:-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 border border-white/40 group flex flex-col items-center text-center lg:items-start lg:text-left transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300 border border-gray-100 group-hover:border-gold">
                  <Icon className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-dark-dark mb-2 leading-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
