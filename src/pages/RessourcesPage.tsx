import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Video,
  HelpCircle,
  Users,
  Briefcase,
  ChevronRight,
  Award,
  Lightbulb,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function RessourcesPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();

  const clientResources = [
    {
      title: t("Comment bien définir votre projet ?"),
      description: t(
        "Apprenez à rédiger un cahier des charges clair pour obtenir les meilleurs devis.",
      ),
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: t("Choisir le prestataire idéal"),
      description: t(
        "Les critères essentiels pour sélectionner le professionnel adapté à votre besoin.",
      ),
      icon: Users,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      title: t("Guide des tarifs 2026"),
      description: t(
        "Découvrez les prix moyens du marché pour budgétiser vos travaux.",
      ),
      icon: HelpCircle,
      color: "text-sky-500",
      bg: "bg-sky-50",
    },
  ];

  const providerResources = [
    {
      title: t("Optimiser votre vitrine"),
      description: t(
        "Conseils pratiques pour rendre votre profil plus attractif pour les clients.",
      ),
      icon: Lightbulb,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      title: t("Réussir son premier contact"),
      description: t(
        "Comment répondre efficacement aux demandes pour maximiser vos chances de signature.",
      ),
      icon: Briefcase,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: t("Obtenir plus d'avis positifs"),
      description: t(
        "Les meilleures stratégies pour fidéliser votre clientèle et développer votre e-réputation.",
      ),
      icon: Award,
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
                {t("Centre de ressources")}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-slate-900"
            >
              {t("Outils et guides pour")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t("réussir.")}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 font-medium leading-relaxed"
            >
              {t(
                "Des contenus exclusifs créés par nos experts pour accompagner vos projets, que vous soyez un client exigeant ou un professionnel ambitieux.",
              )}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Section Clients */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {t("Espace Clients")}
                </h2>
              </div>
              <p className="text-slate-600 mb-8 font-medium">
                {t(
                  "Concrétisez vos idées en toute sérénité. Nos guides vous aident à prendre les meilleures décisions à chaque étape de votre projet.",
                )}
              </p>

              <div className="space-y-4">
                {clientResources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group cursor-pointer"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${resource.bg}`}
                    >
                      <resource.icon className={`w-5 h-5 ${resource.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-snug">
                        {resource.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-400 mt-2" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section Prestataires */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#092b34] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#fca311]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {t("Espace Prestataires")}
                </h2>
              </div>
              <p className="text-slate-600 mb-8 font-medium">
                {t(
                  "Boostez votre activité et optimisez votre gestion. Découvrez nos bonnes pratiques pour exceller sur la plateforme.",
                )}
              </p>

              <div className="space-y-4">
                {providerResources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group cursor-pointer"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${resource.bg}`}
                    >
                      <resource.icon className={`w-5 h-5 ${resource.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-snug">
                        {resource.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-400 mt-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
