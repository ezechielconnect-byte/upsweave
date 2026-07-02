import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import About from "./pages/About";
import WhoWeAre from "./pages/WhoWeAre";
import OurMission from "./pages/OurMission";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import DiscordServer from "./pages/DiscordServer";
import TradingFloor from "./pages/TradingFloor";
import WeeklyStreams from "./pages/WeeklyStreams";
import TermsOfUse from "./pages/TermsOfUse";
import Disclaimer from "./pages/Disclaimer";
import Privacy from "./pages/Privacy";
import CookiesPolicy from "./pages/CookiesPolicy";
import HelpCenter from "./pages/HelpCenter";
import StatusPage from "./pages/StatusPage";
import SubmitTicket from "./pages/SubmitTicket";
import Crypto from "./pages/Crypto";
import Stocks from "./pages/Stocks";
import Forex from "./pages/Forex";
import Academy from "./pages/Academy";
import MarketPatterns from "./pages/MarketPatterns";
import RiskManagement from "./pages/RiskManagement";
import Glossary from "./pages/Glossary";
import ChartBuilder from "./pages/ChartBuilder";
import StrategyTester from "./pages/StrategyTester";
import PortfolioTracker from "./pages/PortfolioTracker";
import GenericPage from "./pages/GenericPage";
import FindProviders from "./pages/FindProviders";
import CategoryPage from "./pages/CategoryPage";
import TopCategories from "./pages/TopCategories";
import AvantagesPage from "./pages/AvantagesPage";
import ContactPage from "./pages/ContactPage";
import RessourcesPage from "./pages/RessourcesPage";
import ProviderDashboard from "./pages/ProviderDashboard";
import Jobs from "./pages/Jobs";
import DownloadApp from "./pages/DownloadApp";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
}

const animated = (comp: React.ReactNode) => (
  <PageTransition>{comp}</PageTransition>
);

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {/* @ts-expect-error key is allowed in React */}
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={animated(<Home onNavigate={navigate} />)}
            />
            <Route
              path="/find"
              element={animated(<FindProviders onNavigate={navigate} />)}
            />
            <Route
              path="/top-categories"
              element={animated(<TopCategories onNavigate={navigate} />)}
            />
            <Route
              path="/download"
              element={animated(<DownloadApp onNavigate={navigate} />)}
            />
            <Route
              path="/category/:id"
              element={animated(<CategoryPage onNavigate={navigate} />)}
            />
            <Route
              path="/avantages"
              element={animated(<AvantagesPage onNavigate={navigate} />)}
            />
            <Route
              path="/contact"
              element={animated(<ContactPage onNavigate={navigate} />)}
            />
            <Route
              path="/ressources"
              element={animated(<RessourcesPage onNavigate={navigate} />)}
            />
            <Route
              path="/jobs"
              element={animated(<Jobs onNavigate={navigate} />)}
            />
            <Route
              path="/offer"
              element={animated(<ProviderDashboard onNavigate={navigate} />)}
            />
            <Route
              path="/pricing"
              element={animated(<Pricing onNavigate={navigate} />)}
            />
            <Route
              path="/team"
              element={animated(<Team onNavigate={navigate} />)}
            />
            <Route
              path="/about"
              element={animated(<About onNavigate={navigate} />)}
            />
            <Route
              path="/who-we-are"
              element={animated(<WhoWeAre onNavigate={navigate} />)}
            />
            <Route
              path="/our-mission"
              element={animated(<OurMission onNavigate={navigate} />)}
            />
            <Route
              path="/careers"
              element={animated(<Careers onNavigate={navigate} />)}
            />
            <Route
              path="/discord"
              element={animated(<DiscordServer onNavigate={navigate} />)}
            />
            <Route
              path="/trading-floor"
              element={animated(<TradingFloor onNavigate={navigate} />)}
            />
            <Route
              path="/weekly-streams"
              element={animated(<WeeklyStreams onNavigate={navigate} />)}
            />
            <Route
              path="/terms"
              element={animated(<TermsOfUse onNavigate={navigate} />)}
            />
            <Route
              path="/disclaimer"
              element={animated(<Disclaimer onNavigate={navigate} />)}
            />
            <Route
              path="/privacy"
              element={animated(<Privacy onNavigate={navigate} />)}
            />
            <Route
              path="/cookies"
              element={animated(<CookiesPolicy onNavigate={navigate} />)}
            />
            <Route
              path="/help-center"
              element={animated(<HelpCenter onNavigate={navigate} />)}
            />
            <Route
              path="/status"
              element={animated(<StatusPage onNavigate={navigate} />)}
            />
            <Route
              path="/submit-ticket"
              element={animated(<SubmitTicket onNavigate={navigate} />)}
            />
            <Route
              path="/crypto"
              element={animated(<Crypto onNavigate={navigate} />)}
            />
            <Route
              path="/stocks"
              element={animated(<Stocks onNavigate={navigate} />)}
            />
            <Route
              path="/forex"
              element={animated(<Forex onNavigate={navigate} />)}
            />
            <Route
              path="/academy"
              element={animated(<Academy onNavigate={navigate} />)}
            />
            <Route
              path="/market-patterns"
              element={animated(<MarketPatterns onNavigate={navigate} />)}
            />
            <Route
              path="/risk-management"
              element={animated(<RiskManagement onNavigate={navigate} />)}
            />
            <Route
              path="/glossary"
              element={animated(<Glossary onNavigate={navigate} />)}
            />
            <Route
              path="/chart-builder"
              element={animated(<ChartBuilder onNavigate={navigate} />)}
            />
            <Route
              path="/strategy-tester"
              element={animated(<StrategyTester onNavigate={navigate} />)}
            />
            <Route
              path="/portfolio"
              element={animated(<PortfolioTracker onNavigate={navigate} />)}
            />
            <Route
              path="/login-taskup"
              element={animated(<Login onNavigate={navigate} />)}
            />
            <Route
              path="/p/:slug"
              element={animated(<GenericPage onNavigate={navigate} />)}
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
