import React from "react";
import categoryStatsImg from "../assets/images/upright_magnifier_no_text_1781030216696.png";
import userReviewsImg from "../assets/images/user_stats_dashboard_1781029085071.png";
import frenchTalentsImg from "../assets/images/french_talents_ui_1780762951178.png";
import professionalGridImg from "../assets/images/professional_grid_1780767180827.png";

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
  buttonLabel?: string;
}

export const getJournalArticles = (t: any): JournalArticle[] => [
  {
    id: 1,
    title: t("Les catégories les plus utilisées dans le mois"),
    date: t("12 Avril 2026"),
    excerpt: t("Les services qui génèrent le plus d'opportunités ce mois-ci."),
    image: categoryStatsImg,
    buttonLabel: t("Découvrir nos services"),
    content: React.createElement(React.Fragment, null),
  },
  {
    id: 3,
    title: t("Avis des utilisateurs et statistiques"),
    date: t("20 Mai 2026"),
    excerpt: t(
      "Découvrez ce que notre communauté pense de Uptaskers et rejoignez nos milliers d'utilisateurs actifs.",
    ),
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fm=webp&fit=crop&q=60&w=600",
    buttonLabel: t("Découvrez nos services"),
    content: React.createElement(React.Fragment, null),
  },
];
