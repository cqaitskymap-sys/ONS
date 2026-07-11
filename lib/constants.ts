export const LOGO = {
  src: "/logo.png",
  alt: "LoMars Pharma logo featuring a 3D green and silver globe with a medical cross and orbital ring, above the text LoMars Pharma — Care Made Convenient.",
  width: 500,
  height: 500,
} as const;

/** Local 4K (3840px) pharmaceutical imagery — stored in /public/images */
export const IMAGES = {
  heroBackground: {
    src: "/images/hero-background.jpg",
    alt: "Modern pharmaceutical cleanroom manufacturing facility",
    width: 3840,
    height: 2160,
  },
  labPrimary: {
    src: "/images/lab-primary.jpg",
    alt: "Modern pharmaceutical laboratory with research equipment",
    width: 3840,
    height: 2880,
  },
  labResearch: {
    src: "/images/lab-research.jpg",
    alt: "Scientists conducting pharmaceutical research",
    width: 3840,
    height: 2880,
  },
  pharmaManufacturing: {
    src: "/images/pharma-manufacturing.jpg",
    alt: "Pharmaceutical manufacturing cleanroom facility",
    width: 3840,
    height: 2160,
  },
  pharmaLaboratory: {
    src: "/images/pharma-laboratory.jpg",
    alt: "Advanced pharmaceutical laboratory instrumentation",
    width: 3840,
    height: 2160,
  },
  cleanroom: {
    src: "/images/cleanroom.jpg",
    alt: "GMP-compliant pharmaceutical cleanroom environment",
    width: 3840,
    height: 2160,
  },
  sourcingWarehouse: {
    src: "/images/sourcing-warehouse.jpg",
    alt: "Pharmaceutical supply chain and logistics warehouse",
    width: 3840,
    height: 2160,
  },
  training: {
    src: "/images/training.jpg",
    alt: "Pharmaceutical professionals in GMP training session",
    width: 3840,
    height: 2160,
  },
  validation: {
    src: "/images/validation.jpg",
    alt: "Equipment qualification and validation in pharmaceutical facility",
    width: 3840,
    height: 2160,
  },
  facilityDesign: {
    src: "/images/facility-design.jpg",
    alt: "Pharmaceutical facility design and engineering planning",
    width: 3840,
    height: 2160,
  },
  auditCompliance: {
    src: "/images/audit-compliance.jpg",
    alt: "GMP audit and regulatory compliance review",
    width: 3840,
    height: 2160,
  },
  qualityControl: {
    src: "/images/quality-control.jpg",
    alt: "Pharmaceutical quality control laboratory testing",
    width: 3840,
    height: 2160,
  },
  apiPills: {
    src: "/images/api-pills.jpg",
    alt: "Active pharmaceutical ingredients and dosage forms",
    width: 3840,
    height: 2160,
  },
  glassPackaging: {
    src: "/images/glass-packaging.jpg",
    alt: "Pharmaceutical glass vials and primary packaging",
    width: 3840,
    height: 2160,
  },
  medicalDevices: {
    src: "/images/medical-devices.jpg",
    alt: "Medical device manufacturing and quality systems",
    width: 3840,
    height: 2160,
  },
  biotechResearch: {
    src: "/images/biotech-research.jpg",
    alt: "Biotechnology and life sciences research laboratory",
    width: 3840,
    height: 2160,
  },
  teamCollaboration: {
    src: "/images/team-collaboration.jpg",
    alt: "Pharmaceutical consultancy team collaboration",
    width: 3840,
    height: 2160,
  },
  pharmaProductionLine: {
    src: "/images/pharma-production-line.jpg",
    alt: "Pharmaceutical production line with manufacturing equipment",
    width: 3840,
    height: 2160,
  },
  regulatoryDesk: {
    src: "/images/regulatory-desk.jpg",
    alt: "Regulatory affairs specialist reviewing GMP documentation",
    width: 3840,
    height: 2160,
  },
  pharmaLogistics: {
    src: "/images/pharma-logistics.jpg",
    alt: "Pharmaceutical warehouse logistics and cold chain storage",
    width: 3840,
    height: 2160,
  },
  injectableManufacturing: {
    src: "/images/injectable-manufacturing.jpg",
    alt: "Sterile injectable vial filling in GMP cleanroom",
    width: 3840,
    height: 2160,
  },
  microbiologyLab: {
    src: "/images/microbiology-lab.jpg",
    alt: "Microbiology laboratory testing for pharmaceutical products",
    width: 3840,
    height: 2160,
  },
  pharmaConsultation: {
    src: "/images/pharma-consultation.jpg",
    alt: "Pharmaceutical consultancy strategy meeting",
    width: 3840,
    height: 2160,
  },
  tabletCapsuleProduction: {
    src: "/images/tablet-capsule-production.jpg",
    alt: "Tablet and capsule pharmaceutical production line",
    width: 3840,
    height: 2160,
  },
  environmentalMonitoring: {
    src: "/images/environmental-monitoring.jpg",
    alt: "Environmental monitoring in pharmaceutical cleanroom",
    width: 3840,
    height: 2160,
  },
  gmpClassroom: {
    src: "/images/gmp-classroom.jpg",
    alt: "GMP training classroom for pharmaceutical professionals",
    width: 3840,
    height: 2160,
  },
  veterinaryPharma: {
    src: "/images/veterinary-pharma.jpg",
    alt: "Veterinary pharmaceutical products and animal health medicines",
    width: 3840,
    height: 2160,
  },
  processEngineering: {
    src: "/images/process-engineering.jpg",
    alt: "Pharmaceutical process engineering and facility planning",
    width: 3840,
    height: 2160,
  },
  careersWorkplace: {
    src: "/images/careers-workplace.jpg",
    alt: "Modern pharmaceutical consultancy workplace",
    width: 3840,
    height: 2160,
  },
  portraits: {
    md: "/images/portrait-md.jpg",
    ceo: "/images/portrait-ceo.jpg",
    quality: "/images/portrait-quality.jpg",
    sourcing: "/images/portrait-sourcing.jpg",
    testimonial1: "/images/portrait-testimonial-1.jpg",
    testimonial2: "/images/portrait-testimonial-2.jpg",
    testimonial3: "/images/portrait-testimonial-3.jpg",
  },
} as const;

