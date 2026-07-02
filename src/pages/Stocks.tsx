import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { createChart, ColorType, AreaSeries } from "lightweight-charts";
import { Camera, Code, Maximize, ChevronDown } from "lucide-react";

const stocksData = [
  {
    name: "Apple Inc.",
    symbol: "AAPL",
    rank: 1,
    price: "185.92",
    change: "+1.24%",
    cap: "2.89 T",
    vol: "55.24 M",
    circ: "15.55 B",
    volmcap: "0.0191",
    soc: "15.42%",
    cat: "Technology, Consumer Electronics",
    rating: "Buy",
    color: "#a3aaae",
    logoSlug: "apple",
  },
  {
    name: "Microsoft Corp.",
    symbol: "MSFT",
    rank: 2,
    price: "402.15",
    change: "+0.85%",
    cap: "2.95 T",
    vol: "22.15 M",
    circ: "7.43 B",
    volmcap: "0.0075",
    soc: "12.15%",
    cat: "Technology, Software",
    rating: "Strong buy",
    color: "#00a4ef",
    logoSlug: "microsoft",
  },
  {
    name: "NVIDIA Corp.",
    symbol: "NVDA",
    rank: 3,
    price: "882.13",
    change: "+3.15%",
    cap: "2.15 T",
    vol: "48.95 M",
    circ: "2.50 B",
    volmcap: "0.0227",
    soc: "18.95%",
    cat: "Technology, Semiconductors",
    rating: "Strong buy",
    color: "#76b900",
    logoSlug: "nvidia",
  },
  {
    name: "Amazon.com Inc.",
    symbol: "AMZN",
    rank: 4,
    price: "178.22",
    change: "-0.45%",
    cap: "1.85 T",
    vol: "35.42 M",
    circ: "10.38 B",
    volmcap: "0.0191",
    soc: "9.45%",
    cat: "Consumer Cyclical, E-commerce",
    rating: "Buy",
    color: "#ff9900",
    logoSlug: "amazon",
  },
  {
    name: "Meta Platforms",
    symbol: "META",
    rank: 5,
    price: "505.42",
    change: "+2.10%",
    cap: "1.28 T",
    vol: "15.82 M",
    circ: "2.54 B",
    volmcap: "0.0123",
    soc: "8.12%",
    cat: "Communication Services",
    rating: "Buy",
    color: "#0668e1",
    logoSlug: "meta-platforms",
  },
  {
    name: "Alphabet Inc.",
    symbol: "GOOGL",
    rank: 6,
    price: "144.15",
    change: "+1.15%",
    cap: "1.80 T",
    vol: "25.64 M",
    circ: "12.48 B",
    volmcap: "0.0142",
    soc: "7.85%",
    cat: "Communication Services",
    rating: "Buy",
    color: "#ea4335",
    logoSlug: "alphabet",
  },
  {
    name: "Tesla Inc.",
    symbol: "TSLA",
    rank: 7,
    price: "175.22",
    change: "-2.45%",
    cap: "558.42 B",
    vol: "98.54 M",
    circ: "3.18 B",
    volmcap: "0.0308",
    soc: "11.25%",
    cat: "Consumer Cyclical, Auto",
    rating: "Hold",
    color: "#e82127",
    logoSlug: "tesla",
  },
  {
    name: "Berkshire Hathaway",
    symbol: "BRK-B",
    rank: 8,
    price: "405.12",
    change: "+0.15%",
    cap: "885.12 B",
    vol: "3.45 M",
    circ: "2.18 B",
    volmcap: "0.0038",
    soc: "2.15%",
    cat: "Financials, Conglomerate",
    rating: "Hold",
    color: "#002855",
    logoSlug: "berkshire-hathaway",
  },
  {
    name: "Eli Lilly",
    symbol: "LLY",
    rank: 9,
    price: "755.82",
    change: "+1.85%",
    cap: "715.42 B",
    vol: "2.84 M",
    circ: "946.55 M",
    volmcap: "0.0039",
    soc: "3.42%",
    cat: "Healthcare, Pharmaceuticals",
    rating: "Strong buy",
    color: "#f00000",
    logoSlug: "eli-lilly",
  },
];

// Generates somewhat realistic area data
function generateAreaData(basePrice: number) {
  const data = [];
  let currentPrice = basePrice * 0.95; // start 5% lower
  let currentTime = Math.floor(Date.now() / 1000) - 30 * 24 * 3600; // 30 days ago

  const variation = basePrice * 0.005; // 0.5% variation each step
  const spikeScale = basePrice * 0.05; // 5% spike

  for (let i = 0; i < 720; i++) {
    currentPrice = currentPrice + (Math.random() - 0.48) * variation;

    // Add a big spike at the end to match the screenshot vibe
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
}: {
  symbol: string;
  basePrice: number;
}) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

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
      lineColor: "#6366f1",
      topColor: "rgba(99, 102, 241, 0.4)",
      bottomColor: "rgba(99, 102, 241, 0.0)",
      lineWidth: 2,
      crosshairMarkerRadius: 5,
      priceLineColor: "#6366f1",
    });

    areaSeries.setData(generateAreaData(basePrice));

    // Fit content
    chart.timeScale().fitContent();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [symbol, basePrice]);

  return <div ref={chartContainerRef} className="w-full h-[450px]" />;
}

