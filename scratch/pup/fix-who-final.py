import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Add import if missing
if 'WhoWeAreInteractive' not in code:
    import_statement = 'import WhoWeAreInteractive from "@/components/ui/WhoWeAreInteractive";\n'
    # Insert after last import
    last_import_idx = code.rfind('import')
    if last_import_idx != -1:
        end_of_line = code.find('\n', last_import_idx)
        code = code[:end_of_line+1] + import_statement + code[end_of_line+1:]
    else:
        code = import_statement + code

start_marker = '{/* 3. WHO WE ARE */}'
end_marker = '{/* 4. MANUFACTURING STORY */}'
start_idx = code.find(start_marker)
end_idx = code.find(end_marker)

if start_idx != -1 and end_idx != -1:
    before = code[:start_idx]
    after = code[end_idx:]
    
    new_section = '''{/* 3. WHO WE ARE */}
      <WhoWeAreInteractive />

      '''
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(before + new_section + after)
    print('Fixed!')
else:
    print('Not found')
