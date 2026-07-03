import React from "react";
import {
  Shield,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { AppStoreBadge, GooglePlayBadge } from "./AppBadges";
import { useTranslation } from "react-i18next";
import { LogoText } from "./LogoText";

const footerCol1 = [
  {
    title: "PLATEFORME",
    items: [
      "Accueil",
      "Explorez nos catégories",
      "Avantages",
      "Ressources",
      "Journal Uptaskers",
    ],
  },
];

const footerCol2 = [
  {
    title: "CONFIANCE",
    items: ["Avis clients", "Vérification des profils", "Garantie Uptaskers"],
  },
];

const footerCol3 = [
  {
    title: "ENTREPRISE",
    items: ["À propos de Uptaskers", "Nous contacter", "Support client"],
  },
];

const footerCol4 = [
  {
    title: "LÉGAL",
    items: [
      "Conditions d'utilisation",
      "Politique de confidentialité",
      "Mentions légales",
    ],
  },
];

const renderFooterLinks = (
  sections: { title: string; items: string[] }[],
  onNavigate?: (path: string) => void,
  t?: any,
) => (
  <div className="flex flex-col">
    {sections.map((sec, i) => (
      <div key={i} className={i > 0 ? "mt-8" : ""}>
        {sec.title && (
          <h4 className="text-[11px] font-semibold text-blue-300 uppercase tracking-widest mb-4">
            {t ? t(sec.title) : sec.title}
          </h4>
        )}
        <ul className="flex flex-col space-y-[11px]">
          {sec.items.map((item, j) => {
            const handleNavigate = (e: React.MouseEvent) => {
              e.preventDefault();
              if (onNavigate) {
                if (item === "Accueil") onNavigate("/");
                else if (item === "Explorez nos catégories")
                  onNavigate("/find");
                else if (item === "Avantages") onNavigate("/avantages");
                else if (item === "Ressources") onNavigate("/ressources");
                else if (item === "Journal Uptaskers")
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                else if (item === "Support client" || item === "Nous contacter")
                  onNavigate("/contact");
                else if (item === "À propos de Uptaskers") onNavigate("/offer");
                else if (item === "Conditions d'utilisation")
                  onNavigate("/terms");
                else if (item === "Politique de confidentialité")
                  onNavigate("/privacy");
                else if (item === "Mentions légales") onNavigate("/disclaimer");
                else if (item === "Avis clients") onNavigate("/p/avis-clients");
                else if (item === "Vérification des profils")
                  onNavigate("/p/verification");
                else if (item === "Garantie Uptaskers") onNavigate("/p/garantie");
                else {
                  // Fallback to generic page
                  const slug = item
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");
                  onNavigate(`/p/${slug}`);
                }
              }
            };

            return (
              <li key={j}>
                <a
                  href="#"
                  className="text-[13.5px] font-medium text-blue-100 hover:text-white transition-colors"
                  onClick={handleNavigate}
                >
                  <LogoText>{t ? t(item) : item}</LogoText>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    ))}
  </div>
);

export default function Footer({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <footer className="relative w-full border-t border-blue-900 bg-gradient-to-br from-blue-950 to-blue-500 overflow-hidden pt-16 pb-16 z-30 font-sans">
      {/* Background Image (Rocket) mixed with branding glows */}
      <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[65%] z-0 pointer-events-none overflow-hidden justify-end">
        <div
          className="absolute inset-0 bg-no-repeat bg-right-bottom mix-blend-screen opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1600')`,
            backgroundSize: "cover",
          }}
        />
        {/* Blend Gradients to fade smoothly into the blue background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-blue-500/50 opacity-80"></div>

        {/* Subtle branding glows */}
        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-sky-400/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        {/* Left Column: Branding & Info */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left pr-0 lg:pr-8">
          <div className="space-y-4 text-[12.5px] leading-relaxed text-blue-100 mt-2">
            <p>
              <LogoText><strong className="text-white">Uptaskers</strong></LogoText>{" "}
              {t(
                "est la plateforme de référence pour trouver des prestataires vérifiés et qualifiés.",
              )}
            </p>
            <p>
              {t(
                "La confiance de nos utilisateurs est notre priorité. Tous les professionnels de notre réseau sont évalués et leurs informations sont documentées pour votre sécurité.",
              )}
            </p>

            {/* App badges */}
            <div className="flex flex-col gap-3 pt-6 pb-2 items-center md:items-start">
              <p className="text-[11px] font-bold text-blue-300 uppercase tracking-widest mb-1 text-center md:text-left">
                {t("Applications Mobiles")}
              </p>

              <div className="flex flex-col items-center md:items-start gap-3 mt-3">
                <AppStoreBadge className="!h-[50px] !min-w-[170px] scale-90 md:origin-left hover:scale-[0.95]" />
                <GooglePlayBadge className="!h-[50px] !min-w-[170px] scale-90 md:origin-left hover:scale-[0.95]" />
              </div>
            </div>

            {/* Social networks */}
            <div className="flex flex-col gap-3 pt-6 pb-2 items-center md:items-start">
              <p className="text-[11px] font-bold text-blue-300 uppercase tracking-widest mb-1 text-center md:text-left">
                {t("Suivez-nous")}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-blue-200 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[14px] h-[14px]"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="mt-4 pt-6 border-t border-white/20 text-blue-200">
              <LogoText>© {new Date().getFullYear()} Uptaskers.</LogoText>
              <br />
              {t("Tous droits réservés.")}
            </p>
          </div>
        </div>

        {/* Links Sections */}
        <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-2 lg:mt-0">
          {renderFooterLinks(footerCol1, onNavigate, t)}
          {renderFooterLinks(footerCol2, onNavigate, t)}
          {renderFooterLinks(footerCol3, onNavigate, t)}
          {renderFooterLinks(footerCol4, onNavigate, t)}
        </div>
      </div>
    </footer>
  );
}
