import fs from 'fs';

const content = `import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Database, TrendingUp, Users, Mail, ChevronRight, CheckCircle } from 'lucide-react';

const sections = [
  {
    id: 'introduction',
    icon: Shield,
    title: '1. Introduction',
    content: "TASKup est la plateforme de référence pour la mise en relation entre professionnels qualifiés et clients. Cette politique explique comment nous recueillons, utilisons et protégeons vos informations personnelles."
  },
  {
    id: 'app-type',
    icon: TrendingUp,
    title: '2. Nature du Service',
    content: "TASKup permet de trouver, de contacter et de travailler avec des experts dans de multiples domaines, en garantissant la sécurité des paiements et la qualité des échanges.",
    highlight: true
  },
  {
    id: 'data-collected',
    icon: Database,
    title: '3. Données Collectées',
    content: "Nous pouvons recueillir les données suivantes :",
    list: [
      "Informations de base (nom, prénom, adresse e-mail, téléphone)",
      "Documents d'identité (pour la vérification stricte des professionnels)",
      "Préférences utilisateur et paramètres de notification",
      "Données de paiement (traitées et sécurisées par nos prestataires tiers agréés)",
      "Historique des missions, messages, et évaluations laissées sur la plateforme"
    ]
  },
  {
    id: 'data-usage',
    icon: Eye,
    title: '4. Utilisation des Données',
    content: "Les données collectées sont utilisées pour :",
    list: [
      "Faciliter la mise en relation entre clients et prestataires",
      "Personnaliser votre expérience (affiner les résultats de recherche d'experts)",
      "Garantir le bon déroulement et le suivi des missions",
      "Assurer la sécurité des accès et lutter contre la fraude"
    ]
  },
  {
    id: 'security',
    icon: Lock,
    title: '5. Sécurité',
    content: "Nous prenons la sécurité de vos données très au sérieux. Mesures en place :",
    list: [
      "Vos données personnelles sont stockées sur des serveurs hautement sécurisés",
      "Les transactions financières (paiement) sont cryptées de bout en bout (PCI-DSS)",
      "Authentification sécurisée pour protéger l'accès à votre compte TASKup"
    ]
  },
  {
    id: 'data-sharing',
    icon: Users,
    title: '6. Partage des Données',
    content: "Nous ne vendons en aucun cas vos données personnelles. Elles peuvent être partagées dans les cas strictement nécessaires suivants :",
    list: [
      "Les informations strictement requises sont échangées entre le client et le prestataire lors de la confirmation d'une mission",
      "Avec nos partenaires de paiement pour valider le séquestre et le versement",
      "Afin de se conformer à des obligations légales en vigueur"
    ]
  },
  {
    id: 'your-rights',
    icon: FileText,
    title: '7. Vos Droits',
    content: "En tant qu'utilisateur de TASKup, vous disposez des droits suivants (conformément au RGPD) :",
    list: [
      "Accéder à vos données et en demander la copie",
      "Rectifier ou mettre à jour vos informations inexactes",
      "Demander la suppression de votre profil, historique et compte",
      "Vous opposer à recevoir nos newsletters et alertes de mission"
    ]
  },
  {
    id: 'contact',
    icon: Mail,
    title: '8. Contact',
    content: "Pour toute demande d'information ou pour exercer vos droits sur vos données, vous pouvez nous écrire :",
    contact: "privacy@taskup.fr"
  }
];

export default function Privacy({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [lastUpdated, setLastUpdated] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    setLastUpdated(
      new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
    );

    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      let currentActive = sections[0].id;
      
      for (const el of sectionElements) {
        if (el && window.scrollY >= el.offsetTop - 150) {
          currentActive = el.id;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden relative"
    >
      {/* Professional Elegant Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgNDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-24 pb-24">
        <Navbar onNavigate={onNavigate} />
        
        <main className="w-full max-w-[1200px] px-6 lg:px-8 mt-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Légal & Confidentialité</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
              Politique de Confidentialité
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données sur la plateforme. 
              Dernière mise à jour le <span className="font-semibold text-slate-800">{lastUpdated || '—'}</span>.
            </p>
            <div className="mt-8 flex gap-4">
               <button onClick={() => onNavigate('/')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm shadow-blue-600/20">
                 Retour à l'accueil
               </button>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* Left Sidebar - Table of Contents */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-3">
                  Sommaire
                </h4>
                <div className="flex flex-col space-y-1">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={\`text-left px-3 py-2.5 rounded-xl text-[14px] transition-all duration-200 flex items-center gap-3 relative \${
                          isActive 
                            ? "bg-blue-50 text-blue-700 font-bold" 
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 font-medium"
                        }\`}
                      >
                        {isActive && <motion.div layoutId="activeIndicator" className="absolute left-0 w-1 h-full bg-blue-500 rounded-r-full" />}
                        <span className="ml-1">{section.title.split('. ')[1]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 max-w-3xl">
              <div className="space-y-16">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.section
                      id={section.id}
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-32"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                          {section.title}
                        </h2>
                      </div>
                      
                      <div className="prose prose-slate max-w-none">
                        <p className={\`text-[16px] leading-relaxed \${section.highlight ? "text-slate-800 font-semibold bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50" : "text-slate-600"}\`}>
                          {section.content}
                        </p>

                        {section.list && (
                          <ul className="mt-6 space-y-3 p-0">
                            {section.list.map((item, i) => (
                              <li key={i} className="flex items-start gap-4 text-slate-600">
                                <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                                <span className="leading-relaxed font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.contact && (
                          <div className="mt-8 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col items-start shadow-blue-900/5">
                            <p className="text-sm text-slate-500 mb-3 font-medium">Contactez notre équipe responsable de la vie privée :</p>
                            <a
                              href={\`mailto:\${section.contact}\`}
                              className="text-blue-600 hover:text-blue-700 font-bold transition-colors inline-flex items-center gap-2 group text-lg"
                            >
                              {section.contact}
                              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.section>
                  );
                })}

                {/* Privacy Commitment Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-20 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 opacity-10">
                    <CheckCircle className="w-64 h-64" />
                  </div>
                  
                  <div className="relative z-10 w-full md:w-3/4">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-300" />
                      <span className="text-sm font-extrabold tracking-widest text-blue-200 uppercase">Engagement de Confiance</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      Votre Sécurité Avant Tout
                    </h3>
                    
                    <p className="text-blue-100 leading-relaxed mb-8 text-[15px] font-medium">
                      TASKup a été pensé et conçu pour vous offrir un environnement sûr et de confiance. Aucun compromis n'est fait avec vos données et votre confidentialité, pour que vous puissiez développer votre activité et recourir à des experts en toute sérénité.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {['Paiements Sécurisés', 'Identités Vérifiées', 'Confidentialité Protégée'].map((tag, i) => (
                        <div key={i} className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold text-white">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
            
          </div>
        </main>
      </div>
    </motion.div>
  );
}
`;

fs.writeFileSync('src/pages/Privacy.tsx', content);