export type ImageAsset = (typeof IMAGES)[keyof Omit<typeof IMAGES, "portraits">];

/** Unique image per page — no image reused across sections */
export const PAGE_IMAGES = {
  about: {
    banner: IMAGES.teamCollaboration,
    feature: IMAGES.pharmaConsultation,
    strip: [IMAGES.facilityDesign, IMAGES.environmentalMonitoring, IMAGES.injectableManufacturing, IMAGES.microbiologyLab],
  },
  services: {
    banner: IMAGES.pharmaProductionLine,
    strip: [IMAGES.gmpClassroom, IMAGES.tabletCapsuleProduction, IMAGES.veterinaryPharma, IMAGES.teamCollaboration],
  },
  industries: { banner: IMAGES.pharmaLaboratory },
  training: { banner: IMAGES.training, feature: IMAGES.veterinaryPharma },
  sourcing: {
    banner: IMAGES.pharmaLogistics,
    feature: IMAGES.apiPills,
    strip: [IMAGES.glassPackaging, IMAGES.sourcingWarehouse],
  },
  regulatory: { banner: IMAGES.auditCompliance, feature: IMAGES.regulatoryDesk },
  careers: { banner: IMAGES.careersWorkplace, feature: IMAGES.tabletCapsuleProduction },
  caseStudies: { banner: IMAGES.validation },
  contact: { banner: IMAGES.labPrimary, feature: IMAGES.environmentalMonitoring },
  getQuote: { banner: IMAGES.cleanroom, feature: IMAGES.facilityDesign },
  resources: {
    banner: IMAGES.qualityControl,
    strip: [IMAGES.microbiologyLab, IMAGES.injectableManufacturing, IMAGES.gmpClassroom, IMAGES.veterinaryPharma],
  },
  insights: { banner: IMAGES.labResearch, feature: IMAGES.biotechResearch },
  faq: { banner: IMAGES.medicalDevices },
} as const;

export const COMPANY = {
  name: "LoMars Pharma",
  tagline: "Your Complete Partner in Pharma Excellence",
  description:
    "LoMars Pharma is a premier pharmaceutical consultancy delivering end-to-end solutions — from plant design and validation to GMP audits, QMS implementation, training, and domestic sourcing.",
  address: "Office No.16 Platinum Square, Near St. Xavier School, Silvassa 396230",
  phone: "+91 86306 03509/+91 97149 12040",
  email: "info@lomarspharma.com",
  whatsapp: "918630603509",
  hours: "Monday – Saturday, 9AM – 7PM",
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
} as const;

export const INQUIRY_TYPES = [
  { value: "consultation", label: "General Consultation" },
  { value: "quote", label: "Request a Quote" },
  { value: "audit", label: "Audit / Inspection" },
  { value: "sourcing", label: "Sourcing Inquiry" },
  { value: "training", label: "Training Enrollment" },
  { value: "careers", label: "Career / Job Application" },
] as const;

export const FACILITY_TYPES = [
  { value: "api", label: "API Manufacturing" },
  { value: "formulation", label: "Formulation (OSD / Liquid)" },
  { value: "sterile", label: "Sterile / Injectable" },
  { value: "cmo", label: "CMO / CRO" },
  { value: "packaging", label: "Packaging Unit" },
  { value: "laboratory", label: "QC / R&D Laboratory" },
  { value: "other", label: "Other" },
] as const;

export const PROJECT_TIMELINES = [
  { value: "urgent", label: "Within 2 weeks" },
  { value: "short", label: "1–3 months" },
  { value: "medium", label: "3–6 months" },
  { value: "long", label: "6+ months" },
  { value: "flexible", label: "Flexible / Exploring" },
] as const;

export const PREFERRED_CONTACT = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;

export const NEWSLETTER_INTERESTS = [
  { value: "regulatory", label: "Regulatory Updates" },
  { value: "sourcing", label: "Sourcing & Supply Chain" },
  { value: "training", label: "Training Programs" },
  { value: "careers", label: "Career Opportunities" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    mega: true,
  },
  { href: "/industries", label: "Industries" },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/training", label: "Training" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_RESOURCE_LINKS = [
  { href: "/regulatory", label: "Regulatory Affairs" },
  { href: "/resources", label: "Resources & Downloads" },
  { href: "/insights", label: "Insights & Updates" },
  { href: "/get-quote", label: "Request a Quote" },
  { href: "/faq", label: "FAQ" },
] as const;

export const SERVICES = [
  {
    id: "plant-design",
    title: "Plant Design, Commissioning & Validation",
    description:
      "Facility planning, commissioning, and DQ/IQ/OQ/PQ validation for HVAC, utilities, and cleanroom systems.",
    icon: "Building2",
    href: "/services/plant-design",
    image: IMAGES.facilityDesign,
  },
  {
    id: "gmp-audits",
    title: "Third-Party GMP Audits",
    description:
      "Independent GMP compliance audits for pharmaceutical plants, API facilities, CMOs, and suppliers.",
    icon: "ClipboardCheck",
    href: "/services/gmp-audits",
    image: IMAGES.auditCompliance,
  },
  {
    id: "pre-inspection",
    title: "Pre-Inspection Audits",
    description:
      "Pre-regulatory inspection assessments to identify gaps and strengthen inspection readiness.",
    icon: "SearchCheck",
    href: "/services/pre-inspection",
    image: IMAGES.processEngineering,
  },
  {
    id: "qms",
    title: "Quality Management System (QMS)",
    description:
      "Design, implementation, and upgradation of QMS per EU GMP, PIC/S, and ISO guidelines.",
    icon: "Award",
    href: "/services/qms",
    image: IMAGES.qualityControl,
  },
  {
    id: "training",
    title: "Pharmaceutical Training",
    description:
      "GMP, validation, QA/QC, OSD and sterile manufacturing training with placement support.",
    icon: "GraduationCap",
    href: "/services/training",
    image: IMAGES.gmpClassroom,
  },
  {
    id: "process-re-engineering",
    title: "Process Re-Engineering",
    description:
      "Optimize operations for higher efficiency, cost saving, and reduce risks.",
    icon: "Workflow",
    href: "/services/process-re-engineering",
    image: IMAGES.environmentalMonitoring,
  },
  {
    id: "sourcing",
    title: "Pharmaceutical Sourcing",
    description:
      "Sourcing of APIs, excipients, Packging Material and Finish Product (All Dosages forms) with full QA support.",
    icon: "Package",
    href: "/sourcing",
    image: IMAGES.apiPills,
  },
  {
    id: "talent-acquisition",
    title: "Talent Acquisition",
    description:
      "Recruitment and placement of qualified pharmaceutical professionals across QA, QC, manufacturing, and regulatory affairs.",
    icon: "UserPlus",
    href: "/services/talent-acquisition",
    image: IMAGES.teamCollaboration,
  },
] as const;

