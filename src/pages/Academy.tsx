import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Play,
  BookOpen,
  Search,
  ArrowRight,
  Award,
  Lock,
  Star,
  ChevronRight,
  PlayCircle,
  Clock,
} from "lucide-react";

const COURSES = [
  {
    id: 1,
    title: "Mastering Market Structure",
    category: "Intermediate",
    duration: "4h 15m",
    lessons: 12,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
    color: "from-blue-600 to-indigo-600",
    isPremium: false,
    progress: 35,
  },
  {
    id: 2,
    title: "Smart Money Concepts (SMC)",
    category: "Advanced",
    duration: "6h 30m",
    lessons: 18,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1620228811802-1262dce02b0c?auto=format&fit=crop&q=80&w=600",
    color: "from-purple-600 to-pink-600",
    isPremium: true,
    progress: 0,
  },
  {
    id: 3,
    title: "Trading Psychology & Risk Management",
    category: "All Levels",
    duration: "3h 45m",
    lessons: 8,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    color: "from-emerald-600 to-teal-600",
    isPremium: false,
    progress: 100,
  },
  {
    id: 4,
    title: "Crypto Trading Masterclass",
    category: "Beginner",
    duration: "5h 20m",
    lessons: 15,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=600",
    color: "from-orange-500 to-red-500",
    isPremium: true,
    progress: 0,
  },
];

const CATEGORIES = [
  "All Courses",
  "Beginner Basics",
  "Forex Trading",
  "Crypto Markets",
  "Stocks & Options",
  "Technical Analysis",
  "Trading Psychology",
  "Strategy Testing",
];

export default function Academy({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState("All Courses");

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                  RWAMS Trading Academy
                </span>
              </div>
              <h1 className="text-[46px] sm:text-[56px] lg:text-[64px] font-bold tracking-tight leading-[1.05] mb-6">
                Master the Markets. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Zero Excuses.
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Elevate your trading with professional-grade education. Learn
                institutional order flow, smart money concepts, and unbreakable
                risk management.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-colors">
                  <PlayCircle className="w-5 h-5 fill-black text-slate-900" />
                  Start Learning
                </button>
                <div className="w-full sm:w-[320px] relative">
                  <input
                    type="text"
                    placeholder="Search courses, topics..."
                    className="w-full bg-white border border-slate-200 rounded-full pl-12 pr-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                  <Search className="w-5 h-5 text-slate-600 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    50+
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Video Lessons
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    12
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Masterclasses
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    24/7
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Community Support
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Video Thumbnail */}
            <div className="relative group cursor-pointer w-full max-w-[600px] mx-auto lg:ml-auto">
              {/* Decorative border/glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-2xl blur-lg transition duration-1000 group-hover:duration-200"></div>

              <div className="relative rounded-2xl overflow-hidden bg-[#0d1320] border border-slate-200 aspect-video shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1642543492481-44e81e3914a8?auto=format&fit=crop&q=80&w=1200"
                  alt="Trading Academy"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-200/50 group-hover:bg-slate-200 transition-colors duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center pl-1.5">
                      <Play className="w-6 h-6 text-slate-900 fill-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-cyan-500 shrink-0 rounded text-[10px] font-bold uppercase tracking-wider text-slate-900">
                      New
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      Episode 5 • Institutional Supply & Demand
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    How Banks Manipulate Liquidity
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 py-12 border-t border-slate-200 relative z-10">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
              Browse Collection
            </h3>
            <ul className="flex flex-col space-y-1">
              {CATEGORIES.map((cat, i) => (
                <li key={i}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${
                      activeCategory === cat
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white"
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 rounded-xl bg-gradient-to-b from-[#1a1e29] to-[#0a0e17] border border-slate-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-500/30">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  Get Certified
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Pass the final exam and earn your professional trading
                  certificate.
                </p>
                <button className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                {activeCategory}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Sort by:</span>
                <select className="bg-transparent border-none text-sm font-medium text-slate-900 focus:ring-0 cursor-pointer appearance-none">
                  <option className="bg-[#0f1219]">Recommended</option>
                  <option className="bg-[#0f1219]">Newest</option>
                  <option className="bg-[#0f1219]">Top Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {COURSES.map((course) => (
                <div
                  key={course.id}
                  className="group flex flex-col bg-[#0a0e17] border border-slate-200 hover:border-slate-200 rounded-xl overflow-hidden transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Thumbnail Cover */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${course.color} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity`}
                    ></div>

                    {/* Badges/Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-slate-300 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider text-slate-900 border border-slate-200">
                        {course.category}
                      </span>
                    </div>

                    {/* Premium Lock Overlay */}
                    {course.isPremium && (
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/50 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-amber-500" />
                      </div>
                    )}

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-slate-200 backdrop-blur-md flex items-center justify-center pl-1">
                        <Play className="w-6 h-6 text-slate-900 fill-white" />
                      </div>
                    </div>

                    {/* Progress Bar (if started) */}
                    {course.progress > 0 && course.progress < 100 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
                        <div
                          className="h-full bg-cyan-400"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    )}
                    {/* Completed Bar */}
                    {course.progress === 100 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500"></div>
                    )}
                  </div>

                  {/* Course Details */}
                  <div className="p-6 flex flex-col flex-1 relative">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-slate-600 mt-auto pt-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} Lessons</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block"></div>
                      <div className="hidden sm:flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="font-medium text-slate-700">
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    {/* Footer Action */}
                    <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                      {course.progress === 100 ? (
                        <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          Completed
                        </div>
                      ) : (
                        <button className="text-sm font-bold text-slate-900 hover:text-cyan-400 transition-colors flex items-center gap-2">
                          {course.progress > 0
                            ? "Resume Course"
                            : "Start Course"}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}

                      {course.isPremium && (
                        <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded">
                          Pro
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 flex justify-center">
              <button className="px-6 py-2.5 rounded-full border border-slate-200 hover:border-white/30 text-sm font-semibold text-slate-900 transition-colors">
                Load More Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
