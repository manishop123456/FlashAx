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
      { label: "CSR Initiatives", slug: "csr-initiatives" },
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
    text: "CSR Initiatives, educational workshops, financial literacy sessions and community outreach initiatives.",
    services: [
      { label: "CSR Initiatives", slug: "csr-initiatives" },
      { label: "Digital Marketing", slug: "digital-marketing" },
    ],
    href: "/services/csr-initiatives",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "UNDERSTAND",
    text: "We discuss your goals, audience, budget, timeline, location and expectations to understand what your project needs.",
  },
  {
    number: "02",
    title: "PLAN",
    text: "We develop a proposed approach covering the scope of work, key activities, estimated costs, timelines and resources.",
  },
  {
    number: "03",
    title: "COORDINATE",
    text: "Once the plan is approved, we coordinate the relevant suppliers, partners, materials, people and other project requirements.",
  },
  {
    number: "04",
    title: "EXECUTE",
    text: "We coordinate the agreed activities and manage on-ground or campaign-related requirements according to the project scope.",
  },
  {
    number: "05",
    title: "REVIEW",
    text: "We review the completed work, gather feedback where appropriate and identify opportunities to improve future projects.",
  },
] as const;

export const faqs = [
  {
    question: "What services does Flashax Event Solutions offer?",
    answer:
      "We offer seven services: Event Management, Event Production, Brand Activation, Campus Marketing, Digital Marketing, CSR Initiatives and Corporate Gifting.",
  },
  {
    question: "Can I hire Flashax for an individual service or only combined projects?",
    answer:
      "Yes. You can enquire about an individual service or combine multiple services into a single coordinated project under one point of contact.",
  },
  {
    question: "Do you work with both corporate clients and college institutions?",
    answer:
      "Yes. We work across corporate conferences, annual days, product launches and employee engagement, as well as college festivals, campus marketing, youth outreach and educational programmes.",
  },
  {
    question: "Do you provide event production and handle specialist vendor coordination?",
    answer:
      "Yes. We coordinate stage setups, sound and lighting, LED video screens, stall fabrication, branding installations, manpower and logistics, working with vetted specialist partners where required while remaining your single point of contact.",
  },
  {
    question: "What is included in your campus marketing solutions?",
    answer:
      "Our campus marketing includes campus ambassador networks, college festival sponsorships, student outreach, intercollegiate activations and on-campus promotional drives.",
  },
  {
    question: "How does your corporate gifting service work?",
    answer:
      "We help businesses source and customise welcome kits, employee kits, festive hampers, promotional gifts, event giveaways and premium packaging tailored to quantities, branding requirements and timelines.",
  },
  {
    question: "What kinds of CSR initiatives do you coordinate?",
    answer:
      "We help coordinate socially meaningful initiatives such as financial literacy workshops, digital education, student career development, entrepreneurship sessions, community outreach and impact reporting.",
  },
  {
    question: "How do we request a project proposal or quotation?",
    answer:
      "Submit your requirements through our Get a Proposal form or reach out directly on WhatsApp. We will discuss your brief, understand your objectives and provide an organised scope of work.",
  },
  {
    question: "How are planning timelines and project pricing determined?",
    answer:
      "Timelines and pricing depend on the project scope, location, deliverables and lead time. We discuss your budget and parameters openly to recommend practical solutions and realistic schedules.",
  },
  {
    question: "Where is Flashax based?",
    answer:
      "Flashax Event Solutions is based in Mumbai, Maharashtra.",
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

