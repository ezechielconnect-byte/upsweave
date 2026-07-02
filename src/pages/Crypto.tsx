import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { createChart, ColorType, AreaSeries } from "lightweight-charts";
import { Camera, Code, Maximize, ChevronDown } from "lucide-react";

const cryptosData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    price: "78,814.51",
    change: "+0.88%",
    cap: "1.58 T",
    vol: "17.09 B",
    circ: "20.02 M",
    volmcap: "0.0108",
    soc: "27.87%",
    cat: "Cryptocurrencies, Layer 1",
    rating: "Buy",
    color: "#f7931a",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    price: "2,326.48",
    change: "+1.46%",
    cap: "280.78 B",
    vol: "6.58 B",
    circ: "120.69 M",
    volmcap: "0.0234",
    soc: "11.74%",
    cat: "Smart contract platforms, Layer 1...",
    rating: "Buy",
    color: "#627eea",
  },
  {
    name: "Tether USDt",
    symbol: "USDT",
    rank: 3,
    price: "0.99996",
    change: "+0.01%",
    cap: "189.58 B",
    vol: "84.08 B",
    circ: "189.59 B",
    volmcap: "0.4435",
    soc: "0.96%",
    cat: "Stablecoins, Asset-backed stablecoins...",
    rating: "Neutral",
    color: "#26a17b",
  },
  {
    name: "XRP",
    symbol: "XRP",
    rank: 4,
    price: "1.3969",
    change: "+0.93%",
    cap: "86.17 B",
    vol: "1.09 B",
    circ: "61.69 B",
    volmcap: "0.0127",
    soc: "3.35%",
    cat: "Cryptocurrencies, Enterprise solution...",
    rating: "Sell",
    color: "#23292f",
  },
  {
    name: "BNB",
    symbol: "BNB",
    rank: 5,
    price: "619.22",
    change: "+0.69%",
    cap: "83.46 B",
    vol: "637.68 M",
    circ: "134.79 M",
    volmcap: "0.0076",
    soc: "0.27%",
    cat: "Smart contract platforms, Centralize...",
    rating: "Sell",
    color: "#f3ba2f",
  },
  {
    name: "USDC",
    symbol: "USDC",
    rank: 6,
    price: "0.99987",
    change: "+0.03%",
    cap: "77.22 B",
    vol: "46.83 B",
    circ: "77.23 B",
    volmcap: "0.6064",
    soc: "1.68%",
    cat: "Stablecoins, Asset-backed stablecoins...",
    rating: "Sell",
    color: "#2775ca",
  },
  {
    name: "Solana",
    symbol: "SOL",
    rank: 7,
    price: "84.464",
    change: "+0.95%",
    cap: "48.67 B",
    vol: "2.46 B",
    circ: "576.21 M",
    volmcap: "0.0506",
    soc: "10.95%",
    cat: "Smart contract platforms, Layer 1...",
    rating: "Sell",
    color: "#14f195",
  },
  {
    name: "TRON",
    symbol: "TRX",
    rank: 8,
    price: "0.33001",
    change: "+0.99%",
    cap: "31.28 B",
    vol: "760.57 M",
    circ: "94.79 B",
    volmcap: "0.0243",
    soc: "0.10%",
    cat: "Smart contract platforms, Payments...",
    rating: "Strong buy",
    color: "#ef0027",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    rank: 9,
    price: "0.10884",
    change: "+0.29%",
    cap: "18.48 B",
    vol: "1.18 B",
    circ: "169.79 B",
    volmcap: "0.0640",
    soc: "1.43%",
    cat: "Memes, Cryptocurrencies, Layer 1...",
    rating: "Buy",
    color: "#c2a633",
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
  color = "#00dcb5",
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
        : "0, 220, 181";
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

export default function Crypto({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [cryptos, setCryptos] = useState(cryptosData);
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeTimeframe, setActiveTimeframe] = useState("1 day");
  const [activeCryptoSymbol, setActiveCryptoSymbol] = useState(
    cryptosData[0].symbol,
  ); // Start with BTC

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        if (!data || !data.data) return;
        const realData = data.data.map((asset: any) => {
          const price = parseFloat(asset.price_usd);
          const change = parseFloat(asset.percent_change_24h);
          const mcap = parseFloat(asset.market_cap_usd);
          const vol = parseFloat(asset.volume24);
          const supply = parseFloat(asset.csupply);

          const formatNumber = (num: number) => {
            if (num >= 1e12) return (num / 1e12).toFixed(2) + " T";
            if (num >= 1e9) return (num / 1e9).toFixed(2) + " B";
            if (num >= 1e6) return (num / 1e6).toFixed(2) + " M";
            return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
          };

          const existing = cryptosData.find((c) => c.symbol === asset.symbol);

          return {
            name: asset.name,
            symbol: asset.symbol,
            rank: parseInt(asset.rank),
            price:
              price < 1
                ? price.toFixed(4)
                : price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }),
            change: `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`,
            cap: formatNumber(mcap),
            vol: formatNumber(vol),
            circ: formatNumber(supply),
            volmcap: (vol / mcap).toFixed(4),
            soc: existing ? existing.soc : (Math.random() * 5).toFixed(2) + "%",
            cat: existing ? existing.cat : "Cryptocurrencies",
            rating:
              change >= 5
                ? "Strong buy"
                : change > 0
                  ? "Buy"
                  : change < -5
                    ? "Strong sell"
                    : change < 0
                      ? "Sell"
                      : "Neutral",
            color: existing ? existing.color : "#2962ff",
          };
        });
        if (realData.length > 0) {
          setCryptos(realData);
        }
      })
      .catch((error) => {
        console.error("Crypto API error:", error);
      });
  }, []);

  const activeCrypto =
    cryptos.find((c) => c.symbol === activeCryptoSymbol) || cryptos[0];
  const activePriceNumeric = parseFloat(activeCrypto.price.replace(/,/g, ""));

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
            Cryptocurrencies
          </span>
          <span className="mx-2">/</span>
          <div className="flex items-center text-gray-200">
            <img
              src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/${activeCrypto.symbol.toLowerCase()}.svg`}
              alt={activeCrypto.symbol}
              className="w-4 h-4 rounded-full mr-2 shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/generic.svg";
              }}
            />
            {activeCrypto.name}
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg relative z-10 bg-[#1e222d] border-4 border-[#0b0e14]">
              <img
                src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/${activeCrypto.symbol.toLowerCase()}.svg`}
                alt={activeCrypto.symbol}
                className="w-16 h-16 rounded-full shrink-0 drop-shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/generic.svg";
                }}
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-900 border-2 border-[#0b0e14] text-xs font-bold px-2 py-0.5 rounded-md z-20 whitespace-nowrap">
              #{activeCrypto.rank}
            </div>
          </div>

          <div className="flex-1 mt-1">
            <h1 className="text-[32px] md:text-[42px] font-bold tracking-tight mb-2 leading-tight">
              {activeCrypto.name}
            </h1>

            <div className="flex items-center flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1 border border-slate-200 rounded overflow-hidden text-sm cursor-pointer hover:border-white/30 transition-colors">
                <div className="px-2 py-1 flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-900">
                    {activeCrypto.symbol}USD
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
                    Crypto assets
                  </div>
                </div>
                <div className="pl-1 pr-2 py-1 bg-white flex items-center">
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <div className="bg-[#1f2937] px-2 py-1.5 rounded flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#00dcb5]"></div>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-[42px] md:text-[48px] font-bold tracking-tight leading-none">
                {activeCrypto.price}
              </span>
              <span className="text-xl font-medium text-slate-600">USD</span>
              {activeCrypto.change.startsWith("+") ? (
                <>
                  <span className="text-xl font-medium text-[#00dcb5] ml-2">
                    +
                    {(
                      (activePriceNumeric *
                        parseFloat(
                          activeCrypto.change.replace("+", "").replace("%", ""),
                        )) /
                      100
                    ).toFixed(2)}
                  </span>
                  <span className="text-xl font-medium text-[#00dcb5]">
                    {activeCrypto.change}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xl font-medium text-[#ef4444] ml-2">
                    {(
                      (activePriceNumeric *
                        parseFloat(activeCrypto.change.replace("%", ""))) /
                      100
                    ).toFixed(2)}
                  </span>
                  <span className="text-xl font-medium text-[#ef4444]">
                    {activeCrypto.change}
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
            symbol={activeCrypto.symbol}
            basePrice={activePriceNumeric}
            color={activeCrypto.change.startsWith("-") ? "#ef4444" : "#00dcb5"}
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
                  className={`text-[12px] font-semibold ${tf.up ? "text-[#00dcb5]" : "text-[#ef4444]"}`}
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
              <h2 className="text-xl font-bold">Crypto Coins Screener</h2>
              <ChevronDown className="w-4 h-4 text-slate-600 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center mb-6">
            <h3 className="text-3xl font-bold">Crypto universe</h3>
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
                {cryptos.map((row) => {
                  const isActive = row.symbol === activeCryptoSymbol;
                  return (
                    <tr
                      key={row.symbol}
                      onClick={() => {
                        setActiveCryptoSymbol(row.symbol);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`border-b border-slate-200 hover:bg-white/[0.03] transition-colors cursor-pointer ${isActive ? "bg-white/[0.05]" : "bg-[#0f1219]"}`}
                    >
                      <td
                        className={`py-3 px-4 flex items-center gap-3 sticky left-0 z-10 ${isActive ? "bg-[#151922]" : "bg-[#0f1219]"}`}
                      >
                        <img
                          src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/${row.symbol.toLowerCase()}.svg`}
                          alt={row.symbol}
                          className="w-5 h-5 rounded-full shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/generic.svg";
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
