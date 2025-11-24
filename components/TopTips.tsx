import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const TopTips: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative h-[400px] rounded-[2.5rem] overflow-hidden group"
      >
        <img 
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2662&auto=format&fit=crop" 
            alt="Surfing from above"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-teal-900/30" />

        <div className="absolute inset-0 p-12 flex flex-col justify-between">
            <div className="border-l-4 border-white pl-6">
                <h2 className="text-5xl font-bold text-white mb-2">Top 10 Tips</h2>
                <p className="text-white/80 max-w-sm text-sm">We've collected the best advice for you to make surfing even more exciting and safe.</p>
            </div>

            <div className="flex justify-between items-end">
                <div className="hidden md:flex gap-8 text-white/70 text-xs font-medium uppercase tracking-widest">
                    <span>Technique</span>
                    <span>Safety</span>
                    <span>Speed</span>
                    <span>Creative Approach</span>
                </div>
                <button className="bg-white text-teal-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-cyan-50 transition-colors">
                    View Tips <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </motion.div>
    </section>
  );
};