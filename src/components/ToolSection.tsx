import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tools = [
  {
    title: "BMI-kalkylator",
    text: "Räkna ut ditt BMI och jämför med rekommendationer för din ålder.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 6h18M3 12h18M3 18h18M8 3v3m4-3v3m4-3v3M8 18v3m4-3v3m4-3v3"/>
      </svg>
    ),
    color: "bg-blue-500/10 text-blue-400",
    accent: "from-blue-500 to-blue-400",
    route: null,
  },
  {
    title: "Symptomguide",
    text: "Få snabb vägledning kring vanliga symptom och när du bör söka vård.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    color: "bg-emerald-500/10 text-emerald-400",
    accent: "from-emerald-500 to-emerald-400",
    route: null,
  },
  {
    title: "Vaccinationsråd",
    text: "Rekommendationer och aktuell info om vaccinationer för alla åldrar.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "bg-violet-500/10 text-violet-400",
    accent: "from-violet-500 to-violet-400",
    route: null,
  },
  {
    title: "HLR – Hjärt-lungräddning",
    text: "Lär dig utföra HLR korrekt. Steg-för-steg guide baserad på officiella riktlinjer.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    color: "bg-red-500/10 text-red-400",
    accent: "from-red-600 to-red-400",
    route: "/hlr",
    urgent: true,
  },
];

export default function ToolSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="bg-[#162032] px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-400">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5"/>
            </svg>
            Verktyg
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
            Fler hälsverktyg
          </h2>
          <p className="mt-2 text-slate-400">
            Utforska fler funktioner för din hälsa
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-3xl border bg-slate-900/60 p-6 transition-all duration-300 ${
                  isHovered
                    ? "border-slate-600 shadow-xl shadow-black/30 -translate-y-1"
                    : tool.urgent
                    ? "border-red-500/20"
                    : "border-slate-700/60"
                }`}
              >
                {/* Urgent pulse ring for HLR */}
                {tool.urgent && (
                  <span className="absolute right-4 top-4 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                  </span>
                )}

                {/* Accent top bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r transition-opacity duration-300 ${tool.accent} ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className={`mb-4 inline-flex rounded-xl p-2.5 ${tool.color}`}>
                  {tool.icon}
                </div>
                <h3 className="text-base font-bold text-white">{tool.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{tool.text}</p>

                <button
                  onClick={() => tool.route && navigate(tool.route)}
                  className={`mt-5 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98] bg-gradient-to-r ${tool.accent}`}
                >
                  Läs mer
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}