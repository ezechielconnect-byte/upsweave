import React from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import { AppStoreBadge, GooglePlayBadge } from "../components/AppBadges";
import { LogoText } from "../components/LogoText";

interface DownloadAppProps {
  onNavigate: (path: string) => void;
}

export default function DownloadApp({ onNavigate }: DownloadAppProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30">
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-blue-600 rounded-2xl shadow-xl shadow-blue-600/30 flex items-center justify-center">
              <Download className="w-12 h-12 text-white" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              <LogoText>Téléchargez Uptaskers</LogoText>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium">
              L'application indispensable pour trouver des professionnels ou
              proposer vos services, directement depuis votre poche.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center max-w-2xl mx-auto"
          >
            <AppStoreBadge />
            <GooglePlayBadge />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center"
          >
            <button
              onClick={() => onNavigate("/")}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à l'accueil
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
