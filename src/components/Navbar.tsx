import React, { useEffect, useState, useRef } from "react";
import { Search, X, Menu, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { categories } from "../data/categories";

export default function Navbar({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const selectedLang = i18n.language || "FR";

  const wrapperRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCategories = categories.filter(
    (cat) =>
      searchQuery &&
      t(cat.name).toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/find?q=${encodeURIComponent(searchQuery)}`);
    } else {
      onNavigate("/find");
    }
    setIsMobileMenuOpen(false);
    setIsSearchFocused(false);
  };

  const handleSelectSuggestion = (name: string) => {
    setSearchQuery(name);
    onNavigate(`/find?q=${encodeURIComponent(name)}`);
    setIsSearchFocused(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("Accueil"), path: "/" },
    { label: t("Explorez nos catégories"), path: "/find" },
    { label: t("Notre mission"), path: "/jobs" },
    { label: t("À propos de UpTaskers"), path: "/offer" },
  ];

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] w-full px-4 lg:px-6 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isTransparent
            ? "bg-transparent border-b border-transparent py-5 shadow-none"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-3"
        }`}
      >
        {/* Left Side: Logo & Search */}
        <div className="flex items-center space-x-4 lg:space-x-6 flex-1">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate("/")}
          >
            <img
              src="/icone.png"
              alt="UpTaskers Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain mr-2 transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`font-sans font-extrabold text-[18px] md:text-[22px] not-italic leading-[36.5px] tracking-tight text-left no-underline whitespace-nowrap transition-colors duration-300 ${
                isTransparent
                  ? "text-white group-hover:text-blue-300"
                  : "text-slate-900 group-hover:text-blue-600"
              }`}
            >
              UpTaskers
            </span>
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div
            className="relative hidden lg:block ml-[22px] lg:ml-12 xl:ml-20"
            ref={wrapperRef}
          >
            <form
              onSubmit={handleSearch}
              className={`flex items-center transition-all rounded-full pr-4 pl-3.5 py-2 cursor-text w-[240px] focus-within:w-[280px] ${
                isTransparent
                  ? "bg-white/15 hover:bg-white/20"
                  : "bg-[#f0f2f5] hover:bg-[#e4e6e9]"
              }`}
            >
              <Search
                className={`w-4 h-4 mr-2 stroke-[2.5] ${
                  isTransparent ? "text-white/70" : "text-[#65676b]"
                }`}
              />
              <input
                type="text"
                placeholder={t("Rechercher...")}
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                className={`bg-transparent border-none text-[15px] font-normal focus:outline-none w-full tracking-wide transition-colors duration-300 ${
                  isTransparent
                    ? "text-white placeholder:text-white/70"
                    : "text-black placeholder:text-[#65676b]"
                }`}
              />
            </form>
            <AnimatePresence>
              {isSearchFocused &&
                searchQuery.length > 0 &&
                filteredCategories.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-slate-100 overflow-hidden z-50 max-h-64 overflow-y-auto"
                  >
                    {filteredCategories.map((category) => (
                      <button
                        key={category.name}
                        type="button"
                        onClick={() => handleSelectSuggestion(category.name)}
                        className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 hover:text-blue-600 flex items-center gap-3"
                      >
                        <Search className="w-4 h-4 text-slate-400" />
                        {t(category.name)}
                      </button>
                    ))}
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden lg:flex flex-none items-center justify-center space-x-8 text-[15px] font-bold tracking-tight ml-[49px]">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              className={`transition-all duration-300 relative py-1 hover:scale-105 font-bold cursor-pointer hover:opacity-100 ${
                isTransparent
                  ? "text-white hover:text-blue-300 opacity-90"
                  : "text-slate-800 hover:text-blue-600 opacity-90"
              }`}
              onClick={() => onNavigate(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Side: User & Actions */}
        <div className="flex items-center justify-end space-x-3 lg:space-x-4 flex-1">
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`hidden sm:flex items-center gap-1.5 text-sm font-bold transition-colors cursor-pointer px-3 py-2 rounded-lg ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{selectedLang}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-[#202123] rounded-md shadow-xl border border-[#303139] overflow-hidden z-50 py-1"
                >
                  {[
                    { c: "FR", l: "Français" },
                    { c: "EN", l: "English" },
                    { c: "ES", l: "Español" },
                    { c: "DE", l: "Deutsch" },
                    { c: "IT", l: "Italiano" },
                    { c: "PT", l: "Português" },
                    { c: "AR", l: "العربية" },
                    { c: "ZH", l: "中文" },
                  ].map(({ c: lang, l: label }) => (
                    <button
                      key={lang}
                      onClick={() => {
                        i18n.changeLanguage(lang);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-[#343541] transition-colors duration-150 text-[14px] ${
                        selectedLang === lang
                          ? "text-white font-medium"
                          : "text-slate-300"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 -mr-2 transition-colors cursor-pointer ${
              isTransparent
                ? "text-white hover:text-blue-300"
                : "text-slate-700 hover:text-slate-900"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[64px] left-0 right-0 bottom-0 z-[50] bg-white/35 backdrop-blur-2xl backdrop-saturate-150 lg:hidden overflow-y-auto border-t border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]"
          >
            <div className="px-6 py-6 flex flex-col space-y-6 min-h-full justify-between pb-12">
              <div className="flex flex-col space-y-5">
                <div className="relative">
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center bg-[#f0f2f5] rounded-full px-4 py-3 border-none transition-all focus-within:bg-[#e4e6e9]"
                  >
                    <Search className="w-5 h-5 mr-3 stroke-[2.5] text-[#65676b]" />
                    <input
                      type="text"
                      placeholder={t("Rechercher...")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent border-none text-black focus:outline-none w-full placeholder:text-[#65676b]"
                    />
                  </form>
                  {searchQuery.length > 0 && filteredCategories.length > 0 && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-100 overflow-hidden z-50 max-h-64 overflow-y-auto">
                      {filteredCategories.map((category) => (
                        <button
                          key={category.name}
                          type="button"
                          onClick={() => handleSelectSuggestion(category.name)}
                          className="w-full text-left px-5 py-4 hover:bg-slate-50 transition-colors text-base font-medium text-slate-700 hover:text-blue-600 flex items-center gap-3 border-b border-slate-50 last:border-0"
                        >
                          <Search className="w-4 h-4 text-slate-400" />
                          {t(category.name)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, idx) => (
                    <button
                      key={idx}
                      className="flex text-left text-lg font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50 px-4 py-3 rounded-xl transition-all tracking-tight"
                      onClick={() => {
                        onNavigate(link.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 flex flex-col space-y-4">
                <p className="text-sm font-bold text-slate-500 uppercase px-4">
                  {t("Langue")}
                </p>
                <div className="flex flex-wrap gap-2 px-4">
                  {[
                    { c: "FR", l: "Français" },
                    { c: "EN", l: "English" },
                    { c: "ES", l: "Español" },
                    { c: "DE", l: "Deutsch" },
                    { c: "IT", l: "Italiano" },
                    { c: "PT", l: "Português" },
                    { c: "AR", l: "العربية" },
                    { c: "ZH", l: "中文" },
                  ].map(({ c: lang, l: label }) => (
                    <button
                      key={lang}
                      onClick={() => {
                        i18n.changeLanguage(lang);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`py-2 px-4 rounded-xl font-bold text-sm transition-all ${
                        selectedLang === lang
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
