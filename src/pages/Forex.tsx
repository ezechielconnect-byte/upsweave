import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { createChart, ColorType, AreaSeries } from "lightweight-charts";
import { Camera, Code, Maximize, ChevronDown } from "lucide-react";

const forexData = [
  {
    name: "Euro / US Dollar",
    symbol: "EURUSD",
    base: "eu",
    quote: "us",
    price: "1.0845",
    change: "+0.12%",
    high: "1.0852",
    low: "1.0821",
    rating: "Buy",
    color: "#003399",
  },
  {
    name: "British Pound / US Dollar",
    symbol: "GBPUSD",
    base: "gb",
    quote: "us",
    price: "1.2632",
    change: "-0.05%",
    high: "1.2655",
    low: "1.2610",
    rating: "Neutral",
    color: "#c8102e",
  },
  {
    name: "US Dollar / Japanese Yen",
    symbol: "USDJPY",
    base: "us",
    quote: "jp",
    price: "150.25",
    change: "+0.34%",
    high: "150.40",
    low: "149.80",
    rating: "Strong buy",
    color: "#bc002d",
  },
  {
    name: "US Dollar / Swiss Franc",
    symbol: "USDCHF",
    base: "us",
    quote: "ch",
    price: "0.8821",
    change: "-0.15%",
    high: "0.8845",
    low: "0.8810",
    rating: "Sell",
    color: "#da291c",
  },
  {
    name: "Australian Dollar / US Dollar",
    symbol: "AUDUSD",
    base: "au",
    quote: "us",
    price: "0.6552",
    change: "+0.42%",
    high: "0.6560",
    low: "0.6515",
    rating: "Buy",
    color: "#00008b",
  },
  {
    name: "US Dollar / Canadian Dollar",
    symbol: "USDCAD",
    base: "us",
    quote: "ca",
    price: "1.3488",
    change: "-0.21%",
    high: "1.3520",
    low: "1.3475",
    rating: "Sell",
    color: "#ff0000",
  },
  {
    name: "New Zealand Dollar / US Dollar",
    symbol: "NZDUSD",
    base: "nz",
    quote: "us",
    price: "0.6120",
    change: "+0.25%",
    high: "0.6135",
    low: "0.6105",
    rating: "Buy",
    color: "#00247d",
  },
  {
    name: "Euro / British Pound",
    symbol: "EURGBP",
    base: "eu",
    quote: "gb",
    price: "0.8585",
    change: "+0.18%",
    high: "0.8592",
    low: "0.8565",
    rating: "Buy",
    color: "#003399",
  },
  {
    name: "Euro / Japanese Yen",
    symbol: "EURJPY",
    base: "eu",
    quote: "jp",
    price: "162.95",
    change: "+0.45%",
    high: "163.10",
    low: "162.40",
    rating: "Strong buy",
    color: "#003399",
  },
];

// Generates somewhat realistic area data
function generateAreaData(basePrice: number) {
  const data = [];
  let currentPrice = basePrice * 0.995; // start slightly lower
  let currentTime = Math.floor(Date.now() / 1000) - 30 * 24 * 3600; // 30 days ago

  const variation = basePrice * 0.001; // 0.1% variation each step
  const spikeScale = basePrice * 0.005; // 0.5% spike

  for (let i = 0; i < 720; i++) {
    currentPrice = currentPrice + (Math.random() - 0.48) * variation;

    if (i > 680) {
      currentPrice += (Math.random() - 0.2) * (spikeScale / 20);
    }

    data.push({
      time: currentTime,
      value: currentPrice,
    });

    currentTime += 3600; // increment by 1 hour
  }
  return data;
}

function TradingChartComponent({
  symbol,
  basePrice,
  color = "#003399",
}: {
  symbol: string;
  basePrice: number;
  color?: string;
}) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Convert hex color to rgb
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : "0, 51, 153";
    };

    const rgb = hexToRgb(color);

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#a3a3a3",
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      width: chartContainerRef.current.clientWidth,
      height: 450,
      crosshair: {
        mode: 1, // Magnet mode
        vertLine: {
          color: "#ffffff30",
          labelBackgroundColor: "#222",
        },
        horzLine: {
          color: "#ffffff30",
          labelBackgroundColor: "#222",
        },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderVisible: false,
      },
      rightPriceScale: {
        borderVisible: false,
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
      },
    });

    const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: color,
      topColor: `rgba(${rgb}, 0.4)`,
      bottomColor: `rgba(${rgb}, 0.0)`,
      lineWidth: 2,
      crosshairMarkerRadius: 5,
      priceLineColor: color,
    });

    areaSeries.setData(generateAreaData(basePrice));

    // Fit content
    chart.timeScale().fitContent();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [symbol, basePrice, color]);

  return <div ref={chartContainerRef} className="w-full h-[450px]" />;
}

