import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Send, MessageSquare, AlertCircle, Paperclip } from "lucide-react";

export default function SubmitTicket({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    priority: "normal",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "general",
        priority: "normal",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900"
    >
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-6 relative z-10 w-full overflow-x-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column: Form Info */}
          <div className="w-full md:w-1/3 space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Submit a Ticket
              </h1>
              <p className="text-slate-600 leading-relaxed">
                Need help? Fill out the form and our support team will get back
                to you as soon as possible.
              </p>
            </div>

            <div className="bg-[#0a0e17] border border-slate-200 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Before you submit
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                  Check our{" "}
                  <button
                    onClick={() => onNavigate("/help-center")}
                    className="text-indigo-400 hover:underline"
                  >
                    Help Center
                  </button>{" "}
                  for quick answers.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                  For Discord issues, ensure your email matches your purchase
                  email.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                  Average response time is 24-48 hours.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-2/3">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Ticket Submitted!
                </h3>
                <p className="text-slate-600 mb-6">
                  We have received your request and will get back to you
                  shortly. A confirmation email has been sent to{" "}
                  {formData.email}.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-[#151922] hover:bg-[#1a1f2e] border border-slate-200 rounded-xl font-semibold text-slate-900 transition-colors"
                >
                  Submit Another Ticket
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-[#0a0e17] border border-slate-200 p-6 md:p-8 rounded-3xl auto-cols-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#151922] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#151922] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="category"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-[#151922] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none"
                    >
                      <option value="general">General Support</option>
                      <option value="billing">Billing & Subscriptions</option>
                      <option value="discord">Discord Access</option>
                      <option value="technical">Technical Issue</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="priority"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full bg-[#151922] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#151922] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#151922] border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Please provide as much detail as possible..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Paperclip className="w-4 h-4" /> Attach Files
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-900 transition-all ${
                      isSubmitting
                        ? "bg-indigo-600/50 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
                    }`}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Submit Ticket
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </motion.div>
  );
}
