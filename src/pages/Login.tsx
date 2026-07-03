import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Login({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState<"client" | "prestataire">(
    "client",
  );

  return (
    <div className="min-h-[100vh] bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[400px]">
        <div className="flex bg-gray-800/50 p-1 rounded-lg mb-8">
          <button
            onClick={() => setActiveTab("client")}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === "client" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"}`}
          >
            {t("Espace client")}
          </button>
          <button
            onClick={() => setActiveTab("prestataire")}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === "prestataire" ? "bg-white text-black shadow" : "text-gray-400 hover:text-white"}`}
          >
            {t("Espace prestataire")}
          </button>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            {t("Connectez-vous ou inscrivez-vous")}
          </h1>
        </div>

        <div className="space-y-4 mb-6">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-lg border border-gray-700 bg-transparent hover:bg-gray-800 transition-colors font-medium">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5 rounded-full bg-white"
            />
            {t("Continuer avec Google")}
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-lg border border-gray-700 bg-transparent hover:bg-gray-800 transition-colors font-medium">
            {/* Apple icon approximation */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M16.365 21.43c-1.341.972-2.73 1.055-4.116.037-1.34-1.01-2.91-1.047-4.32-.01-1.892 1.39-3.957-1.39-4.877-3.056-1.57-2.85-2.07-6.06-1.39-8.47 1.01-3.59 4.38-4.99 6.22-4.99 2.05 0 3.32.96 4.3.96s2.51-1.12 4.79-1.07c2.31.05 4.36 1.48 4.64 4.54-5.32 1.9-4.22 8.79 1.43 10.15-.65 1.5-1.55 3.03-2.682 1.92zM15.42 5.06c.64-1.13.73-2.4-.1-3.66-1.3.18-2.67 1.05-3.32 2.21-.6 1.08-.85 2.37-.1 3.55 1.34-.14 2.76-1.05 3.52-2.1z" />
            </svg>
            {t("Continuer avec Apple")}
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-lg border border-gray-700 bg-transparent hover:bg-gray-800 transition-colors font-medium">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.73 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            {t("Continuer avec un numéro de téléphone")}
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-gray-700 flex-1"></div>
          <span className="text-gray-400 text-sm uppercase tracking-wide">
            OU
          </span>
          <div className="h-px bg-gray-700 flex-1"></div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onNavigate("/");
          }}
          className="space-y-4"
        >
          <div>
            <input
              type="email"
              placeholder={t("Adresse e-mail") as string}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold rounded-full py-4 transition-transform active:scale-[0.98]"
          >
            Continuer
          </button>
        </form>

        <div className="mt-24 text-center">
          <div
            className="flex justify-center mb-4 cursor-pointer"
            onClick={() => onNavigate("/")}
          >
            <img
              src="/icone.png"
              alt="Uptaskers Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto transition-transform hover:scale-110"
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <button
              onClick={() => onNavigate("/terms")}
              className="hover:underline"
            >
              {t("Conditions d'utilisation")}
            </button>
            <span>|</span>
            <button
              onClick={() => onNavigate("/privacy")}
              className="hover:underline"
            >
              {t("Politique de confidentialité")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
