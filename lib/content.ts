/**
 * Shared homepage / marketing content.
 * Only statements supported by the product brief belong here — no invented
 * clients, statistics, awards, timelines or delivery promises.
 */

export const capabilities = [
  {
    key: "plan",
    title: "PLAN",
    text: "Strategy, concepts and event planning.",
    services: [
      { label: "Event Management", slug: "event-management" },
      { label: "CSR Programs", slug: "csr-programs" },
    ],
  },
  {
    key: "create",
    title: "CREATE",
    text: "Creative concepts, branding and corporate gifts.",
    services: [
      { label: "Brand Activation", slug: "brand-activation" },
      { label: "Corporate Gifting", slug: "corporate-gifting" },
    ],
  },
  {
    key: "produce",
    title: "PRODUCE",
    text: "Production resources and technical coordination.",
    services: [
      { label: "Event Production", slug: "event-production" },
    ],
  },
  {
    key: "amplify",
    title: "AMPLIFY",
    text: "Campus campaigns, digital content and promotions.",
    services: [
      { label: "Campus Marketing", slug: "campus-marketing" },
      { label: "Digital Marketing", slug: "digital-marketing" },
    ],
  },
] as const;

export const principles = [
  {
    title: "Built Around Your Goals",
    text: "We begin by understanding your objectives, audience, budget and timeline.",
  },
  {
    title: "One Coordinated Team",
    text: "We coordinate the relevant planning, creative work, production and specialist partners required for the agreed project scope.",
  },
  {
    title: "Flexible Services",
    text: "Clients can enquire about individual services or a connected project covering multiple service divisions.",
  },
  {
    title: "Clear Communication",
    text: "A structured approach to responsibilities, timelines and project updates helps clients understand the delivery process.",
  },
] as const;

export const audiences = [
  {
    key: "corporates",
    title: "Corporates",
    text: "Conferences, annual days, product launches, employee engagement and leadership events.",
    services: [
      { label: "Event Management", slug: "event-management" },
      { label: "Event Production", slug: "event-production" },
    ],
    href: "/services/event-management",
  },
  {
    key: "colleges",
    title: "Colleges",
    text: "College festivals, cultural events, sponsorship programmes and campus partnerships.",
    services: [
      { label: "Campus Marketing", slug: "campus-marketing" },
      { label: "Event Management", slug: "event-management" },
    ],
    href: "/services/campus-marketing",
  },
  {
    key: "brands",
    title: "Brands",
    text: "Activations, experiential campaigns, roadshows, sampling and launch moments.",
    services: [
      { label: "Brand Activation", slug: "brand-activation" },
      { label: "Event Production", slug: "event-production" },
    ],
    href: "/services/brand-activation",
  },
  {
    key: "organisers",
    title: "Event organisers",
    text: "Production support, manpower, technical coordination and operations for events you already lead.",
    services: [
      { label: "Event Production", slug: "event-production" },
    ],
    href: "/services/event-production",
  },
  {
    key: "ngos",
    title: "Community & Institutions",
    text: "CSR Programs, educational workshops, financial literacy sessions and community outreach initiatives.",
    services: [
      { label: "CSR Programs", slug: "csr-programs" },
      { label: "Digital Marketing", slug: "digital-marketing" },
    ],
    href: "/services/csr-programs",
  },
] as const;

export const processSteps = [
  {
    title: "Discover",
    text: "Understand the objective, the audience and what success looks like.",
    points: ["Brief and objectives", "Audience and venue context", "Scope and budget range"],
  },
  {
    title: "Strategise",
    text: "Shape the concept, the approach and the plan.",
    points: ["Creative direction", "Production planning", "Timeline and responsibilities"],
  },
  {
    title: "Coordinate",
    text: "Line up teams, vendors and logistics.",
    points: ["Vendors and partners", "Venue and permissions", "Schedules and assets"],
  },
  {
    title: "Execute",
    text: "Deliver the experience on the ground.",
    points: ["On-site direction", "Technical checks", "Guest and audience flow"],
  },
  {
    title: "Review",
    text: "Look back at what worked and what to carry forward.",
    points: ["Outcome review against the brief", "Feedback and learnings", "Wrap-up and handover"],
  },
] as const;

export const faqs = [
  {
    question: "What services does Flashax Event Solutions offer?",
    answer:
      "We offer seven services: Event Management, Event Production, Brand Activation, Campus Marketing, Digital Marketing, Corporate Gifting and CSR Programs.",
  },
  {
    question: "Can I hire Flashax for just one service?",
    answer:
      "Yes. You can enquire about an individual service or combine multiple services for a larger project.",
  },
  {
    question: "Do you work with both corporates and colleges?",
    answer:
      "Yes. Our services are designed for businesses, brands, colleges, educational institutions and event partners.",
  },
  {
    question: "Do you provide event equipment and manpower directly?",
    answer:
      "Requirements depend on the project. Where necessary, we coordinate with suitable specialist suppliers and service partners for equipment, fabrication, technical production and manpower.",
  },
  {
    question: "How do I get a quotation?",
    answer:
      "Share your requirements, location, tentative date and budget range through our enquiry form or WhatsApp. We will review the brief and discuss the next steps.",
  },
  {
    question: "Where is Flashax based?",
    answer:
      "Flashax Event Solutions is based in Mumbai, Maharashtra.",
  },
  {
    question: "Can you customise a solution to my budget?",
    answer:
      "We can discuss your objectives and budget and propose a suitable scope based on feasibility and resource requirements.",
  },
] as const;

export const deliveryStandards = [
  {
    num: "01",
    title: "Single-Source Accountability",
    text: "Direct leadership from concept to on-site execution, ensuring one transparent contact for your entire project.",
  },
  {
    num: "02",
    title: "Itemised & Transparent Scoping",
    text: "Milestone-based delivery schedules and honest cost breakdowns without hidden vendor commissions or inflated costs.",
  },
  {
    num: "03",
    title: "Vetted Specialist Partners",
    text: "Core strategy and production managed in-house, backed by vetted specialist vendors for heavy fabrication and technical rigging.",
  },
  {
    num: "04",
    title: "Verified Outcome Orientation",
    text: "Every brief is shaped around defined engagement targets, strict safety standards, and verified on-ground results.",
  },
] as const;

