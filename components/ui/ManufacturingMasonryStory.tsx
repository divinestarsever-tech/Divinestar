"use client";

import Link from 'next/link';

const steps = [
  {
    num: "01",
    title: "Planning",
    desc: "Advanced 3D modeling and scanning to maximize the yield and brilliance of every rough stone.",
    img: "/images/process/planning.jpg",
    // Step 1: Left aligned, medium
    wrapperClass: "col-span-12 lg:col-span-6 lg:col-start-1 mt-0",
    imageClass: "h-[400px] lg:h-[600px]",
    textClass: "lg:absolute -bottom-12 lg:-right-[40%] z-20"
  },
  {
    num: "02",
    title: "Laser Cutting",
    desc: "Micron-precision cleaving using state-of-the-art green laser technology.",
    img: "/images/process/lasercutting.jpg",
    // Step 2: Right aligned, small, pushed down
    wrapperClass: "col-span-12 lg:col-span-4 lg:col-start-9 lg:mt-[300px]",
    imageClass: "h-[400px] lg:h-[500px]",
    textClass: "lg:absolute top-[20%] lg:-left-[80%] z-20"
  },
  {
    num: "03",
    title: "Polishing",
    desc: "Master artisans bring out the stone's ultimate fire and scintillation.",
    img: "/images/process/polishing.jpg",
    // Step 3: Center wide
    wrapperClass: "col-span-12 lg:col-span-8 lg:col-start-3 lg:mt-[200px]",
    imageClass: "h-[400px] lg:h-[600px]",
    textClass: "lg:absolute -top-16 lg:-left-12 z-20"
  },
  {
    num: "04",
    title: "Grading",
    desc: "Rigorous sorting and disciplined assortment to ensure absolute consistency.",
    img: "/images/process/grading.jpg",
    // Step 4: Left aligned, tall
    wrapperClass: "col-span-12 lg:col-span-5 lg:col-start-1 lg:mt-[200px]",
    imageClass: "h-[400px] lg:h-[700px]",
    textClass: "lg:absolute bottom-[20%] lg:-right-[50%] z-20"
  },
  {
    num: "05",
    title: "Quality Control",
    desc: "Microscopic inspection against our unyielding brand standards.",
    img: "/images/process/quality.jpg",
    // Step 5: Right aligned, tall, overlapping grading
    wrapperClass: "col-span-12 lg:col-span-5 lg:col-start-8 lg:mt-[-100px]",
    imageClass: "h-[400px] lg:h-[700px]",
    textClass: "lg:absolute -bottom-12 lg:-left-[40%] z-20"
  },
  {
    num: "06",
    title: "Packing",
    desc: "Secure, elegant packaging ready for global secure transit.",
    img: "/images/process/packing.jpg",
    // Step 6: Center square
    wrapperClass: "col-span-12 lg:col-span-6 lg:col-start-4 lg:mt-[300px] lg:mb-32",
    imageClass: "h-[400px] lg:h-[600px] lg:aspect-square",
    textClass: "lg:absolute -bottom-24 lg:left-1/2 lg:-translate-x-1/2 lg:text-center z-20"
  }
];

export default function ManufacturingMasonryStory() {
  return (
    <section className="bg-[var(--color-brand-warm-white)] w-full py-24 lg:py-48 overflow-hidden relative">
      
      {/* Title block */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 mb-24 lg:mb-48 text-center lg:text-left">
        <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-light tracking-tighter text-[var(--color-brand-graphite)] leading-none">
          The<br className="hidden lg:block"/> Art of<br className="hidden lg:block"/> Creation.
        </h2>
        <div className="w-24 h-[1px] bg-[var(--color-brand-line)] mt-12 mx-auto lg:mx-0" />
      </div>

      {/* Masonry Grid */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative">
          
          {steps.map((step, idx) => (
            <div key={idx} className={`relative group ${step.wrapperClass}`}>
              
              {/* Image */}
              <div className={`w-full overflow-hidden bg-gray-200 relative ${step.imageClass}`}>
                <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-700" />
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>

              {/* Text Card */}
              <div className={`relative lg:w-[450px] bg-white/95 backdrop-blur-xl p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/50 mt-[-40px] lg:mt-0 mx-4 lg:mx-0 ${step.textClass}`}>
                {/* Background Watermark Number */}
                <span className="absolute top-4 right-6 text-7xl font-light text-gray-100 pointer-events-none select-none z-0">
                  {step.num}
                </span>
                
                <div className="relative z-10">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-brand-graphite)] opacity-50 mb-4 block">
                    Phase {step.num}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-brand-graphite)] mb-6">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-brand-text-secondary)] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* CTA Footer */}
      <div className="w-full text-center mt-32 lg:mt-0">
        <Link href="/manufacturing" className="group inline-flex flex-col items-center gap-4 text-[var(--color-brand-graphite)] hover:text-black transition-colors">
          <span className="font-medium uppercase tracking-widest text-sm">Explore Manufacturing</span>
          <span className="w-12 h-[1px] bg-[var(--color-brand-graphite)] group-hover:w-24 transition-all duration-500 ease-out" />
        </Link>
      </div>

    </section>
  );
}
