import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Search,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";

const PATTERN_CATEGORIES = [
  "All Patterns",
  "Continuation",
  "Reversal",
  "Bilateral",
  "Harmonic",
];

const PATTERNS = [
  {
    id: 1,
    name: "Head and Shoulders",
    type: "Reversal",
    sentiment: "Bearish",
    description:
      "A chart formation that predicts a bullish-to-bearish trend reversal. It consists of three peaks, with the middle peak being the highest.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400", // Generic chart as fallback
    svg: (
      <svg
        className="w-full h-full text-slate-900"
        viewBox="0 0 100 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10,50 L20,30 L30,40 L50,10 L70,40 L80,25 L90,55"
          stroke="#ef4444"
        />
        <line
          x1="15"
          y1="45"
          x2="85"
          y2="45"
          stroke="#a3a3a3"
          strokeDasharray="4 4"
        />
      </svg>
    ),
    difficulty: "Medium",
    color: "from-red-500/20 to-red-900/20",
    borderColor: "border-red-500/30",
  },
  {
    id: 2,
    name: "Double Bottom",
    type: "Reversal",
    sentiment: "Bullish",
    description:
      "A charting pattern that describes a drop in a stock or index, a rebound, another drop to the same or similar level, and finally another rebound.",
    svg: (
      <svg
        className="w-full h-full text-slate-900"
        viewBox="0 0 100 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10,10 L30,50 L50,25 L70,50 L90,10 M90,10 L80,10 M90,10 L90,20"
          stroke="#00dcb5"
        />
        <line
          x1="40"
          y1="25"
          x2="100"
          y2="25"
          stroke="#a3a3a3"
          strokeDasharray="4 4"
        />
      </svg>
    ),
    difficulty: "Easy",
    color: "from-emerald-500/20 to-emerald-900/20",
    borderColor: "border-emerald-500/30",
  },
  {
    id: 3,
    name: "Bull Flag",
    type: "Continuation",
    sentiment: "Bullish",
    description:
      "A continuation pattern that resembles a flag on a pole, indicating a brief consolidation before the previous upward trend resumes.",
    svg: (
      <svg
        className="w-full h-full text-slate-900"
        viewBox="0 0 100 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10,50 L40,15 L50,25 L60,20 L70,30 L100,5 M100,5 L90,5 M100,5 L100,15"
          stroke="#00dcb5"
        />
        <line
          x1="35"
          y1="12"
          x2="75"
          y2="28"
          stroke="#a3a3a3"
          strokeWidth="1"
        />
        <line
          x1="45"
          y1="30"
          x2="85"
          y2="45"
          stroke="#a3a3a3"
          strokeWidth="1"
        />
      </svg>
    ),
    difficulty: "Easy",
    color: "from-emerald-500/20 to-emerald-900/20",
    borderColor: "border-emerald-500/30",
  },
  {
    id: 4,
    name: "Ascending Triangle",
    type: "Continuation",
    sentiment: "Bullish",
    description:
      "A bullish pattern characterized by a rising lower trendline and a flat upper trendline acting as resistance.",
    svg: (
      <svg
        className="w-full h-full text-slate-900"
        viewBox="0 0 100 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10,50 L30,20 L50,40 L70,20 L80,30 L100,5 M100,5 L90,5 M100,5 L100,15"
          stroke="#00dcb5"
        />
        <line
          x1="20"
          y1="20"
          x2="90"
          y2="20"
          stroke="#a3a3a3"
          strokeWidth="1"
        />
        <line
          x1="10"
          y1="52"
          x2="80"
          y2="30"
          stroke="#a3a3a3"
          strokeWidth="1"
        />
      </svg>
    ),
    difficulty: "Medium",
    color: "from-emerald-500/20 to-emerald-900/20",
    borderColor: "border-emerald-500/30",
  },
  {
    id: 5,
    name: "Bear Flag",
    type: "Continuation",
    sentiment: "Bearish",
    description:
      "A small, upward-trending channel that occurs after a sharp downward price movement, signaling a continuation of the downtrend.",
    svg: (
      <svg
        className="w-full h-full text-slate-900"
        viewBox="0 0 100 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10,10 L40,45 L50,35 L60,40 L70,30 L100,55 M100,55 L90,55 M100,55 L100,45"
          stroke="#ef4444"
        />
        <line
          x1="35"
          y1="48"
          x2="75"
          y2="32"
          stroke="#a3a3a3"
          strokeWidth="1"
        />
        <line
          x1="45"
          y1="30"
          x2="85"
          y2="15"
          stroke="#a3a3a3"
          strokeWidth="1"
        />
      </svg>
    ),
    difficulty: "Easy",
    color: "from-red-500/20 to-red-900/20",
    borderColor: "border-red-500/30",
  },
  {
    id: 6,
    name: "Double Top",
    type: "Reversal",
    sentiment: "Bearish",
    description:
      "A highly effective bearish reversal pattern that occurs after an extended uptrend, forming two peaks at roughly the same price level.",
    svg: (
      <svg
        className="w-full h-full text-slate-900"
        viewBox="0 0 100 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10,50 L30,10 L50,35 L70,10 L90,55 M90,55 L80,55 M90,55 L90,45"
          stroke="#ef4444"
        />
        <line
          x1="40"
          y1="35"
          x2="100"
          y2="35"
          stroke="#a3a3a3"
          strokeDasharray="4 4"
        />
      </svg>
    ),
    difficulty: "Easy",
    color: "from-red-500/20 to-red-900/20",
    borderColor: "border-red-500/30",
  },
];

