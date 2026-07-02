import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Target,
  Play,
  RotateCcw,
  AlertCircle,
  RefreshCw,
  BarChart2,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Settings,
} from "lucide-react";
import { createChart, ColorType, LineSeries } from "lightweight-charts";

// Simple indicator simulation data
const STRATEGIES = [
  {
    id: "ma-cross",
    name: "Moving Average Crossover",
    desc: "Buy when fast MA crosses over slow MA, hold otherwise.",
  },
  {
    id: "rsi-reversal",
    name: "RSI Mean Reversion",
    desc: "Buy below 30 RSI, sell above 70 RSI.",
  },
  {
    id: "breakout",
    name: "Support/Resistance Breakout",
    desc: "Buy when price breaks above recent 20-period high.",
  },
];

const ASSETS = [
  { id: "btc", name: "BTC/USD" },
  { id: "eth", name: "ETH/USD" },
  { id: "nasdaq", name: "NASDAQ 100" },
  { id: "eurusd", name: "EUR/USD" },
];

export default function StrategyTester({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [selectedStrategy, setSelectedStrategy] = useState(STRATEGIES[0].id);
  const [selectedAsset, setSelectedAsset] = useState(ASSETS[0].id);
  const [initialCapital, setInitialCapital] = useState("10000");

  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<{
    totalReturn: number;
    winRate: number;
    totalTrades: number;
    maxDrawdown: number;
    equityCurve: { time: number; value: number }[];
  } | null>(null);

  const handleRunTest = () => {
    setIsRunning(true);
    // Simulate a backrun process
    setTimeout(() => {
      const capital = parseFloat(initialCapital) || 10000;
      let currentCapital = capital;
      const tradesCount = Math.floor(Math.random() * 50) + 20; // 20 to 70 trades
      let winCount = 0;
      let peak = capital;
      let maxDrawdown = 0;

      const equityCurve = [];
      let time = Math.floor(Date.now() / 1000) - tradesCount * 86400;

      equityCurve.push({ time, value: currentCapital });

      for (let i = 0; i < tradesCount; i++) {
        // Random outcome based on strategy "simulation"
        const isWin = Math.random() > 0.45; // slightly profitable bias for fun
        const returnPercent = Math.random() * 0.05 + 0.01; // 1% to 6%

        if (isWin) {
          winCount++;
          currentCapital *= 1 + returnPercent;
        } else {
          currentCapital *= 1 - returnPercent * 0.8; // Losses are slightly smaller
        }

        if (currentCapital > peak) {
          peak = currentCapital;
        }

        const drawdown = ((peak - currentCapital) / peak) * 100;
        if (drawdown > maxDrawdown) {
          maxDrawdown = drawdown;
        }

        time += 86400; // +1 day
        equityCurve.push({ time, value: currentCapital });
      }

      setResults({
        totalReturn: ((currentCapital - capital) / capital) * 100,
        winRate: (winCount / tradesCount) * 100,
        totalTrades: tradesCount,
        maxDrawdown: maxDrawdown,
        equityCurve,
      });

      setIsRunning(false);
    }, 1500);
  };

  const chartContainerRef = React.useRef<HTMLDivElement>(null);
  const chartRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (!results || !chartContainerRef.current) return;

    if (chartRef.current) {
      chartRef.current.remove();
    }

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#9ca3af",
      },
      grid: {
        vertLines: { color: "#ffffff10" },
        horzLines: { color: "#ffffff10" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
      timeScale: {
        borderColor: "#ffffff20",
      },
      rightPriceScale: {
        borderColor: "#ffffff20",
      },
    });

    const series = chart.addSeries(LineSeries, {
      color: results.totalReturn >= 0 ? "#00dcb5" : "#ef4444",
      lineWidth: 2,
    });

    series.setData(results.equityCurve);
    chart.timeScale().fitContent();

    chartRef.current = chart;

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [results]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0b0e14] min-h-screen font-sans antialiased text-slate-900 overflow-hidden"
    >
      <Navbar onNavigate={onNavigate} />

      <div className="max-w-[1280px] mx-auto pt-32 pb-24 px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6">
            <Target className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
              Backtester
            </span>
          </div>

          <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-6">
            Strategy Tester
          </h1>

          <p className="text-slate-600 max-w-2xl text-lg">
            Test algorithmic trading strategies against historical simulated
            data without risking real capital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Control Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#151922] border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-slate-600" /> Parameters
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                    Strategy
                  </label>
                  <select
                    value={selectedStrategy}
                    onChange={(e) => setSelectedStrategy(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-500/50 transition-colors"
                  >
                    {STRATEGIES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-slate-600 mt-2">
                    {STRATEGIES.find((s) => s.id === selectedStrategy)?.desc}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                    Asset
                  </label>
                  <select
                    value={selectedAsset}
                    onChange={(e) => setSelectedAsset(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-500/50 transition-colors"
                  >
                    {ASSETS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                    Initial Capital ($)
                  </label>
                  <input
                    type="number"
                    value={initialCapital}
                    onChange={(e) => setInitialCapital(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 font-mono focus:border-orange-500/50 outline-none transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleRunTest}
                    disabled={isRunning}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-900 font-bold py-3 px-4 rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />{" "}
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 fill-current" /> Run Backtest
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" />
              <p className="text-sm text-orange-200/80 leading-relaxed">
                Past performance is not indicative of future results. Simulated
                results differ from real-world trading due to slippage, fees,
                and liquidity constraints.
              </p>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-8">
            {results ? (
              <div className="space-y-6">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#151922] border border-slate-200 rounded-xl p-5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Net Return
                    </div>
                    <div
                      className={`text-2xl font-bold ${results.totalReturn >= 0 ? "text-emerald-400" : "text-red-400"}`}
                    >
                      {results.totalReturn > 0 ? "+" : ""}
                      {results.totalReturn.toFixed(2)}%
                    </div>
                  </div>
                  <div className="bg-[#151922] border border-slate-200 rounded-xl p-5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Win Rate
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      {results.winRate.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-[#151922] border border-slate-200 rounded-xl p-5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Max Drawdown
                    </div>
                    <div className="text-2xl font-bold text-red-400">
                      -{results.maxDrawdown.toFixed(2)}%
                    </div>
                  </div>
                  <div className="bg-[#151922] border border-slate-200 rounded-xl p-5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Total Trades
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      {results.totalTrades}
                    </div>
                  </div>
                </div>

                {/* Chart area */}
                <div className="bg-[#151922] border border-slate-200 rounded-xl p-6">
                  <h3 className="text-sm font-bold text-slate-700 mb-6 flex items-center justify-between">
                    Equity Curve
                    <span className="text-slate-500 text-xs font-mono font-normal">
                      {results.equityCurve[
                        results.equityCurve.length - 1
                      ].value.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>
                  </h3>
                  <div ref={chartContainerRef} className="w-full h-[300px]" />
                </div>
              </div>
            ) : (
              <div className="bg-[#151922] border border-slate-200 rounded-2xl h-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6">
                  <BarChart2 className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No Results Yet
                </h3>
                <p className="text-slate-600 mb-8 max-w-sm">
                  Configure your parameters on the left and run a backtest to
                  see the simulated performance.
                </p>
                <button
                  onClick={handleRunTest}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-white/15 text-slate-900 font-medium rounded-lg transition-colors border border-slate-200"
                >
                  Run Demo Simulation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
