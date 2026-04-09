function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Top row */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="max-w-xs">
            <h3 className="text-lg font-bold tracking-tight">MedQuick</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Smarta vårdverktyg för bättre överblick över din hälsa och tryggare beslut i vardagen.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              ⚠ Inte medicinsk rådgivning. Kontakta alltid en läkare vid besvär.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Verktyg</p>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="transition hover:text-white">BMI-kalkylator</a></li>
                <li><a href="#" className="transition hover:text-white">Symptomguide</a></li>
                <li><a href="#" className="transition hover:text-white">Vaccinationsråd</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Om oss</p>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="transition hover:text-white">Om MedQuick</a></li>
                <li><a href="#" className="transition hover:text-white">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Juridiskt</p>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="transition hover:text-white">Integritetspolicy</a></li>
                <li><a href="#" className="transition hover:text-white">Användarvillkor</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} MedQuick. Alla rättigheter förbehållna.</p>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Alla tjänster är aktiva</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;