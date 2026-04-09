function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-6 py-32">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600 opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500 opacity-5 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">

        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
          Gratis · Ingen inloggning krävs
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Välkommen till{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            MedQuick
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          Smarta vårdverktyg som hjälper dig att få bättre överblick över din
          hälsa och fatta tryggare beslut i vardagen.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]">
            Kom igång
          </button>
          <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
            Läs mer
          </button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Ingen registrering
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            100% gratis
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Fungerar på mobil
          </span>
        </div>

      </div>
    </section>
  );
}

export default Hero;