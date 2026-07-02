const fs = require('fs');

const i18n = fs.readFileSync('src/i18n.ts', 'utf8');

const regex = /"Dernière mise à jour : 4 Juin 2026":/;
console.log("Found in i18n.ts:", regex.test(i18n));

// check EN
const enRegex = /EN:\s*\{\s*translation:\s*\{[^}]*"Dernière mise à jour : 4 Juin 2026":/g;
const hasEn = i18n.match(/EN:\s*\{\s*translation:\s*\{([\s\S]*?)\}/);
if (hasEn) {
    console.log("In EN:", hasEn[1].includes("Dernière mise à jour"));
} else {
    console.log("No EN block??");
}

