/**
 * Placeholder marketing content for KarateCorner.
 * Swap these arrays for CMS data when the site goes live.
 */

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Instructors", href: "#instructors" },
  { label: "Awards", href: "#awards" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
] as const;

export type Program = {
  name: string;
  tagline: string;
  description: string;
  level: string;
  icon: "fist" | "grapple" | "shin" | "kids" | "belt" | "conditioning";
};

export const PROGRAMS: Program[] = [
  {
    name: "Traditional Karate",
    tagline: "Shotokan lineage",
    description:
      "Kata, kihon and kumite drilled the classical way. The backbone of every belt we award.",
    level: "All levels",
    icon: "belt",
  },
  {
    name: "Muay Thai",
    tagline: "The art of eight limbs",
    description:
      "Clinch work, elbows, knees and the kind of pad rounds that rebuild your engine from scratch.",
    level: "Beginner → Fighter",
    icon: "shin",
  },
  {
    name: "Brazilian Jiu-Jitsu",
    tagline: "Gi & no-gi",
    description:
      "Positional sparring, guard systems and submission chains taught by black-belt coaches.",
    level: "All levels",
    icon: "grapple",
  },
  {
    name: "Kickboxing",
    tagline: "Striking + conditioning",
    description:
      "Technical boxing married to low kicks, run at a tempo that burns while it teaches.",
    level: "Beginner friendly",
    icon: "fist",
  },
  {
    name: "Kids Classes",
    tagline: "Ages 5–13",
    description:
      "Discipline, focus and anti-bullying skills in a class that still feels like play.",
    level: "Ages 5–13",
    icon: "kids",
  },
  {
    name: "Fight Conditioning",
    tagline: "Strength for combat",
    description:
      "Sled pushes, kettlebells and rounds on the bag. Built for competitors, open to everyone.",
    level: "Intermediate",
    icon: "conditioning",
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
    name: "Marcus Ren",
    rank: "6th Dan Black Belt",
    discipline: "Head Coach — Karate",
    bio: "Three-time national kumite champion. Founded KarateCorner in 2009 after a decade on the international circuit.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ana Duarte",
    rank: "BJJ Black Belt",
    discipline: "Head Coach — Jiu-Jitsu",
    bio: "Pan-Am medalist with a guard nobody enjoys passing. Leads the competition team and the women's program.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kofi Mensah",
    rank: "Kru — Muay Thai",
    discipline: "Head Coach — Muay Thai",
    bio: "Trained eight years in Bangkok. Holds pads like a metronome and can spot a lazy hip from across the mat.",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sofia Lindqvist",
    rank: "3rd Dan Black Belt",
    discipline: "Youth Program Director",
    bio: "Former junior world team coach. Turns restless eight-year-olds into focused, respectful martial artists.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
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
    title: "National Team Champions",
    detail: "First overall at the National Karate Championships — 14 medals across five divisions.",
    badge: "1st",
  },
  {
    year: "2024",
    title: "Gym of the Year",
    detail: "Named Regional Martial Arts Gym of the Year by the State Combat Sports Council.",
    badge: "★",
  },
  {
    year: "2023",
    title: "Pan-Am Podium",
    detail: "Two black-belt medalists at the Pan-American Jiu-Jitsu Championship.",
    badge: "2×",
  },
  {
    year: "2022",
    title: "Youth Program Accreditation",
    detail: "Full SafeSport accreditation and a Gold rating for our under-13 curriculum.",
    badge: "A+",
  },
  {
    year: "2021",
    title: "Muay Thai Title Belt",
    detail: "Kofi Mensah's fight team captured its first professional regional title belt.",
    badge: "🏆",
  },
  {
    year: "2019",
    title: "10 Years on the Mat",
    detail: "A decade of training, and the 500th black belt promoted through our program.",
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
      { time: "06:30", name: "Fight Conditioning" },
      { time: "17:30", name: "Kids Karate" },
      { time: "19:00", name: "Muay Thai" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "07:00", name: "BJJ Fundamentals" },
      { time: "18:00", name: "Traditional Karate" },
      { time: "19:30", name: "Kickboxing" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "06:30", name: "Fight Conditioning" },
      { time: "17:30", name: "Kids Karate" },
      { time: "19:00", name: "BJJ No-Gi" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { time: "07:00", name: "Muay Thai" },
      { time: "18:00", name: "Traditional Karate" },
      { time: "19:30", name: "Competition Team" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { time: "17:30", name: "Kids Karate" },
      { time: "19:00", name: "Open Sparring" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "09:00", name: "All-Levels BJJ" },
      { time: "11:00", name: "Kickboxing" },
    ],
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
    name: "Foundation",
    price: "$79",
    cadence: "per month",
    summary: "One discipline, twice a week. The right place to start.",
    features: ["2 classes per week", "One discipline", "Free uniform", "Open mat access"],
  },
  {
    name: "Unlimited",
    price: "$129",
    cadence: "per month",
    summary: "Every class on the timetable, every day we are open.",
    features: [
      "Unlimited classes",
      "All disciplines",
      "Free uniform + gloves",
      "Open mat & conditioning",
      "Quarterly grading included",
    ],
    featured: true,
  },
  {
    name: "Competitor",
    price: "$189",
    cadence: "per month",
    summary: "For athletes chasing the podium. Invitation preferred.",
    features: [
      "Everything in Unlimited",
      "Competition team training",
      "1× private coaching per month",
      "Corner support at events",
      "Strength programming",
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
      "I walked in unable to hold a plank and left my first grading with a belt I actually earned. The coaching here is relentless in the best way.",
    name: "Priya Nair",
    role: "Blue belt, 2 years training",
  },
  {
    quote:
      "My son was the quietest kid in his class. Six months at KarateCorner and he is the one helping the new starters find their spot on the mat.",
    name: "Daniel Okafor",
    role: "Parent, Kids Program",
  },
  {
    quote:
      "The competition team treats preparation like a profession. I have cornered at three tournaments and never once felt underprepared.",
    name: "Elena Vasquez",
    role: "Purple belt, Competition Team",
  },
  {
    quote:
      "Forty-two years old and in the best shape of my life. Nobody here cares how old you are, only whether you showed up.",
    name: "Tom Bradley",
    role: "Muay Thai, 3 years training",
  },
];
