import re
with open('app/global-reach/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Replace 4 divs with 3 divs
pattern = r'spanning continents\.\s*</p>\s*</div>\s*</div>\s*</div>\s*</div>\s*</Section>'
replacement = '''spanning continents.
                </p>
              </div>
            </div>
          </div>
        </Section>'''

new_code, count = re.subn(pattern, replacement, code)
if count > 0:
    with open('app/global-reach/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_code)
    print(f'Fixed! Replacements: {count}')
else:
    print('Not found!')
