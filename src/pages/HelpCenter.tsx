import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Search,
  ChevronDown,
  Book,
  MessageCircle,
  Shield,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function HelpCenter({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I access the Discord trading floor?",
      answer:
        "Once you purchase a membership, you will receive an email with a unique Discord invite link. Make sure your Discord account is verified. For issues, contact support.",
    },
    {
      question: "What time are the weekly live streams?",
      answer:
        "Our Weekly Streams air every Thursday at 8:00 PM EST. They are recorded and uploaded to the Weekly Streams library within 24 hours if you miss them.",
    },
    {
      question: "Do you provide financial advice or direct signals?",
      answer:
        "No. RWAMS Traders is an educational platform. We provide market analysis, share our trade setups, and teach risk management. We do not offer financial advice.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. You will retain access to premium features until the end of your current billing cycle.",
    },
    {
      question: "What trading platforms do you recommend?",
      answer:
        "Our education applies universally to market structure. However, our team predominantly uses TradingView for charting and various regulated brokers like TradeLocker for execution.",
    },
  ];

  const categories = [
    {
      icon: <Book className="w-6 h-6 text-indigo-400" />,
      title: "Getting Started",
      desc: "Setting up your account and accessing resources.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      title: "Community & Discord",
      desc: "Troubleshooting Discord access and rules.",
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-400" />,
      title: "Billing & Account",
      desc: "Manage subscriptions, payments, and safety.",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      title: "Educational Resources",
      desc: "Navigating streams, academy, and patterns.",
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

      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Search Area */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How can we help?
            </h1>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for articles, tutorials, and FAQs..."
                className="w-full bg-[#151922] border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-slate-500 shadow-xl"
              />
            </div>
          </div>

          {/* Quick Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-[#0a0e17] border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#151922] border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* FAQs */}
            <div className="md:col-span-7 lg:col-span-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#0a0e17] border border-slate-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      {faq.question}
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-200 mt-2">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Support Callout */}
            <div className="md:col-span-5 lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-slate-900">
                  Still need help?
                </h3>
                <p className="text-sm text-indigo-200/70 mb-6 leading-relaxed">
                  Can't find the answer you're looking for? Our support team is
                  ready to assist you directly.
                </p>
                <button
                  onClick={() => onNavigate("/contact")}
                  className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-slate-900 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Contact Support <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-[#0a0e17] border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-slate-900">
                  System Status
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-emerald-400">
                    All Systems Operational
                  </span>
                </div>
                <button className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
                  View Detailed Status &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
