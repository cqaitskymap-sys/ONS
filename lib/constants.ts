export const LOGO = {
  src: "/logo.png",
  alt: "LoMars Pharma logo featuring a 3D green and silver globe with a medical cross and orbital ring, above the text LoMars Pharma — Care Made Convenient.",
  width: 500,
  height: 500,
} as const;

export const COMPANY = {
  name: "LoMars Pharma",
  tagline: "Your Complete Partner in Pharma Excellence",
  description:
    "LoMars Pharma is a premier pharmaceutical consultancy delivering end-to-end solutions — from plant design and validation to GMP audits, QMS implementation, training, and domestic sourcing.",
  address: "Office No.16 Platinum Square, Near St. Xavier School, Silvassa 396230",
  phone: "+91 86306 03509",
  email: "info@lomarspharma.com",
  whatsapp: "918630603509",
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
  { href: "/industries", label: "Industries" },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    title: "Plant Design, Commissioning & Validation",
    description:
      "Facility planning, commissioning, and DQ/IQ/OQ/PQ validation for HVAC, utilities, and cleanroom systems.",
    icon: "Building2",
    href: "/services?service=plant-design",
  },
  {
    title: "Third-Party GMP Audits",
    description:
      "Independent GMP compliance audits for pharmaceutical plants, API facilities, CMOs, and suppliers.",
    icon: "ClipboardCheck",
    href: "/services?service=gmp-audits",
  },
  {
    title: "Pre-Inspection Audits",
    description:
      "Pre-regulatory inspection assessments to identify gaps and strengthen inspection readiness.",
    icon: "SearchCheck",
    href: "/services?service=pre-inspection",
  },
  {
    title: "Quality Management System (QMS)",
    description:
      "Design, implementation, and upgradation of QMS per EU GMP, PIC/S, and ISO guidelines.",
    icon: "Award",
    href: "/services?service=qms",
  },
  {
    title: "Pharmaceutical Training",
    description:
      "GMP, validation, QA/QC, OSD and sterile manufacturing training with placement support.",
    icon: "GraduationCap",
    href: "/services?service=training",
  },
  {
    title: "Pharmaceutical Sourcing",
    description:
      "Sourcing of APIs, excipients, Packging Material and Finish Product (All Dosages forms) with full QA support.",
    icon: "Package",
    href: "/sourcing",
  },
  {
    title: "Talent Acquisition",
    description:
      "Recruitment and placement of qualified pharmaceutical professionals across QA, QC, manufacturing, and regulatory affairs.",
    icon: "UserPlus",
    href: "/services?service=talent-acquisition",
  },
] as const;

export const INDUSTRIES = [
  { title: "Pharmaceuticals", icon: "Pill" },
  { title: "Medical Devices", icon: "Stethoscope" },
  { title: "Veterinary", icon: "Heart" },
] as const;

export const INDUSTRY_DETAILS = [
  {
    title: "Pharmaceuticals",
    icon: "Pill",
    description:
      "Full-spectrum support for small molecules, generics, and innovative drug development — from dossier preparation to post-approval compliance.",
    capabilities: ["Plant design & validation", "GMP audits", "QMS implementation", "Pre-inspection audits"],
  },
  {
    title: "Medical Devices",
    icon: "Stethoscope",
    description:
      "ISO 13485 implementation and CE marking guidance for Class I–III medical devices.",
    capabilities: ["ISO 13485 QMS", "CE marking", "Regulatory submissions", "Risk management (ISO 14971)"],
  },
  {
    title: "Veterinary",
    icon: "Heart",
    description:
      "Regulatory and quality support for veterinary pharmaceuticals, feed additives, and animal health products.",
    capabilities: ["VICH compliance", "API sourcing", "GMP for vet products", "Export documentation"],
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
    title: "Senior Regulatory Affairs Consultant",
    department: "Regulatory Affairs",
    location: "Silvassa, India (Hybrid)",
    type: "Full-time",
  },
  {
    title: "Quality Assurance Specialist",
    department: "Quality Assurance",
    location: "Silvassa, India",
    type: "Full-time",
  },
  {
    title: "Sourcing & Procurement Analyst",
    department: "Sourcing",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Business Development Executive",
    department: "Sales",
    location: "Mumbai / Delhi",
    type: "Full-time",
  },
] as const;

export const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 7, suffix: "", label: "Core Services" },
  { value: 6, suffix: "", label: "Industry Sectors" },
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
    role: "CEO, MedLife Pharmaceuticals",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "Outstanding sourcing capabilities. They connected us with qualified domestic API suppliers and ensured full quality compliance.",
    author: "Priya Desai",
    role: "Procurement Director, Bharat Pharma Ltd.",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote:
      "Their GMP consultancy was instrumental in our facility certification. Professional, thorough, and results-driven.",
    author: "Ahmed Hassan",
    role: "Quality Head, PharmaCore Ltd.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What services does LoMars Pharma offer?",
    answer:
      "We offer plant design, commissioning and validation, third-party GMP audits, pre-inspection audits, QMS implementation, pharmaceutical training, domestic sourcing, and talent acquisition services.",
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

export const COMPLIANCE_STANDARDS = [
  "CDSCO", "WHO GMP", "EU GMP", "PIC/S",
  "ISO 9001", "ISO 13485", "ICH Guidelines", "Schedule M",
] as const;

export const ABOUT_SYNOPSIS = {
  intro:
    "We are a professional pharmaceutical consultancy dedicated to providing end-to-end solutions for the pharmaceutical, biotechnology, and healthcare industries. Our expertise spans the complete lifecycle of pharmaceutical manufacturing, from facility design and regulatory compliance to quality systems and strategic sourcing.",
  closing:
    "Together, our experts bring more than 100 years of combined experience across diverse sectors of the pharmaceutical industry. Having worked with leading pharmaceutical organizations, our consultants possess extensive knowledge of international regulatory standards, including WHO-GMP, US FDA, EU GMP, PIC/S, MHRA, and other global quality requirements.",
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
  { year: "2023", title: "Founded", description: "LoMars Pharma established in Silvassa, India with a vision to support pharmaceutical excellence." },
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

export const LEADERSHIP = [
  {
    name: "Dr. Vikram Mehta",
    role: "Founder & CEO",
    bio: "25+ years in pharmaceutical regulatory affairs and domestic market compliance.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Head of Quality",
    bio: "Former regulatory inspector with expertise in GMP and validation systems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James O'Brien",
    role: "Director of Sourcing",
    bio: "Domestic supply chain expert with networks across India's pharmaceutical manufacturing hubs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
] as const;
