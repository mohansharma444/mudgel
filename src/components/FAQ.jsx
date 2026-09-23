import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function FAQ() {
  const faqs = [
    {
      question: 'Do you provide home physiotherapy?',
      answer: 'Yes, home-visit physiotherapy is available for suitable patients.'
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can call or WhatsApp 9785078209 to enquire and book an appointment.'
    },
    {
      question: 'Where do you provide home visits?',
      answer: "Home-visit availability depends on the patient's location and schedule."
    },
    {
      question: 'Is every treatment suitable for every patient?',
      answer: 'No. Treatment and modalities are selected according to individual assessment and clinical requirements.'
    },
    {
      question: 'How long does a session take?',
      answer: "Session duration may vary depending on the patient's condition and treatment plan."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-gray-50/50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="text-gold font-semibold tracking-widest uppercase text-sm">
                Got Questions?
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-dark mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-gray-200/80 bg-transparent group"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className={twMerge(
                  clsx(
                    'font-heading font-medium text-lg pr-4 transition-colors duration-300',
                    openIndex === index ? 'text-gold' : 'text-dark-dark group-hover:text-gold'
                  )
                )}>
                  {faq.question}
                </span>
                <div className={twMerge(
                  clsx(
                    'w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300',
                    openIndex === index ? 'border-gold bg-gold text-white' : 'border-gray-300 text-gray-400 group-hover:border-gold group-hover:text-gold'
                  )
                )}>
                  <Plus
                    className={twMerge(
                      clsx(
                        'w-4 h-4 transition-transform duration-300',
                        openIndex === index ? 'rotate-45' : 'rotate-0'
                      )
                    )}
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-500 font-light leading-relaxed pr-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
