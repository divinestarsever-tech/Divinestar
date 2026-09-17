"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const leaders = [
  {
    title: "Director - rough diamond management",
    name: "Nayan Golakiya",
    desc: "Plays a key role in the company’s rough diamond management and sourcing strategy.",
    image: "/images/leadership/nayan.png"
  },
  {
    title: "Director - rough diamond management",
    name: "Kirti Ghori",
    desc: "Oversees key aspects of rough diamond management and operational planning.",
    image: "/images/leadership/kirti.png"
  },
  {
    title: "Director facility",
    name: "Dharmesh Gabani",
    desc: "Leads the company’s manufacturing facilities and production environment.",
    image: "/images/leadership/dharmesh.png"
  },
  {
    title: "Director management",
    name: "Bharat Ghori",
    desc: "Plays a central role in overall management, operations and organisational development.",
    image: "/images/leadership/bharat.png"
  },
  {
    title: "Director Sales",
    name: "Ramesh Mandani",
    desc: "Leads the company’s sales, client relationships and business development initiatives.",
    image: "/images/leadership/ramesh.png"
  }
];

export default function LeadershipTeaser() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0a0a0a] py-32 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center relative z-10">
        
        {/* Top Typography Block */}
        <div className="w-full max-w-4xl flex flex-col items-center text-center mb-16 lg:mb-24">
           <span className="flex items-center justify-center gap-4 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-emerald-600 font-bold mb-6">
              <span className="w-8 h-[1px] bg-emerald-600" />
              The Visionaries
              <span className="w-8 h-[1px] bg-emerald-600" />
           </span>
           <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-white leading-[1.1] mb-8">
              Architects of <span className="font-serif italic text-emerald-500">Precision.</span>
           </h2>
           <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
              Meet the leadership team driving Divine Star's commitment to flawless execution and global luxury trade.
           </p>
           
           <Link href="/leadership" className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-white hover:text-emerald-400 transition-colors w-fit mx-auto">
              <div className="w-12 h-12 rounded-full border border-zinc-700 group-hover:border-emerald-500 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/10">
                 <ArrowRight className="w-4 h-4" />
              </div>
              Full Bios
           </Link>
        </div>

        {/* Centered Grid (3 on top, 2 on bottom) */}
        <div className="w-full flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, idx) => {
            const isHovered = hovered === idx;
            
            return (
              <div 
                key={idx} 
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setHovered(isHovered ? null : idx)}
                className="group relative aspect-[3/4] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] flex-shrink-0 overflow-hidden bg-zinc-900/50 border border-zinc-800 flex flex-col justify-end p-8 md:p-10 hover:border-zinc-600 transition-colors duration-700 cursor-pointer"
              >
                
                {/* Portrait Image Background */}
                <div className={`absolute inset-0 z-0 transition-transform duration-[1.5s] ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}>
                   <Image 
                     src={leader.image}
                     alt={leader.name}
                     fill
                     className={`object-cover object-top transition-all duration-700 ${isHovered ? 'grayscale-0' : 'grayscale'}`}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />
                </div>

                {/* Dark Gradient Overlay for Text Readability */}
                <div className={`absolute inset-0 z-0 bg-gradient-to-t transition-colors duration-700 ${isHovered ? 'from-black/90 via-black/30 to-transparent' : 'from-black/90 via-black/50 to-transparent'}`} />

                {/* Text Content */}
                <div className={`relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered ? 'translate-y-0' : 'translate-y-8'}`}>
                  <span className={`block font-mono text-xs uppercase tracking-[0.3em] text-emerald-500 mb-4 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    {leader.title}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-5 drop-shadow-lg">
                    {leader.name}
                  </h3>
                  <div className={`h-[1px] bg-emerald-800/50 transition-all duration-700 ease-out mb-5 ${isHovered ? 'w-full' : 'w-0'}`} />
                  <p className={`text-sm text-zinc-300 font-light leading-relaxed transition-opacity duration-700 delay-100 ${isHovered ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                    {leader.desc}
                  </p>
                </div>
                
                {/* Corner Accents */}
                <div className={`absolute top-6 left-6 w-3 h-3 border-t border-l transition-colors duration-500 ${isHovered ? 'border-emerald-600' : 'border-zinc-700'}`} />
                <div className={`absolute top-6 right-6 w-3 h-3 border-t border-r transition-colors duration-500 ${isHovered ? 'border-emerald-600' : 'border-zinc-700'}`} />
                
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
