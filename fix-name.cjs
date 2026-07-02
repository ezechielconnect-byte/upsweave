const fs = require('fs');

const files = [
  'src/pages/Contact.tsx',
  'src/pages/TermsOfUse.tsx',
  'src/pages/Home.tsx',
  'src/pages/Disclaimer.tsx',
  'src/pages/SignUp.tsx',
  'src/pages/Privacy.tsx',
  'src/pages/Payment.tsx',
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(/expertlink\.fr/g, 'taskup.fr');
    content = content.replace(/ExpertLink/g, 'TASKup');
    content = content.replace(/expertlink/g, 'TASKup');

    fs.writeFileSync(file, content);
});

console.log('Fixed name to TASKup');
