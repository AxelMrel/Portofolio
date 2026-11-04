"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-2 reveal">
            <span className="text-xs uppercase font-bold text-primary-600 tracking-wider">Foire Aux Questions</span>
            <h2 className="text-3xl font-black text-slate-950">Des questions ? Tout est clair et transparent.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? "border-primary-300" : "border-slate-200"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
