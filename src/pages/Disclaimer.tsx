import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function Disclaimer({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900"
    >
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("Mentions Légales")}
            </h1>
            <p className="text-slate-600">{t("Dernière mise à jour : 4 Juin 2026")}</p>
          </div>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("Hébergement")}
              </h2>
              <p className="mb-4">
                {t("Le site est hébergé par Firebase.")}
              </p>
              <p className="mb-4">
                {t("Les données sont hébergées dans des centres de données sécurisés, conformément à la loi ivoirienne sur la protection des données à caractère personnel.")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("Propriété Intellectuelle")}
              </h2>
              <p className="mb-4">
                {t("La structure générale du site, ainsi que les textes, images animées ou non et tous les éléments composant le site sont la propriété exclusive de")} <LogoText><strong>UpTaskers</strong></LogoText>.
              </p>
              <p className="mb-4">
                <LogoText>{t("Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de UpTaskers.")}</LogoText>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("Responsabilité")}
              </h2>
              <p className="mb-4">
                <LogoText><strong>UpTaskers</strong> {t("est une plateforme de mise en relation entre clients et prestataires. UpTaskers agit uniquement comme intermédiaire technique et ne réalise pas les prestations proposées sur la plateforme. En conséquence, UpTaskers ne peut être tenue responsable de la qualité, de l'exécution ou de la non-exécution des services fournis par les prestataires.")}</LogoText>
              </p>
            </section>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
