const fs = require('fs');

const data = {
  FR: {
    "Dernière mise à jour : 4 Juin 2026": "Dernière mise à jour : 4 Juin 2026",
    "Acceptation des Conditions": "Acceptation des Conditions",
    "En accédant ou en utilisant": "En accédant ou en utilisant",
    "la Plateforme": "la Plateforme",
    "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.": "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.",
    "Description du Service": "Description du Service",
    "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.": "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.",
    "Vérification et Avis": "Vérification et Avis",
    "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,": "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,",
    "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.": "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.",
    "Comptes Utilisateurs": "Comptes Utilisateurs",
    "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.": "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.",
    "Résiliation": "Résiliation",
    "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.": "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.",
    "Modifications": "Modifications",
    "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.": "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation."
  },
  EN: {
    "Dernière mise à jour : 4 Juin 2026": "Last updated: June 4, 2026",
    "Acceptation des Conditions": "Acceptance of Terms",
    "En accédant ou en utilisant": "By accessing or using",
    "la Plateforme": "the Platform",
    "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.": "you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you are not authorized to access the Service.",
    "Description du Service": "Description of the Service",
    "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.": "acts as a connection platform between independent service providers and clients looking for professional services. We do not directly provide the services offered by the providers.",
    "Vérification et Avis": "Verification and Reviews",
    "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,": "Although we implement an identity verification process for providers and offer an authentic review system,",
    "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.": "does not guarantee the specific quality of the work performed by providers. Transactions and agreements are made directly between the client and the provider.",
    "Comptes Utilisateurs": "User Accounts",
    "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.": "When you create an account on our platform, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of your account.",
    "Résiliation": "Termination",
    "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.": "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use or engage in inappropriate behavior on the platform.",
    "Modifications": "Modifications",
    "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.": "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any material changes to these Terms of Use."
  }
};

let i18nContent = fs.readFileSync('src/i18n.ts', 'utf8');
const langsToUpdate = ["EN", "ES", "DE", "IT", "PT", "AR", "ZH"];

for (const lang of langsToUpdate) {
  // Find where the translation object starts for this language
  const regex = new RegExp(`(${lang}:\\s*\\{\\s*translation:\\s*\\{)`);
  if (regex.test(i18nContent)) {
    let toInsert = "\n";
    for (const [key, value] of Object.entries(data.EN)) {
      toInsert += `      "${key}": "${value.replace(/"/g, '\\"')}",\n`;
    }
    i18nContent = i18nContent.replace(regex, `$1${toInsert}`);
  }
}

fs.writeFileSync('src/i18n.ts', i18nContent, 'utf8');
console.log('Added Terms updates to all other languages');
