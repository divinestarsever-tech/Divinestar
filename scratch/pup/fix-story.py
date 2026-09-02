import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Add import if missing
if 'ManufacturingStoryInteractive' not in code:
    import_statement = 'import ManufacturingStoryInteractive from "@/components/ui/ManufacturingStoryInteractive";\n'
    last_import_idx = code.rfind('import')
    if last_import_idx != -1:
        end_of_line = code.find('\n', last_import_idx)
        code = code[:end_of_line+1] + import_statement + code[end_of_line+1:]
    else:
        code = import_statement + code

start_marker = '{/* 4. MANUFACTURING STORY */}'
end_marker = '{/* 5. GLOBAL EXPERTISE */}'

start_idx = code.find(start_marker)
end_idx = code.find(end_marker)

if start_idx != -1 and end_idx != -1:
    before = code[:start_idx]
    after = code[end_idx:]
    
    new_section = '''{/* 4. MANUFACTURING STORY */}
      <ManufacturingStoryInteractive />

      '''
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(before + new_section + after)
    print('Fixed!')
else:
    print('Not found')
