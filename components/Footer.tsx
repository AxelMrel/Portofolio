import { ArrowRight, Mail, MapPin, Phone, Rocket } from "lucide-react";
import { expertises, navLinks, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./BrandIcons";

export default function Footer() {
  const socials = [
    { href: profile.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary-600/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 pb-12 border-b border-slate-800/60">
          <div className="lg:col-span-2 space-y-4">
            <a className="inline-flex items-center space-x-2 group" href="#accueil">
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-primary-400 transition-colors">
                {profile.brand}
                <span className="text-primary-500">_dev</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Développeur Full Stack spécialisé en applications web et mobiles modernes et performantes, de l&apos;interface à
              l&apos;API.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-full px-3.5 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible pour de nouveaux projets &amp; collaborations</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-primary-400 transition-colors" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Expertises</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {expertises.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Prendre contact</h3>
            <div className="space-y-2.5 text-sm">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{profile.email}</span>
              </a>
              <a href={profile.phoneHref} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{profile.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all shadow hover:shadow-glow"
                href="#contact"
              >
                <Rocket className="w-3.5 h-3.5" />
                <span>Démarrer mon projet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-3 text-slate-400">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
