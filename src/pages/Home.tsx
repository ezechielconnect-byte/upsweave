import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { getJournalArticles } from "../data/journal";
import { AppStoreBadge, GooglePlayBadge } from "../components/AppBadges";
import { motion } from "framer-motion";
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
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Phone,
  HelpCircle,
} from "lucide-react";
import { GlobeSection } from "../components/GlobeSection";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function Home({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 font-sans overflow-x-hidden flex flex-col">
      {/* Navbar conservée pour la navigation globale */}
      <Navbar onNavigate={onNavigate} />

      {/* Main Hero Section */}
      <Hero onNavigate={onNavigate} />

      <main className="flex-1 flex flex-col items-center justify-center relative z-20 w-full pt-10 md:pt-16 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] -mt-6 md:-mt-10">
        {/* Section Illustrative Inspirée */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={scaleUp}
          className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] xl:w-full max-w-7xl mx-auto flex flex-col lg:flex-row mb-16 md:mb-32 bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-xl md:shadow-2xl"
        >
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            className="lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-[1.15] md:leading-[1.1] tracking-tight"
            >
              {t("Connectez-vous avec")}{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">{t("l'excellence.")}</span>
                <svg
                  className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] text-blue-500 z-0 overflow-visible"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5,50 C20,10 80,10 95,50 C110,90 40,95 20,80 C5,70 0,60 10,40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="opacity-80"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-8 md:mb-10 max-w-lg"
            >
              <LogoText>{t(
                "Notre plateforme révolutionne la mise en relation entre professionnels et clients. Que vous ayez besoin d'un expert pour une mission ponctuelle ou que vous cherchiez à développer votre clientèle, UpTaskers crée un environnement de confiance.",
              )}</LogoText>
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-8 md:mb-12">
              <button
                onClick={() => onNavigate("/download")}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center gap-2 md:gap-3 transition-transform hover:-translate-y-1 w-fit shadow-lg shadow-blue-600/30 duration-300 cursor-pointer"
              >
                {t("Commencer")}
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Bullet Points */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-[13px] md:text-sm font-medium text-slate-300 leading-snug">
                  {t("Une mise en relation rapide et simplifiée.")}
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-[13px] md:text-sm font-medium text-slate-300 leading-snug">
                  {t("Des profils vérifiés et des avis authentiques.")}
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-[13px] md:text-sm font-medium text-slate-300 leading-snug">
                  {t("Un espace de collaboration sécurisé pour tous.")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:w-1/2 relative min-h-[400px] lg:min-h-full flex flex-col justify-end lg:block pt-64 pb-8 px-4 lg:p-0"
          >
            <div className="absolute inset-0 lg:rounded-tl-[6rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                alt="Professionnelle souriante"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Menu Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:-ml-16 bg-white rounded-3xl p-5 lg:p-6 shadow-2xl lg:w-80 w-full max-w-sm mx-auto z-20"
            >
              <div className="space-y-2">
                {[
                  {
                    icon: Briefcase,
                    title: t("Avantages"),
                    desc: t("Maximisez votre impact"),
                    path: "/avantages",
                  },
                  {
                    icon: Target,
                    title: t("À propos de UpTaskers"),
                    desc: t("Notre mission et valeurs"),
                    path: "/offer",
                  },
                  {
                    icon: BookOpen,
                    title: t("Ressources"),
                    desc: t("Outils pour réussir"),
                    path: "/ressources",
                  },
                  {
                    icon: Phone,
                    title: t("Nous contacter"),
                    desc: t("Nous sommes là pour vous aider"),
                    path: "/contact",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => item.path && onNavigate(item.path)}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-[#092b34] transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700" />
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate("/download")}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer group"
              >
                {t("Commencer")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="w-full bg-slate-50 rounded-t-[3rem] md:rounded-t-[5rem] lg:rounded-t-[6rem] pt-16 mt-16 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          {/* Introduction / Story */}
          <div className="py-12 md:py-16 px-4 md:px-8 lg:px-24 max-w-[1800px] w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-32">
            <div className="md:w-5/12 w-full text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-600 mb-4 md:mb-6 block">
                {t('Qualité Supérieure')}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-sky-900 tracking-tight leading-[1.1]">
                {t("Conçu")} <br />
                {t("pour exceller.")}
              </h2>
            </div>
            <div className="md:w-7/12 max-w-2xl w-full text-center md:text-left">
              <p className="text-lg md:text-xl text-sky-700 font-medium leading-relaxed mb-6 md:mb-8">
                <LogoText>{t(
                  "La vocation de UpTaskers est simple : vous faire gagner du temps en vous offrant un accès instantané aux meilleurs talents de votre région.",
                )}</LogoText>
              </p>
              <p className="text-lg md:text-xl text-sky-700 font-medium leading-relaxed mb-8 md:mb-12">
                {t(
                  "Nous combinons l'efficacité d'une plateforme moderne à l'expertise de professionnels vérifiés, pour que chaque service rendu soit une expérience parfaitement fluide.",
                )}
              </p>
              <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-[6px] md:border-8 border-white shadow-[0_20px_60px_-15px_rgba(2,132,199,0.3)] bg-white ring-1 ring-slate-900/5 group">
                <img
                  src="/taskup_logo_office.png"
                  alt="UpTaskers Base Workspace"
                  className="w-full h-[250px] md:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Réseau Fiable Section */}
          <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] xl:w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[auto] md:min-h-[80vh] border-y md:border border-sky-100 bg-white md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(2,132,199,0.3)] my-8 md:my-24 group transition-all duration-500 hover:shadow-[0_30px_70px_-20px_rgba(2,132,199,0.4)]">
            <div className="order-2 lg:order-1 relative h-[300px] sm:h-[500px] lg:h-auto overflow-hidden group bg-sky-100">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800"
                alt="Tech core texture"
                className="absolute inset-0 w-full h-full object-cover duration-[2s] opacity-80 mix-blend-multiply grayscale"
              />
              <div className="absolute inset-0 bg-sky-900/10 mix-blend-overlay"></div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center p-6 sm:p-8 md:p-16 lg:p-32 bg-white text-center sm:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-sky-600 mb-4 md:mb-6">
                {t("Qualité Supérieure")}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-900 tracking-tight mb-4 md:mb-8 leading-tight">
                {t("L'élite des")} <br className="hidden md:block" />
                {t("professionnels.")}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-sky-700 font-medium leading-relaxed mb-8 md:mb-12 max-w-md mx-auto sm:mx-0">
                {t(
                  "Nous évaluons et sélectionnons rigoureusement les meilleurs profils du marché pour assurer le succès et l'excellence de vos projets.",
                )}
              </p>
            </div>
          </div>

          {/* Three Pillars Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left pt-8 md:pt-16 pb-8 md:pb-16 px-4 md:px-8 xl:px-0 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:bg-slate-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-blue-500 transition-transform group-hover:rotate-12 duration-350"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("Profils vérifiés")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <LogoText>{t(
                  "Chaque prestataire sur UpTaskers passe par un processus de vérification d'identité approfondi pour garantir votre sécurité.",
                )}</LogoText>
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:bg-slate-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="bg-amber-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/30 group-hover:bg-amber-500/35 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-amber-500 transition-transform group-hover:scale-110 duration-350"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("Avis authentiques")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "Lisez les retours d'expérience réels. Seuls les clients ayant utilisé les services peuvent laisser un avis.",
                )}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:bg-slate-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="bg-emerald-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/30 group-hover:bg-emerald-500/35 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-emerald-500 transition-transform group-hover:rotate-12 duration-350"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t("Support dédié 24/7")}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  "Notre équipe est à votre disposition pour vous accompagner et résoudre le moindre problème rencontré sur la plateforme.",
                )}
              </p>
            </motion.div>
          </motion.div>

          {/* Journal Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full max-w-7xl mx-auto py-16 mb-16 px-6"
          >
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 md:mb-4 text-slate-800 text-center">
                <LogoText>{t("Journal UpTaskers")}</LogoText>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto text-center">
                {t(
                  "Guides, astuces et conseils pour clients et professionnels",
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getJournalArticles(t).map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={fadeInUp}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100/80 ring-1 ring-slate-900/5 hover:-translate-y-1.5 transition-all duration-500 flex flex-col w-full h-full group"
                >
                  <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] overflow-hidden shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1 min-h-[250px] md:min-h-[350px]">
                    <span className="text-sm font-semibold text-sky-600 mb-2 block">
                      {article.date}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-base text-slate-600 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="text-base text-slate-700 prose prose-sky prose-p:leading-relaxed max-w-none flex-1">
                      {article.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <GlobeSection />

          {/* App download section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={scaleUp}
            className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full max-w-5xl mx-auto flex flex-col items-center text-center bg-gradient-to-bottom lg:bg-gradient-to-r from-blue-100/50 to-indigo-100/50 border border-slate-200 rounded-[2rem] md:rounded-[3rem] px-4 md:px-12 lg:px-20 py-16 mb-16 md:mb-32 mt-8"
          >
            <motion.div
              variants={staggerContainer}
              className="w-full max-w-2xl text-center mb-12 md:mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
              >
                {t("L'expertise dans")} <br className="hidden md:block" />{" "}
                <span className="text-blue-500">{t("votre poche.")}</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed mx-auto"
              >
                {t(
                  "Téléchargez notre application mobile gratuite pour trouver un prestataire, gérer vos demandes et communiquer facilement où que vous soyez.",
                )}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              >
                <AppStoreBadge />
                <GooglePlayBadge />
              </motion.div>
            </motion.div>

            <div className="w-full relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 pt-4 md:pt-0">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full max-w-2xl mx-auto"></div>
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="relative z-10 w-[260px] sm:w-[300px] lg:w-[340px] rounded-[2.5rem] lg:rounded-[3rem] border-[8px] lg:border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden bg-white h-[520px] sm:h-[600px] lg:h-[680px] shrink-0 transition-transform duration-500 hover:rotate-0 hover:z-30 md:mr-0"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 lg:h-6 w-1/3 bg-[#1a1a1a] rounded-b-xl lg:rounded-b-2xl z-20"></div>
                
                {/* Image container shifted up to hide status bar */}
                <div className="absolute top-[-30px] sm:top-[-35px] left-0 right-0 bottom-[-30px] sm:bottom-[-35px]">
                  <img
                    src="/mobile_app_1.jpeg"
                    alt="Application Mobile UpTaskers"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.35,
                }}
                className="relative z-10 w-[260px] sm:w-[300px] lg:w-[340px] rounded-[2.5rem] lg:rounded-[3rem] border-[8px] lg:border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden bg-white h-[520px] sm:h-[600px] lg:h-[680px] shrink-0 md:-ml-16 md:mt-16 lg:mt-24 transition-transform duration-500 hover:rotate-0 hover:z-30 block"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 lg:h-6 w-1/3 bg-[#1a1a1a] rounded-b-xl lg:rounded-b-2xl z-20"></div>
                
                {/* Image container shifted up to hide status bar */}
                <div className="absolute top-[-30px] sm:top-[-35px] left-0 right-0 bottom-[-30px] sm:bottom-[-35px]">
                  <img
                    src="/mobile_app_2.jpeg"
                    alt="Application Mobile UpTaskers"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
