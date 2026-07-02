const fs = require('fs');
let i18nContent = fs.readFileSync('src/i18n.ts', 'utf8');

console.log("Index of FR: {", i18nContent.indexOf("FR: {"));
console.log("Index of translation: {", i18nContent.indexOf("translation: {"));
