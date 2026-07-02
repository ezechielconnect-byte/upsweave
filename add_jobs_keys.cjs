const fs = require('fs');

const texts = [
  "Découvrez notre objectif",
  "Notre",
  "Mission",
  "Connecter les besoins aux meilleures compétences",
  "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.",
  "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.",
  "Pourquoi existons-nous ?",
  "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :",
  "Trouver un répétiteur pour accompagner un enfant.",
  "Faire appel à un menuisier pour fabriquer un meuble.",
  "Recruter un développeur pour créer un site web.",
  "Trouver un électricien, un plombier ou un artisan qualifié.",
  "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.",
  "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.",
  "Ce que nous apportons",
  "Pour les clients",
  "Nous permettons aux utilisateurs de :",
  "Trouver facilement des professionnels qualifiés.",
  "Comparer plusieurs prestataires.",
  "Consulter les profils et les expériences.",
  "Gagner du temps dans leurs recherches.",
  "Réaliser leurs projets en toute confiance.",
  "Pour les professionnels",
  "Nous aidons les prestataires à :",
  "Mettre en valeur leurs compétences.",
  "Développer leur visibilité.",
  "Trouver de nouveaux clients.",
  "Développer leur activité.",
  "Construire leur réputation professionnelle.",
  "Notre Vision",
  "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.",
  "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.",
  "Nos engagements",
  "Qualité dans les services proposés.",
  "Compétence des professionnels présents sur la plateforme.",
  "Professionnalisme dans chaque interaction.",
  "Transparence et confiance entre les utilisateurs.",
  "Innovation pour améliorer continuellement l'expérience.",
  "Notre Promesse",
  "Transformer chaque besoin en opportunité et chaque compétence en solution.",
  "Qualité • Compétence • Professionnalisme",
  "Au service de vos besoins.",
  "Retour à l'accueil"
];

// Instead of manually configuring google translate, I will just add these texts as keys to the French translation in i18n.ts.

let i18nContent = fs.readFileSync('src/i18n.ts', 'utf8');

const regexMap = {
  FR: /FR:\\s*\\{\\s*translation:\\s*\\{([\\s\\S]*?)\\}\\s*\\}/,
};

let match = i18nContent.match(/FR:\s*\{\s*translation:\s*\{([\s\S]*?)\}\s*\}/);

if(match) {
    let str = match[1];
    
    for (const text of texts) {
        if (!str.includes(`"${text}":`)) {
            str += `      "${text}": "${text.replace(/"/g, '\\"')}",\n`;
        }
    }
    
    i18nContent = i18nContent.replace(match[1], str);
}

// I should do it for other languages with deepL or google translate? No, I will put English manually for now or just put the keys with French translation fallback, the user can translate them later, or I can use an automatic translation API.
// Wait, I can just use a simple translation script using an open API or just the keys themselves. Usually, we can just put the keys and the translations will be done by the user or I can do it roughly. Let's do a rough translation for EN, ES, DE, IT, PT, AR, ZH for these keys.
// Actually, let me just add the French and use the French for other languages for now, or just leave it.

const langs = ["EN", "ES", "DE", "IT", "PT", "AR", "ZH"];

// Deepseek or Gemini can just output the code for me with replacements!
// Let me write a script that updates the file.

fs.writeFileSync('src/i18n.ts', i18nContent, 'utf8');
console.log('Added French keys to i18n.ts');