export const INDUSTRIES = [
  { title: "Pharmaceuticals", icon: "Pill" },
  { title: "Medical Devices", icon: "Stethoscope" },
  { title: "API & Excipient", icon: "FlaskConical" },
  { title: "Veterinary", icon: "Heart" },
  { title: "Primary Packaging", icon: "Package" },
] as const;

export const INDUSTRY_DETAILS = [
  {
    slug: "pharmaceuticals",
    title: "Pharmaceuticals",
    icon: "Pill",
    image: IMAGES.tabletCapsuleProduction,
    featureImage: IMAGES.injectableManufacturing,
    description:
      "Full-spectrum support for small molecules, generics, and innovative drug development — from dossier preparation to post-approval compliance.",
    capabilities: ["Plant design & validation", "GMP audits", "QMS implementation", "Pre-inspection audits"],
    successStory:
      "Supported a Gujarat-based OSD manufacturer through CDSCO pre-inspection readiness — zero critical observations on subsequent inspection.",
  },
  {
    slug: "medical-devices",
    title: "Medical Devices",
    icon: "Stethoscope",
    image: IMAGES.medicalDevices,
    featureImage: IMAGES.regulatoryDesk,
    description:
      "ISO 13485 implementation and CE marking guidance for Class I–III medical devices.",
    capabilities: ["ISO 13485 QMS", "CE marking", "Regulatory submissions", "Risk management (ISO 14971)"],
    successStory:
      "Implemented ISO 13485 QMS for a Class II device manufacturer, enabling successful CE marking within 8 months.",
  },
  {
    slug: "api-excipient",
    title: "API & Excipient",
    icon: "FlaskConical",
    image: IMAGES.apiPills,
    featureImage: IMAGES.sourcingWarehouse,
    description:
      "Strategic sourcing and quality support for Active Pharmaceutical Ingredients (APIs) and excipients — from vendor qualification to regulatory documentation.",
    capabilities: ["API & excipient sourcing", "Vendor qualification & audits", "DMF & COA review", "GMP compliance for raw materials"],
    successStory:
      "Identified, audited, and qualified three domestic API manufacturers with complete DMF documentation and GMP compliance for a formulation client.",
  },
  {
    slug: "veterinary",
    title: "Veterinary",
    icon: "Heart",
    image: IMAGES.veterinaryPharma,
    featureImage: IMAGES.biotechResearch,
    description:
      "Regulatory and quality support for veterinary pharmaceuticals, feed additives, and animal health products.",
    capabilities: ["VICH compliance", "API sourcing", "GMP for vet products", "Export documentation"],
    successStory:
      "Qualified domestic API suppliers for a veterinary formulation unit, reducing procurement lead times by 30%.",
  },
  {
    slug: "primary-packaging",
    title: "Primary Packaging",
    icon: "Package",
    image: IMAGES.glassPackaging,
    featureImage: IMAGES.pharmaLogistics,
    description:
      "End-to-end support for primary packaging materials like, bottles, vials, ampoules, and closures.",
    capabilities: ["Packaging material qualification", "Vendor Audits", "DMF & regulatory documentation", "Stability & compatibility studies"],
    successStory:
      "Completed vendor qualification and compatibility studies for Type I glass vials used in injectable products.",
  },
] as const;

export const CAREER_BENEFITS = [
  { title: "Industry Exposure", description: "Work with leading pharmaceutical manufacturers across India.", icon: "Building2" },
  { title: "Continuous Learning", description: "Stay at the forefront of regulatory and industry developments.", icon: "GraduationCap" },
  { title: "Impactful Work", description: "Help bring safe, effective medicines to patients across India.", icon: "Heart" },
  { title: "Collaborative Culture", description: "Join a team of seasoned pharma professionals who mentor and support.", icon: "Users" },
] as const;

export const CAREER_OPENINGS = [
  {
    id: "senior-regulatory-affairs",
    title: "Senior Regulatory Affairs Consultant",
    department: "Regulatory Affairs",
    location: "Silvassa, India (Hybrid)",
    type: "Full-time",
    experienceLevel: "8+ years",
    description:
      "Lead regulatory submissions, dossier preparation, and client advisory for domestic and export markets.",
    requirements: [
      "M.Pharm / B.Pharm with 8+ years in regulatory affairs",
      "CDSCO, EU GMP, and PIC/S submission experience",
      "Strong documentation and client communication skills",
    ],
  },
  {
    id: "quality-assurance-specialist",
    title: "Quality Assurance Specialist",
    department: "Quality Assurance",
    location: "Silvassa, India",
    type: "Full-time",
    experienceLevel: "4–6 years",
    description:
      "Support GMP audits, QMS implementation, and pre-inspection readiness for pharmaceutical clients.",
    requirements: [
      "B.Pharm / M.Sc with QA experience in pharma manufacturing",
      "Hands-on GMP audit and deviation/CAPA management",
      "Knowledge of Schedule M and WHO GMP guidelines",
    ],
  },
  {
    id: "sourcing-procurement-analyst",
    title: "Sourcing & Procurement Analyst",
    department: "Sourcing",
    location: "Remote",
    type: "Full-time",
    experienceLevel: "3–5 years",
    description:
      "Identify and qualify domestic API, excipient, and packaging suppliers with full QA documentation support.",
    requirements: [
      "Experience in pharmaceutical procurement or vendor management",
      "Understanding of DMF, COA, and supplier qualification processes",
      "Strong negotiation and supply chain coordination skills",
    ],
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    department: "Sales",
    location: "Mumbai / Delhi",
    type: "Full-time",
    experienceLevel: "2–4 years",
    description:
      "Drive new business in pharmaceutical consultancy, sourcing, and training services across India.",
    requirements: [
      "Bachelor's degree with pharma or healthcare sales background",
      "Proven track record in B2B client acquisition",
      "Willingness to travel for client meetings and industry events",
    ],
  },
] as const;

