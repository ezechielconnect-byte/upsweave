const fs = require('fs');

const translations = {
  EN: {
    "Support": "Support",
    "Aide et assistance": "Help and troubleshooting",
  },
  ES: {
    "Support": "Soporte",
    "Aide et assistance": "Ayuda y asistencia",
  },
  DE: {
    "Support": "Support",
    "Aide et assistance": "Hilfe und Unterstützung",
  },
  IT: {
    "Support": "Supporto",
    "Aide et assistance": "Aiuto e assistenza",
  },
  PT: {
    "Support": "Suporte",
    "Aide et assistance": "Ajuda e assistência",
  },
  AR: {
    "Support": "الدعم",
    "Aide et assistance": "المساعدة والدعم",
  },
  ZH: {
    "Support": "支持",
    "Aide et assistance": "帮助和支持",
  }
};

let code = fs.readFileSync('src/i18n.ts', 'utf8');

for (const lang of ['EN', 'ES', 'DE', 'IT', 'PT', 'AR', 'ZH']) {
    const regex = new RegExp(lang + ':\\s*\\{\\s*translation:\\s*\\{([\\s\\S]*?)\\}\\s*\\}', 'm');
    const match = code.match(regex);
    if(match) {
        let block = match[1];
        let newContent = "";
        for (const [key, val] of Object.entries(translations[lang])) {
           if (!block.includes('"' + key + '":')) {
               newContent += '      "' + key + '": "' + val.replace(/"/g, '\\"') + '",\n';
           }
        }
        code = code.replace(match[0], match[0].replace(match[1], match[1] + newContent));
    }
}
fs.writeFileSync('src/i18n.ts', code, 'utf8');
console.log('Successfully injected translations for Support.');
