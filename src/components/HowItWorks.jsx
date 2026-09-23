import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, ActivitySquare, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Book Appointment',
      description: 'Call or WhatsApp us to schedule your visit.',
      icon: PhoneCall
    },
    {
      number: '02',
      title: 'Assessment',
      description: 'Your condition and functional requirements are assessed.',
      icon: ClipboardList
    },
    {
      number: '03',
      title: 'Personalized Treatment',
      description: 'A suitable physiotherapy and rehabilitation approach is planned.',
      icon: ActivitySquare
    },
    {
      number: '04',
      title: 'Recovery & Progress',
      description: 'Progress is monitored and exercises or treatment are adjusted as needed.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="text-gold font-semibold tracking-widest uppercase text-sm">
                Patient Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-dark mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-500 font-light">
              A simple, structured approach to your recovery process.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gray-200 via-gold/30 to-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center group"
                >
                  <div className="bg-white w-24 h-24 mx-auto rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100 group-hover:border-gold/50 group-hover:shadow-glow transition-all duration-500 relative z-10">
                    <Icon className="w-8 h-8 text-dark-light group-hover:text-gold transition-colors duration-500" />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 bg-gold text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-dark-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm px-4 font-light leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
