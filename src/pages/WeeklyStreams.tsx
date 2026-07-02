import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Play,
  Calendar,
  Video,
  Clock,
  Bookmark,
  ChevronRight,
  Lock,
  BellRing,
} from "lucide-react";

const STREAMS = [
  {
    id: 1,
    title: "Understanding Liquidity Sweeps in Q3",
    date: "Aired on Oct 12, 2024",
    duration: "1h 45m",
    host: "Alex Mercer",
    category: "Market Structure",
    thumbnail:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
    isPremium: false,
    views: "12.4k",
  },
  {
    id: 2,
    title: "Algorithmic Order Block Detection",
    date: "Aired on Oct 05, 2024",
    duration: "2h 10m",
    host: "Sarah Chen",
    category: "Quantitative",
    thumbnail:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=600",
    isPremium: true,
    views: "8.1k",
  },
  {
    id: 3,
    title: "Psychology: Recovering from a 20% Drawdown",
    date: "Aired on Sep 28, 2024",
    duration: "1h 15m",
    host: "Dr. James Wilson",
    category: "Psychology",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    isPremium: false,
    views: "24.5k",
  },
  {
    id: 4,
    title: "Advanced Tape Reading Techniques",
    date: "Aired on Sep 21, 2024",
    duration: "1h 55m",
    host: "Alex Mercer",
    category: "Execution",
    thumbnail:
      "https://images.unsplash.com/photo-1621501103254-8025287eb1d9?auto=format&fit=crop&q=80&w=600",
    isPremium: true,
    views: "15.2k",
  },
  {
    id: 5,
    title: "Macro Environment & Crypto Correlation",
    date: "Aired on Sep 14, 2024",
    duration: "1h 30m",
    host: "David Kim",
    category: "Macro",
    thumbnail:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600",
    isPremium: false,
    views: "19.8k",
  },
  {
    id: 6,
    title: "Building an Automated Trading Bot with Python",
    date: "Aired on Sep 07, 2024",
    duration: "2h 45m",
    host: "Sarah Chen",
    category: "Quantitative",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    isPremium: true,
    views: "31.2k",
  },
];

export default function WeeklyStreams({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Market Structure",
    "Quantitative",
    "Psychology",
    "Execution",
    "Macro",
  ];

  const filteredStreams =
    activeFilter === "All"
      ? STREAMS
      : STREAMS.filter((s) => s.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden relative"
    >
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
                <Video className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                  Video Library
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Weekly Streams
              </h1>
              <p className="text-slate-600 text-lg max-w-xl leading-relaxed">
                Catch up on past live sessions, deep-dive market breakdowns, and
                exclusive masterclasses from our elite traders.
              </p>
            </div>

            <div className="bg-[#151922] border border-slate-200 rounded-2xl p-5 flex items-center gap-5 shrink-0 max-w-sm w-full">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20 shrink-0">
                <Calendar className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Next Live Stream
                </h4>
                <div className="text-xs text-slate-600 mb-2">
                  Thursday, 8:00 PM EST
                </div>
                <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
                  <BellRing className="w-3.5 h-3.5" /> Remind Me
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex overflow-x-auto gap-3 pb-4 mb-8 custom-scrollbar">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeFilter === f
                    ? "bg-indigo-500 text-slate-900 shadow-lg shadow-indigo-500/20"
                    : "bg-[#151922] text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredStreams.map((stream) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={stream.id}
                  className="group flex flex-col bg-[#0a0e17] rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-200 transition-all cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={stream.thumbnail}
                      alt={stream.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-200/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-slate-100 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                        <Play className="w-6 h-6 text-slate-900 ml-1" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-slate-700 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded bg-slate-700 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-700" />{" "}
                      {stream.duration}
                    </div>

                    {stream.isPremium && (
                      <div className="absolute top-3 right-3 bg-yellow-500/90 text-black text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1">
                        <Lock className="w-3 h-3" /> PRO
                      </div>
                    )}

                    <div className="absolute top-3 left-3 bg-slate-100 backdrop-blur-md border border-slate-200 text-slate-900 text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">
                      {stream.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {stream.title}
                    </h3>

                    <div className="flex items-center justify-between text-sm text-slate-500 mt-auto pt-4 border-t border-slate-200">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-slate-600">
                          {stream.host}
                        </span>
                        <span>{stream.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <Video className="w-3.5 h-3.5" />
                        {stream.views} views
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredStreams.length === 0 && (
              <div className="text-center py-24">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                  <Bookmark className="w-6 h-6 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">No streams found</h3>
                <p className="text-slate-600">
                  There are currently no recordings in this category.
                </p>
              </div>
            )}
          </AnimatePresence>

          {filteredStreams.length > 0 && (
            <div className="mt-12 flex justify-center">
              <button className="px-6 py-3 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl font-semibold transition-colors flex items-center gap-2 text-sm">
                Load More Streams <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>
    </motion.div>
  );
}
