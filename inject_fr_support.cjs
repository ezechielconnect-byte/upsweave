const fs = require('fs');

let code = fs.readFileSync('src/i18n.ts', 'utf8');

const regex = new RegExp('FR:\\s*\\{\\s*translation:\\s*\\{([\\s\\S]*?)\\}\\s*\\}', 'm');
const match = code.match(regex);
if(match) {
    let block = match[1];
    let newContent = "";
    if (!block.includes('"Support":')) {
        newContent += '      "Support": "Support",\n';
    }
    if (!block.includes('"Aide et assistance":')) {
        newContent += '      "Aide et assistance": "Aide et assistance",\n';
    }
    code = code.replace(match[0], match[0].replace(match[1], match[1] + newContent));
}
fs.writeFileSync('src/i18n.ts', code, 'utf8');
console.log('Successfully injected FR translations');
