import React from "react";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight, PlayCircle } from "lucide-react";

export const Approach: React.FC = () => {
  return (
    <section id="training" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Our approach to help <br /> you achieve your goals
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-slate-500 text-sm leading-relaxed">
              We are convinced that surfing is not just a sport, but a way to
              establish a deep connection with nature. The ocean inspires and
              fills us with energy, and we strive to pass this love on to every
              student.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          {/* Column 1: Large Card */}
          <Reveal delay={0.2} className="h-full">
            <div className="relative group h-full min-h-[300px] rounded-3xl overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=900&auto=format&fit=crop"
                alt="Instructor"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white w-fit mb-3">
                  Expert Instructors
                </div>
                <h3 className="text-white text-2xl font-semibold leading-tight mb-2">
                  Not only teaching technique, but confidence on water.
                </h3>
                <PlayCircle className="text-white/80 w-10 h-10 mt-2 hover:text-white transition-colors" />
              </div>
            </div>
          </Reveal>

          {/* Column 2: Stacked Cards */}
          <div className="flex flex-col gap-6 h-full">
            <Reveal delay={0.3} className="h-1/2">
              <div className="relative group h-full min-h-[200px] rounded-3xl overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1415931633537-351070d20b81?q=80&w=900&auto=format&fit=crop"
                  alt="Equipment"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-6 left-6">
                  <h4 className="text-white font-medium">Top-tier Equipment</h4>
                </div>
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4 text-slate-900" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4} className="h-1/2">
              <div className="relative group h-full min-h-[200px] rounded-3xl overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=900&auto=format&fit=crop"
                  alt="Locations"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-6 left-6">
                  <h4 className="text-white font-medium">Stunning Locations</h4>
                </div>
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
                  <ArrowUpRight className="w-4 h-4 text-slate-900" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Column 3: List Links */}
          <div className="flex flex-col justify-between h-full gap-4">
            {["Trust & Safety", "Team Spirit", "Personal Approach"].map(
              (item, i) => (
                <Reveal key={i} delay={0.5 + i * 0.1} className="flex-1">
                  <div className="group bg-white h-full rounded-3xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-slate-100">
                    <span className="text-lg font-semibold text-slate-800">
                      {item}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
