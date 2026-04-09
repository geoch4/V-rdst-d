import { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Kontrollera medvetande och andning",
    color: "from-red-600 to-red-500",
    borderColor: "border-red-500/30",
    glowColor: "shadow-red-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    items: [
      { label: "Rusa på axlarna", detail: "Skaka försiktigt och ropa högt" },
      { label: "Andas personen normalt?", detail: "Titta, lyssna och känn i max 10 sekunder" },
    ],
  },
  {
    number: "02",
    title: "Larma 112",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    items: [
      { label: "Ring 112 omedelbart", detail: "Om personen är medvetslös eller andas onormalt" },
      { label: "Sätt på högtalaren", detail: "Så kan du utföra HLR och prata med operatören samtidigt" },
    ],
    highlight: true,
  },
  {
    number: "03",
    title: "Starta HLR – 30 kompressioner",
    color: "from-blue-500 to-blue-400",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    items: [
      { label: "Djup: 5–6 cm", detail: "Placera händerna mitt på bröstkorgen, tryck hårt" },
      { label: "Takt: 100–120/min", detail: "Ungefär i takten till låten 'Stayin' Alive'" },
      { label: "Låt bröstkorgen återfjädra", detail: "Lyft händerna lätt mellan varje kompression" },
    ],
  },
  {
    number: "04",
    title: "2 inblåsningar",
    color: "from-teal-500 to-teal-400",
    borderColor: "border-teal-500/30",
    glowColor: "shadow-teal-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    items: [
      { label: "Lyft hakan, täpp näsan", detail: "Böj huvudet bakåt för att öppna luftvägen" },
      { label: "Blås in i 1 sekund", detail: "Bröstkorgen ska höja sig synligt" },
      { label: "Upprepa 30:2 tills hjälp anländer", detail: "30 kompressioner, 2 inblåsningar – fortsätt cykeln" },
    ],
  },
  {
    number: "05",
    title: "Hjärtstartare finns?",
    color: "from-yellow-500 to-orange-400",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    items: [
      { label: "Hämta hjärtstartaren", detail: "Skicka någon annan om möjligt – avbryt inte HLR" },
      { label: "Följ röstinstruktionerna", detail: "Hjärtstartaren guidar dig steg för steg" },
      { label: "Fortsätt HLR mellan stötarna", detail: "Sluta inte komprimera förrän hjärtstartaren ber dig" },
    ],
  },
];

const stats = [
  { value: "5–6 cm", label: "Kompressions-djup" },
  { value: "100–120", label: "Slag per minut" },
  { value: "30:2", label: "Kompressioner : inblåsningar" },
  { value: "112", label: "Larmnummer" },
];

export default function HLRPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Back button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Tillbaka
        </button>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden px-6 py-16 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600 opacity-10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400" />
            Livsräddande kunskap
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Hjärt-lung&shy;räddning
            <span className="ml-3 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">HLR</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Varje minut utan HLR minskar överlevnadschansen med 10%. Lär dig stegen – det kan rädda ett liv.
          </p>
        </div>
      </header>

      {/* Quick stats */}
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

      {/* Steps */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Steg för steg</h2>
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
                {/* Header row */}
                <div className="flex items-center gap-4 p-5">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-slate-500">Steg {step.number}</span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>

                {/* Expanded content */}
                {isOpen && (
                  <div className="border-t border-slate-700/50 px-5 pb-5 pt-4">
                    {step.highlight && (
                      <div className="mb-4 flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3">
                        <span className="text-2xl font-black text-red-400">→ LARMA 112</span>
                      </div>
                    )}
                    <ul className="space-y-3">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex gap-3">
                          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${step.color}`}>
                            {j + 1}
                          </span>
                          <div>
                            <p className="font-semibold text-white text-sm">{item.label}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{item.detail}</p>
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

      {/* Reminder banner */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-400">Kom ihåg</p>
          <p className="mt-3 text-lg font-medium text-white leading-relaxed">
            Behåll kontakten med larmoperatören tills ambulanspersonalen kommer till platsen.
            Du gör rätt – även ofullständig HLR räddar liv.
          </p>
        </div>
      </section>

    </div>
  );
}