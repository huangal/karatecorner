/**
 * Placeholder marketing content for KarateCorner.
 * Swap these arrays for CMS data when the site goes live.
 */

export const NAV_LINKS = [
  { label: "The Dojo", href: "#about" },
  { label: "Disciplines", href: "#programs" },
  { label: "Instructors", href: "#instructors" },
  { label: "Milestones", href: "#awards" },
  { label: "Schedule", href: "#schedule" },
  { label: "Visit", href: "#contact" },
] as const;

export type Pillar = {
  kanji: string;
  romaji: string;
  title: string;
  body: string;
};

/** The three ideas the dojo kun is taught around here. */
export const PILLARS: Pillar[] = [
  {
    kanji: "礼",
    romaji: "Rei",
    title: "Respect",
    body: "We bow entering the mat and bow leaving it. Rank decides the order of the line, never the worth of the person standing in it.",
  },
  {
    kanji: "忍",
    romaji: "Nin",
    title: "Perseverance",
    body: "Technique is earned in the thousandth repetition, not the tenth. The student who keeps returning always overtakes the student with talent.",
  },
  {
    kanji: "和",
    romaji: "Wa",
    title: "Harmony",
    body: "Aikido taught us to blend rather than collide. We train hard without training against each other — nobody here gets hurt proving a point.",
  },
];

export type Program = {
  name: string;
  tagline: string;
  description: string;
  level: string;
  icon: "karate" | "aikido" | "shaolin" | "kids" | "foundations" | "qigong";
};

export const PROGRAMS: Program[] = [
  {
    name: "Shotokan Karate",
    tagline: "松濤館 · Empty hand",
    description:
      "Kihon, kata and controlled kumite in the JKA tradition. Deep stances, long lines, and the patient repetition every grading is built on.",
    level: "All levels",
    icon: "karate",
  },
  {
    name: "Aikido",
    tagline: "合気道 · The way of harmony",
    description:
      "Irimi and tenkan, joint locks and throws — and just as much time spent on ukemi, so that falling well stops being frightening.",
    level: "All levels",
    icon: "aikido",
  },
  {
    name: "Shaolin Kung Fu",
    tagline: "少林功夫 · Northern forms",
    description:
      "Traditional taolu, stance training and staff work, taught alongside the qigong that has always travelled with them.",
    level: "All levels",
    icon: "shaolin",
  },
  {
    name: "Kids Dojo",
    tagline: "Ages 5–13",
    description:
      "Karate fundamentals wrapped in focus games, mat etiquette and anti-bullying skills. Belts are earned, never handed out.",
    level: "Ages 5–13",
    icon: "kids",
  },
  {
    name: "Beginners' Course",
    tagline: "Your first eight weeks",
    description:
      "A closed eight-week intake that starts everyone on the same day, in the same row. No prior training, no fitness test, no rush.",
    level: "Absolute beginners",
    icon: "foundations",
  },
  {
    name: "Qigong & Zazen",
    tagline: "Breath and stillness",
    description:
      "Standing qigong, mobility and seated meditation. Open to members and non-members, and popular with people who never intend to spar.",
    level: "Open to everyone",
    icon: "qigong",
  },
];

export type Instructor = {
  name: string;
  rank: string;
  discipline: string;
  bio: string;
  image: string;
};

export const INSTRUCTORS: Instructor[] = [
  {
    name: "Hiroshi Tanaka",
    rank: "Shihan · 7th Dan",
    discipline: "Chief Instructor — Shotokan",
    bio: "Trained under the JKA in Tokyo for eleven years before opening KarateCorner in 2009. Still teaches the Tuesday beginners' class himself.",
    image: "/instructors/tanaka.jpg",
  },
  {
    name: "Rafael Marchetti",
    rank: "Sensei · 4th Dan Aikikai",
    discipline: "Head Instructor — Aikido & Kids Dojo",
    bio: "Certified through Hombu Dojo and twenty years on the mat. Teaches ukemi first, on the principle that confidence starts with landing safely — which is also why he runs the children's classes.",
    image: "/instructors/marchetti.jpg",
  },
  {
    name: "Chen Wei",
    rank: "Shifu · 32nd generation",
    discipline: "Head Instructor — Shaolin Kung Fu",
    bio: "Ordained in the Songshan lineage and a decade of temple training behind him. Runs the forms class and the Sunday qigong hour.",
    image: "/instructors/chen.jpg",
  },
];

