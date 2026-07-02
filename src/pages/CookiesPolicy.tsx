import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function CookiesPolicy({
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
      className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900"
    >
      <Navbar onNavigate={onNavigate} />

      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Cookies Policy
            </h1>
            <p className="text-slate-600">Last updated: October 24, 2024</p>
          </div>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What Are Cookies
              </h2>
              <p className="mb-4">
                Cookies are small pieces of text sent to your web browser by a
                website you visit. A cookie file is stored in your web browser
                and allows the Service or a third-party to recognize you and
                make your next visit easier and the Service more useful to you.
              </p>
              <p className="mb-4">
                Cookies can be "persistent" or "session" cookies. Persistent
                cookies remain on your personal computer or mobile device when
                you go offline, while session cookies are deleted as soon as you
                close your web browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How RWAMS Traders Uses Cookies
              </h2>
              <p className="mb-4">
                When you use and access the Service, we may place a number of
                cookies files in your web browser. We use cookies for the
                following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong className="text-slate-900">Essential cookies:</strong>{" "}
                  To enable certain functions of the Service, such as keeping
                  you logged in to the trading floor and remembering your chart
                  layout preferences.
                </li>
                <li>
                  <strong className="text-slate-900">Analytics cookies:</strong>{" "}
                  To provide analytics, store your preferences, and track how
                  our community uses the educational materials so we can improve
                  them.
                </li>
                <li>
                  <strong className="text-slate-900">
                    Third-party cookies:
                  </strong>{" "}
                  We may use third-party cookies to track how you interact with
                  embedded content, like our Weekly Streams or performance
                  charts.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Your Choices Regarding Cookies
              </h2>
              <p className="mb-4">
                If you'd like to delete cookies or instruct your web browser to
                delete or refuse cookies, please visit the help pages of your
                web browser.
              </p>
              <p className="mb-4">
                Please note, however, that if you delete cookies or refuse to
                accept them, you might not be able to use all of the features we
                offer, you may not be able to store your preferences, and some
                of our pages (like the live trading simulator) might not display
                properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about our Cookies Policy, please
                contact us at support@rwamstraders.com.
              </p>
            </section>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
