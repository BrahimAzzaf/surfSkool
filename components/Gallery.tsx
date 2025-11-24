import React from "react";
import { Reveal } from "./ui/Reveal";

const images = [
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=1000&auto=format&fit=crop",
];

export const Gallery: React.FC = () => {
  return (
    <section id="spots" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Photo & Video Gallery <br /> from our sessions
            </h2>
            <p className="text-slate-500 text-sm max-w-md">
              Dive into the atmosphere of surfing through our gallery! Here you
              will find the best moments from our classes.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <Reveal key={idx} delay={idx * 0.2}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
                <img
                  src={src}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
