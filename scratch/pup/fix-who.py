import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()
start_marker = '{/* 3. WHO WE ARE */}'
end_marker = '{/* 4. MANUFACTURING STORY */}'
start_idx = code.find(start_marker)
end_idx = code.find(end_marker)

if start_idx != -1 and end_idx != -1:
    before = code[:start_idx]
    after = code[end_idx:]
    
    new_section = '''{/* 3. WHO WE ARE */}
      <Section className="bg-[var(--color-brand-white)] relative" withFluidVertical={false}>
        {/* The Pinned Image Container (Desktop Only) */}
        <div className="absolute top-0 right-0 w-[50vw] h-full hidden lg:block z-0">
          <div className="sticky top-0 w-full h-screen p-8 xl:p-12">
            <div className="w-full h-full relative overflow-hidden shadow-2xl bg-black">
              <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
              <img 
                src="/images/home_who_we_are.jpg" 
                alt="Divine Star Diamonds" 
                className="w-full h-full object-cover opacity-90 scale-100 hover:scale-105 transition-transform duration-[3s] ease-out" 
              />
            </div>
          </div>
        </div>

        {/* The Scrolling Text Content */}
        <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row relative z-10">
          
          {/* Left Side (Scrolls) */}
          <div className="w-full lg:w-[50%] py-24 lg:py-48 px-4 md:px-12 xl:px-24">
            
            {/* Mobile Image (hidden on desktop) */}
            <div className="w-full h-[60vh] mb-16 lg:hidden relative shadow-2xl">
               <img src="/images/home_who_we_are.jpg" alt="Divine Star" className="w-full h-full object-cover" />
            </div>

            {/* Scroll Block 1 */}
            <div className="min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center mb-24 lg:mb-48">
              <span className="font-mono text-xs uppercase tracking-[0.4em] mb-6 block text-[var(--color-brand-text-secondary)]">
                The House
              </span>
              <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-light tracking-tighter text-[var(--color-brand-graphite)] mb-12 leading-[0.9]">
                Who<br/>We Are.
              </h2>
              <div className="w-16 h-[1px] bg-[var(--color-brand-line)] mb-12" />
              <p className="text-3xl md:text-4xl lg:text-5xl text-[var(--color-brand-graphite)] leading-[1.1] font-light tracking-tight max-w-xl">
                Built on precision, consistency, and long-term trade relationships.
              </p>
            </div>

            {/* Scroll Block 2 */}
            <div className="min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center">
              <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[var(--color-brand-graphite)] mb-8 leading-none">
                Disciplined Assortment.
              </h3>
              <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] leading-relaxed font-light mb-16 max-w-lg">
                Our focus is round-diamond expertise and dependable global supply for elite jewellery manufacturers, global brands and international wholesalers. We don't just sell diamonds; we provide a foundation of trust for your entire supply chain.
              </p>
              
              <Link href="/about" className="group inline-flex items-center gap-6 text-[var(--color-brand-graphite)] hover:text-black transition-colors w-max">
                <span className="font-medium uppercase tracking-widest text-sm">Discover Our Legacy</span>
                <span className="w-12 h-[1px] bg-black group-hover:w-24 transition-all duration-500 ease-out" />
              </Link>
            </div>

          </div>
        </div>
      </Section>

      '''
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(before + new_section + after)
    print('Fixed!')
else:
    print('Not found')
