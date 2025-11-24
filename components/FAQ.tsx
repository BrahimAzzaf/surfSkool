import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
    { question: "At what age can I start surfing?", answer: "We accept children from 6 years old. We have special courses for young surfers where they can learn and develop safely." },
    { question: "Do I need my own surfboard?", answer: "No, we provide all necessary equipment including surfboards and wetsuits as part of the lesson fee." },
    { question: "What level of fitness is required?", answer: "Basic swimming skills are required. You don't need to be an athlete, but general fitness helps." },
    { question: "How do I sign up for classes?", answer: "You can sign up via the form below or give us a call directly." },
    { question: "What happens if the weather is bad?", answer: "Safety is priority. If conditions are unsafe, we reschedule the lesson or offer a refund." }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side Visual */}
        <Reveal>
            <div className="bg-teal-900 rounded-[2.5rem]  bg-[url('https://images.unsplash.com/photo-1565643355044-000fbad87cc5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-repeat-no-repeat p-10 text-white h-full min-h-[400px] relative overflow-hidden flex flex-col justify-center">
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Answers to frequently asked questions</h2>
                    <p className="opacity-80 text-sm max-w-xs">Everything you need to know before catching your first wave.</p>
                </div>
                
                {/* Decorative Icon */}
                <div className="absolute -bottom-10 -right-10 opacity-10">
                    <HelpCircle size={300} />
                </div>
            </div>
        </Reveal>

        {/* Right Side Accordion */}
        <div className="space-y-4">
            {faqData.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                    <div className="border-b border-slate-100">
                        <button 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex justify-between items-center py-6 text-left group"
                        >
                            <span className={`font-medium text-lg transition-colors ${openIndex === idx ? 'text-teal-700' : 'text-slate-800'}`}>
                                {item.question}
                            </span>
                            <ChevronDown 
                                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-teal-700' : ''}`} 
                            />
                        </button>
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-6 text-slate-500 text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};