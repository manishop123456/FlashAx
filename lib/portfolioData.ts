export interface ProjectImage {
  src: string;
  label: string;
  alt: string;
  filename: string;
  objectPosition?: string;
}

export interface PortfolioProjectData {
  id: string;
  number: string;
  selectorTitle: string;
  title: string;
  category: string;
  venue: string;
  descriptionParagraphs: string[];
  highlights: string[];
  images: ProjectImage[];
}

export const portfolioProjectsData: PortfolioProjectData[] = [
  {
    id: "cryptstock-quest-24",
    number: "01",
    selectorTitle: "01 — CRYPTSTOCK QUEST '24",
    title: "CRYPTSTOCK QUEST '24",
    category: "Trading Competition · College Event",
    venue: "Thakur College of Science and Commerce, Mumbai",
    descriptionParagraphs: [
      "CRYPTSTOCK QUEST '24 was an engaging online trading competition that brought together approximately 1,000 students from colleges across Mumbai.",
      "Flashax partnered with STOCKGRO as the official trading partner, with the collaboration personally managed and facilitated by the event organiser. The event also featured Umar Punjabi as the chief guest.",
    ],
    highlights: [
      "Approximately 1,000 student attendees.",
      "Official trading partnership with STOCKGRO.",
      "Chief guest: Umar Punjabi.",
      "Competition-led audience engagement.",
    ],
    images: [
      {
        src: "/images/our-work/cryptstock-quest-24/cover.webp",
        label: "Opening & Stage",
        alt: "CRYPTSTOCK QUEST '24 - Opening ceremony and stage setup at Thakur College",
        filename: "cover.webp",
      },
      {
        src: "/images/our-work/cryptstock-quest-24/audience.webp",
        label: "Student Audience",
        alt: "CRYPTSTOCK QUEST '24 - Over 1,000 participating student attendees",
        filename: "audience.webp",
      },
      {
        src: "/images/our-work/cryptstock-quest-24/chief-guest.webp",
        label: "Chief Guest",
        alt: "CRYPTSTOCK QUEST '24 - Chief Guest Umar Punjabi addressing the gathering",
        filename: "chief-guest.webp",
      },
      {
        src: "/images/our-work/cryptstock-quest-24/competition.webp",
        label: "Live Trading",
        alt: "CRYPTSTOCK QUEST '24 - Live online trading competition powered by STOCKGRO",
        filename: "competition.webp",
      },
      {
        src: "/images/our-work/cryptstock-quest-24/highlights.webp",
        label: "Event Highlights",
        alt: "CRYPTSTOCK QUEST '24 - Awards, felicitation, and key event highlights",
        filename: "highlights.webp",
      },
    ],
  },
  {
    id: "cryptstock-quest-25",
    number: "02",
    selectorTitle: "02 — CRYPTSTOCK QUEST '25",
    title: "CRYPTSTOCK QUEST '25",
    category: "Trading Competition · Event Production",
    venue: "Thakur College of Science and Commerce, Mumbai",
    descriptionParagraphs: [
      "CRYPTSTOCK QUEST '25 was built around one focus: engagement over just execution.",
      "With 120+ participants and 60+ teams, the event delivered a high-energy trading experience. From planning to on-ground coordination, each detail was designed to keep participants involved.",
      "Flashax appreciates the opportunity to execute the event at Thakur College and collaborate with the organising team.",
    ],
    highlights: [
      "120+ participants.",
      "60+ teams.",
      "High-energy trading experience.",
      "Planning and on-ground coordination.",
    ],
    images: [
      {
        src: "/images/our-work/cryptstock-quest-25/cover.webp",
        label: "Main Stage",
        alt: "CRYPTSTOCK QUEST '25 - Stage setup, LED visuals and presentation display",
        filename: "cover.webp",
      },
      {
        src: "/images/our-work/cryptstock-quest-25/audience.webp",
        label: "Audience & Energy",
        alt: "CRYPTSTOCK QUEST '25 - Active audience engagement and participant teams",
        filename: "audience.webp",
      },
      {
        src: "/images/our-work/cryptstock-quest-25/participants.webp",
        label: "Trading Teams",
        alt: "CRYPTSTOCK QUEST '25 - 60+ teams competing in real-time trading rounds",
        filename: "participants.webp",
      },
      {
        src: "/images/our-work/cryptstock-quest-25/stage.webp",
        label: "On-Ground Production",
        alt: "CRYPTSTOCK QUEST '25 - Production, acoustic engineering and visual lighting setup",
        filename: "stage.webp",
      },
      {
        src: "/images/our-work/cryptstock-quest-25/team.webp",
        label: "Team Coordination",
        alt: "CRYPTSTOCK QUEST '25 - Organising committee and Flashax execution team",
        filename: "team.webp",
      },
    ],
  },
  {
    id: "flashax-sitare",
    number: "03",
    selectorTitle: "03 — FLASHAX × SITARE",
    title: "FLASHAX × SITARE",
    category: "Event Production · Influencer Collaboration",
    venue: "St. Xavier's College",
    descriptionParagraphs: [
      "Flashax powered SITARE at St. Xavier's College, providing production support and coordinating an influencer collaboration with Umar Punjabi.",
      "The focus was on bringing the production elements, people, and activities together to create a high-energy event experience.",
    ],
    highlights: [
      "Event production support.",
      "Influencer collaboration with Umar Punjabi.",
      "Coordination of event requirements.",
      "Audience-focused event experience.",
    ],
    images: [
      {
        src: "/images/our-work/flashax-sitare/cover.webp",
        label: "SITARE Stage",
        alt: "FLASHAX × SITARE - Stage production setup at St. Xavier's College",
        filename: "cover.webp",
      },
      {
        src: "/images/our-work/flashax-sitare/stage-production.webp",
        label: "Audio-Visual Setup",
        alt: "FLASHAX × SITARE - Technical audio-visual setup and stage architecture",
        filename: "stage-production.webp",
      },
      {
        src: "/images/our-work/flashax-sitare/influencer-collaboration.webp",
        label: "Influencer Collaboration",
        alt: "FLASHAX × SITARE - Collaboration with Umar Punjabi at St. Xavier's",
        filename: "influencer-collaboration.webp",
      },
      {
        src: "/images/our-work/flashax-sitare/audience.webp",
        label: "Crowd Experience",
        alt: "FLASHAX × SITARE - Packed student audience enjoying the live performance",
        filename: "audience.webp",
      },
      {
        src: "/images/our-work/flashax-sitare/event-highlights.webp",
        label: "Key Moments",
        alt: "FLASHAX × SITARE - Unforgettable event highlights and celebration",
        filename: "event-highlights.webp",
      },
    ],
  },
];
