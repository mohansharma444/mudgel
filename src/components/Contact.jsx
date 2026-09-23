import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, User, Calendar, MessageSquare, Briefcase } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[- ]/g, ''))) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const text = `Hello Mudgal Health Care,%0A%0AI would like to enquire about a physiotherapy appointment.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Preferred Date:* ${formData.date || 'Not specified'}%0A*Preferred Time:* ${formData.time || 'Not specified'}%0A*Message:* ${formData.message || 'None'}`;
      
      const whatsappUrl = `https://wa.me/919785078209?text=${text}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
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
                Appointment
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-dark mb-6">
              Let's Start Your Recovery
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Have a question or want to book a physiotherapy session?
            </p>
          </motion.div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-dark-dark rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden h-full"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <div className="mb-12">
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">Mudgal Health Care</h3>
                  <p className="text-gray-400 font-light">Physiotherapy & Rehabilitation</p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-gold font-semibold text-lg">Dr. Neeraj Mudgal</p>
                    <p className="text-sm text-gray-400">Physiotherapist</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <a href="tel:9785078209" className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors duration-300 border border-white/10">
                      <Phone className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">Call Us</p>
                      <p className="text-white font-heading font-medium text-lg group-hover:text-gold transition-colors">9785078209</p>
                    </div>
                  </a>

                  <a href="https://instagram.com/mudgal_health_care2772" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors duration-300 border border-white/10">
                      <svg className="w-5 h-5 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-medium">Instagram</p>
                      <p className="text-white font-heading font-medium text-lg group-hover:text-gold transition-colors">@mudgal_health_care2772</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-12 pt-10 border-t border-white/10 space-y-4">
                  <a
                    href="tel:9785078209"
                    className="w-full flex items-center justify-center gap-2 bg-white text-dark-dark hover:bg-gold hover:text-white py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919785078209"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-soft border border-gray-100"
            >
              <h3 className="text-2xl font-heading font-bold text-dark-dark mb-8">Request Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-gold">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`pl-12 block w-full rounded-2xl border ${errors.name ? 'border-red-300 ring-red-200' : 'border-gray-200'} bg-gray-50/50 py-3.5 text-dark focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-gold">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`pl-12 block w-full rounded-2xl border ${errors.phone ? 'border-red-300 ring-red-200' : 'border-gray-200'} bg-gray-50/50 py-3.5 text-dark focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none`}
                        placeholder="10-digit number"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Service */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required <span className="text-gold">*</span></label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                      </div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`pl-12 block w-full rounded-2xl border ${errors.service ? 'border-red-300 ring-red-200' : 'border-gray-200'} bg-gray-50/50 py-3.5 text-dark focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none appearance-none`}
                      >
                        <option value="">Select a service</option>
                        <option value="Home Visit Physiotherapy">Home Visit Physiotherapy</option>
                        <option value="Clinic Visit">Clinic Visit</option>
                        <option value="Post-Operative Rehab">Post-Operative Rehab</option>
                        <option value="Sports Injury">Sports Injury</option>
                        <option value="Pain Management">Pain Management</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-gold transition-colors" />
                      </div>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="pl-12 block w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-3.5 text-dark focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="block w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-3.5 px-4 text-dark focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none appearance-none"
                    >
                      <option value="">Any time</option>
                      <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                      <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                      <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 px-5 text-dark focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none resize-none"
                      placeholder="Briefly describe your condition or requirements..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-dark-dark hover:bg-gold text-white py-4 rounded-full font-semibold shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Send className="w-5 h-5" />
                    Request Appointment via WhatsApp
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-5 font-light">
                    Your details will be sent securely via WhatsApp.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
