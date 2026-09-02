const fs = require('fs');
let code = fs.readFileSync('app/global-reach/page.tsx', 'utf8');

const anchor = 'Direct logistics and distribution networks spanning continents.\n              </p>\n';
const idx = code.indexOf(anchor);

if (idx > -1) {
  const before = code.substring(0, idx + anchor.length);
  
  const endAnchor = '              India Sales\n            </h3>';
  const endIdx = code.indexOf(endAnchor);
  
  if (endIdx > -1) {
    const after = code.substring(endIdx);
    
    const missing = `            </div>
          </div>
        </div>
      </Section>

      {/* 3. HOW WE HANDLE YOUR ENQUIRY (Book Scroll Pipeline) */}
      <div className="w-full relative z-10 border-b border-white/10">
        <BookScrollPipeline />
      </div>

      {/* 4. SALES CONTACT ROUTING */}
      <Section className="bg-[var(--color-brand-white)]" withFluidVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--fluid-gap)] w-full">
          <div className="bg-[var(--color-brand-panel)] p-8 md:p-12 border border-[var(--color-brand-line)]">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-brand-graphite)] mb-6">
`;
    
    fs.writeFileSync('app/global-reach/page.tsx', before + missing + after);
    console.log('Fixed file');
  } else { console.log('end not found'); }
} else { console.log('start not found'); }
