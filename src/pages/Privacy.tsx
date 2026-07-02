import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Database,
  TrendingUp,
  Users,
  Mail,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function Privacy({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  const [lastUpdated, setLastUpdated] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: t("1. Introduction"),
      content: t("Studio UpTaskers est une plateforme de mise en relation de talents et d'offres. Cette politique explique comment nous collectons, utilisons et protégeons vos informations."),
    },
    {
      id: "device-permissions",
      icon: Eye,
      title: t("2. Autorisations de l'appareil"),
      content: t("UpTaskers peut demander certaines autorisations afin de fournir ses fonctionnalités :"),
      list: [
        t("Localisation : pour afficher les missions et prestataires à proximité."),
        t("Caméra : pour ajouter une photo de profil ou des preuves de mission."),
        t("Galerie : pour sélectionner des images depuis l'appareil."),
        t("Notifications : pour informer les utilisateurs des nouvelles missions, messages et paiements."),
        t("Biométrie (empreinte digitale ou reconnaissance faciale) : pour sécuriser l'accès à certaines opérations sensibles telles que les retraits."),
      ]
    },
    {
      id: "app-type",
      icon: TrendingUp,
      title: t("3. Type d'Application"),
      content: t("Studio UpTaskers est un réseau professionnel et un gestionnaire de tâches. Il facilite la publication d'annonces et la recherche de profils qualifiés."),
      highlight: true,
    },
    {
      id: "data-collected",
      icon: Database,
      title: t("4. Données Collectées"),
      content: t("Nous pouvons collecter les données suivantes :"),
      list: [
        t("Informations de profil (nom, email, photo)"),
        t("Préférences de l'application (thème, langue)"),
        t("Données de localisation (pour la carte et les offres à proximité)"),
        t("Historique des missions et transactions (via les services sécurisés)"),
      ],
    },
    {
      id: "payments",
      icon: Lock,
      title: t("5. Paiements et transactions"),
      content: t("UpTaskers peut utiliser des prestataires de paiement tiers sécurisés pour traiter les transactions. Les informations de paiement sont traitées de manière sécurisée et conformément aux exigences applicables."),
    },
    {
      id: "data-usage",
      icon: Eye,
      title: t("6. Utilisation des Données"),
      content: t("Les données collectées sont utilisées pour :"),
      list: [
        t("Fournir les fonctionnalités de base de l'application"),
        t("Personnaliser votre expérience (recommandations de profils)"),
        t("Améliorer nos services et la sécurité"),
        t("Faciliter la communication dans les salles de chat"),
      ],
    },
    {
      id: "cookies",
      icon: Database,
      title: t("7. Cookies et technologies similaires"),
      content: t("Nous pouvons utiliser des cookies ou technologies similaires afin d'améliorer l'expérience utilisateur, mémoriser certaines préférences et analyser l'utilisation de nos services."),
    },
    {
      id: "security",
      icon: Lock,
      title: t("8. Sécurité"),
      content: t("Mesures de sécurité mises en place :"),
      list: [
        t("Vos données personnelles sont stockées sur des serveurs sécurisés"),
        t("Les données sont transmises et stockées à l'aide de mesures de sécurité adaptées visant à protéger les informations des utilisateurs contre tout accès non autorisé"),
        t("L'accès biométrique ou par mot de passe reste confidentiel"),
      ],
    },
    {
      id: "fraud-prevention",
      icon: Shield,
      title: t("9. Prévention de la fraude"),
      content: t("Nous pouvons utiliser certaines informations afin de prévenir les activités frauduleuses, protéger les utilisateurs et garantir la sécurité de la plateforme."),
    },
    {
      id: "data-sharing",
      icon: Users,
      title: t("10. Partage des Données"),
      content: t("Nous ne vendons ni ne partageons vos données personnelles à des tiers à des fins de marketing sans votre consentement explicite."),
    },
    {
      id: "data-retention",
      icon: FileText,
      title: t("11. Conservation des données"),
      content: t("Les données personnelles sont conservées aussi longtemps que nécessaire pour fournir les services de UpTaskers, respecter nos obligations légales, résoudre les litiges et appliquer nos accords."),
    },
    {
      id: "account-deletion",
      icon: FileText,
      title: t("12. Suppression du compte"),
      content: t("Les utilisateurs peuvent demander la suppression de leur compte directement depuis l'application ou en contactant notre équipe d'assistance. Certaines données peuvent être conservées lorsque la loi l'exige ou pour des raisons de sécurité et de prévention de la fraude."),
    },
    {
      id: "your-rights",
      icon: FileText,
      title: t("13. Vos Droits"),
      content: t("En tant qu'utilisateur de Studio UpTaskers, vous avez les droits suivants :"),
      list: [
        t("Accéder à vos données"),
        t("Mettre à jour vos informations"),
        t("Supprimer votre compte et vos données"),
        t("Gérer vos préférences de notification"),
      ],
    },
    {
      id: "policy-modification",
      icon: FileText,
      title: t("14. Modification de cette politique"),
      content: t("Nous pouvons mettre à jour cette politique de confidentialité à tout moment. Les modifications importantes seront communiquées aux utilisateurs via l'application ou par d'autres moyens appropriés."),
    },
    {
      id: "contact",
      icon: Mail,
      title: t("15. Contact"),
      content: t("Pour toute question concernant cette politique, n'hésitez pas à nous contacter :"),
      contact: "contact@up-taskers.com",
    },
  ];

  useEffect(() => {
    setLastUpdated("12 juin 2026");

    const handleScroll = () => {
      const sectionElements = sections.map((s) =>
        document.getElementById(s.id),
      );
      let currentActive = sections[0].id;

      for (const el of sectionElements) {
        if (el && window.scrollY >= el.offsetTop - 150) {
          currentActive = el.id;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
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
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                {t("Légal & Confidentialité")}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
              {t("Politique de Confidentialité")}
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              {t("Nous nous engageons à protéger votre vie privée et à sécuriser vos données. Dernière mise à jour le")}{" "}
              <span className="font-semibold text-slate-800">
                {lastUpdated}
              </span>
              .
            </p>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => onNavigate("/")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm shadow-blue-600/20"
              >
                {t("Retour à l'accueil")}
              </button>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            {/* Left Sidebar - Table of Contents */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-3">
                  {t("Sommaire")}
                </h4>
                <div className="flex flex-col space-y-1">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left px-3 py-2.5 rounded-xl text-[14px] transition-all duration-200 flex items-center gap-3 relative ${
                          isActive
                            ? "bg-blue-50 text-blue-700 font-bold"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 font-medium"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute left-0 w-1 h-full bg-blue-500 rounded-r-full"
                          />
                        )}
                        <span className="ml-1">
                          {section.title.split(". ")[1]}
                        </span>
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
                        <p
                          className={`text-[16px] leading-relaxed ${section.highlight ? "text-slate-800 font-semibold bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50" : "text-slate-600"}`}
                        >
                          <LogoText>{section.content}</LogoText>
                        </p>

                        {section.list && (
                          <ul className="mt-6 space-y-3 p-0">
                            {section.list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-4 text-slate-600"
                              >
                                <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-blue-400" />
                                <span className="leading-relaxed font-medium">
                                  <LogoText>{item}</LogoText>
                               </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.contact && (
                          <div className="mt-8 p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col items-start shadow-blue-900/5">
                            <span className="text-slate-600 mb-2 font-medium">Contactez notre équipe de confidentialité :</span>
                            <a
                              href={`mailto:${section.contact}`}
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

                {/* Information Importante Block */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="mt-16 bg-blue-50/50 border border-blue-100 rounded-3xl p-8 lg:p-10 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">{t("Information Importante")}</h3>
                      <h2 className="text-2xl font-bold text-slate-900">{t("Votre Confiance Avant Tout")}</h2>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    <LogoText>{t("Studio UpTaskers a été conçu pour offrir un environnement sûr et transparent. Nous ne vendrons jamais vos données personnelles et mettons tout en oeuvre pour vous garantir une expérience professionnelle de haute qualité.")}</LogoText>
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-semibold text-slate-700">{t("Sécurisé")}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-semibold text-slate-700">{t("Transparent")}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                      <CheckCircle className="w-4 h-4 text-violet-500" />
                      <span className="text-sm font-semibold text-slate-700">{t("Professionnel")}</span>
                    </div>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
