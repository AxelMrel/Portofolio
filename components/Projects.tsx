"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/data";

const filters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "mobile", label: "Mobile" },
  { value: "web", label: "Web" },
  { value: "api", label: "API" },
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="realisations" className="py-20 lg:py-24 bg-slate-50/70 border-y border-slate-200/70 scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 reveal">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-primary-600 tracking-wider">Portfolio Sélectif</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Aperçu de mes <span className="text-primary-600">réalisations</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-lg">
              Une sélection de projets récents, conçus avec passion et rigueur technique.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 text-sm font-semibold rounded-full border transition-colors ${
                  filter === f.value
                    ? "text-white bg-primary-600 border-primary-600"
                    : "text-primary-700 bg-primary-50 hover:bg-primary-100 border-primary-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-slate-950/80 backdrop-blur-md rounded-full">
                    {p.badge}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.text}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 text-xs font-medium text-primary-700 bg-primary-50 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-primary-600 transition-colors"
                    >
                      <span>Visiter le site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