export const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "", label: "Core Services" },
  { value: 4, suffix: "", label: "Industry Sectors" },
  { value: 8, suffix: "", label: "Compliance Frameworks" },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your needs, goals, and regulatory landscape.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Crafting tailored solutions with clear milestones and deliverables.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Implementing with precision, transparency, and expert oversight.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous improvement and long-term partnership support.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "LoMars Pharma transformed our regulatory strategy. Their expertise helped us achieve CDSCO approval months ahead of schedule.",
    author: "Dr. Rajesh Kumar",
    role: "CEO",
    company: "MedLife Pharmaceuticals",
    avatar: IMAGES.portraits.testimonial1,
  },
  {
    quote:
      "Outstanding sourcing capabilities. They connected us with qualified domestic API suppliers and ensured full quality compliance.",
    author: "Priya Desai",
    role: "Procurement Director",
    company: "Bharat Pharma Ltd.",
    avatar: IMAGES.portraits.testimonial2,
  },
  {
    quote:
      "Their GMP consultancy was instrumental in our facility certification. Professional, thorough, and results-driven.",
    author: "Ahmed Hassan",
    role: "Quality Head",
    company: "PharmaCore Ltd.",
    avatar: IMAGES.portraits.testimonial3,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What services does LoMars Pharma offer?",
    answer:
      "We offer plant design, commissioning and validation, third-party GMP audits, pre-inspection audits, QMS implementation, pharmaceutical training, process re-engineering, domestic sourcing, and talent acquisition services.",
  },
  {
    question: "Which regulatory markets do you support?",
    answer:
      "We support EMA (EU), CDSCO (India), TGA (Australia), PIC/S, and many other international regulatory bodies.",
  },
  {
    question: "How do you ensure supplier quality?",
    answer:
      "Every supplier undergoes rigorous qualification including GMP audits, documentation review, sample testing, and ongoing performance monitoring.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by scope — from 4 weeks for documentation reviews to 6+ months for full regulatory submissions. We provide detailed timelines during discovery.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes. We offer retainer-based support, annual compliance reviews, and strategic advisory for long-term partnerships.",
  },
] as const;

export type ChatbotQA = {
  id: string;
  question: string;
  answer: string;
  keywords: readonly string[];
};

export const CHATBOT_WELCOME =
  `Hi! I'm the ${COMPANY.name} assistant. Ask about our services, GMP audits, validation, sourcing, training, or how to get started.`;

export const CHATBOT_FALLBACK = `I'm not sure about that yet. For detailed help, contact our team at ${COMPANY.email} or call ${COMPANY.phone}. You can also use the quick questions below or visit our contact page.`;

export const CHATBOT_QUICK_QUESTIONS = [
  "What services do you offer?",
  "How can I get a quote?",
  "Do you provide GMP audits?",
  "Where are you located?",
  "What is validation support?",
  "Do you help with API sourcing?",
] as const;

export const CHATBOT_QA: readonly ChatbotQA[] = [
  {
    id: "services",
    question: "What services do you offer?",
    answer:
      "LoMars Pharma offers plant design, commissioning & validation, third-party GMP audits, pre-inspection audits, QMS implementation, pharmaceutical training, process re-engineering, domestic sourcing (API, excipients, packaging, finished products), and talent acquisition.",
    keywords: ["service", "services", "offer", "what do you", "help with", "consultancy"],
  },
  {
    id: "quote",
    question: "How can I get a quote?",
    answer:
      "Visit our Get Quote page or contact form with your project scope. We'll schedule a discovery discussion and share a tailored proposal with timelines and deliverables.",
    keywords: ["quote", "pricing", "cost", "price", "estimate", "proposal"],
  },
  {
    id: "gmp-audits",
    question: "Do you provide GMP audits?",
    answer:
      "Yes. We conduct third-party GMP audits, pre-inspection audits, supplier audits, and mock inspections for pharmaceutical plants, API facilities, CMOs, and vendors — aligned with WHO-GMP, EU GMP, PIC/S, and CDSCO requirements.",
    keywords: ["gmp", "audit", "inspection", "mock", "compliance audit", "third party"],
  },
  {
    id: "validation",
    question: "What is validation support?",
    answer:
      "We support full qualification and validation — DQ, IQ, OQ, PQ for equipment and utilities, process validation, cleaning validation, computer system validation (CSV), and analytical method validation per Annex 15 and regulatory guidelines.",
    keywords: ["validation", "qualification", "iq oq pq", "dq", "commissioning", "csv", "cleaning validation"],
  },
  {
    id: "qms",
    question: "Do you implement QMS?",
    answer:
      "Yes. We design, implement, document, and upgrade Quality Management Systems per EU GMP, PIC/S, ISO, and Schedule M — including SOPs, change control, CAPA, deviation management, and audit readiness.",
    keywords: ["qms", "quality management", "sop", "quality system", "capa"],
  },
  {
    id: "sourcing",
    question: "Do you help with API sourcing?",
    answer:
      "Yes. We source APIs, excipients, packaging materials, and finished dosage forms across India with vendor qualification, GMP audits, COA review, and supply-chain traceability support.",
    keywords: ["sourcing", "api", "excipient", "supplier", "vendor", "raw material", "packaging"],
  },
  {
    id: "training",
    question: "Do you offer pharma training?",
    answer:
      "We provide GMP, validation, QA/QC, OSD, and sterile manufacturing training programs — including documentation practices and compliance workshops for your teams.",
    keywords: ["training", "course", "workshop", "gmp training", "learn"],
  },
  {
    id: "regulatory",
    question: "Which regulatory standards do you support?",
    answer:
      "We support CDSCO (India), WHO-GMP, EU GMP, PIC/S, ICH guidelines, ISO 9001/13485, Schedule M, and related international quality and regulatory frameworks.",
    keywords: ["regulatory", "cdsco", "who", "eu gmp", "pics", "schedule m", "standard"],
  },
  {
    id: "location",
    question: "Where are you located?",
    answer: `We are based in Silvassa, India — ${COMPANY.address}. We support pharmaceutical manufacturers across India and work with clients on domestic compliance and sourcing needs.`,
    keywords: ["location", "address", "where", "office", "silvassa", "based"],
  },
  {
    id: "contact",
    question: "How do I contact you?",
    answer: `Email us at ${COMPANY.email}, call ${COMPANY.phone}, or message on WhatsApp. Office hours: ${COMPANY.hours}.`,
    keywords: ["contact", "email", "phone", "call", "reach", "whatsapp", "talk"],
  },
  {
    id: "timeline",
    question: "What is your typical project timeline?",
    answer:
      "Timelines depend on scope — from a few weeks for documentation or gap assessments to several months for facility validation or full QMS implementation. We share a clear timeline after the discovery phase.",
    keywords: ["timeline", "how long", "duration", "time", "weeks", "months"],
  },
  {
    id: "facility-design",
    question: "Do you design pharmaceutical facilities?",
    answer:
      "Yes. We support conceptual design, layout optimization, cleanroom classification, utility planning, and GMP-compliant facility engineering for OSD, sterile, API, and biotech manufacturing sites.",
    keywords: ["facility", "plant design", "cleanroom", "engineering", "layout", "design"],
  },
  {
    id: "talent",
    question: "Do you provide recruitment support?",
    answer:
      "Yes. We help place skilled professionals in QA, QC, manufacturing, validation, regulatory affairs, and engineering roles across the pharmaceutical industry.",
    keywords: ["recruitment", "hiring", "talent", "jobs", "placement", "staff"],
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer:
      "Share your requirements via our contact page or Get Quote form. We'll arrange a discovery call, understand your compliance or operational goals, and propose the right engagement model.",
    keywords: ["get started", "begin", "start", "first step", "onboard"],
  },
] as const;

