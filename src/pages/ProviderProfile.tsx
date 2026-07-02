import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  CheckCircle,
  MessageSquare,
  ChevronLeft,
  Briefcase,
  Calendar,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

export default function ProviderProfile({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { id } = useParams();

  // Mock data based on ID, fallback for showcase
  const provider = {
    name: id === "1" ? "Emma Laurent" : "Lucas Dubois",
    role: id === "1" ? "Artisan Plombier" : "Développeur Full-Stack",
    rating: 4.8,
    reviews: 124,
    location: "Paris, France",
    image:
      id === "1"
        ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=60&w=200&h=200"
        : "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=60&w=200&h=200",
    about:
      "Passionnée par mon métier depuis plus de 10 ans, j'accompagne les particuliers et les entreprises dans leurs travaux d'installation et de rénovation. Qualité et propreté du chantier garanties.",
    skills: [
      "Dépannage 24/7",
      "Rénovation Salle de Bain",
      "Chauffage",
      "Installation Sanitaire",
    ],
    portfolio: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=60&w=300",
      "https://images.unsplash.com/photo-1595514535315-2a26569eb273?auto=format&fit=crop&q=60&w=300",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=60&w=300",
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-24">
      <Navbar onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => onNavigate("/find")}
          className="flex items-center text-slate-600 hover:text-slate-900 transition-colors mb-12 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Retour à la recherche</span>
        </button>

        {/* Profile Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <img
              src={provider.image}
              loading="lazy"
              alt={provider.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-slate-200 shadow-2xl"
            />

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold flex items-center gap-2">
                    {provider.name}
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </h1>
                  <p className="text-xl text-slate-600 mt-1">{provider.role}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onNavigate("/messages")}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full font-semibold transition-colors shrink-0"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Contacter
                  </button>
                  <button
                    onClick={() => onNavigate("/payment")}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] shrink-0"
                  >
                    <Calendar className="w-5 h-5" />
                    Réserver
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-700">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-medium text-slate-900">
                    {provider.rating}
                  </span>
                  <span className="text-slate-500">
                    ({provider.reviews} avis)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                  <MapPin className="w-4 h-4 text-slate-600" />
                  {provider.location}
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                  <Briefcase className="w-4 h-4 text-slate-600" />
                  +50 missions
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-4">À propos</h2>
              <p className="text-slate-600 leading-relaxed">{provider.about}</p>
            </section>

            <section className="bg-white border border-slate-200 rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-4">Portfolio</h2>
              <div className="grid grid-cols-2 gap-4">
                {provider.portfolio.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl overflow-hidden aspect-video border border-slate-200"
                  >
                    <img
                      src={img}
                      loading="lazy"
                      alt="Réalisation"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-white border border-slate-200 rounded-3xl p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  Avis récents{" "}
                  <span className="bg-slate-100 text-xs px-2 py-1 rounded-full">
                    {provider.reviews}
                  </span>
                </h2>
                <button className="text-sm bg-blue-600 hover:bg-blue-500 font-medium px-4 py-2 rounded-xl transition-colors">
                  Laisser un avis
                </button>
              </div>

              <div className="bg-slate-200 border border-slate-200 rounded-2xl p-5 mb-8">
                <h3 className="text-sm font-semibold mb-3">
                  Écrire un avis public
                </h3>
                <div className="flex text-slate-500 gap-1 mb-4 cursor-pointer hover:text-amber-400 transition-colors">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 hover:fill-amber-400" />
                  ))}
                </div>
                <textarea
                  rows={3}
                  placeholder="Partagez votre expérience avec ce prestataire (laissez un commentaire)..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 transition-colors resize-none mb-3 text-sm"
                ></textarea>
                <div className="flex justify-end">
                  <button className="bg-blue-600 text-white hover:bg-gray-200 font-bold px-5 py-2 rounded-xl text-sm transition-colors">
                    Publier
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {[1, 2].map((review) => (
                  <div
                    key={review}
                    className="border-b border-slate-200 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-tr from-gray-700 to-gray-600 rounded-full flex items-center justify-center font-bold text-sm">
                          C{review}
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            Client Vérifié {review}
                          </p>
                          <p className="text-xs text-slate-500">
                            Il y a {review} semaine(s)
                          </p>
                        </div>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      Très bon travail ! Le prestataire a été très
                      professionnel, ponctuel et a laissé le chantier
                      impeccable. La communication était fluide. Je recommande
                      vivement pour vos futurs projets.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-6">
              <h2 className="font-bold mb-4 text-lg">Compétences</h2>
              <div className="flex flex-wrap gap-2">
                {provider.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-900/30 text-blue-300 border border-blue-800/50 px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white border border-slate-200 rounded-3xl p-6">
              <h2 className="font-bold mb-4 text-lg">Disponibilités</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Lundi - Vendredi</span>
                  <span className="font-medium text-green-400">
                    08:00 - 18:00
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Week-end</span>
                  <span className="font-medium text-amber-400">
                    Sur demande
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
