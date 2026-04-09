import { Link } from "react-router-dom";

const careCards = [
  {
    title: "HLR Vuxen",
    description: "Steg-för-steg guide för hjärt-lungräddning på vuxna",
    link: "/hlr",
  },
  {
    title: "Barn HLR", // 👈 NYTT KORT
    description: "Lär dig livräddande åtgärder för barn",
    link: "/hlr-child",
  },
  {
    title: "Luftvägsstopp",
    description: "Så agerar du vid kvävning",
    link: "/luftvag",
  },
];

const CareCardSection = () => {
  return (
    <section className="px-6 py-12 bg-slate-50">
      <h2 className="text-2xl font-bold text-center mb-8">
        Akuta vårdsituationer
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {careCards.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition">
              {card.title}
            </h4>

            <p className="mt-2 text-slate-600 text-sm">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CareCardSection;