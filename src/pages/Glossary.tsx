import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { Search, Book, Bookmark, ChevronRight } from "lucide-react";

const GLOSSARY_TERMS = [
  {
    term: "A/D Ratio",
    definition:
      "Advance/Decline ratio; a market breadth indicator comparing the number of advancing assets to declining assets.",
  },
  {
    term: "Ask Price",
    definition: "The lowest price a seller is willing to accept for an asset.",
  },
  {
    term: "Bear Market",
    definition:
      "A market condition where prices are falling or are expected to fall, typically marked by a 20% downturn from recent highs.",
  },
  {
    term: "Bid Price",
    definition: "The highest price a buyer is willing to pay for an asset.",
  },
  {
    term: "Bull Market",
    definition:
      "A market condition where prices are rising or are expected to rise.",
  },
  {
    term: "Candlestick",
    definition:
      "A type of price chart showing the open, high, low, and close prices for an asset over a specific time period.",
  },
  {
    term: "Drawdown",
    definition:
      "The peak-to-trough decline during a specific period for an investment, trading account, or fund, usually quoted as a percentage.",
  },
  {
    term: "Fibonacci Retracement",
    definition:
      "Lines drawn on a chart representing support and resistance levels based on the Fibonacci sequence.",
  },
  {
    term: "FOMO",
    definition:
      "Fear Of Missing Out. The feeling of anxiety that an exciting or interesting event may currently be happening elsewhere, often leading to impulsive trading.",
  },
  {
    term: "Leverage",
    definition:
      "Using borrowed capital to increase the potential return of an investment (also increases potential risk).",
  },
  {
    term: "Liquidity",
    definition:
      "The degree to which an asset can be quickly bought or sold in the market without affecting its price.",
  },
  {
    term: "Long Position",
    definition:
      "Buying an asset with the expectation that it will rise in value.",
  },
  {
    term: "Margin Call",
    definition:
      "A broker's demand for an investor to deposit additional money or securities to bring their account up to the minimum maintenance margin.",
  },
  {
    term: "Order Block",
    definition:
      "A term used heavily in smart money concepts; it signifies an area where large financial institutions have accumulated orders.",
  },
  {
    term: "PIP",
    definition:
      "Percentage In Point. The smallest price move that a given exchange rate makes based on market convention (typically the fourth decimal place in Forex).",
  },
  {
    term: "Resistance",
    definition:
      "A price level at which selling is thought to be strong enough to prevent the price from rising further.",
  },
  {
    term: "Risk/Reward Ratio",
    definition:
      "A ratio used by traders to compare the expected returns of an investment to the amount of risk undertaken to capture these returns.",
  },
  {
    term: "Scalping",
    definition:
      "A trading style that specializes in profiting off of small price changes, generally after a trade is executed and becomes profitable quickly.",
  },
  {
    term: "Short Position",
    definition:
      "Selling a borrowed asset with the expectation that its price will fall, so it can be bought back later at a lower price.",
  },
  {
    term: "Slippage",
    definition:
      "The difference between the expected price of a trade and the price at which the trade is executed.",
  },
  {
    term: "Smart Money",
    definition:
      "Capital controlled by institutional investors, market makers, central banks, and other financial professionals.",
  },
  {
    term: "Spread",
    definition: "The difference between the bid and the ask price of an asset.",
  },
  {
    term: "Stop Loss",
    definition:
      "An exact price level set by a trader to automatically close a position and limit losses if the market moves against them.",
  },
  {
    term: "Support",
    definition:
      "A price level at which a downtrend tends to pause due to a concentration of demand (buying interest).",
  },
  {
    term: "Take Profit",
    definition:
      "An order used by traders to automatically close their position when a certain profit level is reached.",
  },
  {
    term: "Volume",
    definition:
      "The number of shares or contracts traded in a security or an entire market during a given period of time.",
  },
];

export default function Glossary({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");

  // Generate alphabet navigation
  const alphabet = [
    "All",
    ...Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65)),
  ];

  const filteredTerms = useMemo(() => {
    let result = GLOSSARY_TERMS;

    if (activeLetter !== "All") {
      result = result.filter((item) =>
        item.term.toUpperCase().startsWith(activeLetter),
      );
    }

    if (searchQuery) {
      result = result.filter(
        (item) =>
          item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return result.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, activeLetter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0b0e14] min-h-screen font-sans antialiased text-slate-900 overflow-hidden relative"
    >
      <Navbar onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 px-6">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6">
            <Book className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              Trading Dictionary
            </span>
          </div>

          <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-6">
            The Glossary
          </h1>

          <p className="text-slate-600 max-w-2xl mb-10 text-lg">
            Master the terminology of the financial markets. Find clear, concise
            definitions for hundreds of trading and investing concepts.
          </p>

          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Search for a term (e.g., 'Drawdown', 'Slippage')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151922] border border-slate-200 rounded-full pl-12 pr-4 py-4 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors shadow-lg shadow-black/20"
            />
            <Search className="w-5 h-5 text-slate-600 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 pb-24 relative z-10">
        <div className="max-w-[1280px] mx-auto border-t border-slate-200 pt-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Sidebar - Alphabet Nav */}
            <div className="w-full lg:w-48 shrink-0">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 sticky top-24">
                Filter by Letter
              </h3>

              <div className="flex flex-wrap lg:flex-col gap-2 sticky top-32">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => {
                      setActiveLetter(letter);
                      setSearchQuery(""); // Clear search when clicking letter
                    }}
                    className={`w-10 h-10 lg:w-full lg:h-auto lg:px-4 lg:py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center lg:justify-start transition-colors ${
                      activeLetter === letter
                        ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                        : "bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Dictionary Content */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {searchQuery
                    ? `Results for "${searchQuery}"`
                    : activeLetter === "All"
                      ? "All Terms"
                      : `Terms starting with ${activeLetter}`}
                </h2>
                <div className="text-sm text-slate-500">
                  {filteredTerms.length} entries
                </div>
              </div>

              {filteredTerms.length === 0 ? (
                <div className="py-20 text-center bg-[#151922] rounded-2xl border border-slate-200">
                  <Book className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    No terms found
                  </h3>
                  <p className="text-slate-600">
                    Try adjusting your search query.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimatePresence>
                    {filteredTerms.map((item, idx) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, delay: idx * 0.02 }}
                        key={item.term}
                        className="bg-[#11141c] hover:bg-[#151922] border border-slate-200 hover:border-slate-200 rounded-xl p-6 transition-colors shadow-sm"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-slate-900">
                            {item.term}
                          </h3>
                          <button className="text-gray-600 hover:text-indigo-400 transition-colors">
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.definition}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
