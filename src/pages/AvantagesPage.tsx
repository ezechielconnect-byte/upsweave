import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Clock,
  Users,
  Star,
  BadgeCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function AvantagesPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: TrendingUp,
      title: t("Développez votre activité"),
      description: t(
        "Accédez à une large base de clients qualifiés et augmentez votre chiffre d'affaires sans effort de prospection.",
      ),
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200",
    },
    {
      icon: Shield,
      title: t("Paiements sécurisés"),
      description: t(
        "Profitez d'un système de paiement 100% sécurisé. Soyez assuré d'être payé rapidement et en toute sérénité.",
      ),
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200",
    },
    {
      icon: Clock,
      title: t("Gestion simplifiée"),
      description: t(
        "Gérez vos rendez-vous, vos devis et vos factures directement depuis votre tableau de bord intuitif.",
      ),
      color: "text-amber-600",
      bg: "bg-amber-100",
      border: "border-amber-200",
    },
    {
      icon: Users,
      title: t("Communauté de confiance"),
      description: t(
        "Rejoignez une communauté de professionnels vérifiés où la qualité et le respect sont les maîtres mots.",
      ),
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      border: "border-indigo-200",
    },
    {
      icon: BadgeCheck,
      title: t("Visibilité accrue"),
      description: t(
        "Profitez de notre expertise en marketing numérique pour apparaître en tête des résultats de recherche locaux.",
      ),
      color: "text-rose-600",
      bg: "bg-rose-100",
      border: "border-rose-200",
    },
    {
      icon: Star,
      title: t("Réputation valorisée"),
      description: t(
        "Récoltez des avis authentiques qui renforcent votre crédibilité et attirent naturellement de nouveaux clients.",
      ),
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-100",
      border: "border-fuchsia-200",
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
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
                {t("Avantages Exclusifs")}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight text-slate-900"
            >
              {t("Maximisez votre ")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t("impact.")}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 font-medium leading-relaxed"
            >
              <LogoText>{t(
                "Que vous soyez un professionnel cherchant à développer sa clientèle ou un particulier en quête d'experts de confiance, UpTaskers vous offre les meilleurs outils pour réussir.",
              )}</LogoText>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${benefit.bg} ${benefit.border} bg-opacity-50`}
                >
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
