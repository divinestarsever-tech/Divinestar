"use client";

import React, { useState, useEffect } from "react";

const galleryImages = [
  { src: "/images/manufacturing/gallery_1.jpg", alt: "Rough Inspection" },
  { src: "/images/manufacturing/gallery_2.jpg", alt: "Precision Cutting" },
  { src: "/images/manufacturing/craft_hands.jpg", alt: "Master Craftsmanship" },
  { src: "/images/process/polishing.jpg", alt: "Diamond Polishing" },
  { src: "/images/manufacturing/tech_laser.jpg", alt: "Advanced Technology" },
  { src: "/images/manufacturing/quality_inspection.jpg", alt: "Quality Assurance" },
];

export function ManufacturingGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-gallery-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Trigger when image enters the center 20% of the screen
        threshold: 0,
      }
    );

    const elements = document.querySelectorAll(".gallery-item-tracker");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative bg-[var(--color-brand-graphite)]">
      <div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto relative">
        
        {/* LEFT SIDE: Sticky Pinned Preview Container */}
        <div className="w-full lg:w-[60%] h-[50vh] lg:h-[100svh] sticky top-0 bg-black z-20 overflow-hidden shadow-[10px_0_50px_rgba(0,0,0,0.5)]">
          {galleryImages.map((img, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={`preview-${idx}`}
                className={`absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                }`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
                />
                
                {/* Elegant overlay gradients for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating caption box */}
                <div className={`absolute bottom-8 lg:bottom-16 left-8 lg:left-16 transition-all duration-1000 delay-300 ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-[1px] bg-[var(--color-brand-warm-white)]/40" />
                    <span className="text-xs font-mono tracking-[0.3em] text-[var(--color-brand-warm-white)]/70 uppercase">
                      0{idx + 1} / 0{galleryImages.length}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none">
                    {img.alt}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE: Scrolling List */}
        <div className="w-full lg:w-[40%] flex flex-col z-10 bg-[var(--color-brand-panel)] px-6 md:px-16 lg:px-24 py-[10vh] lg:py-[50vh] gap-[15vh] lg:gap-[40vh]">
          {galleryImages.map((img, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={`thumb-${idx}`}
                data-gallery-index={idx}
                className="gallery-item-tracker relative w-full aspect-[4/5] overflow-hidden group cursor-pointer shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/5"
                onClick={() => {
                  const el = document.querySelector(`[data-gallery-index="${idx}"]`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "scale-105 opacity-100 mix-blend-normal filter-none" : "scale-100 opacity-40 mix-blend-luminosity grayscale"
                  } group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal`}
                />
                
                {/* Animated active border */}
                <div className={`absolute inset-0 border-[3px] transition-colors duration-700 pointer-events-none z-20 ${
                  isActive ? "border-white/20" : "border-transparent"
                }`} />
                
                {/* Number indicator on thumbnail */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white font-mono text-sm tracking-widest z-20 drop-shadow-md mix-blend-overlay">
                  0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
