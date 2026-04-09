import { useParams, Link } from "react-router-dom";
import { careCards } from "../Data/careCards";

function CareCardDetail() {
  const { id } = useParams();
  const card = careCards.find((item) => item.id === Number(id));

  if (!card) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-6 py-16">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4m0 4h.01"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Vårdkortet hittades inte</h1>
          <p className="mt-2 text-slate-500">Det kortet du letar efter finns inte längre.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Tillbaka till startsidan
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-2xl">

        {/* Back link */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition hover:text-slate-700"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Tillbaka
        </Link>

        {/* Main card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-blue-400" />

          <div className="p-8">
            {/* Category badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5"/>
              </svg>
              {card.category}
            </span>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900">
              {card.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              {card.description}
            </p>

            {/* Divider */}
            <div className="my-8 border-t border-slate-100" />

            {/* Details block */}
            <div className="rounded-2xl bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Mer information
                </h2>
              </div>
              <p className="leading-7 text-slate-700">{card.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareCardDetail;