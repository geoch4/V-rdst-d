import { useState } from "react";

const navItems = [
  { label: "Hem",      target: "hero"      },
  { label: "Verktyg",  target: "tools"     },
  { label: "Om oss",   target: "carecards" },
  { label: "Kontakt",  target: "footer"    },
];

function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/8 bg-slate-900/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <button
          onClick={() => handleScroll("hero")}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white transition hover:opacity-80"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold">M</span>
          MedQuick
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleScroll(item.target)}
                onMouseEnter={() => setActive(item.label)}
                onMouseLeave={() => setActive(null)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  active === item.label
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleScroll("tools")}
          className="hidden rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98] sm:block"
        >
          Kom igång
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col gap-1.5 p-1 sm:hidden"
          aria-label="Öppna meny"
        >
          <span className={`block h-0.5 w-5 bg-white transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/8 bg-slate-900 px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleScroll(item.target)}
                  className="w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleScroll("tools")}
            className="mt-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Kom igång
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;