export const COMPLIANCE_STANDARDS = [
  "CDSCO", "WHO GMP", "EU GMP", "PIC/S",
  "ISO 9001", "ISO 13485", "ICH Guidelines", "Schedule M",
] as const;

export const ABOUT_SYNOPSIS = {
  intro:
    "We are a professional pharmaceutical consultancy dedicated to providing end-to-end solutions for the pharmaceutical, biotechnology, and healthcare industries. Our expertise spans the complete lifecycle of pharmaceutical manufacturing, from facility design and regulatory compliance to quality systems and strategic sourcing.",
  closing:
    "Together, our experts bring more than 100 years of combined experience across diverse sectors of the pharmaceutical industry, having worked with leading pharmaceutical organizations. The Team Mamebrs possess extensive knowledge of international regulatory standards, including WHO-GMP, EU GMP, PIC/S, MHRA, and other global quality requirements.",
} as const;

export const ABOUT_CORE_SERVICES = [
  {
    title: "Pharmaceutical Facility Design & Engineering",
    description:
      "Conceptualization, planning, layout optimization, and GMP-compliant facility design.",
    icon: "Building2",
  },
  {
    title: "Quality Management System (QMS) Development",
    description:
      "Design, implementation, documentation, and continuous improvement of robust quality management systems.",
    icon: "Award",
  },
  {
    title: "Qualification & Validation",
    description:
      "Equipment qualification (DQ, IQ, OQ, PQ), process validation, cleaning validation, computer system validation, and analytical method validation.",
    icon: "ClipboardCheck",
  },
  {
    title: "Regulatory Compliance & Audits",
    description:
      "GMP compliance, regulatory gap assessments, mock inspections, third-party audits, supplier audits, and internal quality audits.",
    icon: "SearchCheck",
  },
  {
    title: "Talent Acquisition & Recruitment",
    description:
      "Identification and placement of skilled pharmaceutical professionals across manufacturing, quality, regulatory affairs, engineering, and R&D.",
    icon: "UserPlus",
  },
  {
    title: "API & Pharmaceutical Dosage Form Sourcing",
    description:
      "Strategic sourcing of Active Pharmaceutical Ingredients (APIs), excipients, finished formulations, and reliable manufacturing partners.",
    icon: "Package",
  },
] as const;

export const ABOUT_TEAM_EXPERTISE = [
  "Pharmacists",
  "Microbiologists",
  "Quality Assurance Specialists",
  "Quality Control Experts",
  "Validation Professionals",
  "Engineering Experts",
] as const;

export const TIMELINE = [
  { year: "2020", title: "Founded", description: "LoMars Pharma established in Silvassa, India with a vision to support pharmaceutical excellence." },
  { year: "2024", title: "Services Launched", description: "Introduced GMP audits, QMS implementation, and regulatory consultancy services." },
  { year: "2025", title: "Expanded Offerings", description: "Added pharmaceutical training, sourcing support, and talent acquisition services." },
  { year: "2026", title: "Growing Forward", description: "Building partnerships across India's pharmaceutical industry with end-to-end consultancy." },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Deep Expertise",
    description: "15+ years of pharmaceutical industry experience across India's regulatory landscape.",
    icon: "Brain",
  },
  {
    title: "Domestic Focus",
    description: "Strong understanding of India's pharma hubs, suppliers, and compliance requirements.",
    icon: "Network",
  },
  {
    title: "End-to-End Solutions",
    description: "From concept to commercialization — one trusted partner.",
    icon: "Layers",
  },
  {
    title: "Dedicated Support",
    description: "Hands-on guidance from discovery through implementation and beyond.",
    icon: "Target",
  },
] as const;