export default function Forex({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [forex, setForex] = useState(forexData);
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeTimeframe, setActiveTimeframe] = useState("1 day");
  const [activeForexSymbol, setActiveForexSymbol] = useState(
    forexData[0].symbol,
  ); // Start with EURUSD

  useEffect(() => {
    // Fetch real-time data using Yahoo Finance Spark
    const symbols = forexData.map((s) => `${s.symbol}=X`).join(",");
    fetch(
      `https://query1.finance.yahoo.com/v7/finance/spark?symbols=${symbols}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.spark || !data.spark.result) return;

        const realData = forexData.map((pair) => {
          const result = data.spark.result.find(
            (r: any) => r.symbol === `${pair.symbol}=X`,
          );
          if (
            !result ||
            !result.response ||
            !result.response[0] ||
            !result.response[0].meta
          )
            return pair;

          const meta = result.response[0].meta;
          const price = meta.regularMarketPrice;
          const prevClose = meta.chartPreviousClose || meta.previousClose;
          const high = meta.regularMarketDayHigh;
          const low = meta.regularMarketDayLow;

          let change = 0;
          if (prevClose && price) {
            change = ((price - prevClose) / prevClose) * 100;
          }

          const decimals = String(price).split(".")[1]?.length || 4;

          return {
            ...pair,
            price: price
              ? price.toLocaleString(undefined, {
                  minimumFractionDigits: Math.max(2, decimals),
                  maximumFractionDigits: decimals,
                })
              : pair.price,
            change: `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`,
            high: high
              ? high.toLocaleString(undefined, {
                  minimumFractionDigits: Math.max(2, decimals),
                  maximumFractionDigits: decimals,
                })
              : pair.high,
            low: low
              ? low.toLocaleString(undefined, {
                  minimumFractionDigits: Math.max(2, decimals),
                  maximumFractionDigits: decimals,
                })
              : pair.low,
            rating:
              change >= 0.5
                ? "Strong buy"
                : change > 0
                  ? "Buy"
                  : change < -0.5
                    ? "Strong sell"
                    : change < 0
                      ? "Sell"
                      : "Neutral",
          };
        });

        setForex(realData);
      })
      .catch((err) => console.error("Yahoo API error:", err));
  }, []);

  const activeForex =
    forex.find((c) => c.symbol === activeForexSymbol) || forex[0];
  const activePriceNumeric = parseFloat(activeForex.price.replace(/,/g, ""));

  const tabs = ["Overview", "News", "Ideas", "Technicals", "Markets"];
  const timeframes = [
    { label: "1 day", percent: "0.12%", up: true },
    { label: "1 week", percent: "-0.34%", up: false },
    { label: "1 month", percent: "1.45%", up: true },
    { label: "6 months", percent: "3.21%", up: true },
    { label: "Year to date", percent: "-1.25%", up: false },
    { label: "1 year", percent: "2.14%", up: true },
    { label: "5 years", percent: "-5.14%", up: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0b0e14] min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden flex flex-col"
    >
      <Navbar onNavigate={onNavigate} />

      <div className="w-full max-w-[1280px] px-6 mx-auto flex flex-col flex-1 pt-6 pb-24">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-slate-600 mb-8 mt-20">
          <span className="hover:text-slate-900 cursor-pointer transition-colors">
            Markets
          </span>
          <span className="mx-2">/</span>
          <span className="hover:text-slate-900 cursor-pointer transition-colors">
            Forex
          </span>
          <span className="mx-2">/</span>
          <div className="flex items-center text-gray-200">
            <div className="flex items-center mr-2 shrink-0">
              <img
                src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${activeForex.base}.svg`}
                alt={activeForex.base}
                className="w-4 h-4 rounded-full border border-[#0b0e14] object-cover"
              />
              <img
                src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${activeForex.quote}.svg`}
                alt={activeForex.quote}
                className="w-4 h-4 rounded-full border border-[#0b0e14] object-cover -ml-1.5"
              />
            </div>
            {activeForex.name}
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="relative flex items-center justify-center w-24 h-24">
            <div className="flex items-center shadow-lg relative z-10 w-full h-full">
              <img
                src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${activeForex.base}.svg`}
                alt={activeForex.base}
                className="absolute left-0 w-16 h-16 rounded-full border-4 border-[#0b0e14] object-cover z-20"
              />
              <img
                src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${activeForex.quote}.svg`}
                alt={activeForex.quote}
                className="absolute right-0 w-16 h-16 rounded-full border-4 border-[#0b0e14] object-cover z-10"
              />
            </div>
          </div>

          <div className="flex-1 mt-1">
            <h1 className="text-[32px] md:text-[42px] font-bold tracking-tight mb-2 leading-tight">
              {activeForex.name}
            </h1>

            <div className="flex items-center flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1 border border-slate-200 rounded overflow-hidden text-sm cursor-pointer hover:border-white/30 transition-colors">
                <div className="px-2 py-1 flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-900">
                    {activeForex.symbol}
                  </span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 19L20 5M20 5V15M20 5H10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Forex
                  </div>
                </div>
                <div className="pl-1 pr-2 py-1 bg-white flex items-center">
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <div className="bg-[#1f2937] px-2 py-1.5 rounded flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-[42px] md:text-[48px] font-bold tracking-tight leading-none">
                {activeForex.price}
              </span>
              {activeForex.change.startsWith("+") ? (
                <>
                  <span className="text-xl font-medium text-[#00dcb5] ml-2">
                    +
                    {(
                      (activePriceNumeric *
                        parseFloat(
                          activeForex.change.replace("+", "").replace("%", ""),
                        )) /
                      100
                    ).toFixed(4)}
                  </span>
                  <span className="text-xl font-medium text-[#00dcb5]">
                    {activeForex.change}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xl font-medium text-[#ef4444] ml-2">
                    {(
                      (activePriceNumeric *
                        parseFloat(activeForex.change.replace("%", ""))) /
                      100
                    ).toFixed(4)}
                  </span>
                  <span className="text-xl font-medium text-[#ef4444]">
                    {activeForex.change}
                  </span>
                </>
              )}
            </div>
            <p className="text-sm text-slate-600 mt-1">
              As of today at 00:59 GMT+2
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-slate-200 mb-8 pb-3 gap-6 text-[15px] font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 -mb-3 whitespace-nowrap transition-colors ${activeTab === tab ? "text-slate-900" : "text-slate-600 hover:text-gray-200"}`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-t-sm" />
              )}
            </button>
          ))}
        </div>

        {/* Chart Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex bg-[#1e222d] rounded-full p-1 border border-slate-200">
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Price
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-[#1e222d] border border-slate-200 hover:border-slate-300 hover:bg-[#2a2e39] rounded transition-colors text-slate-700">
              <Camera className="w-4 h-4" />
            </button>
            <button className="p-2 bg-[#1e222d] border border-slate-200 hover:border-slate-300 hover:bg-[#2a2e39] rounded transition-colors text-slate-700">
              <Code className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1e222d] border border-slate-200 hover:border-slate-300 hover:bg-[#2a2e39] rounded transition-colors text-slate-700 text-sm font-medium">
              <Maximize className="w-4 h-4" />
              Full chart
            </button>
          </div>
        </div>

        {/* Chart Container */}
        <div className="w-full relative">
          <TradingChartComponent
            symbol={activeForex.symbol}
            basePrice={activePriceNumeric}
            color={activeForex.change.startsWith("-") ? "#ef4444" : "#00dcb5"}
          />

          {/* Timeframe selector matching design */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mt-4 pb-2">
            {timeframes.map((tf) => (
              <button
                key={tf.label}
                onClick={() => setActiveTimeframe(tf.label)}
                className={`flex flex-col items-center justify-center min-w-[90px] px-3 py-2 rounded-lg transition-colors ${activeTimeframe === tf.label ? "bg-[#2a2e39]" : "hover:bg-[#1e222d]"}`}
              >
                <span className="text-[13px] text-slate-700 font-medium mb-1">
                  {tf.label}
                </span>
                <span
                  className={`text-[12px] font-semibold ${tf.up ? "text-[#f59e0b]" : "text-[#ef4444]"}`}
                >
                  {tf.percent}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Screener Section */}
        <div className="mt-16 w-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">Forex Screener</h2>
              <ChevronDown className="w-4 h-4 text-slate-600 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <h3 className="text-3xl font-bold">Major pairs</h3>
            <ChevronDown className="w-5 h-5 ml-2 text-slate-600 cursor-pointer" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Watchlist",
              "Performance",
              "Oscillators",
              "Trend-Following",
              "Change %",
              "High",
              "Low",
              "Volatility",
            ].map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-transparent border border-slate-200 hover:border-white/30 text-sm text-slate-700 transition-colors"
              >
                {filter}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            ))}
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-transparent border border-slate-200 hover:border-white/30 text-sm text-slate-700 transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          {/* Table Tabs */}
          <div className="flex items-center gap-6 border-b border-slate-200 mb-4 pb-0 text-[13px] font-medium">
            <div className="flex items-center gap-1 pr-4 border-r border-slate-200">
              <button className="p-1.5 bg-[#2a2e39] rounded text-slate-900">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </button>
              <button className="p-1.5 text-slate-600 hover:text-slate-900 rounded">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </button>
            </div>

            {["Overview", "Performance", "Technical", "Pivot Points"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`relative pb-3 -mb-[1px] transition-colors ${tab === "Overview" ? "text-slate-900" : "text-slate-600 hover:text-gray-200"}`}
                >
                  {tab}
                  {tab === "Overview" && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
                  )}
                </button>
              ),
            )}
          </div>

          {/* Data Table */}
          <div className="w-full overflow-x-auto border border-slate-200 rounded-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-[11px] text-slate-600 uppercase bg-[#0f1219]">
                  <th className="py-2.5 px-4 font-normal sticky left-0 bg-[#0f1219] z-10 whitespace-nowrap min-w-[200px]">
                    Instrument
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Price
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Change % 24h
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    High
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Low
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Tech Rating
                  </th>
                </tr>
              </thead>
              <tbody className="text-[13px] font-medium text-[#d1d5db]">
                {forex.map((row) => {
                  const isActive = row.symbol === activeForexSymbol;
                  return (
                    <tr
                      key={row.symbol}
                      onClick={() => {
                        setActiveForexSymbol(row.symbol);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`border-b border-slate-200 hover:bg-white/[0.03] transition-colors cursor-pointer ${isActive ? "bg-white/[0.05]" : "bg-[#0f1219]"}`}
                    >
                      <td
                        className={`py-3 px-4 flex items-center gap-3 sticky left-0 z-10 ${isActive ? "bg-[#151922]" : "bg-[#0f1219]"}`}
                      >
                        <div className="flex items-center shrink-0 w-8">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${row.base}.svg`}
                            alt={row.base}
                            className="w-5 h-5 rounded-full border border-[#0b0e14] object-cover absolute z-20"
                          />
                          <img
                            src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${row.quote}.svg`}
                            alt={row.quote}
                            className="w-5 h-5 rounded-full border border-[#0b0e14] object-cover absolute ml-3 z-10"
                          />
                        </div>
                        <div className="flex items-center gap-2 min-w-[150px]">
                          <span className="font-semibold text-slate-900 px-1.5 py-0.5 bg-slate-100 rounded text-[11px] min-w-[55px] text-center">
                            {row.symbol}
                          </span>
                          <span className="text-[#a3a3a3] truncate">
                            {row.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">{row.price}</td>
                      <td
                        className={`py-3 px-4 text-right ${row.change.startsWith("+") ? "text-[#00dcb5]" : "text-[#ef4444]"}`}
                      >
                        {row.change}
                      </td>
                      <td className="py-3 px-4 text-right">{row.high}</td>
                      <td className="py-3 px-4 text-right">{row.low}</td>
                      <td className="py-3 px-4 text-right">
                        <span
                          className={`inline-flex items-center gap-1 ${
                            row.rating.includes("Buy")
                              ? "text-[#00dcb5]"
                              : row.rating.includes("Sell")
                                ? "text-[#ef4444]"
                                : "text-slate-600"
                          }`}
                        >
                          {row.rating === "Neutral"
                            ? "="
                            : row.rating.includes("Buy")
                              ? "^"
                              : "v"}{" "}
                          {row.rating}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
