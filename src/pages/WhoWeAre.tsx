import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Users,
  Building2,
  MapPin,
  Target,
  Sparkles,
  Award,
  Shield,
} from "lucide-react";

export default function WhoWeAre({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden relative"
    >
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-[1280px] mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Our Story
            </span>
          </div>

          <h1 className="text-[46px] sm:text-[56px] lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Democratizing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Financial Education
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            We are a collective of traders, engineers, and educators who believe
            that learning the markets shouldn't cost you your savings.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 relative z-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Origins</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Founded in 2024, RWAMS Traders started with a simple
                observation: the steepest curve in trading isn't learning the
                theory, it's executing that theory without emotional
                interference. We saw too many beginners wiping out real accounts
                before they even understood how leverage worked.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our mission is to build the world's most hyper-realistic trading
                simulator. We believe that by removing the financial risk from
                the initial learning phase, traders can focus entirely on
                mechanics, risk management, and strategy development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl">
                <Users className="w-8 h-8 text-cyan-400 mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  50K+
                </div>
                <div className="text-sm tracking-wider text-slate-500 uppercase font-semibold">
                  Active Traders
                </div>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-2xl">
                <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  2M+
                </div>
                <div className="text-sm tracking-wider text-slate-500 uppercase font-semibold">
                  Simulated Trades
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-slate-200 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Team collaborating"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-300 backdrop-blur-md rounded-lg border border-slate-200 text-sm font-medium mb-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Headquarters
              </div>
              <h3 className="text-2xl font-bold text-slate-900">London, UK</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-24 relative z-10 bg-white/[0.02] border-y border-slate-200 mt-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-slate-600">
              The principles that guide every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0e17] border border-slate-200 p-10 rounded-3xl hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Protection First
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We aggressively protect our users from predatory market
                practices by promoting extreme risk management over quick gains.
              </p>
            </div>
            <div className="bg-[#0a0e17] border border-slate-200 p-10 rounded-3xl hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Radical Realism
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our simulator must sting when you lose and feel earned when you
                win. We don't hide slippage or spread — we simulate it
                accurately.
              </p>
            </div>
            <div className="bg-[#0a0e17] border border-slate-200 p-10 rounded-3xl hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Meritocratic Learning
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The market doesn't care who you are. We focus purely on data,
                edge, and objective performance metrics to evaluate trader
                progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
