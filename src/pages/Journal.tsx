import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { getJournalArticles } from "../data/journal";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function Journal({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pt-24 pb-24">
      <Navbar onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-sky-950">
            <LogoText>{t("Journal Uptaskers")}</LogoText>
          </h1>
          <p className="text-xl text-sky-700 max-w-2xl">
            {t("Guides, astuces et conseils pour clients et professionnels")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getJournalArticles(t).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                if (article.id === 1) {
                  onNavigate("/top-categories");
                } else if (article.id === 3) {
                  onNavigate("/about");
                }
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100/80 ring-1 ring-slate-900/5 hover:ring-sky-500/30 hover:border-sky-200 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col w-full h-full cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-sm font-semibold text-sky-600 mb-2 block">
                  {article.date}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  <LogoText>{article.title}</LogoText>
                </h3>
                <p className="text-base text-slate-600 mb-4">
                  <LogoText>{article.excerpt}</LogoText>
                </p>
                <div className="text-base text-slate-700 prose prose-sky prose-p:leading-relaxed max-w-none flex-1">
                  {article.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
