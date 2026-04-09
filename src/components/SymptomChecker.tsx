import { useState } from "react";

type Symptom = {
  label: string;
  icon: string;
};

const symptomList: Symptom[] = [
  { label: "Feber",        icon: "🌡" },
  { label: "Hosta",        icon: "💨" },
  { label: "Ont i halsen", icon: "🔴" },
  { label: "Huvudvärk",    icon: "🧠" },
  { label: "Trötthet",     icon: "😴" },
];

type Advice = {
  text: string;
  level: "info" | "warning" | "danger";
};

function getAdvice(symptoms: string[]): Advice {
  if (symptoms.length === 0) {
    return { text: "Välj ett eller flera symptom för att få vägledning.", level: "info" };
  }
  if (symptoms.includes("Feber") && symptoms.includes("Hosta")) {
    return { text: "Du har symptom som kan tyda på en infektion. Vila, drick vätska och kontakta vården om besvären förvärras.", level: "danger" };
  }
  if (symptoms.includes("Ont i halsen")) {
    return { text: "Ont i halsen går ofta över av sig själv. Vila och vätska kan hjälpa. Kontakta vården om det inte förbättras efter några dagar.", level: "warning" };
  }
  if (symptoms.includes("Huvudvärk") && symptoms.includes("Trötthet")) {
    return { text: "Dina symptom kan hänga ihop med stress, sömnbrist eller infektion. Följ utvecklingen och vila ordentligt.", level: "warning" };
  }
  return { text: "Vid kvarstående eller förvärrade symptom bör du kontakta vården för individuell bedömning.", level: "info" };
}

const adviceStyles = {
  info:    { bg: "bg-blue-50",  border: "border-blue-200",  icon: "ℹ",  text: "text-blue-900"  },
  warning: { bg: "bg-amber-50", border: "border-amber-200", icon: "⚠",  text: "text-amber-900" },
  danger:  { bg: "bg-red-50",   border: "border-red-200",   icon: "🚨", text: "text-red-900"   },
};

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState<string[]>([]);

  const toggle = (symptom: string) => {
    setSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const advice = getAdvice(symptoms);
  const style = adviceStyles[advice.level];

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md">

          <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-blue-400" />

          <div className="p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              Vägledning
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Symptomcheck
            </h2>
            <p className="mt-2 text-slate-500">
              Markera de symptom som stämmer in för att få snabb vägledning.
            </p>

            {symptoms.length > 0 && (
              <p className="mt-3 text-xs font-medium text-slate-400">
                {symptoms.length} symptom valda
                <button
                  onClick={() => setSymptoms([])}
                  className="ml-3 text-blue-500 underline-offset-2 hover:underline"
                >
                  Rensa
                </button>
              </p>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {symptomList.map((s) => {
                const checked = symptoms.includes(s.label);
                return (
                  <button
                    key={s.label}
                    onClick={() => toggle(s.label)}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-150 ${
                      checked
                        ? "border-blue-300 bg-blue-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className={`text-sm font-semibold ${checked ? "text-blue-700" : "text-slate-700"}`}>
                      {s.label}
                    </span>
                    {checked && (
                      <svg className="ml-auto" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            <div className={`mt-6 rounded-2xl border p-5 ${style.bg} ${style.border}`}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-base">{style.icon}</span>
                <div>
                  <p className={`text-sm font-semibold ${style.text}`}>Vägledning</p>
                  <p className={`mt-1 text-sm leading-relaxed ${style.text} opacity-80`}>
                    {advice.text}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              ⚠ Detta är inte medicinsk rådgivning. Kontakta alltid läkare vid allvarliga besvär.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SymptomChecker;