export const SOURCING_MATERIALS = [
  {
    title: "API Sourcing",
    description: "Regulated and non-regulated APIs from qualified domestic manufacturers with DMF and regulatory documentation support.",
    icon: "FlaskConical",
  },
  {
    title: "Excipient Sourcing",
    description: "Pharmaceutical excipients meeting USP, EP, BP, and pharmacopeial standards for all dosage forms.",
    icon: "Beaker",
  },
  {
    title: "Glass Container Solutions",
    description: "Type I, II, and III glass vials, ampoules, bottles, cartridges, and syringe components.",
    icon: "Package",
  },
  {
    title: "Quality & Compliance",
    description: "Vendor qualification, GMP audits, COA verification, and full supply-chain traceability.",
    icon: "ShieldCheck",
  },
] as const;

export const MD_MESSAGE = {
  name: "Rohit Singh",
  title: "Managing Director",
  message:
    "At LoMars Pharma, we are committed to being more than consultants — we are partners in your journey toward pharmaceutical excellence. With a deep understanding of India's regulatory landscape and global quality standards. Our team works tirelessly to help manufacturers achieve compliance, operational efficiency, and sustainable growth. Whether you are building a new facility, preparing for an inspection, or strengthening your quality systems, we bring the expertise and dedication your organization deserves.",
} as const;

export const CASE_STUDIES = [
  {
    id: "facility-validation",
    title: "Facility Validation",
    client: "MedLife Pharmaceuticals",
    service: "Plant Design & Validation",
    industry: "Pharmaceuticals",
    image: IMAGES.validation,
    challenge: "New OSD facility required complete HVAC and purified water system validation before commercial production.",
    solution: "Executed DQ/IQ/OQ/PQ protocols for HVAC, WFI, and compressed air systems with full documentation per EU GMP Annex 15.",
    result: "Full PQ achieved ahead of schedule; facility cleared for commercial batch manufacturing.",
    metric: "Full PQ achieved",
    timeline: "4 months",
  },
  {
    id: "qms-implementation",
    title: "QMS Implementation",
    client: "PharmaCore Ltd.",
    service: "Quality Management System",
    industry: "Pharmaceuticals",
    image: IMAGES.microbiologyLab,
    challenge: "Three manufacturing sites operated with inconsistent quality systems and audit findings across locations.",
    solution: "Designed and rolled out harmonized QMS aligned with WHO GMP and PIC/S across all three facilities.",
    result: "Unified QMS deployed with standardized SOPs, deviation management, and CAPA workflows.",
    metric: "3 facilities certified",
    timeline: "6 months",
  },
  {
    id: "pre-inspection-readiness",
    title: "Pre-Inspection Readiness",
    client: "Bharat Formulations",
    service: "Pre-Inspection Audits",
    industry: "Pharmaceuticals",
    image: IMAGES.tabletCapsuleProduction,
    challenge: "Upcoming CDSCO inspection with prior minor observations in documentation and data integrity.",
    solution: "Conducted mock inspection, gap assessment, and remediation support across QA, production, and QC.",
    result: "Zero critical observations during subsequent CDSCO inspection.",
    metric: "Inspection ready",
    timeline: "6 weeks",
  },
  {
    id: "api-sourcing",
    title: "Domestic API Sourcing",
    client: "Bharat Pharma Ltd.",
    service: "Pharmaceutical Sourcing",
    industry: "Pharmaceuticals",
    image: IMAGES.pharmaLogistics,
    challenge: "Needed qualified domestic API suppliers with full DMF documentation and GMP compliance.",
    solution: "Identified, audited, and qualified three API manufacturers with complete regulatory documentation.",
    result: "Reliable supply chain established with 25% cost reduction vs. import alternatives.",
    metric: "3 suppliers qualified",
    timeline: "8 weeks",
  },
  {
    id: "gmp-audit-remediation",
    title: "GMP Audit & Remediation",
    client: "HealthSpan Biotech",
    service: "Third-Party GMP Audits",
    industry: "Pharmaceuticals",
    image: IMAGES.injectableManufacturing,
    challenge: "Sterile injectable facility required independent GMP audit before partner qualification.",
    solution: "Performed comprehensive third-party audit covering aseptic processing, environmental monitoring, and media fills.",
    result: "All major gaps closed within 90 days; partner qualification successfully completed.",
    metric: "Audit passed",
    timeline: "3 months",
  },
  {
    id: "iso-13485-implementation",
    title: "ISO 13485 Implementation",
    client: "MedDevice Innovations",
    service: "QMS Implementation",
    industry: "Medical Devices",
    image: IMAGES.pharmaConsultation,
    challenge: "Class II medical device startup needed ISO 13485 certification for market entry.",
    solution: "Built complete QMS including design controls, risk management per ISO 14971, and supplier controls.",
    result: "ISO 13485 certification achieved; CE marking pathway established.",
    metric: "ISO 13485 certified",
    timeline: "8 months",
  },
] as const;

