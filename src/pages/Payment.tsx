import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  CreditCard,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { LogoText } from "../components/LogoText";

export default function Payment({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [paymentStatus, setPaymentStatus] = useState<
    "pending" | "processing" | "success"
  >("pending");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStatus("processing");

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus("success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <Navbar onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-blue-500/10 text-blue-400 p-3 rounded-2xl mb-6 border border-blue-500/20">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Paiement{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Sécurisé
            </span>
          </h1>
          <p className="text-slate-600 text-lg">
            Vos fonds sont bloqués de manière sécurisée jusqu'à la fin de la
            prestation.
          </p>
        </div>

        {paymentStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-slate-200 rounded-3xl p-10 text-center max-w-xl mx-auto"
          >
            <div className="bg-emerald-500/20 text-emerald-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Paiement Réussi !</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Le montant de <strong>150,00 €</strong> a été bloqué en toute
              sécurité. Le prestataire a été notifié et la mission peut
              commencer.
            </p>
            <button
              onClick={() => onNavigate("/messages")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] inline-flex items-center gap-2"
            >
              Retour aux messages <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 h-max">
              <h3 className="text-xl font-bold mb-6">Récapitulatif</h3>

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <div className="font-bold">Développement Web React</div>
                  <div className="text-sm text-slate-600">
                    Alexandre D. (Prestataire)
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-700">
                  <span>Prestation</span>
                  <span>150,00 €</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>
                    Frais de service sécurisé (<LogoText><strong>Uptaskers</strong></LogoText>)
                  </span>
                  <span>0,00 €</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xl font-bold">
                <span>Total</span>
                <span>150,00 €</span>
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-slate-600" />
                Détails de paiement
              </h3>

              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nom sur la carte
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#111] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Numéro de carte
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      maxLength={19}
                      className="w-full bg-[#111] border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors tracking-widest font-mono"
                      placeholder="4242 4242 4242 4242"
                    />
                    <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Date d'expiration
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={5}
                      className="w-full bg-[#111] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={3}
                      className="w-full bg-[#111] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-4 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                  <Lock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-200/80 leading-relaxed">
                    Vos informations de paiement sont chiffrées selon les normes
                    PCI-DSS. <LogoText><strong>Uptaskers</strong></LogoText> retient les fonds jusqu'à
                    ce que vous validiez la fin de la mission.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={paymentStatus === "processing"}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] mt-2 flex items-center justify-center gap-2"
                >
                  {paymentStatus === "processing" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Payer 150,00 €</>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
