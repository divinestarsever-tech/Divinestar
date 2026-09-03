"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Dedicated Assortment",
    desc: "Consistent colour and clarity matching to your specified parameters. Rigorous manual inspection guarantees zero variance across high-volume orders.",
    img: "/images/service_assortment.jpg"
  },
  {
    num: "02",
    title: "Bagging & Parcel Services",
    desc: "Packing formats structured precisely around your operational and manufacturing needs. Ready for immediate deployment to your factory floor.",
    img: "/images/service_parcel.jpg"
  },
  {
    num: "03",
    title: "Export & Logistics",
    desc: "End-to-end documentation, insured transit, and delivery coordination for seamless international requirements.",
    img: "/images/service_logistics.jpg"
  },
  {
    num: "04",
    title: "Client-Specific Requirements",
    desc: "Custom sorting, laser engraving, and proprietary grading parameters available on request for our exclusive partners.",
    img: "/images/service_custom.jpg"
  }
];

export default function ClientServicesStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Triggers exactly when the element crosses the middle of the screen
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[var(--color-brand-graphite)] text-white">
      
      {/* STICKY GALLERY (Background on Mobile, Left-Half on Desktop) */}
      <div className="absolute inset-0 w-full lg:w-1/2 h-full pointer-events-none z-0">
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
          {services.map((service, idx) => (
            <img 
              key={idx}
              src={service.img}
              alt={service.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out origin-center ${
                activeIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
              }`}
            />
          ))}
          
          {/* Mobile Darken Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60 lg:hidden transition-opacity duration-300" />

          {/* Desktop Edge Bleed Gradient */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent via-[var(--color-brand-graphite)]/50 to-[var(--color-brand-graphite)]" />
          
          {/* Desktop Bottom Shadow */}
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-brand-graphite)] to-transparent opacity-80" />
        </div>
      </div>

      {/* SCROLLING CONTENT */}
      <div className="w-full lg:w-1/2 lg:ml-auto relative z-10 flex flex-col px-6 lg:px-24 pt-[10vh] pb-[20vh] lg:py-[40vh]">
        
        {/* Mobile Title Block */}
        <div className="lg:hidden min-h-[50vh] flex flex-col items-center justify-center text-center pb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/70 mb-4 block drop-shadow-md">
            B2B Partnerships
          </span>
          <h2 className="text-5xl font-light tracking-tighter leading-none mb-6 drop-shadow-lg">
            Client<br/>Services
          </h2>
          <Link href="/services" className="inline-flex font-mono text-[10px] uppercase tracking-[0.3em] text-white/80 underline underline-offset-8">
            Explore All
          </Link>
        </div>

        {/* Text Cards */}
        {services.map((service, idx) => (
          <div 
            key={idx} 
            data-index={idx}
            ref={(el) => { cardRefs.current[idx] = el; }}
            className={`service-text-card flex flex-col justify-center min-h-[70vh] lg:min-h-screen transition-opacity duration-700 ${
              activeIndex === idx ? "opacity-100" : "opacity-20 lg:opacity-30"
            }`}
          >
            <div className="font-mono text-xs text-white/60 mb-6 flex items-center gap-4 drop-shadow-md">
              <span className="w-8 h-[1px] bg-white/60" />
              {service.num}
            </div>
            <h3 className="text-3xl md:text-5xl font-light mb-6 leading-tight tracking-tight drop-shadow-lg">
              {service.title}
            </h3>
            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-lg font-light drop-shadow-md">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop Sticky Header */}
      <div className="hidden lg:block absolute bottom-16 left-16 z-20 pointer-events-none">
        <h2 className="text-[length:var(--fluid-h2)] font-light tracking-tighter leading-none mb-6 drop-shadow-lg pointer-events-auto">
          Client<br />Services
        </h2>
        <Link href="/services" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] hover:text-white/70 transition-colors pointer-events-auto">
          Explore All Services <span className="text-lg">&rarr;</span>
        </Link>
      </div>

    </section>
  );
}
