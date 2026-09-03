"use client";

import { useEffect, useState } from "react";

const nodes = [
  { id: 1, label: "Primary Sorting Facility", x: "42%", y: "35%", delay: "0s" },
  { id: 2, label: "Global Trade Hub", x: "58%", y: "45%", delay: "1s" },
  { id: 3, label: "B2B Fulfillment Center", x: "38%", y: "60%", delay: "2s" },
  { id: 4, label: "Secure Export Node", x: "52%", y: "70%", delay: "1.5s" }
];

export default function GlobalReachInteractive() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Auto cycle on mobile to ensure they see the interactivity
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev === null || prev >= nodes.length) ? 1 : prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] lg:h-screen bg-[var(--color-brand-graphite)] overflow-hidden flex items-center justify-center">
      
      {/* Fixed Aspect Ratio Wrapper (16:9) to keep nodes perfectly aligned with the image on all screen sizes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-w-[177.77vh] min-h-[100vh] pointer-events-none z-0">
         
         {/* Background Cinematic Image */}
         <img 
            src="/images/global_reach.jpg" 
            alt="Global Network"
            className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105"
         />
         
         {/* Gradients to seamlessly blend edges into surrounding sections */}
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-graphite)] via-transparent to-[var(--color-brand-graphite)]" />
         <div className="absolute inset-0 bg-black/30" />
         
         {/* Interactive Global Nodes (Now inside the scaled wrapper) */}
         <div className="absolute inset-0 z-30 pointer-events-none">
            {nodes.map(node => (
               <div 
                  key={node.id}
                  className="absolute flex flex-col items-center group pointer-events-auto cursor-crosshair"
                  style={{ left: node.x, top: node.y }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
               >
                  {/* Pulsing Dot */}
                  <div className="relative flex justify-center items-center w-8 h-8">
                     <div 
                        className="absolute w-full h-full bg-blue-500/40 rounded-full animate-ping" 
                        style={{ animationDelay: node.delay, animationDuration: '3s' }} 
                     />
                     <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff,0_0_30px_#60a5fa]" />
                  </div>

                  {/* Connecting Line (Expands on hover) */}
                  <div className={`w-[1px] bg-gradient-to-b from-blue-200 to-transparent transition-all duration-500 ease-out ${
                     activeNode === node.id ? 'h-8 md:h-12' : 'h-0'
                  }`} />

                  {/* Data Card */}
                  <div className={`mt-1 p-3 md:p-4 bg-black/60 backdrop-blur-xl border border-blue-400/30 rounded-sm text-center transition-all duration-500 ease-out transform whitespace-nowrap shadow-[0_0_30px_rgba(96,165,250,0.2)] ${
                     activeNode === node.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                  }`}>
                     <div className="flex items-center justify-between gap-6 mb-2">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-blue-400">Node_{node.id}</span>
                        <div className="flex items-center gap-1.5">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                           <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">Secure</span>
                        </div>
                     </div>
                     <p className="text-white text-xs md:text-sm font-medium tracking-wide">{node.label}</p>
                     <div className="mt-2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Holographic Radar Sweep Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-60 mix-blend-screen">
         <div className="w-[150vw] h-[150vw] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] rounded-full border border-blue-400/10 flex items-center justify-center relative">
            <div 
               className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite]" 
               style={{ background: 'conic-gradient(from 0deg, transparent 75%, rgba(96, 165, 250, 0.4) 100%)' }} 
            />
            {/* Inner rings */}
            <div className="w-[75%] h-[75%] rounded-full border border-blue-400/10 flex items-center justify-center">
               <div className="w-[60%] h-[60%] rounded-full border border-blue-400/20 flex items-center justify-center">
                  <div className="w-[40%] h-[40%] rounded-full border border-blue-400/30" />
               </div>
            </div>
            {/* Crosshairs */}
            <div className="w-full h-[1px] bg-blue-400/20 absolute" />
            <div className="w-[1px] h-full bg-blue-400/20 absolute" />
         </div>
      </div>

      {/* Title & Description Block */}
      <div className="absolute top-16 md:top-24 left-6 md:left-16 z-20 pointer-events-none w-full max-w-[90%] md:max-w-2xl">
         <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-blue-400/60" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue-300">
               Global Infrastructure
            </span>
         </div>
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tighter drop-shadow-2xl leading-tight">
            Direct B2B Relationships,<br/><span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Global Reach.</span>
         </h2>
         <p className="text-sm md:text-lg text-white/80 font-light leading-relaxed drop-shadow-md max-w-lg backdrop-blur-sm bg-black/10 p-4 rounded-lg border border-white/5">
            Divine Star serves B2B clients across international markets with direct sales relationships, secure export-ready logistics, and verified global distribution nodes.
         </p>
      </div>

    </section>
  )
}
