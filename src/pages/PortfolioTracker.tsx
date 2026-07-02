import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
} from "lucide-react";
import { createChart, ColorType, AreaSeries } from "lightweight-charts";

const HOLDINGS = [
  {
    id: "BTC",
    name: "Bitcoin",
    symbol: "BTC",
    balance: 0.85,
    price: 51200,
    change24h: 2.4,
    color: "#f59e0b",
  },
  {
    id: "ETH",
    name: "Ethereum",
    symbol: "ETH",
    balance: 4.2,
    price: 2850,
    change24h: -1.2,
    color: "#6366f1",
  },
  {
    id: "AAPL",
    name: "Apple Inc.",
    symbol: "AAPL",
    balance: 120,
    price: 175.5,
    change24h: 0.8,
    color: "#10b981",
  },
  {
    id: "TSLA",
    name: "Tesla Inc.",
    symbol: "TSLA",
    balance: 45,
    price: 195.2,
    change24h: -3.5,
    color: "#ef4444",
  },
];

export default function PortfolioTracker({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  // Calculate totals
  const totalValue = HOLDINGS.reduce((acc, h) => acc + h.balance * h.price, 0);
  const totalChangeValue = HOLDINGS.reduce(
    (acc, h) => acc + (h.change24h / 100) * (h.balance * h.price),
    0,
  );
  const totalChangePercent = (totalChangeValue / totalValue) * 100;

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#9ca3af",
      },
      grid: {
        vertLines: { color: "#ffffff0a" },
        horzLines: { color: "#ffffff0a" },
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

    const series = chart.addSeries(AreaSeries, {
      lineColor: "#6366f1",
      topColor: "rgba(99, 102, 241, 0.4)",
      bottomColor: "rgba(99, 102, 241, 0.0)",
      lineWidth: 2,
    });

    // Generate dummy portfolio history
    const data = [];
    let time = Math.floor(Date.now() / 1000) - 30 * 24 * 3600;
    let value = totalValue * 0.85; // Start 15% lower

    for (let i = 0; i < 30; i++) {
      value = value * (1 + (Math.random() * 0.04 - 0.015)); // Slight upward bias
      data.push({ time, value });
      time += 24 * 3600;
    }

    // Add current value
    data.push({ time, value: totalValue });

    series.setData(data);
    chart.timeScale().fitContent();

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [totalValue]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0b0e14] min-h-screen font-sans antialiased text-slate-900 overflow-hidden"
    >
      <Navbar onNavigate={onNavigate} />

      <div className="max-w-[1280px] mx-auto pt-24 pb-20 px-6">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pt-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-4">
              <Wallet className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] font-bold tracking-wider text-indigo-400 uppercase">
                Live Portfolio
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">My Holdings</h1>
            <div className="text-slate-600 text-sm">
              Track your simulated assets across multiple markets
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-sm font-medium transition-colors">
              <PieChart className="w-4 h-4" /> Allocation
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-indigo-500/20">
              <Plus className="w-4 h-4" /> Add Asset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart / Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#151922] border border-slate-200 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Wallet className="w-16 h-16 text-indigo-400" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Total Balance
                  </h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    $
                    {totalValue.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-sm font-medium ${totalChangeValue >= 0 ? "text-emerald-400" : "text-red-400"}`}
                  >
                    {totalChangeValue >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>
                      {totalChangeValue > 0 ? "+" : ""}$
                      {totalChangeValue.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <span className="text-slate-500 ml-1">
                      ({totalChangePercent > 0 ? "+" : ""}
                      {totalChangePercent.toFixed(2)}%) 24h
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#151922] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Top Performer
                </h3>
                {(() => {
                  const top = [...HOLDINGS].sort(
                    (a, b) => b.change24h - a.change24h,
                  )[0];
                  return (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-slate-900 shadow-inner"
                          style={{ backgroundColor: top.color }}
                        >
                          {top.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-lg">{top.symbol}</div>
                          <div className="text-xs text-slate-600">
                            {top.name}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-400 font-bold flex items-center justify-end gap-1">
                          <ArrowUpRight className="w-4 h-4" /> +
                          {top.change24h.toFixed(2)}%
                        </div>
                        <div className="text-sm text-slate-900">
                          ${top.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-[#151922] border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-slate-700">
                  Portfolio Performance
                </h3>
                <div className="flex items-center gap-1 text-xs">
                  {["1D", "1W", "1M", "3M", "1Y", "ALL"].map((tf, i) => (
                    <button
                      key={tf}
                      className={`px-2 py-1 rounded transition-colors ${i === 2 ? "bg-slate-100 text-slate-900 font-medium" : "text-slate-500 hover:text-slate-700"}`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>
              <div ref={chartContainerRef} className="w-full h-[300px]" />
            </div>
          </div>

          {/* Holdings List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#151922] border border-slate-200 rounded-2xl p-6 h-full flex flex-col">
              <h3 className="text-base font-bold text-slate-900 mb-6">
                Your Assets
              </h3>

              <div className="space-y-4 flex-1">
                {HOLDINGS.map((asset) => {
                  const value = asset.balance * asset.price;
                  const pctOfPort = (value / totalValue) * 100;

                  return (
                    <div
                      key={asset.id}
                      className="p-4 bg-[#0b0e14] border border-slate-200 hover:border-slate-200 rounded-xl transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-slate-900"
                            style={{ backgroundColor: asset.color }}
                          >
                            {asset.symbol.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-slate-900 group-hover:text-indigo-400 transition-colors">
                              {asset.symbol}
                            </h4>
                            <div className="text-xs text-slate-500">
                              {asset.balance} {asset.symbol}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-sm">
                            $
                            {value.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </div>
                          <div
                            className={`text-xs font-semibold flex items-center justify-end gap-0.5 ${asset.change24h >= 0 ? "text-emerald-400" : "text-red-400"}`}
                          >
                            {asset.change24h >= 0 ? (
                              <ArrowUpRight className="w-3 h-3" />
                            ) : (
                              <ArrowDownRight className="w-3 h-3" />
                            )}
                            {Math.abs(asset.change24h).toFixed(2)}%
                          </div>
                        </div>
                      </div>

                      {/* Distribution Bar */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-[#151922] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full opacity-80"
                            style={{
                              backgroundColor: asset.color,
                              width: `${pctOfPort}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono w-8 text-right">
                          {pctOfPort.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="w-full mt-6 py-3 border border-dashed border-slate-300 hover:border-indigo-500/50 rounded-xl text-sm font-medium text-slate-600 hover:text-indigo-400 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Log New Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
