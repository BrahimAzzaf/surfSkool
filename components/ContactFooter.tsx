import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-teal-900 pt-24 pb-12 relative overflow-hidden">
      
      {/* Animated Background Image */}
      <motion.div 
        initial={{ scale: 1, opacity: 0.1 }}
        animate={{ scale: 1.1, opacity: 0.2 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
            src="https://images.unsplash.com/photo-1415931633537-351070d20b81?q=80&w=2000&auto=format&fit=crop" 
            alt="Surfing Background" 
            className="w-full h-full object-cover mix-blend-overlay grayscale"
        />
      </motion.div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-teal-400 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Form Section */}
            <div className="space-y-8">
                <Reveal>
                    <h2 className="text-3xl font-bold text-white mb-2">Still have questions?</h2>
                    <p className="text-teal-200/80">Fill out the form and we will contact you shortly.</p>
                </Reveal>

                <form className="space-y-4 max-w-md">
                    <Reveal delay={0.1}>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all backdrop-blur-sm"
                        />
                    </Reveal>
                    <Reveal delay={0.2}>
                        <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all backdrop-blur-sm"
                        />
                    </Reveal>
                    <Reveal delay={0.3}>
                        <textarea 
                            rows={4}
                            placeholder="Your Question" 
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none backdrop-blur-sm"
                        />
                    </Reveal>
                    <Reveal delay={0.4}>
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-white text-teal-900 font-bold py-4 rounded-xl hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-cyan-900/20"
                        >
                            Send Request <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </Reveal>
                </form>
            </div>

            {/* Contacts Info */}
            <div className="lg:mt-12 space-y-8 text-white">
                <Reveal delay={0.2}>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contacts</h3>
                    <div className="space-y-2 text-white/80">
                        <p>Phone: +7 (123) 456-78-90</p>
                        <p>Email: info@surfschool.com</p>
                        <p>Address: Taghazout, Morocco</p>
                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="h-48 w-full rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shadow-xl">
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54988.75232677274!2d-9.742336338875618!3d30.545367610113872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e82a392c39%3A0x9d4a6549f05a5a1e!2sTaghazout%2C%20Morocco!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                         ></iframe>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-teal-200/50">
            <p>© 2024 YourWave Surf School. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>

      </div>
    </footer>
  );
};