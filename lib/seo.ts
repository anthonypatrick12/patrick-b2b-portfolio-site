export const site = {
  name: "Patrick — B2B Lead Generation",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  description:
    "Patrick helps B2B companies build predictable pipeline with compliant, multi-channel outbound. SDR-as-a-service, data enrichment, and appointment setting.",
  ogImage: "/og-image.png"
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
  { href: "/services", label: "More Services" },
  { href: "/industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export const primaryKeywords = [
  "B2B lead generation",
  "B2B appointment setting",
  "SDR as a Service",
  "Outbound sales agency",
  "Sales pipeline growth",
  "ICP research and list building",
  "LinkedIn outreach",
  "Cold email campaigns",
  "B2B demand generation"
];

export const services = [
  {
    title: "ICP Research & List Building",
    desc: "Define who to target and build clean, compliant lists with firmographics, technographics, and buying signals.",
    bullets: [
      "Ideal Customer Profile (ICP) workshop",
      "Account & contact data enrichment",
      "Intent and trigger event mapping"
    ]
  },
  {
    title: "Multi-channel Outbound",
    desc: "Cold email, LinkedIn, and phone outreach that opens conversations with the right buyers.",
    bullets: [
      "Messaging frameworks & personalization",
      "Deliverability setup & warm-up",
      "A/B testing & conversion optimization"
    ]
  },
  {
    title: "SDR-as-a-Service",
    desc: "Dedicated SDRs managed by us, integrated with your CRM to book qualified meetings.",
    bullets: [
      "Playbooks, cadences, and SLAs",
      "Realtime dashboards & weekly reviews",
      "SQL, pipeline, and CAC reporting"
    ]
  }
];

export const processSteps = [
  {step: "01", title: "Discovery", desc: "30-minute call to align on ICP, markets, goals, and success metrics."},
  {step: "02", title: "Blueprint", desc: "We draft a channel plan, messaging, volumes, and dashboards to measure impact."},
  {step: "03", title: "Foundation", desc: "Set up domains, warm-up, CRM, tracking, and deliverability safeguards."},
  {step: "04", title: "Launch", desc: "Roll out cadences, personalization, and QA in weekly sprints."},
  {step: "05", title: "Optimize", desc: "Iterate via tests, double down on what converts, and scale volumes safely."},
];

export const testimonials = [
  {
    name: "Alex R.",
    title: "VP Sales, SaaS",
    quote: "Patrick rebuilt our outbound from scratch and got us to a 35% SQL-to-opportunity rate in 90 days."
  },
  {
    name: "Keisha M.",
    title: "Founder, B2B Services",
    quote: "Calendar went from quiet to 12+ qualified meetings/month without burning our domain reputation."
  },
  {
    name: "Marco D.",
    title: "Head of Growth, Fintech",
    quote: "Clean data, tight messaging, and relentless testing. Pipeline doubled and CAC dropped 22%."
  }
];

export const caseStudies = [
  {
    id: "revops-saas",
    company: "RevOps SaaS (Series A)",
    industry: "SaaS",
    challenge: "Low reply rates and spam issues stalled outbound.",
    approach: "New domains, verified data, persona-specific messaging, and LinkedIn + email sequencing.",
    results: ["+2.4x reply rate", "18 SQLs/mo", "CAC ↓ 19%"],
    image: "/case-study-1.jpg",
    length: "12 weeks",
    stack: "HubSpot + Apollo + Clay"
  },
  {
    id: "logistics",
    company: "B2B Logistics Platform",
    industry: "Logistics",
    challenge: "No ICP clarity; sales targeting all segments.",
    approach: "ICP workshop, trigger events (new warehouse/ERP), and phone follow-ups.",
    results: ["9 enterprise demos in 6 weeks", "2 closed-won"],
    image: "/case-study-2.jpg",
    length: "6 weeks",
    stack: "Salesforce + LinkedIn + Phone"
  },
  {
    id: "devtools",
    company: "Developer Tools",
    industry: "DevTools",
    challenge: "Great product, zero top-of-funnel consistency.",
    approach: "Warm-up, technical proof points, and referral asks in step 3 of cadence.",
    results: ["Pipeline +78%", "Best channel: targeted ABM list of 450 accounts"],
    image: "/case-study-3.jpg",
    length: "10 weeks",
    stack: "HubSpot + Instantly + Clay"
  }
];
