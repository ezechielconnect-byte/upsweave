import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function GenericPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { slug } = useParams();
  const { t } = useTranslation();

  const slugToKey: Record<string, string> = {
    "avis-clients": "Avis clients",
    "verification": "Vérification des profils",
    "garantie": "Garantie UpTaskers",
  };

  // Convert slug back to the translation key, or format it nicely as fallback
  const titleKey = slug
    ? slugToKey[slug] ||
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Page Not Found";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden relative selection:bg-cyan-500/30 flex flex-col pt-24 pb-24"
    >
      <Navbar onNavigate={onNavigate} />

      {/* Background Layer */}
      <div className="fixed inset-0 z-0 bg-white pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJsaW5lcyB3aWR0aD0iNCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iNDAiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbGluZXMpIi8+PC9zdmc+')] opacity-50 mix-blend-screen" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-[1000px] px-6 mx-auto flex flex-col flex-1">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <LogoText>{t(titleKey)}</LogoText>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-8"></div>
        </div>

        <div className="prose prose-invert max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-headings:text-slate-900">
          <p className="text-xl text-slate-600 mb-8 font-medium">
            <LogoText>{t("Bienvenue sur la page")} {t(titleKey)}. {t("Cette section de UpTaskers est actuellement en cours de développement.")}</LogoText>
          </p>
          <p className="text-lg">
            {t("Notre plateforme évolue continuellement pour vous offrir la meilleure expérience. Restez à l'écoute pour les mises à jour alors que nous construisons cette ressource complète.")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
