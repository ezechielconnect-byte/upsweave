import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Smartphone, Play } from "lucide-react";
import { AppStoreBadge, GooglePlayBadge } from "../components/AppBadges";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function ContactPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
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
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
                {t("Contactez-nous")}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-slate-900"
            >
              {t("Nous sommes là pour")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t("vous aider.")}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 font-medium leading-relaxed"
            >
              {t(
                "Une question, un besoin d'assistance ou simplement envie de nous faire un retour ? Notre équipe est à votre disposition.",
              )}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                {t("Informations de contact")}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {t("Email")}
                    </h3>
                    <p className="text-slate-600 font-medium mb-1">
                      {t("Pour toute demande générale")}
                    </p>
                    <a
                      href="mailto:contact@taskup.com"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      contact@taskup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {t("Téléphone")}
                    </h3>
                    <p className="text-slate-600 font-medium mb-1">
                      {t("Du lundi au dimanche, 24h/24")}
                    </p>
                    <a
                      href="tel:0789925928"
                      className="text-emerald-600 font-medium hover:underline"
                    >
                      07 89 92 59 28
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {t("Adresse")}
                    </h3>
                    <p className="text-slate-600 font-medium">
                      {t("Plateau")}
                      <br />
                      {t("Abidjan, Côte d'Ivoire")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Download App Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#092b34] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3"></div>

              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20 backdrop-blur-md">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
                  {t("Téléchargez notre application")}
                </h2>
                <p className="text-slate-300 text-lg font-medium mb-10 leading-relaxed">
                  <LogoText>{t(
                    "Emportez Uptaskers partout avec vous. Gérez vos projets, échangez avec des pros et suivez l'avancement de vos demandes depuis votre mobile.",
                  )}</LogoText>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <AppStoreBadge className="!h-[60px] !min-w-[190px] scale-95 origin-left sm:scale-100 hover:scale-105" />
                  <GooglePlayBadge className="!h-[60px] !min-w-[190px] scale-95 origin-left sm:scale-100 hover:scale-105" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
