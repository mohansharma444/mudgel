import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-24 bg-dark-dark text-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
                Testimonials
              </span>
              <span className="w-8 h-px bg-gold"></span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              What Our Patients Say
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative"
        >
          {/* Quote icon watermark */}
          <div className="absolute top-6 left-8 text-8xl text-white/5 font-heading leading-none select-none">"</div>
          
          <div className="flex justify-center gap-1 mb-8 relative z-10">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-gold fill-current opacity-80" />
            ))}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-heading font-light text-gray-200 italic mb-8 leading-relaxed relative z-10">
            "Patient reviews will be displayed here."
          </h3>
          
          <div className="w-12 h-1 bg-gold mx-auto rounded-full opacity-60"></div>
        </motion.div>
        
      </div>
    </section>
  );
}