export default function Stocks({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [stocks, setStocks] = useState(stocksData);
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeTimeframe, setActiveTimeframe] = useState("1 day");
  const [activeStockSymbol, setActiveStockSymbol] = useState(
    stocksData[0].symbol,
  ); // Start with AAPL

  useEffect(() => {
    // Fetch real-time data using Yahoo Finance Spark
    const symbols = stocksData.map((s) => s.symbol).join(",");
    fetch(
      `https://query1.finance.yahoo.com/v7/finance/spark?symbols=${symbols}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.spark || !data.spark.result) return;

        const realData = stocksData.map((stock) => {
          const result = data.spark.result.find(
            (r: any) => r.symbol === stock.symbol,
          );
          if (
            !result ||
            !result.response ||
            !result.response[0] ||
            !result.response[0].meta
          )
            return stock;

          const meta = result.response[0].meta;
          const price = meta.regularMarketPrice;
          const prevClose = meta.chartPreviousClose || meta.previousClose;

          let change = 0;
          if (prevClose && price) {
            change = ((price - prevClose) / prevClose) * 100;
          }

          return {
            ...stock,
            price: price
              ? price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : stock.price,
            change: `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`,
            rating:
              change >= 2
                ? "Strong buy"
                : change > 0
                  ? "Buy"
                  : change < -2
                    ? "Strong sell"
                    : change < 0
                      ? "Sell"
                      : "Neutral",
          };
        });

        setStocks(realData);
      })
      .catch((err) => console.error("Yahoo API error:", err));
  }, []);

  const activeStock =
    stocks.find((c) => c.symbol === activeStockSymbol) || stocks[0];
  const activePriceNumeric = parseFloat(activeStock.price.replace(/,/g, ""));

  const tabs = [
    "Overview",
    "News",
    "Community",
    "Technicals",
    "Seasonals",
    "Markets",
    "ETFs",
  ];
  const timeframes = [
    { label: "1 day", percent: "1.36%", up: true },
    { label: "1 week", percent: "0.43%", up: true },
    { label: "1 month", percent: "8.76%", up: true },
    { label: "6 months", percent: "-40.45%", up: false },
    { label: "Year to date", percent: "-21.65%", up: false },
    { label: "1 year", percent: "26.51%", up: true },
    { label: "5 years", percent: "-21.14%", up: false },
    { label: "10 years", percent: "22.82K%", up: true },
    { label: "All time", percent: "77.43K%", up: true },
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
            Stocks
          </span>
          <span className="mx-2">/</span>
          <div className="flex items-center text-gray-200">
            <img
              src={`https://s3-symbol-logo.tradingview.com/${activeStock.logoSlug}--big.svg`}
              alt={activeStock.symbol}
              className="w-4 h-4 rounded-full mr-2 shrink-0 bg-white"
              onError={(e) => {
                (e.target as HTMLElement).outerHTML =
                  `<div class="w-4 h-4 rounded-full mr-2 flex items-center justify-center shrink-0" style="background-color: ${activeStock.color}"><span class="text-[7px] font-bold text-slate-900 shrink-0">${activeStock.symbol[0]}</span></div>`;
              }}
            />
            {activeStock.name}
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg relative z-10 p-2 bg-[#1e222d] border-4 border-[#0b0e14]">
              <img
                src={`https://s3-symbol-logo.tradingview.com/${activeStock.logoSlug}--big.svg`}
                alt={activeStock.symbol}
                className="w-full h-full rounded-full shrink-0 drop-shadow-md bg-white object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).outerHTML =
                    `<div class="w-full h-full rounded-full flex items-center justify-center shadow-lg relative z-10 p-4" style="background-color: ${activeStock.color}"><span class="text-[40px] font-bold text-slate-900 shrink-0 select-none shadow-black/20 text-shadow">${activeStock.symbol[0]}</span></div>`;
                }}
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-900 border-2 border-[#0b0e14] text-xs font-bold px-2 py-0.5 rounded-md z-20 whitespace-nowrap">
              #{activeStock.rank}
            </div>
          </div>

          <div className="flex-1 mt-1">
            <h1 className="text-[32px] md:text-[42px] font-bold tracking-tight mb-2 leading-tight">
              {activeStock.name}
            </h1>

            <div className="flex items-center flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1 border border-slate-200 rounded overflow-hidden text-sm cursor-pointer hover:border-white/30 transition-colors">
                <div className="px-2 py-1 flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-900">
                    {activeStock.symbol}
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
                    Stock assets
                  </div>
                </div>
                <div className="pl-1 pr-2 py-1 bg-white flex items-center">
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <div className="bg-[#1f2937] px-2 py-1.5 rounded flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#6366f1]"></div>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-[42px] md:text-[48px] font-bold tracking-tight leading-none">
                {activeStock.price}
              </span>
              <span className="text-xl font-medium text-slate-600">USD</span>
              {activeStock.change.startsWith("+") ? (
                <>
                  <span className="text-xl font-medium text-[#00dcb5] ml-2">
                    +
                    {(
                      (activePriceNumeric *
                        parseFloat(
                          activeStock.change.replace("+", "").replace("%", ""),
                        )) /
                      100
                    ).toFixed(2)}
                  </span>
                  <span className="text-xl font-medium text-[#00dcb5]">
                    {activeStock.change}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xl font-medium text-[#ef4444] ml-2">
                    {(
                      (activePriceNumeric *
                        parseFloat(activeStock.change.replace("%", ""))) /
                      100
                    ).toFixed(2)}
                  </span>
                  <span className="text-xl font-medium text-[#ef4444]">
                    {activeStock.change}
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
            <button className="text-slate-700 hover:text-slate-900 px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              Market cap
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
            symbol={activeStock.symbol}
            basePrice={activePriceNumeric}
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
                  className={`text-[12px] font-semibold ${tf.up ? "text-[#6366f1]" : "text-[#ef4444]"}`}
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
              <h2 className="text-xl font-bold">Stocks Screener</h2>
              <ChevronDown className="w-4 h-4 text-slate-600 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <h3 className="text-3xl font-bold">Stock universe</h3>
            <ChevronDown className="w-5 h-5 ml-2 text-slate-600 cursor-pointer" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Watchlist",
              "Rank",
              "Market cap",
              "FD market cap",
              "Vol / Market Cap",
              "Addr with balance",
              "Volume",
              "Vol Change %",
              "Tx vol in USD",
              "Change %",
              "Perf %",
              "Category",
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

            {[
              "Overview",
              "Performance",
              "Valuation",
              "Addresses",
              "Transactions",
              "Sentiment",
              "Technicals",
            ].map((tab) => (
              <button
                key={tab}
                className={`relative pb-3 -mb-[1px] transition-colors ${tab === "Overview" ? "text-slate-900" : "text-slate-600 hover:text-gray-200"}`}
              >
                {tab}
                {tab === "Overview" && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
                )}
              </button>
            ))}
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
                    Rank
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Price
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Change % 24h
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Market cap
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Volume 24h
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Circ supply
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Vol / Market Cap
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Social dominance %
                  </th>
                  <th className="py-2.5 px-4 font-normal whitespace-nowrap min-w-[200px]">
                    Category
                  </th>
                  <th className="py-2.5 px-4 font-normal text-right whitespace-nowrap">
                    Tech Rating
                  </th>
                </tr>
              </thead>
              <tbody className="text-[13px] font-medium text-[#d1d5db]">
                {stocks.map((row) => {
                  const isActive = row.symbol === activeStockSymbol;
                  return (
                    <tr
                      key={row.symbol}
                      onClick={() => {
                        setActiveStockSymbol(row.symbol);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`border-b border-slate-200 hover:bg-white/[0.03] transition-colors cursor-pointer ${isActive ? "bg-white/[0.05]" : "bg-[#0f1219]"}`}
                    >
                      <td
                        className={`py-3 px-4 flex items-center gap-3 sticky left-0 z-10 ${isActive ? "bg-[#151922]" : "bg-[#0f1219]"}`}
                      >
                        <img
                          src={`https://s3-symbol-logo.tradingview.com/${row.logoSlug}--big.svg`}
                          alt={row.symbol}
                          className="w-5 h-5 rounded-full shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.5)] bg-white object-contain p-0.5"
                          onError={(e) => {
                            (e.target as HTMLElement).outerHTML =
                              `<div class="w-5 h-5 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.5)]" style="background-color: ${row.color}"><span class="text-[9px] font-bold text-slate-900 shrink-0">${row.symbol[0]}</span></div>`;
                          }}
                        />
                        <div className="flex items-center gap-2 min-w-[150px]">
                          <span className="font-semibold text-slate-900 px-1.5 py-0.5 bg-slate-100 rounded text-[11px] min-w-[42px] text-center">
                            {row.symbol}
                          </span>
                          <span className="text-[#a3a3a3] truncate">
                            {row.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">{row.rank}</td>
                      <td className="py-3 px-4 text-right">
                        {row.price}{" "}
                        <span className="text-[10px] text-slate-500">USD</span>
                      </td>
                      <td
                        className={`py-3 px-4 text-right ${row.change.startsWith("+") ? "text-[#00dcb5]" : "text-[#ef4444]"}`}
                      >
                        {row.change}
                      </td>
                      <td className="py-3 px-4 text-right">
                        {row.cap}{" "}
                        <span className="text-[10px] text-slate-500">USD</span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {row.vol}{" "}
                        <span className="text-[10px] text-slate-500">USD</span>
                      </td>
                      <td className="py-3 px-4 text-right">{row.circ}</td>
                      <td className="py-3 px-4 text-right">{row.volmcap}</td>
                      <td className="py-3 px-4 text-right">{row.soc}</td>
                      <td className="py-3 px-4 truncate max-w-[200px] text-[#a3a3a3]">
                        {row.cat}
                      </td>
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
