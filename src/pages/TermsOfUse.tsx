import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function TermsOfUse({
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
              {t("Conditions d'utilisation")}
            </h1>
            <p className="text-slate-600">{t("Veuillez lire attentivement ces conditions avant d'utiliser notre plateforme. Dernière mise à jour : 4 Juin 2026.")}</p>
          </div>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("1. Acceptation des Conditions")}
              </h2>
              <p className="mb-4">
                <LogoText>{t("En accédant ou en utilisant Upsweave (\"la Plateforme\"), vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, vous n'êtes pas autorisé à accéder au Service.")}</LogoText>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("2. Description du Service")}
              </h2>
              <p className="mb-4">
                <LogoText>{t("Upsweave agit comme intermédiaire technologique entre les clients et les prestataires et peut faciliter la gestion des paiements liés aux missions réalisées sur la plateforme. Nous ne fournissons pas directement les services proposés par les prestataires.")}</LogoText>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("3. Vérification et Avis")}
              </h2>
              <p className="mb-4">
                <LogoText>{t("Bien que nous mettions en œuvre un processus de vérification d'identité des prestataires et que nous proposions un système d'avis authentiques, Upsweave ne garantit pas la qualité spécifique du travail réalisé par les prestataires.")}</LogoText>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("4. Comptes Utilisateurs")}
              </h2>
              <p className="mb-4">
                {t("Lorsque vous créez un compte sur notre plateforme, vous devez fournir des informations exactes, complètes et à jour. Tout manquement à cette obligation constitue une violation de ces Conditions et peut entraîner la résiliation immédiate de votre compte.")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("5. Âge minimum")}
              </h2>
              <p className="mb-4">
                <LogoText>{t("L'utilisation de Upsweave est réservée aux personnes âgées d'au moins 18 ans ou autorisées par la législation locale applicable.")}</LogoText>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("6. Paiement")}
              </h2>
              <p className="mb-4">
                {t("Les paiements effectués par les clients sont conservés de manière sécurisée jusqu'à la validation de la mission. Une fois la mission terminée et validée, les fonds sont crédités au prestataire.")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("7. Retrait des gains")}
              </h2>
              <p className="mb-4">
                {t("Les prestataires peuvent demander le retrait de leurs gains via les moyens de paiement disponibles sur la plateforme. Les délais de traitement peuvent varier selon le mode de paiement sélectionné.")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("8. Litiges")}
              </h2>
              <p className="mb-4">
                <LogoText>{t("En cas de litige entre un client et un prestataire, Upsweave peut intervenir afin d'examiner la situation et prendre une décision concernant le déblocage ou le remboursement des fonds.")}</LogoText>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("9. Résiliation")}
              </h2>
              <p className="mb-4">
                {t("Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, notamment en cas de violation des Conditions d'utilisation ou de comportements inappropriés sur la plateforme.")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t("10. Modifications")}
              </h2>
              <p className="mb-4">
                {t("Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces Conditions à tout moment. Nous vous informerons de toute modification substantielle de ces Conditions d'utilisation.")}
              </p>
            </section>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
