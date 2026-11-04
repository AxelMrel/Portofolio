"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Rocket, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => {
      let current = navLinks[0].href;
      for (const { href } of navLinks) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 120) current = href;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = "#contact";
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) =>
    `relative text-sm font-medium transition-all duration-200 py-1.5 px-3 rounded-full ${
      active === href
        ? "text-primary-600 bg-primary-50 font-semibold"
        : "text-slate-600 hover:text-primary-600 hover:bg-slate-100/70"
    }`;

  return (
    <header className="sticky top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md py-3.5 border-b border-slate-100">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        <a className="flex items-center space-x-3 group transition duration-300" href="#accueil">
          <div className="relative">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary-600 to-indigo-600 text-white text-[9px] font-black flex items-center justify-center">
              AM
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors">
              {profile.brand}
              <span className="text-primary-600">_dev</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-600 hidden sm:block">
              Full Stack &amp; Mobile
            </span>
          </div>
        </a>

        <nav className="items-center hidden lg:flex space-x-1">
          {navLinks.map((l) => (
            <a key={l.href} className={linkClass(l.href)} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center space-x-3">
          <div className="hidden xl:flex items-center space-x-1.5 px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Disponible</span>
          </div>
          <a
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-full shadow-sm hover:shadow-glow hover:-translate-y-0.5"
            href="#contact"
          >
            <Rocket className="w-4 h-4" />
            <span>Votre projet</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex items-center space-x-2 lg:hidden">
          <a className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-primary-600 rounded-full shadow-sm" href="#contact">
            Projet
          </a>
          <button
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-xl ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-5 space-y-2">
          {navLinks.map((l) => (
            <a key={l.href} className={`${linkClass(l.href)} py-2.5 px-4 text-base`} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-lg">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Actuellement disponible pour de nouveaux projets</span>
            </div>
            <a
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white text-center bg-primary-600 rounded-xl shadow hover:bg-primary-700"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              <Rocket className="w-4 h-4" />
              <span>Démarrer mon projet</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
