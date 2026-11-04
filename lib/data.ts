import {
  Activity,
  Boxes,
  FileCode2,
  GitBranch,
  Layers,
  LayoutDashboard,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  fullName: "ODJRADO Axel Morel",
  brand: "Axel",
  role: "Développeur Full Stack & Mobile",
  email: "morelodjrado@gmail.com",
  phone: "+229 01 62 41 30 18",
  phoneHref: "tel:+2290162413018",
  whatsapp: "https://wa.me/2290162413018",
  location: "Abomey-Calavi, Bénin",
  github: "https://github.com/AxelMrel",
  linkedin: "https://linkedin.com",
  // Remplace par ta propre photo : place-la dans public/images/profile.jpg et mets "/images/profile.jpg"
  photo:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=774&q=80",
};

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Mes services" },
  { href: "#realisations", label: "Mes réalisations" },
  { href: "#methodologie", label: "Méthodologie" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "+3 Ans", label: "D'expérience professionnelle" },
  { value: "+15", label: "Projets réalisés" },
  { value: "+10", label: "Clients satisfaits" },
  { value: "24h", label: "Délai de réponse" },
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

export const stack = [
  ["Flutter", "flutter/flutter-original.svg"],
  ["Dart", "dart/dart-original.svg"],
  ["React Native", "react/react-original.svg"],
  ["Ionic", "ionic/ionic-original.svg"],
  ["Laravel", "laravel/laravel-original.svg"],
  ["PHP", "php/php-original.svg"],
  ["Spring Boot", "spring/spring-original.svg"],
  ["Java", "java/java-original.svg"],
  ["Node.js", "nodejs/nodejs-original.svg"],
  ["JavaScript", "javascript/javascript-original.svg"],
  ["MySQL", "mysql/mysql-original.svg"],
  ["PostgreSQL", "postgresql/postgresql-original.svg"],
  ["MongoDB", "mongodb/mongodb-original.svg"],
  ["Firebase", "firebase/firebase-original.svg"],
  ["Bootstrap", "bootstrap/bootstrap-original.svg"],
  ["Git", "git/git-original.svg"],
  ["Jira", "jira/jira-original.svg"],
].map(([name, path]) => ({ name, icon: DEVICON + path }));

export type Service = { icon: LucideIcon; title: string; text: string; tags: string[] };

export const services: Service[] = [
  {
    icon: Smartphone,
    title: "Applications Mobiles iOS & Android",
    text: "Applications multiplateformes modernes et fluides avec notifications push, mode hors-ligne et interfaces responsives soignées.",
    tags: ["Flutter", "React Native", "Ionic", "Firebase"],
  },
  {
    icon: Server,
    title: "Backend & APIs REST",
    text: "Applications serveur robustes et sécurisées avec authentification JWT, documentation Swagger et traitement automatisé des données.",
    tags: ["Laravel", "Spring Boot", "JWT", "Swagger"],
  },
  {
    icon: LayoutDashboard,
    title: "Applications Web sur-mesure",
    text: "Plateformes web et tableaux de bord pour automatiser vos processus : gestion de stocks, commandes en ligne, géolocalisation et analytics.",
    tags: ["Laravel", "JavaScript", "Bootstrap", "MySQL"],
  },
  {
    icon: GitBranch,
    title: "Architecture & Gestion de projet",
    text: "Structuration de code maintenable et modulaire (Repository – Controller – Service) et pilotage de projet Agile/Scrum.",
    tags: ["Architecture MVC", "Agile / Scrum", "Git", "Jira"],
  },
];

export type ProjectCategory = "mobile" | "web" | "api";

export type Project = {
  title: string;
  category: ProjectCategory;
  badge: string;
  image: string;
  text: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Waoh Finance",
    category: "mobile",
    badge: "Application Mobile",
    image: "/images/finance.png",
    text: "Application de gestion budgétaire : suivi des dépenses, budgets, alertes intelligentes et tableaux de bord interactifs. Données chiffrées en AES-256.",
    tags: ["Flutter", "Laravel", "Firebase", "Chart.js"],
  },
  {
    title: "AgriCarte",
    category: "web",
    badge: "Plateforme Web",
    image: "/images/agri.png",
    text: "Plateforme de géolocalisation des producteurs agricoles avec commande en ligne, messagerie intégrée et dashboard analytics.",
    tags: ["Laravel", "MySQL", "Google Maps", "Ajax"],
  },
  {
    title: "Barutemkso",
    category: "mobile",
    badge: "E-commerce Mobile",
    image: "/images/baruktems.png",
    text: "Application de vente de livres en ligne avec catalogue dynamique et système de recommandation.",
    tags: ["Flutter", "Laravel", "MySQL"],
  },
  {
    title: "Becca",
    category: "mobile",
    badge: "Fintech Mobile",
    image: "/images/becca.png",
    text: "Application de création et de gestion de cagnottes collaboratives.",
    tags: ["Flutter", "Laravel", "MySQL"],
  },
  {
    title: "Marketo",
    category: "mobile",
    badge: "Marketplace Mobile",
    image: "/images/makketo.png",
    text: "Application de vente de voitures et de publication d'annonces entre particuliers et professionnels.",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "API Appels d'Offres",
    category: "api",
    badge: "API & Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1170&q=80",
    text: "API REST qui traite automatiquement les fichiers Excel d'appels d'offres et génère des rapports PDF : -80% de temps de traitement.",
    tags: ["Spring Boot", "Java", "PostgreSQL", "Apache POI"],
  },
];

