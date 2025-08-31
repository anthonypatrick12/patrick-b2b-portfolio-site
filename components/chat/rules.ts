// Basic keyword rules you can edit.
// Each rule has: keywords to match (OR), optional notKeywords, and a reply.
// You can also return "suggestions" for quick-reply chips.

export type Rule = {
  id: string;
  keywords: string[];
  notKeywords?: string[];
  reply: string | ((ctx: any) => string);
  suggestions?: string[];
};

export const RULES: Rule[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "sup"],
    reply:
      "Hey! I’m Patrick’s assistant 👋 Ask me about services, pricing, case studies, or book a discovery call.",
    suggestions: ["Services", "Pricing", "Case studies", "Book a call"],
  },
  {
    id: "services",
    keywords: ["service", "services", "what do you do", "offer", "offering"],
    reply:
      "I help B2B teams with:\n• B2B Lead Generation\n• Cold Email Campaigns\n• LinkedIn Outreach\n• SDR-as-a-Service\n\nWant details on one?",
    suggestions: [
      "B2B Lead Generation",
      "Cold Email Campaigns",
      "LinkedIn Outreach",
      "SDR-as-a-Service",
    ],
  },
  {
    id: "leadgen",
    keywords: ["b2b lead generation", "lead gen", "lead generation"],
    reply:
      "B2B Lead Gen: ICP research, compliant list-building, and multi-channel cadences. Typical outcomes: reply uplift +25–45% within 6–10 weeks.\nMore: /services/b2b-lead-generation",
    suggestions: ["Pricing", "Case studies", "Book a call"],
  },
  {
    id: "coldemail",
    keywords: ["cold email", "email campaigns", "deliverability"],
    reply:
      "Cold Email: deliverability-first domains, warm-up, and message testing. We track replies, SQLs, and opps.\nMore: /services/cold-email",
    suggestions: ["Pricing", "Case studies", "Book a call"],
  },
  {
    id: "linkedin",
    keywords: ["linkedin", "social outreach", "inmail"],
    reply:
      "LinkedIn Outreach: persona-led scripts, warm touches, and orchestration with email for higher response rates.\nMore: /services/linkedin-outreach",
    suggestions: ["Pricing", "Case studies", "Book a call"],
  },
  {
    id: "sdr",
    keywords: ["sdr", "sdr as a service", "outsourced sdr", "appointment setting"],
    reply:
      "SDR-as-a-Service: managed SDR pod, playbooks, reporting, and meeting SLAs. Plug into your CRM.\nMore: /services/sdr-as-a-service",
    suggestions: ["Pricing", "Case studies", "Book a call"],
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "how much", "budget"],
    reply:
      "Pricing ranges by scope:\n• Blueprint (one-time) — $$\n• Managed (retainer) — $$$\n• SDRaaS (per seat + outcome bonus) — $$$–$$$$\n\nShare your ICP & volume for a precise quote.",
    suggestions: ["Share ICP", "Book a call", "Contact"],
  },
  {
    id: "case",
    keywords: ["case study", "case studies", "results", "proof"],
    reply:
      "Recent wins: reply uplift +25–45% and 3–5x pipeline in ~90 days (varies by ICP/offer).\nSee: /#case-studies\nWant me to summarize relevant ones?",
    suggestions: ["SaaS examples", "Book a call", "Contact"],
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "talk", "meet"],
    reply:
      "You can book a call at /#contact (Calendly) or send details via the form. Want to drop your name and email here?",
    suggestions: ["Share my details", "Book a call"],
  },
  {
    id: "book",
    keywords: ["book", "demo", "call", "meeting", "schedule", "calendar", "calendly"],
    reply:
      "Great! Head to /#contact and choose a time. I’ll pass context so we can prep. Want me to collect your name/email for a heads up?",
    suggestions: ["Share my details"],
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "thx", "cool", "great"],
    reply: "You got it! If you’d like, I can email a quick checklist before the call.",
    suggestions: ["Email me a checklist", "All good"],
  },
];