export default function MarketPatterns({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState("All Patterns");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatterns = PATTERNS.filter((pattern) => {
    const matchesCategory =
      activeCategory === "All Patterns" || pattern.type === activeCategory;
    const matchesSearch =
      pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pattern.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 overflow-hidden relative"
    >
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-[1280px] mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
            <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">
              Interactive Library
            </span>
          </div>

          <h1 className="text-[46px] sm:text-[56px] lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Decoding{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Market Patterns
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Learn to identify highly probable setups. From standard continuation
            structures to advanced reversals, master the language of the charts.
          </p>

          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Search patterns e.g., 'Head and Shoulders', 'Bulls'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-full pl-14 pr-6 py-4 text-base text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors shadow-2xl shadow-black/50 backdrop-blur-xl"
            />
            <Search className="w-6 h-6 text-slate-600 absolute left-5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 py-12 border-t border-slate-200 relative z-10">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
              Pattern Types
            </h3>
            <ul className="flex flex-col space-y-1">
              {PATTERN_CATEGORIES.map((cat, i) => (
                <li key={i}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${
                      activeCategory === cat
                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent"
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <ChevronRight className="w-4 h-4 text-purple-400" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Patterns Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                {activeCategory}{" "}
                <span className="text-slate-500 text-lg ml-2 font-medium">
                  ({filteredPatterns.length})
                </span>
              </h2>
            </div>

            {filteredPatterns.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No patterns found
                </h3>
                <p className="text-slate-600">
                  Try adjusting your search or category filter.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredPatterns.map((pattern) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={pattern.id}
                      className={`group flex flex-col bg-[#0a0e17] border ${pattern.borderColor} rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative`}
                    >
                      {/* Interactive Chart Area */}
                      <div
                        className={`relative h-48 bg-gradient-to-br ${pattern.color} p-6 flex flex-col items-center justify-center overflow-hidden`}
                      >
                        {/* Grid background */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgwem0xIDE5aDE4VjFIMXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] mt-[-1px] ml-[-1px] opacity-50"></div>

                        <div className="relative z-10 w-full h-full drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500">
                          {pattern.svg}
                        </div>

                        {/* Sentiment Badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0a0e17]/80 backdrop-blur-md border border-slate-200 shadow-lg">
                          {pattern.sentiment === "Bullish" ? (
                            <TrendingUp className="w-3.5 h-3.5 text-[#00dcb5]" />
                          ) : (
                            <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                          )}
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${pattern.sentiment === "Bullish" ? "text-[#00dcb5]" : "text-red-500"}`}
                          >
                            {pattern.sentiment}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1 relative bg-[#0a0e17]">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-wider text-slate-700">
                            {pattern.type}
                          </span>
                          <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-wider text-slate-700">
                            {pattern.difficulty}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-purple-400 transition-colors">
                          {pattern.name}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                          {pattern.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-slate-200">
                          <button className="text-sm font-bold text-slate-900 hover:text-purple-400 transition-colors flex items-center gap-2 group/btn">
                            Learn Strategy
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
