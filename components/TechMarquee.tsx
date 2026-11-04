import { stack } from "@/lib/data";

export default function TechMarquee() {
  // Liste doublée pour une boucle continue (l'animation translate de -50%)
  const items = [...stack, ...stack];

  return (
    <section className="py-8 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Stack Technologique Moderne &amp; Maîtrisée</p>
      </div>
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-6 py-2">
          {items.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-800/80 border border-slate-700/60 flex-shrink-0 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain flex-shrink-0" loading="lazy" />
              <span className="text-xs font-semibold text-slate-200 tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
