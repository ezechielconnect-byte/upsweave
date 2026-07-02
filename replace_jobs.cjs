const fs = require('fs');

let content = fs.readFileSync('src/pages/Jobs.tsx', 'utf8');

content = content.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");

content = content.replace(/export default function Jobs[\s\S]*?\{/, "export default function Jobs({ onNavigate }: { onNavigate: (path: string) => void }) {\n  const { t } = useTranslation();");

const replacements = [
  ["Découvrez notre objectif", "{t(\"Découvrez notre objectif\")}"],
  ["Notre <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600\">Mission</span>", "{t(\"Notre\")} <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600\">{t(\"Mission\")}</span>"],
  ["Connecter les besoins aux meilleures compétences", "{t(\"Connecter les besoins aux meilleures compétences\")}"],
  ["Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.", "{t(\"Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.\")}"],
  ["Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.", "{t(\"Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.\")}"],
  ["Pourquoi existons-nous ?", "{t(\"Pourquoi existons-nous ?\")}"],
  ["Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :", "{t(\"Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :\")}"],
  ["Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.", "{t(\"Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.\")}"],
  [">Ce que nous apportons<", ">{t(\"Ce que nous apportons\")}<"],
  [">Pour les clients<", ">{t(\"Pour les clients\")}<"],
  ["Nous permettons aux utilisateurs de :", "{t(\"Nous permettons aux utilisateurs de :\")}"],
  [">Pour les professionnels<", ">{t(\"Pour les professionnels\")}<"],
  ["Nous aidons les prestataires à :", "{t(\"Nous aidons les prestataires à :\")}"],
  [">Notre Vision<", ">{t(\"Notre Vision\")}<"],
  ["Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.", "{t(\"Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.\")}"],
  ["Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.", "{t(\"Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.\")}"],
  [">Nos engagements<", ">{t(\"Nos engagements\")}<"],
  [">Notre Promesse<", ">{t(\"Notre Promesse\")}<"],
  ["Transformer chaque besoin en opportunité et chaque compétence en solution.", "{t(\"Transformer chaque besoin en opportunité et chaque compétence en solution.\")}"],
  ["Qualité • Compétence • Professionnalisme", "{t(\"Qualité • Compétence • Professionnalisme\")}"],
  ["Au service de vos besoins.", "{t(\"Au service de vos besoins.\")}"],
  ["Retour à l'accueil", "{t(\"Retour à l'accueil\")}"]
];

for (const [search, replace] of replacements) {
    if (content.includes(search)) {
        content = content.replace(search, replace);
    }
}

// Arrays replacements
content = content.replace(/"Trouver un répétiteur pour accompagner un enfant\.",\s*"Faire appel à un menuisier pour fabriquer un meuble\.",\s*"Recruter un développeur pour créer un site web\.",\s*"Trouver un électricien, un plombier ou un artisan qualifié\.",\s*"Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel\."/, `t("Trouver un répétiteur pour accompagner un enfant."), t("Faire appel à un menuisier pour fabriquer un meuble."), t("Recruter un développeur pour créer un site web."), t("Trouver un électricien, un plombier ou un artisan qualifié."), t("Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.")`);

content = content.replace(/"Trouver facilement des professionnels qualifiés\.",\s*"Comparer plusieurs prestataires\.",\s*"Consulter les profils et les expériences\.",\s*"Gagner du temps dans leurs recherches\.",\s*"Réaliser leurs projets en toute confiance\."/, `t("Trouver facilement des professionnels qualifiés."), t("Comparer plusieurs prestataires."), t("Consulter les profils et les expériences."), t("Gagner du temps dans leurs recherches."), t("Réaliser leurs projets en toute confiance.")`);

content = content.replace(/"Mettre en valeur leurs compétences\.",\s*"Développer leur visibilité\.",\s*"Trouver de nouveaux clients\.",\s*"Développer leur activité\.",\s*"Construire leur réputation professionnelle\."/, `t("Mettre en valeur leurs compétences."), t("Développer leur visibilité."), t("Trouver de nouveaux clients."), t("Développer leur activité."), t("Construire leur réputation professionnelle.")`);

content = content.replace(/"Qualité dans les services proposés\.",\s*"Compétence des professionnels présents sur la plateforme\.",\s*"Professionnalisme dans chaque interaction\.",\s*"Transparence et confiance entre les utilisateurs\.",\s*"Innovation pour améliorer continuellement l'expérience\."/, `t("Qualité dans les services proposés."), t("Compétence des professionnels présents sur la plateforme."), t("Professionnalisme dans chaque interaction."), t("Transparence et confiance entre les utilisateurs."), t("Innovation pour améliorer continuellement l'expérience.")`);

fs.writeFileSync('src/pages/Jobs.tsx', content, 'utf8');
console.log('Modified Jobs.tsx');
