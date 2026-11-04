import { Mail, MessageCircle } from "lucide-react";
import { profile } from "@/lib/data";

export default function Cta() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-tr from-primary-700 via-primary-600 to-indigo-700 text-white scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 reveal">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Prêt à concrétiser votre prochain projet digital ?</h2>
          <p className="text-sm sm:text-base text-primary-100 max-w-xl mx-auto leading-relaxed">
            Discutons de vos besoins dès aujourd&apos;hui. Basé à Abomey-Calavi, disponible pour des projets en remote dans le
            monde entier — réponse sous 24h.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-primary-700 bg-white hover:bg-primary-50 rounded-full shadow-lg transition-all hover:scale-105"
              href={`mailto:${profile.email}?subject=Nouveau%20projet`}
            >
              <Mail className="w-4 h-4" />
              <span>Décrire mon projet par email</span>
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border-2 border-white/80 hover:bg-white/10 rounded-full transition-all"
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Me contacter sur WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
