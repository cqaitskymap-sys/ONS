export const COMPANY = {
  name: "LoMars Pharma",
  tagline: "Your Complete Partner in Pharma Excellence",
  description:
    "LoMars Pharma is a premier pharmaceutical consultancy delivering end-to-end solutions — from regulatory compliance and quality assurance to global sourcing and manufacturing excellence.",
  address: "Office No.16 Platinum Square, Near St. Xavier School, Silvassa 396230",
  phone: "+91 9714912040",
  email: "info@lomarspharma.com",
  whatsapp: "919714912040",
  hours: "Monday – Saturday, 9AM – 7PM",
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    mega: true,
  },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    title: "Regulatory Affairs",
    description:
      "Navigate complex global regulations with expert guidance on dossier preparation, submissions, and compliance.",
    icon: "Shield",
    href: "/services#regulatory",
  },
  {
    title: "Quality Assurance",
    description:
      "Implement robust QA systems aligned with GMP, WHO, and international pharmacopoeia standards.",
    icon: "Award",
    href: "/services#quality",
  },
  {
    title: "Manufacturing Consultancy",
    description:
      "Optimize production processes, scale operations, and achieve manufacturing excellence.",
    icon: "Factory",
    href: "/services#manufacturing",
  },
  {
    title: "Pharma Sourcing",
    description:
      "Connect with verified global suppliers for APIs, excipients, and packaging materials.",
    icon: "Globe",
    href: "/sourcing",
  },
  {
    title: "Validation Services",
    description:
      "Comprehensive validation protocols for equipment, processes, cleaning, and computer systems.",
    icon: "CheckCircle",
    href: "/services#validation",
  },
  {
    title: "Market Entry Strategy",
    description:
      "Strategic planning for entering new markets with regulatory and commercial insights.",
    icon: "TrendingUp",
    href: "/services#market",
  },
] as const;

export const INDUSTRIES = [
  { title: "Pharmaceuticals", icon: "Pill" },
  { title: "Biotechnology", icon: "Dna" },
  { title: "Nutraceuticals", icon: "Leaf" },
  { title: "Cosmeceuticals", icon: "Sparkles" },
  { title: "Medical Devices", icon: "Stethoscope" },
  { title: "Veterinary", icon: "Heart" },
] as const;

export const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Global Partners" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
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
      "LoMars Pharma transformed our regulatory strategy. Their expertise helped us achieve FDA approval months ahead of schedule.",
    author: "Dr. Rajesh Kumar",
    role: "CEO, MedLife Pharmaceuticals",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "Outstanding sourcing capabilities. They connected us with premium API suppliers and ensured full quality compliance.",
    author: "Sarah Mitchell",
    role: "Procurement Director, GlobalPharm Inc.",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "Their GMP consultancy was instrumental in our WHO prequalification. Professional, thorough, and results-driven.",
    author: "Ahmed Hassan",
    role: "Quality Head, PharmaCore Ltd.",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350f70c0e?w=100&h=100&fit=crop&crop=face",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What services does LoMars Pharma offer?",
    answer:
      "We offer comprehensive pharmaceutical consultancy including regulatory affairs, quality assurance, manufacturing consultancy, validation services, global sourcing, and market entry strategy.",
  },
  {
    question: "Which regulatory markets do you support?",
    answer:
      "We support FDA (US), EMA (EU), WHO, CDSCO (India), TGA (Australia), and many other international regulatory bodies.",
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

export const TRUSTED_LOGOS = [
  "Pfizer", "Novartis", "Roche", "GSK", "Sanofi", "AstraZeneca",
  "Bayer", "Merck", "Abbott", "Teva",
] as const;

export const TIMELINE = [
  { year: "2010", title: "Founded", description: "LoMars Pharma established in Silvassa, India." },
  { year: "2014", title: "Global Expansion", description: "Extended services to Middle East and Southeast Asia." },
  { year: "2018", title: "WHO Partnership", description: "Became WHO-prequalified consultancy partner." },
  { year: "2022", title: "Digital Transformation", description: "Launched digital sourcing and compliance platform." },
  { year: "2026", title: "Industry Leader", description: "200+ projects delivered across 30+ countries." },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Deep Expertise",
    description: "15+ years of pharmaceutical industry experience across all major markets.",
    icon: "Brain",
  },
  {
    title: "Global Network",
    description: "Verified supplier and regulatory networks spanning 30+ countries.",
    icon: "Network",
  },
  {
    title: "End-to-End Solutions",
    description: "From concept to commercialization — one trusted partner.",
    icon: "Layers",
  },
  {
    title: "Proven Results",
    description: "98% client satisfaction with measurable regulatory outcomes.",
    icon: "Target",
  },
] as const;

export const SOURCING_MATERIALS = [
  {
    title: "API Materials",
    description: "Active Pharmaceutical Ingredients from WHO-GMP certified manufacturers worldwide.",
    icon: "FlaskConical",
  },
  {
    title: "Excipients",
    description: "High-purity excipients meeting pharmacopoeial standards for all dosage forms.",
    icon: "Beaker",
  },
  {
    title: "Packaging Materials",
    description: "Primary and secondary packaging compliant with international standards.",
    icon: "Package",
  },
  {
    title: "Quality Assurance",
    description: "Full traceability, COA verification, and batch-to-batch consistency checks.",
    icon: "ShieldCheck",
  },
] as const;

export const LEADERSHIP = [
  {
    name: "Dr. Vikram Mehta",
    role: "Founder & CEO",
    bio: "25+ years in pharmaceutical regulatory affairs and global market access.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Head of Quality",
    bio: "Former WHO inspector with expertise in GMP and validation systems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James O'Brien",
    role: "Director of Sourcing",
    bio: "Global supply chain expert with networks across Asia, Europe, and Americas.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
] as const;

export const CERTIFICATIONS = [
  "ISO 9001:2015",
  "WHO-GMP",
  "FDA Registered",
  "EU GMP",
  "CDSCO Approved",
  "ISO 13485",
] as const;
