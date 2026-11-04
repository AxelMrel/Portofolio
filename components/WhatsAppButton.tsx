"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { WhatsAppIcon } from "./BrandIcons";

export default function WhatsAppButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed z-50 bottom-5 right-5 sm:bottom-7 sm:right-7 flex items-center gap-2.5">
      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className={`relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 text-white transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-lg hover:shadow-glow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300 ${
          shown ? "scale-100" : "scale-0"
        }`}
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping -z-10 pointer-events-none" />
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
}
