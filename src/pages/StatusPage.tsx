import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  CheckCircle,
  AlertCircle,
  Clock,
  Activity,
  Server,
  Database,
  Globe,
} from "lucide-react";

export default function StatusPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const systems = [
    {
      name: "Live Trading Floor (Discord)",
      status: "operational",
      uptime: "99.99%",
    },
    { name: "Video Streaming Server", status: "operational", uptime: "99.95%" },
    { name: "User Authentication", status: "operational", uptime: "100%" },
    { name: "Payment Gateway", status: "operational", uptime: "99.99%" },
    { name: "Member Dashboard", status: "operational", uptime: "99.98%" },
  ];

  const pastIncidents = [
    {
      date: "Oct 20, 2024",
      title: "Video Streaming Latency",
      status: "Resolved",
      description:
        "Some users experienced buffering during the live stream. The issue was traced to a CDN provider and was resolved by routing traffic to an alternative edge node.",
    },
    {
      date: "Oct 12, 2024",
      title: "Discord Bot Outage",
      status: "Resolved",
      description:
        "Role assignment bot was briefly down for maintenance. All roles have been synced.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900"
    >
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              System Status
            </h1>
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-xl inline-flex">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-semibold px-1">
                All Systems Operational
              </span>
            </div>
            <p className="text-slate-600 mt-6 max-w-2xl text-lg">
              Check the real-time status of RWAMS Traders services,
              infrastructure, and APIs.
            </p>
          </div>

          {/* System Status List */}
          <div className="bg-[#0a0e17] border border-slate-200 rounded-3xl p-6 md:p-8 mb-12">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-400" /> Current Status
              </h2>
              <div className="text-sm text-slate-600">
                Updated a few seconds ago
              </div>
            </div>

            <div className="space-y-6 flex flex-col">
              {systems.map((system, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-slate-900 font-medium text-lg">
                    {system.name}
                  </span>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider text-right">
                        Operational
                      </span>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      {system.uptime} uptime
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Incidents */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-slate-600" /> Past Incidents
            </h2>
            <div className="space-y-6">
              {pastIncidents.map((incident, i) => (
                <div
                  key={i}
                  className="bg-[#0a0e17] border border-slate-200 rounded-2xl p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500/50"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {incident.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">
                        {incident.date}
                      </span>
                      <span className="px-2 py-1 text-xs font-bold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {incident.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {incident.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
