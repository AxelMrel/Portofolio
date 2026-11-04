import { steps } from "@/lib/data";

export default function Process() {
  return (
    <section id="methodologie" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 reveal">
          <span className="text-xs uppercase font-bold text-primary-600 tracking-wider">Méthodologie Éprouvée</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">Comment nous collaborons ensemble</h2>
          <p className="text-sm sm:text-base text-slate-600">
            Un process structuré et transparent pour transformer vos idées en réalité, avec des livraisons incrémentales et
            des délais maîtrisés.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal p-6 rounded-3xl bg-slate-50 border border-slate-200/80 relative space-y-3 hover:bg-white hover:shadow-md transition-all"
            >
              <div className="text-4xl font-black text-primary-300">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
