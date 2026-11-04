import { Award, CircleCheck } from "lucide-react";
import { practices } from "@/lib/data";

export default function Practices() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Excellence &amp; Ingénierie Logicielle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Architectures &amp; <span className="text-primary-600">Bonnes Pratiques</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            La qualité d&apos;une application réside dans sa structure interne. J&apos;applique des standards rigoureux pour
            concevoir des systèmes maintenables, sécurisés et prêts à grandir avec votre activité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map(({ icon: Icon, gradient, title, text }) => (
            <div
              key={title}
              className="reveal p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${gradient} text-white flex items-center justify-center shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-primary-600">
                <CircleCheck className="w-3.5 h-3.5" />
                <span>Standard appliqué</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
