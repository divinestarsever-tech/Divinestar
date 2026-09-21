"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { year: "2018", title: "Diamond Manufacturing Excellence", desc: "Established as a leading manufacturer of -2 to +2 melee diamonds, built on precision, consistency, and quality." },
  { year: "2020", title: "Built for Our People", desc: "Strengthened our operations with modern, employee-friendly infrastructure designed for efficiency and growth." },
  { year: "2022", title: "RJC Membership", desc: "Achieved RJC Membership, reinforcing our commitment to responsible, ethical, and transparent business practices." },
  { year: "2023", title: "Entered Jewellery Manufacturing", desc: "Expanded into jewellery manufacturing, bringing our diamond expertise into complete fine jewellery production." },
  { year: "2024", title: "ALROSA Spot Contract Client", desc: "Selected as an ALROSA Spot Contract Client, marking an important milestone in our global sourcing capabilities." }
];

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-10 mt-8">
      {/* Background track line */}
      <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[2px] bg-[var(--color-brand-line)] md:-translate-x-1/2" />
      
      {/* Glowing animated line */}
      <motion.div 
        className="absolute top-0 left-8 md:left-1/2 w-[2px] bg-[var(--color-brand-graphite)] md:-translate-x-1/2 origin-top"
        style={{ height: lineHeight }}
      />

      {/* Glow effect at the tip of the line */}
      <motion.div 
        className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-graphite)] shadow-[0_0_15px_rgba(0,0,0,0.5)] md:-translate-x-1/2 -translate-y-1/2 z-10"
        style={{ 
          top: lineHeight,
          opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
        }}
      />

      <div className="flex flex-col gap-16 md:gap-24 relative z-20">
        {milestones.map((milestone, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <div key={idx} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-1/2" />
              
              {/* Dot marker */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[var(--color-brand-white)] border-2 border-[var(--color-brand-graphite)] rounded-full -translate-x-1/2 z-20" />

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
              >
                <div className="p-6 md:p-8 bg-white/50 backdrop-blur-sm border border-[var(--color-brand-line)] shadow-sm hover:shadow-md transition-shadow duration-500">
                  <span className="block text-2xl font-bold tracking-tight text-[var(--color-brand-graphite)] mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-brand-graphite)] leading-snug mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-brand-text-secondary)] leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
