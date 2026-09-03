import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Add import if missing
if 'RoundSpecialisation' not in code:
    import_statement = 'import RoundSpecialisation from "@/components/ui/RoundSpecialisation";\n'
    last_import_idx = code.rfind('import')
    if last_import_idx != -1:
        end_of_line = code.find('\n', last_import_idx)
        code = code[:end_of_line+1] + import_statement + code[end_of_line+1:]
    else:
        code = import_statement + code

start_marker = '{/* 5. ROUND DIAMOND SPECIALISATION */}'
end_marker = '{/* 6. QUALITY & ASSORTMENT */}'

start_idx = code.find(start_marker)
end_idx = code.find(end_marker)

if start_idx != -1 and end_idx != -1:
    before = code[:start_idx]
    after = code[end_idx:]
    
    new_section = '''{/* 5. ROUND DIAMOND SPECIALISATION */}
      <RoundSpecialisation />

      '''
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(before + new_section + after)
    print('Fixed!')
else:
    print('Not found')
