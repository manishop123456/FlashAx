export interface ServiceDivision {
  divisionNumber: string;
  title: string;
  description: string;
  suggestedImage: string;
  visualKey: string;
  imageSrc?: string;
}

export interface FullService {
  slug: string;
  number: string;
  anchorId: string;
  title: string;
  mainDescription: string;
  suggestedMainImage: string;
  divisions: ServiceDivision[];
  image?: string;
}

export const servicesData: FullService[] = [
  {
    slug: "event-management",
    number: "01/07",
    anchorId: "event-management",
    title: "EVENT MANAGEMENT",
    mainDescription:
      "We plan and coordinate events from the initial idea to on-ground execution, helping clients create organised, engaging experiences aligned with their objectives, audience and budget.",
    suggestedMainImage: "A premium corporate event, conference or well-organised live event.",
    image: "/images/services/card-event-management.png",
    divisions: [
      {
        divisionNumber: "01",
        title: "Corporate Events",
        description:
          "We coordinate corporate gatherings such as annual days, employee celebrations, award functions, networking events and business events based on your requirements.",
        suggestedImage: "Corporate gathering",
        visualKey: "corporate-events",
        imageSrc: "/images/services/corporate-events.png",
      },
      {
        divisionNumber: "02",
        title: "College Festivals",
        description:
          "We help plan and coordinate college festivals, cultural events, student activities and large campus celebrations, including schedules, vendors and event-day operations.",
        suggestedImage: "College festival crowd",
        visualKey: "college-festivals",
        imageSrc: "/images/services/college-festivals.png",
      },
      {
        divisionNumber: "03",
        title: "Product Launches",
        description:
          "We coordinate launch events that introduce a new product or service to customers, partners, employees or invited guests through a well-planned event experience.",
        suggestedImage: "Product launch",
        visualKey: "product-launches",
        imageSrc: "/images/services/product-launches.png",
      },
      {
        divisionNumber: "04",
        title: "Conferences and Seminars",
        description:
          "We coordinate conferences, seminars, panel discussions and business sessions, including schedules, speakers, venues, registrations and attendee arrangements.",
        suggestedImage: "Conference stage",
        visualKey: "conferences-seminars",
        imageSrc: "/images/services/conferences-and-seminars.png",
      },
      {
        divisionNumber: "05",
        title: "Guest Management",
        description:
          "We help manage invitations, guest registrations, check-ins, reception desks, VIP coordination and guest movement to support a smooth event experience.",
        suggestedImage: "Guest registration desk",
        visualKey: "guest-management",
        imageSrc: "/images/services/guest-management.png",
      },
      {
        divisionNumber: "06",
        title: "Event Planning",
        description:
          "We help develop the event concept, plan timelines, coordinate venues and suppliers, organise requirements and manage the details needed to bring the event together.",
        suggestedImage: "Event planning or production coordination",
        visualKey: "event-planning",
        imageSrc: "/images/services/event-planning.png",
      },
    ],
  },
  {
    slug: "event-production",
    number: "02/07",
    anchorId: "event-production",
    title: "EVENT PRODUCTION",
    mainDescription:
      "We coordinate the technical setup, event infrastructure, branding materials and operational requirements needed to bring events, exhibitions and live experiences to life.",
    suggestedMainImage: "A professionally produced stage with lighting and LED screens.",
    image: "/images/services/card-event-production.png",
    divisions: [
      {
        divisionNumber: "01",
        title: "Stage Setup",
        description:
          "We coordinate stage design, stage structures, backdrops and event layouts suited to the venue, event format and production requirements.",
        suggestedImage: "Stage installation",
        visualKey: "stage-setup",
        imageSrc: "/images/services/card-event-production.png",
      },
      {
        divisionNumber: "02",
        title: "Sound and Lighting",
        description:
          "We arrange sound systems, microphones, speakers and lighting setups to support presentations, performances, ceremonies and live events.",
        suggestedImage: "Concert lighting",
        visualKey: "sound-lighting",
      },
      {
        divisionNumber: "03",
        title: "LED Screens",
        description:
          "We coordinate LED screens and display solutions for presentations, branding, live visuals, event content and audience viewing.",
        suggestedImage: "LED wall",
        visualKey: "led-screens",
      },
      {
        divisionNumber: "04",
        title: "Exhibition Stalls",
        description:
          "We help plan and coordinate exhibition booths and trade-show stalls, including layouts, branding, display requirements and installation arrangements.",
        suggestedImage: "Exhibition booth",
        visualKey: "exhibition-stalls",
      },
      {
        divisionNumber: "05",
        title: "Stall Fabrication",
        description:
          "We coordinate the fabrication of customised stalls, display structures and branded installations according to the approved design and venue requirements.",
        suggestedImage: "Stall fabrication",
        visualKey: "stall-fabrication",
      },
      {
        divisionNumber: "06",
        title: "Event Branding",
        description:
          "We coordinate event branding materials such as backdrops, standees, banners, signage, directional displays and other branded event elements.",
        suggestedImage: "Event signage",
        visualKey: "event-branding",
      },
      {
        divisionNumber: "07",
        title: "Manpower and Logistics",
        description:
          "We coordinate relevant event staff, setup schedules, material movement, deliveries and operational requirements according to the project scope.",
        suggestedImage: "Production crew",
        visualKey: "manpower-logistics",
      },
      {
        divisionNumber: "08",
        title: "Trophies and Merchandise",
        description:
          "We help source and coordinate trophies, medals, certificates, event merchandise, branded clothing and other materials for events and competitions.",
        suggestedImage: "Trophies and branded merchandise",
        visualKey: "trophies-merchandise",
      },
    ],
  },
  {
    slug: "brand-activation",
    number: "03/07",
    anchorId: "brand-activation",
    title: "BRAND ACTIVATION",
    mainDescription:
      "We help brands connect with their target audiences through on-ground promotions, interactive experiences, product trials and coordinated brand campaigns.",
    suggestedMainImage: "A premium branded experiential activation or interactive promotional event.",
    image: "/images/services/card-brand-activation.png",
    divisions: [
      {
        divisionNumber: "01",
        title: "Product Promotions",
        description:
          "We coordinate promotional activities that introduce products or services to potential customers through suitable locations, experiences and campaign formats.",
        suggestedImage: "Product promotion booth",
        visualKey: "product-promotions",
      },
      {
        divisionNumber: "02",
        title: "Brand Campaigns",
        description:
          "We help plan and coordinate campaigns that communicate a brand message through events, promotional activities and audience-focused experiences.",
        suggestedImage: "Branded campaign display",
        visualKey: "brand-campaigns",
      },
      {
        divisionNumber: "03",
        title: "Product Sampling",
        description:
          "We coordinate product sampling activities that allow audiences to try or experience a product, subject to permissions, product availability and campaign requirements.",
        suggestedImage: "Product sampling",
        visualKey: "product-sampling",
      },
      {
        divisionNumber: "04",
        title: "Influencer Campaigns",
        description:
          "We help coordinate influencer collaborations, campaign briefs, content requirements and promotional activities based on the brand's audience and objectives.",
        suggestedImage: "Influencer content shoot",
        visualKey: "influencer-campaigns",
      },
      {
        divisionNumber: "05",
        title: "Celebrity Coordination",
        description:
          "We assist with celebrity or public-figure coordination for appearances, launches and brand events, subject to availability, approvals and commercial terms.",
        suggestedImage: "Celebrity event appearance",
        visualKey: "celebrity-coordination",
      },
      {
        divisionNumber: "06",
        title: "Roadshows",
        description:
          "We coordinate promotional roadshows and mobile brand experiences across approved locations, with planning for schedules, materials and on-ground requirements.",
        suggestedImage: "Branded roadshow",
        visualKey: "roadshows",
      },
      {
        divisionNumber: "07",
        title: "Audience Engagement",
        description:
          "We help develop and coordinate interactive activities, engagement zones, demonstrations and experiences that encourage audience participation.",
        suggestedImage: "Interactive experience",
        visualKey: "audience-engagement",
      },
      {
        divisionNumber: "08",
        title: "Launch Campaigns",
        description:
          "We coordinate launch-related promotional activities across events and relevant audience touchpoints to help introduce a brand, product or service.",
        suggestedImage: "Product launch activation",
        visualKey: "launch-campaigns",
      },
    ],
  },
  {
    slug: "campus-marketing",
    number: "04/07",
    anchorId: "campus-marketing",
    title: "CAMPUS MARKETING",
    mainDescription:
      "We help brands and organisations connect with college audiences through campus outreach, student ambassadors, sponsorship initiatives and student-focused campaigns.",
    suggestedMainImage: "Students participating in a college festival, campus activation or intercollegiate competition.",
    image: "/images/services/card-campus-marketing.png",
    divisions: [
      {
        divisionNumber: "01",
        title: "Campus Ambassadors",
        description:
          "We help coordinate campus ambassador programmes, including recruitment support, student communication, campaign activities and participation tracking.",
        suggestedImage: "Student ambassador",
        visualKey: "campus-ambassadors",
      },
      {
        divisionNumber: "02",
        title: "College Sponsorships",
        description:
          "We help prepare sponsorship opportunities and coordinate outreach between brands and colleges, subject to institutional policies and sponsor interest.",
        suggestedImage: "Sponsorship presentation",
        visualKey: "college-sponsorships",
      },
      {
        divisionNumber: "03",
        title: "College Outreach",
        description:
          "We coordinate communication and outreach with relevant colleges to explore event partnerships, promotional opportunities and student engagement initiatives.",
        suggestedImage: "College meeting",
        visualKey: "college-outreach",
      },
      {
        divisionNumber: "04",
        title: "Student Engagement",
        description:
          "We help organise activities, competitions, interactive sessions and promotional initiatives designed to encourage student participation.",
        suggestedImage: "Student engagement activity",
        visualKey: "student-engagement",
      },
      {
        divisionNumber: "05",
        title: "Intercollegiate Events",
        description:
          "We help coordinate competitions and events involving multiple colleges, including participation outreach, schedules, registrations and event operations.",
        suggestedImage: "Intercollegiate competition",
        visualKey: "intercollegiate-events",
      },
      {
        divisionNumber: "06",
        title: "Campus Promotions",
        description:
          "We coordinate approved on-campus promotional activities, brand displays, awareness campaigns and student-facing promotional initiatives.",
        suggestedImage: "Campus promotion",
        visualKey: "campus-promotions",
      },
      {
        divisionNumber: "07",
        title: "Guest Speaker Sessions",
        description:
          "We coordinate educational and industry-focused sessions with guest speakers, including scheduling, communication and event arrangements, subject to availability.",
        suggestedImage: "Speaker session",
        visualKey: "guest-speaker-sessions",
      },
      {
        divisionNumber: "08",
        title: "Registration Drives",
        description:
          "We support campaign registrations and participant sign-ups through college outreach, student communication, registration coordination and follow-up activities.",
        suggestedImage: "Registration desk",
        visualKey: "registration-drives",
      },
    ],
  },
  {
    slug: "digital-marketing",
    number: "05/07",
    anchorId: "digital-marketing",
    title: "DIGITAL MARKETING",
    mainDescription:
      "We help businesses communicate with their audiences through digital content, creative design, website solutions and coordinated online campaigns.",
    suggestedMainImage: "A creative team working on digital content or a professional social media content setup.",
    image: "/images/services/card-digital-marketing.png",
    divisions: [
      {
        divisionNumber: "01",
        title: "Social Media Management",
        description:
          "We help plan and manage social media content, posting schedules, captions and account communication according to the brand's goals and agreed scope.",
        suggestedImage: "Social media calendar",
        visualKey: "social-media-management",
      },
      {
        divisionNumber: "02",
        title: "Creative Design",
        description:
          "We coordinate the design of social media posts, promotional creatives, banners, digital invitations, campaign graphics and other branded visual content.",
        suggestedImage: "Creative design screen",
        visualKey: "creative-design",
      },
      {
        divisionNumber: "03",
        title: "Website Development",
        description:
          "We help plan and coordinate website design and development to present a business, service, campaign or brand professionally online.",
        suggestedImage: "Website mock-up",
        visualKey: "website-development",
      },
      {
        divisionNumber: "04",
        title: "Content Creation",
        description:
          "We develop or coordinate written and visual content for brand communication, social media, websites, promotions and campaigns.",
        suggestedImage: "Content production",
        visualKey: "content-creation",
      },
      {
        divisionNumber: "05",
        title: "Photography and Videography",
        description:
          "We coordinate photography and video coverage for events, products, promotional activities and brand content, depending on the project requirements.",
        suggestedImage: "Event filming",
        visualKey: "photography-videography",
      },
      {
        divisionNumber: "06",
        title: "Video Editing",
        description:
          "We coordinate video editing for reels, promotional videos, event highlights, interviews and other digital content formats.",
        suggestedImage: "Video editing workstation",
        visualKey: "video-editing",
      },
      {
        divisionNumber: "07",
        title: "Digital Advertising",
        description:
          "We help plan and coordinate paid digital advertising campaigns according to campaign objectives, target audiences and agreed budgets.",
        suggestedImage: "Digital campaign dashboard",
        visualKey: "digital-advertising",
      },
      {
        divisionNumber: "08",
        title: "Influencer Marketing",
        description:
          "We help coordinate influencer research, outreach, campaign briefs and collaborations that align with a brand's target audience and communication goals.",
        suggestedImage: "Influencer content creation",
        visualKey: "influencer-marketing",
      },
    ],
  },
  {
    slug: "csr-initiatives",
    number: "06/07",
    anchorId: "csr-initiatives",
    title: "CSR INITIATIVES",
    mainDescription:
      "We coordinate educational, awareness and community-focused initiatives that help organisations engage with students and communities through meaningful programmes.",
    suggestedMainImage: "An educational workshop, financial literacy session or community learning initiative.",
    image: "/images/services/card-csr-initiatives.png",
    divisions: [
      {
        divisionNumber: "01",
        title: "Financial Literacy",
        description:
          "We coordinate sessions and awareness activities covering budgeting, saving, financial planning and responsible financial decision-making.",
        suggestedImage: "Financial education workshop",
        visualKey: "financial-literacy",
      },
      {
        divisionNumber: "02",
        title: "Educational Workshops",
        description:
          "We help organise workshops that support learning, skill development and knowledge-sharing for students and other intended participants.",
        suggestedImage: "Classroom learning",
        visualKey: "educational-workshops",
      },
      {
        divisionNumber: "03",
        title: "Career Development",
        description:
          "We coordinate career-focused sessions covering career exploration, employability skills, professional readiness and interactions with industry professionals.",
        suggestedImage: "Career seminar",
        visualKey: "career-development",
      },
      {
        divisionNumber: "04",
        title: "Entrepreneurship Sessions",
        description:
          "We help coordinate sessions on entrepreneurship, business ideas, innovation and startup fundamentals with relevant speakers or facilitators.",
        suggestedImage: "Entrepreneurship discussion",
        visualKey: "entrepreneurship-sessions",
      },
      {
        divisionNumber: "05",
        title: "Digital Literacy",
        description:
          "We coordinate educational initiatives that help participants understand digital tools, online safety and responsible use of technology.",
        suggestedImage: "Digital skills session",
        visualKey: "digital-literacy",
      },
      {
        divisionNumber: "06",
        title: "Community Outreach",
        description:
          "We help organise community engagement activities, awareness programmes and outreach initiatives based on the organisation's objectives and target participants.",
        suggestedImage: "Community activity",
        visualKey: "community-outreach",
      },
      {
        divisionNumber: "07",
        title: "Guest Speaker Coordination",
        description:
          "We help identify and coordinate suitable speakers, facilitators or subject experts for educational and awareness programmes, subject to availability.",
        suggestedImage: "Guest speaker addressing participants",
        visualKey: "csr-guest-speaker-coordination",
      },
    ],
  },
  {
    slug: "corporate-gifting",
    number: "07/07",
    anchorId: "corporate-gifting",
    title: "CORPORATE GIFTING",
    mainDescription:
      "We help businesses source and coordinate thoughtful gifts, employee kits and branded merchandise for onboarding, celebrations, corporate occasions and events.",
    suggestedMainImage: "Premium corporate gift hampers, welcome kits or branded employee gifts.",
    image: "/images/services/card-corporate-gifting.png",
    divisions: [
      {
        divisionNumber: "01",
        title: "Welcome Kits",
        description:
          "We help coordinate welcome kits for new employees, clients, event delegates or business partners, based on the occasion and budget.",
        suggestedImage: "Employee welcome box",
        visualKey: "welcome-kits",
      },
      {
        divisionNumber: "02",
        title: "Employee Kits",
        description:
          "We help source and assemble employee kits for onboarding, internal initiatives, appreciation programmes and company events.",
        suggestedImage: "Company merchandise kit",
        visualKey: "employee-kits",
      },
      {
        divisionNumber: "03",
        title: "Festive Hampers",
        description:
          "We coordinate festive hampers and seasonal gift collections for employees, clients and business partners, with options suited to the occasion and budget.",
        suggestedImage: "Festive hamper",
        visualKey: "festive-hampers",
      },
      {
        divisionNumber: "04",
        title: "Corporate Gifts",
        description:
          "We help source suitable corporate gifts for meetings, employee recognition, client appreciation and business occasions.",
        suggestedImage: "Executive gift",
        visualKey: "corporate-gifts",
      },
      {
        divisionNumber: "05",
        title: "Customised Merchandise",
        description:
          "We coordinate branded merchandise such as notebooks, bottles, apparel, bags and other promotional products, subject to supplier options and minimum order quantities.",
        suggestedImage: "Branded merchandise",
        visualKey: "customised-merchandise",
      },
      {
        divisionNumber: "06",
        title: "Promotional Gifts",
        description:
          "We help source branded promotional items for campaigns, exhibitions, launches, conferences and audience engagement activities.",
        suggestedImage: "Promotional giveaway",
        visualKey: "promotional-gifts",
      },
      {
        divisionNumber: "07",
        title: "Event Giveaways",
        description:
          "We coordinate giveaways and participant gifts for corporate events, college festivals, competitions and promotional activities.",
        suggestedImage: "Event gift items",
        visualKey: "event-giveaways",
      },
      {
        divisionNumber: "08",
        title: "Gift Packaging",
        description:
          "We help coordinate packaging, gift boxes, labels, branding and presentation to suit the occasion and the client's requirements.",
        suggestedImage: "Premium packaging",
        visualKey: "gift-packaging",
      },
    ],
  },
];
