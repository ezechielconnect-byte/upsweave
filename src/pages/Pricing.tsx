import React, { useState } from "react";
import { Check, X, Info } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const planData = [
  {
    name: "Gratuit",
    price: "0 FCFA",
    savings: "0 FCFA",
    features: [
      { text: "Profil de base", included: true },
      { text: "Commission de 15% par prestation", included: true },
      { text: "Support standard", included: true },
      { text: "1 boost de profil gratuit / mois", included: false },
      { text: 'Badge "Pro Vérifié"', included: false },
      { text: "Statistiques avancées", included: false },
      { text: "Mise en avant dans les recherches", included: false },
      { text: "API et intégrations tierces", included: false },
      { text: "Chargé de compte dédié", included: false },
    ],
  },
  {
    name: "Pro",
    price: "10000 FCFA",
    savings: "24000 FCFA",
    features: [
      { text: "Profil complet avec portfolio", included: true },
      { text: "Commission réduite à 10%", included: true },
      { text: "Support prioritaire", included: true },
      { text: "1 boost de profil gratuit / mois", included: true },
      { text: 'Badge "Pro Vérifié"', included: true },
      { text: "Statistiques avancées", included: true },
      { text: "Mise en avant dans les recherches", included: true },
      { text: "API et intégrations tierces", included: false },
      { text: "Chargé de compte dédié", included: false },
    ],
  },
  {
    name: "Expert",
    price: "30000 FCFA",
    savings: "72000 FCFA",
    features: [
      { text: "Profil premium ultra-personnalisé", included: true },
      { text: "Commission ultra-réduite à 5%", included: true },
      { text: "Support prioritaire", included: true },
      { text: "4 boosts de profil gratuits / mois", included: true },
      { text: 'Badge "Expert"', included: true },
      { text: "Statistiques avancées", included: true },
      { text: "Mise en avant dans les recherches", included: true },
      { text: "API et intégrations tierces", included: true },
      { text: "Chargé de compte dédié", included: true },
    ],
  },
];

const featureCategories = [
  {
    title: "Profil & Visibilité",
    features: [
      { name: "Type de profil", info: "", eq: ["Base", "Complet", "Premium"] },
      {
        name: "Mise en avant dans les recherches",
        info: "",
        eq: [false, true, true],
      },
      {
        name: "Boosts de profil gratuits",
        info: "",
        eq: ["0", "1 par mois", "4 par mois"],
      },
      {
        name: "Badge de confiance",
        info: "",
        eq: ["Aucun", "Pro Vérifié", "Expert"],
      },
    ],
  },
  {
    title: "Paiement & Commissions",
    features: [
      { name: "Commission par prestation", info: "", eq: ["15%", "10%", "5%"] },
      { name: "Paiement sécurisé", info: "", eq: [true, true, true] },
      {
        name: "Support facturation",
        info: "",
        eq: ["Standard", "Prioritaire", "Dédié"],
      },
    ],
  },
  {
    title: "Fonctionnalités & Support",
    features: [
      { name: "Statistiques avancées", info: "", eq: [false, true, true] },
      { name: "Portfolio illimité", info: "", eq: [false, true, true] },
      {
        name: "Support client",
        info: "",
        eq: ["Standard", "Prioritaire", "Account Manager Dédié"],
      },
      {
        name: "API et intégrations tierces",
        info: "",
        eq: [false, false, true],
      },
    ],
  },
];

