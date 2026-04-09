export type CareCard = {
  id: number;
  title: string;
  description: string;
  category: string;
  details: string;
  icon: string;
};

export const careCards: CareCard[] = [
  {
    id: 1,
    title: "BMI-kontroll",
    description: "Beräkna ditt BMI snabbt och enkelt för en första hälsobedömning.",
    category: "Hälsa",
    icon: "⚖",
    details: "BMI är ett mått som kan ge en första indikation på om din vikt ligger inom ett normalt spann i förhållande till din längd. Tänk på att BMI inte tar hänsyn till muskelmassa eller kroppssammansättning.",
  },
  {
    id: 2,
    title: "Vaccinationsråd",
    description: "Vanliga frågor och svar om vaccinationer och rekommendationer.",
    category: "Vaccin",
    icon: "💉",
    details: "Vaccinationer skyddar mot flera allvarliga sjukdomar. Rekommendationer kan variera beroende på ålder, hälsotillstånd och resmål. Kontakta din vårdcentral för personliga råd.",
  },
  {
    id: 3,
    title: "Blodtrycksguide",
    description: "Lär dig mer om blodtryck, egenvård och när du bör söka hjälp.",
    category: "Hjärta",
    icon: "❤",
    details: "Högt blodtryck märks ofta inte direkt men kan öka risken för hjärt-kärlsjukdom. Regelbundna kontroller är viktiga, särskilt om du har ärftlig belastning.",
  },
  {
    id: 4,
    title: "Sömnhälsa",
    description: "Tips och råd för bättre sömnkvalitet och återhämtning.",
    category: "Livsstil",
    icon: "🌙",
    details: "Vuxna behöver generellt 7–9 timmars sömn per natt. Dålig sömn kan påverka immunförsvar, koncentration och humör negativt över tid.",
  },
  {
    id: 5,
    title: "Stresshantering",
    description: "Enkla tekniker för att hantera vardagsstress och öka välmåendet.",
    category: "Mental hälsa",
    icon: "🧘",
    details: "Kronisk stress kan påverka både kropp och sinne. Andningsövningar, regelbunden motion och god sömnhygien är bevisade metoder för stressreduktion.",
  },
  {
    id: 6,
    title: "Kostråd",
    description: "Grundläggande råd om balanserad kost för bättre hälsa.",
    category: "Nutrition",
    icon: "🥦",
    details: "En varierad kost rik på grönsaker, frukt, fullkorn och magra proteiner ger kroppen de näringsämnen den behöver. Begränsa socker, salt och processad mat.",
  },
];