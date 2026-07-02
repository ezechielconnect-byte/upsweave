import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Play,
  MessageSquare,
  Mic,
  Video,
  Users,
  ThumbsUp,
  Send,
  Maximize2,
  MoreHorizontal,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TradingFloor({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"chat" | "setups">("chat");
  const [message, setMessage] = useState("");

  const chatMessages = [
    {
      id: 1,
      user: "QuantMaster99",
      time: "10:42 AM",
      content:
        "Just entered a long position on ES at 5120. Order book looks extremely thin above here.",
      role: "Elite Trader",
    },
    {
      id: 2,
      user: "TapeReader_Dave",
      time: "10:44 AM",
      content:
        "Careful, strong resistance on the 15m delta. I am flat until we break 5125.",
      role: "Member",
    },
    {
      id: 3,
      user: "VolatilityHunter",
      time: "10:45 AM",
      content:
        "VIX just spiked, algorithms might start selling the rip. Watch your stops.",
      role: "Moderator",
    },
    {
      id: 4,
      user: "QuantMaster99",
      time: "10:48 AM",
      content: "Hit my first target. Scaling out 50% here.",
      role: "Elite Trader",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0b0e14] min-h-screen font-sans antialiased text-slate-900 overflow-hidden flex flex-col pt-16"
    >
      <Navbar onNavigate={onNavigate} />

      <main className="flex-1 flex flex-col lg:flex-row max-h-[calc(100vh-64px)]">
        {/* Main Stream Area */}
        <div className="flex-1 flex flex-col border-r border-slate-200 bg-slate-50">
          {/* Header */}
          <div className="h-14 border-b border-slate-200 flex items-center justify-between px-6 shrink-0 bg-[#0a0e17]">
            <div className="flex items-center gap-3">
              <span className="flex relative h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="font-bold text-sm tracking-wider">
                LIVE TRADING FLOOR
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" /> 1,248
              </span>
              <button className="hover:text-slate-900 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Video Player Mock */}
          <div className="relative w-full aspect-video bg-[#000] border-b border-slate-200 shrink-0 flex items-center justify-center group overflow-hidden">
            {/* Replace with actual video if available, using an image for currently */}
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1600"
              alt="Trading Stream"
              className="w-full h-full object-cover opacity-60"
            />

            {/* Play overlay mock */}
            <div className="absolute inset-0 bg-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-indigo-500/90 flex items-center justify-center cursor-pointer hover:bg-indigo-500 hover:scale-105 transition-all">
                <Play className="w-6 h-6 text-slate-900 ml-1" />
              </div>
            </div>

            {/* Stream Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10 pointer-events-none">
              <div className="bg-slate-300 backdrop-blur-md rounded-xl p-3 border border-slate-200">
                <div className="text-xs font-bold text-indigo-400 mb-1">
                  New York Open
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  Live Tape Reading & Execution
                </div>
              </div>
            </div>
          </div>

          {/* Presenter Info & Voice Channel Mock */}
          <div className="p-6 shrink-0 bg-[#0a0e17] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  alt="Host"
                  className="w-12 h-12 rounded-full border-2 border-indigo-500"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0a0e17] rounded-full flex items-center justify-center">
                  <Mic className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 leading-tight">
                  {t('Alex "Quant" Mercer')}
                </h3>
                <span className="text-xs text-slate-600 font-medium">
                  Head of Execution @ RWAMS
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white hover:bg-slate-100 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" /> 428
              </button>
            </div>
          </div>

          {/* Below stream content - maybe recent trade alerts */}
          <div className="flex-1 min-h-0 bg-slate-50 p-6 overflow-y-auto hidden lg:block">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
              Latest Stream Alerts
            </h3>
            <div className="space-y-3">
              {[1, 2, 3].map((alert) => (
                <div
                  key={alert}
                  className="bg-[#151922] border border-slate-200 p-4 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${alert === 1 ? "bg-emerald-400" : alert === 2 ? "bg-red-400" : "bg-blue-400"}`}
                    ></div>
                    <div>
                      <span className="font-bold text-sm">ESZ3 (S&P 500)</span>
                      <span className="text-xs text-slate-500 ml-2">
                        2 mins ago
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-bold ${alert === 1 ? "text-emerald-400" : alert === 2 ? "text-red-400" : "text-blue-400"}`}
                  >
                    {alert === 1
                      ? "LONG @ 5120"
                      : alert === 2
                        ? "STOPPED OUT"
                        : "TAKE PROFIT 1"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Interaction Area */}
        <div className="w-full lg:w-[400px] shrink-0 bg-[#0a0e17] flex flex-col custom-scrollbar border-t lg:border-t-0 border-slate-200 lg:h-[calc(100vh-64px)] h-[500px]">
          {/* Tabs */}
          <div className="flex items-center p-2 bg-slate-50 shrink-0">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors ${activeTab === "chat" ? "bg-[#151922] text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
            >
              Live Chat
            </button>
            <button
              onClick={() => setActiveTab("setups")}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-colors ${activeTab === "setups" ? "bg-[#151922] text-slate-900" : "text-slate-500 hover:text-slate-700"}`}
            >
              Trade Ideas
            </button>
          </div>

          {/* Chat Content */}
          <AnimatePresence mode="wait">
            {activeTab === "chat" && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-1 flex flex-col min-h-0"
              >
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="group flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`font-bold text-sm ${msg.role === "Elite Trader" ? "text-amber-400" : msg.role === "Moderator" ? "text-emerald-400" : "text-indigo-400"}`}
                        >
                          {msg.user}
                        </span>
                        <span className="text-[10px] text-gray-600 font-medium uppercase tracking-wider">
                          {msg.role}
                        </span>
                        <span className="text-xs text-slate-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed bg-white/[0.02] p-2.5 rounded-lg rounded-tl-none border border-white/[0.02]">
                        {msg.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-slate-50 shrink-0 border-t border-slate-200">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Send a message to the floor..."
                      className="w-full bg-[#151922] border border-slate-200 rounded-xl py-3 pl-4 pr-12 text-sm text-slate-900 focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-gray-600"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && message.trim()) {
                          setMessage("");
                        }
                      }}
                    />
                    <button
                      className="absolute right-2 p-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-slate-900 transition-colors"
                      onClick={() => {
                        if (message.trim()) setMessage("");
                      }}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "setups" && (
              <motion.div
                key="setups"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-1 overflow-y-auto custom-scrollbar p-4"
              >
                <div className="text-center py-10 opacity-60">
                  <MessageSquare className="w-8 h-8 mx-auto mb-3 text-slate-500" />
                  <h4 className="text-sm font-bold">
                    No active setups currently posted.
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Host will post charts here when discussed.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </motion.div>
  );
}