export const steps = [
  {
    title: "Découverte & Cadrage",
    text: "Analyse approfondie de vos besoins et objectifs business, puis traduction en spécifications techniques claires.",
  },
  {
    title: "Conception & Prototypage",
    text: "Création de wireframes et de prototypes interactifs, et modélisation de l'architecture avant tout codage.",
  },
  {
    title: "Développement Agile",
    text: "Sprints de 2 semaines avec livraisons incrémentales, bonnes pratiques et tests fonctionnels rigoureux.",
  },
  {
    title: "Livraison & Support",
    text: "Déploiement, publication sur les stores et 30 jours de support inclus pour assurer le succès du lancement.",
  },
];

export type Practice = { icon: LucideIcon; gradient: string; title: string; text: string };

export const practices: Practice[] = [
  {
    icon: Layers,
    gradient: "from-blue-600 to-indigo-600",
    title: "Architecture MVC",
    text: "Séparation claire entre modèles, vues et contrôleurs pour un code lisible, évolutif et facile à faire évoluer en équipe.",
  },
  {
    icon: Boxes,
    gradient: "from-emerald-600 to-teal-600",
    title: "Repository – Controller – Service",
    text: "Abstraction de l'accès aux données et isolement de la logique métier pour garantir maintenabilité et modularité.",
  },
  {
    icon: Activity,
    gradient: "from-amber-600 to-orange-600",
    title: "State Management",
    text: "Gestion d'état prédictible et réactive avec BLoC et Provider pour des interfaces fluides sans re-renders superflus.",
  },
  {
    icon: ShieldCheck,
    gradient: "from-cyan-600 to-blue-600",
    title: "Sécurité des données",
    text: "Authentification JWT, chiffrement AES-256 des données sensibles, validation des entrées et gestion rigoureuse des erreurs.",
  },
  {
    icon: FileCode2,
    gradient: "from-purple-600 to-indigo-600",
    title: "APIs documentées",
    text: "APIs REST documentées avec Swagger pour une intégration simple et rapide côté mobile, web ou partenaires.",
  },
  {
    icon: RefreshCw,
    gradient: "from-rose-600 to-pink-600",
    title: "Agile / Scrum",
    text: "Sprints courts, livraisons incrémentales et suivi transparent via Jira, Trello et Git pour des délais maîtrisés.",
  },
];

export const experiences = [
  {
    role: "Développeur Mobile",
    company: "IWAJUTECH",
    period: "2025 – Aujourd'hui",
    text: "Développement et optimisation d'applications mobiles multiplateformes. Collaboration avec les équipes backend et UI/UX.",
    tags: ["Waoh Finance", "Barutemkso", "Becca", "Marketo", "API Spring Boot"],
  },
  {
    role: "Stagiaire Académique",
    company: "IWAJUTECH",
    period: "2022 – 2024",
    text: "Participation active à des projets mobiles et web pour des clients commerciaux, avec Flutter, React Native, Laravel et Ionic.",
    tags: ["Flutter", "React Native", "Laravel", "Ionic"],
  },
  {
    role: "Stagiaire Académique",
    company: "ATERI",
    period: "2021 – 2022",
    text: "Développement et optimisation de modules de gestion de stock. Analyse des besoins clients et traduction en solutions techniques.",
    tags: ["Laravel", "MySQL"],
  },
];

export const faqs = [
  {
    q: "Quels types de projets pouvez-vous réaliser ?",
    a: "Applications mobiles iOS & Android (Flutter, React Native, Ionic), applications web sur-mesure, APIs REST et backends (Laravel, Spring Boot), ainsi que du conseil en architecture logicielle.",
  },
  {
    q: "Quel est votre délai de livraison typique pour une application mobile ?",
    a: "Pour une application mobile standard avec backend, je prévois généralement 2 à 4 mois selon la complexité. Je travaille en sprints de 2 semaines avec des livraisons incrémentales.",
  },
  {
    q: "Proposez-vous un support après la livraison ?",
    a: "Oui : 30 jours de support inclus, puis des forfaits de maintenance mensuels incluant corrections de bugs, mises à jour de sécurité et support technique.",
  },
  {
    q: "Quelle est votre stack technologique préférée ?",
    a: "Je suis spécialisé dans Flutter pour le mobile et Laravel / Spring Boot pour le backend. Cependant, je choisis toujours la technologie la plus adaptée à votre projet.",
  },
];

export const expertises = [
  "Applications Mobiles Flutter",
  "Applications React Native & Ionic",
  "APIs REST Laravel & Spring Boot",
  "Applications Web sur-mesure",
  "Architecture Logicielle",
];
