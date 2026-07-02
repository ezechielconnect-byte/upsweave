import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Shield,
  Target,
  Activity,
  AlertTriangle,
  CheckCircle,
  Info,
  ChevronDown,
  PieChart,
  Percent,
} from "lucide-react";

export default function RiskManagement({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [activeTab, setActiveTab] = useState("Position Sizing");

  // Position Sizing Calculator state
  const [accountBalance, setAccountBalance] = useState<string>("10000");
  const [riskPercent, setRiskPercent] = useState<string>("1");
  const [entryPrice, setEntryPrice] = useState<string>("50000");
  const [stopLoss, setStopLoss] = useState<string>("49000");

  // Calculates
  const calculatePositionSize = () => {
    const account = parseFloat(accountBalance) || 0;
    const risk = parseFloat(riskPercent) || 0;
    const entry = parseFloat(entryPrice) || 0;
    const sl = parseFloat(stopLoss) || 0;

    if (account <= 0 || risk <= 0 || entry <= 0 || sl <= 0 || entry <= sl) {
      return {
        amountToRisk: 0,
        positionSize: 0,
        positionValue: 0,
        leverageTarget: 1,
      };
    }

    const amountToRisk = account * (risk / 100);
    const slDistancePercent = ((entry - sl) / entry) * 100;
    const positionValue = amountToRisk / (slDistancePercent / 100);
    const positionSize = positionValue / entry;

    return { amountToRisk, positionSize, positionValue, slDistancePercent };
  };

  const calcResult = calculatePositionSize();

  const metrics = [
    {
      label: "Recommended Risk/Trade",
      value: "1-2%",
      icon: <Percent className="w-5 h-5 text-emerald-400" />,
    },
    {
      label: "Max Drawdown Limit",
      value: "10%",
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    },
    {
      label: "Optimal Reward/Risk",
      value: "3:1 +",
      icon: <Target className="w-5 h-5 text-cyan-400" />,
    },
  ];

  const rules = [
    {
      title: "The 1% Rule",
      desc: "Never risk more than 1% of your total trading capital on a single trade. If you have a $10,000 account, your maximum risk should be $100.",
    },
    {
      title: "Pre-define Stop Losses",
      desc: "Always enter a trade with a hard stop loss order in place. Mental stops often fail due to emotional attachment when a trade goes against you.",
    },
    {
      title: "Risk/Reward Ratio (RRR)",
      desc: "Maintain a minimum of 1:2 RRR. For every dollar you risk, you should aim to make at least two dollars. This allows you to be profitable even with a 40% win rate.",
    },
    {
      title: "Correlated Risk",
      desc: "If you take multiple trades at the same time, ensure they differ in asset class or correlation. Don't risk 1% on BTC and 1% on ETH simultaneously as they often move together.",
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-700/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1280px] mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Capital Preservation
            </span>
          </div>

          <h1 className="text-[46px] sm:text-[56px] lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Protect the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Capital.
            </span>
            <br />
            Let Profits Run.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Professional trading isn't about perfectly predicting the market.
            It's about surviving long enough to let probabilities play out in
            your favor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-200 flex items-center justify-center shrink-0">
                  {metric.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-slate-600 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    {metric.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-12 border-t border-slate-200 relative z-10 mb-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  Core Principles
                </h2>
                <div className="bg-[#0a0e17] border border-slate-200 rounded-2xl p-6 space-y-6">
                  {rules.map((rule, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1.5">
                          {rule.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {rule.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10">
                  <Activity className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">
                    The Mathematics of Ruin
                  </h3>
                  <p className="text-sm text-emerald-100/70 leading-relaxed mb-4">
                    If you lose 50% of your account, you need a 100% gain just
                    to get back to breakeven. Preserving capital is
                    mathematically more important than making outsized gains.
                  </p>
                  <div className="space-y-2 text-sm text-emerald-100/90 font-mono">
                    <div className="flex justify-between border-b border-emerald-500/20 pb-1">
                      <span>Drawdown</span>
                      <span>Recovery Needed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>10% loss</span>
                      <span className="text-red-300">11.1% gain</span>
                    </div>
                    <div className="flex justify-between">
                      <span>25% loss</span>
                      <span className="text-red-400">33.3% gain</span>
                    </div>
                    <div className="flex justify-between">
                      <span>50% loss</span>
                      <span className="text-red-500">100.0% gain</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive calculator */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                <PieChart className="w-6 h-6 text-cyan-400" />
                Position Size Calculator
              </h2>

              <div className="bg-[#0a0e17] border border-slate-200 rounded-2xl p-6 sm:p-8">
                <p className="text-sm text-slate-600 mb-8">
                  Calculate exactly how much to buy or sell to maintain your
                  strict risk parameters.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Account Balance ($)
                    </label>
                    <input
                      type="number"
                      value={accountBalance}
                      onChange={(e) => setAccountBalance(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-mono focus:border-emerald-500/50 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Risk Percentage (%)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        value={riskPercent}
                        onChange={(e) => setRiskPercent(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 pr-10 text-slate-900 font-mono focus:border-emerald-500/50 outline-none transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                        %
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Entry Price ($)
                    </label>
                    <input
                      type="number"
                      value={entryPrice}
                      onChange={(e) => setEntryPrice(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-mono focus:border-emerald-500/50 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Stop Loss Price ($)
                    </label>
                    <input
                      type="number"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-mono focus:border-emerald-500/50 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Results Area */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 left-0"></div>

                  <div className="mb-6 flex items-start gap-3 text-amber-400 text-sm bg-amber-400/10 p-4 rounded-lg">
                    <Info className="w-5 h-5 shrink-0" />
                    <p>
                      Based on your <strong>{riskPercent}%</strong> risk
                      tolerance, if your stop loss is hit, you will lose exactly{" "}
                      <strong>${calcResult.amountToRisk.toFixed(2)}</strong>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Total Position Value
                      </div>
                      <div className="text-3xl font-bold text-slate-900">
                        $
                        {calcResult.positionValue.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        Amount to allocate to this trade
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Units / Lot Size
                      </div>
                      <div className="text-3xl font-bold text-emerald-400">
                        {calcResult.positionSize > 0
                          ? calcResult.positionSize.toFixed(4)
                          : "0.00"}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        Quantity of asset to buy
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-6 text-sm">
                    <div>
                      <span className="text-slate-500 mr-2">
                        Stop Loss Distance:
                      </span>
                      <span className="font-mono text-slate-900">
                        {(calcResult.slDistancePercent || 0).toFixed(2)}%
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 mr-2">
                        Amount at Risk:
                      </span>
                      <span className="font-mono text-red-400">
                        -${calcResult.amountToRisk.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
