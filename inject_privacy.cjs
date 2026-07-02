const fs = require('fs');

const privacyDisclaimerData = {
  EN: {
    "Légal & Confidentialité": "Legal & Privacy",
    "Politique de Confidentialité": "Privacy Policy",
    "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le": "We are committed to protecting your privacy and ensuring the security of your data on the platform. Last updated on",
    "Sommaire": "Summary",
    "Contactez notre équipe responsable de la vie privée :": "Contact our privacy team:",
    "Engagement de Confiance": "Commitment to Trust",
    "Votre Sécurité Avant Tout": "Your Security Above All",
    "TASKup a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.": "TASKup has been designed to provide you with a safe and trusted environment. No compromise is made with your data and privacy, so you can develop your business and hire experts with peace of mind.",
    "Paiements Sécurisés": "Secure Payments",
    "Identités Vérifiées": "Verified Identities",
    "Confidentialité Protégée": "Privacy Protected",

    "1. Introduction": "1. Introduction",
    "TASKup est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.": "TASKup is the leading platform for connecting qualified professionals and clients. This policy explains how we collect, use, and protect your personal information.",
    "2. Nature du Service": "2. Nature of the Service",
    "TASKup permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.": "TASKup allows you to find, contact, and work with experts in multiple fields, ensuring secure payments and quality exchanges.",
    "3. Données Collectées": "3. Data Collected",
    "Nous pouvons recueillir les données suivantes :": "We may collect the following data:",
    "Informations de base (nom, prénom, adresse e-mail, téléphone)": "Basic information (last name, first name, email address, phone number)",
    "Documents d'identité (pour la vérification stricte des professionnels)": "Identity documents (for strict verification of professionals)",
    "Préférences utilisateur et paramètres de notification": "User preferences and notification settings",
    "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)": "Payment data (processed and secured by our approved third-party providers)",
    "Historique des missions, messages, et évaluations laissées sur la plateforme": "History of missions, messages, and reviews left on the platform",
    "4. Utilisation des Données": "4. Use of Data",
    "Les données collectées sont utilisées pour :": "The data collected is used to:",
    "Faciliter la mise en relation entre clients et prestataires": "Facilitate connections between clients and providers",
    "Personnaliser votre expérience (affiner les résultats de recherche d'experts)": "Personalize your experience (refine expert search results)",
    "Garantir le bon déroulement et le suivi des missions": "Ensure the smooth running and tracking of missions",
    "Assurer la sécurité des accès et lutter contre la fraude": "Ensure access security and fight fraud",
    "5. Sécurité": "5. Security",
    "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :": "We take the security of your data very seriously. Measures in place:",
    "Vos données personnelles sont stockées sur des serveurs hautement sécurisés": "Your personal data is stored on highly secure servers",
    "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)": "Financial transactions (payment) are end-to-end encrypted (PCI-DSS)",
    "Authentification sécurisée pour protéger l'accès à votre compte TASKup": "Secure authentication to protect access to your TASKup account",
    "6. Partage des Données": "6. Data Sharing",
    "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :": "We never sell your personal data. It may be shared in the following strictly necessary cases:",
    "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission": "Strictly required information is exchanged between the client and the provider upon confirming a mission",
    "Avec nos partenaires de paiement pour valider le séquestre et le versement": "With our payment partners to validate escrow and payout",
    "Afin de se conformer à des obligations légales en vigueur": "In order to comply with applicable legal obligations",
    "7. Vos Droits": "7. Your Rights",
    "En tant qu'utilisateur de TASKup, vous disposez des droits suivants (conformément au RGPD) :": "As a TASKup user, you have the following rights (in accordance with GDPR):",
    "Accéder à vos données et en demander la copie": "Access your data and request a copy",
    "Rectifier ou mettre à jour vos informations inexactes": "Rectify or update your inaccurate information",
    "Demander la suppression de votre profil, historique et compte": "Request the deletion of your profile, history, and account",
    "Vous opposer à recevoir nos newsletters et alertes de mission": "Object to receiving our newsletters and mission alerts",
    "8. Contact": "8. Contact",
    "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :": "For any information request or to exercise your rights regarding your data, you can contact us:",

    "Mentions Légales": "Legal Notices",
    "Hébergement": "Hosting",
    "Le site est hébergé par Google Cloud Platform.": "The site is hosted by Google Cloud Platform.",
    "Les données sont hébergées dans des centres de données européens sécurisés, conformément au RGPD.": "Data is hosted in secure European data centers, in compliance with GDPR.",
    "Propriété Intellectuelle": "Intellectual Property",
    "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de": "The general structure of the site, as well as the texts, animated or non-animated images, and all elements making up the site are the exclusive property of",
    "Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site Internet est interdite.": "Any total or partial representation of this site by any means whatsoever, without the express permission of the website operator, is prohibited.",
    "Responsabilité": "Responsibility",
    "est une plateforme de mise en relation. Nous intervenons en qualité d'intermédiaire technique. À ce titre, notre responsabilité ne saurait être engagée pour la non-exécution ou la mauvaise exécution du ou des services réalisés par un prestataire.": "is a connection platform. We act as a technical intermediary. As such, we cannot be held liable for the non-performance or poor performance of the service(s) performed by a provider."
  }
};

let i18nContent = fs.readFileSync('src/i18n.ts', 'utf8');
const langsToUpdate = ["EN", "ES", "DE", "IT", "PT", "AR", "ZH"];

for (const lang of langsToUpdate) {
  const regex = new RegExp(`(${lang}:\\s*\\{\\s*translation:\\s*\\{)`);
  if (regex.test(i18nContent)) {
    let toInsert = "";
    for (const [key, value] of Object.entries(privacyDisclaimerData.EN)) {
      toInsert += `      "${key}": "${value.replace(/"/g, '\\"')}",\n`;
    }
    i18nContent = i18nContent.replace(regex, `$1${toInsert}`);
  }
}

fs.writeFileSync('src/i18n.ts', i18nContent, 'utf8');
console.log('Added Privacy and Disclaimer updates to all other languages');
