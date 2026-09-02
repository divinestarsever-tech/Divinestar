import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Add import if missing
if 'ManufacturingCurtainStory' not in code:
    import_statement = 'import ManufacturingCurtainStory from "@/components/ui/ManufacturingCurtainStory";\n'
    last_import_idx = code.rfind('import')
    if last_import_idx != -1:
        end_of_line = code.find('\n', last_import_idx)
        code = code[:end_of_line+1] + import_statement + code[end_of_line+1:]
    else:
        code = import_statement + code

# Remove the old ManufacturingMasonryStory import if it's there
code = code.replace('import ManufacturingMasonryStory from "@/components/ui/ManufacturingMasonryStory";\n', '')

start_marker = '{/* 4. MANUFACTURING STORY */}'
end_marker = '{/* 5. ROUND DIAMOND SPECIALISATION */}'

start_idx = code.find(start_marker)
end_idx = code.find(end_marker)

if start_idx != -1 and end_idx != -1:
    before = code[:start_idx]
    after = code[end_idx:]
    
    new_section = '''{/* 4. MANUFACTURING STORY */}
      <ManufacturingCurtainStory />

      '''
    
    with open('app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(before + new_section + after)
    print('Fixed!')
else:
    print('Not found')
