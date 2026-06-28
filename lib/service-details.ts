export type ServiceSection = {
  title: string;
  items?: readonly string[];
  content?: string;
  subsections?: readonly { title: string; items: readonly string[] }[];
};

export type ServiceDetail = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  introduction: string;
  sections: readonly ServiceSection[];
};

export const SERVICE_DETAILS: readonly ServiceDetail[] = [
  {
    id: "plant-design",
    title: "Plant Designing, Commissioning & Validation",
    description:
      "Planning, commissioning, and validation of pharmaceutical facilities — HVAC, utilities, cleanrooms, and environmental controls per GMP standards.",
    icon: "Building2",
    href: "/services?service=plant-design",
    introduction:
      "The pharmaceutical industry operates under strict regulatory requirements to ensure product quality, patient safety, and compliance with Good Manufacturing Practices (GMP). Pharmaceutical facility services such as HVAC systems, purified water systems, compressed air, clean steam, electrical systems, and environmental controls play a critical role in maintaining controlled manufacturing conditions. Proper plant design, systematic commissioning, and comprehensive validation are essential for ensuring reliable and compliant operations.",
    sections: [
      {
        title: "Plant Designing",
        content:
          "Plant design involves planning and developing pharmaceutical facilities that meet regulatory standards, operational efficiency, and product-specific requirements.",
        items: [
          "Facility layout and workflow optimization",
          "Cleanroom classification and contamination control",
          "HVAC system design for temperature, humidity, and pressure control",
          "Utility system design (water, steam, compressed air, gases)",
          "Material and personnel flow management",
          "Compliance with GMP, EU GMP, PIC/S and other regulatory guidelines",
        ],
      },
      {
        title: "Commissioning",
        content:
          "Commissioning is the documented process of verifying that facility systems and equipment are installed, operated, and perform according to design specifications.",
        items: [
          "Design verification",
          "Installation checks",
          "Equipment start-up and testing",
          "Functional performance testing",
          "Documentation review and approval",
        ],
      },
      {
        title: "Validation",
        content:
          "Validation provides documented evidence that facility services consistently perform as intended and comply with predefined acceptance criteria.",
        items: [
          "Design Qualification (DQ)",
          "Installation Qualification (IQ)",
          "Operational Qualification (OQ)",
          "Performance Qualification (PQ)",
        ],
        subsections: [
          {
            title: "Critical Systems Validated",
            items: [
              "HVAC systems",
              "Purified water systems",
              "Clean steam systems",
              "Compressed air systems",
              "Environmental monitoring systems",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "gmp-audits",
    title: "Third-Party GMP Audits",
    description:
      "Independent GMP compliance assessments for pharmaceutical manufacturing, API plants, CMOs, laboratories, and packaging vendors.",
    icon: "ClipboardCheck",
    href: "/services?service=gmp-audits",
    introduction:
      "Third-Party GMP (Good Manufacturing Practice) Audits are independent assessments conducted by qualified auditors to evaluate whether pharmaceutical manufacturing facilities, API (Active Pharmaceutical Ingredient) plants, suppliers, contract manufacturers, laboratories, and packaging vendors comply with applicable GMP regulations and quality standards. These audits help organizations ensure product quality, regulatory compliance, supplier qualification, and patient safety.",
    sections: [
      {
        title: "Scope of Services",
        subsections: [
          {
            title: "GMP Compliance Audits",
            items: [
              "API manufacturing facilities",
              "Finished dosage form plants",
              "Sterile and non-sterile manufacturing sites",
              "Contract Manufacturing Organizations (CMOs/CDMOs)",
              "Pharmaceutical laboratories and testing facilities",
              "Packaging material suppliers and excipient manufacturers",
            ],
          },
          {
            title: "Supplier & Vendor Qualification Audits",
            items: [
              "API suppliers",
              "Key Starting Material (KSM) manufacturers",
              "Raw material and excipient vendors",
              "Packaging component suppliers",
              "Contract laboratories and service providers",
            ],
          },
          {
            title: "Regulatory & Quality System Assessments",
            items: [
              "ICH Q7 compliance for APIs",
              "EU GMP requirements",
              "PIC/S GMP standards",
              "National GMP standards",
              "Data Integrity assessments",
              "Quality Management System (QMS) reviews",
              "CAPA, Change Control, and Risk Management evaluations",
            ],
          },
        ],
      },
      {
        title: "Key Audit Areas",
        items: [
          "Quality Management Systems (QMS)",
          "Documentation and record controls",
          "Production and process controls",
          "Validation and qualification activities",
          "Laboratory controls and testing practices",
          "Facilities, utilities, and equipment",
          "Personnel training and competency",
          "Material management and warehousing",
          "Data integrity and computerized systems",
          "Complaint handling, deviations, and CAPA effectiveness",
        ],
      },
      {
        title: "Audit Deliverables",
        items: [
          "Detailed audit report",
          "Critical, major, and minor observations",
          "Gap analysis against applicable GMP standards",
          "Risk assessment",
          "Corrective and Preventive Action (CAPA) recommendations",
          "Supplier qualification recommendation",
          "Follow-up verification and audit closure support",
        ],
      },
      {
        title: "Benefits",
        items: [
          "Independent and objective compliance assessment",
          "Enhanced regulatory inspection readiness",
          "Reduced supply-chain and quality risks",
          "Support for supplier qualification programs",
          "Improved product quality and patient safety",
          "Reduced burden on internal QA resources",
          "Facilitation of regulatory submissions and customer approvals",
        ],
      },
      {
        title: "Typical Applications",
        items: [
          "New supplier qualification",
          "Periodic supplier requalification",
          "CMO site inspection",
          "Due diligence for acquisitions or technology transfers",
          "EMA, MHRA, and PIC/S inspection readiness",
          "Quality agreement compliance verification",
        ],
      },
    ],
  },
  {
    id: "pre-inspection",
    title: "Pre-Inspection Audits",
    description:
      "Comprehensive pre-inspection assessments to identify compliance gaps and strengthen regulatory inspection readiness.",
    icon: "SearchCheck",
    href: "/services?service=pre-inspection",
    introduction:
      "Pre-inspection audits are comprehensive assessments conducted before regulatory authority inspections to evaluate a pharmaceutical facility's compliance with applicable regulations, quality standards, and Good Manufacturing Practices (GMP). These audits help organizations identify compliance gaps, mitigate regulatory risks, and improve inspection readiness.",
    sections: [
      {
        title: "Objectives",
        items: [
          "Assess compliance with national and international regulatory requirements",
          "Evaluate adherence to GMP, GDP, GLP, GCP, and quality management system requirements as applicable",
          "Identify deficiencies, compliance gaps, and potential inspection observations",
          "Strengthen documentation, processes, and personnel preparedness",
          "Reduce the risk of regulatory findings, warning letters, or inspection failures",
        ],
      },
      {
        title: "Scope of Services",
        subsections: [
          {
            title: "Quality Management System Review",
            items: [
              "Quality policies and procedures",
              "Change control systems",
              "Deviation management",
              "CAPA (Corrective and Preventive Actions)",
              "Risk management practices",
              "Management review processes",
            ],
          },
          {
            title: "Manufacturing Operations Assessment",
            items: [
              "Production controls and documentation",
              "Batch record review",
              "Process validation status",
              "Equipment qualification and maintenance",
              "Cleaning validation programs",
            ],
          },
          {
            title: "Laboratory and Quality Control Evaluation",
            items: [
              "Analytical method validation",
              "Data integrity compliance",
              "Laboratory controls and documentation",
              "Stability program assessment",
              "Out-of-Specification (OOS) investigations",
            ],
          },
          {
            title: "Facility and Engineering Review",
            items: [
              "Premises and utilities",
              "HVAC systems",
              "Water systems",
              "Environmental monitoring",
              "Calibration and preventive maintenance programs",
            ],
          },
          {
            title: "Supply Chain and Materials Management",
            items: [
              "Vendor qualification",
              "Material receipt and storage",
              "Warehouse operations",
              "Distribution practices",
              "Traceability systems",
            ],
          },
          {
            title: "Personnel and Training Assessment",
            items: [
              "Training programs",
              "Competency evaluations",
              "GMP awareness",
              "Inspection preparedness training",
            ],
          },
        ],
      },
      {
        title: "Audit Methodology",
        items: [
          "Planning and document review",
          "On-site facility inspection and interviews",
          "Process walkthroughs and record verification",
          "Gap analysis against applicable regulations",
          "Risk-based assessment of findings",
          "Detailed audit report and recommendations",
          "Follow-up support for CAPA implementation",
        ],
      },
      {
        title: "Regulatory Coverage",
        content: "Audits may be conducted against requirements from:",
        items: [
          "European Medicines Agency (EMA)",
          "Pharmaceutical Inspection Co-operation Scheme (PIC/S)",
          "National regulatory authority requirements (CDSCO)",
        ],
      },
      {
        title: "Deliverables",
        items: [
          "Comprehensive audit report",
          "Critical, major, and minor observation classification",
          "Compliance gap assessment",
          "Risk prioritization matrix",
          "CAPA recommendations",
          "Inspection readiness action plan",
          "Executive summary for management",
        ],
      },
      {
        title: "Benefits",
        items: [
          "Improved regulatory compliance",
          "Enhanced inspection readiness",
          "Reduced compliance risks",
          "Strengthened quality systems",
          "Increased operational efficiency",
          "Greater confidence during regulatory inspections",
        ],
      },
      {
        title: "Target Facilities",
        content:
          "Pharmaceutical manufacturing plants, API facilities, sterile manufacturing sites, biotechnology facilities, contract manufacturing organizations (CMOs), testing laboratories, and packaging facilities.",
      },
    ],
  },
  {
    id: "qms",
    title: "Quality Management System (QMS)",
    description:
      "Design, implementation, and upgradation of QMS aligned with EU GMP, PIC/S, and ISO guidelines for pharmaceutical operations.",
    icon: "Award",
    href: "/services?service=qms",
    introduction:
      "The Quality Management System encompasses all activities related to the development, manufacture, testing, storage, distribution, and quality oversight of pharmaceutical formulations produced within the facility, including aseptically manufactured products. The system is designed to ensure compliance with applicable Good Manufacturing Practices (GMP), regulatory requirements, and patient safety expectations throughout the product lifecycle.",
    sections: [
      {
        title: "Scope",
        items: [
          "Pharmaceutical formulation manufacturing operations",
          "Aseptic processing and non-sterile product manufacturing",
          "Quality Assurance (QA) and Quality Control (QC) laboratories",
          "Warehousing and materials management",
          "Engineering, utilities, and maintenance services",
          "Validation and qualification activities",
          "Environmental monitoring and contamination control programs",
          "Supply chain and vendor qualification processes",
          "Regulatory compliance and documentation management",
          "Contracted activities and service providers impacting product quality",
          "Personnel training and qualification",
        ],
      },
      {
        title: "System Synopsis",
        content:
          "The QMS is based on principles outlined in ICH Q8/Q9/Q10/Q12 guidelines, EMA requirements, PIC/S standards, and applicable national regulatory requirements.",
        items: [
          "SOPs, protocol, report and document evaluation and upgradation to current GMP requirements",
        ],
      },
      {
        title: "Key Elements of the QMS",
        subsections: [
          {
            title: "Quality Governance",
            items: [
              "Quality policy and quality objectives",
              "Management review",
              "Quality metrics and performance monitoring",
              "Continuous improvement programs",
            ],
          },
          {
            title: "Documentation Management",
            items: [
              "Quality Manual",
              "Standard Operating Procedures (SOPs)",
              "Specifications and master documents",
              "Batch manufacturing and packaging records",
              "Electronic and paper-based document control",
            ],
          },
          {
            title: "Personnel Management",
            items: [
              "Training and competency assessment",
              "Qualification and certification for aseptic operations",
              "Gowning qualification programs",
              "Health and hygiene monitoring",
            ],
          },
          {
            title: "Risk Management",
            items: [
              "Quality Risk Management (QRM)",
              "Risk assessments using FMEA, HACCP, and similar methodologies",
              "Contamination control strategy (CCS)",
              "Change impact evaluations",
            ],
          },
          {
            title: "Facilities, Equipment and Utilities",
            items: [
              "Design qualification and lifecycle management",
              "Qualification and validation programs (DQ, IQ, OQ, PQ)",
              "Preventive maintenance and calibration",
              "Monitoring of critical utilities: WFI, Purified Water, Clean Steam, HVAC, Compressed gases",
            ],
          },
          {
            title: "Aseptic Manufacturing Controls",
            items: [
              "Cleanroom classification and monitoring",
              "Environmental monitoring program",
              "Personnel qualification and aseptic technique verification",
              "Media fill (process simulation) studies",
              "Sterilization and depyrogenation processes",
              "Contamination prevention and control measures",
            ],
          },
          {
            title: "Materials Management",
            items: [
              "Supplier qualification and auditing",
              "Incoming material receipt, sampling, testing, and release",
              "Storage and inventory control",
              "Traceability throughout the supply chain",
            ],
          },
          {
            title: "Quality Control",
            items: [
              "Raw material testing",
              "In-process controls",
              "Finished product testing",
              "Stability studies",
              "Microbiological monitoring and testing",
            ],
          },
          {
            title: "Validation Program",
            items: [
              "Process validation",
              "Cleaning validation",
              "Analytical method validation",
              "Computerized system validation",
              "Sterilization validation",
              "Hold time studies",
            ],
          },
          {
            title: "Deviation and CAPA Management",
            items: [
              "Deviation reporting and investigation",
              "Root cause analysis",
              "Corrective and Preventive Actions (CAPA)",
              "Effectiveness verification",
            ],
          },
          {
            title: "Change Control",
            items: [
              "Assessment, approval, implementation, and review of changes",
              "Evaluation of product quality, validation, and regulatory impact",
            ],
          },
          {
            title: "Product Quality Review",
            items: [
              "Annual Product Quality Review (APQR/PQR)",
              "Trend analysis",
              "Continuous process verification",
            ],
          },
          {
            title: "Complaint and Recall Management",
            items: [
              "Product complaint investigation",
              "Adverse event escalation",
              "Recall and market action procedures",
              "Regulatory communication management",
            ],
          },
          {
            title: "Internal Audits and Compliance",
            items: [
              "Self-inspection program",
              "GMP compliance audits",
              "Supplier audits",
              "Regulatory inspection readiness",
            ],
          },
        ],
      },
      {
        title: "Key Pillars of QMS",
        items: [
          "Quality Assurance System",
          "Production System",
          "Facilities and Equipment",
          "Laboratory Control System",
          "Material System",
          "Packaging & Labeling Control System",
        ],
      },
      {
        title: "Key Documents",
        subsections: [
          {
            title: "Standard Operating Procedures (SOPs)",
            items: [
              "Quality Assurance",
              "Quality Control",
              "Engineering",
              "Warehouse",
              "Purchase",
              "Human Resource",
              "Research & Development",
              "Manufacturing department",
            ],
          },
          {
            title: "Validation & Qualification Documents",
            items: [
              "Validation Master Plan",
              "Site Master File",
              "Facility qualification",
              "Cleaning Validation Protocol",
              "Equipment Qualification",
              "Instrument Qualification",
              "HVAC Qualification",
              "Water System Validation",
              "Compressed Air System Validation",
              "Nitrogen System Validation",
              "Stability Studies",
              "Process Validation",
              "Analytical Method Validation",
              "Technology Transfer",
              "Aseptic Processing of Sterile Products",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "training",
    title: "Pharmaceutical Training",
    description:
      "Industry-focused training for GMP, validation, QA/QC, OSD and sterile injectable manufacturing, and regulatory compliance.",
    icon: "GraduationCap",
    href: "/services?service=training",
    introduction:
      "LoMars Pharma is a specialized training and consulting organization dedicated to developing skilled professionals for the pharmaceutical, biotechnology, healthcare, and life sciences industries. We provide industry-focused training programs designed to enhance technical knowledge, regulatory compliance, quality standards, and professional competencies across pharmaceutical operations. Our mission is to bridge the gap between academic knowledge and industry requirements by delivering practical, compliance-driven, and career-oriented training solutions.",
    sections: [
      {
        title: "Pharmaceutical Industry Training",
        items: [
          "Good Manufacturing Practices (GMP)",
          "Current Good Manufacturing Practices (cGMP)",
          "Good Laboratory Practices (GLP)",
          "Good Documentation Practices (GDP)",
          "Quality Assurance (QA)",
          "Quality Control (QC)",
          "Pharmaceutical Production and Manufacturing",
          "Validation and Qualification",
          "Regulatory Affairs",
          "Pharmacovigilance",
          "Clinical Research",
          "Data Integrity Compliance",
          "Audit Readiness and Inspection Preparation",
        ],
      },
      {
        title: "Corporate Training Programs",
        items: [
          "Employee Induction Programs",
          "Compliance and Regulatory Training",
          "SOP Training",
          "Leadership and Management Development",
          "Soft Skills and Communication Training",
          "Technical Skill Enhancement Workshops",
        ],
      },
      {
        title: "Specialized Workshops",
        items: [
          "EU GMP Regulations",
          "PIC/S GMP Standards",
          "Risk Management and CAPA",
          "Root Cause Analysis",
          "Quality Risk Management (QRM)",
          "Documentation Excellence",
        ],
      },
      {
        title: "Oral Solid Dosage (OSD) Manufacturing",
        items: [
          "Granulation processes (wet and dry granulation)",
          "Tablet compression and coating",
          "Capsule filling operations",
          "Blending and mixing techniques",
          "Equipment operation and maintenance",
          "Process validation",
          "Cleaning validation",
          "Documentation practices and GMP",
        ],
      },
      {
        title: "Sterile Injectable Manufacturing",
        items: [
          "Aseptic processing techniques",
          "Cleanroom behavior and contamination control",
          "Sterile filtration and filling operations",
          "Lyophilization (freeze-drying)",
          "Environmental monitoring",
          "Media fill studies",
          "Sterility assurance practices",
          "Regulatory compliance for sterile manufacturing",
        ],
      },
      {
        title: "Regulatory & Quality Training",
        items: [
          "Good Manufacturing Practices (GMP)",
          "Current GMP (cGMP)",
          "Data Integrity requirements",
          "Quality Management Systems (QMS)",
          "Deviation, CAPA, and Change Control management",
          "Audit preparation and compliance",
          "Regulatory requirements of EMA, PIC/S, and CDSCO",
        ],
      },
      {
        title: "Placement & Workforce Solutions",
        items: [
          "Industry-ready operator training",
          "Production executive development",
          "Quality Assurance (QA) training",
          "Quality Control (QC) training",
          "Microbiology and sterile assurance training",
          "Interview preparation and placement assistance",
        ],
      },
      {
        title: "Training Methodology",
        items: [
          "Classroom sessions",
          "SOP-based learning",
          "Case studies and troubleshooting workshops",
          "Mock audits and compliance exercises",
          "On-site and online training programs",
        ],
      },
      {
        title: "Industries We Serve",
        items: [
          "Pharmaceutical Manufacturing",
          "Biotechnology Companies",
          "Contract Manufacturing Organizations (CMOs)",
        ],
      },
      {
        title: "Target Clients",
        items: [
          "Pharmaceutical manufacturing companies",
          "Contract Manufacturing Organizations (CMOs)",
          "API and formulation facilities",
          "Fresh graduates and pharmacy professionals",
        ],
      },
      {
        title: "Key Benefits",
        items: [
          "Improved regulatory compliance",
          "Enhanced employee productivity",
          "Reduced operational errors",
          "Better inspection readiness",
          "Skilled workforce development",
          "Industry-focused placement support",
        ],
      },
    ],
  },
  {
    id: "talent-acquisition",
    title: "Talent Acquisition",
    description:
      "Specialized recruitment and placement of qualified pharmaceutical professionals across QA, QC, manufacturing, regulatory affairs, and R&D.",
    icon: "UserPlus",
    href: "/services?service=talent-acquisition",
    introduction:
      "LoMars Pharma provides dedicated talent acquisition services for pharmaceutical and life sciences organizations. We leverage our deep industry network, domain expertise, and understanding of pharma-specific skill requirements to source, screen, and place professionals across all critical functions — from manufacturing and quality control to regulatory affairs, R&D, and commercial operations.",
    sections: [
      {
        title: "Who We Source",
        subsections: [
          {
            title: "Quality & Compliance",
            items: [
              "QA professionals (Quality Assurance Managers, Officers)",
              "QC analysts and laboratory scientists",
              "Microbiologists",
              "Validation engineers",
              "Regulatory Affairs specialists",
              "GMP and compliance professionals",
            ],
          },
          {
            title: "Manufacturing & Operations",
            items: [
              "Production managers and shift in-charge",
              "Manufacturing operators and executives",
              "Maintenance and engineering professionals",
              "Fill-finish and sterile manufacturing specialists",
              "Packaging and warehouse staff",
            ],
          },
          {
            title: "R&D and Analytical",
            items: [
              "Formulation scientists (OSD, Liquid, Sterile)",
              "Analytical R&D chemists",
              "Process development scientists",
              "Regulatory documentation specialists (Drug Information, Regulatory Information Management)",
            ],
          },
          {
            title: "Supply Chain & Commercial",
            items: [
              "Procurement and sourcing specialists",
              "Supply chain managers",
              "Pharmacovigilance professionals",
              "Medical representatives and business development executives",
            ],
          },
        ],
      },
      {
        title: "Our Recruitment Process",
        items: [
          "Understanding client skill requirements and organizational culture",
          "Sourcing candidates from our curated pharma talent pool and industry networks",
          "Rigorous screening against domain knowledge, regulatory exposure, and qualification criteria",
          "In-depth technical and behavioral assessments",
          "Candidate validation — education, employment history, and reference checks",
          "Presenting shortlisted profiles with detailed competency reports",
          "Interview coordination and candidate onboarding support",
        ],
      },
      {
        title: "Why Clients Choose Our Talent Solutions",
        items: [
          "Deep pharmaceutical industry insight — we understand the roles we fill",
          "Pre-screened candidate pool with verified GMP and regulatory experience",
          "Quick turnaround for urgent staffing requirements",
          "Flexible engagement models — contract, contract-to-hire, and permanent placements",
          "Confidential hiring and discrete executive search capabilities",
          "Ongoing candidate support and onboarding tracking",
        ],
      },
      {
        title: "Industries We Serve",
        items: [
          "Pharmaceutical manufacturing companies",
          "Contract Manufacturing Organizations (CMOs/CDMOs)",
          "API and formulation plants",
          "Biotechnology and life sciences companies",
          "Nutraceutical and cosmeceutical firms",
          "Medical device manufacturers",
        ],
      },
      {
        title: "Placement Support Services",
        subsections: [
          {
            title: "For Candidates",
            items: [
              "Career counseling and profile enhancement",
              "Resume optimization and market readiness preparation",
              "Interview preparation specific to pharmaceutical roles",
              "Key role placement across industries, locations, and experience levels",
            ],
          },
          {
            title: "For Companies",
            items: [
              "Staffing needs analysis and gap identification",
              "Bulk recruitment for greenfield and brownfield facilities",
              "Executive search for senior leadership roles",
              "Temporary and contractual staffing for project-based requirements",
            ],
          },
        ],
      },
      {
        title: "Our Reach",
        content:
          "With coverage across major pharmaceutical hubs in India — including Ahmedabad, Mumbai, Hyderabad, Ankleshwar, and Silvassa — we partner with organizations of every scale to meet their workforce needs efficiently and effectively.",
      },
    ],
  },
] as const;

export function getValidServiceId(id: string | null | undefined): string {
  if (!id) return "";
  return SERVICE_DETAILS.some((s) => s.id === id) ? id : "";
}

export function getServiceIdFromSearchParam(
  service: string | string[] | undefined
): string {
  const id = Array.isArray(service) ? service[0] : service;
  return getValidServiceId(id);
}
