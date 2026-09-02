const fs = require('fs');
let code = fs.readFileSync('app/global-reach/page.tsx', 'utf8');

const broken = `                {/* Mobile fallback */}
                <p className="text-white/80 pt-4 max-w-sm font-light text-sm md:text-base leading-relaxed lg:hidden">
                  Direct logistics and distribution networks spanning continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>`;

const fixed = `                {/* Mobile fallback */}
                <p className="text-white/80 pt-4 max-w-sm font-light text-sm md:text-base leading-relaxed lg:hidden">
                  Direct logistics and distribution networks spanning continents.
                </p>
              </div>
            </div>
          </div>
        </Section>`;

code = code.replace(broken, fixed);
fs.writeFileSync('app/global-reach/page.tsx', code);
console.log('Fixed div count!');
