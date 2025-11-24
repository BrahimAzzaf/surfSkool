import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Menu, X, Search } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Training & Forum", href: "#training" },
    { label: "Surf Spots", href: "#spots" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-teal-900/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          <a href="#home" className="flex items-center space-x-2 z-50 relative">
            <Waves className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold tracking-tight">YourWave</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-white/10 rounded-full px-6 py-2 backdrop-blur-sm space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-cyan-300 transition-colors">
              Home
            </a>
            <span className="text-white/30">|</span>
            <a
              href="#training"
              className="hover:text-cyan-300 transition-colors"
            >
              Training & Forum
            </a>
            <span className="text-white/30">|</span>
            <a
              href="#spots"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Search className="w-3 h-3" /> Surf Spots
            </a>
          </div>

          <div className="flex items-center gap-4 z-50 relative">
            <div className="hidden md:block text-right text-xs opacity-80 leading-tight">
              <div>Work time:</div>
              <div>10:00 to 20:00</div>
            </div>
            <a
              href="#contact"
              className="hidden md:block bg-white text-teal-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
            >
              Request a call
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-teal-900 pt-24 px-6 md:hidden overflow-hidden flex flex-col items-center justify-start gap-8"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-medium text-white">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-white text-teal-900 px-8 py-3 rounded-full text-lg font-bold mt-4"
              >
                Request a call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
