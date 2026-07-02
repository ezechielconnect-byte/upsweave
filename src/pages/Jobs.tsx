import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Target,
  Lightbulb,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  HeartHandshake,
  Eye,
  Briefcase,
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Jobs({
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
        <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] mix-blend-multiply" />
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
              <Target className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                {t("Découvrez notre objectif")}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight text-slate-900">
              {t("Notre")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t("Mission")}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
              {t("Connecter les besoins aux meilleures compétences")}
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {t(
                "Notre mission est de faciliter la rencontre entre les personnes à la recherche de services de qualité et les professionnels compétents capables d'y répondre.",
              )}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mt-4">
              {t(
                "Dans un monde où il est parfois difficile de trouver le bon prestataire ou de faire connaître ses compétences, notre plateforme crée un pont simple, rapide et fiable entre les clients et les professionnels.",
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
            {/* Section: {t("Pourquoi existons-nous ?")} */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] md:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start text-left md:col-span-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  {t("Pourquoi existons-nous ?")}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium mb-6">
                {t(
                  "Chaque jour, des milliers de personnes recherchent des solutions à leurs besoins :",
                )}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {[
                  t("Trouver un répétiteur pour accompagner un enfant."),
                  t("Faire appel à un menuisier pour fabriquer un meuble."),
                  t("Recruter un développeur pour créer un site web."),
                  t(
                    "Trouver un électricien, un plombier ou un artisan qualifié.",
                  ),
                  t(
                    "Obtenir l'aide d'un professionnel de confiance pour un projet personnel ou professionnel.",
                  ),
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-slate-700 font-medium bg-slate-50 p-4 rounded-2xl border border-slate-100"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-800 font-bold leading-relaxed mt-6 text-lg">
                {t(
                  "Notre plateforme a été créée pour rendre ces recherches plus simples, plus rapides et plus efficaces.",
                )}
              </p>
            </motion.div>
          </div>

          {/* Section: Ce que nous apportons */}
          <div className="w-full max-w-5xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              {t("Ce que nous apportons")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-100 rounded-[2rem] md:rounded-3xl p-6 sm:p-8 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <HeartHandshake className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    {t("Pour les clients")}
                  </h3>
                </div>
                <p className="text-slate-600 font-medium mb-4">
                  {t("Nous permettons aux utilisateurs de :")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("Trouver facilement des professionnels qualifiés."),
                    t("Comparer plusieurs prestataires."),
                    t("Consulter les profils et les expériences."),
                    t("Gagner du temps dans leurs recherches."),
                    t("Réaliser leurs projets en toute confiance."),
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 font-medium"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-2" />
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
                className="bg-blue-50 rounded-[2rem] md:rounded-3xl p-6 sm:p-8 border border-blue-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    {t("Pour les professionnels")}
                  </h3>
                </div>
                <p className="text-slate-600 font-medium mb-4">
                  {t("Nous aidons les prestataires à :")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("Mettre en valeur leurs compétences."),
                    t("Développer leur visibilité."),
                    t("Trouver de nouveaux clients."),
                    t("Développer leur activité."),
                    t("Construire leur réputation professionnelle."),
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-700 font-medium"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] md:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 md:w-7 md:h-7 text-amber-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                {t("Notre Vision")}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                {t(
                  "Nous souhaitons bâtir une communauté où le talent, le savoir-faire et le professionnalisme sont reconnus et accessibles à tous.",
                )}
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                {t(
                  "Nous croyons qu'en connectant les bonnes compétences aux bons besoins, nous contribuons à créer davantage d'opportunités, de confiance et de réussite pour chacun.",
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] md:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                {t("Nos engagements")}
              </h3>
              <ul className="space-y-4">
                {[
                  t("Qualité dans les services proposés."),
                  t(
                    "Compétence des professionnels présents sur la plateforme.",
                  ),
                  t("Professionnalisme dans chaque interaction."),
                  t("Transparence et confiance entre les utilisateurs."),
                  t("Innovation pour améliorer continuellement l'expérience."),
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
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
            className="w-full max-w-5xl p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden text-center flex flex-col items-center"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
              <Star className="w-[400px] h-[400px]" />
            </div>

            <div className="relative z-10 w-full md:w-3/4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="text-sm font-extrabold tracking-widest text-blue-300 uppercase">
                  {t("Notre Promesse")}
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
                {t(
                  "Transformer chaque besoin en opportunité et chaque compétence en solution.",
                )}
              </h3>

              <div className="text-lg md:text-xl font-bold text-blue-300 tracking-widest uppercase mb-4 mt-6">
                {t("Qualité • Compétence • Professionnalisme")}
              </div>
              <div className="text-xl font-medium text-white mb-10">
                {t("Au service de vos besoins.")}
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
