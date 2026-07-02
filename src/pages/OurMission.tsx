import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Target,
  Globe,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  Activity,
  Zap,
} from "lucide-react";

export default function OurMission({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const objectives = [
    {
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      title: "Global Accessibility",
      desc: "Remove geographical and financial barriers to elite trading education and institutional-grade simulation tools.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: "Knowledge Parity",
      desc: "Bridge the extreme knowledge gap between retail traders and institutional algorithmic funds.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Risk-Free Incubation",
      desc: "Provide an environment where traders can fail, learn, and rebuild their edge without destroying their actual livelihoods.",
    },
  ];

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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-900/10 blur-[130px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8"
          >
            <Target className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-semibold tracking-wider text-rose-400 uppercase">
              The Prime Directive
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-[46px] sm:text-[56px] lg:text-[80px] font-bold tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto">
              To{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-500">
                eliminate
              </span>{" "}
              the 90% failure rate in retail trading.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mx-auto"
          >
            The statistics are brutal: 90% of retail traders lose 90% of their
            money in the first 90 days. Our sole existence is dedicated to
            breaking this cycle through ruthless, realistic simulation and
            uncompromising education.
          </motion.p>
        </div>
      </section>

      {/* The Problem / Solution Split */}
      <section className="px-6 py-12 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* The Problem */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-8">
                <Activity className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-3xl font-bold">The Problem</h2>
              <div className="w-12 h-1 bg-red-500/50"></div>
              <p className="text-slate-600 leading-relaxed text-lg pt-4">
                Trading is the only high-performance profession where beginners
                practice with live ammunition. Doctors have cadavers. Pilots
                have flight simulators. Traders have historically only had their
                own hard-earned savings.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                This forces emotional decision-making before mechanical
                proficiency is achieved, leading inevitably to financial ruin.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-8">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold">The Solution</h2>
              <div className="w-12 h-1 bg-emerald-500/50"></div>
              <p className="text-slate-600 leading-relaxed text-lg pt-4">
                We built a zero-risk, high-fidelity environment. A simulator
                that mimics the harsh realities of the live market—slippage,
                widened spreads, and volatility—without the devastating
                financial consequences of early mistakes.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                We mandate discipline before deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="px-6 py-24 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Objectives</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              How we map our grand vision to tangible milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0a0e17] border border-slate-200 p-8 rounded-3xl hover:bg-[#11141c] hover:border-slate-200 transition-all group"
              >
                <div className="bg-[#151922] w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 mb-6 group-hover:scale-110 transition-transform">
                  {obj.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {obj.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {obj.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded CTA */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-gradient-to-r from-rose-900/40 to-orange-900/40 border border-rose-500/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ready to train the right way?
              </h2>
              <p className="text-rose-100/70 text-lg mb-10 leading-relaxed">
                Join thousands of traders who are prioritizing practice, edge
                discovery, and capital preservation.
              </p>
              <button
                onClick={() => onNavigate("/pricing")}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
              >
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
