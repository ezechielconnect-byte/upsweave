import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { categories } from "../data/categories";
import { useTranslation } from "react-i18next";

export default function TopCategories({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();

  // Pick some "top" categories
  const topCategories = categories.slice(0, 6);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 overflow-x-hidden pt-24 pb-24">
      <Navbar onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm"
          >
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
              {t("Tendances du mois")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900"
          >
            {t("Les catégories les plus utilisées")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            {t(
              "Découvrez les services les plus populaires ce mois-ci et trouvez l'expert idéal.",
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topCategories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() =>
                onNavigate(
                  `/category/${encodeURIComponent(cat.name.toLowerCase())}`,
                )
              }
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer border border-slate-200"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={t(cat.name)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {t(cat.name)}
                </h3>
                <div className="flex justify-between items-center mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-white backdrop-blur-md bg-white/20 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {t("Très demandé")}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-slate-900" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => onNavigate("/find")}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-slate-900/20 flex items-center gap-2 group mx-auto"
          >
            {t("Voir toutes les catégories")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
