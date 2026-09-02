import re
with open('app/global-reach/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

pattern = r'spanning continents\.\n\s*</p>\n\s*India Sales\n\s*</h3>'
replacement = '''spanning continents.
                </p>
              </div>
            </div>
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
              India Sales
            </h3>'''

new_code, count = re.subn(pattern, replacement, code)
if count > 0:
    with open('app/global-reach/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_code)
    print('Fixed!')
else:
    print('Not found!')
