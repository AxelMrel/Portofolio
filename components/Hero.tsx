import Image from "next/image";
import { ArrowRight, CalendarCheck, CodeXml, Rocket } from "lucide-react";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-200/25 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          <div className="flex-1 space-y-6 text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/80 text-primary-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {profile.fullName} • {profile.role}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Transformons vos idées en applications{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-700 to-indigo-600">
                modernes &amp; performantes
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Développeur Full Stack passionné, je conçois des applications mobiles et web sur-mesure — de l&apos;interface
              Flutter ou React Native jusqu&apos;aux APIs Laravel et Spring Boot — robustes, maintenables et centrées sur
              l&apos;utilisateur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-full shadow-lg hover:shadow-glow hover:-translate-y-0.5 transition-all"
                href="#contact"
              >
                <Rocket className="w-4 h-4" />
                <span>Démarrer mon projet</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 hover:text-primary-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-xs hover:border-primary-300 transition-all"
                href="#realisations"
              >
                <span>Explorer mes réalisations</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center flex-1 relative reveal-scale">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 via-indigo-400/20 to-cyan-400/20 blur-2xl -z-10 animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-primary-500 via-primary-300 to-indigo-500 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100 border-4 border-white">
                  <Image
                    src={profile.photo}
                    alt={profile.fullName}
                    fill
                    priority
                    sizes="(max-width: 768px) 288px, 352px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-4 sm:left-0 bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Disponibilité</p>
                  <p className="text-xs font-bold text-slate-800">Immédiate pour projets</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-2 sm:right-0 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-2xl shadow-lg flex items-center gap-2">
                <CodeXml className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-bold text-slate-800">Full Stack &amp; Mobile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-sm reveal">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary-600 mb-1">{s.value}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
