import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Shield, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LogoText } from "../components/LogoText";

export default function SignUp({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  const [accountType, setAccountType] = useState<"client" | "provider" | null>(
    null,
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left side - Information */}
      <div className="hidden lg:flex lg:w-1/2 p-4">
        <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-blue-900/40 to-black border border-slate-200 relative overflow-hidden flex flex-col items-start justify-center p-16">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          <div className="relative z-10 w-full max-w-lg">
            <h2 className="text-slate-900 text-5xl font-bold tracking-tight mb-8">
              Rejoignez la confiance.
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {t("Sécurité garantie")}
                  </h3>
                  <p className="text-slate-600">
                    {t(
                      "Paiements sécurisés, profils vérifiés et support client réactif 7j/7.",
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {t("Avis authentiques")}
                  </h3>
                  <p className="text-slate-600">
                    {t(
                      "Une communauté transparente où chaque évaluation est basée sur une vraie prestation.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 relative">
        <div
          className="absolute top-8 left-8 lg:left-auto lg:right-8 flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => onNavigate("/")}
        >
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            <LogoText>UpTaskers</LogoText>
          </span>
        </div>

        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              {t("Créer un compte")}
            </h1>
            <p className="text-slate-600">
              {t("Sélectionnez votre type de profil pour commencer")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setAccountType("client")}
              className={`p-4 rounded-2xl border text-left transition-all ${
                accountType === "client"
                  ? "bg-blue-600/10 border-blue-500"
                  : "bg-white border-slate-200 hover:border-white/30 hover:bg-slate-100"
              }`}
            >
              <User
                className={`w-8 h-8 mb-3 ${accountType === "client" ? "text-blue-400" : "text-slate-600"}`}
              />
              <div className="font-bold text-slate-900 mb-1">{t("Client")}</div>
              <div className="text-xs text-slate-600">
                {t("Je cherche un professionnel")}
              </div>
            </button>
            <button
              type="button"
              onClick={() => setAccountType("provider")}
              className={`p-4 rounded-2xl border text-left transition-all ${
                accountType === "provider"
                  ? "bg-blue-600/10 border-blue-500"
                  : "bg-white border-slate-200 hover:border-white/30 hover:bg-slate-100"
              }`}
            >
              <Briefcase
                className={`w-8 h-8 mb-3 ${accountType === "provider" ? "text-blue-400" : "text-slate-600"}`}
              />
              <div className="font-bold text-slate-900 mb-1">
                {t("Prestataire")}
              </div>
              <div className="text-xs text-slate-600">
                {t("Je propose mes services")}
              </div>
            </button>
          </div>

          {accountType && (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                onNavigate(accountType === "provider" ? "/offer" : "/");
              }}
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t("Nom complet")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t("Adresse email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 transition-colors"
                  placeholder="jean@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t("Mot de passe")}
                </label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-slate-600">
                    {t("J'accepte les")}{" "}
                    <button
                      type="button"
                      onClick={() => onNavigate("/terms")}
                      className="text-blue-400 hover:underline"
                    >
                      {t("Conditions d'utilisation")}
                    </button>{" "}
                    {t("et la")}{" "}
                    <button
                      type="button"
                      onClick={() => onNavigate("/privacy")}
                      className="text-blue-400 hover:underline"
                    >
                      {t("Politique de confidentialité")}
                    </button>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] mt-6"
              >
                {t("S'inscrire")}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
