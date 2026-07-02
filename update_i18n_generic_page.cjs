const fs = require('fs');
let content = fs.readFileSync('src/i18n.ts', 'utf8');

const tStrings = `
      "Bienvenue sur la page": "Bienvenue sur la page",
      "Cette section de TASKup est actuellement en cours de développement.": "Cette section de TASKup est actuellement en cours de développement.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.",
`;

const enStrings = `
      "Bienvenue sur la page": "Welcome to the page",
      "Cette section de TASKup est actuellement en cours de développement.": "This section of TASKup is currently under development.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Our platform is continuously evolving to provide you with the best experience. Stay tuned for updates as we build out this comprehensive resource.",
`;

const esStrings = `
      "Bienvenue sur la page": "Bienvenido a la página",
      "Cette section de TASKup est actuellement en cours de développement.": "Esta sección de TASKup se encuentra actualmente en desarrollo.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Nuestra plataforma evoluciona continuamente para ofrecerle la mejor experiencia. Esté atento a las actualizaciones a medida que construimos este recurso completo.",
`;

const deStrings = `
      "Bienvenue sur la page": "Willkommen auf der Seite",
      "Cette section de TASKup est actuellement en cours de développement.": "Dieser Bereich von TASKup befindet sich derzeit in der Entwicklung.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Unsere Plattform entwickelt sich ständig weiter, um Ihnen das beste Erlebnis zu bieten. Bleiben Sie dran für Updates, während wir diese umfassende Ressource ausbauen.",
`;

const itStrings = `
      "Bienvenue sur la page": "Benvenuto nella pagina",
      "Cette section de TASKup est actuellement en cours de développement.": "Questa sezione di TASKup è attualmente in fase di sviluppo.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "La nostra piattaforma è in continua evoluzione per offrirti la migliore esperienza. Resta sintonizzato per gli aggiornamenti mentre costruiamo questa risorsa completa.",
`;

const ptStrings = `
      "Bienvenue sur la page": "Bem-vindo à página",
      "Cette section de TASKup est actuellement en cours de développement.": "Esta seção do TASKup está atualmente em desenvolvimento.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "Nossa plataforma está em contínua evolução para lhe oferecer a melhor experiência. Fique atento às atualizações enquanto construímos este recurso abrangente.",
`;

const arStrings = `
      "Bienvenue sur la page": "مرحبًا بك في صفحة",
      "Cette section de TASKup est actuellement en cours de développement.": "هذا القسم من TASKup قيد التطوير حاليًا.",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "تتطور منصتنا باستمرار لتزويدك بأفضل تجربة. ابق على اطلاع بالتحديثات بينما نقوم ببناء هذا المورد الشامل.",
`;

const zhStrings = `
      "Bienvenue sur la page": "欢迎来到页面",
      "Cette section de TASKup est actuellement en cours de développement.": "TASKup 的此部分目前正在开发中。",
      "Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.": "我们的平台不断发展，以为您提供最佳体验。在我们构建这个全面的资源时，请继续关注更新。",
`;

content = content.replace(/FR: \{\n    translation: \{/, "FR: {\n    translation: {" + tStrings);
content = content.replace(/EN: \{\n    translation: \{/, "EN: {\n    translation: {" + enStrings);
content = content.replace(/ES: \{\n    translation: \{/, "ES: {\n    translation: {" + esStrings);
content = content.replace(/DE: \{\n    translation: \{/, "DE: {\n    translation: {" + deStrings);
content = content.replace(/IT: \{\n    translation: \{/, "IT: {\n    translation: {" + itStrings);
content = content.replace(/PT: \{\n    translation: \{/, "PT: {\n    translation: {" + ptStrings);
content = content.replace(/AR: \{\n    translation: \{/, "AR: {\n    translation: {" + arStrings);
content = content.replace(/ZH: \{\n    translation: \{/, "ZH: {\n    translation: {" + zhStrings);

fs.writeFileSync('src/i18n.ts', content, 'utf8');
