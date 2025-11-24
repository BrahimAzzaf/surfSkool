import React from 'react';
import { Reveal } from './ui/Reveal';
import { User, Users, Star, Smile } from 'lucide-react';

const Card = ({ title, desc, icon: Icon, delay }: { title: string, desc: string, icon: any, delay: number }) => (
    <Reveal delay={delay} className="h-full">
        <div className="bg-slate-50 p-8 rounded-3xl h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group">
            <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-teal-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    </Reveal>
);

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between mb-20">
            <Reveal>
                <h2 className="text-4xl font-bold text-slate-900 max-w-sm">Who is our school suitable for?</h2>
            </Reveal>
            <Reveal delay={0.2} className="max-w-sm mt-4 md:mt-0">
                <p className="text-slate-500 text-sm">
                    Our surf school is open to everyone, regardless of skill level or age. We offer an individual approach to every student.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-8 flex flex-col justify-center h-full">
                <Card 
                    title="Beginner Surfers" 
                    desc="If you have never stood on a board, do not worry! Our experienced instructors will help you master the basics safely."
                    icon={Smile}
                    delay={0.1}
                />
                <Card 
                    title="Advanced Surfers" 
                    desc="If you have experience but want to improve your skills, our classes will help you master more complex techniques."
                    icon={Star}
                    delay={0.2}
                />
            </div>

            {/* Middle Column (Image) */}
            <div className="h-[400px] md:h-[600px] relative flex justify-center items-center">
                 <Reveal delay={0.3} className="w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {/* Abstract blob background */}
                        <div className="absolute inset-0 bg-teal-50 rounded-full scale-90 opacity-50 blur-3xl animate-pulse" />
                        
                        {/* Surfer silhouette placeholder */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                             <img 
                                src="https://plus.unsplash.com/premium_photo-1667865667926-a1f8b7339950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop" 
                                className="w-full h-full object-contain drop-shadow-2xl opacity-90 mix-blend-multiply"
                                style={{ maskImage: 'linear-gradient(black 85%, transparent)' }}
                                alt="Surfer Silhouette"
                             />
                        </div>
                    </div>
                 </Reveal>
            </div>

            {/* Right Column */}
            <div className="space-y-8 flex flex-col justify-center h-full">
                <Card 
                    title="Kids & Teens" 
                    desc="Surfing is a great way for kids to stay active! We offer special courses where they can learn safely."
                    icon={User}
                    delay={0.4}
                />
                <Card 
                    title="Groups & Companies" 
                    desc="Looking for an interesting activity for a corporate outing? We conduct group classes suitable for any company."
                    icon={Users}
                    delay={0.5}
                />
            </div>
        </div>

      </div>
    </section>
  );
};