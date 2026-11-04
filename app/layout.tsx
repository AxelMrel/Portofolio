import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ODJRADO Axel Morel | Développeur Full Stack & Mobile",
  description:
    "Portfolio d'ODJRADO Axel Morel. Développeur Full Stack & Mobile : applications Flutter, React Native, APIs Laravel & Spring Boot.",
  authors: [{ name: "ODJRADO Axel Morel" }],
  keywords: [
    "ODJRADO Axel Morel",
    "Développeur Full Stack",
    "Développeur Mobile",
    "Flutter",
    "React Native",
    "Laravel",
    "Spring Boot",
    "Bénin",
    "Freelance",
  ],
  openGraph: {
    title: "ODJRADO Axel Morel | Développeur Full Stack & Mobile",
    description: "Transformez vos idées en applications mobiles et web modernes, performantes et scalables.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-50 text-slate-900 selection:bg-primary-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