export default function Pricing({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [annual, setAnnual] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen text-slate-900 bg-sky-50 font-sans relative overflow-x-hidden flex flex-col items-center pt-24"
    >
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgNDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-sky-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <Navbar onNavigate={onNavigate} />

      <div className="relative z-10 w-full max-w-[1400px] px-6 py-6 md:py-12 mx-auto flex-1 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900"
          >
            Investissez dans votre <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              réussite professionnelle
            </span>
          </motion.h1>
        </div>

        {/* Toggle Switch Container */}
        <div className="flex items-center justify-center gap-6 mb-8 text-slate-800 text-[15px] font-bold">
          <div
            onClick={() => setAnnual(false)}
            className={`flex items-center gap-2 cursor-pointer transition-colors ${!annual ? "text-blue-600" : "text-slate-500 hover:text-slate-800"}`}
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${!annual ? "border-blue-600" : "border-slate-400"}`}
            >
              {!annual && (
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              )}
            </div>
            Mensuel
          </div>
          <div
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-2 cursor-pointer transition-colors ${annual ? "text-blue-600" : "text-slate-500 hover:text-slate-800"}`}
          >
            <div
              className={`w-4 h-4 rounded-full border flex items-center justify-center ${annual ? "border-blue-600" : "border-slate-400"}`}
            >
              {annual && (
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              )}
            </div>
            Annuellement
          </div>
          <div className="bg-emerald-100 text-[13px] px-2.5 py-1 rounded-[6px] ml-2 text-emerald-700 border border-emerald-200 shadow-sm font-semibold">
            Économisez jusqu'à 20% 🤩
          </div>
        </div>

        {/* Pricing Table Card Container */}
        <div className="w-full max-w-[1240px] rounded-[16px] md:rounded-[24px] p-[1.5px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-sky-900/10">
          <div className="bg-white/60 backdrop-blur-3xl rounded-[14.5px] md:rounded-[22.5px] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              {planData.map((plan, i) => {
                const planGradients = [
                  "from-slate-100/50",
                  "from-blue-50",
                  "from-purple-50",
                ];
                const numPrice = parseInt(plan.price);
                let finalPrice = numPrice;
                if (annual && numPrice > 0) {
                  finalPrice = Math.round(numPrice * 0.8);
                }
                const formattedAmount = finalPrice.toLocaleString("fr-FR");
                const savingsAmount = parseInt(plan.savings).toLocaleString(
                  "fr-FR",
                );

                return (
                  <div
                    key={i}
                    className="flex flex-col p-6 md:p-8 relative overflow-hidden group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${planGradients[i]} to-transparent pointer-events-none h-[250px]`}
                    />
                    <div className="relative z-10 flex flex-col h-full">
                      <h3
                        className={`text-[19px] font-extrabold mb-6 ${i === 1 ? "text-blue-600" : "text-slate-900"}`}
                      >
                        {plan.name}
                      </h3>

                      <div className="flex items-start mb-6">
                        <span className="text-[40px] md:text-[44px] font-bold leading-none tracking-tight text-slate-900">
                          {numPrice > 0 ? formattedAmount : "0"}
                        </span>
                        <div className="flex flex-col items-start mt-1.5 ml-2">
                          <span className="text-[17px] font-bold text-slate-900 tracking-wide leading-none">
                            FCFA
                          </span>
                          <span className="text-slate-500 text-[13px] font-medium mt-1">
                            / mois
                          </span>
                        </div>
                      </div>

                      <div className="text-slate-500 text-[12px] mb-2 font-medium">
                        {annual
                          ? "facturé annuellement"
                          : "facturé mensuellement"}
                      </div>

                      <div
                        className={`text-sm mb-8 font-semibold flex items-center gap-1.5 ${annual && numPrice > 0 ? "text-emerald-600" : "text-transparent"}`}
                      >
                        {annual && numPrice > 0
                          ? `Économisez ${savingsAmount} FCFA par an`
                          : " "}
                      </div>

                      <button
                        className={`w-full font-bold text-[14.5px] rounded-[8px] py-3.5 mb-3 transition-colors ${i === 1 ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20" : "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200"}`}
                      >
                        Commencer avec {plan.name}
                      </button>

                      <div className="text-[11px] text-center text-slate-500 mb-10 px-2 leading-relaxed h-4">
                        {plan.price !== "0 FCFA"
                          ? "Essai gratuit de 7 jours disponible"
                          : ""}
                      </div>

                      <ul className="space-y-4 pb-4 flex-1">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="mt-[3px]">
                              {feature.included ? (
                                <Check className="w-[16px] h-[16px] text-blue-500 stroke-[3]" />
                              ) : (
                                <X className="w-[16px] h-[16px] text-slate-300 stroke-[3]" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div
                                className={`text-[13px] leading-snug inline-block font-medium pb-1.5 border-b ${feature.included ? "text-slate-700 border-slate-200" : "text-slate-400 border-slate-100"}`}
                              >
                                {feature.text}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enterprise Plans Bottom Section */}
            <div className="border-t border-white/40 p-6 md:px-10 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white/30 backdrop-blur-md">
              <div>
                <h3 className="text-slate-900 font-bold text-[17px] mb-1.5">
                  Plans d'entreprise
                </h3>
                <p className="text-slate-600 text-[14px] font-medium">
                  Besoin de plus de 100 abonnements ? Contactez-nous pour
                  trouver la solution la mieux adaptée à votre entreprise.
                </p>
              </div>
              <button className="whitespace-nowrap px-8 py-3 rounded-[8px] bg-white border border-slate-300 text-slate-700 text-[14px] font-bold hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
                Contactez le service commercial
              </button>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="w-full max-w-[1240px] mt-8 text-slate-500 text-[13px] leading-relaxed flex flex-col items-center gap-1.5 font-medium">
          <div className="flex items-center justify-center gap-1.5 flex-wrap text-center">
            <span>
              1. Les tarifs indiqués n'incluent pas les éventuelles taxes
              locales applicables.
            </span>
            <Info className="w-[14px] h-[14px] text-slate-400" />
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="w-full max-w-[1240px] mx-auto z-20 pb-20 overflow-x-auto mt-20">
          <div className="min-w-[800px] bg-white/40 backdrop-blur-xl rounded-[24px] overflow-hidden border border-white/60 shadow-xl shadow-sky-900/10">
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b border-white/40 pb-4 mb-2 sticky top-0 bg-white/40 backdrop-blur-3xl z-30 pt-6 px-6">
              <div className="col-span-1"></div>
              {planData.map((plan, i) => {
                const isPlus = i === 1; // Highlight the second plan "Pro"
                return (
                  <div
                    key={plan.name}
                    className="col-span-1 flex flex-col items-center justify-end px-4 text-center"
                  >
                    <span
                      className={`text-[17px] font-bold ${isPlus ? "text-blue-600" : "text-slate-900"}`}
                    >
                      {plan.name}
                    </span>
                    <button
                      className={`mt-4 w-[160px] max-w-full py-2.5 rounded-[100px] text-[13px] font-bold transition-all ${
                        isPlus
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20"
                          : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                      }`}
                    >
                      Sélectionner
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Table Body */}
            <div className="flex flex-col gap-8 pb-10">
              {featureCategories.map((category, idx) => (
                <div key={idx} className="flex flex-col mt-6">
                  <h2 className="text-[20px] font-extrabold text-slate-900 mb-6 pl-10">
                    {category.title}
                  </h2>
                  <div className="flex flex-col gap-0 border-t border-white/40">
                    {category.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="grid grid-cols-4 py-5 border-b border-white/40 hover:bg-white/40 transition-colors group px-6"
                      >
                        <div className="col-span-1 flex items-center pr-4 pl-4">
                          <span className="text-[14px] text-slate-600 font-semibold">
                            {feature.name}
                          </span>
                        </div>
                        {feature.eq.map((val, vIdx) => (
                          <div
                            key={vIdx}
                            className="col-span-1 flex items-center justify-center text-center"
                          >
                            {typeof val === "boolean" ? (
                              val ? (
                                <Check className="w-[18px] h-[18px] text-blue-500 stroke-[3]" />
                              ) : (
                                <X className="w-[18px] h-[18px] text-slate-300 stroke-[3]" />
                              )
                            ) : (
                              <span className="text-[14px] text-slate-800 font-bold">
                                {val}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
