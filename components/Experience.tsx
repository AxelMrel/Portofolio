import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="parcours" className="py-20 lg:py-24 bg-slate-900 text-white scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3 reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-primary-400 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Expériences professionnelles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Mon <span className="text-primary-400">parcours</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            De l&apos;apprentissage à l&apos;expertise technique : des projets concrets pour des clients commerciaux, en équipe
            avec le backend et l&apos;UI/UX.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((e) => (
            <div
              key={e.role + e.period}
              className="reveal p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-primary-500/50 transition-colors"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{e.period}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{e.text}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs font-medium text-primary-300 bg-primary-600/15 border border-primary-500/30 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-600/30 border border-primary-500 text-primary-300 font-bold flex items-center justify-center text-xs">
                  {e.company[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{e.role}</h4>
                  <p className="text-xs text-slate-400">{e.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