export const TRAINING_PROGRAMS = [
  {
    id: "gmp-fundamentals",
    title: "GMP Fundamentals",
    duration: "3 days",
    mode: "Classroom / Online",
    level: "Beginner",
    description: "Core principles of Good Manufacturing Practice — personnel hygiene, documentation, deviation handling, and batch records.",
    topics: ["GMP principles & history", "Personnel & hygiene", "Documentation & batch records", "Deviation & CAPA basics"],
    certification: "Certificate of Completion",
  },
  {
    id: "validation-mastery",
    title: "Validation Mastery (DQ/IQ/OQ/PQ)",
    duration: "5 days",
    mode: "Classroom",
    level: "Intermediate",
    description: "Hands-on training on equipment and process validation protocols per EU GMP Annex 15 and WHO guidelines.",
    topics: ["Validation lifecycle", "Protocol writing", "HVAC & utility validation", "Process & cleaning validation"],
    certification: "Certificate of Completion + Practical Assessment",
  },
  {
    id: "qa-qc-laboratory",
    title: "QA/QC Laboratory Practices",
    duration: "4 days",
    mode: "Classroom",
    level: "Intermediate",
    description: "Laboratory quality systems, OOS/OOT investigations, method validation, and stability studies.",
    topics: ["Lab GMP", "OOS/OOT investigation", "Analytical method validation", "Stability program design"],
    certification: "Certificate of Completion",
  },
  {
    id: "osd-manufacturing",
    title: "OSD Manufacturing Operations",
    duration: "3 days",
    mode: "Classroom / On-site",
    level: "Intermediate",
    description: "Tablet and capsule manufacturing — granulation, compression, coating, and in-process controls.",
    topics: ["Unit operations", "In-process controls", "Equipment qualification", "Troubleshooting common defects"],
    certification: "Certificate of Completion",
  },
  {
    id: "sterile-manufacturing",
    title: "Sterile / Injectable Manufacturing",
    duration: "5 days",
    mode: "Classroom",
    level: "Advanced",
    description: "Aseptic processing, environmental monitoring, media fills, and contamination control strategies.",
    topics: ["Aseptic technique", "Cleanroom behavior", "Media fill design", "Environmental monitoring"],
    certification: "Certificate of Completion + Assessment",
  },
  {
    id: "regulatory-affairs",
    title: "Regulatory Affairs Essentials",
    duration: "4 days",
    mode: "Online",
    level: "Intermediate",
    description: "CDSCO submissions, dossier structure, ANDA/CTD format, and post-approval change management.",
    topics: ["CDSCO framework", "CTD dossier structure", "Schedule M compliance", "Variation submissions"],
    certification: "Certificate of Completion",
  },
] as const;

export const TRAINING_BENEFITS = [
  { title: "Industry-Experienced Trainers", description: "Learn from consultants with 15+ years in pharma QA, validation, and regulatory affairs.", icon: "GraduationCap" },
  { title: "Practical Case Studies", description: "Real-world scenarios from GMP audits, inspections, and facility validations.", icon: "ClipboardCheck" },
  { title: "Placement Support", description: "Career guidance and placement assistance for eligible program graduates.", icon: "UserPlus" },
  { title: "Flexible Delivery", description: "On-site, classroom, and online modes to suit your team's schedule.", icon: "Calendar" },
] as const;

export const REGULATORY_SERVICES = [
  {
    title: "CDSCO & Schedule M Compliance",
    description: "Domestic regulatory compliance including manufacturing license, product approvals, and Schedule M gap assessments.",
    icon: "ShieldCheck",
    items: ["Manufacturing license support", "Schedule M gap analysis", "Product approval filings", "Post-approval changes"],
  },
  {
    title: "EU GMP & PIC/S",
    description: "Export market readiness with EU GMP compliance, PIC/S alignment, and international audit preparation.",
    icon: "Globe",
    items: ["EU GMP gap assessment", "PIC/S audit readiness", "Annex compliance reviews", "Export documentation"],
  },
  {
    title: "WHO GMP Certification",
    description: "WHO prequalification and GMP certification support for APIs and finished formulations.",
    icon: "Award",
    items: ["WHO GMP self-inspection", "Prequalification dossier", "Mock WHO audits", "Remediation support"],
  },
  {
    title: "Dossier & Submission Support",
    description: "CTD dossier preparation, ANDA-style submissions, and regulatory writing for domestic and export markets.",
    icon: "FileText",
    items: ["CTD module preparation", "Quality overall summary", "Regulatory writing", "Response to queries"],
  },
  {
    title: "Mock Inspections",
    description: "Simulated regulatory inspections to identify gaps before the actual authority visit.",
    icon: "SearchCheck",
    items: ["CDSCO mock inspections", "Data integrity reviews", "Documentation audits", "Remediation planning"],
  },
  {
    title: "Pharmacovigilance & Post-Market",
    description: "Adverse event reporting systems and post-market surveillance framework setup.",
    icon: "HeartPulse",
    items: ["PV system design", "ADR reporting setup", "PSUR preparation", "Risk management plans"],
  },
] as const;

export const RESOURCES = [
  {
    id: "gmp-audit-checklist",
    title: "GMP Audit Checklist",
    description: "Comprehensive checklist covering production, QC, warehousing, and documentation areas for internal and supplier audits.",
    type: "PDF Guide",
    category: "Quality Assurance",
  },
  {
    id: "pre-inspection-guide",
    title: "Pre-Inspection Readiness Guide",
    description: "Step-by-step guide to prepare your facility for CDSCO and WHO GMP inspections.",
    type: "PDF Guide",
    category: "Regulatory",
  },
  {
    id: "supplier-qualification-template",
    title: "Supplier Qualification Template",
    description: "Ready-to-use template for qualifying API, excipient, and packaging material suppliers.",
    type: "Template",
    category: "Sourcing",
  },
  {
    id: "validation-protocol-overview",
    title: "Validation Protocol Overview",
    description: "Reference guide for DQ, IQ, OQ, and PQ protocol structure and acceptance criteria.",
    type: "PDF Guide",
    category: "Validation",
  },
  {
    id: "schedule-m-summary",
    title: "Schedule M Compliance Summary",
    description: "Key requirements of Schedule M for pharmaceutical manufacturing in India — at a glance.",
    type: "PDF Guide",
    category: "Regulatory",
  },
  {
    id: "deviation-capa-template",
    title: "Deviation & CAPA Template",
    description: "Standard templates for deviation reporting, investigation, and corrective/preventive action.",
    type: "Template",
    category: "Quality Assurance",
  },
] as const;

