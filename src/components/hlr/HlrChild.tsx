import { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Kontrollera medvetande och andning",
    color: "from-pink-500 to-rose-400",
    borderColor: "border-pink-500/30",
    glowColor: "shadow-pink-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    items: [
      { label: "Prata med barnet", detail: "Ropa och skaka försiktigt i axlarna." },
      { label: "Öppna luftvägen", detail: "Lägg barnet på rygg, en hand på pannan och lyft hakan försiktigt." },
      { label: "Kontrollera andningen", detail: "Titta, lyssna och känn efter normal andning." },
    ],
  },
  {
    number: "02",
    title: "Ge 5 inblåsningar först",
    color: "from-cyan-500 to-sky-400",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 12s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    items: [
      { label: "Börja med 5 inblåsningar", detail: "På barn startar du med fem långsamma inblåsningar." },
      { label: "Anpassa mängden luft", detail: "Små barn har små lungor — blås bara tills bröstkorgen höjer sig." },
      { label: "Barn under 1 år", detail: "Täck både näsa och mun med din mun." },
      { label: "Barn över 1 år", detail: "Kläm ihop näsan och blås in i munnen." },
    ],
    highlight: true,
  },
  {
    number: "03",
    title: "Larma 112",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    items: [
      { label: "Ring 112", detail: "Använd högtalare så du kan fortsätta hjälpa barnet samtidigt." },
      { label: "Om ni är flera", detail: "Låt någon annan ringa 112 och hämta hjärtstartare." },
      { label: "Om du är ensam utan telefon nära", detail: "Gör HLR i ungefär 1 minut innan du larmar." },
    ],
  },
  {
    number: "04",
    title: "Starta Barn-HLR – 15 kompressioner",
    color: "from-violet-500 to-indigo-400",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    items: [
      { label: "15 kompressioner", detail: "Tryck på nedre halvan av bröstbenet." },
      { label: "Djup", detail: "Cirka en tredjedel av bröstkorgens djup." },
      { label: "Under 1 år", detail: "Använd två fingrar." },
      { label: "Över 1 år", detail: "Använd en hand, eller två om det behövs." },
      { label: "Takt", detail: "100–120 kompressioner per minut." },
    ],
  },
  {
    number: "05",
    title: "Ge 2 inblåsningar och fortsätt 15:2",
    color: "from-emerald-500 to-teal-400",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    ),
    items: [
      { label: "Efter 15 tryck", detail: "Ge 2 inblåsningar." },
      { label: "Fortsätt utan långa pauser", detail: "Håll ett jämnt tempo." },
      { label: "Fortsätt tills hjälp kommer", detail: "Eller tills barnet visar tydliga livstecken." },
    ],
  },
  {
    number: "06",
    title: "Hjärtstartare om sådan finns",
    color: "from-amber-500 to-yellow-400",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    items: [
      { label: "Be någon hämta hjärtstartaren", detail: "Avbryt inte HLR i onödan." },
      { label: "Följ instruktionerna", detail: "Apparaten guidar dig steg för steg." },
      { label: "Fortsätt HLR mellan analyser", detail: "Gör kompressioner när apparaten säger till." },
    ],
  },
];

const stats = [
  { value: "5", label: "Inledande inblåsningar" },
  { value: "15:2", label: "Kompressioner : inblåsningar" },
  { value: "100–120", label: "Tryck per minut" },
  { value: "1/3", label: "Av bröstkorgens djup" },
];

export default function HlrChild() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Tillbaka
        </button>
      </div>

      <header className="relative overflow-hidden px-6 py-16 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500 opacity-10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-pink-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-300" />
            Barnspecifik första hjälpen
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Barn HLR
            <span className="ml-3 bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
              steg för steg
            </span>
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Barn-HLR skiljer sig från vuxen-HLR. Här börjar du med 5 inblåsningar
            och fortsätter sedan med 15 kompressioner och 2 inblåsningar.
          </p>
        </div>
      </header>

      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-4 text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Barn HLR – steg för steg</h2>

          {steps.map((step, i) => {
            const isOpen = activeStep === i;

            return (
              <div
                key={i}
                onClick={() => setActiveStep(isOpen ? null : i)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 ${step.borderColor} ${
                  isOpen
                    ? `bg-slate-800 shadow-xl ${step.glowColor}`
                    : "bg-slate-800/40 hover:bg-slate-800/70"
                }`}
              >
                <div className="flex items-center gap-4 p-5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                  >
                    {step.icon}
                  </div>

                  <div className="flex-1">
                    <span className="text-xs font-semibold text-slate-500">Steg {step.number}</span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {isOpen && (
                  <div className="border-t border-slate-700/50 px-5 pb-5 pt-4">
                    {step.highlight && (
                      <div className="mb-4 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
                        <span className="text-lg font-black text-cyan-300">Börja med 5 inblåsningar</span>
                      </div>
                    )}

                    <ul className="space-y-3">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex gap-3">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${step.color}`}
                          >
                            {j + 1}
                          </span>

                          <div>
                            <p className="text-sm font-semibold text-white">{item.label}</p>
                            <p className="mt-0.5 text-xs text-slate-400">{item.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-pink-500/20 bg-pink-500/5 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-300">Viktigt</p>
          <p className="mt-3 text-lg font-medium leading-relaxed text-white">
            Om barnet andas normalt men är medvetslöst ska barnet läggas i stabilt sidoläge och 112 kontaktas.
            Om du inte kan ge inblåsningar är det bättre att göra något än inget alls medan hjälp är på väg.
          </p>
        </div>
      </section>
    </div>
  );
}