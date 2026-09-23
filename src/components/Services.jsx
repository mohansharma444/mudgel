import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Activity, 
  UserPlus, 
  ActivitySquare, 
  Dumbbell, 
  HeartPulse, 
  Bandage, 
  PersonStanding,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Home Visit Physiotherapy',
      description: 'Professional physiotherapy care at your home.',
      icon: Home
    },
    {
      title: 'Knee Pain Management',
      description: 'Support for knee pain, stiffness, weakness and mobility-related problems.',
      icon: Activity
    },
    {
      title: 'Back Pain & Sciatica',
      description: 'Physiotherapy-based management for back pain and sciatica-related symptoms.',
      icon: UserPlus
    },
    {
      title: 'Neck & Shoulder Pain',
      description: 'Treatment and rehabilitation for neck stiffness, shoulder pain and movement limitations.',
      icon: ActivitySquare
    },
    {
      title: 'Sports Injury Rehabilitation',
      description: 'Rehabilitation focused on safe return to activity and performance.',
      icon: Dumbbell
    },
    {
      title: 'Post-Injury Rehabilitation',
      description: 'Structured rehabilitation following injuries to restore movement and function.',
      icon: Bandage
    },
    {
      title: 'Post-Operative Rehabilitation',
      description: 'Physiotherapy support during recovery after appropriate surgeries.',
      icon: HeartPulse
    },
    {
      title: 'Mobility & Functional Rehabilitation',
      description: 'Exercises and rehabilitation aimed at improving strength, balance and everyday movement.',
      icon: PersonStanding
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold font-semibold tracking-widest uppercase text-sm">
                What We Do
              </span>
              <span className="w-8 h-px bg-gold"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-dark mb-6">
              Our Physiotherapy Services
            </h2>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
              Comprehensive care tailored to your specific condition and recovery goals, ensuring the best possible outcome.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-soft transition-all duration-500 group flex flex-col h-full relative overflow-hidden transform hover:-translate-y-1.5"
              >
                {/* Top border accent on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-dark-dark group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-dark-dark mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 mb-8 flex-grow text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-dark-light group-hover:text-gold transition-colors mt-auto"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
