import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Settings,
  BarChart2,
  TrendingUp,
  TrendingDown,
  Maximize,
  Play,
  Pause,
  RefreshCw,
} from "lucide-react";
import {
  createChart,
  ColorType,
  CandlestickSeries,
  AreaSeries,
  BarSeries,
  LineSeries,
} from "lightweight-charts";

// Dummy data generator
function generateCandlestickData(points = 100) {
  const data = [];
  let time = Math.floor(Date.now() / 1000) - points * 24 * 3600;
  let o = 50000;

  for (let i = 0; i < points; i++) {
    const volatility = o * 0.02;
    const h = o + Math.random() * volatility;
    const l = o - Math.random() * volatility;
    const c = l + Math.random() * (h - l);

    data.push({ time, open: o, high: h, low: l, close: c });
    o = c;
    time += 24 * 3600;
  }
  return data;
}

export default function ChartBuilder({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);

  const [chartType, setChartType] = useState("Candlestick");
  const [theme, setTheme] = useState("Dark");
  const [showGrid, setShowGrid] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const [data] = useState(generateCandlestickData(200));

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    const isDark = theme === "Dark";

    const chartOptions = {
      layout: {
        background: {
          type: ColorType.Solid,
          color: isDark ? "#050505" : "#ffffff",
        },
        textColor: isDark ? "#d1d5db" : "#1f2937",
      },
      grid: {
        vertLines: {
          color: isDark ? "#ffffff10" : "#00000010",
          visible: showGrid,
        },
        horzLines: {
          color: isDark ? "#ffffff10" : "#00000010",
          visible: showGrid,
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderColor: isDark ? "#ffffff20" : "#00000020",
      },
      rightPriceScale: {
        borderColor: isDark ? "#ffffff20" : "#00000020",
      },
      crosshair: {
        mode: 1, // Magnet
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);
    chartRef.current = chart;

    let series;
    if (chartType === "Candlestick") {
      series = chart.addSeries(CandlestickSeries, {
        upColor: "#00dcb5",
        downColor: "#ef4444",
        borderVisible: false,
        wickUpColor: "#00dcb5",
        wickDownColor: "#ef4444",
      });
      series.setData(data);
    } else if (chartType === "Area") {
      series = chart.addSeries(AreaSeries, {
        lineColor: "#6366f1",
        topColor: "rgba(99, 102, 241, 0.4)",
        bottomColor: "rgba(99, 102, 241, 0.0)",
        lineWidth: 2,
      });
      series.setData(data.map((d) => ({ time: d.time, value: d.close })));
    } else if (chartType === "Line") {
      series = chart.addSeries(LineSeries, {
        color: "#f59e0b",
        lineWidth: 2,
      });
      series.setData(data.map((d) => ({ time: d.time, value: d.close })));
    } else if (chartType === "Bar") {
      series = chart.addSeries(BarSeries, {
        upColor: "#00dcb5",
        downColor: "#ef4444",
      });
      series.setData(data);
    }

    seriesRef.current = series;
    chart.timeScale().fitContent();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [chartType, theme, showGrid, data]);

  // Handle play/pause toggle (simulation)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && seriesRef.current && chartRef.current) {
      interval = setInterval(() => {
        // Create next point
        const lastData = data[data.length - 1];
        let nextTime = (lastData.time as number) + 24 * 3600;
        let o = lastData.close;
        const volatility = o * 0.02;
        const h = o + Math.random() * volatility;
        const l = o - Math.random() * volatility;
        const c = l + Math.random() * (h - l);

        const newPoint = { time: nextTime, open: o, high: h, low: l, close: c };

        // In a real app we'd maintain data array, here we just push to the chart for visual effect
        if (chartType === "Candlestick" || chartType === "Bar") {
          seriesRef.current.update(newPoint);
        } else {
          seriesRef.current.update({ time: nextTime, value: c });
        }

        // Update internal data to keep going
        data.push(newPoint);
        data.shift(); // keep array size bounded
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, chartType, data]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0b0e14] min-h-screen font-sans antialiased text-slate-900 overflow-hidden flex flex-col"
    >
      <Navbar onNavigate={onNavigate} />

      <div className="w-full max-w-[1400px] mx-auto flex flex-col flex-1 pt-24 pb-12 px-6 h-screen">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Advanced Chart Builder
              </h1>
              <p className="text-sm text-slate-600">
                Design your perfect custom workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isPlaying
                  ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30"
                  : "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30"
              }`}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              {isPlaying ? "Pause Simulation" : "Live Data Simulator"}
            </button>
            <button className="p-2 bg-[#151922] border border-slate-200 hover:border-slate-300 rounded-lg text-slate-600 transition-colors">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
          {/* Chart Settings Sidebar */}
          <div className="w-full lg:w-72 bg-slate-50 border border-slate-200 rounded-xl flex flex-col shrink-0 overflow-y-auto">
            <div className="p-5 border-b border-slate-200 flex items-center gap-2">
              <Settings className="w-4 h-4 text-slate-600" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Chart Settings
              </h3>
            </div>

            <div className="p-5 space-y-6">
              {/* Chart Type */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 block">
                  Display Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Candlestick", "Area", "Line", "Bar"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setChartType(type)}
                      className={`px-3 py-2 text-sm font-medium rounded border transition-colors ${
                        chartType === type
                          ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-400"
                          : "bg-[#11141c] border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 block">
                  Color Theme
                </label>
                <div className="flex bg-[#11141c] p-1 rounded-lg border border-slate-200">
                  {["Dark", "Light"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        theme === t
                          ? "bg-[#1f2937] text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Display Options */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 block">
                  Grid & Scales
                </label>
                <div className="space-y-3 font-medium text-sm text-slate-700">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${showGrid ? "bg-indigo-500 border-indigo-500" : "bg-transparent border-slate-300 group-hover:border-white/40"}`}
                    >
                      {showGrid && (
                        <svg
                          className="w-3.5 h-3.5 text-slate-900"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={showGrid}
                      onChange={() => setShowGrid(!showGrid)}
                    />
                    Show Grid Lines
                  </label>
                </div>
              </div>

              {/* Data Source */}
              <div className="pt-4 border-t border-slate-200">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 block">
                  Asset Simulator
                </label>
                <select className="w-full bg-[#11141c] border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-indigo-500/50 mb-3 appearance-none cursor-pointer">
                  <option>BTC/USD - Bitcoin</option>
                  <option>ETH/USD - Ethereum</option>
                  <option>AAPL - Apple Inc.</option>
                  <option>EUR/USD - Euro</option>
                </select>

                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#1f2937] hover:bg-[#2d3748] border border-slate-200 rounded-lg text-sm text-slate-900 transition-colors">
                  <RefreshCw className="w-4 h-4" /> Reset Data
                </button>
              </div>
            </div>
          </div>

          {/* Chart Display Area */}
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden flex flex-col shadow-2xl shadow-black/50">
            {/* Chart Top Bar */}
            <div className="h-14 border-b border-slate-200 flex items-center px-4 justify-between bg-[#080b10]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg select-none">BTC/USD</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                    CRYPTO
                  </span>
                </div>
                <div className="w-px h-6 bg-slate-100"></div>
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="font-mono text-slate-900 text-lg">
                    51,420.50
                  </span>
                  <span className="text-emerald-400 font-medium">+2.4%</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm bg-[#11141c] rounded-lg border border-slate-200 p-1">
                {["1m", "5m", "15m", "1H", "4H", "1D"].map((tf, i) => (
                  <button
                    key={tf}
                    className={`px-2 py-1 rounded transition-colors ${i === 3 ? "bg-[#1f2937] text-slate-900" : "text-slate-600 hover:text-slate-900"}`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart Canvas */}
            <div ref={chartContainerRef} className="flex-1 w-full" />

            {/* Status Bar */}
            <div className="h-8 border-t border-slate-200 bg-[#080b10] flex items-center px-4 justify-between text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>{" "}
                  Connected
                </span>
                <span>API: Local Simulation</span>
              </div>
              <div>
                O: 50134.20 H: 51880.40 L: 49800.10 C: 51420.50 Vol: 1.2M
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
