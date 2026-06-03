from pathlib import Path
import re
root = Path(r'c:\Users\asus\OneDrive\文件\Lovable potfolio\portfolio')
replacements = [
    (r'bg-gradient-to-br', 'bg-linear-to-br'),
    (r'bg-gradient-to-bl', 'bg-linear-to-bl'),
    (r'bg-gradient-to-tl', 'bg-linear-to-tl'),
    (r'bg-gradient-to-tr', 'bg-linear-to-tr'),
    (r'bg-gradient-to-b', 'bg-linear-to-b'),
    (r'bg-gradient-to-l', 'bg-linear-to-l'),
    (r'bg-gradient-to-r', 'bg-linear-to-r'),
    (r'bg-gradient-to-t', 'bg-linear-to-t'),
    (r'group-hover:bg-gradient-to-r', 'group-hover:bg-linear-to-r'),
    (r'bg-\[length:250%_100%\]', 'bg-size-[250%_100%]'),
    (r'to-white/\[0\.02\]', 'to-white/2'),
    (r'flex-shrink-0', 'shrink-0'),
    (r'w-\[300px\]', 'w-75'),
    (r'sm:w-\[350px\]', 'sm:w-87.5'),
]
modified = []
for path in root.rglob('*.tsx'):
    text = path.read_text(encoding='utf-8')
    new_text = text
    for old, new in replacements:
        new_text = re.sub(old, new, new_text)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        modified.append(path.relative_to(root))
print('Modified', len(modified), 'files')
for f in modified:
    print(f)
