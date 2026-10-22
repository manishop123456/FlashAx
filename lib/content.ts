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
    services: [{ label: "Event Management", slug: "event-management" }],
  },
  {
    key: "create",
    title: "CREATE",
    text: "Creative concepts, branding and experiences.",
    services: [
      { label: "Brand Activation", slug: "brand-activation" },
      { label: "Digital & Creative", slug: "digital-creative" },
    ],
  },
  {
    key: "produce",
    title: "PRODUCE",
    text: "Production resources and coordination.",
    services: [
      { label: "Production & Operations", slug: "production-operations" },
      { label: "Exhibitions", slug: "exhibitions" },
    ],
  },
  {
    key: "amplify",
    title: "AMPLIFY",
    text: "Promotions, audience engagement and digital content.",
    services: [
      { label: "Campus Connect", slug: "campus-connect" },
      { label: "Digital & Creative", slug: "digital-creative" },
    ],
  },
] as const;

export const principles = [
  {
    title: "Connected capabilities",
    text: "Planning, creative, production and promotion sit together, so ideas and execution stay aligned from the first brief.",
  },
  {
    title: "Tailored to the brief",
    text: "Every project starts from your objectives, audience and constraints rather than a fixed package.",
  },
  {
    title: "Flexible engagement",
    text: "Bring us a complete project or a single service. The scope is agreed with you before work begins.",
  },
  {
    title: "Coordinated delivery",
    text: "One point of contact coordinates the Flashax team and, where specialist work is needed, suitable vendors and partners.",
  },
] as const;

export const audiences = [
  {
    key: "corporates",
    title: "Corporates",
    text: "Conferences, annual days, product launches, employee engagement and leadership events.",
    services: [
      { label: "Event Management", slug: "event-management" },
      { label: "Production", slug: "production-operations" },
    ],
    href: "/services/event-management",
  },
  {
    key: "colleges",
    title: "Colleges",
    text: "College festivals, cultural events, sponsorship programmes and campus partnerships.",
    services: [
      { label: "Campus Connect", slug: "campus-connect" },
      { label: "Event Management", slug: "event-management" },
    ],
    href: "/services/campus-connect",
  },
  {
    key: "brands",
    title: "Brands",
    text: "Activations, experiential campaigns, roadshows, sampling and launch moments.",
    services: [
      { label: "Brand Activation", slug: "brand-activation" },
      { label: "Exhibitions", slug: "exhibitions" },
    ],
    href: "/services/brand-activation",
  },
  {
    key: "organisers",
    title: "Event organisers",
    text: "Production support, manpower, technical coordination and operations for events you already lead.",
    services: [
      { label: "Production & Operations", slug: "production-operations" },
      { label: "Exhibitions", slug: "exhibitions" },
    ],
    href: "/services/production-operations",
  },
  {
    key: "ngos",
    title: "NGOs & community groups",
    text: "CSR initiatives, financial literacy and educational programmes, community events and awareness drives.",
    services: [
      { label: "CSR & Education", slug: "csr-education" },
      { label: "Digital & Creative", slug: "digital-creative" },
    ],
    href: "/services/csr-education",
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
    question: "What services does Flashax offer?",
    answer:
      "Seven divisions: Event Management & Experiences; Exhibition & Trade Show Solutions; Event Production, Manpower & Operations; Brand Activation & Experiential Marketing; Campus Connect, Sponsorships & Partnerships; Digital Marketing, Creative & Content; and CSR, Financial Literacy & Educational Programs. You can enquire about a complete project or a single service.",
  },
  {
    question: "Can I hire Flashax for just one service?",
    answer:
      "Yes. Each division can work on its own or as part of an integrated project. The scope is discussed and agreed with you before anything begins.",
  },
  {
    question: "Does Flashax handle everything in-house?",
    answer:
      "Flashax leads planning, creative direction and coordination. Some specialist work, such as large-scale fabrication or specific technical requirements, may be coordinated through suitable vendors and partners. We will be clear about who delivers what.",
  },
  {
    question: "What kinds of events and projects do you work on?",
    answer:
      "Corporate events, college festivals, exhibitions and trade shows, brand activations, campus partnerships, digital and creative campaigns, and CSR or educational programmes. If it brings people and brands together, tell us about it.",
  },
  {
    question: "How does the enquiry process work?",
    answer:
      "Share your brief through the enquiry form: the services you need, project details, location, a tentative date and an optional budget range. We review it and get in touch to discuss next steps.",
  },
  {
    question: "Do you work outside a single city?",
    answer:
      "Include your location in the enquiry and we will discuss how the project can be planned and delivered there, including multi-location programmes.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope, venue and approvals. Share your target date early and we will talk through what is realistic.",
  },
  {
    question: "Do I have to share a budget?",
    answer:
      "No, the budget range in the form is optional. It simply helps us shape the right scope for your project.",
  },
] as const;

export const facts = [
  {
    value: "7",
    label: "Service divisions",
    text: "From events and exhibitions to digital and CSR programmes.",
  },
  {
    value: "5",
    label: "Audiences we serve",
    text: "Corporates, colleges, brands, event organisers and NGOs.",
  },
  {
    value: "5",
    label: "Step process",
    text: "Discover, strategise, coordinate, execute and review.",
  },
  {
    value: "4",
    label: "Capability pillars",
    text: "Plan, create, produce and amplify.",
  },
] as const;
