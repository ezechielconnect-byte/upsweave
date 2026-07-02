import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Briefcase,
  BookOpen,
  PenTool,
  Laptop,
  Wrench,
  Sparkles,
  Truck,
  Heart,
  Calendar,
  Package,
  Droplets,
  Hammer,
  Camera,
  Home as HomeIcon,
  Flower2,
  GraduationCap,
  FileText,
  Video,
  Shield,
  Droplet,
  Zap,
  Palette,
  Megaphone,
  Globe,
  Target,
  Baby,
  Music,
  Calculator,
  Scale,
  ChefHat,
  Dumbbell,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { categories } from "../data/categories";
import { useTranslation } from "react-i18next";

export default function FindProviders({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  const location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    if (q !== null) {
      setSearch(q);
    }
  }, [location.search]);

  const filteredCategories = categories.filter((cat) =>
    t(cat.name).toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgNDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-24 pb-24">
        <Navbar onNavigate={onNavigate} />

        <main className="w-full max-w-[1200px] px-6 lg:px-8 mt-12 flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <Briefcase className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
                {t("Toutes nos catégories")}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight text-slate-900">
              {t("Explorez nos")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t("catégories")}
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {t(
                "Découvrez la diversité de nos professionnels et trouvez l'expert idéal pour votre projet parmi nos nombreuses catégories.",
              )}
            </p>
          </motion.div>

          {/* Search */}
          <div className="w-full max-w-2xl mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder={t("Rechercher une catégorie...")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl pl-14 pr-6 py-5 focus:outline-none focus:border-blue-500 transition-all text-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
            <AnimatePresence>
              {filteredCategories.map((cat, index) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.02 }}
                  onClick={() =>
                    onNavigate(
                      `/category/${encodeURIComponent(cat.name.toLowerCase())}`,
                    )
                  }
                  className={`relative overflow-hidden bg-white border border-slate-200 p-4 sm:p-6 rounded-[20px] hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1`}
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-3 sm:mb-4 border-2 border-slate-100 shadow-sm`}
                  >
                    <img
                      src={cat.image}
                      alt={t(cat.name)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors text-sm">
                    {t(cat.name)}
                  </h3>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredCategories.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500">
                {t("Aucune catégorie trouvée pour")} "{search}"
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
