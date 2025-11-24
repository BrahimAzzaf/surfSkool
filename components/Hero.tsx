import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen w-full overflow-hidden flex items-center py-10 md:py-0"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover h-full bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-10 md:mt-20">
        <div className="text-white space-y-8">
          <Reveal>
            <p className="text-cyan-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2">Dive into the world of waves</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Leading Surf <br className="hidden sm:block" /> School in Morocco
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-200 max-w-md text-base sm:text-lg leading-relaxed">
              Experience the magnificence of the ocean under the guidance of professional instructors. We guarantee safety and excitement.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full sm:w-max text-center bg-transparent hover:bg-white/10 backdrop-blur-md text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-medium transition-colors shadow-lg mt-4"
            >
              Learn more
            </motion.a>
          </Reveal>
        </div>

        <div className="flex justify-center md:justify-end w-full">
          <Reveal delay={0.4} className="w-full max-w-xs">
            <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20 shadow-2xl w-full">
              <div className="relative h-32 sm:h-40 rounded-xl overflow-hidden mb-4 group bg-black">
                <video
                  aria-hidden
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    aria-label="Play video"
                    className="bg-white p-3 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg"
                  >
                    <Play className="w-5 h-5 text-teal-900" />
                  </button>
                </div>
              </div>

              <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Ready for new adventures?</h3>
              <p className="text-white/70 text-xs sm:text-sm mb-4">Join 2,000+ happy students.</p>

              <a href="#contact" className="block text-center w-full bg-teal-800 text-white py-2 rounded-xl font-medium border border-white/10">
                Learn more
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-2 sm:bottom-10 mt-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" controls autoPlay className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <button onClick={() => setIsVideoOpen(false)} aria-label="Close video" className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow-lg">
                <X className="w-4 h-4 text-teal-900" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};