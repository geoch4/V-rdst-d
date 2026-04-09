import { useState } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Kontrollera medvetande",
    color: "from-indigo-500 to-blue-400",
    borderColor: "border-indigo-500/30",
    glowColor: "shadow-indigo-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    items: [
      { label: "Prata med personen", detail: "Ropa och skaka försiktigt i axlarna." },
      { label: "Ingen reaktion?", detail: "Utgå från att personen är medvetslös." },
    ],
  },
  {
    number: "02",
    title: "Kontrollera andningen",
    color: "from-cyan-500 to-teal-400",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8" />
        <path d="M12 4c2 2 3 5 3 8s-1 6-3 8" />
      </svg>
    ),
    items: [
      { label: "Öppna luftvägen", detail: "Lägg en hand på pannan, böj huvudet lätt bakåt och lyft hakan." },
      { label: "Se, lyssna och känn", detail: "Kontrollera om personen andas normalt." },
      { label: "Andas normalt?", detail: "Då ska personen läggas i stabilt sidoläge." },
    ],
    highlight: true,
  },
  {
    number: "03",
    title: "Placera närmaste armen rätt",
    color: "from-violet-500 to-fuchsia-400",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 6l4 4 4-4" />
        <path d="M12 10v10" />
      </svg>
    ),
    items: [
      { label: "Lägg armen närmast dig utåt", detail: "Placera armen i ungefär 90 graders vinkel från kroppen." },
      { label: "Handflatan uppåt", detail: "Det hjälper kroppen att bli stabil när personen rullas över." },
    ],
  },
  {
    number: "04",
    title: "Placera andra handen mot kinden",
    color: "from-pink-500 to-rose-400",
    borderColor: "border-pink-500/30",
    glowColor: "shadow-pink-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 12c0-3 2-5 5-5s5 2 5 5-2 5-5 5" />
        <path d="M4 20c1.5-2.5 4-4 8-4" />
      </svg>
    ),
    items: [
      { label: "Ta den bortre handen", detail: "För handryggen mot kinden närmast dig." },
      { label: "Håll handen på plats", detail: "Låt handen ligga kvar mot kinden när du vänder personen." },
    ],
  },
  {
    number: "05",
    title: "Böj det bortre benet",
    color: "from-amber-500 to-orange-400",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 4v6l4 4" />
        <path d="M12 14l4 6" />
      </svg>
    ),
    items: [
      { label: "Greppa knät", detail: "Böj det ben som är längst bort från dig." },
      { label: "Ha foten i golvet", detail: "Det gör det lättare att rulla personen mot dig." },
    ],
  },
  {
    number: "06",
    title: "Rulla personen mot dig",
    color: "from-emerald-500 to-green-400",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12h16" />
        <path d="M14 6l6 6-6 6" />
      </svg>
    ),
    items: [
      { label: "Dra i knät", detail: "Rulla personen försiktigt mot dig." },
      { label: "Håll handen mot kinden", detail: "Det hjälper till att hålla huvudet stabilt." },
      { label: "Vänd personen mot dig", detail: "1177 betonar att det viktiga är att personen vänds mot dig." },
    ],
  },
  {
    number: "07",
    title: "Säkra luftvägen",
    color: "from-red-500 to-orange-400",
    borderColor: "border-red-500/30",
    glowColor: "shadow-red-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20" />
        <path d="M7 7h10" />
        <path d="M7 17h10" />
      </svg>
    ),
    items: [
      { label: "Böj huvudet lätt bakåt", detail: "Hakan ska hållas fri så att luftvägen är öppen." },
      { label: "Munnen nedåt", detail: "Det minskar risken att kräkning blockerar luftvägen." },
      { label: "Kontrollera andningen igen", detail: "Se till att personen fortfarande andas normalt." },
    ],
  },
  {
    number: "08",
    title: "Larma och stanna kvar",
    color: "from-slate-500 to-slate-400",
    borderColor: "border-slate-500/30",
    glowColor: "shadow-slate-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    items: [
      { label: "Ring 112", detail: "En medvetslös person som andas normalt behöver ändå akut hjälp." },
      { label: "Fortsätt övervaka", detail: "Kontrollera regelbundet att personen fortfarande andas normalt." },
      { label: "Om andningen upphör", detail: "Ring 112 omedelbart och starta HLR." },
    ],
  },
];

const stats = [
  { value: "112", label: "Larma alltid" },
  { value: "Andas", label: "Normalt" },
  { value: "På sidan", label: "Mot dig" },
  { value: "Öppen", label: "Luftväg" },
];

export default function RecoveryPositionPage() {
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
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500 opacity-10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-300" />
            Medvetslös men andas
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Stabilt sidoläge
            <span className="ml-3 bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              steg för steg
            </span>
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Använd stabilt sidoläge när personen är medvetslös men andas normalt.
            Målet är att hålla luftvägen öppen tills hjälp kommer.
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
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Stabilt sidoläge – steg för steg</h2>

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
                        <span className="text-lg font-black text-cyan-300">
                          Bara om personen andas normalt
                        </span>
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
        <div className="mx-auto max-w-3xl rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">Viktigt</p>
          <p className="mt-3 text-lg font-medium leading-relaxed text-white">
            Om personen inte andas normalt ska du inte lägga personen i sidoläge.
            Då ska du ringa 112 och starta HLR direkt.
          </p>
        </div>
      </section>
    </div>
  );
}