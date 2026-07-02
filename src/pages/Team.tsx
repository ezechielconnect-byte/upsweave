import React from "react";
import Navbar from "../components/Navbar";
import {
  Target,
  Shield,
  Users,
  Network,
  Code,
  Megaphone,
  CheckCircle,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ezechiel Ramissou",
    title: "CEO & Founder",
    role: "Leadership",
    image:
      "https://ui-avatars.com/api/?name=Ezechiel+Ramissou&size=400&background=8b5cf6&color=fff&bold=true",
    description:
      "Visionary leader steering RWAMS Traders with a clear mission to democratize trading education.",
  },
  {
    name: "Prince Nonka",
    title: "COO",
    role: "Operations",
    image:
      "https://ui-avatars.com/api/?name=Prince+Nonka&size=400&background=06b6d4&color=fff&bold=true",
    description:
      "Prince oversees daily operations and ensures outstanding service for our community.",
  },
  {
    name: "Samakassi Zoumana",
    title: "General Secretary",
    role: "Administration",
    image:
      "https://ui-avatars.com/api/?name=Samakassi+Zoumana&size=400&background=a855f7&color=fff&bold=true",
    description:
      "Zoumana coordinates administrative activities and keeps the organization running smoothly.",
  },
  {
    name: "Trabi Ange",
    title: "Product Director",
    role: "Product",
    image:
      "https://ui-avatars.com/api/?name=Trabi+Ange&size=400&background=22d3ee&color=fff&bold=true",
    description:
      "Ange continuously designs and enhances the user experience of our simulator platform.",
  },
  {
    name: "Kouame Junior",
    title: "Technical Director",
    role: "Technology",
    image:
      "https://ui-avatars.com/api/?name=Kouame+Junior&size=400&background=7c3aed&color=fff&bold=true",
    description:
      "Kouame Junior leads the engineering team and architects the innovative solutions powering RWAMS Traders.",
  },
  {
    name: "Kouame Tresor",
    title: "Department Director",
    role: "Marketing",
    image:
      "https://ui-avatars.com/api/?name=Kouame+Tresor&size=400&background=0891b2&color=fff&bold=true",
    description:
      "Kouame Tresor drives marketing strategy and builds RWAMS Traders’ global brand awareness.",
  },
  {
    name: "Gohi Cedric",
    title: "Directeur des impôts",
    role: "Governance",
    image:
      "https://ui-avatars.com/api/?name=Gohi+Cedric&size=400&background=ec4899&color=fff&bold=true",
    description:
      "Director of taxes, supporting compliance and governance at RWAMS Traders.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Make trading accessible to everyone with a realistic, educational simulation platform.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description:
      "Become the global benchmark for trading education and simulation.",
  },
  {
    icon: Users,
    title: "Our Values",
    description:
      "Innovation, excellence, integrity, and commitment to our trading community.",
  },
];

export default function Team({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden relative selection:bg-cyan-500/30 flex flex-col items-center pt-24 pb-24"
    >
      <Navbar onNavigate={onNavigate} />

      {/* Background Layer (Home page style) */}
      <div className="fixed inset-0 z-0 bg-white pointer-events-none overflow-hidden">
        {/* Animated Space Image */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-5%] bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=3000')`,
          }}
        />

        {/* Subtle overlays to enhance text readability and match the mood */}
        <div className="absolute inset-0 bg-slate-200/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0026]/90 via-transparent to-transparent opacity-80" />

        {/* Fake vertical aurora effect (matches Home) */}
        <div className="absolute inset-x-0 top-0 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJsaW5lcyB3aWR0aD0iNCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iNDAiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbGluZXMpIi8+PC9zdmc+')] opacity-50 mix-blend-screen" />

        {/* Additional cyan/violet subtle glows to tie it to Team theme */}
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-6 mx-auto flex flex-col items-center">
        {/* Header matching user's design */}
        <div className="text-center w-full mb-16 mt-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-6 mx-auto">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-700">
              The team behind RWAMS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our
            </span>{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Team
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
            Passionate professionals working every day to deliver the best
            simulated trading experience.
          </p>
        </div>

        {/* Values section */}
        <div className="grid md:grid-cols-3 gap-8 w-full mb-24 max-w-5xl">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="relative p-6 md:p-8 border-t border-slate-200 md:border-t-0 md:border-l hover:border-violet-500/50 transition-colors duration-300 bg-gradient-to-r from-transparent to-transparent hover:from-violet-500/5"
              >
                <div className="mb-6 flex items-center justify-center md:justify-start">
                  <Icon
                    className="w-6 h-6 text-cyan-400 opacity-80"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-3 tracking-wide text-center md:text-left">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed text-center md:text-left">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Meet the team Header */}
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Meet the team
          </span>
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {teamMembers.map((member, index) => {
            return (
              <div
                key={member.name}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative bg-white backdrop-blur-xl border border-slate-200 hover:border-slate-300 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Glassmorphic gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/90 via-[#0a0f1c]/40 to-transparent" />

                    {/* Role badge - Glass effect */}
                    <div className="absolute top-4 right-4 bg-slate-100 backdrop-blur-md border border-slate-300 text-slate-900 text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      {member.role}
                    </div>
                  </div>

                  {/* Content (Glass styling) */}
                  <div className="p-6 flex flex-col flex-1 relative z-10 bg-gradient-to-b from-white/5 to-transparent">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-4">
                      {member.title}
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-auto">
                      {member.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-br-full z-10 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
