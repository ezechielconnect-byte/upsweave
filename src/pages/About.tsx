import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Shield,
  BookOpen,
  Globe,
  LayoutDashboard,
  Cpu,
  CheckCircle,
} from "lucide-react";

export default function About({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const features = [
    {
      icon: TrendingUp,
      title: "Risk-Free Trading Simulator",
      description:
        "Experience the thrill of the markets without the financial risk. Our platform is a 100% simulated environment where no real money is involved.",
    },
    {
      icon: Globe,
      title: "Real-Time Market Data",
      description:
        "We connect to top-tier providers like CoinGecko and Finnhub to bring you accurate, up-to-the-second pricing and charts across cryptocurrencies and stocks.",
    },
    {
      icon: BookOpen,
      title: "Educational Focus",
      description:
        "RWAMS Traders is built from the ground up to be a learning tool. Test your strategies, understand market dynamics, and build confidence.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "We value your privacy. Your personal preferences are stored locally, and we employ modern security practices to ensure your simulated environment is safe.",
    },
    {
      icon: LayoutDashboard,
      title: "Advanced Analytics",
      description:
        "Dive deep into your trading history with comprehensive dashboards, performance metrics, and actionable insights to refine your approach.",
    },
    {
      icon: Cpu,
      title: "Modern Architecture",
      description:
        "Built with cutting-edge web technologies to ensure a lightning-fast, responsive, and seamless experience across all your devices.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden relative selection:bg-cyan-500/30"
    >
      {/* Professional Elegant Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgNDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        {/* Very soft ambient glows */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-24 pb-24">
        <Navbar onNavigate={onNavigate} />

        <main className="w-full max-w-[1200px] px-6 lg:px-8 mt-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-medium text-slate-700 tracking-wide uppercase">
                About The Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Master the Markets, <br /> Zero Risk.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Everything you need to know about{" "}
              <strong className="text-slate-900">RWAMS Traders</strong>. We've
              built the ultimate educational simulator to help you learn,
              practice, and perfect your trading strategies.
            </p>
          </motion.div>

          {/* Vision/Mission Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900/50 to-[#050505] border border-slate-200 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                  Our Core Philosophy
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Trading can be intimidating and costly for beginners. RWAMS
                  Traders bridges the gap between theory and real-world
                  application by providing a high-fidelity simulator.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Learn by doing, not just reading",
                    "Test strategies without losing capital",
                    "Build discipline and emotional control",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-300 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 mix-blend-overlay" />
                <Target className="w-32 h-32 text-slate-900/20" />
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Platform Features
              </h2>
              <p className="text-slate-600">
                The tools and technologies powering your educational journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-200 hover:bg-white/[0.07] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Disclaimer Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-slate-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield className="w-48 h-48" />
            </div>

            <div className="relative z-10 w-full md:w-3/4">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold tracking-wider text-emerald-500 uppercase">
                  Educational Guarantee
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Committed to Safe Learning
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8">
                RWAMS Traders is not a broker. We do not hold user funds, nor do
                we execute trades on real financial markets. Our platform is
                exclusively simulated for the purpose of education and strategy
                development.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}
