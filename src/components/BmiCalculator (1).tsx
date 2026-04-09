type BmiCalculatorProps = {
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  calculateBMI: () => void;
  bmi: number | null;
  bmiLabel: string;
};

type BmiZone = {
  label: string;
  range: string;
  color: string;
  bg: string;
  min: number;
  max: number;
};

const BMI_ZONES: BmiZone[] = [
  { label: "Undervikt",   range: "< 18.5", color: "#3b82f6", bg: "#eff6ff", min: 0,    max: 18.5 },
  { label: "Normalvikt",  range: "18.5–25", color: "#22c55e", bg: "#f0fdf4", min: 18.5, max: 25   },
  { label: "Övervikt",    range: "25–30",  color: "#f59e0b", bg: "#fffbeb", min: 25,   max: 30   },
  { label: "Fetma",       range: "> 30",   color: "#ef4444", bg: "#fef2f2", min: 30,   max: 50   },
];

function getZone(bmi: number): BmiZone {
  return BMI_ZONES.find((z) => bmi >= z.min && bmi < z.max) ?? BMI_ZONES[3];
}

// Clamp BMI to 0–50 range and return % position on scale
function bmiToPercent(bmi: number): number {
  const clamped = Math.max(10, Math.min(45, bmi));
  return ((clamped - 10) / 35) * 100;
}

function BmiCalculator({
  weight,
  setWeight,
  height,
  setHeight,
  calculateBMI,
  bmi,
  bmiLabel,
}: BmiCalculatorProps) {
  const zone = bmi !== null ? getZone(bmi) : null;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md">

          {/* Colored top bar */}
          <div
            className="h-1.5 w-full transition-all duration-500"
            style={{ background: zone ? zone.color : "#e2e8f0" }}
          />

          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                Hälsoberäkning
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                BMI-kalkylator
              </h2>
              <p className="mt-2 text-slate-500">
                Fyll i din vikt och längd för att beräkna ditt Body Mass Index.
              </p>
            </div>

            {/* Inputs */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group relative">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Vikt
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                    kg
                  </span>
                </div>
              </div>

              <div className="group relative">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Längd
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                    cm
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={calculateBMI}
              className="mt-5 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
            >
              Beräkna BMI
            </button>

            {/* Result */}
            {bmi !== null && zone && (
              <div
                className="mt-6 rounded-2xl p-6 transition-all duration-300"
                style={{ background: zone.bg }}
              >
                {/* Score + label */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Ditt BMI</p>
                    <p
                      className="mt-0.5 text-5xl font-bold tabular-nums"
                      style={{ color: zone.color }}
                    >
                      {bmi}
                    </p>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-sm font-semibold"
                    style={{ background: zone.color + "1a", color: zone.color }}
                  >
                    {bmiLabel}
                  </span>
                </div>

                {/* Visual scale */}
                <div className="mt-5">
                  <div className="relative h-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-400">
                    {/* Needle */}
                    <div
                      className="absolute top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-white shadow-md transition-all duration-500"
                      style={{ left: `${bmiToPercent(bmi)}%` }}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between text-xs text-slate-400">
                    <span>10</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>45+</span>
                  </div>
                </div>

                {/* Zone legend */}
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {BMI_ZONES.map((z) => (
                    <div
                      key={z.label}
                      className="rounded-lg px-3 py-2 text-center transition-all"
                      style={{
                        background: z.label === zone.label ? z.color + "22" : "transparent",
                        border: `1px solid ${z.label === zone.label ? z.color + "55" : "transparent"}`,
                      }}
                    >
                      <p className="text-xs font-semibold" style={{ color: z.color }}>
                        {z.label}
                      </p>
                      <p className="text-xs text-slate-400">{z.range}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BmiCalculator;
