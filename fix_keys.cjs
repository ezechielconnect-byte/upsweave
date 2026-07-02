const fs = require('fs');
let content = fs.readFileSync('src/i18n.ts', 'utf8');

content = content.replace(/"1\. Acceptation des Conditions"/g, '"Acceptation des Conditions"');
content = content.replace(/"2\. Description du Service"/g, '"Description du Service"');
content = content.replace(/"3\. Vérification et Avis"/g, '"Vérification et Avis"');
content = content.replace(/"4\. Comptes Utilisateurs"/g, '"Comptes Utilisateurs"');
content = content.replace(/"5\. Résiliation"/g, '"Résiliation"');
content = content.replace(/"6\. Modifications"/g, '"Modifications"');

// Fix translations for EN where we also might need to replace the keys and values.
content = content.replace(/"1\. Acceptance of Terms"/g, '"Acceptance of Terms"');
content = content.replace(/"2\. Description of the Service"/g, '"Description of the Service"');
content = content.replace(/"3\. Verification and Reviews"/g, '"Verification and Reviews"');
content = content.replace(/"4\. User Accounts"/g, '"User Accounts"');
content = content.replace(/"5\. Termination"/g, '"Termination"');

fs.writeFileSync('src/i18n.ts', content, 'utf8');
