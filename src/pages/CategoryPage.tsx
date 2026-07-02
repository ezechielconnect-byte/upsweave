import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import { categories } from "../data/categories";
import { AppStoreBadge, GooglePlayBadge } from "../components/AppBadges";
import { useTranslation } from "react-i18next";

export default function CategoryPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const categoryName = decodeURIComponent(id || "Catégorie");

  const selectedCategory = categories.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase(),
  );
  const categoryImage =
    selectedCategory?.image ||
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"; // Default team/collaboration image
  const displayCategoryName = selectedCategory
    ? t(selectedCategory.name)
    : categoryName;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <Navbar onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

          <div className="md:w-1/2 relative z-10">
            <button
              onClick={() => onNavigate("/find")}
              className="text-blue-600 font-medium mb-6 hover:underline flex items-center gap-2"
            >
              &larr; {t("Retour aux catégories")}
            </button>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900">
              {t("Experts en")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {displayCategoryName}
              </span>
            </h1>
            <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
              {t(
                "Trouvez les meilleurs professionnels hautement qualifiés et certifiés pour répondre à vos exigences les plus pointues dans le domaine :",
              )}{" "}
              {displayCategoryName}.{" "}
              {t("Confiez-nous vos projets pour une réalisation d'excellence.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <AppStoreBadge className="!h-[50px] !min-w-[170px] scale-95 origin-left" />
              <GooglePlayBadge className="!h-[50px] !min-w-[170px] scale-95 origin-left" />
            </div>
          </div>

          <div className="md:w-1/2 w-full relative z-10">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] group">
              <img
                src={categoryImage}
                alt={`Catégorie ${categoryName}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
