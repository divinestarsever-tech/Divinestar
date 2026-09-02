import re

with open('app/global-reach/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

start_marker = '{/* 4. SALES CONTACT ROUTING */}'
end_marker = '{/* 5. CTA */}'

start_idx = code.find(start_marker)
end_idx = code.find(end_marker)

if start_idx != -1 and end_idx != -1:
    before = code[:start_idx]
    after = code[end_idx:]
    
    new_section = '''{/* 4. SALES CONTACT ROUTING */}
      <Section className="bg-[var(--color-brand-white)] overflow-hidden" withFluidVertical>
        <div className="w-full text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <div className="w-12 h-[1px] bg-[var(--color-brand-line)] mx-auto mb-8" />
          <h2 className="text-[length:var(--fluid-h2)] font-light tracking-tighter text-[var(--color-brand-graphite)] mb-6 leading-tight">
            Direct Routing
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed font-light">
            Dedicated infrastructure ensuring rapid response times across all timezones.
          </p>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col gap-24 md:gap-40">
          
          {/* India Sales Offset Block */}
          <div className="relative w-full flex flex-col md:flex-row items-center">
            {/* Image (Left) */}
            <div className="w-full md:w-[65%] h-[400px] md:h-[700px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="/images/sales_india_light.jpg" 
                alt="India Sales HQ" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
            </div>
            
            {/* Floating Glass Content (Right Overlap) */}
            <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 w-[90%] md:w-[45%] mx-auto md:mx-0 mt-[-60px] md:mt-0 bg-white/90 backdrop-blur-2xl p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/50">
              <div className="text-[var(--color-brand-graphite)]">
                <div className="font-mono text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-4 text-[var(--color-brand-text-secondary)]">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Timezone: IST (UTC +5:30)
                </div>
                <h3 className="text-4xl md:text-6xl font-light tracking-tight mb-8">India Sales HQ</h3>
                <div className="w-12 h-[1px] bg-[var(--color-brand-line)] mb-8" />
                <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed font-light mb-12">
                  [Contact details — pending client confirmation]
                </p>
                <button className="flex items-center gap-4 text-[var(--color-brand-graphite)] font-medium uppercase tracking-widest text-xs group/btn hover:text-black transition-colors">
                  Connect directly
                  <span className="w-8 h-[1px] bg-[var(--color-brand-graphite)] group-hover/btn:w-16 transition-all duration-500 ease-out" />
                </button>
              </div>
            </div>
          </div>

          {/* International Sales Offset Block */}
          <div className="relative w-full flex flex-col md:flex-row-reverse items-center">
            {/* Image (Right) */}
            <div className="w-full md:w-[65%] h-[400px] md:h-[700px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src="/images/sales_international_light.jpg" 
                alt="International Trade Desk" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
            </div>
            
            {/* Floating Glass Content (Left Overlap) */}
            <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-20 w-[90%] md:w-[45%] mx-auto md:mx-0 mt-[-60px] md:mt-0 bg-white/90 backdrop-blur-2xl p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white/50">
              <div className="text-[var(--color-brand-graphite)]">
                <div className="font-mono text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-4 text-[var(--color-brand-text-secondary)]">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Global Trade Desk
                </div>
                <h3 className="text-4xl md:text-6xl font-light tracking-tight mb-8">International</h3>
                <div className="w-12 h-[1px] bg-[var(--color-brand-line)] mb-8" />
                <p className="text-lg text-[var(--color-brand-text-secondary)] leading-relaxed font-light mb-12">
                  [Contact details — pending client confirmation]
                </p>
                <button className="flex items-center gap-4 text-[var(--color-brand-graphite)] font-medium uppercase tracking-widest text-xs group/btn hover:text-black transition-colors">
                  Route Enquiry
                  <span className="w-8 h-[1px] bg-[var(--color-brand-graphite)] group-hover/btn:w-16 transition-all duration-500 ease-out" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </Section>

      '''
    
    with open('app/global-reach/page.tsx', 'w', encoding='utf-8') as f:
        f.write(before + new_section + after)
    print("Fixed!")
else:
    print("Markers not found.")