export type Achievement = {
  year: string;
  title: string;
  detail: string;
  badge: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: "2025",
    title: "National Kata Championships",
    detail:
      "Team gold in the senior kata division, with eleven students placing across the junior and senior draws.",
    badge: "1st",
  },
  {
    year: "2024",
    title: "Dojo of the Year",
    detail:
      "Named Regional Dojo of the Year by the State Traditional Martial Arts Council.",
    badge: "★",
  },
  {
    year: "2023",
    title: "Aikikai Affiliation",
    detail:
      "Formally recognised by Hombu Dojo, so grades awarded here are now registered internationally.",
    badge: "合",
  },
  {
    year: "2022",
    title: "Youth Program Accreditation",
    detail:
      "Full SafeSport accreditation and a Gold rating for the under-13 curriculum.",
    badge: "A+",
  },
  {
    year: "2021",
    title: "Songshan Lineage Certified",
    detail:
      "Shifu Chen Wei's 32nd-generation transmission formally recognised, bringing Shaolin forms into the dojo.",
    badge: "少",
  },
  {
    year: "2019",
    title: "Ten Years on the Mat",
    detail:
      "A decade of training, and the 200th student to grade to shodan under this roof.",
    badge: "10",
  },
];

export type ClassSlot = {
  day: string;
  sessions: { time: string; name: string }[];
};

export const SCHEDULE: ClassSlot[] = [
  {
    day: "Monday",
    sessions: [
      { time: "06:30", name: "Qigong & Mobility" },
      { time: "17:30", name: "Kids Dojo" },
      { time: "19:00", name: "Shotokan Karate" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "07:00", name: "Shaolin Forms" },
      { time: "18:00", name: "Beginners' Course" },
      { time: "19:30", name: "Aikido" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "06:30", name: "Qigong & Mobility" },
      { time: "17:30", name: "Kids Dojo" },
      { time: "19:00", name: "Shotokan Karate" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { time: "07:00", name: "Aikido" },
      { time: "18:00", name: "Beginners' Course" },
      { time: "19:30", name: "Shaolin Kung Fu" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "17:30", name: "Kids Dojo" },
      { time: "19:00", name: "Kata & Grading Practice" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "09:00", name: "All-Styles Open Mat" },
      { time: "11:00", name: "Shotokan Karate" },
    ],
  },
  {
    day: "Sunday",
    sessions: [{ time: "10:00", name: "Qigong & Zazen" }],
  },
];

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const TIERS: Tier[] = [
  {
    name: "White Belt",
    price: "$79",
    cadence: "per month",
    summary: "One discipline, twice a week. Where almost everyone starts.",
    features: [
      "2 classes per week",
      "One discipline",
      "Beginners' course included",
      "Free gi on your first grading",
    ],
  },
  {
    name: "Full Dojo",
    price: "$129",
    cadence: "per month",
    summary: "Every class on the timetable — Karate, Aikido and Kung Fu.",
    featured: true,
    features: [
      "Unlimited classes",
      "All three disciplines",
      "Free gi and belt",
      "Open mat and qigong",
      "Grading fees included",
    ],
  },
  {
    name: "Family",
    price: "$199",
    cadence: "per month",
    summary: "Up to four people under one roof, training on the same mat.",
    features: [
      "Unlimited for 4 family members",
      "Kids Dojo included",
      "Parent-and-child class",
      "Free gi for every member",
      "Grading fees included",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I had never done a martial art and assumed I would be the worst person in the room. I was — for about three weeks. Nobody once made me feel it.",
    name: "Priya Nair",
    role: "Green belt, Shotokan — 2 years",
  },
  {
    quote:
      "My son was the quietest kid in his class. Six months in the Kids Dojo and he is the one showing new starters where to line up.",
    name: "Daniel Okafor",
    role: "Parent, Kids Dojo",
  },
  {
    quote:
      "I came for the Aikido and stayed for the falling. Learning to hit the mat without fear changed how I move through everything else.",
    name: "Elena Vasquez",
    role: "Aikido — 4 years",
  },
  {
    quote:
      "Fifty-eight years old, two replaced knees, and Shifu Chen adapted every form for me without ever making it a special case.",
    name: "Tom Bradley",
    role: "Shaolin forms & qigong — 3 years",
  },
];
