import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowUpRight,
  Zap,
  Target,
  Binary,
} from "lucide-react";

const POSITIONS = [
  {
    id: "1",
    title: "Senior Quant Developer",
    department: "Engineering",
    location: "London / Remote",
    type: "Full-time",
    description:
      "Build algorithmic trading simulation models and optimize high-throughput matching engines.",
  },
  {
    id: "2",
    title: "Frontend Engineer (React/WebGL)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Create high-performance, butter-smooth charting interfaces and interactive trading terminals.",
  },
  {
    id: "3",
    title: "Trading Educator & Content Lead",
    department: "Education",
    location: "London",
    type: "Full-time",
    description:
      "Develop rigorous, data-driven curricula and trading patterns material for our academy.",
  },
  {
    id: "4",
    title: "Product Manager (Simulations)",
    department: "Product",
    location: "New York / Remote",
    type: "Full-time",
    description:
      "Drive the roadmap for our hyper-realistic market simulation environments.",
  },
];

export default function Careers({
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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400"></span>
            <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              Join the Team
            </span>
          </div>

          <h1 className="text-[46px] sm:text-[56px] lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-8 max-w-4xl mx-auto">
            Build the future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              trader education.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto">
            We are looking for elite engineers, visionary designers, and
            seasoned market veterans to help us eliminate the 90% failure rate
            in retail trading.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="px-6 py-12 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
            <div className="bg-[#0a0e17] border border-slate-200 p-8 rounded-3xl">
              <Zap className="w-8 h-8 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Ship Fast, Learn Faster
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We don't get bogged down in endless bureaucracy. We build,
                measure, and iterate with ruthless efficiency.
              </p>
            </div>
            <div className="bg-[#0a0e17] border border-slate-200 p-8 rounded-3xl">
              <Target className="w-8 h-8 text-rose-400 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Skin in the Game
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Every team member gets a funded personal simulation account. To
                build for traders, you must understand the psychology of
                trading.
              </p>
            </div>
            <div className="bg-[#0a0e17] border border-slate-200 p-8 rounded-3xl">
              <Binary className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Data Over Opinion
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                We make product and curriculum decisions based on hard
                statistical evidence, not gut feelings or market buzz words.
              </p>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-3">Open Positions</h2>
                <p className="text-slate-600">
                  Join our remote-first, globally distributed team.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <span>{POSITIONS.length} Roles available</span>
              </div>
            </div>

            <div className="space-y-4">
              {POSITIONS.map((pos) => (
                <div
                  key={pos.id}
                  className="group bg-[#0a0e17] hover:bg-[#11141c] border border-slate-200 hover:border-slate-200 p-6 md:p-8 rounded-2xl transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-white text-slate-700 text-xs font-semibold uppercase tracking-wider rounded-full">
                        {pos.department}
                      </span>
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider rounded-full">
                        {pos.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-400 transition-colors">
                      {pos.title}
                    </h3>
                    <p className="text-slate-600 text-sm max-w-2xl">
                      {pos.description}
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end justify-between gap-4 shrink-0">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium bg-[#151922] px-3 py-1.5 rounded-lg border border-slate-200">
                      <MapPin className="w-4 h-4" /> {pos.location}
                    </div>
                    <button className="text-slate-900 font-bold flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                      Apply Now <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* General Application */}
            <div className="mt-8 bg-gradient-to-r from-indigo-900/30 to-cyan-900/30 border border-indigo-500/20 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Don't see a fit?
              </h3>
              <p className="text-indigo-100/70 mb-6 max-w-lg mx-auto">
                We are always looking for exceptional talent. If you think you
                belong here, send us your resume and tell us why.
              </p>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 px-6 py-2.5 rounded-lg font-medium transition-colors">
                Send General Application
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
