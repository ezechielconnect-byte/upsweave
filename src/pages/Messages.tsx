import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  Paperclip,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const conversations = [
  {
    id: 1,
    name: "Emma Laurent",
    role: "Artisan Plombier",
    lastMessage:
      "Je peux intervenir demain matin vers 9h si cela vous convient.",
    time: "10:42",
    unread: 2,
    online: true,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=60&w=100&h=100",
  },
  {
    id: 2,
    name: "Lucas Dubois",
    role: "Développeur Web",
    lastMessage: "Le site est en ligne !",
    time: "Hier",
    unread: 0,
    online: false,
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=60&w=100&h=100",
  },
  {
    id: 3,
    name: "Service Client",
    role: "Support",
    lastMessage: "Votre paiement a été validé.",
    time: "Mar",
    unread: 0,
    online: true,
    image: null,
  },
];

export default function Messages({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [activeTab, setActiveTab] = useState(1);
  const [message, setMessage] = useState("");

  const activeChat = conversations.find((c) => c.id === activeTab);

  return (
    <div className="h-screen bg-slate-50 text-slate-900 flex flex-col font-sans overflow-hidden">
      <Navbar onNavigate={onNavigate} />

      <main className="flex-1 max-w-7xl mx-auto w-full pt-20 px-4 md:px-6 pb-6 flex gap-6">
        {/* Contacts Sidebar */}
        <div className="w-full md:w-80 lg:w-96 flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shrink-0">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-2xl font-bold mb-4">Messagerie</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher une conversation..."
                className="w-full bg-white border border-slate-200 rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-500 focus:bg-slate-100 text-sm transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar p-2">
            {conversations.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveTab(chat.id)}
                className={`w-full text-left p-4 rounded-2xl flex gap-4 transition-all ${activeTab === chat.id ? "bg-slate-100 shadow-lg" : "hover:bg-white"}`}
              >
                <div className="relative">
                  {chat.image ? (
                    <img
                      src={chat.image}
                      loading="lazy"
                      alt={chat.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-900" />
                    </div>
                  )}
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#121212] rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-slate-900 truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-slate-500">{chat.time}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <p
                      className={`text-sm truncate ${chat.unread > 0 ? "text-slate-900 font-medium" : "text-slate-600"}`}
                    >
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <span className="bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shrink-0">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="hidden md:flex flex-1 flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden relative">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-200 backdrop-blur-sm z-10">
                <div className="flex items-center gap-4">
                  {activeChat.image ? (
                    <img
                      src={activeChat.image}
                      loading="lazy"
                      alt={activeChat.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-900" />
                    </div>
                  )}
                  <div>
                    <h2 className="font-bold">{activeChat.name}</h2>
                    <p className="text-xs text-slate-600">
                      {activeChat.role} •{" "}
                      {activeChat.online ? (
                        <span className="text-green-400">En ligne</span>
                      ) : (
                        "Hors ligne"
                      )}
                    </p>
                  </div>
                </div>
                <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <span className="text-xs font-medium text-slate-500 bg-slate-200/50 px-3 py-1 rounded-full">
                    Hier
                  </span>
                </motion.div>

                <div className="flex gap-4 max-w-[80%]">
                  <img
                    src={activeChat.image || "https://via.placeholder.com/150"}
                    alt={activeChat.name}
                    className="w-8 h-8 rounded-full hidden sm:block object-cover"
                  />
                  <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 rounded-tl-sm text-sm text-gray-200">
                    Bonjour ! Je suis intéressé(e) par vos services pour un
                    projet en cours. Êtes-vous disponible prochainement ?
                  </div>
                </div>

                <div className="flex gap-4 self-end max-w-[80%] flex-row-reverse">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-4 rounded-tr-sm text-sm text-slate-900 shadow-lg shadow-blue-500/20">
                    Bonjour ! Oui, tout à fait. De quel type de projet s'agit-il
                    et pour quand en avez-vous besoin ?
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <span className="text-xs font-medium text-slate-500 bg-slate-200/50 px-3 py-1 rounded-full">
                    Aujourd'hui
                  </span>
                </motion.div>

                <div className="flex gap-4 max-w-[80%]">
                  <img
                    src={activeChat.image || "https://via.placeholder.com/150"}
                    alt={activeChat.name}
                    className="w-8 h-8 rounded-full hidden sm:block object-cover"
                  />
                  <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 rounded-tl-sm text-sm text-gray-200">
                    <p className="mb-3">{activeChat.lastMessage}</p>
                    {activeChat.id === 1 && (
                      <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 mt-3">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-bold text-slate-900">
                            Devis pour prestation
                          </span>
                          <span className="font-bold text-blue-400">
                            150,00 €
                          </span>
                        </div>
                        <button
                          onClick={() => onNavigate("/payment")}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors text-sm shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                        >
                          Accepter et Payer de manière sécurisée
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-slate-200 bg-slate-200">
                <div className="flex items-center gap-3 bg-slate-200/50 border border-slate-200 p-2 rounded-full">
                  <button className="p-2 text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Écrivez votre message..."
                    className="flex-1 bg-transparent border-none text-slate-900 focus:outline-none text-sm placeholder:text-slate-500 font-medium"
                  />
                  <button
                    className={`p-3 rounded-full transition-all flex items-center justify-center ${message.trim().length > 0 ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-white text-slate-500 cursor-not-allowed"}`}
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
              <MessageSquare className="w-16 h-16 mb-4 text-slate-900/5" />
              <p>Sélectionnez une conversation pour commencer</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
