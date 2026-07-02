import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  MessageSquare,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Video,
  FileText,
} from "lucide-react";

export default function DiscordServer({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const CHANNELS = [
    {
      icon: <Video className="w-5 h-5 text-indigo-400" />,
      name: "Live Trading Floor",
      desc: "Watch our elite traders analyze the markets live, daily.",
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      name: "Peer Review Lounge",
      desc: "Post your setups for constructive feedback from the community.",
    },
    {
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      name: "Strategy Backtesting",
      desc: "Discuss algorithmic models and rigorous backtesting results.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-400" />,
      name: "General Chat",
      desc: "Network with over 50,000 active members.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 overflow-hidden relative"
    >
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-6 relative z-10 flex items-center min-h-[calc(100vh-80px)]">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5865F2]/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 w-full">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-full px-4 py-1.5">
              <svg
                className="w-4 h-4 text-[#5865F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
              </svg>
              <span className="text-xs font-semibold tracking-wider text-[#5865F2] uppercase">
                Official Community
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              The Ultimate Hub for <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-[#5865F2]">
                Serious Traders.
              </span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              Trading can be a lonely journey. It doesn't have to be. Join
              50,000+ traders dedicated to risk management, strategy
              development, and continuous learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#5865F2] hover:bg-[#4752C4] text-slate-900 font-bold py-4 px-8 rounded-full transition-all shadow-lg flex items-center justify-center gap-2">
                Join Discord Server <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>{" "}
                12,402 Online
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>{" "}
                54,039 Members
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="bg-[#0a0e17]/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 relative overflow-hidden">
            {/* Mock App Chrome */}
            <div className="flex items-center gap-2 mb-8 border-b border-slate-200 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <div className="ml-4 text-xs font-semibold text-slate-500 tracking-wider">
                RWAMS TRADERS DISCORD
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CHANNELS.map((channel, i) => (
                <div
                  key={i}
                  className="bg-[#151922] border border-slate-200 p-5 rounded-2xl hover:border-[#5865F2]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {channel.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {channel.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {channel.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
              <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-sm text-emerald-200/80">
                <span className="font-bold text-emerald-400">
                  Strict Moderation:
                </span>{" "}
                Scams, signal-selling, and toxic behavior are banned
                immediately. We protect our culture.
              </p>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
