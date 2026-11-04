import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mes expertises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Des services taillés pour <span className="text-primary-600">votre croissance</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Des architectures robustes, du code propre et des interfaces soignées pour maximiser votre impact digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, text, tags }) => (
            <div
              key={title}
              className="reveal p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-primary-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-primary-600 flex items-center justify-center shadow-xs group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <a
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors"
                  href="#contact"
                >
                  <span>Démarrer ce projet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a className="text-xs text-slate-500 hover:text-slate-800 transition-colors" href="#realisations">
                  Voir les réalisations →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