export const INSIGHTS = [
  {
    slug: "schedule-m-2025-updates",
    title: "Schedule M 2025: Key Updates for Pharmaceutical Manufacturers",
    excerpt: "Understanding the latest Schedule M revisions and what they mean for your manufacturing facility compliance.",
    category: "Regulatory",
    date: "2026-03-15",
    readTime: "6 min",
    author: "Priya Sharma",
    content: [
      "The revised Schedule M guidelines introduce stricter requirements for pharmaceutical manufacturing facilities in India. Manufacturers must now demonstrate enhanced data integrity controls, robust environmental monitoring, and comprehensive contamination control strategies.",
      "Key areas of focus include computerized systems validation, quality risk management integration, and personnel qualification documentation. Facilities operating under older approvals should conduct a gap assessment against the updated requirements.",
      "LoMars Pharma recommends a phased remediation approach — starting with critical GMP areas (production, QC, and warehousing) and expanding to support functions. Mock inspections can help identify gaps before regulatory authority visits.",
    ],
  },
  {
    slug: "gmp-audit-preparation-tips",
    title: "5 Essential Tips for GMP Audit Preparation",
    excerpt: "Practical steps to ensure your facility is inspection-ready — from documentation review to personnel briefing.",
    category: "Quality Assurance",
    date: "2026-02-28",
    readTime: "5 min",
    author: "Dr. Vikram Mehta",
    content: [
      "Successful GMP audits begin weeks before the inspector arrives. Start with a comprehensive documentation review — batch records, deviation logs, CAPA closures, and change control records should be current and traceable.",
      "Conduct mock interviews with key personnel. Operators, supervisors, and QA staff should be able to explain their roles, current batch status, and how they handle deviations without referring to scripts.",
      "Verify that your environmental monitoring data, equipment calibration records, and cleaning validation reports are readily accessible. Data integrity — ALCOA+ principles — is increasingly scrutinized during inspections.",
      "Ensure the facility is physically audit-ready: cleanrooms properly maintained, logbooks up to date, and material flow clearly demarcated. A walk-through with fresh eyes often reveals gaps that daily operations overlook.",
      "Finally, designate an audit coordinator who manages inspector requests, document retrieval, and communication between departments. Clear roles reduce confusion and project professionalism.",
    ],
  },
  {
    slug: "domestic-api-sourcing-guide",
    title: "Guide to Domestic API Sourcing in India",
    excerpt: "How to identify, qualify, and manage domestic API suppliers with full regulatory compliance.",
    category: "Sourcing",
    date: "2026-02-10",
    readTime: "7 min",
    author: "James O'Brien",
    content: [
      "India's API manufacturing landscape spans Gujarat, Maharashtra, Telangana, and Himachal Pradesh — each hub with distinct strengths. Selecting the right supplier requires more than competitive pricing; GMP compliance, DMF availability, and supply reliability are equally critical.",
      "A robust supplier qualification program includes on-site GMP audits, documentation review (DMF, COA, stability data), sample testing, and ongoing performance monitoring. Vendor approval should be based on a risk-based approach aligned with the material's criticality.",
      "Domestic sourcing offers advantages in lead time, regulatory familiarity, and supply chain resilience. However, due diligence remains essential — not all domestic manufacturers maintain the same quality standards.",
      "LoMars Pharma's sourcing team maintains a qualified supplier network across India's key pharma hubs, supporting clients from identification through delivery and QA release.",
    ],
  },
  {
    slug: "validation-best-practices",
    title: "Validation Best Practices for HVAC & Utility Systems",
    excerpt: "Key considerations for DQ/IQ/OQ/PQ of critical pharmaceutical utility systems.",
    category: "Validation",
    date: "2026-01-20",
    readTime: "8 min",
    author: "Priya Sharma",
    content: [
      "HVAC and utility systems form the backbone of pharmaceutical manufacturing environments. Validation of these systems must demonstrate consistent performance under operational conditions and worst-case scenarios.",
      "Design Qualification (DQ) should confirm that system design meets user requirements and regulatory standards. Installation Qualification (IQ) verifies correct installation per design specifications. Operational Qualification (OQ) tests system performance across defined operating ranges.",
      "Performance Qualification (PQ) is conducted under actual production conditions to demonstrate consistent performance over time. For HVAC systems, this includes particle counts, pressure differentials, temperature, and humidity mapping.",
      "Documentation is critical — validation protocols, test results, deviation handling, and final reports must form a complete, traceable package. Revalidation triggers include significant changes, periodic review findings, and regulatory requirements.",
    ],
  },
] as const;

export const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based",
    description: "Fixed-scope engagements with defined deliverables, milestones, and timelines — ideal for validations, audits, and QMS implementation.",
    icon: "Target",
    features: ["Clear scope & deliverables", "Milestone-based billing", "Dedicated project team"],
  },
  {
    title: "Retainer Advisory",
    description: "Ongoing regulatory and quality advisory support with monthly hours — perfect for continuous compliance needs.",
    icon: "Calendar",
    features: ["Monthly advisory hours", "Priority response", "Quarterly compliance reviews"],
  },
  {
    title: "Audit-Only",
    description: "Standalone GMP, supplier, or pre-inspection audits with detailed findings report and remediation roadmap.",
    icon: "ClipboardCheck",
    features: ["Independent assessment", "Detailed audit report", "Remediation guidance"],
  },
] as const;

export const CERTIFICATIONS = [
  { title: "WHO GMP", description: "Consultancy aligned with WHO Good Manufacturing Practice guidelines." },
  { title: "EU GMP", description: "Expertise in European Union GMP requirements and Annex compliance." },
  { title: "PIC/S", description: "Pharmaceutical Inspection Co-operation Scheme standards." },
  { title: "ISO 9001", description: "Quality management systems implementation support." },
  { title: "ISO 13485", description: "Medical device quality management systems." },
  { title: "Schedule M", description: "India-specific manufacturing compliance expertise." },
] as const;

export const CAREER_TESTIMONIALS = [
  {
    quote: "Working at LoMars gave me exposure to diverse pharma facilities across India. The mentorship from senior consultants accelerated my career in QA.",
    author: "Anita Patel",
    role: "Quality Assurance Specialist",
    tenure: "2 years",
  },
  {
    quote: "The collaborative culture and continuous learning opportunities make this an ideal place for regulatory professionals who want real impact.",
    author: "Rahul Verma",
    role: "Regulatory Affairs Consultant",
    tenure: "3 years",
  },
] as const;

export const HIRING_PROCESS = [
  { step: "01", title: "Apply", description: "Submit your application via our contact form or email careers@lomarspharma.com." },
  { step: "02", title: "Screen", description: "Our HR team reviews your profile and schedules an initial conversation." },
  { step: "03", title: "Interview", description: "Technical and cultural fit interviews with team leads and leadership." },
  { step: "04", title: "Offer", description: "Successful candidates receive an offer with competitive compensation and benefits." },
] as const;
