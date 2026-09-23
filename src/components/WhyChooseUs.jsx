import { motion } from 'framer-motion';
import { Target, Users, Home, Settings, Activity } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Personalized Care',
      description: 'Treatment is planned according to individual needs and goals.',
      icon: Target
    },
    {
      title: 'Patient-Centered Approach',
      description: "We focus on understanding the patient's condition, movement and functional requirements.",
      icon: Users
    },
    {
      title: 'Home Visit Facility',
      description: 'Physiotherapy services can be provided at home for suitable patients.',
      icon: Home
    },
    {
      title: 'Modern Techniques',
      description: 'A range of physiotherapy modalities and rehabilitation techniques may be used according to clinical requirements.',
      icon: Settings
    },
    {
      title: 'Focus on Functional Recovery',
      description: 'The goal is to support movement, strength and daily function.',
      icon: Activity
    }
  ];

  return (
    <section className="py-24 bg-white">
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
                Our Excellence
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-dark">
              Why Choose Mudgal Health Care
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isLast = index === reasons.length - 1;
            
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 hover:shadow-soft transition-all duration-500 border border-gray-100 group ${isLast ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''} transform hover:-translate-y-1 relative overflow-hidden`}
              >
                {/* Decorative corner accent */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500 border border-gray-100 group-hover:border-gold relative z-10">
                  <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-dark-dark mb-3 relative z-10">
                  {reason.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-sm font-light relative z-10">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
