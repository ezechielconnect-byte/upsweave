import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "masonry",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000",
      tag: "Maçonnerie",
      title: (
        <>
          {t("Le/La maçon(ne)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.masonry",
        "Des artisans qualifiés pour tous vos travaux de construction, de façade et d'aménagement extérieur.",
      ),
    },
    {
      id: "hairdress",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000",
      tag: "Coiffure",
      title: (
        <>
          {t("Le/La coiffeur(euse)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.hairdress",
        "Faites appel à nos experts de la coiffure pour une coupe, une coloration ou un coiffage sur mesure.",
      ),
    },
    {
      id: "eventorg",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000",
      tag: "Organisation d'événements",
      title: (
        <>
          {t("L'organisateur(trice)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.eventorg",
        "Confiez la planification de vos mariages, fêtes et événements professionnels à nos experts passionnés.",
      ),
    },
    {
      id: "law",
      image:
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=2000",
      tag: "Droit",
      title: (
        <>
          {t("L'avocat(e) / juriste")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.law",
        "Sécurisez vos démarches avec notre sélection d'avocats et de professionnels du droit compétents.",
      ),
    },
    {
      id: "sport",
      image: "/trainer.png",
      tag: "Sport",
      title: (
        <>
          {t("Le/La coach sportif(ve)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.sport",
        "Atteignez vos objectifs physiques avec l'accompagnement personnalisé de nos entraîneurs passionnés.",
      ),
    },
    {
      id: "security",
      image: "/security.png",
      tag: "Agent de sécurité",
      title: (
        <>
          {t("L'agent(e) de sécurité")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.security",
        "Assurez la sécurité de vos biens et événements avec des professionnels formés et qualifiés.",
      ),
    },
    {
      id: "translator",
      image: "/translator.png",
      tag: "Traducteur",
      title: (
        <>
          {t("Le/La traducteur(trice)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.translator",
        "Facilitez vos échanges internationaux grâce à nos experts en traduction et interprétation.",
      ),
    },
    {
      id: "carpenter",
      image: "/carpenter.png",
      tag: "Menuiserie",
      title: (
        <>
          {t("Le/La menuisier(ère)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.carpenter",
        "Des artisans qualifiés pour tous vos travaux de menuiserie, de la fabrication à la rénovation.",
      ),
    },
    {
      id: "decorator",
      image: "/decorator.png",
      tag: "Décoration",
      title: (
        <>
          {t("Le/La décorateur(trice)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.decorator",
        "Sublimez votre intérieur avec l'expertise de nos décorateurs d'intérieur passionnés.",
      ),
    },
    {
      id: "mechanic",
      image: "/mechanic.png",
      tag: "Mécanique",
      title: (
        <>
          {t("Le/La mécanicien(ne)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.mechanic",
        "Réparez et entretenez votre véhicule avec nos experts en mécanique automobile.",
      ),
    },
    {
      id: "garden",
      image: "/gardener.png",
      tag: "Jardinage",
      title: (
        <>
          {t("Le/La jardinier(ère)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.garden",
        "Transformez et entretenez vos espaces verts grâce à l'expertise de nos jardiniers et paysagistes passionnés.",
      ),
    },
    {
      id: "cooking",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000",
      tag: "Cuisine",
      title: (
        <>
          {t("Le/La cuisinier(ère)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.cooking",
        "Offrez-vous un moment gastronomique avec des chefs talentueux, de la préparation de repas aux événements privés.",
      ),
    },
    {
      id: "services",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=2000",
      tag: "Services à Domicile",
      title: (
        <>
          {t("Le/La professionnel(le)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.services",
        "Trouvez les meilleurs experts pour vos travaux du quotidien, sélectionnés avec soin et prêts à intervenir rapidement.",
      ),
    },
    {
      id: "tech",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000",
      tag: "Freelances & Tech",
      title: (
        <>
          {t("L'informaticien(ne)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.tech",
        "Développeurs, designers et marketeurs de talent pour propulser vos projets numériques vers de nouveaux sommets.",
      ),
    },
    {
      id: "repair",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
      tag: "Réparation & Bricolage",
      title: (
        <>
          {t("L'artisan(e)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.repair",
        "Un savoir-faire reconnu pour toutes vos rénovations et réparations, avec des professionnels de confiance à vos côtés.",
      ),
    },
    {
      id: "photo",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000",
      tag: "Photographie",
      title: (
        <>
          {t("Le/La photographe")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.photo",
        "Capturez vos événements précieux avec l'expertise de nos photographes professionnels prêts à sublimer chaque instant.",
      ),
    },
    {
      id: "transport",
      image: "/transport_new.png",
      tag: "Transport",
      title: (
        <>
          {t("Le/La chauffeur(e)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.transport",
        "Déplacez-vous facilement et en toute sécurité avec nos chauffeurs professionnels qualifiés.",
      ),
    },
    {
      id: "moving",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
      tag: "Déménagement",
      title: (
        <>
          {t("Le/La déménageur(euse)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.moving",
        "Déménagez l'esprit tranquille avec nos experts du transport, efficaces et précautionneux.",
      ),
    },
    {
      id: "teaching",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2000",
      tag: "Soutien scolaire",
      title: (
        <>
          {t("Le/La professeur(e)")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.education",
        "Développez de nouvelles compétences avec des professeurs passionnés, en ligne ou à domicile, selon vos besoins.",
      ),
    },
    {
      id: "realestate",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
      tag: "Agent immobilier",
      title: (
        <>
          {t("L'agent immobilier")}{" "}
          <span className="text-blue-300">{t("qu'il vous faut.")}</span>
        </>
      ),
      description: t(
        "hero.desc.realestate",
        "Trouvez l'expert immobilier idéal pour vous accompagner dans tous vos projets d'achat, de vente ou de location.",
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[500px] md:h-[80vh] md:min-h-[600px] overflow-hidden bg-slate-900">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.tag}
                className={`w-full h-full object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.7] transition-transform duration-[10s] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              {/* Blue Overlay for Richness */}
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
              {/* Deep Tone for Shadow Depth */}
              <div className="absolute inset-0 bg-slate-950/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6 pt-32 lg:pt-40 pb-20 md:pb-48">
              <div
                className={`w-full md:w-auto transition-all duration-1000 delay-300 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 md:mb-6 leading-[1.15] md:leading-[1.1] max-w-5xl mx-auto">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-medium max-w-3xl mx-auto mt-4 mb-8">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation arrows */}
    </section>
  );
};

export default Hero;
