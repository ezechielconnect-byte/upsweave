import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  FR: {
    translation: {
      "Bienvenue sur la page": "Bienvenue sur la page",
      "Cette section de UpTaskers est actuellement en cours de développement.": "Cette section de UpTaskers est actuellement en cours de développement.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.",

      "Dernière mise à jour : 4 Juin 2026":
        "Dernière mise à jour : 4 Juin 2026",
      "Acceptation des Conditions": "Acceptation des Conditions",
      "En accédant ou en utilisant": "En accédant ou en utilisant",
      "la Plateforme": "la Plateforme",
      "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.":
        "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.",
      "Description du Service": "Description du Service",
      "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.":
        "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.",
      "Vérification et Avis": "Vérification et Avis",
      "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,":
        "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,",
      "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.":
        "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.",
      "Comptes Utilisateurs": "Comptes Utilisateurs",
      "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.":
        "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.",
      Résiliation: "Résiliation",
      "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.":
        "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.",
      Modifications: "Modifications",
      "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.":
        "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.",
      "Légal & Confidentialité": "Légal & Confidentialité",
      "Politique de Confidentialité": "Politique de Confidentialité",
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le":
        "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le",
      Sommaire: "Sommaire",
      "Contactez notre équipe responsable de la protection des données personnelles à l'adresse e-mail suivante :":
        "Contactez notre équipe responsable de la vie privée :",
      "Engagement de Confiance": "Engagement de Confiance",
      "Votre Sécurité Avant Tout": "Votre Sécurité Avant Tout",
      "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.":
        "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.",
      "Paiements Sécurisés": "Paiements Sécurisés",
      "Identités Vérifiées": "Identités Vérifiées",
      "Confidentialité Protégée": "Confidentialité Protégée",
      "1. Introduction": "1. Introduction",
      "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.":
        "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.",
      "2. Nature du Service": "2. Nature du Service",
      "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.":
        "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.",
      "3. Données Collectées": "3. Données Collectées",
      "Nous pouvons recueillir les données suivantes :":
        "Nous pouvons recueillir les données suivantes :",
      "Informations de base (nom, prénom, adresse e-mail, téléphone)":
        "Informations de base (nom, prénom, adresse e-mail, téléphone)",
      "Documents d'identité (pour la vérification stricte des professionnels)":
        "Documents d'identité (pour la vérification stricte des professionnels)",
      "Préférences utilisateur et paramètres de notification":
        "Préférences utilisateur et paramètres de notification",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)":
        "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme":
        "Historique des missions, messages, et évaluations laissées sur la plateforme",
      "4. Utilisation des Données": "4. Utilisation des Données",
      "Les données collectées sont utilisées pour :":
        "Les données collectées sont utilisées pour :",
      "Faciliter la mise en relation entre clients et prestataires":
        "Faciliter la mise en relation entre clients et prestataires",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)":
        "Personnaliser votre expérience (affiner les résultats de recherche d'experts)",
      "Garantir le bon déroulement et le suivi des missions":
        "Garantir le bon déroulement et le suivi des missions",
      "Assurer la sécurité des accès et lutter contre la fraude":
        "Assurer la sécurité des accès et lutter contre la fraude",
      "5. Sécurité": "5. Sécurité",
      "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :":
        "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :",
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés":
        "Vos données personnelles sont stockées sur des serveurs hautement sécurisés",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)":
        "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers":
        "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers",
      "6. Partage des Données": "6. Partage des Données",
      "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :":
        "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :",
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission":
        "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement":
        "Avec nos partenaires de paiement pour valider le séquestre et le versement",
      "Afin de se conformer à des obligations légales en vigueur":
        "Afin de se conformer à des obligations légales en vigueur",
      "7. Vos Droits": "7. Vos Droits",
      "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :":
        "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :",
      "Accéder à vos données et en demander la copie":
        "Accéder à vos données et en demander la copie",
      "Rectifier ou mettre à jour vos informations inexactes":
        "Rectifier ou mettre à jour vos informations inexactes",
      "Demander la suppression de votre profil, historique et compte":
        "Demander la suppression de votre profil, historique et compte",
      "Vous opposer à recevoir nos newsletters et alertes de mission":
        "Vous opposer à recevoir nos newsletters et alertes de mission",
      "8. Contact": "8. Contact",
      "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :":
        "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :",
      "Mentions Légales": "Mentions Légales",
      Hébergement: "Hébergement",
      "Le site est hébergé par Firebase.":
        "Le site est hébergé par Firebase.",
      "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.":
        "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.",
      "Propriété Intellectuelle": "Propriété Intellectuelle",
      "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de":
        "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.":
        "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.",
      Responsabilité: "Responsabilité",
      "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.":
        "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.",

      "Notre mission": "Notre mission",
      Abonnements: "Abonnements",
      "Rechercher...": "Rechercher...",
      Langue: "Langue",
      "Le professionnel": "Le professionnel",
      "qu'il vous faut.": "qu'il vous faut.",
      "L'expertise": "L'expertise",
      "digitale.": "digitale.",
      "Des artisans": "Des artisans",
      "qualifiés.": "qualifiés.",
      Apprenez: "Apprenez",
      "sans limite.": "sans limite.",
      "Prenez soin de": "Prenez soin de",
      "vous.": "vous.",
      "Trouver un prestataire": "Trouver un prestataire",
      "Se connecter": "Se connecter",
      "Connectez-vous avec": "Connectez-vous avec",
      "l'excellence.": "l'excellence.",
      "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.":
        "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.",
      Commencer: "Commencer",
      "Une mise en relation rapide et simplifiée.":
        "Une mise en relation rapide et simplifiée.",
      "Des profils vérifiés et des avis authentiques.":
        "Des profils vérifiés et des avis authentiques.",
      "Un espace de collaboration sécurisé pour tous.":
        "Un espace de collaboration sécurisé pour tous.",
      "Maximisez votre impact": "Maximisez votre impact",
      "Outils pour réussir": "Outils pour réussir",
      "Nous sommes là pour vous aider": "Nous sommes là pour vous aider",
      "S'inscrire": "S'inscrire",
      Conçu: "Conçu",
      "pour exceller.": "pour exceller.",
      "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.":
        "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.",
      "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.":
        "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.",
      "Réseau Fiable": "Réseau Fiable",
      "Des talents": "Des talents",
      "certifiés.": "certifiés.",
      "Profils vérifiés": "Profils vérifiés",
      "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.":
        "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.",
      "Avis authentiques": "Avis authentiques",
      "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.":
        "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.",
      "Support dédié 24/7": "Support dédié 24/7",
      "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.":
        "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.",
      "L'expertise dans": "L'expertise dans",
      "votre poche.": "votre poche.",
      "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.":
        "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.",
      "Le/La coach sportif(ve)": "Le/La coach sportif(ve)",
      "L'agent(e) de sécurité": "L'agent(e) de sécurité",
      "Le/La traducteur(trice)": "Le/La traducteur(trice)",
      "Le/La menuisier(ère)": "Le/La menuisier(ère)",
      "Le/La décorateur(trice)": "Le/La décorateur(trice)",
      "Le/La mécanicien(ne)": "Le/La mécanicien(ne)",
      "Le/La jardinier(ère)": "Le/La jardinier(ère)",
      "Le/La cuisinier(ère)": "Le/La cuisinier(ère)",
      "Le/La professionnel(le)": "Le/La professionnel(le)",
      "L'informaticien(ne)": "L'informaticien(ne)",
      "L'artisan(e)": "L'artisan(e)",
      "Le/La photographe": "Le/La photographe",
      "Le/La chauffeur(e)": "Le/La chauffeur(e)",
      "Le/La déménageur(euse)": "Le/La déménageur(euse)",
      "Le/La professeur(e)": "Le/La professeur(e)",
      "L'agent immobilier": "L'agent immobilier",
      "hero.desc.sport":
        "Atteignez vos objectifs physiques avec l'accompagnement personnalisé de nos entraîneurs passionnés.",
      "hero.desc.security":
        "Assurez la sécurité de vos biens et événements avec des professionnels formés et qualifiés.",
      "hero.desc.translator":
        "Facilitez vos échanges internationaux grâce à nos experts en traduction et interprétation.",
      "hero.desc.carpenter":
        "Des artisans qualifiés pour tous vos travaux de menuiserie, de la fabrication à la rénovation.",
      "hero.desc.decorator":
        "Sublimez votre intérieur avec l'expertise de nos décorateurs d'intérieur passionnés.",
      "hero.desc.mechanic":
        "Réparez et entretenez votre véhicule avec nos experts en mécanique automobile.",
      "hero.desc.garden":
        "Transformez et entretenez vos espaces verts grâce à l'expertise de nos jardiniers et paysagistes passionnés.",
      "hero.desc.cooking":
        "Offrez-vous un moment gastronomique avec des chefs talentueux, de la préparation de repas aux événements privés.",
      "hero.desc.services":
        "Trouvez les meilleurs experts pour vos travaux du quotidien, sélectionnés avec soin et prêts à intervenir rapidement.",
      "hero.desc.tech":
        "Développeurs, designers et marketeurs de talent pour propulser vos projets numériques vers de nouveaux sommets.",
      "hero.desc.repair":
        "Un savoir-faire reconnu pour toutes vos rénovations et réparations, avec des professionnels de confiance à vos côtés.",
      "hero.desc.photo":
        "Capturez vos événements précieux avec l'expertise de nos photographes professionnels prêts à sublimer chaque instant.",
      "hero.desc.transport":
        "Déplacez-vous facilement et en toute sécurité avec nos chauffeurs professionnels qualifiés.",
      "hero.desc.moving":
        "Déménagez l'esprit tranquille avec nos experts du transport, efficaces et précautionneux.",
      "hero.desc.education":
        "Développez de nouvelles compétences avec des professeurs passionnés, en ligne ou à domicile, selon vos besoins.",
      "hero.desc.realestate":
        "Trouvez l'expert immobilier idéal pour vous accompagner dans tous vos projets d'achat, de vente ou de location.",
      Éducation: "Éducation",
      Artisanat: "Artisanat",
      Informatique: "Informatique",
      Réparation: "Réparation",
      Beauté: "Beauté",
      Transport: "Transport",
      "Bien-être": "Bien-être",
      Événementiel: "Événementiel",
      Déménagement: "Déménagement",
      Nettoyage: "Nettoyage",
      Bricolage: "Bricolage",
      Photographie: "Photographie",
      Architecture: "Architecture",
      Jardinage: "Jardinage",
      Menuiserie: "Menuiserie",
      Décoration: "Décoration",
      Mécanique: "Mécanique",
      "Soutien scolaire": "Soutien scolaire",
      Rédaction: "Rédaction",
      Vidéo: "Vidéo",
      Sécurité: "Sécurité",
      Plomberie: "Plomberie",
      Électricité: "Électricité",
      Design: "Design",
      Marketing: "Marketing",
      Traduction: "Traduction",
      Coaching: "Coaching",
      "Garde d'enfants": "Garde d'enfants",
      Musique: "Musique",
      Comptabilité: "Comptabilité",
      Droit: "Droit",
      Cuisine: "Cuisine",
      Sport: "Sport",
      Coiffure: "Coiffure",
      "Garde d'animaux": "Garde d'animaux",
      Massage: "Massage",
      "Personal Shopper": "Personal Shopper",
      "Organisation d'événements": "Organisation d'événements",
      Maquillage: "Maquillage",
      Esthétique: "Esthétique",
      "Aide à domicile": "Aide à domicile",
      Serrurerie: "Serrurerie",
      Peinture: "Peinture",
      Vétérinaire: "Vétérinaire",
      "Agent immobilier": "Agent immobilier",
      "Journal UpTaskers": "Journal UpTaskers",
      "Guides, astuces et conseils pour clients et professionnels":
        "Guides, astuces et conseils pour clients et professionnels",
      "Lire la suite": "Lire la suite",
      "Les catégories les plus utilisées dans le mois":
        "Les catégories les plus utilisées dans le mois",
      "Les services qui génèrent le plus d'opportunités ce mois-ci.":
        "Les services qui génèrent le plus d'opportunités ce mois-ci.",
      "Découvrir nos services": "Découvrir nos services",
      "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.":
        "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.",
      "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.":
        "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.",
      "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.":
        "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.",
      "Avis des utilisateurs et statistiques":
        "Avis des utilisateurs et statistiques",
      "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.":
        "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.",
      "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.":
        "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.",
      "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.":
        "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.",
      "Objectif 2030": "Objectif 2030",
      "Devenir le leader mondial de la mise en relation de services.":
        "Devenir le leader mondial de la mise en relation de services.",
      "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.":
        "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.",
      "Notre QG": "Notre QG",
      "Côte d'Ivoire": "Côte d'Ivoire",
      PLATEFORME: "PLATEFORME",
      CONFIANCE: "CONFIANCE",
      ENTREPRISE: "ENTREPRISE",
      LÉGAL: "LÉGAL",
      Accueil: "Accueil",
      "Explorez nos catégories": "Explorez nos catégories",
      Avantages: "Avantages",
      Ressources: "Ressources",
      "Avis clients": "Avis clients",
      "Vérification des profils": "Vérification des profils",
      "Garantie UpTaskers": "Garantie UpTaskers",
      "À propos de UpTaskers": "À propos de UpTaskers",
      "Nous contacter": "Nous contacter",
      "Support client": "Support client",
      "Conditions d'utilisation": "Conditions d'utilisation",
      "Politique de confidentialité": "Politique de confidentialité",
      "Mentions légales": "Mentions légales",
      "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.":
        "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.",
      "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.":
        "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.",
      "100% de profils vérifiés": "100% de profils vérifiés",
      "Applications Mobiles": "Applications Mobiles",
      "Suivez-nous": "Suivez-nous",
      "Tous droits réservés.": "Tous droits réservés.",
      "12 Avril 2026": "12 Avril 2026",
      "8 Mars 2026": "8 Mars 2026",
      "20 Mai 2026": "20 Mai 2026",
      "Contactez-nous": "Contactez-nous",
      "Nous sommes là pour": "Nous sommes là pour",
      "vous aider.": "vous aider.",
      "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.":
        "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.",
      "Informations de contact": "Informations de contact",
      Email: "Email",
      "Pour toute demande générale": "Pour toute demande générale",
      Téléphone: "Téléphone",
      "Du lundi au vendredi, de 9h à 18h": "Du lundi au vendredi, de 9h à 18h",
      Adresse: "Adresse",
      Plateau: "Plateau",
      "Abidjan, Côte d'Ivoire": "Abidjan, Côte d'Ivoire",
      "Téléchargez notre application": "Téléchargez notre application",
      "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.":
        "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.",
      "Centre de ressources": "Centre de ressources",
      "Outils et guides pour": "Outils et guides pour",
      "réussir.": "réussir.",
      "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.":
        "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.",
      "Espace Clients": "Espace Clients",
      "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.":
        "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.",
      "Comment bien définir votre projet ?":
        "Comment bien définir votre projet ?",
      "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.":
        "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.",
      "Choisir le prestataire idéal": "Choisir le prestataire idéal",
      "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.":
        "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.",
      "Guide des tarifs 2024": "Guide des tarifs 2024",
      "Découvrez les prix moyens du marché pour budgétiser vos travaux.":
        "Découvrez les prix moyens du marché pour budgétiser vos travaux.",
      "Espace Prestataires": "Espace Prestataires",
      "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.":
        "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.",
      "Optimiser votre vitrine": "Optimiser votre vitrine",
      "Conseils pratiques pour rendre votre profil plus attractif pour les clients.":
        "Conseils pratiques pour rendre votre profil plus attractif pour les clients.",
      "Réussir son premier contact": "Réussir son premier contact",
      "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.":
        "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.",
      "Obtenir plus d'avis positifs": "Obtenir plus d'avis positifs",
      "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.":
        "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.",
      "Formations Vidéo": "Formations Vidéo",
      "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.":
        "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.",
      "Voir les tutoriels": "Voir les tutoriels",
      "Formation vidéo": "Formation vidéo",
      "À propos de nous": "À propos de nous",
      "Découvrez UpTaskers": "Découvrez UpTaskers",
      "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.":
        "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.",
      "Qui sommes-nous ?": "Qui sommes-nous ?",
      "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.":
        "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.",
      "Notre Vision": "Notre Vision",
      "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.":
        "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.",
      "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.":
        "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.",
      "Ce que nous proposons": "Ce que nous proposons",
      "Pour les utilisateurs :": "Pour les utilisateurs :",
      "Rechercher des professionnels qualifiés.":
        "Rechercher des professionnels qualifiés.",
      "Publier leurs besoins et recevoir des propositions.":
        "Publier leurs besoins et recevoir des propositions.",
      "Comparer les profils, expériences et avis.":
        "Comparer les profils, expériences et avis.",
      "Contacter directement les prestataires.":
        "Contacter directement les prestataires.",
      "Trouver rapidement des solutions adaptées à leurs projets.":
        "Trouver rapidement des solutions adaptées à leurs projets.",
      "Pour les professionnels :": "Pour les professionnels :",
      "Créer un profil détaillé.": "Créer un profil détaillé.",
      "Présenter leurs compétences et réalisations.":
        "Présenter leurs compétences et réalisations.",
      "Développer leur clientèle.": "Développer leur clientèle.",
      "Recevoir des demandes de services.":
        "Recevoir des demandes de services.",
      "Valoriser leur expertise auprès d'un large public.":
        "Valoriser leur expertise auprès d'un large public.",
      "Nos Valeurs": "Nos Valeurs",
      "Qualité :": "Qualité :",
      "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.":
        "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.",
      "Compétence :": "Compétence :",
      "Nous mettons en avant les talents et le savoir-faire des professionnels.":
        "Nous mettons en avant les talents et le savoir-faire des professionnels.",
      "Professionnalisme :": "Professionnalisme :",
      "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.":
        "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.",
      "Confiance :": "Confiance :",
      "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.":
        "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.",
      "Pourquoi nous choisir ?": "Pourquoi nous choisir ?",
      "Une plateforme simple et intuitive.":
        "Une plateforme simple et intuitive.",
      "Des professionnels qualifiés.": "Des professionnels qualifiés.",
      "Une mise en relation rapide.": "Une mise en relation rapide.",
      "Un accompagnement orienté vers la satisfaction des utilisateurs.":
        "Un accompagnement orienté vers la satisfaction des utilisateurs.",
      "Un engagement constant en faveur de la qualité des services.":
        "Un engagement constant en faveur de la qualité des services.",
      "Notre engagement": "Notre engagement",
      "Au service de vos besoins": "Au service de vos besoins",
      "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.":
        "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.",
      "Qualité • Compétence • Professionnalisme":
        "Qualité • Compétence • Professionnalisme",
      "Retour à l'accueil": "Retour à l'accueil",
      "Toutes nos catégories": "Toutes nos catégories",
      "Explorez nos": "Explorez nos",
      catégories: "catégories",
      "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.":
        "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.",
      "Rechercher une catégorie...": "Rechercher une catégorie...",
      "Aucune catégorie trouvée pour": "Aucune catégorie trouvée pour",
      "Avantages Exclusifs": "Avantages Exclusifs",
      "Maximisez votre ": "Maximisez votre ",
      "impact.": "impact.",
      "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.":
        "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.",
      "Développez votre activité": "Développez votre activité",
      "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.":
        "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.",
      "Paiements sécurisés": "Paiements sécurisés",
      "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.":
        "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.",
      "Gestion simplifiée": "Gestion simplifiée",
      "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.":
        "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.",
      "Communauté de confiance": "Communauté de confiance",
      "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.":
        "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.",
      "Visibilité accrue": "Visibilité accrue",
      "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.":
        "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.",
      "Réputation valorisée": "Réputation valorisée",
      "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.":
        "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.",
      "Prêt à libérer votre potentiel ?": "Prêt à libérer votre potentiel ?",
      "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.":
        "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.",
      "Rejoindre UpTaskers maintenant": "Rejoindre UpTaskers maintenant",
      "Tendances du mois": "Tendances du mois",
      "Les catégories les plus utilisées": "Les catégories les plus utilisées",
      "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.":
        "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.",
      "Très demandé": "Très demandé",
      "Voir toutes les catégories": "Voir toutes les catégories",
      "Des experts vérifiés": "Des experts vérifiés",
      "Des talents pour chaque besoin": "Des talents pour chaque besoin",
      "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.":
        "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.",
      "Designer UX/UI": "Designer UX/UI",
      "Développeur Full-Stack": "Développeur Full-Stack",
      "Rédactrice Web App": "Rédactrice Web App",
      "Artisan Plombier": "Artisan Plombier",
      "Assistante Virtuelle": "Assistante Virtuelle",
      "Technicien IT": "Technicien IT",
      avis: "avis",
      "Voir le profil": "Voir le profil",
      "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.":
        "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.",
      "Découvrez nos services": "Découvrez nos services",
      "Note moyenne basée sur": "Note moyenne basée sur",
      "+12,000 avis certifiés": "+12,000 avis certifiés",
      "Utilisateurs/mois": "Utilisateurs/mois",
      Satisfaction: "Satisfaction",
      "Rép. moyenne": "Rép. moyenne",
      Missions: "Missions",
      Maçonnerie: "Maçonnerie",
      Carrelage: "Carrelage",
      "Montage vidéo": "Montage vidéo",
      Programmation: "Programmation",
      "Retour aux catégories": "Retour aux catégories",
      "Experts en": "Experts en",
      "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :":
        "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :",
      "Confiez-nous vos projets pour une réalisation d'excellence.":
        "Confiez-nous vos projets pour une réalisation d'excellence.",
      "Qualité Supérieure": "Qualité Supérieure",
      "L'élite des": "L'élite des",
      "professionnels.": "professionnels.",
      "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.":
        "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.",
      "Espace client": "Espace client",
      "Espace prestataire": "Espace prestataire",
      "Connectez-vous ou inscrivez-vous": "Connectez-vous ou inscrivez-vous",
      "Continuer avec Google": "Continuer avec Google",
      "Continuer avec Apple": "Continuer avec Apple",
      "Continuer avec un numéro de téléphone":
        "Continuer avec un numéro de téléphone",
      "Adresse e-mail": "Adresse e-mail",
      Continuer: "Continuer",
      "Rejoignez la confiance.": "Rejoignez la confiance.",
      "Sécurité garantie": "Sécurité garantie",
      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.":
        "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.",
      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.":
        "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.",
      "Créer un compte": "Créer un compte",
      "Sélectionnez votre type de profil pour commencer":
        "Sélectionnez votre type de profil pour commencer",
      "Je cherche un professionnel": "Je cherche un professionnel",
      "Je propose mes services": "Je propose mes services",
      "Nom complet": "Nom complet",
      "Adresse email": "Adresse email",
      "Mot de passe": "Mot de passe",
      "J'accepte les": "J'accepte les",
      "et la": "et la",
      Support: "Support",
      "Download on the": "Download on the",
      "Disponible sur": "Disponible sur",
      "Du lundi au dimanche": "Du lundi au dimanche",
      "Du lundi au dimanche, 24h/24": "Du lundi au dimanche, 24h/24",
      "Le/La maçon(ne)": "Le/La maçon(ne)",
      "hero.desc.masonry":
        "Des artisans qualifiés pour tous vos travaux de construction, de façade et d'aménagement extérieur.",
      "Le/La coiffeur(euse)": "Le/La coiffeur(euse)",
      "hero.desc.hairdress":
        "Faites appel à nos experts de la coiffure pour une coupe, une coloration ou un coiffage sur mesure.",
      "L'organisateur(trice)": "L'organisateur(trice)",
      "hero.desc.eventorg":
        "Confiez la planification de vos mariages, fêtes et événements professionnels à nos experts passionnés.",
      "L'avocat(e) / juriste": "L'avocat(e) / juriste",
      "hero.desc.law":
        "Sécurisez vos démarches avec notre sélection d'avocats et de professionnels du droit compétents.",
      "Découvrez notre objectif": "Découvrez notre objectif",
      Notre: "Notre",
      Mission: "Mission",
      "Connecter les besoins aux meilleures compétences":
        "Connecter les besoins aux meilleures compétences",
      "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.":
        "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.",
      "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.":
        "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.",
      "Pourquoi existons-nous ?": "Pourquoi existons-nous ?",
      "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :":
        "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :",
      "Trouver un répétiteur pour accompagner un enfant.":
        "Trouver un répétiteur pour accompagner un enfant.",
      "Faire appel à un menuisier pour fabriquer un meuble.":
        "Faire appel à un menuisier pour fabriquer un meuble.",
      "Recruter un développeur pour créer un site web.":
        "Recruter un développeur pour créer un site web.",
      "Trouver un électricien, un plombier ou un artisan qualifié.":
        "Trouver un électricien, un plombier ou un artisan qualifié.",
      "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.":
        "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.",
      "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.":
        "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.",
      "Ce que nous apportons": "Ce que nous apportons",
      "Pour les clients": "Pour les clients",
      "Nous permettons aux utilisateurs de :":
        "Nous permettons aux utilisateurs de :",
      "Trouver facilement des professionnels qualifiés.":
        "Trouver facilement des professionnels qualifiés.",
      "Comparer plusieurs prestataires.": "Comparer plusieurs prestataires.",
      "Consulter les profils et les expériences.":
        "Consulter les profils et les expériences.",
      "Gagner du temps dans leurs recherches.":
        "Gagner du temps dans leurs recherches.",
      "Réaliser leurs projets en toute confiance.":
        "Réaliser leurs projets en toute confiance.",
      "Pour les professionnels": "Pour les professionnels",
      "Nous aidons les prestataires à :": "Nous aidons les prestataires à :",
      "Mettre en valeur leurs compétences.":
        "Mettre en valeur leurs compétences.",
      "Développer leur visibilité.": "Développer leur visibilité.",
      "Trouver de nouveaux clients.": "Trouver de nouveaux clients.",
      "Développer leur activité.": "Développer leur activité.",
      "Construire leur réputation professionnelle.":
        "Construire leur réputation professionnelle.",
      "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.":
        "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.",
      "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.":
        "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.",
      "Nos engagements": "Nos engagements",
      "Qualité dans les services proposés.":
        "Qualité dans les services proposés.",
      "Compétence des professionnels présents sur la plateforme.":
        "Compétence des professionnels présents sur la plateforme.",
      "Professionnalisme dans chaque interaction.":
        "Professionnalisme dans chaque interaction.",
      "Transparence et confiance entre les utilisateurs.":
        "Transparence et confiance entre les utilisateurs.",
      "Innovation pour améliorer continuellement l'expérience.":
        "Innovation pour améliorer continuellement l'expérience.",
      "Notre Promesse": "Notre Promesse",
      "Transformer chaque besoin en opportunité et chaque compétence en solution.":
        "Transformer chaque besoin en opportunité et chaque compétence en solution.",
      "Au service de vos besoins.": "Au service de vos besoins.",
      "Aide et assistance": "Aide et assistance",
    },
  },
  EN: {
    translation: {
      "Bienvenue sur la page": "Welcome to the page",
      "Cette section de UpTaskers est actuellement en cours de développement.": "This section of UpTaskers is currently under development.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Our platform is continuously evolving to provide you with the best experience. Stay tuned for updates as we build out this comprehensive resource.",

      "Légal & Confidentialité": "Legal & Privacy",
      "Politique de Confidentialité": "Privacy Policy",
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le":
        "We are committed to protecting your privacy and ensuring the security of your data on the platform. Last updated on",
      Sommaire: "Summary",
      "Contactez notre équipe responsable de la vie privée :":
        "Contact our personal data protection team at the following email address:",
      "Engagement de Confiance": "Commitment to Trust",
      "Votre Sécurité Avant Tout": "Your Security Above All",
      "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.":
        "UpTaskers has been designed to provide you with a safe and trusted environment. No compromise is made with your data and privacy, so you can develop your business and hire experts with peace of mind.",
      "Paiements Sécurisés": "Secure Payments",
      "Identités Vérifiées": "Verified Identities",
      "Confidentialité Protégée": "Privacy Protected",
      "1. Introduction": "1. Introduction",
      "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.":
        "UpTaskers is the leading platform for connecting qualified professionals and clients. This policy explains how we collect, use, and protect your personal information.",
      "2. Nature du Service": "2. Nature of the Service",
      "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.":
        "UpTaskers allows you to find, contact, and work with experts in multiple fields, ensuring secure payments and quality exchanges.",
      "3. Données Collectées": "3. Data Collected",
      "Nous pouvons recueillir les données suivantes :":
        "We may collect the following data:",
      "Informations de base (nom, prénom, adresse e-mail, téléphone)":
        "Basic information (last name, first name, email address, phone number)",
      "Documents d'identité (pour la vérification stricte des professionnels)":
        "Identity documents (for strict verification of professionals)",
      "Préférences utilisateur et paramètres de notification":
        "User preferences and notification settings",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)":
        "Payment data (processed and secured by our approved third-party providers)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme":
        "History of missions, messages, and reviews left on the platform",
      "4. Utilisation des Données": "4. Use of Data",
      "Les données collectées sont utilisées pour :":
        "The data collected is used to:",
      "Faciliter la mise en relation entre clients et prestataires":
        "Facilitate connections between clients and providers",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)":
        "Personalize your experience (refine expert search results)",
      "Garantir le bon déroulement et le suivi des missions":
        "Ensure the smooth running and tracking of missions",
      "Assurer la sécurité des accès et lutter contre la fraude":
        "Ensure access security and fight fraud",
      "5. Sécurité": "5. Security",
      "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :":
        "We take the security of your data very seriously. Measures in place:",
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés":
        "Your personal data is stored on highly secure servers",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)":
        "Financial transactions (payment) are end-to-end encrypted (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers":
        "Secure authentication to protect access to your UpTaskers account",
      "6. Partage des Données": "6. Data Sharing",
      "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :":
        "We never sell your personal data. It may be shared in the following strictly necessary cases:",
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission":
        "Strictly required information is exchanged between the client and the provider upon confirming a mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement":
        "With our payment partners to validate escrow and payout",
      "Afin de se conformer à des obligations légales en vigueur":
        "In order to comply with applicable legal obligations",
      "7. Vos Droits": "7. Your Rights",
      "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :":
        "As a UpTaskers user, you have the following rights (in accordance with Ivorian data protection law):",
      "Accéder à vos données et en demander la copie":
        "Access your data and request a copy",
      "Rectifier ou mettre à jour vos informations inexactes":
        "Rectify or update your inaccurate information",
      "Demander la suppression de votre profil, historique et compte":
        "Request the deletion of your profile, history, and account",
      "Vous opposer à recevoir nos newsletters et alertes de mission":
        "Object to receiving our newsletters and mission alerts",
      "8. Contact": "8. Contact",
      "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :":
        "For any information request or to exercise your rights regarding your data, you can contact us:",
      "Mentions Légales": "Legal Notices",
      Hébergement: "Hosting",
      "Le site est hébergé par Firebase.":
        "The site is hosted by Firebase.",
      "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.":
        "Data is hosted in secure data centers, in compliance with Ivorian data protection law.",
      "Propriété Intellectuelle": "Intellectual Property",
      "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de":
        "The general structure of the site, as well as the texts, animated or non-animated images, and all elements making up the site are the exclusive property of",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.":
        "Any reproduction, representation, modification, publication, or adaptation of all or part of the elements of the site is prohibited without the prior written consent of UpTaskers.",
      Responsabilité: "Responsibility",
      "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.":
        "is a matchmaking platform between clients and service providers. UpTaskers acts solely as a technical intermediary and does not carry out the services offered on the platform. Consequently, UpTaskers cannot be held responsible for the quality, execution, or non-execution of the services provided by the service providers.",

      "Dernière mise à jour : 4 Juin 2026": "Last updated: June 4, 2026",
      "Acceptation des Conditions": "Acceptance of Terms",
      "En accédant ou en utilisant": "By accessing or using",
      "la Plateforme": "the Platform",
      "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.":
        "you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you are not authorized to access the Service.",
      "Description du Service": "Description of the Service",
      "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.":
        "acts as a connection platform between independent service providers and clients looking for professional services. We do not directly provide the services offered by the providers.",
      "Vérification et Avis": "Verification and Reviews",
      "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,":
        "Although we implement an identity verification process for providers and offer an authentic review system,",
      "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.":
        "does not guarantee the specific quality of the work performed by providers. Transactions and agreements are made directly between the client and the provider.",
      "Comptes Utilisateurs": "User Accounts",
      "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.":
        "When you create an account on our platform, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of your account.",
      Résiliation: "Termination",
      "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.":
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use or engage in inappropriate behavior on the platform.",
      Modifications: "Modifications",
      "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.":
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any material changes to these Terms of Use.",

      "Notre mission": "Our Mission",
      Abonnements: "Pricing",
      "Rechercher...": "Search...",
      Langue: "Language",
      "Le professionnel": "The professional",
      "qu'il vous faut.": "you need.",
      "L'expertise": "Digital",
      "digitale.": "expertise.",
      "Des artisans": "Qualified",
      "qualifiés.": "artisans.",
      Apprenez: "Learn",
      "sans limite.": "without limits.",
      "Prenez soin de": "Take care of",
      "vous.": "yourself.",
      "Trouver un prestataire": "Find a provider",
      "Se connecter": "Log in",
      "Connectez-vous avec": "Connect with",
      "l'excellence.": "excellence.",
      "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.":
        "Our platform revolutionizes the connection between professionals and clients. Whether you need an expert for a one-off mission or you're looking to develop your client base, UpTaskers creates a trusted environment.",
      Commencer: "Get Started",
      "Une mise en relation rapide et simplifiée.":
        "A quick and simplified connection.",
      "Des profils vérifiés et des avis authentiques.":
        "Verified profiles and authentic reviews.",
      "Un espace de collaboration sécurisé pour tous.":
        "A secure collaboration space for everyone.",
      "Maximisez votre impact": "Maximize your impact",
      "Outils pour réussir": "Tools to succeed",
      "Nous sommes là pour vous aider": "We are here to help you",
      "S'inscrire": "Sign Up",
      Conçu: "Designed",
      "pour exceller.": "to excel.",
      "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.":
        "UpTaskers's vocation is simple: to save you time by offering instant access to the best talents in your area.",
      "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.":
        "We combine the efficiency of a modern platform with the expertise of verified professionals, so that every service rendered is a perfectly smooth experience.",
      "Réseau Fiable": "Reliable Network",
      "Des talents": "Certified",
      "certifiés.": "talents.",
      "Profils vérifiés": "Verified Profiles",
      "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.":
        "Every provider on UpTaskers goes through a thorough identity verification process to guarantee your security.",
      "Avis authentiques": "Authentic Reviews",
      "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.":
        "Read real feedback. Only clients who have used the services can leave a review.",
      "Support dédié 24/7": "Dedicated 24/7 Support",
      "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.":
        "Our team is available to assist you and resolve any issue encountered on the platform.",
      "L'expertise dans": "Expertise in",
      "votre poche.": "your pocket.",
      "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.":
        "Download our free mobile app to find a provider, manage your requests, and communicate easily wherever you are.",
      "Le/La coach sportif(ve)": "The sports coach",
      "L'agent(e) de sécurité": "The security agent",
      "Le/La traducteur(trice)": "The translator",
      "Le/La menuisier(ère)": "The carpenter",
      "Le/La décorateur(trice)": "The decorator",
      "Le/La mécanicien(ne)": "The mechanic",
      "Le/La jardinier(ère)": "The gardener",
      "Le/La cuisinier(ère)": "The chef",
      "Le/La professionnel(le)": "The professional",
      "L'informaticien(ne)": "The IT specialist",
      "L'artisan(e)": "The artisan",
      "Le/La photographe": "The photographer",
      "Le/La chauffeur(e)": "The driver",
      "Le/La déménageur(euse)": "The mover",
      "Le/La professeur(e)": "The teacher",
      "L'agent immobilier": "The real estate agent",
      "hero.desc.sport":
        "Reach your physical goals with personalized guidance from our passionate trainers.",
      "hero.desc.security":
        "Ensure the security of your property and events with trained and qualified professionals.",
      "hero.desc.translator":
        "Facilitate your international exchanges with our translation and interpretation experts.",
      "hero.desc.carpenter":
        "Qualified artisans for all your carpentry work, from manufacturing to renovation.",
      "hero.desc.decorator":
        "Enhance your interior with the expertise of our passionate interior decorators.",
      "hero.desc.mechanic":
        "Repair and maintain your vehicle with our auto mechanics experts.",
      "hero.desc.garden":
        "Transform and maintain your green spaces with the expertise of our passionate gardeners and landscapers.",
      "hero.desc.cooking":
        "Treat yourself to a gastronomic moment with talented chefs, from meal preparation to private events.",
      "hero.desc.services":
        "Find the best experts for your daily tasks, carefully selected and ready to intervene quickly.",
      "hero.desc.tech":
        "Talented developers, designers, and marketers to propel your digital projects to new heights.",
      "hero.desc.repair":
        "Recognized expertise for all your renovations and repairs, with trusted professionals by your side.",
      "hero.desc.photo":
        "Capture your precious events with the expertise of our professional photographers ready to sublime every moment.",
      "hero.desc.transport":
        "Move easily and safely with our qualified professional drivers.",
      "hero.desc.moving":
        "Move with peace of mind with our transport experts, efficient and careful.",
      "hero.desc.education":
        "Develop new skills with passionate teachers, online or at home, depending on your needs.",
      "hero.desc.realestate":
        "Find the ideal real estate expert to support you in all your buying, selling or renting projects.",
      Éducation: "Education",
      Artisanat: "Crafts",
      Informatique: "IT Support",
      Réparation: "Repair",
      Beauté: "Beauty",
      Transport: "Transport",
      "Bien-être": "Wellness",
      Événementiel: "Events",
      Déménagement: "Moving",
      Nettoyage: "Cleaning",
      Bricolage: "DIY/Handyman",
      Photographie: "Photography",
      Architecture: "Architecture",
      Jardinage: "Gardening",
      Menuiserie: "Carpentry",
      Décoration: "Decoration",
      Mécanique: "Mechanics",
      "Soutien scolaire": "Tutoring",
      Rédaction: "Writing",
      Vidéo: "Video",
      Sécurité: "Security",
      Plomberie: "Plumbing",
      Électricité: "Electrical",
      Design: "Design",
      Marketing: "Marketing",
      Traduction: "Translation",
      Coaching: "Coaching",
      "Garde d'enfants": "Babysitting",
      Musique: "Music",
      Comptabilité: "Accounting",
      Droit: "Law",
      Cuisine: "Cooking",
      Sport: "Sport",
      Coiffure: "Hairdressing",
      "Garde d'animaux": "Pet Sitting",
      Massage: "Massage",
      "Personal Shopper": "Personal Shopper",
      "Organisation d'événements": "Event Planning",
      Maquillage: "Makeup",
      Esthétique: "Aesthetics",
      "Aide à domicile": "Home Care",
      Serrurerie: "Locksmithing",
      Peinture: "Painting",
      Vétérinaire: "Veterinary",
      "Agent immobilier": "Real Estate Agent",
      "Journal UpTaskers": "UpTaskers Journal",
      "Guides, astuces et conseils pour clients et professionnels":
        "Guides, tips and advice for clients and professionals",
      "Lire la suite": "Read more",
      "Les catégories les plus utilisées dans le mois":
        "Most used categories of the month",
      "Les services qui génèrent le plus d'opportunités ce mois-ci.":
        "Services generating the most opportunities this month.",
      "Découvrir nos services": "Discover our services",
      "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.":
        "Discover current trends and the most requested domains by our clients to optimize your profile and seize new opportunities.",
      "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.":
        "UpTaskers facilitates the meeting between clients and qualified professionals for simple, fast, and effective collaborations.",
      "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.":
        "Whether you are a company looking for specific expertise or an individual needing a hand, our platform connects you strictly with the best local talents.",
      "Avis des utilisateurs et statistiques": "User reviews and statistics",
      "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.":
        "Discover what our community thinks of UpTaskers and join our thousands of active users.",
      "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.":
        "With more than 10,000 users and 5,000 registered professionals, UpTaskers is proud to maintain a 98% satisfaction rate on over 25,000 completed missions.",
      "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.":
        "Every freelance is selected with extreme precision, guaranteeing maximum expertise and perfect integration into your teams.",
      "Objectif 2030": "Goal 2030",
      "Devenir le leader mondial de la mise en relation de services.":
        "Become the world leader in service matching.",
      "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.":
        "Our vision is to build a global infrastructure to connect every talent with an opportunity, stimulating innovation, financial reliability, and independence for millions of providers internationally.",
      "Notre QG": "Our HQ",
      "Côte d'Ivoire": "Ivory Coast",
      PLATEFORME: "PLATFORM",
      CONFIANCE: "TRUST",
      ENTREPRISE: "COMPANY",
      LÉGAL: "LEGAL",
      Accueil: "Home",
      "Explorez nos catégories": "Explore our categories",
      Avantages: "Benefits",
      Ressources: "Resources",
      "Avis clients": "Customer reviews",
      "Vérification des profils": "Profile verification",
      "Garantie UpTaskers": "UpTaskers Guarantee",
      "À propos de UpTaskers": "About UpTaskers",
      "Nous contacter": "Contact us",
      "Support client": "Customer support",
      "Conditions d'utilisation": "Terms of use",
      "Politique de confidentialité": "Privacy policy",
      "Mentions légales": "Legal notices",
      "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.":
        "is the leading platform for finding verified and qualified service providers.",
      "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.":
        "The trust of our users is our priority. All professionals in our network are evaluated and their information is documented for your safety.",
      "100% de profils vérifiés": "100% verified profiles",
      "Applications Mobiles": "Mobile Apps",
      "Suivez-nous": "Follow us",
      "Tous droits réservés.": "All rights reserved.",
      "12 Avril 2026": "April 12, 2026",
      "8 Mars 2026": "March 8, 2026",
      "20 Mai 2026": "May 20, 2026",
      "Contactez-nous": "Contact us",
      "Nous sommes là pour": "We are here to",
      "vous aider.": "help you.",
      "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.":
        "A question, a need for assistance, or simply want to give us feedback? Our team is at your disposal.",
      "Informations de contact": "Contact info",
      Email: "Email",
      "Pour toute demande générale": "For any general inquiry",
      Téléphone: "Phone",
      "Du lundi au vendredi, de 9h à 18h": "Monday to Friday, 9am to 6pm",
      Adresse: "Address",
      Plateau: "Plateau",
      "Abidjan, Côte d'Ivoire": "Abidjan, Ivory Coast",
      "Téléchargez notre application": "Download our app",
      "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.":
        "Take UpTaskers everywhere with you. Manage your projects, easily chat with pros and follow the progress of your requests from your mobile.",
      "Centre de ressources": "Resource Center",
      "Outils et guides pour": "Tools and guides to",
      "réussir.": "succeed.",
      "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.":
        "Exclusive content created by our experts to support your projects, whether you are a demanding client or an ambitious professional.",
      "Espace Clients": "Client Area",
      "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.":
        "Bring your ideas to life with peace of mind. Our guides help you make the best decisions at every stage of your project.",
      "Comment bien définir votre projet ?": "How to well define your project?",
      "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.":
        "Learn to write a clear specification to get the best quotes.",
      "Choisir le prestataire idéal": "Choose the ideal provider",
      "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.":
        "The essential criteria for selecting the professional suited to your need.",
      "Guide des tarifs 2024": "2024 Pricing Guide",
      "Découvrez les prix moyens du marché pour budgétiser vos travaux.":
        "Discover average market prices to budget your works.",
      "Espace Prestataires": "Provider Area",
      "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.":
        "Boost your business and optimize your management. Discover our best practices to excel on the platform.",
      "Optimiser votre vitrine": "Optimize your showcase",
      "Conseils pratiques pour rendre votre profil plus attractif pour les clients.":
        "Practical advice to make your profile more attractive to clients.",
      "Réussir son premier contact": "Succeed in your first contact",
      "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.":
        "How to respond effectively to requests to maximize your chances of signing.",
      "Obtenir plus d'avis positifs": "Get more positive reviews",
      "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.":
        "The best strategies to build customer loyalty and develop your e-reputation.",
      "Formations Vidéo": "Video Trainings",
      "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.":
        "Learn to master all UpTaskers features in a few minutes thanks to our interactive tutorials.",
      "Voir les tutoriels": "View tutorials",
      "Formation vidéo": "Video training",
      "À propos de nous": "About us",
      "Découvrez UpTaskers": "Discover UpTaskers",
      "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.":
        "Welcome to UpTaskers, a platform dedicated to connecting individuals, companies, and qualified professionals.",
      "Qui sommes-nous ?": "Who are we?",
      "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.":
        "Our mission is simple: to allow everyone to quickly find competent and trusted providers to meet their needs, while offering professionals an opportunity to develop their activity and gain visibility.",
      "Notre Vision": "Our Vision",
      "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.":
        "We believe that every skill deserves to be valued and that every need deserves an adapted solution.",
      "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.":
        "Our ambition is to create an ecosystem where clients and providers can easily collaborate, with confidence and in a secure environment.",
      "Ce que nous proposons": "What we offer",
      "Pour les utilisateurs :": "For users:",
      "Rechercher des professionnels qualifiés.":
        "Search for qualified professionals.",
      "Publier leurs besoins et recevoir des propositions.":
        "Publish their needs and receive proposals.",
      "Comparer les profils, expériences et avis.":
        "Compare profiles, experiences, and reviews.",
      "Contacter directement les prestataires.": "Contact providers directly.",
      "Trouver rapidement des solutions adaptées à leurs projets.":
        "Rapidly find solutions adapted to their projects.",
      "Pour les professionnels :": "For professionals:",
      "Créer un profil détaillé.": "Create a detailed profile.",
      "Présenter leurs compétences et réalisations.":
        "Present their skills and achievements.",
      "Développer leur clientèle.": "Expand their customer base.",
      "Recevoir des demandes de services.": "Receive service requests.",
      "Valoriser leur expertise auprès d'un large public.":
        "Showcase their expertise to a large audience.",
      "Nos Valeurs": "Our Values",
      "Qualité :": "Quality:",
      "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.":
        "We encourage excellence in every service performed on our platform.",
      "Compétence :": "Competence:",
      "Nous mettons en avant les talents et le savoir-faire des professionnels.":
        "We highlight the talents and know-how of professionals.",
      "Professionnalisme :": "Professionalism:",
      "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.":
        "We promote serious, respectful, and transparent relationships between all users.",
      "Confiance :": "Trust:",
      "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.":
        "We are continually working to offer a reliable and secure environment.",
      "Pourquoi nous choisir ?": "Why choose us?",
      "Une plateforme simple et intuitive.": "A simple and intuitive platform.",
      "Des professionnels qualifiés.": "Qualified professionals.",
      "Une mise en relation rapide.": "Fast connection.",
      "Un accompagnement orienté vers la satisfaction des utilisateurs.":
        "Support oriented towards user satisfaction.",
      "Un engagement constant en faveur de la qualité des services.":
        "A constant commitment to service quality.",
      "Notre engagement": "Our commitment",
      "Au service de vos besoins": "At the service of your needs",
      "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.":
        "We are committed to continually improving our platform to offer the best possible experience to our users. Whether you are looking for a professional or want to offer your services, we are here to support you in realizing your projects.",
      "Qualité • Compétence • Professionnalisme":
        "Quality • Competence • Professionalism",
      "Retour à l'accueil": "Back to Home",
      "Toutes nos catégories": "All our categories",
      "Explorez nos": "Explore our",
      catégories: "categories",
      "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.":
        "Discover the diversity of our professionals and find the ideal expert for your project among our many categories.",
      "Rechercher une catégorie...": "Search for a category...",
      "Aucune catégorie trouvée pour": "No category found for",
      "Avantages Exclusifs": "Exclusive Benefits",
      "Maximisez votre ": "Maximize your ",
      "impact.": "impact.",
      "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.":
        "Whether you are a professional looking to develop your customer base or an individual looking for trusted experts, UpTaskers offers you the best tools to succeed.",
      "Développez votre activité": "Develop your business",
      "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.":
        "Access a large database of qualified customers and increase your turnover without prospecting effort.",
      "Paiements sécurisés": "Secure payments",
      "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.":
        "Enjoy a 100% secure payment system. Rest assured that you will be paid quickly and with peace of mind.",
      "Gestion simplifiée": "Simplified management",
      "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.":
        "Manage your appointments, your quotes and your invoices directly from your intuitive dashboard.",
      "Communauté de confiance": "Trusted community",
      "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.":
        "Join a community of verified professionals where quality and respect are the key words.",
      "Visibilité accrue": "Increased visibility",
      "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.":
        "Take advantage of our digital marketing expertise to appear at the top of local search results.",
      "Réputation valorisée": "Valued reputation",
      "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.":
        "Collect authentic reviews that strengthen your credibility and naturally attract new customers.",
      "Prêt à libérer votre potentiel ?": "Ready to unlock your potential?",
      "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.":
        "Join the platform that transforms the way professionals and clients collaborate.",
      "Rejoindre UpTaskers maintenant": "Join UpTaskers now",
      "Tendances du mois": "Monthly trends",
      "Les catégories les plus utilisées": "Most used categories",
      "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.":
        "Discover the most popular services this month and find the ideal expert.",
      "Très demandé": "High demand",
      "Voir toutes les catégories": "See all categories",
      "Des experts vérifiés": "Verified experts",
      "Des talents pour chaque besoin": "Talents for every need",
      "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.":
        "Browse the profiles of our best professionals and find the ideal expert.",
      "Designer UX/UI": "UX/UI Designer",
      "Développeur Full-Stack": "Full-Stack Developer",
      "Rédactrice Web App": "Web App Copywriter",
      "Artisan Plombier": "Plumber",
      "Assistante Virtuelle": "Virtual Assistant",
      "Technicien IT": "IT Technician",
      avis: "reviews",
      "Voir le profil": "View profile",
      "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.":
        "Already more than 10,000 clients and 5,000 professionals have taken the plunge! With 25,000 successful missions and 98% satisfaction, UpTaskers is the essential reference for your daily life.",
      "Découvrez nos services": "Discover our services",
      "Note moyenne basée sur": "Average rating based on",
      "+12,000 avis certifiés": "+12,000 certified reviews",
      "Utilisateurs/mois": "Users/month",
      Satisfaction: "Satisfaction rate",
      "Rép. moyenne": "Avg response",
      Missions: "Missions",
      Maçonnerie: "Masonry",
      Carrelage: "Tiling",
      "Montage vidéo": "Video Editing",
      Programmation: "Programming",
      "Retour aux catégories": "Back to categories",
      "Experts en": "Experts in",
      "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :":
        "Find the best highly qualified and certified professionals to meet your most specific requirements in:",
      "Confiez-nous vos projets pour une réalisation d'excellence.":
        "Entrust us with your projects for an excellent execution.",
      "Qualité Supérieure": "Superior Quality",
      "L'élite des": "The elite of",
      "professionnels.": "professionals.",
      "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.":
        "We rigorously evaluate and select the best profiles on the market to ensure the success and excellence of your projects.",
      "Espace client": "Client Area",
      "Espace prestataire": "Provider Area",
      "Connectez-vous ou inscrivez-vous": "Log in or sign up",
      "Continuer avec Google": "Continue with Google",
      "Continuer avec Apple": "Continue with Apple",
      "Continuer avec un numéro de téléphone": "Continue with a phone number",
      "Adresse e-mail": "Email address",
      Continuer: "Continue",
      "Rejoignez la confiance.": "Join the trust.",
      "Sécurité garantie": "Guaranteed security",
      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.":
        "Secure payments, verified profiles, and responsive 7/7 customer support.",
      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.":
        "A transparent community where every review is based on a real service.",
      "Créer un compte": "Create an account",
      "Sélectionnez votre type de profil pour commencer":
        "Select your profile type to start",
      "Je cherche un professionnel": "I am looking for a professional",
      "Je propose mes services": "I offer my services",
      "Nom complet": "Full name",
      "Adresse email": "Email address",
      "Mot de passe": "Password",
      "J'accepte les": "I accept the",
      "et la": "and the",
      Support: "Support",
      "Download on the": "Download on the",
      "Disponible sur": "Available on",
      "Du lundi au dimanche": "Monday to Sunday",
      "Du lundi au dimanche, 24h/24": "Monday to Sunday, 24/7",
      "Le/La maçon(ne)": "The mason",
      "hero.desc.masonry":
        "Qualified craftsmen for all your construction, facade and landscaping work.",
      "Le/La coiffeur(euse)": "The hairdresser",
      "hero.desc.hairdress":
        "Call on our hairdressing experts for a custom cut, color or styling.",
      "L'organisateur(trice)": "The event organizer",
      "hero.desc.eventorg":
        "Entrust the planning of your weddings, parties and corporate events to our passionate experts.",
      "L'avocat(e) / juriste": "The lawyer / jurist",
      "hero.desc.law":
        "Secure your processes with our selection of competent lawyers and legal professionals.",
      "Découvrez notre objectif": "Discover our goal",
      Notre: "Our",
      Mission: "Mission",
      "Connecter les besoins aux meilleures compétences":
        "Connecting needs to the best skills",
      "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.":
        "Our mission is to facilitate the meeting between people looking for quality services and competent professionals able to meet them.",
      "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.":
        "In a world where it is sometimes difficult to find the right provider or make your skills known, our platform creates a simple, fast and reliable bridge between clients and professionals.",
      "Pourquoi existons-nous ?": "Why do we exist?",
      "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :":
        "Every day, thousands of people look for solutions to their needs:",
      "Trouver un répétiteur pour accompagner un enfant.":
        "Find a tutor to support a child.",
      "Faire appel à un menuisier pour fabriquer un meuble.":
        "Call on a carpenter to make a piece of furniture.",
      "Recruter un développeur pour créer un site web.":
        "Recruit a developer to create a website.",
      "Trouver un électricien, un plombier ou un artisan qualifié.":
        "Find a qualified electrician, plumber or craftsman.",
      "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.":
        "Get help from a trusted professional for a personal or professional project.",
      "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.":
        "Our platform was created to make these searches simpler, faster and more efficient.",
      "Ce que nous apportons": "What we bring",
      "Pour les clients": "For clients",
      "Nous permettons aux utilisateurs de :": "We allow users to:",
      "Trouver facilement des professionnels qualifiés.":
        "Easily find qualified professionals.",
      "Comparer plusieurs prestataires.": "Compare several providers.",
      "Consulter les profils et les expériences.":
        "Consult profiles and experiences.",
      "Gagner du temps dans leurs recherches.": "Save time in their research.",
      "Réaliser leurs projets en toute confiance.":
        "Carry out their projects with confidence.",
      "Pour les professionnels": "For professionals",
      "Nous aidons les prestataires à :": "We help providers to:",
      "Mettre en valeur leurs compétences.": "Highlight their skills.",
      "Développer leur visibilité.": "Develop their visibility.",
      "Trouver de nouveaux clients.": "Find new clients.",
      "Développer leur activité.": "Develop their business.",
      "Construire leur réputation professionnelle.":
        "Build their professional reputation.",
      "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.":
        "We want to build a community where talent, know-how and professionalism are recognized and accessible to all.",
      "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.":
        "We believe that by connecting the right skills to the right needs, we help create more opportunities, confidence and success for everyone.",
      "Nos engagements": "Our commitments",
      "Qualité dans les services proposés.": "Quality in the services offered.",
      "Compétence des professionnels présents sur la plateforme.":
        "Competence of the professionals present on the platform.",
      "Professionnalisme dans chaque interaction.":
        "Professionalism in every interaction.",
      "Transparence et confiance entre les utilisateurs.":
        "Transparency and trust between users.",
      "Innovation pour améliorer continuellement l'expérience.":
        "Innovation to continuously improve the experience.",
      "Notre Promesse": "Our Promise",
      "Transformer chaque besoin en opportunité et chaque compétence en solution.":
        "Transform every need into an opportunity and every skill into a solution.",
      "Au service de vos besoins.": "At the service of your needs.",
      "Aide et assistance": "Help and troubleshooting",
    },
  },
  ES: {
    translation: {
      "Bienvenue sur la page": "Bienvenido a la página",
      "Cette section de UpTaskers est actuellement en cours de développement.": "Esta sección de UpTaskers se encuentra actualmente en desarrollo.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Nuestra plataforma evoluciona continuamente para ofrecerle la mejor experiencia. Esté atento a las actualizaciones a medida que construimos este recurso completo.",

      "Légal & Confidentialité": "Legal & Privacy",
      "Politique de Confidentialité": "Privacy Policy",
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le":
        "We are committed to protecting your privacy and ensuring the security of your data on the platform. Last updated on",
      Sommaire: "Summary",
      "Contactez notre équipe responsable de la vie privée :":
        "Contact our privacy team:",
      "Engagement de Confiance": "Commitment to Trust",
      "Votre Sécurité Avant Tout": "Your Security Above All",
      "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.":
        "UpTaskers has been designed to provide you with a safe and trusted environment. No compromise is made with your data and privacy, so you can develop your business and hire experts with peace of mind.",
      "Paiements Sécurisés": "Secure Payments",
      "Identités Vérifiées": "Verified Identities",
      "Confidentialité Protégée": "Privacy Protected",
      "1. Introduction": "1. Introduction",
      "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.":
        "UpTaskers is the leading platform for connecting qualified professionals and clients. This policy explains how we collect, use, and protect your personal information.",
      "2. Nature du Service": "2. Nature of the Service",
      "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.":
        "UpTaskers allows you to find, contact, and work with experts in multiple fields, ensuring secure payments and quality exchanges.",
      "3. Données Collectées": "3. Data Collected",
      "Nous pouvons recueillir les données suivantes :":
        "We may collect the following data:",
      "Informations de base (nom, prénom, adresse e-mail, téléphone)":
        "Basic information (last name, first name, email address, phone number)",
      "Documents d'identité (pour la vérification stricte des professionnels)":
        "Identity documents (for strict verification of professionals)",
      "Préférences utilisateur et paramètres de notification":
        "User preferences and notification settings",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)":
        "Payment data (processed and secured by our approved third-party providers)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme":
        "History of missions, messages, and reviews left on the platform",
      "4. Utilisation des Données": "4. Use of Data",
      "Les données collectées sont utilisées pour :":
        "The data collected is used to:",
      "Faciliter la mise en relation entre clients et prestataires":
        "Facilitate connections between clients and providers",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)":
        "Personalize your experience (refine expert search results)",
      "Garantir le bon déroulement et le suivi des missions":
        "Ensure the smooth running and tracking of missions",
      "Assurer la sécurité des accès et lutter contre la fraude":
        "Ensure access security and fight fraud",
      "5. Sécurité": "5. Security",
      "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :":
        "We take the security of your data very seriously. Measures in place:",
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés":
        "Your personal data is stored on highly secure servers",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)":
        "Financial transactions (payment) are end-to-end encrypted (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers":
        "Secure authentication to protect access to your UpTaskers account",
      "6. Partage des Données": "6. Data Sharing",
      "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :":
        "We never sell your personal data. It may be shared in the following strictly necessary cases:",
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission":
        "Strictly required information is exchanged between the client and the provider upon confirming a mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement":
        "With our payment partners to validate escrow and payout",
      "Afin de se conformer à des obligations légales en vigueur":
        "In order to comply with applicable legal obligations",
      "7. Vos Droits": "7. Your Rights",
      "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :":
        "As a UpTaskers user, you have the following rights (in accordance with Ivorian data protection law):",
      "Accéder à vos données et en demander la copie":
        "Access your data and request a copy",
      "Rectifier ou mettre à jour vos informations inexactes":
        "Rectify or update your inaccurate information",
      "Demander la suppression de votre profil, historique et compte":
        "Request the deletion of your profile, history, and account",
      "Vous opposer à recevoir nos newsletters et alertes de mission":
        "Object to receiving our newsletters and mission alerts",
      "8. Contact": "8. Contact",
      "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :":
        "For any information request or to exercise your rights regarding your data, you can contact us:",
      "Mentions Légales": "Legal Notices",
      Hébergement: "Hosting",
      "Le site est hébergé par Firebase.":
        "The site is hosted by Firebase.",
      "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.":
        "Data is hosted in secure data centers, in compliance with Ivorian data protection law.",
      "Propriété Intellectuelle": "Intellectual Property",
      "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de":
        "The general structure of the site, as well as the texts, animated or non-animated images, and all elements making up the site are the exclusive property of",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.":
        "Any total or partial representation of this site by any means whatsoever, without the express permission of the website operator, is prohibited.",
      Responsabilité: "Responsibility",
      "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.":
        "is a matchmaking platform between clients and service providers. UpTaskers acts solely as a technical intermediary and does not carry out the services offered on the platform. Consequently, UpTaskers cannot be held responsible for the quality, execution, or non-execution of the services provided by the service providers.",

      "Dernière mise à jour : 4 Juin 2026": "Last updated: June 4, 2026",
      "Acceptation des Conditions": "Acceptance of Terms",
      "En accédant ou en utilisant": "By accessing or using",
      "la Plateforme": "the Platform",
      "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.":
        "you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you are not authorized to access the Service.",
      "Description du Service": "Description of the Service",
      "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.":
        "acts as a connection platform between independent service providers and clients looking for professional services. We do not directly provide the services offered by the providers.",
      "Vérification et Avis": "Verification and Reviews",
      "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,":
        "Although we implement an identity verification process for providers and offer an authentic review system,",
      "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.":
        "does not guarantee the specific quality of the work performed by providers. Transactions and agreements are made directly between the client and the provider.",
      "Comptes Utilisateurs": "User Accounts",
      "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.":
        "When you create an account on our platform, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of your account.",
      Résiliation: "Termination",
      "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.":
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use or engage in inappropriate behavior on the platform.",
      Modifications: "Modifications",
      "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.":
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any material changes to these Terms of Use.",

      "Notre mission": "Nuestra Misión",
      Abonnements: "Suscripciones",
      "Rechercher...": "Buscar...",
      Langue: "Idioma",
      "Le professionnel": "El profesional",
      "qu'il vous faut.": "que necesitas.",
      "L'expertise": "Experiencia",
      "digitale.": "digital.",
      "Des artisans": "Artesanos",
      "qualifiés.": "cualificados.",
      Apprenez: "Aprende",
      "sans limite.": "sin límites.",
      "Prenez soin de": "Cuida de",
      "vous.": "ti.",
      "Trouver un prestataire": "Encontrar proveedor",
      "Se connecter": "Iniciar sesión",
      "Connectez-vous avec": "Conéctate con",
      "l'excellence.": "la excelencia.",
      "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.":
        "Nuestra plataforma revoluciona la conexión entre profesionales y clientes. Ya sea que necesites un experto para una misión puntual o estés buscando desarrollar tu clientela, UpTaskers crea un entorno de confianza.",
      Commencer: "Empezar",
      "Une mise en relation rapide et simplifiée.":
        "Una conexión rápida y simplificada.",
      "Des profils vérifiés et des avis authentiques.":
        "Perfiles verificados y opiniones auténticas.",
      "Un espace de collaboration sécurisé pour tous.":
        "Un espacio de colaboración seguro para todos.",
      "Maximisez votre impact": "Maximiza tu impacto",
      "Outils pour réussir": "Herramientas para triunfar",
      "Nous sommes là pour vous aider": "Estamos aquí para ayudarte",
      "S'inscrire": "Registrarse",
      Conçu: "Diseñado",
      "pour exceller.": "para sobresalir.",
      "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.":
        "La vocación de UpTaskers es simple: ahorrarte tiempo ofreciéndote acceso instantáneo a los mejores talentos de tu zona.",
      "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.":
        "Combinamos la eficiencia de una plataforma moderna con la experiencia de profesionales verificados, para que cada servicio prestado sea una experiencia perfectamente fluida.",
      "Réseau Fiable": "Red Confiable",
      "Des talents": "Talentos",
      "certifiés.": "certificados.",
      "Profils vérifiés": "Perfiles verificados",
      "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.":
        "Cada proveedor en UpTaskers pasa por un exhaustivo proceso de verificación de identidad para garantizar tu seguridad.",
      "Avis authentiques": "Opiniones auténticas",
      "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.":
        "Lee comentarios reales. Solo los clientes que han utilizado los servicios pueden dejar una opinión.",
      "Support dédié 24/7": "Soporte dedicado 24/7",
      "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.":
        "Nuestro equipo está disponible para asesorarte y resolver cualquier problema encontrado en la plataforma.",
      "L'expertise dans": "Experiencia en",
      "votre poche.": "tu bolsillo.",
      "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.":
        "Descarga nuestra aplicación móvil gratuita para encontrar un proveedor, gestionar tus solicitudes y comunicarte fácilmente estés donde estés.",
      "Le/La coach sportif(ve)": "El/La entrenador(a) deportivo(a)",
      "L'agent(e) de sécurité": "El/La agente de seguridad",
      "Le/La traducteur(trice)": "El/La traductor(a)",
      "Le/La menuisier(ère)": "El/La carpintero(a)",
      "Le/La décorateur(trice)": "El/La decorador(a)",
      "Le/La mécanicien(ne)": "El/La mecánico(a)",
      "Le/La jardinier(ère)": "El/La jardinero(a)",
      "Le/La cuisinier(ère)": "El/La cocinero(a)",
      "Le/La professionnel(le)": "El/La profesional",
      "L'informaticien(ne)": "El/La informático(a)",
      "L'artisan(e)": "El/La artesano(a)",
      "Le/La photographe": "El/La fotógrafo(a)",
      "Le/La chauffeur(e)": "El/La chófer",
      "Le/La déménageur(euse)": "El/La de mudanzas",
      "Le/La professeur(e)": "El/La profesor(a)",
      "L'agent immobilier": "El/la agente inmobiliario/a",
      "hero.desc.sport":
        "Alcanza tus objetivos físicos con la orientación personalizada de nuestros entrenadores apasionados.",
      "hero.desc.security":
        "Garantiza la seguridad de tus propiedades y eventos con profesionales capacitados y calificados.",
      "hero.desc.translator":
        "Facilita tus intercambios internacionales con nuestros expertos en traducción e interpretación.",
      "hero.desc.carpenter":
        "Artesanos cualificados para todos tus trabajos de carpintería, desde la fabricación hasta la renovación.",
      "hero.desc.decorator":
        "Mejora tu interior con la experiencia de nuestros apasionados decoradores de interiores.",
      "hero.desc.mechanic":
        "Repara y mantén tu vehículo con nuestros expertos en mecánica automotriz.",
      "hero.desc.garden":
        "Transforma y mantén tus espacios verdes con la experiencia de nuestros apasionados jardineros y paisajistas.",
      "hero.desc.cooking":
        "Regálate un momento gastronómico con talentosos chefs, desde la preparación de comidas hasta eventos privados.",
      "hero.desc.services":
        "Encuentra a los mejores expertos para tus tareas diarias, cuidadosamente seleccionados y listos para intervenir rápidamente.",
      "hero.desc.tech":
        "Talentosos desarrolladores, diseñadores y especialistas en marketing para impulsar tus proyectos digitales a nuevas alturas.",
      "hero.desc.repair":
        "Experiencia reconocida para todas tus renovaciones y reparaciones, con profesionales de confianza a tu lado.",
      "hero.desc.photo":
        "Captura tus eventos preciosos con la experiencia de nuestros fotógrafos profesionales listos para sublimar cada momento.",
      "hero.desc.transport":
        "Muévete fácilmente y con seguridad con nuestros conductores profesionales cualificados.",
      "hero.desc.moving":
        "Múdate con tranquilidad con nuestros expertos en transporte, eficientes y cuidadosos.",
      "hero.desc.education":
        "Desarrolla nuevas habilidades con profesores apasionados, en línea o en casa, según tus necesidades.",
      "hero.desc.realestate":
        "Encuentra al experto inmobiliario ideal para acompañarte en todos tus proyectos de compra, venta o alquiler.",
      Éducation: "Educación",
      Artisanat: "Artesanía",
      Informatique: "Informática",
      Réparation: "Reparación",
      Beauté: "Belleza",
      Transport: "Transporte",
      "Bien-être": "Bienestar",
      Événementiel: "Eventos",
      Déménagement: "Mudanza",
      Nettoyage: "Limpieza",
      Bricolage: "Bricolaje",
      Photographie: "Fotografía",
      Architecture: "Arquitectura",
      Jardinage: "Jardinería",
      Menuiserie: "Carpintería",
      Décoration: "Decoración",
      Mécanique: "Mecánica",
      "Soutien scolaire": "Apoyo escolar",
      Rédaction: "Redacción",
      Vidéo: "Vídeo",
      Sécurité: "Seguridad",
      Plomberie: "Fontanería",
      Électricité: "Electricidad",
      Design: "Diseño",
      Marketing: "Marketing",
      Traduction: "Traducción",
      Coaching: "Coaching",
      "Garde d'enfants": "Cuidado de niños",
      Musique: "Música",
      Comptabilité: "Contabilidad",
      Droit: "Derecho",
      Cuisine: "Cocina",
      Sport: "Deporte",
      Coiffure: "Peluquería",
      "Garde d'animaux": "Cuidado de mascotas",
      Massage: "Masaje",
      "Personal Shopper": "Personal Shopper",
      "Organisation d'événements": "Organización de eventos",
      Maquillage: "Maquillaje",
      Esthétique: "Estética",
      "Aide à domicile": "Ayuda a domicilio",
      Serrurerie: "Cerrajería",
      Peinture: "Pintura",
      Vétérinaire: "Veterinaria",
      "Agent immobilier": "Agente inmobiliario",
      "Journal UpTaskers": "Periódico UpTaskers",
      "Guides, astuces et conseils pour clients et professionnels":
        "Guías, trucos y consejos para clientes y profesionales",
      "Lire la suite": "Leer más",
      "Les catégories les plus utilisées dans le mois":
        "Categorías más utilizadas del mes",
      "Les services qui génèrent le plus d'opportunités ce mois-ci.":
        "Los servicios que generan más oportunidades este mes.",
      "Découvrir nos services": "Descubra nuestros servicios",
      "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.":
        "Descubre las tendencias actuales y los dominios más solicitados por nuestros clientes para optimizar tu perfil y aprovechar nuevas oportunidades.",
      "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.":
        "UpTaskers facilita el encuentro entre clientes y profesionales cualificados para colaboraciones sencillas, rápidas y eficaces.",
      "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.":
        "Ya sea que seas una empresa que busca una experiencia específica o un particular que necesita ayuda, nuestra plataforma te conecta con los mejores talentos locales.",
      "Avis des utilisateurs et statistiques":
        "Opiniones de usuarios y estadísticas",
      "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.":
        "Descubre lo que nuestra comunidad piensa de UpTaskers y únete a nuestros miles de usuarios activos.",
      "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.":
        "Con más de 10.000 usuarios y 5.000 profesionales inscritos, UpTaskers se enorgullece de mantener una tasa de satisfacción del 98% en más de 25.000 misiones realizadas.",
      "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.":
        "Cada freelance es seleccionado con extrema precisión, garantizando la máxima experiencia y una perfecta integración en tus equipos.",
      "Objectif 2030": "Objetivo 2030",
      "Devenir le leader mondial de la mise en relation de services.":
        "Convertirse en el líder mundial en la conexión de servicios.",
      "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.":
        "Nuestra visión es construir una infraestructura global para conectar cada talento con una oportunidad, estimulando la innovación, la fiabilidad financiera y la independencia de millones de proveedores a nivel internacional.",
      "Notre QG": "Nuestra sede",
      "Côte d'Ivoire": "Costa de Marfil",
      PLATEFORME: "PLATAFORMA",
      CONFIANCE: "CONFIANZA",
      ENTREPRISE: "EMPRESA",
      LÉGAL: "LEGAL",
      Accueil: "Inicio",
      "Explorez nos catégories": "Explora nuestras categorías",
      Avantages: "Beneficios",
      Ressources: "Recursos",
      "Avis clients": "Opiniones de clientes",
      "Vérification des profils": "Verificación de perfiles",
      "Garantie UpTaskers": "Garantía UpTaskers",
      "À propos de UpTaskers": "Acerca de UpTaskers",
      "Nous contacter": "Contáctenos",
      "Support client": "Soporte al cliente",
      "Conditions d'utilisation": "Términos de uso",
      "Politique de confidentialité": "Política de privacidad",
      "Mentions légales": "Avisos legales",
      "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.":
        "es la plataforma de referencia para encontrar proveedores de servicios verificados y calificados.",
      "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.":
        "La confianza de nuestros usuarios es nuestra prioridad. Todos los profesionales de nuestra red son evaluados y su información está documentada para su seguridad.",
      "100% de profils vérifiés": "Perfiles 100% verificados",
      "Applications Mobiles": "Aplicaciones Móviles",
      "Suivez-nous": "Síganos",
      "Tous droits réservés.": "Todos los derechos reservados.",
      "12 Avril 2026": "12 de abril de 2026",
      "8 Mars 2026": "8 de marzo de 2026",
      "20 Mai 2026": "20 de mayo de 2026",
      "Contactez-nous": "Contáctenos",
      "Nous sommes là pour": "Estamos aquí para",
      "vous aider.": "ayudarte.",
      "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.":
        "¿Una pregunta, necesitas asistencia o simplemente quieres darnos tu opinión? Nuestro equipo está a tu disposición.",
      "Informations de contact": "Información de contacto",
      Email: "Correo",
      "Pour toute demande générale": "Para cualquier consulta general",
      Téléphone: "Teléfono",
      "Du lundi au vendredi, de 9h à 18h": "Lunes a viernes de 9h a 18h",
      Adresse: "Dirección",
      Plateau: "Plateau",
      "Abidjan, Côte d'Ivoire": "Abiyán, Costa de Marfil",
      "Téléchargez notre application": "Descarga nuestra app",
      "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.":
        "Lleva UpTaskers a todas partes contigo. Gestiona tus proyectos de forma eficaz, intercambia fácilmente con profesionales y sigue el progreso de tus peticiones desde tu móvil.",
      "Centre de ressources": "Centro de recursos",
      "Outils et guides pour": "Herramientas y guías para",
      "réussir.": "tener éxito.",
      "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.":
        "Contenido exclusivo creado por nuestros expertos para acompañar sus proyectos, ya sea un cliente exigente o un profesional ambicioso.",
      "Espace Clients": "Área de Clientes",
      "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.":
        "Haga realidad sus ideas con total tranquilidad. Nuestras guías le ayudan a tomar las mejores decisiones en cada etapa de su proyecto.",
      "Comment bien définir votre projet ?": "¿Cómo definir bien su proyecto?",
      "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.":
        "Aprenda a redactar un pliego de condiciones claro para obtener los mejores presupuestos.",
      "Choisir le prestataire idéal": "Elegir al proveedor ideal",
      "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.":
        "Los criterios esenciales para seleccionar al profesional adaptado a sus necesidades.",
      "Guide des tarifs 2024": "Guía de precios 2024",
      "Découvrez les prix moyens du marché pour budgétiser vos travaux.":
        "Descubra los precios medios del mercado para presupuestar sus obras.",
      "Espace Prestataires": "Área de Proveedores",
      "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.":
        "Impulse su actividad y optimice su gestión. Descubra nuestras mejores prácticas para destacar en la plataforma.",
      "Optimiser votre vitrine": "Optimizar su escaparate",
      "Conseils pratiques pour rendre votre profil plus attractif pour les clients.":
        "Consejos prácticos para hacer que tu perfil sea más atractivo para los clientes.",
      "Réussir son premier contact": "Tener éxito en su primer contacto",
      "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.":
        "Cómo responder eficazmente a las solicitudes para maximizar sus posibilidades de firmar.",
      "Obtenir plus d'avis positifs": "Obtener más críticas positivas",
      "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.":
        "Las mejores estrategias para fidelizar clientes y desarrollar su reputación electrónica.",
      "Formations Vidéo": "Entrenamientos en video",
      "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.":
        "Aprenda a dominar todas las características de UpTaskers en minutos con nuestros tutoriales interactivos.",
      "Voir les tutoriels": "Ver tutoriales",
      "Formation vidéo": "Formación en video",
      "À propos de nous": "Sobre nosotros",
      "Découvrez UpTaskers": "Descubre UpTaskers",
      "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.":
        "Bienvenido a UpTaskers, una plataforma dedicada a conectar a particulares, empresas y profesionales cualificados.",
      "Qui sommes-nous ?": "¿Quienes somos?",
      "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.":
        "Nuestra misión es sencilla: permitir que todos encuentren rápidamente proveedores competentes y de confianza que satisfagan sus necesidades, al tiempo que ofrecemos a los profesionales la oportunidad de desarrollar su negocio y ganar visibilidad.",
      "Notre Vision": "Nuestra Visión",
      "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.":
        "Creemos que toda habilidad merece ser valorada y que toda necesidad merece una solución adaptada.",
      "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.":
        "Nuestra ambición es crear un ecosistema donde los clientes y los proveedores puedan colaborar fácilmente, con confianza y en un entorno seguro.",
      "Ce que nous proposons": "Lo que ofrecemos",
      "Pour les utilisateurs :": "Para usuarios:",
      "Rechercher des professionnels qualifiés.":
        "Buscar profesionales cualificados.",
      "Publier leurs besoins et recevoir des propositions.":
        "Publicar sus necesidades y recibir propuestas.",
      "Comparer les profils, expériences et avis.":
        "Compara perfiles, experiencias y reseñas.",
      "Contacter directement les prestataires.":
        "Contactar directamente con los proveedores.",
      "Trouver rapidement des solutions adaptées à leurs projets.":
        "Encontrar rápidamente soluciones adaptadas a sus proyectos.",
      "Pour les professionnels :": "Para los profesionales:",
      "Créer un profil détaillé.": "Crear un perfil detallado.",
      "Présenter leurs compétences et réalisations.":
        "Presentar sus habilidades y logros.",
      "Développer leur clientèle.": "Desarrollar su clientela.",
      "Recevoir des demandes de services.": "Recibir solicitudes de servicio.",
      "Valoriser leur expertise auprès d'un large public.":
        "Mostrar su experiencia ante una gran audiencia.",
      "Nos Valeurs": "Nuestros Valores",
      "Qualité :": "Calidad:",
      "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.":
        "Fomentamos la excelencia en cada servicio prestado en nuestra plataforma.",
      "Compétence :": "Competencia:",
      "Nous mettons en avant les talents et le savoir-faire des professionnels.":
        "Destacamos el talento y los conocimientos de los profesionales.",
      "Professionnalisme :": "Profesionalismo:",
      "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.":
        "Promovemos relaciones serias, respetuosas y transparentes entre todos los usuarios.",
      "Confiance :": "Confianza:",
      "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.":
        "Trabajamos continuamente para ofrecer un entorno seguro y confiable.",
      "Pourquoi nous choisir ?": "¿Por qué elegirnos?",
      "Une plateforme simple et intuitive.":
        "Una plataforma sencilla e intuitiva.",
      "Des professionnels qualifiés.": "Profesionales capacitados.",
      "Une mise en relation rapide.": "Mesa de relación rápida.",
      "Un accompagnement orienté vers la satisfaction des utilisateurs.":
        "Un acompañamiento orientado a la satisfacción del usuario.",
      "Un engagement constant en faveur de la qualité des services.":
        "Un compromiso constante con la calidad del servicio.",
      "Notre engagement": "Nuestro compromiso",
      "Au service de vos besoins": "Al servicio de tus necesidades",
      "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.":
        "Nos comprometemos a mejorar continuamente nuestra plataforma para ofrecer la mejor experiencia posible a nuestros usuarios. Tanto si busca un profesional como si desea ofrecer sus servicios, estamos aquí para acompañarle en la realización de sus proyectos.",
      "Qualité • Compétence • Professionnalisme":
        "Calidad • Competencia • Profesionalismo",
      "Retour à l'accueil": "Volver al inicio",
      "Toutes nos catégories": "Todas nuestras categorías",
      "Explorez nos": "Explora nuestras",
      catégories: "categorías",
      "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.":
        "Descubra la diversidad de nuestros profesionales y encuentre al experto ideal para su proyecto entre nuestras numerosas categorías.",
      "Rechercher une catégorie...": "Buscar una categoría...",
      "Aucune catégorie trouvée pour": "No se encontró ninguna categoría para",
      "Avantages Exclusifs": "Beneficios Exclusivos",
      "Maximisez votre ": "Maximiza tu ",
      "impact.": "impacto.",
      "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.":
        "Tanto si eres un profesional que busca desarrollar su clientela como si eres un particular que busca expertos de confianza, UpTaskers te ofrece las mejores herramientas para triunfar.",
      "Développez votre activité": "Desarrolla tu negocio",
      "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.":
        "Acceda a una amplia base de clientes cualificados y aumente su facturación sin esfuerzo de prospección.",
      "Paiements sécurisés": "Pagos seguros",
      "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.":
        "Disfrute de un sistema de pago 100% seguro. Tenga la seguridad de recibir el pago rápidamente y con total tranquilidad.",
      "Gestion simplifiée": "Gestión simplificada",
      "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.":
        "Gestione sus citas, sus presupuestos y sus facturas directamente desde su panel de control intuitivo.",
      "Communauté de confiance": "Comunidad de confianza",
      "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.":
        "Únase a una comunidad de profesionales verificados donde la calidad y el respeto son las palabras clave.",
      "Visibilité accrue": "Mayor visibilidad",
      "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.":
        "Aproveche nuestra experiencia en marketing digital para aparecer en la parte superior de los resultados de búsqueda locales.",
      "Réputation valorisée": "Reputación valorada",
      "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.":
        "Recopile reseñas auténticas que refuercen su credibilidad y atraigan naturalmente a nuevos clientes.",
      "Prêt à libérer votre potentiel ?": "¿Listo para liberar tu potencial?",
      "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.":
        "Únase a la plataforma que transforma la forma en que colaboran los profesionales y los clientes.",
      "Rejoindre UpTaskers maintenant": "Únete a UpTaskers ahora",
      "Tendances du mois": "Tendencias del mes",
      "Les catégories les plus utilisées": "Categorías más utilizadas",
      "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.":
        "Descubre los servicios más populares este mes y encuentra al experto ideal.",
      "Très demandé": "Muy demandado",
      "Voir toutes les catégories": "Ver todas las categorías",
      "Des experts vérifiés": "Expertos verificados",
      "Des talents pour chaque besoin": "Talentos para cada necesidad",
      "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.":
        "Explora los perfiles de nuestros mejores profesionales y encuentra al experto ideal.",
      "Designer UX/UI": "Diseñador UX/UI",
      "Développeur Full-Stack": "Desarrollador Full-Stack",
      "Rédactrice Web App": "Redactora de Web App",
      "Artisan Plombier": "Fontanero",
      "Assistante Virtuelle": "Asistente Virtual",
      "Technicien IT": "Técnico de TI",
      avis: "opiniones",
      "Voir le profil": "Ver perfil",
      "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.":
        "¡Ya más de 10,000 clientes y 5,000 profesionales han dado el paso! Con 25,000 misiones exitosas y un 98 % de satisfacción, UpTaskers es la referencia esencial de su vida diaria.",
      "Découvrez nos services": "Descubre nuestros servicios",
      "Note moyenne basée sur": "Puntuación media basada en",
      "+12,000 avis certifiés": "+12.000 opiniones certificadas",
      "Utilisateurs/mois": "Usuarios/mes",
      Satisfaction: "Satisfacción",
      "Rép. moyenne": "Rta. media",
      Missions: "Misiones",
      Maçonnerie: "Albañilería",
      Carrelage: "Alicatado",
      "Montage vidéo": "Edición de video",
      Programmation: "Programación",
      "Retour aux catégories": "Back to categories",
      "Experts en": "Experts in",
      "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :":
        "Find the best highly qualified and certified professionals to meet your most specific requirements in:",
      "Confiez-nous vos projets pour une réalisation d'excellence.":
        "Entrust us with your projects for an excellent execution.",
      "Qualité Supérieure": "Superior Quality",
      "L'élite des": "The elite of",
      "professionnels.": "professionals.",
      "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.":
        "We rigorously evaluate and select the best profiles on the market to ensure the success and excellence of your projects.",
      "Espace client": "Client Area",
      "Espace prestataire": "Provider Area",
      "Connectez-vous ou inscrivez-vous": "Log in or sign up",
      "Continuer avec Google": "Continue with Google",
      "Continuer avec Apple": "Continue with Apple",
      "Continuer avec un numéro de téléphone": "Continue with a phone number",
      "Adresse e-mail": "Email address",
      Continuer: "Continue",
      "Rejoignez la confiance.": "Join the trust.",
      "Sécurité garantie": "Guaranteed security",
      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.":
        "Secure payments, verified profiles, and responsive 7/7 customer support.",
      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.":
        "A transparent community where every review is based on a real service.",
      "Créer un compte": "Create an account",
      "Sélectionnez votre type de profil pour commencer":
        "Select your profile type to start",
      "Je cherche un professionnel": "I am looking for a professional",
      "Je propose mes services": "I offer my services",
      "Nom complet": "Full name",
      "Adresse email": "Email address",
      "Mot de passe": "Password",
      "J'accepte les": "I accept the",
      "et la": "and the",
      Support: "Soporte",
      "Download on the": "Download on the",
      "Disponible sur": "Available on",
      "Du lundi au dimanche": "De lunes a domingo",
      "Du lundi au dimanche, 24h/24": "De lunes a domingo, 24/7",
      "Le/La maçon(ne)": "The mason",
      "hero.desc.masonry":
        "Qualified craftsmen for all your construction, facade and landscaping work.",
      "Le/La coiffeur(euse)": "The hairdresser",
      "hero.desc.hairdress":
        "Call on our hairdressing experts for a custom cut, color or styling.",
      "L'organisateur(trice)": "The event organizer",
      "hero.desc.eventorg":
        "Entrust the planning of your weddings, parties and corporate events to our passionate experts.",
      "L'avocat(e) / juriste": "The lawyer / jurist",
      "hero.desc.law":
        "Secure your processes with our selection of competent lawyers and legal professionals.",
      "Découvrez notre objectif": "Descubre nuestro objetivo",
      Notre: "Nuestra",
      Mission: "Misión",
      "Connecter les besoins aux meilleures compétences":
        "Conectando necesidades a las mejores habilidades",
      "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.":
        "Nuestra misión es facilitar el encuentro entre personas que buscan servicios de calidad y profesionales competentes capaces de responder a ellas.",
      "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.":
        "En un mundo donde a veces es difícil encontrar el proveedor adecuado o dar a conocer sus talentos, nuestra plataforma crea un puente simple, rápido y confiable entre clientes y profesionales.",
      "Pourquoi existons-nous ?": "¿Por qué existimos?",
      "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :":
        "Todos los días, miles de personas buscan soluciones a sus necesidades:",
      "Trouver un répétiteur pour accompagner un enfant.":
        "Encontrar un tutor para un niño.",
      "Faire appel à un menuisier pour fabriquer un meuble.":
        "Llamar a un carpintero para hacer un mueble.",
      "Recruter un développeur pour créer un site web.":
        "Reclutar a un desarrollador para crear un sitio web.",
      "Trouver un électricien, un plombier ou un artisan qualifié.":
        "Encontrar a un electricista, un fontanero o un artesano calificado.",
      "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.":
        "Obtener ayuda de un profesional de confianza para un proyecto personal o profesional.",
      "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.":
        "Nuestra plataforma fue creada para hacer estas búsquedas más simples, más rápidas y más efectivas.",
      "Ce que nous apportons": "Lo que aportamos",
      "Pour les clients": "Para los clientes",
      "Nous permettons aux utilisateurs de :": "Permitimos a los usuarios:",
      "Trouver facilement des professionnels qualifiés.":
        "Encontrar fácilmente profesionales calificados.",
      "Comparer plusieurs prestataires.": "Comparar varios proveedores.",
      "Consulter les profils et les expériences.":
        "Consultar perfiles y experiencias.",
      "Gagner du temps dans leurs recherches.":
        "Ahorrar tiempo en su investigación.",
      "Réaliser leurs projets en toute confiance.":
        "Realizar sus proyectos con confianza.",
      "Pour les professionnels": "Para los profesionales",
      "Nous aidons les prestataires à :": "Ayudamos a los proveedores a:",
      "Mettre en valeur leurs compétences.": "Destacar sus habilidades.",
      "Développer leur visibilité.": "Desarrollar su visibilidad.",
      "Trouver de nouveaux clients.": "Encontrar nuevos clientes.",
      "Développer leur activité.": "Desarrollar su negocio.",
      "Construire leur réputation professionnelle.":
        "Construir su reputación profesional.",
      "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.":
        "Queremos construir una comunidad donde el talento, el conocimiento y el profesionalismo sean reconocidos y accesibles a todos.",
      "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.":
        "Creemos que al conectar las habilidades adecuadas a las necesidades adecuadas, ayudamos a crear más oportunidades, confianza y éxito para todos.",
      "Nos engagements": "Nuestros compromisos",
      "Qualité dans les services proposés.":
        "Calidad en los servicios ofrecidos.",
      "Compétence des professionnels présents sur la plateforme.":
        "Competencia de los profesionales presentes en la plataforma.",
      "Professionnalisme dans chaque interaction.":
        "Profesionalismo en cada interacción.",
      "Transparence et confiance entre les utilisateurs.":
        "Transparencia y confianza entre usuarios.",
      "Innovation pour améliorer continuellement l'expérience.":
        "Innovación para mejorar continuamente la experiencia.",
      "Notre Promesse": "Nuestra Promesa",
      "Transformer chaque besoin en opportunité et chaque compétence en solution.":
        "Transformar cada necesidad en una oportunidad y cada habilidad en una solución.",
      "Au service de vos besoins.": "Al servicio de sus necesidades.",
      "Aide et assistance": "Ayuda y asistencia",
    },
  },
  DE: {
    translation: {
      "Bienvenue sur la page": "Willkommen auf der Seite",
      "Cette section de UpTaskers est actuellement en cours de développement.": "Dieser Bereich von UpTaskers befindet sich derzeit in der Entwicklung.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Unsere Plattform entwickelt sich ständig weiter, um Ihnen das beste Erlebnis zu bieten. Bleiben Sie dran für Updates, während wir diese umfassende Ressource ausbauen.",

      "Légal & Confidentialité": "Legal & Privacy",
      "Politique de Confidentialité": "Privacy Policy",
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le":
        "We are committed to protecting your privacy and ensuring the security of your data on the platform. Last updated on",
      Sommaire: "Summary",
      "Contactez notre équipe responsable de la vie privée :":
        "Contact our privacy team:",
      "Engagement de Confiance": "Commitment to Trust",
      "Votre Sécurité Avant Tout": "Your Security Above All",
      "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.":
        "UpTaskers has been designed to provide you with a safe and trusted environment. No compromise is made with your data and privacy, so you can develop your business and hire experts with peace of mind.",
      "Paiements Sécurisés": "Secure Payments",
      "Identités Vérifiées": "Verified Identities",
      "Confidentialité Protégée": "Privacy Protected",
      "1. Introduction": "1. Introduction",
      "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.":
        "UpTaskers is the leading platform for connecting qualified professionals and clients. This policy explains how we collect, use, and protect your personal information.",
      "2. Nature du Service": "2. Nature of the Service",
      "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.":
        "UpTaskers allows you to find, contact, and work with experts in multiple fields, ensuring secure payments and quality exchanges.",
      "3. Données Collectées": "3. Data Collected",
      "Nous pouvons recueillir les données suivantes :":
        "We may collect the following data:",
      "Informations de base (nom, prénom, adresse e-mail, téléphone)":
        "Basic information (last name, first name, email address, phone number)",
      "Documents d'identité (pour la vérification stricte des professionnels)":
        "Identity documents (for strict verification of professionals)",
      "Préférences utilisateur et paramètres de notification":
        "User preferences and notification settings",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)":
        "Payment data (processed and secured by our approved third-party providers)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme":
        "History of missions, messages, and reviews left on the platform",
      "4. Utilisation des Données": "4. Use of Data",
      "Les données collectées sont utilisées pour :":
        "The data collected is used to:",
      "Faciliter la mise en relation entre clients et prestataires":
        "Facilitate connections between clients and providers",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)":
        "Personalize your experience (refine expert search results)",
      "Garantir le bon déroulement et le suivi des missions":
        "Ensure the smooth running and tracking of missions",
      "Assurer la sécurité des accès et lutter contre la fraude":
        "Ensure access security and fight fraud",
      "5. Sécurité": "5. Security",
      "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :":
        "We take the security of your data very seriously. Measures in place:",
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés":
        "Your personal data is stored on highly secure servers",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)":
        "Financial transactions (payment) are end-to-end encrypted (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers":
        "Secure authentication to protect access to your UpTaskers account",
      "6. Partage des Données": "6. Data Sharing",
      "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :":
        "We never sell your personal data. It may be shared in the following strictly necessary cases:",
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission":
        "Strictly required information is exchanged between the client and the provider upon confirming a mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement":
        "With our payment partners to validate escrow and payout",
      "Afin de se conformer à des obligations légales en vigueur":
        "In order to comply with applicable legal obligations",
      "7. Vos Droits": "7. Your Rights",
      "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :":
        "As a UpTaskers user, you have the following rights (in accordance with Ivorian data protection law):",
      "Accéder à vos données et en demander la copie":
        "Access your data and request a copy",
      "Rectifier ou mettre à jour vos informations inexactes":
        "Rectify or update your inaccurate information",
      "Demander la suppression de votre profil, historique et compte":
        "Request the deletion of your profile, history, and account",
      "Vous opposer à recevoir nos newsletters et alertes de mission":
        "Object to receiving our newsletters and mission alerts",
      "8. Contact": "8. Contact",
      "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :":
        "For any information request or to exercise your rights regarding your data, you can contact us:",
      "Mentions Légales": "Legal Notices",
      Hébergement: "Hosting",
      "Le site est hébergé par Firebase.":
        "The site is hosted by Firebase.",
      "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.":
        "Data is hosted in secure data centers, in compliance with Ivorian data protection law.",
      "Propriété Intellectuelle": "Intellectual Property",
      "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de":
        "The general structure of the site, as well as the texts, animated or non-animated images, and all elements making up the site are the exclusive property of",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.":
        "Any total or partial representation of this site by any means whatsoever, without the express permission of the website operator, is prohibited.",
      Responsabilité: "Responsibility",
      "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.":
        "is a matchmaking platform between clients and service providers. UpTaskers acts solely as a technical intermediary and does not carry out the services offered on the platform. Consequently, UpTaskers cannot be held responsible for the quality, execution, or non-execution of the services provided by the service providers.",

      "Dernière mise à jour : 4 Juin 2026": "Last updated: June 4, 2026",
      "Acceptation des Conditions": "Acceptance of Terms",
      "En accédant ou en utilisant": "By accessing or using",
      "la Plateforme": "the Platform",
      "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.":
        "you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you are not authorized to access the Service.",
      "Description du Service": "Description of the Service",
      "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.":
        "acts as a connection platform between independent service providers and clients looking for professional services. We do not directly provide the services offered by the providers.",
      "Vérification et Avis": "Verification and Reviews",
      "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,":
        "Although we implement an identity verification process for providers and offer an authentic review system,",
      "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.":
        "does not guarantee the specific quality of the work performed by providers. Transactions and agreements are made directly between the client and the provider.",
      "Comptes Utilisateurs": "User Accounts",
      "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.":
        "When you create an account on our platform, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of your account.",
      Résiliation: "Termination",
      "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.":
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use or engage in inappropriate behavior on the platform.",
      Modifications: "Modifications",
      "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.":
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any material changes to these Terms of Use.",

      "Notre mission": "Unsere Mission",
      Abonnements: "Abonnements",
      "Rechercher...": "Suchen...",
      Langue: "Sprache",
      "Le professionnel": "Der Fachmann,",
      "qu'il vous faut.": "den Sie brauchen.",
      "L'expertise": "Digitale",
      "digitale.": "Expertise.",
      "Des artisans": "Qualifizierte",
      "qualifiés.": "Handwerker.",
      Apprenez: "Lernen Sie",
      "sans limite.": "ohne Grenzen.",
      "Prenez soin de": "Kümmern Sie sich um",
      "vous.": "sich selbst.",
      "Trouver un prestataire": "Anbieter finden",
      "Se connecter": "Anmelden",
      "Connectez-vous avec": "Verbinden Sie sich mit",
      "l'excellence.": "Exzellenz.",
      "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.":
        "Unsere Plattform revolutioniert die Verbindung zwischen Profis und Kunden. Ob Sie einen Experten für einen einmaligen Einsatz brauchen oder Ihren Kundenstamm ausbauen möchten, UpTaskers schafft ein Umfeld des Vertrauens.",
      Commencer: "Loslegen",
      "Une mise en relation rapide et simplifiée.":
        "Eine schnelle und vereinfachte Verbindung.",
      "Des profils vérifiés et des avis authentiques.":
        "Verifizierte Profile und echte Bewertungen.",
      "Un espace de collaboration sécurisé pour tous.":
        "Ein sicherer Zusammenarbeitsraum für alle.",
      "Maximisez votre impact": "Maximieren Sie Ihre Wirkung",
      "Outils pour réussir": "Werkzeuge für den Erfolg",
      "Nous sommes là pour vous aider": "Wir sind hier, um Ihnen zu helfen",
      "S'inscrire": "Anmelden",
      Conçu: "Entwickelt",
      "pour exceller.": "für Exzellenz.",
      "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.":
        "Die Berufung von UpTaskers ist einfach: Ihnen Zeit zu sparen, indem wir Ihnen sofortigen Zugang zu den besten Talenten in Ihrer Region bieten.",
      "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.":
        "Wir kombinieren die Effizienz einer modernen Plattform mit der Expertise verifizierter Fachleute, damit jede erbrachte Dienstleistung ein perfekt reibungsloses Erlebnis ist.",
      "Réseau Fiable": "Zuverlässiges Netzwerk",
      "Des talents": "Zertifizierte",
      "certifiés.": "Talente.",
      "Profils vérifiés": "Verifizierte Profile",
      "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.":
        "Jeder Anbieter auf UpTaskers durchläuft einen gründlichen Identitätsprüfungsprozess, um Ihre Sicherheit zu gewährleisten.",
      "Avis authentiques": "Echte Bewertungen",
      "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.":
        "Lesen Sie echtes Feedback. Nur Kunden, die die Dienste genutzt haben, können eine Bewertung abgeben.",
      "Support dédié 24/7": "Engagierter 24/7 Support",
      "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.":
        "Unser Team steht Ihnen zur Verfügung, um Sie zu begleiten und jedes auf der Plattform auftretende Problem zu lösen.",
      "L'expertise dans": "Expertise in",
      "votre poche.": "Ihrer Tasche.",
      "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.":
        "Laden Sie unsere kostenlose mobile App herunter, um einen Anbieter zu finden, Ihre Anfragen zu verwalten und überall einfach zu kommunizieren.",
      "Le/La coach sportif(ve)": "Der/Die Sporttrainer/in",
      "L'agent(e) de sécurité": "Der/Die Sicherheitsmitarbeiter/in",
      "Le/La traducteur(trice)": "Der/Die Übersetzer/in",
      "Le/La menuisier(ère)": "Der/Die Schreiner/in",
      "Le/La décorateur(trice)": "Der/Die Dekorateur/in",
      "Le/La mécanicien(ne)": "Der/Die Mechaniker/in",
      "Le/La jardinier(ère)": "Der/Die Gärtner/in",
      "Le/La cuisinier(ère)": "Der/Die Koch/Köchin",
      "Le/La professionnel(le)": "Der/Die Profi",
      "L'informaticien(ne)": "Der/Die Informatiker/in",
      "L'artisan(e)": "Der/Die Handwerker/in",
      "Le/La photographe": "Der/Die Fotograf/in",
      "Le/La chauffeur(e)": "Der/Die Fahrer/in",
      "Le/La déménageur(euse)": "Möbelpacker",
      "Le/La professeur(e)": "Der/Die Lehrer/in",
      "L'agent immobilier": "Der Immobilienmakler",
      "hero.desc.sport":
        "Erreichen Sie Ihre körperlichen Ziele mit persönlicher Anleitung durch unsere leidenschaftlichen Trainer.",
      "hero.desc.security":
        "Sorgen Sie mit geschulten und qualifizierten Fachleuten für die Sicherheit Ihres Eigentums und Ihrer Veranstaltungen.",
      "hero.desc.translator":
        "Erleichtern Sie Ihre internationalen Austausche mit unseren Übersetzungs- und Dolmetscherexperten.",
      "hero.desc.carpenter":
        "Qualifizierte Handwerker für all Ihre Tischlerarbeiten, von der Herstellung bis zur Renovierung.",
      "hero.desc.decorator":
        "Werten Sie Ihr Interieur mit der Expertise unserer leidenschaftlichen Innenarchitekten auf.",
      "hero.desc.mechanic":
        "Reparieren und warten Sie Ihr Fahrzeug mit unseren Kfz-Mechaniker-Experten.",
      "hero.desc.garden":
        "Verwandeln und pflegen Sie Ihre Grünflächen mit der Expertise unserer leidenschaftlichen Gärtner und Landschaftsgestalter.",
      "hero.desc.cooking":
        "Gönnen Sie sich einen gastronomischen Moment mit talentierten Köchen, von der Zubereitung von Mahlzeiten bis hin zu privaten Veranstaltungen.",
      "hero.desc.services":
        "Finden Sie die besten Experten für Ihre täglichen Aufgaben, sorgfältig ausgewählt und bereit für ein schnelles Eingreifen.",
      "hero.desc.tech":
        "Talentierte Entwickler, Designer und Vermarkter, um Ihre digitalen Projekte auf ein neues Niveau zu heben.",
      "hero.desc.repair":
        "Anerkannte Fachkenntnisse für alle Ihre Renovierungen und Reparaturen, mit vertrauenswürdigen Fachleuten an Ihrer Seite.",
      "hero.desc.photo":
        "Halten Sie Ihre wertvollen Ereignisse mit der Expertise unserer professionellen Fotografen fest, die jeden Moment veredeln.",
      "hero.desc.transport":
        "Bewegen Sie sich einfach und sicher mit unseren qualifizierten professionellen Fahrern.",
      "hero.desc.moving":
        "Ziehen Sie mit unseren Transportexperten beruhigt, effizient und sorgfältig um.",
      "hero.desc.education":
        "Entwickeln Sie neue Fähigkeiten mit leidenschaftlichen Lehrern, online oder zu Hause, je nach Ihren Bedürfnissen.",
      "hero.desc.realestate":
        "Finden Sie den idealen Immobilienexperten, der Sie bei all Ihren Kauf-, Verkaufs- oder Mietprojekten unterstützt.",
      Éducation: "Bildung",
      Artisanat: "Handwerk",
      Informatique: "IT",
      Réparation: "Reparatur",
      Beauté: "Schönheit",
      Transport: "Transport",
      "Bien-être": "Wellness",
      Événementiel: "Veranstaltungen",
      Déménagement: "Umzug",
      Nettoyage: "Reinigung",
      Bricolage: "Heimwerken",
      Photographie: "Fotografie",
      Architecture: "Architektur",
      Jardinage: "Gartenarbeit",
      Menuiserie: "Zimmerei",
      Décoration: "Dekoration",
      Mécanique: "Mechanik",
      "Soutien scolaire": "Nachhilfe",
      Rédaction: "Schreiben",
      Vidéo: "Video",
      Sécurité: "Sicherheit",
      Plomberie: "Klempnerei",
      Électricité: "Elektrik",
      Design: "Design",
      Marketing: "Marketing",
      Traduction: "Übersetzung",
      Coaching: "Coaching",
      "Garde d'enfants": "Kinderbetreuung",
      Musique: "Musik",
      Comptabilité: "Buchhaltung",
      Droit: "Recht",
      Cuisine: "Kochen",
      Sport: "Sport",
      Coiffure: "Friseur",
      "Garde d'animaux": "Tierbetreuung",
      Massage: "Massage",
      "Personal Shopper": "Personal Shopper",
      "Organisation d'événements": "Veranstaltungsplanung",
      Maquillage: "Make-up",
      Esthétique: "Ästhetik",
      "Aide à domicile": "Haushaltshilfe",
      Serrurerie: "Schlosserei",
      Peinture: "Malerei",
      Vétérinaire: "Tierarzt",
      "Agent immobilier": "Immobilienmakler",
      "Journal UpTaskers": "UpTaskers Journal",
      "Guides, astuces et conseils pour clients et professionnels":
        "Leitfäden, Tipps und Ratschläge für Kunden und Fachleute",
      "Lire la suite": "Weiterlesen",
      "Les catégories les plus utilisées dans le mois":
        "Am häufigsten verwendete Kategorien des Monats",
      "Les services qui génèrent le plus d'opportunités ce mois-ci.":
        "Dienstleistungen, die diesen Monat die meisten Möglichkeiten generieren.",
      "Découvrir nos services": "Entdecken Sie unsere Dienstleistungen",
      "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.":
        "Entdecken Sie aktuelle Trends und die von unseren Kunden am häufigsten nachgefragten Bereiche, um Ihr Profil zu optimieren und neue Chancen zu nutzen.",
      "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.":
        "UpTaskers erleichtert das Zusammentreffen von Kunden und qualifizierten Fachleuten für einfache, schnelle und effektive Zusammenarbeiten.",
      "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.":
        "Ob Sie ein Unternehmen sind, das nach spezifischem Fachwissen sucht, oder eine Privatperson, die Hilfe benötigt, unsere Plattform verbindet Sie mit den besten lokalen Talenten.",
      "Avis des utilisateurs et statistiques":
        "Benutzerbewertungen und Statistiken",
      "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.":
        "Entdecken Sie, was unsere Community über UpTaskers denkt, und schließen Sie sich unseren Tausenden aktiven Nutzern an.",
      "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.":
        "Mit mehr als 10.000 Nutzern und 5.000 registrierten Fachleuten ist UpTaskers stolz darauf, eine Zufriedenheitsrate von 98 % bei über 25.000 abgeschlossenen Missionen aufrechtzuerhalten.",
      "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.":
        "Jeder Freelancer wird mit äußerster Präzision ausgewählt und garantiert maximale Expertise und eine perfekte Integration in Ihre Teams.",
      "Objectif 2030": "Ziel 2030",
      "Devenir le leader mondial de la mise en relation de services.":
        "Weltweit führend bei der Vermittlung von Dienstleistungen werden.",
      "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.":
        "Unsere Vision ist es, eine globale Infrastruktur aufzubauen, um jedes Talent mit einer Gelegenheit zu verbinden und Innovation, finanzielle Zuverlässigkeit und Unabhängigkeit für Millionen von Anbietern international zu fördern.",
      "Notre QG": "Unser Hauptquartier",
      "Côte d'Ivoire": "Elfenbeinküste",
      PLATEFORME: "PLATTFORM",
      CONFIANCE: "VERTRAUEN",
      ENTREPRISE: "UNTERNEHMEN",
      LÉGAL: "RECHTLICHES",
      Accueil: "Startseite",
      "Explorez nos catégories": "Entdecken Sie unsere Kategorien",
      Avantages: "Vorteile",
      Ressources: "Ressourcen",
      "Avis clients": "Kundenbewertungen",
      "Vérification des profils": "Profilüberprüfung",
      "Garantie UpTaskers": "UpTaskers-Garantie",
      "À propos de UpTaskers": "Über UpTaskers",
      "Nous contacter": "Kontaktiere uns",
      "Support client": "Kundensupport",
      "Conditions d'utilisation": "Nutzungsbedingungen",
      "Politique de confidentialité": "Datenschutz-Bestimmungen",
      "Mentions légales": "Rechtliche Hinweise",
      "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.":
        "ist die führende Plattform zur Suche nach verifizierten und qualifizierten Dienstleistern.",
      "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.":
        "Das Vertrauen unserer Benutzer ist unsere Priorität. Alle Fachleute in unserem Netzwerk werden bewertet und ihre Informationen zu Ihrer Sicherheit dokumentiert.",
      "100% de profils vérifiés": "100% überprüfte Profile",
      "Applications Mobiles": "Mobile Apps",
      "Suivez-nous": "Folge uns",
      "Tous droits réservés.": "Alle Rechte vorbehalten.",
      "12 Avril 2026": "12. April 2026",
      "8 Mars 2026": "8. März 2026",
      "20 Mai 2026": "20. Mai 2026",
      "Contactez-nous": "Kontaktiere uns",
      "Nous sommes là pour": "Wir sind hier um",
      "vous aider.": "Ihnen zu helfen.",
      "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.":
        "Eine Frage, benötigen Sie Unterstützung oder möchten Sie uns einfach Feedback geben? Unser Team steht Ihnen zur Verfügung.",
      "Informations de contact": "Kontaktinformation",
      Email: "E-Mail",
      "Pour toute demande générale": "Für allgemeine Anfragen",
      Téléphone: "Telefon",
      "Du lundi au vendredi, de 9h à 18h":
        "Montag bis Freitag von 9 bis 18 Uhr",
      Adresse: "Adresse",
      Plateau: "Plateau",
      "Abidjan, Côte d'Ivoire": "Abidjan, Elfenbeinküste",
      "Téléchargez notre application": "Laden Sie unsere App herunter",
      "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.":
        "Nehmen Sie UpTaskers überallhin mit. Verwalten Sie Ihre Projekte sicher, tauschen Sie sich einfach mit Profis aus und verfolgen Sie den Fortschritt Ihrer Anfragen auf Ihrem Handy.",
      "Centre de ressources": "Ressourcenzentrum",
      "Outils et guides pour": "Tools und Leitfäden für",
      "réussir.": "Erfolg.",
      "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.":
        "Exklusive Inhalte, erstellt von unseren Experten zur Unterstützung Ihrer Projekte, egal ob anspruchsvoller Kunde oder aufstrebender Profi.",
      "Espace Clients": "Kundenbereich",
      "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.":
        "Verwirklichen Sie Ihre Ideen in aller Ruhe. Unsere Leitfäden helfen Ihnen dabei, in jeder Phase Ihres Projekts die besten Entscheidungen zu treffen.",
      "Comment bien définir votre projet ?":
        "Wie definieren Sie Ihr Projekt gut?",
      "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.":
        "Lernen Sie, ein klares Lastenheft zu erstellen, um die besten Angebote zu erhalten.",
      "Choisir le prestataire idéal": "Wählen Sie den idealen Anbieter aus",
      "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.":
        "Die wesentlichen Kriterien für die Auswahl des auf Ihre Bedürfnisse zugeschnittenen Profis.",
      "Guide des tarifs 2024": "Preisführer 2024",
      "Découvrez les prix moyens du marché pour budgétiser vos travaux.":
        "Entdecken Sie die durchschnittlichen Marktpreise zur Budgetierung Ihrer Arbeiten.",
      "Espace Prestataires": "Anbieterbereich",
      "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.":
        "Steigern Sie Ihre Aktivität und optimieren Sie Ihr Management. Entdecken Sie unsere Best Practices, um auf der Plattform zu überzeugen.",
      "Optimiser votre vitrine": "Optimieren Sie Ihr Schaufenster",
      "Conseils pratiques pour rendre votre profil plus attractif pour les clients.":
        "Praktische Ratschläge, um Ihr Profil für Kunden attraktiver zu gestalten.",
      "Réussir son premier contact": "Gelingen beim ersten Kontakt",
      "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.":
        "Wie Sie auf Anfragen effektiv reagieren, um Ihre Abschlusschancen zu maximieren.",
      "Obtenir plus d'avis positifs": "Erhalte mehr positive Bewertungen",
      "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.":
        "Die besten Strategien zur Kundenbindung und zum Ausbau Ihrer E-Reputation.",
      "Formations Vidéo": "Video-Schulungen",
      "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.":
        "Lernen Sie innerhalb weniger Minuten alle UpTaskers-Funktionen dank unserer interaktiven Tutorials zu beherrschen.",
      "Voir les tutoriels": "Tutorials ansehen",
      "Formation vidéo": "Video-Training",
      "À propos de nous": "Über uns",
      "Découvrez UpTaskers": "Entdecken Sie UpTaskers",
      "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.":
        "Willkommen bei UpTaskers, einer Plattform zur Vermittlung zwischen Privatpersonen, Unternehmen und qualifizierten Fachleuten.",
      "Qui sommes-nous ?": "Wer sind wir?",
      "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.":
        "Unsere Mission ist einfach: Jedem zu ermöglichen, schnell kompetente und vertrauenswürdige Dienstleister für seine Bedürfnisse zu finden, und gleichzeitig Fachleuten die Möglichkeit zu geben, ihr Geschäft auszubauen und an Sichtbarkeit zu gewinnen.",
      "Notre Vision": "Unsere Vision",
      "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.":
        "Wir glauben, dass jede Fähigkeit wertgeschätzt werden muss und dass jedes Bedürfnis eine angepasste Lösung verdient.",
      "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.":
        "Unser Ziel ist es, ein Ökosystem zu schaffen, in dem Kunden und Dienstleister vertrauensvoll und in einer sicheren Umgebung problemlos zusammenarbeiten können.",
      "Ce que nous proposons": "Was wir anbieten",
      "Pour les utilisateurs :": "Für Benutzer:",
      "Rechercher des professionnels qualifiés.":
        "Suchen Sie nach qualifizierten Fachleuten.",
      "Publier leurs besoins et recevoir des propositions.":
        "Veröffentlichen Sie ihre Bedürfnisse und erhalten Sie Vorschläge.",
      "Comparer les profils, expériences et avis.":
        "Vergleichen Sie Profile, Erfahrungen und Bewertungen.",
      "Contacter directement les prestataires.":
        "Kontaktieren Sie Dienstleister direkt.",
      "Trouver rapidement des solutions adaptées à leurs projets.":
        "Finden Sie schnell Lösungen für ihre Projekte.",
      "Pour les professionnels :": "Für Profis:",
      "Créer un profil détaillé.": "Erstellen Sie ein detailliertes Profil.",
      "Présenter leurs compétences et réalisations.":
        "Präsentieren Sie ihre Fähigkeiten und Erfolge.",
      "Développer leur clientèle.": "Ihren Kundenstamm aufbauen.",
      "Recevoir des demandes de services.": "Serviceanfragen erhalten.",
      "Valoriser leur expertise auprès d'un large public.":
        "Ihre Expertise einem breiten Publikum präsentieren.",
      "Nos Valeurs": "Unsere Werte",
      "Qualité :": "Qualität:",
      "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.":
        "Wir fördern Exzellenz bei jedem Service auf unserer Plattform.",
      "Compétence :": "Kompetenz:",
      "Nous mettons en avant les talents et le savoir-faire des professionnels.":
        "Wir heben die Talente und das Know-how der Fachleute hervor.",
      "Professionnalisme :": "Professionalität:",
      "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.":
        "Wir fördern ernsthafte, respektvolle und transparente Beziehungen zwischen allen Benutzern.",
      "Confiance :": "Vertrauen:",
      "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.":
        "Wir arbeiten ständig daran, eine zuverlässige und sichere Umgebung zu bieten.",
      "Pourquoi nous choisir ?": "Warum uns wählen?",
      "Une plateforme simple et intuitive.":
        "Eine einfache und intuitive Plattform.",
      "Des professionnels qualifiés.": "Qualifizierte Profis.",
      "Une mise en relation rapide.": "Schnelle Verbindung.",
      "Un accompagnement orienté vers la satisfaction des utilisateurs.":
        "Begleitung, die auf die Benutzerzufriedenheit ausgerichtet ist.",
      "Un engagement constant en faveur de la qualité des services.":
        "Ein ständiges Engagement für Servicequalität.",
      "Notre engagement": "Unser Ansatz",
      "Au service de vos besoins": "Im Dienste Ihrer Bedürfnisse",
      "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.":
        "Wir verpflichten uns, unsere Plattform kontinuierlich zu verbessern, um unseren Nutzern die bestmögliche Erfahrung zu bieten. Egal, ob Sie nach einem Fachmann suchen oder Ihre Dienstleistungen anbieten möchten, wir unterstützen Sie bei der Umsetzung Ihrer Projekte.",
      "Qualité • Compétence • Professionnalisme":
        "Qualität • Kompetenz • Professionalität",
      "Retour à l'accueil": "Zurück zur Startseite",
      "Toutes nos catégories": "Alle unsere Kategorien",
      "Explorez nos": "Entdecken Sie unsere",
      catégories: "Kategorien",
      "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.":
        "Entdecken Sie die Vielfalt unserer Fachleute und finden Sie unter unseren zahlreichen Kategorien den idealen Experten für Ihr Projekt.",
      "Rechercher une catégorie...": "Nach einer Kategorie suchen...",
      "Aucune catégorie trouvée pour": "Keine Kategorie gefunden für",
      "Avantages Exclusifs": "Exklusive Vorteile",
      "Maximisez votre ": "Maximieren Sie Ihre ",
      "impact.": "Wirkung.",
      "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.":
        "Egal, ob Sie ein Profi sind, der seinen Kundenstamm ausbauen möchte, oder eine Privatperson auf der Suche nach vertrauenswürdigen Experten, UpTaskers bietet Ihnen die besten Werkzeuge, um erfolgreich zu sein.",
      "Développez votre activité": "Entwickeln Sie Ihr Geschäft",
      "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.":
        "Erhalten Sie Zugang zu einem großen Stamm qualifizierter Kunden und steigern Sie Ihren Umsatz ohne Akquisitionsaufwand.",
      "Paiements sécurisés": "Sichere Zahlungen",
      "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.":
        "Profitieren Sie von einem 100% sicheren Zahlungssystem. Seien Sie versichert, dass Sie schnell und in aller Ruhe bezahlt werden.",
      "Gestion simplifiée": "Vereinfachte Verwaltung",
      "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.":
        "Verwalten Sie Ihre Termine, Ihre Angebote und Ihre Rechnungen direkt über Ihr intuitives Dashboard.",
      "Communauté de confiance": "Vertrauenswürdige Community",
      "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.":
        "Treten Sie einer Gemeinschaft von verifizierten Fachleuten bei, in der Qualität und Respekt im Vordergrund stehen.",
      "Visibilité accrue": "Erhöhte Sichtbarkeit",
      "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.":
        "Nutzen Sie unser Know-how im Bereich des digitalen Marketings, um ganz oben in den lokalen Suchergebnissen zu erscheinen.",
      "Réputation valorisée": "Geschätzter Ruf",
      "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.":
        "Sammeln Sie authentische Bewertungen, die Ihre Glaubwürdigkeit stärken und ganz natürlich neue Kunden anziehen.",
      "Prêt à libérer votre potentiel ?": "Bereit, Ihr Potenzial freizusetzen?",
      "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.":
        "Treten Sie der Plattform bei, die die Art und Weise verändert, wie Fachleute und Kunden zusammenarbeiten.",
      "Rejoindre UpTaskers maintenant": "Treten Sie UpTaskers jetzt bei",
      "Tendances du mois": "Monatliche Trends",
      "Les catégories les plus utilisées":
        "Am häufigsten verwendete Kategorien",
      "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.":
        "Entdecken Sie die beliebtesten Dienstleistungen dieses Monats und finden Sie den idealen Experten.",
      "Très demandé": "Sehr gefragt",
      "Voir toutes les catégories": "Alle Kategorien ansehen",
      "Des experts vérifiés": "Verifizierte Experten",
      "Des talents pour chaque besoin": "Talente für jeden Bedarf",
      "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.":
        "Durchsuchen Sie die Profile unserer besten Fachleute und finden Sie den idealen Experten.",
      "Designer UX/UI": "UX/UI Designer",
      "Développeur Full-Stack": "Full-Stack Entwickler",
      "Rédactrice Web App": "Web App Texter",
      "Artisan Plombier": "Klempner",
      "Assistante Virtuelle": "Virtuelle Assistentin",
      "Technicien IT": "IT-Techniker",
      avis: "Bewertungen",
      "Voir le profil": "Profil ansehen",
      "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.":
        "Bereits über 10.000 Kunden und 5.000 Fachleute haben den Schritt gewagt! Mit 25.000 erfolgreichen Missionen und 98 % Zufriedenheit ist UpTaskers die unverzichtbare Referenz für Ihren Alltag.",
      "Découvrez nos services": "Entdecken Sie unsere Dienstleistungen",
      "Note moyenne basée sur": "Durchschnittliche Bewertung basierend auf",
      "+12,000 avis certifiés": "+12.000 zertifizierten Bewertungen",
      "Utilisateurs/mois": "Benutzer/Monat",
      Satisfaction: "Zufriedenheit",
      "Rép. moyenne": "Durchschn. Antw.",
      Missions: "Missionen",
      Maçonnerie: "Mauerwerk",
      Carrelage: "Fliesenlegen",
      "Montage vidéo": "Videobearbeitung",
      Programmation: "Programmierung",
      "Retour aux catégories": "Back to categories",
      "Experts en": "Experts in",
      "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :":
        "Find the best highly qualified and certified professionals to meet your most specific requirements in:",
      "Confiez-nous vos projets pour une réalisation d'excellence.":
        "Entrust us with your projects for an excellent execution.",
      "Qualité Supérieure": "Superior Quality",
      "L'élite des": "The elite of",
      "professionnels.": "professionals.",
      "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.":
        "We rigorously evaluate and select the best profiles on the market to ensure the success and excellence of your projects.",
      "Espace client": "Client Area",
      "Espace prestataire": "Provider Area",
      "Connectez-vous ou inscrivez-vous": "Log in or sign up",
      "Continuer avec Google": "Continue with Google",
      "Continuer avec Apple": "Continue with Apple",
      "Continuer avec un numéro de téléphone": "Continue with a phone number",
      "Adresse e-mail": "Email address",
      Continuer: "Continue",
      "Rejoignez la confiance.": "Join the trust.",
      "Sécurité garantie": "Guaranteed security",
      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.":
        "Secure payments, verified profiles, and responsive 7/7 customer support.",
      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.":
        "A transparent community where every review is based on a real service.",
      "Créer un compte": "Create an account",
      "Sélectionnez votre type de profil pour commencer":
        "Select your profile type to start",
      "Je cherche un professionnel": "I am looking for a professional",
      "Je propose mes services": "I offer my services",
      "Nom complet": "Full name",
      "Adresse email": "Email address",
      "Mot de passe": "Password",
      "J'accepte les": "I accept the",
      "et la": "and the",
      Support: "Support",
      "Download on the": "Download on the",
      "Disponible sur": "Available on",
      "Du lundi au dimanche": "Montag bis Sonntag",
      "Du lundi au dimanche, 24h/24": "Montag bis Sonntag, 24/7",
      "Le/La maçon(ne)": "The mason",
      "hero.desc.masonry":
        "Qualified craftsmen for all your construction, facade and landscaping work.",
      "Le/La coiffeur(euse)": "The hairdresser",
      "hero.desc.hairdress":
        "Call on our hairdressing experts for a custom cut, color or styling.",
      "L'organisateur(trice)": "The event organizer",
      "hero.desc.eventorg":
        "Entrust the planning of your weddings, parties and corporate events to our passionate experts.",
      "L'avocat(e) / juriste": "The lawyer / jurist",
      "hero.desc.law":
        "Secure your processes with our selection of competent lawyers and legal professionals.",
      "Découvrez notre objectif": "Entdecken Sie unser Ziel",
      Notre: "Unsere",
      Mission: "Mission",
      "Connecter les besoins aux meilleures compétences":
        "Bedürfnisse mit den besten Fähigkeiten verbinden",
      "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.":
        "Unsere Mission ist es, die Begegnung zwischen Menschen, die hochwertige Dienstleistungen suchen, und kompetenten Fachleuten zu erleichtern.",
      "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.":
        "In einer Welt, in der es manchmal schwierig ist, den richtigen Dienstleister zu finden oder seine Fähigkeiten bekannt zu machen, schafft unsere Plattform eine einfache, schnelle und zuverlässige Brücke zwischen Kunden und Fachleuten.",
      "Pourquoi existons-nous ?": "Warum existieren wir?",
      "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :":
        "Jeden Tag suchen Tausende von Menschen nach Lösungen für ihre Bedürfnisse:",
      "Trouver un répétiteur pour accompagner un enfant.":
        "Einen Nachhilfelehrer finden, um ein Kind zu unterstützen.",
      "Faire appel à un menuisier pour fabriquer un meuble.":
        "Einen Tischler rufen, um ein Möbelstück herzustellen.",
      "Recruter un développeur pour créer un site web.":
        "Einen Entwickler rekrutieren, um eine Website zu erstellen.",
      "Trouver un électricien, un plombier ou un artisan qualifié.":
        "Einen qualifizierten Elektriker, Klempner oder Handwerker finden.",
      "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.":
        "Hilfe von einem vertrauenswürdigen Fachmann für ein privates oder berufliches Projekt erhalten.",
      "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.":
        "Unsere Plattform wurde mit dem doel erstellt, diese Suchen einfacher, schneller und effizienter zu machen.",
      "Ce que nous apportons": "Was wir bringen",
      "Pour les clients": "Für Kunden",
      "Nous permettons aux utilisateurs de :": "Wir ermöglichen Benutzern:",
      "Trouver facilement des professionnels qualifiés.":
        "Qualifizierte Fachleute leicht finden.",
      "Comparer plusieurs prestataires.": "Mehrere Anbieter vergleichen.",
      "Consulter les profils et les expériences.":
        "Profile und Erfahrungen konsultieren.",
      "Gagner du temps dans leurs recherches.": "Zeit bei der Suche sparen.",
      "Réaliser leurs projets en toute confiance.":
        "Ihre Projekte mit Zuversicht umsetzen.",
      "Pour les professionnels": "Für Fachleute",
      "Nous aidons les prestataires à :": "Wir helfen Anbietern bei:",
      "Mettre en valeur leurs compétences.": "Ihre Fähigkeiten hervorheben.",
      "Développer leur visibilité.": "Ihre Sichtbarkeit entwickeln.",
      "Trouver de nouveaux clients.": "Neue Kunden finden.",
      "Développer leur activité.": "Ihr Geschäft ausbauen.",
      "Construire leur réputation professionnelle.":
        "Ihren beruflichen Ruf aufbauen.",
      "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.":
        "Wir möchten eine Gemeinschaft aufbauen, in der Talent, Know-how und Professionalität anerkannt und für alle zugänglich sind.",
      "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.":
        "Wir glauben, dass wir durch die Verbindung der richtigen Fähigkeiten mit den richtigen Bedürfnissen dazu beitragen, mehr Chancen, Vertrauen und Erfolg für alle zu schaffen.",
      "Nos engagements": "Unsere Verpflichtungen",
      "Qualité dans les services proposés.":
        "Qualität in den angebotenen Dienstleistungen.",
      "Compétence des professionnels présents sur la plateforme.":
        "Kompetenz der auf der Plattform anwesenden Fachleute.",
      "Professionnalisme dans chaque interaction.":
        "Professionalität in jeder Interaktion.",
      "Transparence et confiance entre les utilisateurs.":
        "Transparenz und Vertrauen zwischen Benutzern.",
      "Innovation pour améliorer continuellement l'expérience.":
        "Innovation, um die Erfahrung kontinuierlich zu verbessern.",
      "Notre Promesse": "Unser Versprechen",
      "Transformer chaque besoin en opportunité et chaque compétence en solution.":
        "Jedes Bedürfnis in eine Chance und jede Fähigkeit in eine Lösung verwandeln.",
      "Au service de vos besoins.": "Im Dienste Ihrer Bedürfnisse.",
      "Aide et assistance": "Hilfe und Unterstützung",
    },
  },
  IT: {
    translation: {
      "Bienvenue sur la page": "Benvenuto nella pagina",
      "Cette section de UpTaskers est actuellement en cours de développement.": "Questa sezione di UpTaskers è attualmente in fase di sviluppo.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "La nostra piattaforma è in continua evoluzione per offrirti la migliore esperienza. Resta sintonizzato per gli aggiornamenti mentre costruiamo questa risorsa completa.",

      "Légal & Confidentialité": "Legal & Privacy",
      "Politique de Confidentialité": "Privacy Policy",
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le":
        "We are committed to protecting your privacy and ensuring the security of your data on the platform. Last updated on",
      Sommaire: "Summary",
      "Contactez notre équipe responsable de la vie privée :":
        "Contact our privacy team:",
      "Engagement de Confiance": "Commitment to Trust",
      "Votre Sécurité Avant Tout": "Your Security Above All",
      "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.":
        "UpTaskers has been designed to provide you with a safe and trusted environment. No compromise is made with your data and privacy, so you can develop your business and hire experts with peace of mind.",
      "Paiements Sécurisés": "Secure Payments",
      "Identités Vérifiées": "Verified Identities",
      "Confidentialité Protégée": "Privacy Protected",
      "1. Introduction": "1. Introduction",
      "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.":
        "UpTaskers is the leading platform for connecting qualified professionals and clients. This policy explains how we collect, use, and protect your personal information.",
      "2. Nature du Service": "2. Nature of the Service",
      "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.":
        "UpTaskers allows you to find, contact, and work with experts in multiple fields, ensuring secure payments and quality exchanges.",
      "3. Données Collectées": "3. Data Collected",
      "Nous pouvons recueillir les données suivantes :":
        "We may collect the following data:",
      "Informations de base (nom, prénom, adresse e-mail, téléphone)":
        "Basic information (last name, first name, email address, phone number)",
      "Documents d'identité (pour la vérification stricte des professionnels)":
        "Identity documents (for strict verification of professionals)",
      "Préférences utilisateur et paramètres de notification":
        "User preferences and notification settings",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)":
        "Payment data (processed and secured by our approved third-party providers)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme":
        "History of missions, messages, and reviews left on the platform",
      "4. Utilisation des Données": "4. Use of Data",
      "Les données collectées sont utilisées pour :":
        "The data collected is used to:",
      "Faciliter la mise en relation entre clients et prestataires":
        "Facilitate connections between clients and providers",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)":
        "Personalize your experience (refine expert search results)",
      "Garantir le bon déroulement et le suivi des missions":
        "Ensure the smooth running and tracking of missions",
      "Assurer la sécurité des accès et lutter contre la fraude":
        "Ensure access security and fight fraud",
      "5. Sécurité": "5. Security",
      "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :":
        "We take the security of your data very seriously. Measures in place:",
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés":
        "Your personal data is stored on highly secure servers",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)":
        "Financial transactions (payment) are end-to-end encrypted (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers":
        "Secure authentication to protect access to your UpTaskers account",
      "6. Partage des Données": "6. Data Sharing",
      "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :":
        "We never sell your personal data. It may be shared in the following strictly necessary cases:",
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission":
        "Strictly required information is exchanged between the client and the provider upon confirming a mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement":
        "With our payment partners to validate escrow and payout",
      "Afin de se conformer à des obligations légales en vigueur":
        "In order to comply with applicable legal obligations",
      "7. Vos Droits": "7. Your Rights",
      "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :":
        "As a UpTaskers user, you have the following rights (in accordance with Ivorian data protection law):",
      "Accéder à vos données et en demander la copie":
        "Access your data and request a copy",
      "Rectifier ou mettre à jour vos informations inexactes":
        "Rectify or update your inaccurate information",
      "Demander la suppression de votre profil, historique et compte":
        "Request the deletion of your profile, history, and account",
      "Vous opposer à recevoir nos newsletters et alertes de mission":
        "Object to receiving our newsletters and mission alerts",
      "8. Contact": "8. Contact",
      "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :":
        "For any information request or to exercise your rights regarding your data, you can contact us:",
      "Mentions Légales": "Legal Notices",
      Hébergement: "Hosting",
      "Le site est hébergé par Firebase.":
        "The site is hosted by Firebase.",
      "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.":
        "Data is hosted in secure data centers, in compliance with Ivorian data protection law.",
      "Propriété Intellectuelle": "Intellectual Property",
      "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de":
        "The general structure of the site, as well as the texts, animated or non-animated images, and all elements making up the site are the exclusive property of",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.":
        "Any total or partial representation of this site by any means whatsoever, without the express permission of the website operator, is prohibited.",
      Responsabilité: "Responsibility",
      "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.":
        "is a matchmaking platform between clients and service providers. UpTaskers acts solely as a technical intermediary and does not carry out the services offered on the platform. Consequently, UpTaskers cannot be held responsible for the quality, execution, or non-execution of the services provided by the service providers.",

      "Dernière mise à jour : 4 Juin 2026": "Last updated: June 4, 2026",
      "Acceptation des Conditions": "Acceptance of Terms",
      "En accédant ou en utilisant": "By accessing or using",
      "la Plateforme": "the Platform",
      "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.":
        "you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you are not authorized to access the Service.",
      "Description du Service": "Description of the Service",
      "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.":
        "acts as a connection platform between independent service providers and clients looking for professional services. We do not directly provide the services offered by the providers.",
      "Vérification et Avis": "Verification and Reviews",
      "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,":
        "Although we implement an identity verification process for providers and offer an authentic review system,",
      "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.":
        "does not guarantee the specific quality of the work performed by providers. Transactions and agreements are made directly between the client and the provider.",
      "Comptes Utilisateurs": "User Accounts",
      "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.":
        "When you create an account on our platform, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of your account.",
      Résiliation: "Termination",
      "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.":
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use or engage in inappropriate behavior on the platform.",
      Modifications: "Modifications",
      "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.":
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any material changes to these Terms of Use.",

      "Notre mission": "La nostra Missione",
      Abonnements: "Abbonamenti",
      "Rechercher...": "Cerca...",
      Langue: "Lingua",
      "Le professionnel": "Il professionista",
      "qu'il vous faut.": "di cui hai bisogno.",
      "L'expertise": "Competenza",
      "digitale.": "digitale.",
      "Des artisans": "Artigiani",
      "qualifiés.": "qualificati.",
      Apprenez: "Impara",
      "sans limite.": "senza limiti.",
      "Prenez soin de": "Prenditi cura di",
      "vous.": "te.",
      "Trouver un prestataire": "Trova fornitore",
      "Se connecter": "Accedi",
      "Connectez-vous avec": "Collegati con",
      "l'excellence.": "l'eccellenza.",
      "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.":
        "La nostra piattaforma rivoluziona la connessione tra professionisti e clienti. Che tu abbia bisogno di un esperto per una missione una tantum o stia cercando di sviluppare la tua clientela, UpTaskers crea un ambiente di fiducia.",
      Commencer: "Iniziare",
      "Une mise en relation rapide et simplifiée.":
        "Una connessione rapida e semplificata.",
      "Des profils vérifiés et des avis authentiques.":
        "Profili verificati e recensioni autentiche.",
      "Un espace de collaboration sécurisé pour tous.":
        "Uno spazio di collaborazione sicuro per tutti.",
      "Maximisez votre impact": "Massimizza il tuo impatto",
      "Outils pour réussir": "Strumenti per avere successo",
      "Nous sommes là pour vous aider": "Siamo qui per aiutarti",
      "S'inscrire": "Iscriviti",
      Conçu: "Progettato",
      "pour exceller.": "per eccellere.",
      "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.":
        "La vocazione di UpTaskers è semplice: farti risparmiare tempo offrendoti un accesso immediato ai migliori talenti della tua zona.",
      "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.":
        "Uniamo l'efficienza di una piattaforma moderna con l'esperienza di professionisti verificati, affinché ogni servizio reso sia un'esperienza perfettamente fluida.",
      "Réseau Fiable": "Rete Affidabile",
      "Des talents": "Talenti",
      "certifiés.": "certificati.",
      "Profils vérifiés": "Profili verificati",
      "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.":
        "Ogni fornitore su UpTaskers passa attraverso un accurato processo di verifica dell'identità per garantire la tua sicurezza.",
      "Avis authentiques": "Recensioni autentiche",
      "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.":
        "Leggi feedback reali. Solo i clienti che hanno utilizzato i servizi possono lasciare una recensione.",
      "Support dédié 24/7": "Supporto dedicato 24/7",
      "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.":
        "Il nostro team è a tua disposizione per assisterti e risolvere qualsiasi problema riscontrato sulla piattaforma.",
      "L'expertise dans": "L'esperienza in",
      "votre poche.": "tua tasca.",
      "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.":
        "Scarica la nostra app mobile gratuita per trovare un fornitore, gestire le tue richieste e comunicare facilmente ovunque tu sia.",
      "Le/La coach sportif(ve)": "L'allenatore sportivo",
      "L'agent(e) de sécurité": "L'agente di sicurezza",
      "Le/La traducteur(trice)": "Il/La traduttore(trice)",
      "Le/La menuisier(ère)": "Il/La falegname",
      "Le/La décorateur(trice)": "Il/La decoratore(trice)",
      "Le/La mécanicien(ne)": "Il/La meccanico(a)",
      "Le/La jardinier(ère)": "Il/La giardiniere(a)",
      "Le/La cuisinier(ère)": "Il/La cuoco(a)",
      "Le/La professionnel(le)": "Il/La professionista",
      "L'informaticien(ne)": "L'informatico(a)",
      "L'artisan(e)": "L'artigiano(a)",
      "Le/La photographe": "Il/La fotografo(a)",
      "Le/La chauffeur(e)": "L'autista",
      "Le/La déménageur(euse)": "Il/La traslocatore(trice)",
      "Le/La professeur(e)": "L'insegnante",
      "L'agent immobilier": "L'agente immobiliare",
      "hero.desc.sport":
        "Raggiungi i tuoi obiettivi fisici con una guida personalizzata dai nostri allenatori appassionati.",
      "hero.desc.security":
        "Garantisci la sicurezza delle tue proprietà e degli eventi con professionisti preparati e qualificati.",
      "hero.desc.translator":
        "Facilita i tuoi scambi internazionali con i nostri esperti di traduzione e interpretazione.",
      "hero.desc.carpenter":
        "Artigiani qualificati per tutti i tuoi lavori di falegnameria, dalla produzione alla ristrutturazione.",
      "hero.desc.decorator":
        "Migliora i tuoi interni con l'esperienza dei nostri appassionati decoratori d'interni.",
      "hero.desc.mechanic":
        "Ripara e mantieni il tuo veicolo con i nostri esperti di meccanica automobilistica.",
      "hero.desc.garden":
        "Trasforma e mantieni i tuoi spazi verdi con l'esperienza dei nostri appassionati giardinieri e paesaggisti.",
      "hero.desc.cooking":
        "Concediti un momento gastronomico con chef talentuosi, dalla preparazione dei pasti agli eventi privati.",
      "hero.desc.services":
        "Trova i migliori esperti per i tuoi lavori quotidiani, accuratamente selezionati e pronti a intervenire rapidamente.",
      "hero.desc.tech":
        "Sviluppatori, designer e operatori di marketing di talento per proiettare i tuoi progetti digitali verso nuovi traguardi.",
      "hero.desc.repair":
        "Competenza riconosciuta per tutte le tue ristrutturazioni e riparazioni, con professionisti di fiducia al tuo fianco.",
      "hero.desc.photo":
        "Cattura i tuoi eventi preziosi con l'esperienza dei nostri fotografi professionisti pronti a sublimare ogni momento.",
      "hero.desc.transport":
        "Spostati facilmente in totale sicurezza con i nostri autisti professionisti qualificati.",
      "hero.desc.moving":
        "Trasloco tranquillo con i nostri esperti dei trasporti, efficienti e attenti.",
      "hero.desc.education":
        "Sviluppare nuove competenze con insegnanti appassionati, online o al proprio domicilio, secondo le proprie esigenze.",
      "hero.desc.realestate":
        "Trova l'esperto immobiliare ideale per supportarti in tutti i tuoi progetti di acquisto, vendita o affitto.",
      Éducation: "Educazione",
      Artisanat: "Artigianato",
      Informatique: "Informatica",
      Réparation: "Riparazione",
      Beauté: "Bellezza",
      Transport: "Trasporto",
      "Bien-être": "Benessere",
      Événementiel: "Eventi",
      Déménagement: "Trasloco",
      Nettoyage: "Pulizia",
      Bricolage: "Fai da te",
      Photographie: "Fotografia",
      Architecture: "Architettura",
      Jardinage: "Giardinaggio",
      Menuiserie: "Falegnameria",
      Décoration: "Decorazione",
      Mécanique: "Meccanica",
      "Soutien scolaire": "Ripetizioni",
      Rédaction: "Scrittura",
      Vidéo: "Video",
      Sécurité: "Sicurezza",
      Plomberie: "Idraulica",
      Électricité: "Elettricità",
      Design: "Design",
      Marketing: "Marketing",
      Traduction: "Traduzione",
      Coaching: "Coaching",
      "Garde d'enfants": "Babysitter",
      Musique: "Musica",
      Comptabilité: "Contabilità",
      Droit: "Diritto",
      Cuisine: "Cucina",
      Sport: "Sport",
      Coiffure: "Parrucchiere",
      "Garde d'animaux": "Pet sitting",
      Massage: "Massaggio",
      "Personal Shopper": "Personal Shopper",
      "Organisation d'événements": "Organizzazione di eventi",
      Maquillage: "Trucco",
      Esthétique: "Estetica",
      "Aide à domicile": "Assistenza domiciliare",
      Serrurerie: "Fabbro",
      Peinture: "Pittura",
      Vétérinaire: "Veterinario",
      "Agent immobilier": "Agente immobiliare",
      "Journal UpTaskers": "Giornale UpTaskers",
      "Guides, astuces et conseils pour clients et professionnels":
        "Guide, trucchi e consigli per clienti e professionisti",
      "Lire la suite": "Leggi di più",
      "Les catégories les plus utilisées dans le mois":
        "Categorie più utilizzate del mese",
      "Les services qui génèrent le plus d'opportunités ce mois-ci.":
        "I servizi che generano più opportunità questo mese.",
      "Découvrir nos services": "Scopri i nostri servizi",
      "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.":
        "Scopri le tendenze attuali e i domini più richiesti dai nostri clienti per ottimizzare il tuo profilo e cogliere nuove opportunità.",
      "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.":
        "UpTaskers facilita l'incontro tra clienti e professionisti qualificati per collaborazioni semplici, veloci ed efficaci.",
      "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.":
        "Sia che tu sia un'azienda alla ricerca di un'esperienza specifica o un individuo che ha bisogno di una mano, la nostra piattaforma ti connette ai migliori talenti locali.",
      "Avis des utilisateurs et statistiques":
        "Recensioni degli utenti e statistiche",
      "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.":
        "Scopri cosa pensa la nostra community di UpTaskers e unisciti ai nostri migliaia di utenti attivi.",
      "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.":
        "Con oltre 10.000 utenti e 5.000 professionisti iscritti, UpTaskers è orgogliosa di mantenere un tasso di soddisfazione del 98% su oltre 25.000 missioni completate.",
      "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.":
        "Ogni freelance viene selezionato con estrema precisione, garantendo la massima esperienza e una perfetta integrazione nei tuoi team.",
      "Objectif 2030": "Obiettivo 2030",
      "Devenir le leader mondial de la mise en relation de services.":
        "Diventare il leader mondiale nel collegamento dei servizi.",
      "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.":
        "La nostra visione è costruire un'infrastruttura globale per connettere ogni talento a un'opportunità, stimolando l'innovazione, l'affidabilità finanziaria e l'indipendenza per milioni di fornitori a livello internazionale.",
      "Notre QG": "Il nostro QG",
      "Côte d'Ivoire": "Costa d'Avorio",
      PLATEFORME: "PIATTAFORMA",
      CONFIANCE: "FIDUCIA",
      ENTREPRISE: "AZIENDA",
      LÉGAL: "LEGALE",
      Accueil: "Home",
      "Explorez nos catégories": "Esplora le nostre categorie",
      Avantages: "Vantaggi",
      Ressources: "Risorse",
      "Avis clients": "Recensioni dei clienti",
      "Vérification des profils": "Verifica dei profili",
      "Garantie UpTaskers": "Garanzia UpTaskers",
      "À propos de UpTaskers": "Informazioni su UpTaskers",
      "Nous contacter": "Contattaci",
      "Support client": "Assistenza clienti",
      "Conditions d'utilisation": "Termini di utilizzo",
      "Politique de confidentialité": "Politica sulla privacy",
      "Mentions légales": "Note legali",
      "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.":
        "è la piattaforma leader per trovare fornitori di servizi verificati e qualificati.",
      "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.":
        "La fiducia dei nostri utenti è la nostra priorità. Tutti i professionisti della nostra rete vengono valutati e le loro informazioni documentate per la tua sicurezza.",
      "100% de profils vérifiés": "Profili verificati al 100%",
      "Applications Mobiles": "App Mobili",
      "Suivez-nous": "Seguici",
      "Tous droits réservés.": "Tutti i diritti riservati.",
      "12 Avril 2026": "12 aprile 2026",
      "8 Mars 2026": "8 marzo 2026",
      "20 Mai 2026": "20 maggio 2026",
      "Contactez-nous": "Contattaci",
      "Nous sommes là pour": "Siamo qui per",
      "vous aider.": "aiutarti.",
      "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.":
        "Una domanda, bisogno di assistenza o semplicemente vuoi darci un feedback? Il nostro team è a tua disposizione.",
      "Informations de contact": "Info di contatto",
      Email: "Email",
      "Pour toute demande générale": "Per qualsiasi richiesta generale",
      Téléphone: "Telefono",
      "Du lundi au vendredi, de 9h à 18h":
        "Dal lunedì al venerdì, dalle 9:00 alle 18:00",
      Adresse: "Indirizzo",
      Plateau: "Plateau",
      "Abidjan, Côte d'Ivoire": "Abidjan, Costa d'Avorio",
      "Téléchargez notre application": "Scarica la nostra app",
      "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.":
        "Porta UpTaskers ovunque ti pare. Gestisci i tuoi progetti senza sforzo, scambia facilmente con i professionisti e segui i progressi in movimento con il tuo cellulare.",
      "Centre de ressources": "Centro risorse",
      "Outils et guides pour": "Strumenti e guide per",
      "réussir.": "avere successo.",
      "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.":
        "Contenuti esclusivi creati dai nostri esperti per supportare i tuoi progetti, che tu sia un cliente esigente o un professionista ambizioso.",
      "Espace Clients": "Area Clienti",
      "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.":
        "Dai vita alle tue idee in tutta serenità. Le nostre guide ti aiutano a prendere le decisioni migliori in ogni fase del tuo progetto.",
      "Comment bien définir votre projet ?":
        "Come definire bene il tuo progetto?",
      "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.":
        "Impara a scrivere un capitolato d'oneri chiaro per ottenere i migliori preventivi.",
      "Choisir le prestataire idéal": "Scegliere il fornitore ideale",
      "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.":
        "I criteri essenziali per selezionare il professionista adatto alle tue esigenze.",
      "Guide des tarifs 2024": "Guida ai prezzi 2024",
      "Découvrez les prix moyens du marché pour budgétiser vos travaux.":
        "Scopri i prezzi medi di mercato per mettere a budget i tuoi lavori.",
      "Espace Prestataires": "Area Fornitori",
      "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.":
        "Potenzia la tua attività e ottimizza la tua gestione. Scopri le nostre migliori pratiche per eccellere sulla piattaforma.",
      "Optimiser votre vitrine": "Ottimizza la tua vetrina",
      "Conseils pratiques pour rendre votre profil plus attractif pour les clients.":
        "Consigli pratici per rendere il tuo profilo più attraente per i clienti.",
      "Réussir son premier contact": "Avere successo al primo contatto",
      "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.":
        "Come rispondere efficacemente alle richieste per massimizzare le tue possibilità di firma.",
      "Obtenir plus d'avis positifs": "Ottieni più recensioni positive",
      "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.":
        "Le migliori strategie per fidelizzare la clientela e sviluppare la tua e-reputation.",
      "Formations Vidéo": "Corsi di formazione video",
      "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.":
        "Impara a padroneggiare tutte le funzionalità di UpTaskers in pochi minuti grazie ai nostri tutorial interattivi.",
      "Voir les tutoriels": "Visualizza i tutorial",
      "Formation vidéo": "Formazione video",
      "À propos de nous": "Riguardo a noi",
      "Découvrez UpTaskers": "Scopri UpTaskers",
      "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.":
        "Benvenuti su UpTaskers, una piattaforma dedicata a mettere in contatto individui, aziende e professionisti qualificati.",
      "Qui sommes-nous ?": "Chi siamo?",
      "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.":
        "La nostra missione è semplice: consentire a tutti di trovare rapidamente fornitori competenti e fidati per soddisfare le proprie esigenze, offrendo allo stesso tempo ai professionisti l'opportunità di sviluppare la propria attività e ottenere visibilità.",
      "Notre Vision": "La Nostra Visione",
      "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.":
        "Crediamo che ogni competenza meriti di essere valorizzata e che ogni esigenza meriti una soluzione adeguata.",
      "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.":
        "La nostra ambizione è creare un ecosistema in cui clienti e fornitori possano collaborare facilmente, con fiducia e in un ambiente sicuro.",
      "Ce que nous proposons": "Cosa offriamo",
      "Pour les utilisateurs :": "Per gli utenti:",
      "Rechercher des professionnels qualifiés.":
        "Cerca professionisti qualificati.",
      "Publier leurs besoins et recevoir des propositions.":
        "Pubblica le loro esigenze e ricevi proposte.",
      "Comparer les profils, expériences et avis.":
        "Confronta profili, esperienze e recensioni.",
      "Contacter directement les prestataires.":
        "Contatta direttamente i fornitori.",
      "Trouver rapidement des solutions adaptées à leurs projets.":
        "Trova rapidamente soluzioni adatte ai loro progetti.",
      "Pour les professionnels :": "Per i professionisti:",
      "Créer un profil détaillé.": "Crea un profilo dettagliato.",
      "Présenter leurs compétences et réalisations.":
        "Presenta le loro competenze e risultati.",
      "Développer leur clientèle.": "Sviluppare la loro clientela.",
      "Recevoir des demandes de services.": "Ricevere richieste di servizio.",
      "Valoriser leur expertise auprès d'un large public.":
        "Valorizzare le loro competenze presso un vasto pubblico.",
      "Nos Valeurs": "I Nostri Valori",
      "Qualité :": "Qualità:",
      "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.":
        "Incoraggiamo l'eccellenza in ogni servizio fornito sulla nostra piattaforma.",
      "Compétence :": "Competenza:",
      "Nous mettons en avant les talents et le savoir-faire des professionnels.":
        "Mettiamo in risalto i talenti e le competenze dei professionisti.",
      "Professionnalisme :": "Professionalità:",
      "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.":
        "Promuoviamo relazioni serie, rispettose e trasparenti tra tutti gli utenti.",
      "Confiance :": "Fiducia:",
      "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.":
        "Lavoriamo continuamente per offrire un ambiente affidabile e sicuro.",
      "Pourquoi nous choisir ?": "Perché sceglierci?",
      "Une plateforme simple et intuitive.":
        "Una piattaforma semplice e intuitiva.",
      "Des professionnels qualifiés.": "Professionisti qualificati.",
      "Une mise en relation rapide.": "Connessione rapida.",
      "Un accompagnement orienté vers la satisfaction des utilisateurs.":
        "Un affiancamento orientato alla soddisfazione dell'utente.",
      "Un engagement constant en faveur de la qualité des services.":
        "Un impegno costante a favore della qualità del servizio.",
      "Notre engagement": "Il nostro impegno",
      "Au service de vos besoins": "Al servizio delle tue esigenze",
      "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.":
        "Ci impegniamo a migliorare continuamente la nostra piattaforma per offrire la migliore esperienza possibile ai nostri utenti. Che tu stia cercando un professionista o voglia offrire i tuoi servizi, siamo qui per supportarti nella realizzazione dei tuoi progetti.",
      "Qualité • Compétence • Professionnalisme":
        "Qualità • Competenza • Professionalità",
      "Retour à l'accueil": "Torna all'inizio",
      "Toutes nos catégories": "Tutte le nostre categorie",
      "Explorez nos": "Esplora le nostre",
      catégories: "categorie",
      "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.":
        "Scopri la diversità dei nostri professionisti e trova l'esperto ideale per il tuo progetto tra le nostre numerose categorie.",
      "Rechercher une catégorie...": "Cerca una categoria...",
      "Aucune catégorie trouvée pour": "Nessuna categoria trovata per",
      "Avantages Exclusifs": "Vantaggi Esclusivi",
      "Maximisez votre ": "Massimizza il tuo ",
      "impact.": "impatto.",
      "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.":
        "Che tu sia un professionista che cerca di sviluppare la propria clientela o un individuo alla ricerca di esperti di fiducia, UpTaskers ti offre i migliori strumenti per avere successo.",
      "Développez votre activité": "Sviluppa la tua attività",
      "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.":
        "Accedi a un vasto database di clienti qualificati e aumenta il tuo fatturato senza sforzo di prospezione.",
      "Paiements sécurisés": "Pagamenti sicuri",
      "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.":
        "Approfitta di un sistema di pagamento sicuro al 100%. Stai certo di essere pagato rapidamente e in tutta serenità.",
      "Gestion simplifiée": "Gestione semplificata",
      "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.":
        "Gestisci i tuoi appuntamenti, i tuoi preventivi e le tue fatture direttamente dal tuo dashboard intuitivo.",
      "Communauté de confiance": "Comunità di fiducia",
      "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.":
        "Unisciti a una comunità di professionisti verificati in cui qualità e rispetto sono le parole chiave.",
      "Visibilité accrue": "Maggiore visibilità",
      "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.":
        "Approfitta della nostra esperienza nel marketing digitale per apparire in cima ai risultati di ricerca locali.",
      "Réputation valorisée": "Reputazione valorizzata",
      "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.":
        "Raccogli recensioni autentiche che rafforzano la tua credibilità e attirano naturalmente nuovi clienti.",
      "Prêt à libérer votre potentiel ?":
        "Pronto a liberare il tuo potenziale?",
      "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.":
        "Unisciti alla piattaforma che trasforma il modo in cui professionisti e clienti collaborano.",
      "Rejoindre UpTaskers maintenant": "Unisciti a UpTaskers ora",
      "Tendances du mois": "Tendenze del mese",
      "Les catégories les plus utilisées": "Categorie più utilizzate",
      "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.":
        "Scopri i servizi più popolari questo mese e trova l'esperto ideale.",
      "Très demandé": "Molto richiesto",
      "Voir toutes les catégories": "Vedi tutte le categorie",
      "Des experts vérifiés": "Esperti verificati",
      "Des talents pour chaque besoin": "Talenti per ogni esigenza",
      "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.":
        "Sfoglia i profili dei nostri migliori professionisti e trova l'esperto ideale.",
      "Designer UX/UI": "Designer UX/UI",
      "Développeur Full-Stack": "Sviluppatore Full-Stack",
      "Rédactrice Web App": "Copywriter Web App",
      "Artisan Plombier": "Idraulico",
      "Assistante Virtuelle": "Assistente Virtuale",
      "Technicien IT": "Tecnico IT",
      avis: "recensioni",
      "Voir le profil": "Vedi profilo",
      "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.":
        "Già più di 10.000 clienti e 5.000 professionisti hanno fatto il grande passo! Con 25.000 missioni compiute e il 98% di soddisfazione, UpTaskers è il punto di riferimento essenziale per la vita di tutti i giorni.",
      "Découvrez nos services": "Scopri i nostri servizi",
      "Note moyenne basée sur": "Valutazione media basata su",
      "+12,000 avis certifiés": "+12.000 recensioni certificate",
      "Utilisateurs/mois": "Utenti/mese",
      Satisfaction: "Soddisfazione",
      "Rép. moyenne": "Risp. media",
      Missions: "Missioni",
      Maçonnerie: "Muratura",
      Carrelage: "Piastrellatura",
      "Montage vidéo": "Montaggio video",
      Programmation: "Programmazione",
      "Retour aux catégories": "Back to categories",
      "Experts en": "Experts in",
      "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :":
        "Find the best highly qualified and certified professionals to meet your most specific requirements in:",
      "Confiez-nous vos projets pour une réalisation d'excellence.":
        "Entrust us with your projects for an excellent execution.",
      "Qualité Supérieure": "Superior Quality",
      "L'élite des": "The elite of",
      "professionnels.": "professionals.",
      "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.":
        "We rigorously evaluate and select the best profiles on the market to ensure the success and excellence of your projects.",
      "Espace client": "Client Area",
      "Espace prestataire": "Provider Area",
      "Connectez-vous ou inscrivez-vous": "Log in or sign up",
      "Continuer avec Google": "Continue with Google",
      "Continuer avec Apple": "Continue with Apple",
      "Continuer avec un numéro de téléphone": "Continue with a phone number",
      "Adresse e-mail": "Email address",
      Continuer: "Continue",
      "Rejoignez la confiance.": "Join the trust.",
      "Sécurité garantie": "Guaranteed security",
      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.":
        "Secure payments, verified profiles, and responsive 7/7 customer support.",
      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.":
        "A transparent community where every review is based on a real service.",
      "Créer un compte": "Create an account",
      "Sélectionnez votre type de profil pour commencer":
        "Select your profile type to start",
      "Je cherche un professionnel": "I am looking for a professional",
      "Je propose mes services": "I offer my services",
      "Nom complet": "Full name",
      "Adresse email": "Email address",
      "Mot de passe": "Password",
      "J'accepte les": "I accept the",
      "et la": "and the",
      Support: "Supporto",
      "Download on the": "Download on the",
      "Disponible sur": "Available on",
      "Du lundi au dimanche": "Dal lunedì alla domenica",
      "Du lundi au dimanche, 24h/24": "Dal lunedì alla domenica, 24/7",
      "Le/La maçon(ne)": "The mason",
      "hero.desc.masonry":
        "Qualified craftsmen for all your construction, facade and landscaping work.",
      "Le/La coiffeur(euse)": "The hairdresser",
      "hero.desc.hairdress":
        "Call on our hairdressing experts for a custom cut, color or styling.",
      "L'organisateur(trice)": "The event organizer",
      "hero.desc.eventorg":
        "Entrust the planning of your weddings, parties and corporate events to our passionate experts.",
      "L'avocat(e) / juriste": "The lawyer / jurist",
      "hero.desc.law":
        "Secure your processes with our selection of competent lawyers and legal professionals.",
      "Découvrez notre objectif": "Scopri il nostro obiettivo",
      Notre: "La nostra",
      Mission: "Missione",
      "Connecter les besoins aux meilleures compétences":
        "Connettere i bisogni alle migliori competenze",
      "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.":
        "La nostra missione è facilitare lincontro tra le persone alla ricerca di servizi di qualità e i professionisti competenti in grado di rispondergli.",
      "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.":
        "In un mondo in cui a volte è difficile trovare il fornitore giusto o far conoscere le proprie competenze, la nostra piattaforma crea un ponte semplice, rapido e affidabile tra clienti e professionisti.",
      "Pourquoi existons-nous ?": "Perché esistiamo?",
      "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :":
        "Ogni giorno, migliaia di persone cercano soluzioni ai loro bisogni:",
      "Trouver un répétiteur pour accompagner un enfant.":
        "Trovare un tutor per accompagnare un bambino.",
      "Faire appel à un menuisier pour fabriquer un meuble.":
        "Chiamare un falegname per costruire un mobile.",
      "Recruter un développeur pour créer un site web.":
        "Reclutare un programmatore per creare un sito web.",
      "Trouver un électricien, un plombier ou un artisan qualifié.":
        "Trovare un elettricista, un idraulico o un artigiano qualificato.",
      "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.":
        "Ottenere laiuto di un professionista di fiducia per un progetto personale o professionale.",
      "Notre plateforme a été créée pour rendre ces recherches plus simple, plus rapidi e plus efficaci.":
        "La nostra piattaforma è stata creata per rendere queste ricerche più semplici, più rapide e più efficaci.",
      "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.":
        "La nostra piattaforma è stata creata per rendere queste ricerche più semplici, più rapide e più efficaci.",
      "Ce que nous apportons": "Cosa portiamo",
      "Pour les clients": "Per i clienti",
      "Nous permettons aux utilisateurs de :": "Consentiamo agli utenti di:",
      "Trouver facilement des professionnels qualifiés.":
        "Trovare facilmente professionisti qualificati.",
      "Comparer plusieurs prestataires.": "Confrontare più fornitori.",
      "Consulter les profils et les expériences.":
        "Consultare profili ed esperienze.",
      "Gagner du temps dans leurs recherches.":
        "Risparmiare tempo nelle loro ricerche.",
      "Réaliser leurs projets en toute confiance.":
        "Realizzare i loro progetti con fiducia.",
      "Pour les professionnels": "Per i professionisti",
      "Nous aidons les prestataires à :": "Aiutiamo i fornitori a:",
      "Mettre en valeur leurs compétences.": "Evidenziare le loro competenze.",
      "Développer leur visibilité.": "Sviluppare la loro visibilità.",
      "Trouver de nouveaux clients.": "Trovare nuovi clienti.",
      "Développer leur activité.": "Sviluppare la loro attività.",
      "Construire leur réputation professionnelle.":
        "Costruire la loro reputazione professionale.",
      "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.":
        "Desideriamo costruire una comunità in cui talento, know-how e professionalità siano riconosciuti e accessibili a tutti.",
      "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.":
        "Crediamo che collegando le competenze giuste ai bisogni giusti, contribuiamo a creare maggiori opportunità, fiducia e successo per tutti.",
      "Nos engagements": "I nostri impegni",
      "Qualité dans les services proposés.": "Qualità nei servizi offerti.",
      "Compétence des professionnels présents sur la plateforme.":
        "Competenza dei professionisti presenti sulla piattaforma.",
      "Professionnalisme dans chaque interaction.":
        "Professionalità in ogni interazione.",
      "Transparence et confiance entre les utilisateurs.":
        "Trasparenza e fiducia tra gli utenti.",
      "Innovation pour améliorer continuellement l'expérience.":
        "Innovazione per migliorare continuamente lesperienza.",
      "Notre Promesse": "La nostra Promessa",
      "Transformer chaque besoin en opportunité et chaque compétence en solution.":
        "Trasformare ogni bisogno in unopportunità e ogni competenza in una soluzione.",
      "Au service de vos besoins.": "Al servizio dei tuoi bisogni.",
      "Aide et assistance": "Aiuto e assistenza",
    },
  },
  PT: {
    translation: {
      "Bienvenue sur la page": "Bem-vindo à página",
      "Cette section de UpTaskers est actuellement en cours de développement.": "Esta seção do UpTaskers está atualmente em desenvolvimento.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Nossa plataforma está em contínua evolução para lhe oferecer a melhor experiência. Fique atento às atualizações enquanto construímos este recurso abrangente.",

      "Légal & Confidentialité": "Legal & Privacy",
      "Politique de Confidentialité": "Privacy Policy",
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le":
        "We are committed to protecting your privacy and ensuring the security of your data on the platform. Last updated on",
      Sommaire: "Summary",
      "Contactez notre équipe responsable de la vie privée :":
        "Contact our privacy team:",
      "Engagement de Confiance": "Commitment to Trust",
      "Votre Sécurité Avant Tout": "Your Security Above All",
      "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.":
        "UpTaskers has been designed to provide you with a safe and trusted environment. No compromise is made with your data and privacy, so you can develop your business and hire experts with peace of mind.",
      "Paiements Sécurisés": "Secure Payments",
      "Identités Vérifiées": "Verified Identities",
      "Confidentialité Protégée": "Privacy Protected",
      "1. Introduction": "1. Introduction",
      "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.":
        "UpTaskers is the leading platform for connecting qualified professionals and clients. This policy explains how we collect, use, and protect your personal information.",
      "2. Nature du Service": "2. Nature of the Service",
      "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.":
        "UpTaskers allows you to find, contact, and work with experts in multiple fields, ensuring secure payments and quality exchanges.",
      "3. Données Collectées": "3. Data Collected",
      "Nous pouvons recueillir les données suivantes :":
        "We may collect the following data:",
      "Informations de base (nom, prénom, adresse e-mail, téléphone)":
        "Basic information (last name, first name, email address, phone number)",
      "Documents d'identité (pour la vérification stricte des professionnels)":
        "Identity documents (for strict verification of professionals)",
      "Préférences utilisateur et paramètres de notification":
        "User preferences and notification settings",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)":
        "Payment data (processed and secured by our approved third-party providers)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme":
        "History of missions, messages, and reviews left on the platform",
      "4. Utilisation des Données": "4. Use of Data",
      "Les données collectées sont utilisées pour :":
        "The data collected is used to:",
      "Faciliter la mise en relation entre clients et prestataires":
        "Facilitate connections between clients and providers",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)":
        "Personalize your experience (refine expert search results)",
      "Garantir le bon déroulement et le suivi des missions":
        "Ensure the smooth running and tracking of missions",
      "Assurer la sécurité des accès et lutter contre la fraude":
        "Ensure access security and fight fraud",
      "5. Sécurité": "5. Security",
      "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :":
        "We take the security of your data very seriously. Measures in place:",
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés":
        "Your personal data is stored on highly secure servers",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)":
        "Financial transactions (payment) are end-to-end encrypted (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers":
        "Secure authentication to protect access to your UpTaskers account",
      "6. Partage des Données": "6. Data Sharing",
      "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :":
        "We never sell your personal data. It may be shared in the following strictly necessary cases:",
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission":
        "Strictly required information is exchanged between the client and the provider upon confirming a mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement":
        "With our payment partners to validate escrow and payout",
      "Afin de se conformer à des obligations légales en vigueur":
        "In order to comply with applicable legal obligations",
      "7. Vos Droits": "7. Your Rights",
      "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :":
        "As a UpTaskers user, you have the following rights (in accordance with Ivorian data protection law):",
      "Accéder à vos données et en demander la copie":
        "Access your data and request a copy",
      "Rectifier ou mettre à jour vos informations inexactes":
        "Rectify or update your inaccurate information",
      "Demander la suppression de votre profil, historique et compte":
        "Request the deletion of your profile, history, and account",
      "Vous opposer à recevoir nos newsletters et alertes de mission":
        "Object to receiving our newsletters and mission alerts",
      "8. Contact": "8. Contact",
      "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :":
        "For any information request or to exercise your rights regarding your data, you can contact us:",
      "Mentions Légales": "Legal Notices",
      Hébergement: "Hosting",
      "Le site est hébergé par Firebase.":
        "The site is hosted by Firebase.",
      "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.":
        "Data is hosted in secure data centers, in compliance with Ivorian data protection law.",
      "Propriété Intellectuelle": "Intellectual Property",
      "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de":
        "The general structure of the site, as well as the texts, animated or non-animated images, and all elements making up the site are the exclusive property of",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.":
        "Any total or partial representation of this site by any means whatsoever, without the express permission of the website operator, is prohibited.",
      Responsabilité: "Responsibility",
      "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.":
        "is a matchmaking platform between clients and service providers. UpTaskers acts solely as a technical intermediary and does not carry out the services offered on the platform. Consequently, UpTaskers cannot be held responsible for the quality, execution, or non-execution of the services provided by the service providers.",

      "Dernière mise à jour : 4 Juin 2026": "Last updated: June 4, 2026",
      "Acceptation des Conditions": "Acceptance of Terms",
      "En accédant ou en utilisant": "By accessing or using",
      "la Plateforme": "the Platform",
      "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.":
        "you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you are not authorized to access the Service.",
      "Description du Service": "Description of the Service",
      "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.":
        "acts as a connection platform between independent service providers and clients looking for professional services. We do not directly provide the services offered by the providers.",
      "Vérification et Avis": "Verification and Reviews",
      "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,":
        "Although we implement an identity verification process for providers and offer an authentic review system,",
      "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.":
        "does not guarantee the specific quality of the work performed by providers. Transactions and agreements are made directly between the client and the provider.",
      "Comptes Utilisateurs": "User Accounts",
      "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.":
        "When you create an account on our platform, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of your account.",
      Résiliation: "Termination",
      "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.":
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use or engage in inappropriate behavior on the platform.",
      Modifications: "Modifications",
      "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.":
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any material changes to these Terms of Use.",

      "Notre mission": "Nossa Missão",
      Abonnements: "Assinaturas",
      "Rechercher...": "Procurar...",
      Langue: "Idioma",
      "Le professionnel": "O profissional",
      "qu'il vous faut.": "que você precisa.",
      "L'expertise": "Especialidade",
      "digitale.": "digital.",
      "Des artisans": "Artesãos",
      "qualifiés.": "qualificados.",
      Apprenez: "Aprenda",
      "sans limite.": "sem limites.",
      "Prenez soin de": "Cuide de",
      "vous.": "você.",
      "Trouver un prestataire": "Encontrar fornecedor",
      "Se connecter": "Conecte-se",
      "Connectez-vous avec": "Conecte-se com",
      "l'excellence.": "a excelência.",
      "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.":
        "Nossa plataforma revoluciona a conexão entre profissionais e clientes. Se você precisa de um especialista para uma missão única ou está procurando desenvolver sua clientela, o UpTaskers cria um ambiente de confiança.",
      Commencer: "Começar",
      "Une mise en relation rapide et simplifiée.":
        "Uma conexão rápida e simplificada.",
      "Des profils vérifiés et des avis authentiques.":
        "Perfis verificados e avaliações autênticas.",
      "Un espace de collaboration sécurisé pour tous.":
        "Um espaço de colaboração seguro para todos.",
      "Maximisez votre impact": "Maximize seu impacto",
      "Outils pour réussir": "Ferramentas para o sucesso",
      "Nous sommes là pour vous aider": "Estamos aqui para ajudá-lo",
      "S'inscrire": "Inscrever-se",
      Conçu: "Projetado",
      "pour exceller.": "para se destacar.",
      "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.":
        "A vocação do UpTaskers é simples: economizar seu tempo oferecendo acesso instantâneo aos melhores talentos da sua região.",
      "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.":
        "Combinamos a eficiência de uma plataforma moderna com a experiência de profissionais verificados, para que cada serviço prestado seja uma experiência perfeitamente fluida.",
      "Réseau Fiable": "Rede Confiável",
      "Des talents": "Talentos",
      "certifiés.": "certificados.",
      "Profils vérifiés": "Perfis verificados",
      "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.":
        "Cada fornecedor no UpTaskers passa por um processo minucioso de verificação de identidade para garantir sua segurança.",
      "Avis authentiques": "Avaliações autênticas",
      "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.":
        "Leia comentários reais. Apenas os clientes que usaram os serviços podem deixar uma avaliação.",
      "Support dédié 24/7": "Suporte dedicado 24/7",
      "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.":
        "Nossa equipe está disponível para orientá-lo e resolver qualquer problema encontrado na plataforma.",
      "L'expertise dans": "Especialização no",
      "votre poche.": "seu bolso.",
      "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.":
        "Baixe nosso aplicativo móvel gratuito para encontrar um fornecedor, gerenciar suas solicitações e se comunicar facilmente de onde você estiver.",
      "Le/La coach sportif(ve)": "O(a) treinador(a) esportivo(a)",
      "L'agent(e) de sécurité": "O agente de segurança",
      "Le/La traducteur(trice)": "O(a) tradutor(a)",
      "Le/La menuisier(ère)": "O(a) carpinteiro(a)",
      "Le/La décorateur(trice)": "O(a) decorador(a)",
      "Le/La mécanicien(ne)": "O(a) mecânico(a)",
      "Le/La jardinier(ère)": "O(a) jardineiro(a)",
      "Le/La cuisinier(ère)": "O(a) cozinheiro(a)",
      "Le/La professionnel(le)": "O profissional",
      "L'informaticien(ne)": "O(a) informático(a)",
      "L'artisan(e)": "O(a) artesão(ã)",
      "Le/La photographe": "O fotógrafo(a)",
      "Le/La chauffeur(e)": "O motorista",
      "Le/La déménageur(euse)": "O movedor(a)",
      "Le/La professeur(e)": "O professor(a)",
      "L'agent immobilier": "O agente imobiliário",
      "hero.desc.sport":
        "Alcance seus objetivos físicos com orientação personalizada de nossos treinadores apaixonados.",
      "hero.desc.security":
        "Garanta a segurança de sua propriedade e eventos com profissionais treinados e qualificados.",
      "hero.desc.translator":
        "Facilite seus intercâmbios internacionais com nossos especialistas em tradução e interpretação.",
      "hero.desc.carpenter":
        "Artesãos qualificados para todo o seu trabalho de carpintaria, da fabricação à renovação.",
      "hero.desc.decorator":
        "Aprimore seu interior com a experiência de nossos apaixonados decoradores de interiores.",
      "hero.desc.mechanic":
        "Repare e faça a manutenção do seu veículo com os nossos especialistas em mecânica automóvel.",
      "hero.desc.garden":
        "Transforme e mantenha os seus espaços verdes com a experiência dos nossos apaixonados jardineiros e paisagistas.",
      "hero.desc.cooking":
        "Mime-se com um momento gastronômico com chefs talentosos, da preparação de refeições a eventos privados.",
      "hero.desc.services":
        "Encontre os melhores especialistas para o seu trabalho diário, cuidadosamente selecionados e prontos para intervir rapidamente.",
      "hero.desc.tech":
        "Desenvolvedores, designers e profissionais de marketing talentosos para impulsionar seus projetos digitais para novos patamares.",
      "hero.desc.repair":
        "Um know-how reconhecido para todas as suas renovações e reparações, com profissionais de confiança ao seu lado.",
      "hero.desc.photo":
        "Capture seus eventos preciosos com a expertise dos nossos fotógrafos profissionais prontos a sublimar cada momento.",
      "hero.desc.transport":
        "Desloque-se de forma fácil e segura com os nossos motoristas profissionais qualificados.",
      "hero.desc.moving":
        "Mude com tranquilidade com nossos especialistas de transporte, eficientes e cuidadosos.",
      "hero.desc.education":
        "Desenvolva novas valências com os nossos professores apaixonados, de forma online ou em casa, de acordo com as tuas necessidades.",
      "hero.desc.realestate":
        "Encontre o especialista imobiliário ideal para o apoiar em todos os seus projetos de compra, venda ou arrendamento.",
      Éducation: "Educação",
      Artisanat: "Artesanato",
      Informatique: "Informática",
      Réparation: "Reparação",
      Beauté: "Beleza",
      Transport: "Transporte",
      "Bien-être": "Bem-estar",
      Événementiel: "Eventos",
      Déménagement: "Mudança",
      Nettoyage: "Limpeza",
      Bricolage: "Bricolage",
      Photographie: "Fotografia",
      Architecture: "Arquitetura",
      Jardinage: "Jardinagem",
      Menuiserie: "Carpintaria",
      Décoration: "Decoração",
      Mécanique: "Mecânica",
      "Soutien scolaire": "Apoio escolar",
      Rédaction: "Redação",
      Vidéo: "Vídeo",
      Sécurité: "Segurança",
      Plomberie: "Canalização",
      Électricité: "Eletricidade",
      Design: "Design",
      Marketing: "Marketing",
      Traduction: "Tradução",
      Coaching: "Coaching",
      "Garde d'enfants": "Babá",
      Musique: "Música",
      Comptabilité: "Contabilidade",
      Droit: "Direito",
      Cuisine: "Cozinha",
      Sport: "Esporte",
      Coiffure: "Cabeleireiro",
      "Garde d'animaux": "Cuidador de animais",
      Massage: "Massagem",
      "Personal Shopper": "Personal Shopper",
      "Organisation d'événements": "Organização de eventos",
      Maquillage: "Maquiagem",
      Esthétique: "Estética",
      "Aide à domicile": "Assistência domiciliar",
      Serrurerie: "Chaveiro",
      Peinture: "Pintura",
      Vétérinaire: "Veterinário",
      "Agent immobilier": "Agente imobiliário",
      "Journal UpTaskers": "Jornal UpTaskers",
      "Guides, astuces et conseils pour clients et professionnels":
        "Guias, dicas e conselhos para clientes e profissionais",
      "Lire la suite": "Ler mais",
      "Les catégories les plus utilisées dans le mois":
        "Categorias mais utilizadas do mês",
      "Les services qui génèrent le plus d'opportunités ce mois-ci.":
        "Os serviços que geram mais oportunidades este mês.",
      "Découvrir nos services": "Descubra os nossos serviços",
      "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.":
        "Descubra as tendências atuais e as áreas mais procuradas pelos nossos clientes para otimizar o seu perfil e aproveitar novas oportunidades.",
      "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.":
        "A UpTaskers facilita o encontro entre clientes e profissionais qualificados para colaborações simples, rápidas e eficazes.",
      "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.":
        "Seja você uma empresa em busca de uma experiência específica ou um indivíduo que precisa de uma mão, nossa plataforma conecta você aos melhores talentos locais.",
      "Avis des utilisateurs et statistiques":
        "Avaliações de usuários e estatísticas",
      "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.":
        "Descubra o que nossa comunidade pensa da UpTaskers e junte-se aos nossos milhares de usuários ativos.",
      "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.":
        "Com mais de 10.000 usuários e 5.000 profissionais inscritos, a UpTaskers tem o orgulho de manter uma taxa de satisfação de 98% em mais de 25.000 missões concluídas.",
      "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.":
        "Cada freelance é selecionado com extrema precisão, garantindo o máximo nível de experiência e integração perfeita em suas equipes.",
      "Objectif 2030": "Objetivo 2030",
      "Devenir le leader mondial de la mise en relation de services.":
        "Tornar-se líder mundial na conexão de serviços.",
      "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.":
        "Nossa visão é construir uma infraestrutura global para conectar cada talento a uma oportunidade, estimulando a inovação, a confiabilidade financeira e a independência para milhões de prestadores internacionalmente.",
      "Notre QG": "Nosso QG",
      "Côte d'Ivoire": "Costa do Marfim",
      PLATEFORME: "PLATAFORMA",
      CONFIANCE: "CONFIANÇA",
      ENTREPRISE: "EMPRESA",
      LÉGAL: "LEGAL",
      Accueil: "Início",
      "Explorez nos catégories": "Explore nossas categorias",
      Avantages: "Vantagens",
      Ressources: "Recursos",
      "Avis clients": "Avaliações de clientes",
      "Vérification des profils": "Verificação de perfis",
      "Garantie UpTaskers": "Garantia UpTaskers",
      "À propos de UpTaskers": "Sobre a UpTaskers",
      "Nous contacter": "Contate-nos",
      "Support client": "Suporte ao cliente",
      "Conditions d'utilisation": "Termos de uso",
      "Politique de confidentialité": "Política de privacidade",
      "Mentions légales": "Avisos legais",
      "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.":
        "é a plataforma líder para encontrar prestadores de serviços verificados e qualificados.",
      "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.":
        "A confiança dos nossos usuários é nossa prioridade. Todos os profissionais de nossa rede são avaliados e suas informações são documentadas para sua segurança.",
      "100% de profils vérifiés": "Perfis 100% verificados",
      "Applications Mobiles": "Aplicativos Móveis",
      "Suivez-nous": "Siga-nos",
      "Tous droits réservés.": "Todos os direitos reservados.",
      "12 Avril 2026": "12 de abril de 2026",
      "8 Mars 2026": "8 de março de 2026",
      "20 Mai 2026": "20 de maio de 2026",
      "Contactez-nous": "Contate-nos",
      "Nous sommes là pour": "Estamos aqui para",
      "vous aider.": "te ajudar.",
      "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.":
        "Uma pergunta, precisa de assistência ou simplesmente quer nos dar um feedback? Nossa equipe está à sua disposição.",
      "Informations de contact": "Info de contato",
      Email: "Email",
      "Pour toute demande générale": "Para qualquer consulta geral",
      Téléphone: "Telefone",
      "Du lundi au vendredi, de 9h à 18h": "De segunda a sexta, das 9h às 18h",
      Adresse: "Endereço",
      Plateau: "Plateau",
      "Abidjan, Côte d'Ivoire": "Abidjã, Costa do Marfim",
      "Téléchargez notre application": "Baixe nosso app",
      "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.":
        "Leve o UpTaskers com você para qualquer lugar. Gerencie seus projetos, converse com profissionais e acompanhe o andamento de suas solicitações no seu celular.",
      "Centre de ressources": "Centro de recursos",
      "Outils et guides pour": "Ferramentas e guias para",
      "réussir.": "ter sucesso.",
      "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.":
        "Conteúdo exclusivo criado por nossos especialistas para apoiar seus projetos, seja você um cliente exigente ou um profissional ambicioso.",
      "Espace Clients": "Área do Cliente",
      "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.":
        "Dê vida às suas ideias com tranquilidade. Nossos guias ajudam você a tomar as melhores decisões em cada etapa do seu projeto.",
      "Comment bien définir votre projet ?": "Como definir bem o seu projeto?",
      "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.":
        "Aprenda a escrever um caderno de encargos claro para obter os melhores orçamentos.",
      "Choisir le prestataire idéal": "Escolha o provedor ideal",
      "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.":
        "Os critérios essenciais para selecionar o profissional adequado a sua necessidade.",
      "Guide des tarifs 2024": "Guia de preços de 2024",
      "Découvrez les prix moyens du marché pour budgétiser vos travaux.":
        "Descubra os preços médios do mercado para orçamentar suas obras.",
      "Espace Prestataires": "Área do Provedor",
      "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.":
        "Impulsione a sua atividade e otimize a sua gestão. Descubra as nossas melhores práticas para se destacar na plataforma.",
      "Optimiser votre vitrine": "Otimizar sua vitrine",
      "Conseils pratiques pour rendre votre profil plus attractif pour les clients.":
        "Conselhos práticos para tornar o seu perfil mais atrativo para os clientes.",
      "Réussir son premier contact": "Sucesso no primeiro contato",
      "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.":
        "Como responder efetivamente às solicitações para maximizar suas chances de assinar.",
      "Obtenir plus d'avis positifs": "Obtenha mais avaliações positivas",
      "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.":
        "As melhores estratégias para fidelizar clientes e desenvolver a sua e-reputação.",
      "Formations Vidéo": "Treinamentos em Vídeo",
      "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.":
        "Aprenda a dominar todos os recursos do UpTaskers em minutos, graças aos nossos tutoriais interativos.",
      "Voir les tutoriels": "Ver os tutoriais",
      "Formation vidéo": "Treinamento em vídeo",
      "À propos de nous": "Sobre nós",
      "Découvrez UpTaskers": "Descubra a UpTaskers",
      "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.":
        "Bem-vindo ao UpTaskers, uma plataforma dedicada a conectar indivíduos, empresas e profissionais qualificados.",
      "Qui sommes-nous ?": "Quem somos?",
      "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.":
        "A nossa missão é simples: permitir que todos encontrem rapidamente prestadores de serviços competentes e de confiança para satisfazer as suas necessidades, ao mesmo tempo que oferecemos aos profissionais a oportunidade de desenvolver os seus negócios e ganhar visibilidade.",
      "Notre Vision": "Nossa Visão",
      "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.":
        "Acreditamos que cada habilidade merece ser valorizada e que cada necessidade merece uma solução adequada.",
      "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.":
        "A nossa ambição é criar um ecossistema onde clientes e prestadores de serviços possam colaborar facilmente, com confiança e num ambiente seguro.",
      "Ce que nous proposons": "O que oferecemos",
      "Pour les utilisateurs :": "Para usuários:",
      "Rechercher des professionnels qualifiés.":
        "Procure por profissionais qualificados.",
      "Publier leurs besoins et recevoir des propositions.":
        "Publique suas necessidades e receba propostas.",
      "Comparer les profils, expériences et avis.":
        "Compare perfis, experiências e avaliações.",
      "Contacter directement les prestataires.":
        "Entre em contato diretamente com os provedores.",
      "Trouver rapidement des solutions adaptées à leurs projets.":
        "Encontre rapidamente soluções adaptadas aos seus projetos.",
      "Pour les professionnels :": "Para profissionais:",
      "Créer un profil détaillé.": "Crie um perfil detalhado.",
      "Présenter leurs compétences et réalisations.":
        "Apresente suas habilidades e conquistas.",
      "Développer leur clientèle.": "Desenvolver a sua clientela.",
      "Recevoir des demandes de services.": "Receber solicitações de serviço.",
      "Valoriser leur expertise auprès d'un large public.":
        "Mostrar sua especialização para um grande público.",
      "Nos Valeurs": "Nossos Valores",
      "Qualité :": "Qualidade:",
      "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.":
        "Incentivamos a excelência em cada serviço realizado em nossa plataforma.",
      "Compétence :": "Competência:",
      "Nous mettons en avant les talents et le savoir-faire des professionnels.":
        "Destacamos os talentos e conhecimentos dos profissionais.",
      "Professionnalisme :": "Profissionalismo:",
      "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.":
        "Promovemos relações sérias, respeitosas e transparentes entre todos os usuários.",
      "Confiance :": "Confiança:",
      "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.":
        "Trabalhamos continuamente para oferecer um ambiente confiável e seguro.",
      "Pourquoi nous choisir ?": "Por que nos escolher?",
      "Une plateforme simple et intuitive.":
        "Uma plataforma simples e intuitiva.",
      "Des professionnels qualifiés.": "Profissionais qualificados.",
      "Une mise en relation rapide.": "Conexão rápida.",
      "Un accompagnement orienté vers la satisfaction des utilisateurs.":
        "Apoio orientado para a satisfação dos utilizadores.",
      "Un engagement constant en faveur de la qualité des services.":
        "Um compromisso constante com a qualidade do serviço.",
      "Notre engagement": "Nosso compromisso",
      "Au service de vos besoins": "A serviço das suas necessidades",
      "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.":
        "Comprometemo-nos a melhorar continuamente a nossa plataforma para oferecer a melhor experiência possível aos nossos utilizadores. Quer procure um profissional ou queira propor os seus serviços, estamos aqui para o acompanhar na realização dos seus projetos.",
      "Qualité • Compétence • Professionnalisme":
        "Qualidade • Competência • Profissionalismo",
      "Retour à l'accueil": "Voltar para Início",
      "Toutes nos catégories": "Todas as nossas categorias",
      "Explorez nos": "Explore nossas",
      catégories: "categorias",
      "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.":
        "Descubra a diversidade dos nossos profissionais e encontre o especialista ideal para o seu projeto entre as nossas diversas categorias.",
      "Rechercher une catégorie...": "Procurar uma categoria...",
      "Aucune catégorie trouvée pour": "Nenhuma categoria encontrada para",
      "Avantages Exclusifs": "Benefícios Exclusivos",
      "Maximisez votre ": "Maximize o seu ",
      "impact.": "impacto.",
      "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.":
        "Quer seja um profissional a procurar desenvolver a sua clientela ou um particular à procura de especialistas de confiança, a UpTaskers oferece-lhe as melhores ferramentas para ter sucesso.",
      "Développez votre activité": "Desenvolva o seu negócio",
      "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.":
        "Aceda a uma grande base de clientes qualificados e aumente o seu volume de negócios sem esforço de prospeção.",
      "Paiements sécurisés": "Pagamentos seguros",
      "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.":
        "Aproveite um sistema de pagamento 100% seguro. Tenha a certeza de que será pago rapidamente e com total tranquilidade.",
      "Gestion simplifiée": "Gestão simplificada",
      "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.":
        "Faça a gestão das suas marcações, dos seus orçamentos e das suas faturas diretamente a partir do seu painel de controlo intuitivo.",
      "Communauté de confiance": "Comunidade de confiança",
      "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.":
        "Junte-se a uma comunidade de profissionais verificados onde a qualidade e o respeito são as palavras-chave.",
      "Visibilité accrue": "Maior visibilidade",
      "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.":
        "Aproveite a nossa experiência em marketing digital para aparecer no topo dos resultados de pesquisa locais.",
      "Réputation valorisée": "Reputação valorizada",
      "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.":
        "Recolha avaliações autênticas que fortalecem a sua credibilidade e atraem naturalmente novos clientes.",
      "Prêt à libérer votre potentiel ?":
        "Pronto para libertar o seu potencial?",
      "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.":
        "Junte-se à plataforma que transforma a forma como profissionais e clientes colaboram.",
      "Rejoindre UpTaskers maintenant": "Junte-se à UpTaskers agora",
      "Tendances du mois": "Tendências do mês",
      "Les catégories les plus utilisées": "Categorias mais utilizadas",
      "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.":
        "Descubra os serviços mais populares este mês e encontre o especialista ideal.",
      "Très demandé": "Muito procurado",
      "Voir toutes les catégories": "Ver todas as categorias",
      "Des experts vérifiés": "Especialistas verificados",
      "Des talents pour chaque besoin": "Talentos para cada necessidade",
      "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.":
        "Navegue pelos perfis dos nossos melhores profissionais e encontre o especialista ideal.",
      "Designer UX/UI": "Designer UX/UI",
      "Développeur Full-Stack": "Desenvolvedor Full-Stack",
      "Rédactrice Web App": "Redatora de Web App",
      "Artisan Plombier": "Encanador",
      "Assistante Virtuelle": "Assistente Virtual",
      "Technicien IT": "Técnico de TI",
      avis: "avaliações",
      "Voir le profil": "Ver perfil",
      "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.":
        "Já mais de 10.000 clientes e 5.000 profissionais deram o salto! Com 25.000 missões de sucesso e 98% de satisfação, a UpTaskers é a referência incontornável do seu quotidiano.",
      "Découvrez nos services": "Descubra nossos serviços",
      "Note moyenne basée sur": "Classificação média baseada em",
      "+12,000 avis certifiés": "+12.000 avaliações certificadas",
      "Utilisateurs/mois": "Usuários/mês",
      Satisfaction: "Satisfação",
      "Rép. moyenne": "Resta. média",
      Missions: "Missões",
      Maçonnerie: "Alvenaria",
      Carrelage: "Azulejaria",
      "Montage vidéo": "Edição de vídeo",
      Programmation: "Programação",
      "Retour aux catégories": "Back to categories",
      "Experts en": "Experts in",
      "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :":
        "Find the best highly qualified and certified professionals to meet your most specific requirements in:",
      "Confiez-nous vos projets pour une réalisation d'excellence.":
        "Entrust us with your projects for an excellent execution.",
      "Qualité Supérieure": "Superior Quality",
      "L'élite des": "The elite of",
      "professionnels.": "professionals.",
      "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.":
        "We rigorously evaluate and select the best profiles on the market to ensure the success and excellence of your projects.",
      "Espace client": "Client Area",
      "Espace prestataire": "Provider Area",
      "Connectez-vous ou inscrivez-vous": "Log in or sign up",
      "Continuer avec Google": "Continue with Google",
      "Continuer avec Apple": "Continue with Apple",
      "Continuer avec un numéro de téléphone": "Continue with a phone number",
      "Adresse e-mail": "Email address",
      Continuer: "Continue",
      "Rejoignez la confiance.": "Join the trust.",
      "Sécurité garantie": "Guaranteed security",
      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.":
        "Secure payments, verified profiles, and responsive 7/7 customer support.",
      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.":
        "A transparent community where every review is based on a real service.",
      "Créer un compte": "Create an account",
      "Sélectionnez votre type de profil pour commencer":
        "Select your profile type to start",
      "Je cherche un professionnel": "I am looking for a professional",
      "Je propose mes services": "I offer my services",
      "Nom complet": "Full name",
      "Adresse email": "Email address",
      "Mot de passe": "Password",
      "J'accepte les": "I accept the",
      "et la": "and the",
      Support: "Suporte",
      "Download on the": "Download on the",
      "Disponible sur": "Available on",
      "Du lundi au dimanche": "De segunda a domingo",
      "Du lundi au dimanche, 24h/24": "De segunda a domingo, 24/7",
      "Le/La maçon(ne)": "The mason",
      "hero.desc.masonry":
        "Qualified craftsmen for all your construction, facade and landscaping work.",
      "Le/La coiffeur(euse)": "The hairdresser",
      "hero.desc.hairdress":
        "Call on our hairdressing experts for a custom cut, color or styling.",
      "L'organisateur(trice)": "The event organizer",
      "hero.desc.eventorg":
        "Entrust the planning of your weddings, parties and corporate events to our passionate experts.",
      "L'avocat(e) / juriste": "The lawyer / jurist",
      "hero.desc.law":
        "Secure your processes with our selection of competent lawyers and legal professionals.",
      "Découvrez notre objectif": "Descubra o nosso objetivo",
      Notre: "Nossa",
      Mission: "Missão",
      "Connecter les besoins aux meilleures compétences":
        "Conectando necessidades às melhores habilidades",
      "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.":
        "Nossa missão é facilitar o encontro entre pessoas que buscam serviços de qualidade e os profissionais competentes capazes de respondê-las.",
      "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.":
        "Em um mundo onde às vezes é difícil encontrar o fornecedor certo ou divulgar suas habilidades, nossa plataforma cria uma ponte simples, rápida e confiável entre clientes e profissionais.",
      "Pourquoi existons-nous ?": "Por que existimos?",
      "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :":
        "Todos os dias, milhares de pessoas buscam soluções para suas necessidades:",
      "Trouver un répétiteur pour accompagner un enfant.":
        "Encontrar um tutor para acompanhar uma criança.",
      "Faire appel à un menuisier pour fabriquer un meuble.":
        "Chamar um carpinteiro para construir um móvel.",
      "Recruter un développeur pour créer un site web.":
        "Recrutar um desenvolvedor para criar um site.",
      "Trouver un électricien, un plombier ou un artisan qualifié.":
        "Encontrar um eletricista, encanador ou artesão qualificado.",
      "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.":
        "Obter a ajuda de um profissional de confiança para um projeto pessoal ou profissional.",
      "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.":
        "Nossa plataforma foi criada para tornar essas buscas mais simples, rápidas e eficientes.",
      "Ce que nous apportons": "O que trazemos",
      "Pour les clients": "Para os clientes",
      "Nous permettons aux utilisateurs de :": "Permitimos que os usuários:",
      "Trouver facilement des professionnels qualifiés.":
        "Encontrem facilmente profissionais qualificados.",
      "Comparer plusieurs prestataires.": "Comparem vários fornecedores.",
      "Consulter les profils et les expériences.":
        "Consultem perfis e experiências.",
      "Gagner du temps dans leurs recherches.":
        "Economizem tempo em suas pesquisas.",
      "Réaliser leurs projets en toute confiance.":
        "Realizem seus projetos com confiança.",
      "Pour les professionnels": "Para os profissionais",
      "Nous aidons les prestataires à :": "Ajudamos os fornecedores a:",
      "Mettre en valeur leurs compétences.": "Destacar suas habilidades.",
      "Développer leur visibilité.": "Desenvolver sua visibilidade.",
      "Trouver de nouveaux clients.": "Encontrar novos clientes.",
      "Développer leur activité.": "Desenvolver o seu negócio.",
      "Construire leur réputation professionnelle.":
        "Construir sua reputação profissional.",
      "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.":
        "Queremos construir uma comunidade onde talento, know-how e profissionalismo sejam reconhecidos e acessíveis a todos.",
      "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.":
        "Acreditamos que conectando as habilidades certas às necessidades certas, ajudamos a criar mais oportunidades, confiança e sucesso para todos.",
      "Nos engagements": "Nossos compromissos",
      "Qualité dans les services proposés.":
        "Qualidade nos serviços prestados.",
      "Compétence des professionnels présents sur la plateforme.":
        "Competência dos profissionais presentes na plataforma.",
      "Professionnalisme dans chaque interaction.":
        "Profissionalismo em cada interação.",
      "Transparence et confiance entre les utilisateurs.":
        "Transparência e confiança entre os usuários.",
      "Innovation pour améliorer continuellement l'expérience.":
        "Inovação para melhorar continuamente a experiência.",
      "Notre Promesse": "Nossa Promessa",
      "Transformer chaque besoin en opportunité et chaque compétence en solution.":
        "Transformar cada necessidade em uma oportunidade e cada habilidade em uma solução.",
      "Au service de vos besoins.": "A serviço de suas necessidades.",
      "Aide et assistance": "Ajuda e assistência",
    },
  },
  AR: {
    translation: {
      "Bienvenue sur la page": "مرحبًا بك في صفحة",
      "Cette section de UpTaskers est actuellement en cours de développement.": "هذا القسم من UpTaskers قيد التطوير حاليًا.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "تتطور منصتنا باستمرار لتزويدك بأفضل تجربة. ابق على اطلاع بالتحديثات بينما نقوم ببناء هذا المورد الشامل.",

      "Légal & Confidentialité": "Legal & Privacy",
      "Politique de Confidentialité": "Privacy Policy",
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le":
        "We are committed to protecting your privacy and ensuring the security of your data on the platform. Last updated on",
      Sommaire: "Summary",
      "Contactez notre équipe responsable de la vie privée :":
        "Contact our privacy team:",
      "Engagement de Confiance": "Commitment to Trust",
      "Votre Sécurité Avant Tout": "Your Security Above All",
      "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.":
        "UpTaskers has been designed to provide you with a safe and trusted environment. No compromise is made with your data and privacy, so you can develop your business and hire experts with peace of mind.",
      "Paiements Sécurisés": "Secure Payments",
      "Identités Vérifiées": "Verified Identities",
      "Confidentialité Protégée": "Privacy Protected",
      "1. Introduction": "1. Introduction",
      "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.":
        "UpTaskers is the leading platform for connecting qualified professionals and clients. This policy explains how we collect, use, and protect your personal information.",
      "2. Nature du Service": "2. Nature of the Service",
      "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.":
        "UpTaskers allows you to find, contact, and work with experts in multiple fields, ensuring secure payments and quality exchanges.",
      "3. Données Collectées": "3. Data Collected",
      "Nous pouvons recueillir les données suivantes :":
        "We may collect the following data:",
      "Informations de base (nom, prénom, adresse e-mail, téléphone)":
        "Basic information (last name, first name, email address, phone number)",
      "Documents d'identité (pour la vérification stricte des professionnels)":
        "Identity documents (for strict verification of professionals)",
      "Préférences utilisateur et paramètres de notification":
        "User preferences and notification settings",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)":
        "Payment data (processed and secured by our approved third-party providers)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme":
        "History of missions, messages, and reviews left on the platform",
      "4. Utilisation des Données": "4. Use of Data",
      "Les données collectées sont utilisées pour :":
        "The data collected is used to:",
      "Faciliter la mise en relation entre clients et prestataires":
        "Facilitate connections between clients and providers",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)":
        "Personalize your experience (refine expert search results)",
      "Garantir le bon déroulement et le suivi des missions":
        "Ensure the smooth running and tracking of missions",
      "Assurer la sécurité des accès et lutter contre la fraude":
        "Ensure access security and fight fraud",
      "5. Sécurité": "5. Security",
      "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :":
        "We take the security of your data very seriously. Measures in place:",
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés":
        "Your personal data is stored on highly secure servers",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)":
        "Financial transactions (payment) are end-to-end encrypted (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers":
        "Secure authentication to protect access to your UpTaskers account",
      "6. Partage des Données": "6. Data Sharing",
      "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :":
        "We never sell your personal data. It may be shared in the following strictly necessary cases:",
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission":
        "Strictly required information is exchanged between the client and the provider upon confirming a mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement":
        "With our payment partners to validate escrow and payout",
      "Afin de se conformer à des obligations légales en vigueur":
        "In order to comply with applicable legal obligations",
      "7. Vos Droits": "7. Your Rights",
      "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :":
        "As a UpTaskers user, you have the following rights (in accordance with Ivorian data protection law):",
      "Accéder à vos données et en demander la copie":
        "Access your data and request a copy",
      "Rectifier ou mettre à jour vos informations inexactes":
        "Rectify or update your inaccurate information",
      "Demander la suppression de votre profil, historique et compte":
        "Request the deletion of your profile, history, and account",
      "Vous opposer à recevoir nos newsletters et alertes de mission":
        "Object to receiving our newsletters and mission alerts",
      "8. Contact": "8. Contact",
      "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :":
        "For any information request or to exercise your rights regarding your data, you can contact us:",
      "Mentions Légales": "Legal Notices",
      Hébergement: "Hosting",
      "Le site est hébergé par Firebase.":
        "The site is hosted by Firebase.",
      "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.":
        "Data is hosted in secure data centers, in compliance with Ivorian data protection law.",
      "Propriété Intellectuelle": "Intellectual Property",
      "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de":
        "The general structure of the site, as well as the texts, animated or non-animated images, and all elements making up the site are the exclusive property of",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.":
        "Any total or partial representation of this site by any means whatsoever, without the express permission of the website operator, is prohibited.",
      Responsabilité: "Responsibility",
      "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.":
        "is a matchmaking platform between clients and service providers. UpTaskers acts solely as a technical intermediary and does not carry out the services offered on the platform. Consequently, UpTaskers cannot be held responsible for the quality, execution, or non-execution of the services provided by the service providers.",

      "Dernière mise à jour : 4 Juin 2026": "Last updated: June 4, 2026",
      "Acceptation des Conditions": "Acceptance of Terms",
      "En accédant ou en utilisant": "By accessing or using",
      "la Plateforme": "the Platform",
      "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.":
        "you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you are not authorized to access the Service.",
      "Description du Service": "Description of the Service",
      "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.":
        "acts as a connection platform between independent service providers and clients looking for professional services. We do not directly provide the services offered by the providers.",
      "Vérification et Avis": "Verification and Reviews",
      "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,":
        "Although we implement an identity verification process for providers and offer an authentic review system,",
      "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.":
        "does not guarantee the specific quality of the work performed by providers. Transactions and agreements are made directly between the client and the provider.",
      "Comptes Utilisateurs": "User Accounts",
      "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.":
        "When you create an account on our platform, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of your account.",
      Résiliation: "Termination",
      "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.":
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use or engage in inappropriate behavior on the platform.",
      Modifications: "Modifications",
      "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.":
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any material changes to these Terms of Use.",

      "Notre mission": "مهمتنا",
      Abonnements: "الاشتراكات",
      "Rechercher...": "بحث...",
      Langue: "اللغة",
      "Le professionnel": "المحترف",
      "qu'il vous faut.": "الذي تحتاجه.",
      "L'expertise": "الخبرة",
      "digitale.": "الرقمية.",
      "Des artisans": "حرفيين",
      "qualifiés.": "مؤهلين.",
      Apprenez: "تعلم",
      "sans limite.": "بلا حدود.",
      "Prenez soin de": "اعتني",
      "vous.": "بنفسك.",
      "Trouver un prestataire": "ابحث عن مزود",
      "Se connecter": "تسجيل الدخول",
      "Connectez-vous avec": "تواصل مع",
      "l'excellence.": "التميز.",
      "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.":
        "تحدث منصتنا ثورة في التواصل بين المحترفين والعملاء. سواء كنت بحاجة إلى خبير لمهمة لمرة واحدة أو تتطلع إلى تطوير قاعدة عملائك، فإن UpTaskers يخلق بيئة من الثقة.",
      Commencer: "البدء",
      "Une mise en relation rapide et simplifiée.": "اتصال سريع ومبسط.",
      "Des profils vérifiés et des avis authentiques.":
        "ملفات تعريف تم التحقق منها ومراجعات أصلية.",
      "Un espace de collaboration sécurisé pour tous.":
        "مساحة تعاون آمنة للجميع.",
      "Maximisez votre impact": "تعظيم تأثيرك",
      "Outils pour réussir": "أدوات للنجاح",
      "Nous sommes là pour vous aider": "نحن هنا لمساعدتك",
      "S'inscrire": "اشترك",
      Conçu: "مصمم",
      "pour exceller.": "للتفوق.",
      "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.":
        "مهمة UpTaskers بسيطة: توفير وقتك من خلال تقديم وصول فوري لأفضل المواهب في منطقتك.",
      "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.":
        "نحن نجمع بين كفاءة منصة حديثة وخبرة محترفين معتمدين، لتكون كل خدمة تجربة سلسة تمامًا.",
      "Réseau Fiable": "شبكة موثوقة",
      "Des talents": "مواهب",
      "certifiés.": "معتمدة.",
      "Profils vérifiés": "ملفات شخصية موثقة",
      "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.":
        "يمر كل مزود على UpTaskers بعملية شاملة للتحقق من الهوية لضمان أمانك.",
      "Avis authentiques": "مراجعات حقيقية",
      "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.":
        "اقرأ التعليقات الحقيقية. فقط العملاء الذين استخدموا الخدمات يمكنهم ترك تقييم.",
      "Support dédié 24/7": "دعم مخصص 24/7",
      "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.":
        "فريقنا متاح لمرافقتك وحل أي مشكلة تواجهك على المنصة.",
      "L'expertise dans": "الخبرة في",
      "votre poche.": "جيبك.",
      "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.":
        "قم بتنزيل تطبيقنا المحمول المجاني للعثور على مزود وإدارة طلباتك والتواصل بسهولة أينما كنت.",
      "Le/La coach sportif(ve)": "المدرب الرياضي",
      "L'agent(e) de sécurité": "وكيل الأمن",
      "Le/La traducteur(trice)": "المترجم",
      "Le/La menuisier(ère)": "النجار",
      "Le/La décorateur(trice)": "الديكور",
      "Le/La mécanicien(ne)": "الميكانيكي",
      "Le/La jardinier(ère)": "البستاني",
      "Le/La cuisinier(ère)": "الطباخ",
      "Le/La professionnel(le)": "المحترف",
      "L'informaticien(ne)": "أخصائي تكنولوجيا المعلومات",
      "L'artisan(e)": "الحرفي",
      "Le/La photographe": "المصور",
      "Le/La chauffeur(e)": "السائق",
      "Le/La déménageur(euse)": "الناقل",
      "Le/La professeur(e)": "المعلم",
      "L'agent immobilier": "وكيل العقارات",
      "hero.desc.sport":
        "حقق أهدافك البدنية من خلال إرشادات مخصصة من مدربينا الشغوفين.",
      "hero.desc.security":
        "ضمان أمن ممتلكاتك وفعالياتك مع محترفين مدربين ومؤهلين.",
      "hero.desc.translator":
        "تسهيل تبادلاتك الدولية مع خبرائنا في الترجمة والترجمة الفورية.",
      "hero.desc.carpenter":
        "حرفيون مؤهلون لجميع أعمال النجارة الخاصة بك، من التصنيع إلى التجديد.",
      "hero.desc.decorator":
        "تحسين الديكور الداخلي الخاص بك مع خبرة مصممي الديكور الداخلي المتحمسين لدينا.",
      "hero.desc.mechanic":
        "إصلاح وصيانة سيارتك مع خبرائنا في ميكانيكا السيارات.",
      "hero.desc.garden":
        "تحويل وتطوير المساحات الخضراء الخاصة بك بفضل خبرات البستانيين ومنسقي الحدائق الشغوفين لدينا.",
      "hero.desc.cooking":
        "كافئ نفسك بلحظة لتذوق الطعام مع طهاة موهوبين، بدءًا من إعداد الوجبات وحتى الفعاليات الخاصة.",
      "hero.desc.services":
        "اعثر على أفضل الخبراء لمهامك اليومية، تم اختيارهم بعناية ومستعدون للتدخل السريع.",
      "hero.desc.tech":
        "مطورون ومصممون ومسوقون موهوبون لدفع مشاريعك الرقمية إلى آفاق جديدة.",
      "hero.desc.repair":
        "خبرة معترف بها في جميع أعمال التجديد والإصلاحات الخاصة بك، مع محترفين موثوقين بجانبك.",
      "hero.desc.photo":
        "التقط أحداثك الثمينة مع خبرات مصورينا المحترفين المستعدين لترقية كل لحظة.",
      "hero.desc.transport":
        "تنقل بسهولة وأمان تامة مع سائقينا المهنيين المؤهلين.",
      "hero.desc.moving":
        "تحرك بكل راحة بال مع خبرائنا في النقل، فاعلون وحذرون.",
      "hero.desc.education":
        "تطوير مهارات جديدة مع معلمين متحمسين، أون لاين أو في المنزل، وفقًا لاحتياجاتك.",
      "hero.desc.realestate":
        "ابحث عن الخبير العقاري المثالي لدعمك في جميع مشاريع البيع والشراء والتأجير الخاصة بك.",
      Éducation: "تعليم",
      Artisanat: "حرف يدوية",
      Informatique: "معلوماتية",
      Réparation: "إصلاح",
      Beauté: "جمال",
      Transport: "نقل",
      "Bien-être": "عافية",
      Événementiel: "فعاليات",
      Déménagement: "نقل عفش",
      Nettoyage: "تنظيف",
      Bricolage: "أعمال يدوية",
      Photographie: "تصوير",
      Architecture: "هندسة معمارية",
      Jardinage: "بستنة",
      Menuiserie: "نجارة",
      Décoration: "ديكور",
      Mécanique: "ميكانيكا",
      "Soutien scolaire": "دروس تقوية",
      Rédaction: "كتابة",
      Vidéo: "فيديو",
      Sécurité: "أمن",
      Plomberie: "سباكة",
      Électricité: "كهرباء",
      Design: "تصميم",
      Marketing: "تسويق",
      Traduction: "ترجمة",
      Coaching: "تدريب",
      "Garde d'enfants": "رعاية أطفال",
      Musique: "موسيقى",
      Comptabilité: "محاسبة",
      Droit: "قانون",
      Cuisine: "طبخ",
      Sport: "رياضة",
      Coiffure: "تصفيف شعر",
      "Garde d'animaux": "رعاية حيوانات",
      Massage: "مساج",
      "Personal Shopper": "متسوق شخصي",
      "Organisation d'événements": "تنظيم فعاليات",
      Maquillage: "مكياج",
      Esthétique: "تجميل",
      "Aide à domicile": "مساعدة منزلية",
      Serrurerie: "أقفال",
      Peinture: "دهان",
      Vétérinaire: "بيطري",
      "Agent immobilier": "وكيل عقارات",
      "Journal UpTaskers": "مجلة UpTaskers",
      "Guides, astuces et conseils pour clients et professionnels":
        "أدلة ونصائح وإرشادات للعملاء والمحترفين",
      "Lire la suite": "اقرأ المزيد",
      "Les catégories les plus utilisées dans le mois":
        "الفئات الأكثر استخدامًا في الشهر",
      "Les services qui génèrent le plus d'opportunités ce mois-ci.":
        "الخدمات التي تولد أكبر عدد من الفرص هذا الشهر.",
      "Découvrir nos services": "اكتشف خدماتنا",
      "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.":
        "اكتشف الاتجاهات الحالية والمجالات الأكثر طلبًا من قبل عملائنا لتحسين ملفك الشخصي واغتنام فرص جديدة.",
      "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.":
        "تسهل UpTaskers اللقاء بين العملاء والمحترفين المؤهلين لتعاون بسيط وسريع وفعال.",
      "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.":
        "سواء كنت شركة تبحث عن خبرة محددة أو فردًا يحتاج إلى مساعدة، فإن منصتنا تربطك بأفضل المواهب المحلية.",
      "Avis des utilisateurs et statistiques": "مراجعات المستخدمين والإحصائيات",
      "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.":
        "اكتشف ما يعتقده مجتمعنا عن UpTaskers وانضم إلى آلاف المستخدمين النشطين لدينا.",
      "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.":
        "مع وجود أكثر من 10000 مستخدم و 5000 محترف مسجل، تفخر UpTaskers بالحفاظ على معدل رضا يبلغ 98٪ في أكثر من 25000 مهمة منجزة.",
      "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.":
        "يتم اختيار كل مستقل بدقة متناهية، مما يضمن أقصى مستوى من الخبرة والاندماج المثالي في فرقك.",
      "Objectif 2030": "هدف 2030",
      "Devenir le leader mondial de la mise en relation de services.":
        "أن نصبح الرائد العالمي في ربط الخدمات.",
      "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.":
        "تتمثل رؤيتنا في بناء بنية تحتية عالمية لربط كل موهبة بفرصة، وتحفيز الابتكار والموثوقية المالية والاستقلال لملايين مقدمي الخدمات على المستوى الدولي.",
      "Notre QG": "مقرنا",
      "Côte d'Ivoire": "ساحل العاج",
      PLATEFORME: "منصة",
      CONFIANCE: "ثقة",
      ENTREPRISE: "شركة",
      LÉGAL: "قانوني",
      Accueil: "الرئيسية",
      "Explorez nos catégories": "استكشف فئاتنا",
      Avantages: "المزايا",
      Ressources: "الموارد",
      "Avis clients": "آراء العملاء",
      "Vérification des profils": "التحقق من الملفات الشخصية",
      "Garantie UpTaskers": "ضمان UpTaskers",
      "À propos de UpTaskers": "نبذة عن UpTaskers",
      "Nous contacter": "اتصل بنا",
      "Support client": "دعم العملاء",
      "Conditions d'utilisation": "شروط الاستخدام",
      "Politique de confidentialité": "سياسة الخصوصية",
      "Mentions légales": "إشعارات قانونية",
      "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.":
        "هي المنصة الرائدة للعثور على مقدمي خدمات معتمدين ومؤهلين.",
      "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.":
        "ثقة مستخدمينا هي أولويتنا. يتم تقييم جميع المهنيين في شبكتنا وتوثيق معلوماتهم من أجل سلامتك.",
      "100% de profils vérifiés": "حسابات موثقة 100%",
      "Applications Mobiles": "تطبيقات الجوال",
      "Suivez-nous": "تابعنا",
      "Tous droits réservés.": "كل الحقوق محفوظة.",
      "12 Avril 2026": "12 أبريل 2026",
      "8 Mars 2026": "8 مارس 2026",
      "20 Mai 2026": "20 مايو 2026",
      "Contactez-nous": "اتصل بنا",
      "Nous sommes là pour": "نحن هنا من أجل",
      "vous aider.": "مساعدتك.",
      "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.":
        "سؤال، أو حاجة للمساعدة، أو ترغب ببساطة في تزويدنا بملاحظاتك؟ فريقنا تحت تصرفك.",
      "Informations de contact": "معلومات الاتصال",
      Email: "بريد إلكتروني",
      "Pour toute demande générale": "لأي استفسار عام",
      Téléphone: "هاتف",
      "Du lundi au vendredi, de 9h à 18h":
        "من الاثنين إلى الجمعة، من 9 صباحًا إلى 6 مساءً",
      Adresse: "عنوان",
      Plateau: "بلاتو",
      "Abidjan, Côte d'Ivoire": "أبيدجان، ساحل العاج",
      "Téléchargez notre application": "حمل تطبيقنا",
      "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.":
        "خذ UpTaskers معك في كل مكان. أدر مشاريعك، تواصل مع المحترفين، وتابع تقدم طلباتك من هاتفك المحمول.",
      "Centre de ressources": "مركز الموارد",
      "Outils et guides pour": "أدوات وأدلة لـ",
      "réussir.": "النجاح.",
      "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.":
        "محتوى حصري صممه خبراؤنا لدعم مشاريعك، سواء كنت عميلًا متطلبًا أو محترفًا طموحًا.",
      "Espace Clients": "منطقة العملاء",
      "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.":
        "حقق أفكارك بكل هدوء. تساعدك أدلتنا على اتخاذ أفضل القرارات في كل مرحلة من مشروعك.",
      "Comment bien définir votre projet ?": "كيف تحدد مشروعك بشكل جيد؟",
      "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.":
        "تعلم كيفية كتابة مواصفات واضحة للحصول على أفضل عروض الأسعار.",
      "Choisir le prestataire idéal": "اختيار المزود المثالي",
      "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.":
        "المعايير الأساسية لاختيار المحترف المناسب لاحتياجاتك.",
      "Guide des tarifs 2024": "دليل أسعار 2024",
      "Découvrez les prix moyens du marché pour budgétiser vos travaux.":
        "اكتشف متوسط أسعار السوق لوضع ميزانية لأعمالك.",
      "Espace Prestataires": "منطقة مقدمي الخدمات",
      "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.":
        "عزز نشاطك وقم بتحسين إدارتك. اكتشف أفضل ممارساتنا للتفوق على المنصة.",
      "Optimiser votre vitrine": "تحسين واجهة العرض الخاصة بك",
      "Conseils pratiques pour rendre votre profil plus attractif pour les clients.":
        "نصائح عملية لجعل ملفك الشخصي أكثر جاذبية للعملاء.",
      "Réussir son premier contact": "نجاح اتصالك الأول",
      "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.":
        "كيفية الرد بفعالية على الطلبات لزيادة فرص التوقيع.",
      "Obtenir plus d'avis positifs": "احصل على المزيد من المراجعات الإيجابية",
      "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.":
        "أفضل الاستراتيجيات لبناء ولاء العملاء وتطوير سمعتك الإلكترونية.",
      "Formations Vidéo": "تدريب عبر الفيديو",
      "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.":
        "تعلم إتقان جميع ميزات UpTaskers في بضع دقائق بفضل برامجنا التعليمية التفاعلية.",
      "Voir les tutoriels": "عرض الدروس المتاحة",
      "Formation vidéo": "تدريب عبر الفيديو",
      "À propos de nous": "معلومات عنا",
      "Découvrez UpTaskers": "اكتشف UpTaskers",
      "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.":
        "مرحبًا بك في UpTaskers، منصة مخصصة لربط الأفراد والشركات والمحترفين المؤهلين.",
      "Qui sommes-nous ?": "من نحن؟",
      "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.":
        "مهمتنا بسيطة: إتاحة الفرصة للجميع للعثور بسرعة على مقدمي خدمات أكفاء وموثوقين لتلبية احتياجاتهم، مع تزويد المحترفين بفرصة لتطوير أعمالهم واكتساب الرؤية.",
      "Notre Vision": "رؤيتنا",
      "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.":
        "نحن نؤمن بأن كل مهارة تستحق التقدير وأن كل حاجة تستحق حلاً مكيفًا.",
      "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.":
        "طموحنا هو إنشاء نظام بيئي حيث يمكن للعملاء ومقدمي الخدمات التعاون بسهولة وبثقة وفي بيئة آمنة.",
      "Ce que nous proposons": "ماذا نقدم",
      "Pour les utilisateurs :": "للمستخدمين:",
      "Rechercher des professionnels qualifiés.": "ابحث عن محترفين مؤهلين.",
      "Publier leurs besoins et recevoir des propositions.":
        "نشر احتياجاتهم وتلقي العروض.",
      "Comparer les profils, expériences et avis.":
        "قارن بين الملفات الشخصية والتجارب والمراجعات.",
      "Contacter directement les prestataires.": "اتصل بمقدمي الخدمات مباشرة.",
      "Trouver rapidement des solutions adaptées à leurs projets.":
        "اعثر بسرعة على حلول تتناسب مع مشاريعهم.",
      "Pour les professionnels :": "للمحترفين:",
      "Créer un profil détaillé.": "إنشاء ملف تعريف مفصل.",
      "Présenter leurs compétences et réalisations.":
        "عرض مهاراتهم وإنجازاتهم.",
      "Développer leur clientèle.": "تطوير قاعدة عملائهم.",
      "Recevoir des demandes de services.": "تلقي طلبات الخدمة.",
      "Valoriser leur expertise auprès d'un large public.":
        "عرض خبراتهم لجمهور واسع.",
      "Nos Valeurs": "قيمنا",
      "Qualité :": "الجودة:",
      "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.":
        "نحن نشجع التميز في كل خدمة نقدمها على منصتنا.",
      "Compétence :": "الكفاءة:",
      "Nous mettons en avant les talents et le savoir-faire des professionnels.":
        "نحن نبرز مواهب ومعرفة المحترفين.",
      "Professionnalisme :": "الاحترافية:",
      "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.":
        "نحن نعزز العلاقات الجادة والمحترمة والشفافة بين جميع المستخدمين.",
      "Confiance :": "الثقة:",
      "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.":
        "نحن نعمل باستمرار لتوفير بيئة موثوقة وآمنة.",
      "Pourquoi nous choisir ?": "لماذا تختارنا؟",
      "Une plateforme simple et intuitive.": "منصة بسيطة وبديهية.",
      "Des professionnels qualifiés.": "محترفون مؤهلون.",
      "Une mise en relation rapide.": "اتصال سريع.",
      "Un accompagnement orienté vers la satisfaction des utilisateurs.":
        "دعم موجه نحو رضا المستخدم.",
      "Un engagement constant en faveur de la qualité des services.":
        "التزام مستمر بجودة الخدمة.",
      "Notre engagement": "التزامنا",
      "Au service de vos besoins": "في خدمة احتياجاتك",
      "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.":
        "نحن ملتزمون بتحسين منصتنا باستمرار لتقديم أفضل تجربة ممكنة لمستخدمينا. سواء كنت تبحث عن محترف أو ترغب في تقديم خدماتك، نحن هنا لدعمك في إنجاز مشاريعك.",
      "Qualité • Compétence • Professionnalisme":
        "الجودة • الكفاءة • الاحترافية",
      "Retour à l'accueil": "العودة إلى الصفحة الرئيسية",
      "Toutes nos catégories": "جميع فئاتنا",
      "Explorez nos": "استكشف",
      catégories: "فئاتنا",
      "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.":
        "اكتشف تنوع محترفينا واعثر على الخبير المثالي لمشروعك من بين فئاتنا العديدة.",
      "Rechercher une catégorie...": "ابحث عن فئة...",
      "Aucune catégorie trouvée pour": "لم يتم العثور على فئة لـ",
      "Avantages Exclusifs": "مزايا حصرية",
      "Maximisez votre ": "تعظيم ",
      "impact.": "تأثيرك.",
      "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.":
        "سواء كنت محترفًا يتطلع إلى تنمية قاعدة عملائه أو فردًا يبحث عن خبراء موثوقين، تقدم لك UpTaskers أفضل الأدوات للنجاح.",
      "Développez votre activité": "طور عملك",
      "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.":
        "قم بالوصول إلى قاعدة كبيرة من العملاء المؤهلين وزد مبيعاتك دون جهد تنقيب.",
      "Paiements sécurisés": "مدفوعات آمنة",
      "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.":
        "استمتع بنظام دفع آمن 100٪. كن مطمئنًا أنك ستدفع لك بسرعة وراحة بال.",
      "Gestion simplifiée": "إدارة مبسطة",
      "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.":
        "قم بإدارة مواعيدك وعروض الأسعار وفواتيرك مباشرة من لوحة التحكم البديهية الخاصة بك.",
      "Communauté de confiance": "مجتمع موثوق",
      "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.":
        "انضم إلى مجتمع من المحترفين المعتمدين حيث الجودة والاحترام هي الكلمات الأساسية.",
      "Visibilité accrue": "زيادة الرؤية",
      "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.":
        "استفد من خبرتنا في التسويق الرقمي للظهور في أعلى نتائج البحث المحلية.",
      "Réputation valorisée": "سمعة قيمة",
      "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.":
        "اجمع تقييمات حقيقية تعزز مصداقيتك وتجذب عملاء جدد بشكل طبيعي.",
      "Prêt à libérer votre potentiel ?": "هل أنت مستعد لإطلاق إمكاناتك؟",
      "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.":
        "انضم إلى المنصة التي تحول طريقة تعاون المحترفين والعملاء.",
      "Rejoindre UpTaskers maintenant": "انضم إلى UpTaskers الآن",
      "Tendances du mois": "اتجاهات الشهر",
      "Les catégories les plus utilisées": "الفئات الأكثر استخدامًا",
      "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.":
        "اكتشف الخدمات الأكثر شعبية هذا الشهر واعثر على الخبير المثالي.",
      "Très demandé": "مطلوب بشدة",
      "Voir toutes les catégories": "عرض جميع الفئات",
      "Des experts vérifiés": "خبراء معتمدون",
      "Des talents pour chaque besoin": "مواهب لكل احتياج",
      "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.":
        "تصفح ملفات أفضل المحترفين لدينا وابحث عن الخبير المثالي.",
      "Designer UX/UI": "مصمم UX/UI",
      "Développeur Full-Stack": "مطور Full-Stack",
      "Rédactrice Web App": "كاتبة تطبيقات ويب",
      "Artisan Plombier": "سباك",
      "Assistante Virtuelle": "مساعد افتراضي",
      "Technicien IT": "فني تكنولوجيا المعلومات",
      avis: "مراجعات",
      "Voir le profil": "عرض الملف الشخصي",
      "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.":
        "بالفعل اتخذ أكثر من 10000 عميل و 5000 محترف هذه الخطوة! مع 25000 مهمة ناجحة ورضا بنسبة 98٪، تعد UpTaskers المرجع الأساسي لحياتك اليومية.",
      "Découvrez nos services": "اكتشف خدماتنا",
      "Note moyenne basée sur": "متوسط التقييم بناءً على",
      "+12,000 avis certifiés": "+12,000 مراجعة معتمدة",
      "Utilisateurs/mois": "المستخدمين / شهر",
      Satisfaction: "الرضا",
      "Rép. moyenne": "متوسط الرد",
      Missions: "المهام",
      Maçonnerie: "بناء",
      Carrelage: "تبليط",
      "Montage vidéo": "تحرير الفيديو",
      Programmation: "برمجة",
      "Retour aux catégories": "Back to categories",
      "Experts en": "Experts in",
      "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :":
        "Find the best highly qualified and certified professionals to meet your most specific requirements in:",
      "Confiez-nous vos projets pour une réalisation d'excellence.":
        "Entrust us with your projects for an excellent execution.",
      "Qualité Supérieure": "Superior Quality",
      "L'élite des": "The elite of",
      "professionnels.": "professionals.",
      "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.":
        "We rigorously evaluate and select the best profiles on the market to ensure the success and excellence of your projects.",
      "Espace client": "Client Area",
      "Espace prestataire": "Provider Area",
      "Connectez-vous ou inscrivez-vous": "Log in or sign up",
      "Continuer avec Google": "Continue with Google",
      "Continuer avec Apple": "Continue with Apple",
      "Continuer avec un numéro de téléphone": "Continue with a phone number",
      "Adresse e-mail": "Email address",
      Continuer: "Continue",
      "Rejoignez la confiance.": "Join the trust.",
      "Sécurité garantie": "Guaranteed security",
      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.":
        "Secure payments, verified profiles, and responsive 7/7 customer support.",
      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.":
        "A transparent community where every review is based on a real service.",
      "Créer un compte": "Create an account",
      "Sélectionnez votre type de profil pour commencer":
        "Select your profile type to start",
      "Je cherche un professionnel": "I am looking for a professional",
      "Je propose mes services": "I offer my services",
      "Nom complet": "Full name",
      "Adresse email": "Email address",
      "Mot de passe": "Password",
      "J'accepte les": "I accept the",
      "et la": "and the",
      Support: "الدعم",
      "Download on the": "Download on the",
      "Disponible sur": "Available on",
      "Du lundi au dimanche": "من الاثنين إلى الأحد",
      "Du lundi au dimanche, 24h/24": "من الاثنين إلى الأحد، على مدار 24 ساعة",
      "Le/La maçon(ne)": "The mason",
      "hero.desc.masonry":
        "Qualified craftsmen for all your construction, facade and landscaping work.",
      "Le/La coiffeur(euse)": "The hairdresser",
      "hero.desc.hairdress":
        "Call on our hairdressing experts for a custom cut, color or styling.",
      "L'organisateur(trice)": "The event organizer",
      "hero.desc.eventorg":
        "Entrust the planning of your weddings, parties and corporate events to our passionate experts.",
      "L'avocat(e) / juriste": "The lawyer / jurist",
      "hero.desc.law":
        "Secure your processes with our selection of competent lawyers and legal professionals.",
      "Découvrez notre objectif": "اكتشف هدفنا",
      Notre: "مهمتنا",
      Mission: "المهمة",
      "Connecter les besoins aux meilleures compétences":
        "ربط الاحتياجات بأفضل المهارات",
      "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.":
        "مهمتنا هي تسهيل اللقاء بين الأشخاص الذين يبحثون عن خدمات عالية الجودة والمهنيين الأكفاء القادرين على الرد عليها.",
      "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.":
        "في عالم يكون فيه من الصعب أحيانا العثور على مزود الخدمة المناسب أو التعريف بمهاراتهم، تخلق منصتنا جسرا بسيطا وسريعا وموثوقا بين العملاء والمهنيين.",
      "Pourquoi existons-nous ?": "لماذا نحن موجودون؟",
      "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :":
        "كل يوم، يبحث آلاف الأشخاص عن حلول لاحتياجاتهم:",
      "Trouver un répétiteur pour accompagner un enfant.":
        "إيجاد مدرس لدعم الطفل.",
      "Faire appel à un menuisier pour fabriquer un meuble.":
        "استدعاء نجار لصنع قطعة أثاث.",
      "Recruter un développeur pour créer un site web.":
        "توظيف مطور لإنشاء موقع ويب.",
      "Trouver un électricien, un plombier ou un artisan qualifié.":
        "العثور على كهربائي، سباك أو حرفي مؤهل.",
      "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.":
        "الحصول على المساعدة من محترف موثوق به لمشروع شخصي أو مهني.",
      "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.":
        "تم إنشاء منصتنا لجعل هذه العمليات أبسط وأسرع وأكثر كفاءة.",
      "Ce que nous apportons": "ما نقدمه",
      "Pour les clients": "للعملاء",
      "Nous permettons aux utilisateurs de :": "نسمح للمستخدمين بتنفيذ ما يلي:",
      "Trouver facilement des professionnels qualifiés.":
        "العثور بسهولة على المهنيين المؤهلين.",
      "Comparer plusieurs prestataires.": "مقارنة العديد من مزودي الخدمة.",
      "Consulter les profils et les expériences.":
        "استشارة ملفات التعريف والتجارب.",
      "Gagner du temps dans leurs recherches.": "توفير الوقت في أبحاثهم.",
      "Réaliser leurs projets en toute confiance.": "القيام بمشاريعهم بثقة.",
      "Pour les professionnels": "للمهنيين",
      "Nous aidons les prestataires à :": "نساعد مزودي الخدمة على:",
      "Mettre en valeur leurs compétences.": "إبراز مهاراتهم.",
      "Développer leur visibilité.": "تطوير رؤيتهم.",
      "Trouver de nouveaux clients.": "العثور على عملاء جدد.",
      "Développer leur activité.": "تطوير أعمالهم.",
      "Construire leur réputation professionnelle.": "بناء سمعتهم المهنية.",
      "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.":
        "نرغب في بناء مجتمع حيث الموهبة والدراية والاحتراف معترف بها ومتاحة للجميع.",
      "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.":
        "نحن نؤمن بأنه من خلال ربط المهارات المناسبة بالاحتياجات المناسبة ، نساهم في إنشاء المزيد من الفرص والثقة والنجاح للجميع.",
      "Nos engagements": "التزاماتنا",
      "Qualité dans les services proposés.": "الجودة في الخدمات المقدمة.",
      "Compétence des professionnels présents sur la plateforme.":
        "كفاءة المهنيين الموجودين على المنصة.",
      "Professionnalisme dans chaque interaction.": "احترافية في كل تفاعل.",
      "Transparence et confiance entre les utilisateurs.":
        "الشفافية والثقة بين المستخدمين.",
      "Innovation pour améliorer continuellement l'expérience.":
        "الابتكار لتحسين التجربة باستمرار.",
      "Notre Promesse": "وعدنا",
      "Transformer chaque besoin en opportunité et chaque compétence en solution.":
        "تحويل كل حاجة إلى فرصة وكل مهارة إلى حل.",
      "Au service de vos besoins.": "في خدمة احتياجاتك.",
      "Aide et assistance": "المساعدة والدعم",
    },
  },
  ZH: {
    translation: {
      "Bienvenue sur la page": "欢迎来到页面",
      "Cette section de UpTaskers est actuellement en cours de développement.": "UpTaskers 的此部分目前正在开发中。",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "我们的平台不断发展，以为您提供最佳体验。在我们构建这个全面的资源时，请继续关注更新。",

      "Légal & Confidentialité": "Legal & Privacy",
      "Politique de Confidentialité": "Privacy Policy",
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. Dernière mise à jour le":
        "We are committed to protecting your privacy and ensuring the security of your data on the platform. Last updated on",
      Sommaire: "Summary",
      "Contactez notre équipe responsable de la vie privée :":
        "Contact our privacy team:",
      "Engagement de Confiance": "Commitment to Trust",
      "Votre Sécurité Avant Tout": "Your Security Above All",
      "UpTaskers a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.":
        "UpTaskers has been designed to provide you with a safe and trusted environment. No compromise is made with your data and privacy, so you can develop your business and hire experts with peace of mind.",
      "Paiements Sécurisés": "Secure Payments",
      "Identités Vérifiées": "Verified Identities",
      "Confidentialité Protégée": "Privacy Protected",
      "1. Introduction": "1. Introduction",
      "UpTaskers est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles.":
        "UpTaskers is the leading platform for connecting qualified professionals and clients. This policy explains how we collect, use, and protect your personal information.",
      "2. Nature du Service": "2. Nature of the Service",
      "UpTaskers permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.":
        "UpTaskers allows you to find, contact, and work with experts in multiple fields, ensuring secure payments and quality exchanges.",
      "3. Données Collectées": "3. Data Collected",
      "Nous pouvons recueillir les données suivantes :":
        "We may collect the following data:",
      "Informations de base (nom, prénom, adresse e-mail, téléphone)":
        "Basic information (last name, first name, email address, phone number)",
      "Documents d'identité (pour la vérification stricte des professionnels)":
        "Identity documents (for strict verification of professionals)",
      "Préférences utilisateur et paramètres de notification":
        "User preferences and notification settings",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)":
        "Payment data (processed and secured by our approved third-party providers)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme":
        "History of missions, messages, and reviews left on the platform",
      "4. Utilisation des Données": "4. Use of Data",
      "Les données collectées sont utilisées pour :":
        "The data collected is used to:",
      "Faciliter la mise en relation entre clients et prestataires":
        "Facilitate connections between clients and providers",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)":
        "Personalize your experience (refine expert search results)",
      "Garantir le bon déroulement et le suivi des missions":
        "Ensure the smooth running and tracking of missions",
      "Assurer la sécurité des accès et lutter contre la fraude":
        "Ensure access security and fight fraud",
      "5. Sécurité": "5. Security",
      "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :":
        "We take the security of your data very seriously. Measures in place:",
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés":
        "Your personal data is stored on highly secure servers",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)":
        "Financial transactions (payment) are end-to-end encrypted (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte UpTaskers":
        "Secure authentication to protect access to your UpTaskers account",
      "6. Partage des Données": "6. Data Sharing",
      "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :":
        "We never sell your personal data. It may be shared in the following strictly necessary cases:",
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission":
        "Strictly required information is exchanged between the client and the provider upon confirming a mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement":
        "With our payment partners to validate escrow and payout",
      "Afin de se conformer à des obligations légales en vigueur":
        "In order to comply with applicable legal obligations",
      "7. Vos Droits": "7. Your Rights",
      "En tant qu'utilisateur de UpTaskers, vous disposez des droits suivants (conformément à la loi ivoirienne sur la protection des données à caractère personnel) :":
        "As a UpTaskers user, you have the following rights (in accordance with Ivorian data protection law):",
      "Accéder à vos données et en demander la copie":
        "Access your data and request a copy",
      "Rectifier ou mettre à jour vos informations inexactes":
        "Rectify or update your inaccurate information",
      "Demander la suppression de votre profil, historique et compte":
        "Request the deletion of your profile, history, and account",
      "Vous opposer à recevoir nos newsletters et alertes de mission":
        "Object to receiving our newsletters and mission alerts",
      "8. Contact": "8. Contact",
      "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :":
        "For any information request or to exercise your rights regarding your data, you can contact us:",
      "Mentions Légales": "Legal Notices",
      Hébergement: "Hosting",
      "Le site est hébergé par Firebase.":
        "The site is hosted by Firebase.",
      "Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.":
        "Data is hosted in secure data centers, in compliance with Ivorian data protection law.",
      "Propriété Intellectuelle": "Intellectual Property",
      "La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de":
        "The general structure of the site, as well as the texts, animated or non-animated images, and all elements making up the site are the exclusive property of",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.":
        "Any total or partial representation of this site by any means whatsoever, without the express permission of the website operator, is prohibited.",
      Responsabilité: "Responsibility",
      "est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.":
        "is a matchmaking platform between clients and service providers. UpTaskers acts solely as a technical intermediary and does not carry out the services offered on the platform. Consequently, UpTaskers cannot be held responsible for the quality, execution, or non-execution of the services provided by the service providers.",

      "Dernière mise à jour : 4 Juin 2026": "Last updated: June 4, 2026",
      "Acceptation des Conditions": "Acceptance of Terms",
      "En accédant ou en utilisant": "By accessing or using",
      "la Plateforme": "the Platform",
      "vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.":
        "you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you are not authorized to access the Service.",
      "Description du Service": "Description of the Service",
      "agit en tant que plateforme de mise en relation entre des prestataires de services indépendants et des clients à la recherche de services professionnels. Nous ne fournissons pas directement les services proposés par les prestataires.":
        "acts as a connection platform between independent service providers and clients looking for professional services. We do not directly provide the services offered by the providers.",
      "Vérification et Avis": "Verification and Reviews",
      "Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques,":
        "Although we implement an identity verification process for providers and offer an authentic review system,",
      "ne garantit pas la qualité spécifique du travail réalisé par les prestataires. Les transactions et accords s'effectuent directement entre le client et le prestataire.":
        "does not guarantee the specific quality of the work performed by providers. Transactions and agreements are made directly between the client and the provider.",
      "Comptes Utilisateurs": "User Accounts",
      "Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.":
        "When you create an account on our platform, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of your account.",
      Résiliation: "Termination",
      "Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.":
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Use or engage in inappropriate behavior on the platform.",
      Modifications: "Modifications",
      "Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.":
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any material changes to these Terms of Use.",

      "Notre mission": "我们的使命",
      Abonnements: "订阅",
      "Rechercher...": "搜索...",
      Langue: "语言",
      "Le professionnel": "您需要的",
      "qu'il vous faut.": "专业人士。",
      "L'expertise": "数字",
      "digitale.": "专业知识。",
      "Des artisans": "合格的",
      "qualifiés.": "工匠。",
      Apprenez: "学习",
      "sans limite.": "无止境。",
      "Prenez soin de": "照顾好",
      "vous.": "自己。",
      "Trouver un prestataire": "寻找服务商",
      "Se connecter": "登录",
      "Connectez-vous avec": "与连接",
      "l'excellence.": "卓越。",
      "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.":
        "我们的平台彻底改变了专业人士与客户之间的联系。无论您需要某个临时任务的专家，还是希望建立客户群，UpTaskers都能创造一个值得信赖的环境。",
      Commencer: "开始",
      "Une mise en relation rapide et simplifiée.": "快速而简化的建立联系。",
      "Des profils vérifiés et des avis authentiques.":
        "经过验证的个人资料和真实的评论。",
      "Un espace de collaboration sécurisé pour tous.":
        "为每个人提供的安全协作空间。",
      "Maximisez votre impact": "扩大您的影响力",
      "Outils pour réussir": "成功的工具",
      "Nous sommes là pour vous aider": "我们随时为您提供帮助",
      "S'inscrire": "注册",
      Conçu: "专为",
      "pour exceller.": "卓越而设计。",
      "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.":
        "UpTaskers的使命很简单：通过提供对您所在地区最优秀人才的即时访问，为您节省时间。",
      "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.":
        "我们将现代平台的高效性与经过验证的专业人士的专业知识相结合，使每次服务都能带来极其顺畅的体验。",
      "Réseau Fiable": "可靠的网络",
      "Des talents": "认证",
      "certifiés.": "人才。",
      "Profils vérifiés": "已验证的资料",
      "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.":
        "UpTaskers上的每位服务提供商都要经过彻底的身份验证过程，以确保您的安全。",
      "Avis authentiques": "真实评论",
      "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.":
        "阅读真实的反馈。只有使用过服务的客户才能留下评论。",
      "Support dédié 24/7": "24/7专门支持",
      "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.":
        "我们的团队将协助您并解决您在平台上遇到的任何问题。",
      "L'expertise dans": "专业化尽在",
      "votre poche.": "您的口袋中。",
      "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.":
        "下载我们免费的移动应用程序以寻找服务商、管理您的请求并非处皆易沟通。",
      "Le/La coach sportif(ve)": "体育教练",
      "L'agent(e) de sécurité": "保安",
      "Le/La traducteur(trice)": "翻译",
      "Le/La menuisier(ère)": "木匠",
      "Le/La décorateur(trice)": "装饰师",
      "Le/La mécanicien(ne)": "机修工",
      "Le/La jardinier(ère)": "园丁",
      "Le/La cuisinier(ère)": "厨师",
      "Le/La professionnel(le)": "专业人士",
      "L'informaticien(ne)": "IT专家",
      "L'artisan(e)": "工匠",
      "Le/La photographe": "摄影师",
      "Le/La chauffeur(e)": "司机",
      "Le/La déménageur(euse)": "搬运工",
      "Le/La professeur(e)": "老师",
      "L'agent immobilier": "房地产经纪人",
      "hero.desc.sport": "在我们充满热情的教练的个性化指导下实现您的身体目标。",
      "hero.desc.security":
        "由受过培训和合格的专业人员确保您财产和活动的安全。",
      "hero.desc.translator": "通过我们的笔译和口译专家促进您的国际交流。",
      "hero.desc.carpenter":
        "为您的所有木工作业（从制造到翻新）提供合格的工匠。",
      "hero.desc.decorator":
        "通过我们充满热情的室内装饰专家的专业知识提升您的室内环境。",
      "hero.desc.mechanic": "与我们的汽车机械专家一起维修和保养您的车辆。",
      "hero.desc.garden":
        "通过我们热情的园丁和景观规划师的专业技能，改造和维护您的绿地空间。",
      "hero.desc.cooking":
        "从膳食准备到私人活动，让自己与才华横溢的主厨共享美食时光。",
      "hero.desc.services":
        "寻找最适合您日常任务的专家，经过精心挑选并随时准备迅速干预。",
      "hero.desc.tech":
        "才华横溢的开发人员、设计师和营销人员，将您的数字项目推向新高度。",
      "hero.desc.repair":
        "您的所有翻新和维修工作均受备受信赖的技术专家的认可，并有可信赖的专业人员在您身边。",
      "hero.desc.photo":
        "捕捉您珍贵的赛事，借助我们专业的摄影师的专业知识，随时升华每一个瞬间。",
      "hero.desc.transport": "借助我们合格的专业司机轻松安全地移动。",
      "hero.desc.moving": "在我们的高效且仔细的运输专家协助下安心搬家。",
      "hero.desc.education":
        "通过充满热情的老师在线或根据您的需要在家学习新技能。",
      "hero.desc.realestate":
        "寻找理想的房地产专家来支持您的所有购买、销售或租赁项目。",
      Éducation: "教育",
      Artisanat: "工艺",
      Informatique: "信息技术",
      Réparation: "维修",
      Beauté: "美容",
      Transport: "运输",
      "Bien-être": "健康",
      Événementiel: "活动",
      Déménagement: "搬家",
      Nettoyage: "清洁",
      Bricolage: "DIY",
      Photographie: "摄影",
      Architecture: "建筑",
      Jardinage: "园艺",
      Menuiserie: "木工",
      Décoration: "装饰",
      Mécanique: "机械",
      "Soutien scolaire": "家教",
      Rédaction: "写作",
      Vidéo: "视频",
      Sécurité: "安全",
      Plomberie: "管道",
      Électricité: "电气",
      Design: "设计",
      Marketing: "营销",
      Traduction: "翻译",
      Coaching: "辅导",
      "Garde d'enfants": "保姆",
      Musique: "音乐",
      Comptabilité: "会计",
      Droit: "法律",
      Cuisine: "烹饪",
      Sport: "运动",
      Coiffure: "美发",
      "Garde d'animaux": "宠物看护",
      Massage: "按摩",
      "Personal Shopper": "私人导购",
      "Organisation d'événements": "活动组织",
      Maquillage: "化妆",
      Esthétique: "美学",
      "Aide à domicile": "家庭护理",
      Serrurerie: "锁匠",
      Peinture: "绘画",
      Vétérinaire: "兽医",
      "Agent immobilier": "房地产经纪人",
      "Journal UpTaskers": "UpTaskers 日志",
      "Guides, astuces et conseils pour clients et professionnels":
        "为客户和专业人士提供的指南、提示和建议",
      "Lire la suite": "阅读更多",
      "Les catégories les plus utilisées dans le mois": "本月最常用的类别",
      "Les services qui génèrent le plus d'opportunités ce mois-ci.":
        "本月产生最多机会的服务。",
      "Découvrir nos services": "发现我们的服务",
      "Découvrez les tendances actuelles et les domaines les plus demandés par nos clients pour optimiser votre profil et saisir de nouvelles opportunités.":
        "发现当前趋势和我们客户最常请求的领域，以优化您的个人资料并抓住新机会。",
      "UpTaskers facilite la rencontre entre clients et professionnels qualifiés pour des collaborations simples, rapides et efficaces.":
        "UpTaskers 促进了客户与合格专业人员之间的会面，以实现简单、快速和有效的协作。",
      "Que vous soyez une entreprise à la recherche d'une expertise précise ou un particulier ayant besoin d'un coup de main, notre plateforme vous connecte aux meilleurs talents locaux.":
        "无论您是寻找特定专业知识的公司，还是需要帮助的个人，我们的平台都可以让您与最佳本地人才建立联系。",
      "Avis des utilisateurs et statistiques": "用户评论和统计",
      "Découvrez ce que notre communauté pense de UpTaskers et rejoignez nos milliers d'utilisateurs actifs.":
        "发现我们的社区对 UpTaskers 的看法，加入我们成千上万的活跃用户中。",
      "Avec plus de 10 000 utilisateurs et 5 000 professionnels inscrits, UpTaskers est fier de maintenir un taux de satisfaction de 98% sur plus de 25 000 missions réalisées.":
        "UpTaskers 拥有超过 10,000 名用户和 5,000 名注册专业人员，我们很自豪在 25,000 多项完成的任务中保持了 98% 的满意度。",
      "Chaque freelance est sélectionné avec une extrême précision, garantissant un niveau d'expertise maximal et une intégration parfaite dans vos équipes.":
        "每位自由职业者都经过极其精确的选择，以保证最高专业水平和完美融入您的团队。",
      "Objectif 2030": "目标 2030",
      "Devenir le leader mondial de la mise en relation de services.":
        "成为服务连接领域的全球领导者。",
      "Notre vision est de bâtir une infrastructure mondiale pour connecter chaque talent à une opportunité, stimulant l'innovation, la fiabilité financière et l'indépendance pour des millions de prestataires à l'international.":
        "我们的愿景是建立一个全球基础设施，将每位人才与机会联系起来，从而激发创新，为国际上数百万的供应商提供财务可靠性和独立性。",
      "Notre QG": "我们的总部",
      "Côte d'Ivoire": "科特迪瓦",
      PLATEFORME: "平台",
      CONFIANCE: "信任",
      ENTREPRISE: "公司",
      LÉGAL: "法律",
      Accueil: "首页",
      "Explorez nos catégories": "浏览我们的类别",
      Avantages: "优势",
      Ressources: "资源",
      "Avis clients": "客户评价",
      "Vérification des profils": "个人资料验证",
      "Garantie UpTaskers": "UpTaskers 保证",
      "À propos de UpTaskers": "关于 UpTaskers",
      "Nous contacter": "联系我们",
      "Support client": "客户支持",
      "Conditions d'utilisation": "使用条款",
      "Politique de confidentialité": "隐私政策",
      "Mentions légales": "法律提示",
      "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.":
        "是寻找经过验证的合格服务提供商的领先平台。",
      "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.":
        "用户的信任是我们的首要任务。我们网络中的所有专业人员都经过评估，并且记录了他们的信息以确保您的安全。",
      "100% de profils vérifiés": "100% 验证个人资料",
      "Applications Mobiles": "移动应用",
      "Suivez-nous": "关注我们",
      "Tous droits réservés.": "版权所有。",
      "12 Avril 2026": "2026年4月12日",
      "8 Mars 2026": "2026年3月8日",
      "20 Mai 2026": "2026年5月20日",
      "Contactez-nous": "联系我们",
      "Nous sommes là pour": "我们在此",
      "vous aider.": "为您提供帮助。",
      "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.":
        "有问题需要帮助，或者只是想给我们反馈？我们的团队随时为您服务。",
      "Informations de contact": "联系信息",
      Email: "电子邮件",
      "Pour toute demande générale": "如有任何常规查询",
      Téléphone: "电话",
      "Du lundi au vendredi, de 9h à 18h": "周一至周五，上午 9 点至下午 6 点",
      Adresse: "地址",
      Plateau: "Plateau",
      "Abidjan, Côte d'Ivoire": "阿比让，科特迪瓦",
      "Téléchargez notre application": "下载我们的应用程序",
      "Emportez UpTaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.":
        "随身携带 UpTaskers。通过您的手机管理您的项目、与专业人士交流并跟踪您的请求的进度。",
      "Centre de ressources": "资源中心",
      "Outils et guides pour": "工具和指南，助您",
      "réussir.": "成功。",
      "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.":
        "由我们的专家创建的独家内容，用于支持您的项目，无论您是要求严格的客户还是雄心勃勃的专业人士。",
      "Espace Clients": "客户专区",
      "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.":
        "安心地将您的想法变为现实。我们的指南可帮助您在项目的每个阶段做出最佳决策。",
      "Comment bien définir votre projet ?": "如何很好地定义您的项目？",
      "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.":
        "学习编写清晰的规范以获取最佳报价。",
      "Choisir le prestataire idéal": "选择理想的服务提供商",
      "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.":
        "选择适合您需求的专业人员的基本标准。",
      "Guide des tarifs 2024": "2024 年定价指南",
      "Découvrez les prix moyens du marché pour budgétiser vos travaux.":
        "发现市场平均价格以为您的工程做预算。",
      "Espace Prestataires": "提供商专区",
      "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.":
        "促进您的业务并优化您的管理。了解在平台上脱颖而出的最佳实践。",
      "Optimiser votre vitrine": "优化您的展柜",
      "Conseils pratiques pour rendre votre profil plus attractif pour les clients.":
        "有关如何使您的个人资料对客户更具吸引力的实用建议。",
      "Réussir son premier contact": "成功进行首次接触",
      "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.":
        "如何有效响应请求以最大化您的签约机会。",
      "Obtenir plus d'avis positifs": "获得更多好评",
      "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.":
        "建立客户忠诚度和发展您的电子声誉的最佳策略。",
      "Formations Vidéo": "视频培训",
      "Apprenez à maîtriser toutes les fonctionnalités de UpTaskers en quelques minutes grâce à nos tutoriels interactifs.":
        "通过我们的互动教程，在几分钟内学习掌握 UpTaskers 的所有功能。",
      "Voir les tutoriels": "查看教程",
      "Formation vidéo": "视频培训",
      "À propos de nous": "关于我们",
      "Découvrez UpTaskers": "探索 UpTaskers",
      "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.":
        "欢迎来到 UpTaskers，这是一个致力于连接个人、公司和合格专业人士的平台。",
      "Qui sommes-nous ?": "我们是谁？",
      "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.":
        "我们的使命很简单：让每个人都能快速找到有能力且值得信赖的服务提供商来满足他们的需求，同时为专业人士提供发展业务和提高知名度的机会。",
      "Notre Vision": "我们的愿景",
      "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.":
        "我们相信每一项技能都应该受到重视，每一个需求都值得一个合适的解决方案。",
      "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.":
        "我们的志向是创建一个生态系统，让客户和供应商能够在一个安全的环境中轻松自信地建立合作关系。",
      "Ce que nous proposons": "我们提供什么",
      "Pour les utilisateurs :": "致用户：",
      "Rechercher des professionnels qualifiés.": "寻找合格的专业人士。",
      "Publier leurs besoins et recevoir des propositions.":
        "发布他们的需求并接收建议。",
      "Comparer les profils, expériences et avis.":
        "比较个人资料、经验和评论。",
      "Contacter directement les prestataires.": "直接联系提供商。",
      "Trouver rapidement des solutions adaptées à leurs projets.":
        "快速找到适合其项目的解决方案。",
      "Pour les professionnels :": "致专业人士：",
      "Créer un profil détaillé.": "创建详细的个人资料。",
      "Présenter leurs compétences et réalisations.": "展示他们的技能和成就。",
      "Développer leur clientèle.": "开发客户群。",
      "Recevoir des demandes de services.": "接收服务请求。",
      "Valoriser leur expertise auprès d'un large public.":
        "向广大受众展示他们的专业知识。",
      "Nos Valeurs": "我们的价值观",
      "Qualité :": "质量：",
      "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.":
        "我们鼓励在我们平台上执行的每一项服务都能做到卓越。",
      "Compétence :": "能力：",
      "Nous mettons en avant les talents et le savoir-faire des professionnels.":
        "我们着重强调专业人士的才华和专业知识。",
      "Professionnalisme :": "职业精神：",
      "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.":
        "我们在所有用户之间提倡认真、尊重和透明的关系。",
      "Confiance :": "信任：",
      "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.":
        "我们不断努力提供可靠且安全的环境。",
      "Pourquoi nous choisir ?": "为什么选择我们？",
      "Une plateforme simple et intuitive.": "一个简单直观的平台。",
      "Des professionnels qualifiés.": "合格的专业人士。",
      "Une mise en relation rapide.": "快速建立联系。",
      "Un accompagnement orienté vers la satisfaction des utilisateurs.":
        "以用户满意度为导向的支持。",
      "Un engagement constant en faveur de la qualité des services.":
        "不断致力于服务质量。",
      "Notre engagement": "我们的承诺",
      "Au service de vos besoins": "为您服务",
      "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.":
        "我们致力于不断完善我们的平台，以便为用户提供最佳体验。无论您是寻找专业人士还是想提供自己的服务，我们都会在这里为您实现项目提供支持。",
      "Qualité • Compétence • Professionnalisme": "质量 • 能力 • 职业精神",
      "Retour à l'accueil": "返回首页",
      "Toutes nos catégories": "我们所有的类别",
      "Explorez nos": "探索我们的",
      catégories: "类别",
      "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.":
        "发现我们专业人员的多样性，在我们众多的类别中为您的项目找到理想的专家。",
      "Rechercher une catégorie...": "搜索类别...",
      "Aucune catégorie trouvée pour": "未找到类别：",
      "Avantages Exclusifs": "独家福利",
      "Maximisez votre ": "最大化您的",
      "impact.": "影响力。",
      "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.":
        "无论您是希望发展客户群的专业人士，还是寻找可信赖专家的个人，UpTaskers 都能为您提供最优秀的成功工具。",
      "Développez votre activité": "发展您的业务",
      "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.":
        "访问庞大的合格客户群，无需寻找客户即可增加您的营业额。",
      "Paiements sécurisés": "安全支付",
      "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.":
        "享受 100% 安全的支付系统。请放心，您将快速安心地收到付款。",
      "Gestion simplifiée": "简化管理",
      "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.":
        "直接从您的直观仪表板管理您的约会、报价和发票。",
      "Communauté de confiance": "值得信赖的社区",
      "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.":
        "加入一个经过验证的专业人士社区，在这里质量和尊重是关键词。",
      "Visibilité accrue": "提高知名度",
      "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.":
        "利用我们在数字营销方面的专业知识，出现在本地搜索结果的顶部。",
      "Réputation valorisée": "重视声誉",
      "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.":
        "收集真实的评论，提高您的可信度并自然地吸引新客户。",
      "Prêt à libérer votre potentiel ?": "准备好释放您的潜力了吗？",
      "Rejoignez la plateforme qui transforme la façon dont les professionnels et les clients collaborent.":
        "加入能够改变专业人士和客户合作方式的平台。",
      "Rejoindre UpTaskers maintenant": "立即加入 UpTaskers",
      "Tendances du mois": "本月趋势",
      "Les catégories les plus utilisées": "最常用的类别",
      "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.":
        "发现本月最受欢迎的服务并找到理想的专家。",
      "Très demandé": "高需求",
      "Voir toutes les catégories": "查看所有类别",
      "Des experts vérifiés": "经过验证的专家",
      "Des talents pour chaque besoin": "满足各种需求的人才",
      "Parcourez les profils de nos meilleurs professionnels et trouvez l'expert idéal.":
        "浏览我们最优秀专业人士的个人资料，找到理想的专家。",
      "Designer UX/UI": "UX/UI设计师",
      "Développeur Full-Stack": "全栈开发人员",
      "Rédactrice Web App": "Web应用文案",
      "Artisan Plombier": "水管工",
      "Assistante Virtuelle": "虚拟助手",
      "Technicien IT": "IT 技术员",
      avis: "评价",
      "Voir le profil": "查看个人资料",
      "Déjà plus de 10 000 clients et 5 000 professionnels ont franchi le pas ! Avec 25 000 missions réussies et 98 % de satisfaction, UpTaskers est la référence incontournable de votre quotidien.":
        "已经有超过 10,000 名客户和 5,000 名专业人士迈出了这一步！凭借 25,000 成功任务和 98% 的满意度，UpTaskers 是您日常生活的必备参考。",
      "Découvrez nos services": "了解我们的服务",
      "Note moyenne basée sur": "平均评分基于",
      "+12,000 avis certifiés": "+12,000 条认证评论",
      "Utilisateurs/mois": "用户/月",
      Satisfaction: "满意度",
      "Rép. moyenne": "平均回复",
      Missions: "任务",
      Maçonnerie: "砖石工程",
      Carrelage: "瓷砖",
      "Montage vidéo": "视频编辑",
      Programmation: "编程",
      "Retour aux catégories": "Back to categories",
      "Experts en": "Experts in",
      "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :":
        "Find the best highly qualified and certified professionals to meet your most specific requirements in:",
      "Confiez-nous vos projets pour une réalisation d'excellence.":
        "Entrust us with your projects for an excellent execution.",
      "Qualité Supérieure": "Superior Quality",
      "L'élite des": "The elite of",
      "professionnels.": "professionals.",
      "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.":
        "We rigorously evaluate and select the best profiles on the market to ensure the success and excellence of your projects.",
      "Espace client": "Client Area",
      "Espace prestataire": "Provider Area",
      "Connectez-vous ou inscrivez-vous": "Log in or sign up",
      "Continuer avec Google": "Continue with Google",
      "Continuer avec Apple": "Continue with Apple",
      "Continuer avec un numéro de téléphone": "Continue with a phone number",
      "Adresse e-mail": "Email address",
      Continuer: "Continue",
      "Rejoignez la confiance.": "Join the trust.",
      "Sécurité garantie": "Guaranteed security",
      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.":
        "Secure payments, verified profiles, and responsive 7/7 customer support.",
      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.":
        "A transparent community where every review is based on a real service.",
      "Créer un compte": "Create an account",
      "Sélectionnez votre type de profil pour commencer":
        "Select your profile type to start",
      "Je cherche un professionnel": "I am looking for a professional",
      "Je propose mes services": "I offer my services",
      "Nom complet": "Full name",
      "Adresse email": "Email address",
      "Mot de passe": "Password",
      "J'accepte les": "I accept the",
      "et la": "and the",
      Support: "支持",
      "Download on the": "Download on the",
      "Disponible sur": "Available on",
      "Du lundi au dimanche": "周一至周日",
      "Du lundi au dimanche, 24h/24": "周一至周日，全天24小时",
      "Le/La maçon(ne)": "The mason",
      "hero.desc.masonry":
        "Qualified craftsmen for all your construction, facade and landscaping work.",
      "Le/La coiffeur(euse)": "The hairdresser",
      "hero.desc.hairdress":
        "Call on our hairdressing experts for a custom cut, color or styling.",
      "L'organisateur(trice)": "The event organizer",
      "hero.desc.eventorg":
        "Entrust the planning of your weddings, parties and corporate events to our passionate experts.",
      "L'avocat(e) / juriste": "The lawyer / jurist",
      "hero.desc.law":
        "Secure your processes with our selection of competent lawyers and legal professionals.",
      "Découvrez notre objectif": "发现我们的目标",
      Notre: "我们的",
      Mission: "使命",
      "Connecter les besoins aux meilleures compétences":
        "将需求与最佳技能联系起来",
      "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.":
        "我们的任务是帮助寻找高质量服务的人和能够响应他们能力的专业人士会面。",
      "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.":
        "在一个很难找到合适的服务提供商或宣传您的技能的世界中，我们的平台在客户和专业人士之间建立了简单、快速和可靠的桥梁。",
      "Pourquoi existons-nous ?": "我们为何存在？",
      "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :":
        "每天，成千上万的人在寻找满足其需求的解决方案：",
      "Trouver un répétiteur pour accompagner un enfant.":
        "寻找导师来陪伴孩子。",
      "Faire appel à un menuisier pour fabriquer un meuble.":
        "找木匠做一件家具。",
      "Recruter un développeur pour créer un site web.":
        "招聘开发人员来创建网站。",
      "Trouver un électricien, un plombier ou un artisan qualifié.":
        "找一位有执照的电工、水管工或工匠。",
      "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.":
        "让值得信赖的专业人员帮助进行个人或专业项目。",
      "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.":
        "创建我们平台的目的是使搜索变得更加简单、快速和高效。",
      "Ce que nous apportons": "我们带来了什么",
      "Pour les clients": "对于客户",
      "Nous permettons aux utilisateurs de :": "我们允许用户进行以下操作：",
      "Trouver facilement des professionnels qualifiés.":
        "轻松找到合格的专业人员。",
      "Comparer plusieurs prestataires.": "比较几个服务提供商。",
      "Consulter les profils et les expériences.": "查看个人资料和经验。",
      "Gagner du temps dans leurs recherches.": "节省搜索时间。",
      "Réaliser leurs projets en toute confiance.":
        "充满信心地执行他们的项目。",
      "Pour les professionnels": "对于专业人士",
      "Nous aidons les prestataires à :": "我们帮助提供商：",
      "Mettre en valeur leurs compétences.": "突出他们的技能。",
      "Développer leur visibilité.": "扩大知名度。",
      "Trouver de nouveaux clients.": "寻找新客户。",
      "Développer leur activité.": "拓展业务。",
      "Construire leur réputation professionnelle.": "建立职业声誉。",
      "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.":
        "我们希望建立一个让每个人的才华、专业知识和专业精神都得到认可和获取的社区。",
      "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.":
        "我们相信，通过将合适的技能与合适的需求联系起来，我们可以为每个人创造更多的机会、信心和成功。",
      "Nos engagements": "我们的承诺",
      "Qualité dans les services proposés.": "所提供服务的质量。",
      "Compétence des professionnels présents sur la plateforme.":
        "平台上展示的专业人员的能力。",
      "Professionnalisme dans chaque interaction.": "每次互动中的专业精神。",
      "Transparence et confiance entre les utilisateurs.":
        "用户之间的透明度和信任。",
      "Innovation pour améliorer continuellement l'expérience.":
        "创新以持续改进体验。",
      "Notre Promesse": "我们的承诺",
      "Transformer chaque besoin en opportunité et chaque compétence en solution.":
        "把每个需求变成机会，把每一项技能都变成解决方案。",
      "Au service de vos besoins.": "服务于您的需求。",
      "Aide et assistance": "帮助和支持",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "FR", // default language
  fallbackLng: "FR",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
