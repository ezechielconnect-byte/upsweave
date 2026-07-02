import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Star,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function ProviderDashboard({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgNDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-24 pb-24">
        <Navbar onNavigate={onNavigate} />

        <main className="w-full max-w-[1200px] px-6 lg:px-8 mt-12 flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <Star className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                {t("À propos de nous")}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
              {t("Découvrez UpTaskers").split(" ")[0]}{" "}
              <span className="inline-block align-baseline">
                <LogoText>UpTaskers</LogoText>
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              <LogoText>{t(
                "Bienvenue sur UpTaskers, une plateforme dédiée à la mise en relation entre particuliers, entreprises et professionnels qualifiés.",
              )}</LogoText>
            </p>
          </motion.div>

          {/* Section: Qui sommes-nous / Notre vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-shadow flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t("Qui sommes-nous ?")}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                {t(
                  "Notre mission est simple : permettre à chacun de trouver rapidement des prestataires compétents et de confiance pour répondre à ses besoins, tout en offrant aux professionnels une opportunité de développer leur activité et de gagner en visibilité.",
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-shadow flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t("Notre Vision")}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                {t(
                  "Nous croyons que chaque compétence mérite d'être valorisée et que chaque besoin mérite une solution adaptée.",
                )}
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                {t(
                  "Notre ambition est de créer un écosystème où clients et prestataires peuvent collaborer facilement, en toute confiance et dans un environnement sécurisé.",
                )}
              </p>
            </motion.div>
          </div>

          {/* Section: Ce que nous proposons */}
          <div className="w-full max-w-5xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              {t("Ce que nous proposons")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-100 rounded-3xl p-8 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t("Pour les utilisateurs :")}
                </h3>
                <ul className="space-y-3">
                  {[
                    t("Rechercher des professionnels qualifiés."),
                    t("Publier leurs besoins et recevoir des propositions."),
                    t("Comparer les profils, expériences et avis."),
                    t("Contacter directement les prestataires."),
                    t(
                      "Trouver rapidement des solutions adaptées à leurs projets.",
                    ),
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-blue-50 rounded-3xl p-8 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {t("Pour les professionnels :")}
                </h3>
                <ul className="space-y-3">
                  {[
                    t("Créer un profil détaillé."),
                    t("Présenter leurs compétences et réalisations."),
                    t("Développer leur clientèle."),
                    t("Recevoir des demandes de services."),
                    t("Valoriser leur expertise auprès d'un large public."),
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Section: Nos valeurs & Pourquoi nous choisir ? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start text-left"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {t("Nos Valeurs")}
              </h3>
              <div className="space-y-4">
                <div className="text-slate-600 leading-relaxed font-medium">
                  <strong className="text-slate-900">{t("Qualité :")}</strong>{" "}
                  {t(
                    "Nous encourageons l'excellence dans chaque prestation réalisée sur notre plateforme.",
                  )}
                </div>
                <div className="text-slate-600 leading-relaxed font-medium">
                  <strong className="text-slate-900">
                    {t("Compétence :")}
                  </strong>{" "}
                  {t(
                    "Nous mettons en avant les talents et le savoir-faire des professionnels.",
                  )}
                </div>
                <div className="text-slate-600 leading-relaxed font-medium">
                  <strong className="text-slate-900">
                    {t("Professionnalisme :")}
                  </strong>{" "}
                  {t(
                    "Nous favorisons des relations sérieuses, respectueuses et transparentes entre tous les utilisateurs.",
                  )}
                </div>
                <div className="text-slate-600 leading-relaxed font-medium">
                  <strong className="text-slate-900">{t("Confiance :")}</strong>{" "}
                  {t(
                    "Nous travaillons continuellement à offrir un environnement fiable et sécurisé.",
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start text-left"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {t("Pourquoi nous choisir ?")}
              </h3>
              <ul className="space-y-4">
                {[
                  t("Une plateforme simple et intuitive."),
                  t("Des professionnels qualifiés."),
                  t("Une mise en relation rapide."),
                  t(
                    "Un accompagnement orienté vers la satisfaction des utilisateurs.",
                  ),
                  t(
                    "Un engagement constant en faveur de la qualité des services.",
                  ),
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl p-8 md:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
              <Shield className="w-[400px] h-[400px]" />
            </div>

            <div className="relative z-10 w-full md:w-3/4">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="text-sm font-extrabold tracking-widest text-blue-300 uppercase">
                  {t("Notre engagement")}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
                {t("Au service de vos besoins")}
              </h3>

              <p className="text-blue-100 leading-relaxed mb-6 font-medium">
                {t(
                  "Nous nous engageons à améliorer continuellement notre plateforme afin d'offrir la meilleure expérience possible à nos utilisateurs. Que vous soyez à la recherche d'un professionnel ou que vous souhaitiez proposer vos services, nous sommes là pour vous accompagner dans la réalisation de vos projets.",
                )}
              </p>

              <div className="text-lg font-bold text-white tracking-widest uppercase mb-8">
                {t("Qualité • Compétence • Professionnalisme")}
              </div>

              <button
                onClick={() => onNavigate("/")}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-blue-600/30 flex items-center gap-2 group w-fit"
              >
                {t("Retour à l'accueil")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
