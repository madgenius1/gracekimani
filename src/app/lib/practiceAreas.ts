export const practiceAreasList = [
  {
    id: "arbitration-and-dispute-resolution",
    title: "Arbitration & Dispute Resolution",
    link: "/practice-areas/arbitration-and-dispute-resolution",
    description:
      "Our expert Arbitration & Dispute Resolution services ensure swift and fair settlements for complex legal conflicts, guiding you through mediation and arbitration with precision.",
    image: "/lawfirm-arbitration.jpg",
  },
  {
    id: "banking-and-investment",
    title: "Banking & Investment",
    link: "/practice-areas/banking-and-investment",
    description:
      "We provide comprehensive legal guidance in Banking & Investment, ensuring compliance, structuring deals, and securing and growing your financial ventures.",
    image: "/lawfirm-banking.jpg",
  },
  {
    id: "corporate-and-commercial",
    title: "Corporate & Commercial",
    link: "/practice-areas/corporate-and-commercial",
    description:
      "Our Corporate & Commercial law expertise helps businesses navigate complex regulations, manage transactions, and achieve their strategic commercial goals with confidence.",
    image: "/lawfirm-corporate.jpg",
  },
  {
    id: "family-law-and-succession",
    title: "Family Law & Succession",
    link: "/practice-areas/family-law-and-succession",
    description:
      "Compassionate and expert legal support for family matters including divorce, child custody, and seamless succession planning and estate administration.",
    image: "/lawfirm-family.jpg",
  },
  {
    id: "employment-and-labor-relations",
    title: "Employment and Labor Relations",
    link: "/practice-areas/employment-and-labor-relations",
    description:
      "We specialize in Employment & Labor law, protecting your rights and fostering fair workplace practices.",
    image: "/lawfirm-employment.jpg",
  },
  {
    id: "real-estate-and-conveyancing",
    title: "Real Estate & Conveyancing",
    link: "/practice-areas/real-estate-and-conveyancing",
    description:
      "Specialized services in property transactions, including land acquisition, leases, and dispute resolution, ensuring smooth and secure real estate dealings.",
    image: "/lawfirm-realestate.jpg",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    link: "/practice-areas/intellectual-property",
    description:
      "Protecting your innovations and creative works through robust copyright, trademark, and patent registration, and defending your intellectual assets.",
    image: "/lawfirm-ip.jpg",
  },
  {
    id: "tax-laws",
    title: "Tax Laws",
    link: "/practice-areas/tax-laws",
    description:
      "Our Tax law services offer strategic advice to optimize your tax obligations and ensure compliance with regulations.",
    image: "/lawfirm-tax.jpg",
  },
];

export interface PracticeArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "arbitration-and-dispute-resolution",
    title: "Arbitration & Dispute Resolution",
    tagline:
      "Resolving conflicts through fair, binding alternatives to litigation.",
    description: `
    We offer comprehensive arbitration and alternative dispute resolution (ADR) services for clients seeking timely and cost-effective conflict resolution.
    Our approach prioritizes confidentiality, neutrality, and enforceable outcomes that preserve business and personal relationships.
    Whether it's commercial, employment, or contractual disputes, our team guides you through every stage of mediation or arbitration.
    We are experienced in both domestic and international dispute forums and align every step with Kenyan and regional legal standards.`,
  },
  {
    id: "banking-and-investment",
    title: "Banking & Investment",
    tagline:
      "Protecting financial transactions and investor interests across East Africa.",
    description: `
    We provide legal advisory and compliance services to banks, microfinance institutions, investment firms, and private investors.
    Our expertise spans credit structuring, secured lending, financial regulations, and due diligence.
    Whether you're navigating CBK regulations or structuring a cross-border investment, we ensure your transactions are legally sound and strategically protected.
    We also assist in litigation related to fraud, loan recovery, and regulatory enforcement.`,
  },
  {
    id: "corporate-and-commercial",
    title: "Corporate & Commercial",
    tagline:
      "From business setup to strategic partnerships — we've got you covered.",
    description: `
    We assist local and international businesses with company formation, shareholder agreements, mergers & acquisitions, and contract drafting.
    Our goal is to align your corporate strategy with the legal framework, reducing risks and enabling growth.
    Our legal counsel covers everything from startups to listed corporations. We provide practical, industry-specific advice tailored to Kenya’s regulatory and business environment.`,
  },
  {
    id: "family-law-and-succession",
    title: "Family Law & Succession",
    tagline:
      "Supporting families through sensitive transitions and inheritance planning.",
    description: `
    Our family law services address divorce, child custody, maintenance, domestic violence, and matrimonial property rights with discretion and compassion.
    We work to protect your rights while prioritizing the welfare of children and dependents.
    In matters of succession, we offer legal support for will drafting, probate applications, and inheritance disputes.
    We help clients preserve family harmony and ensure rightful distribution of estates under Kenyan succession law.`,
  },
  {
    id: "employment-and-labor-relations",
    title: "Employment and Labor Relations",
    tagline: "Balancing employer-employee rights with legal compliance.",
    description: `
    We represent both employers and employees in matters related to employment contracts, unfair dismissal, workplace discrimination, redundancy, and labor disputes.
    Our firm ensures compliance with Kenya's Employment Act and industrial court procedures.
    We draft employment policies and conduct internal disciplinary guidance for HR teams, offering proactive legal frameworks that reduce litigation and foster ethical labor practices.`,
  },
  {
    id: "real-estate-and-conveyancing",
    title: "Real Estate & Conveyancing",
    tagline: "Secure property transactions with legal precision.",
    description: `
    We manage the full scope of land transactions — including purchases, leases, transfers, subdivisions, and developments — with thorough due diligence and registration support.
    Our conveyancing services safeguard against fraud, encumbrances, and defective titles.
    We work with individuals, developers, SACCOs, and real estate firms to ensure all documentation is accurate and enforceable.
    We also handle land dispute resolution and court representation where needed.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    tagline: "Safeguard your creative and commercial innovations.",
    description: `
    We help individuals and businesses secure and enforce intellectual property rights in Kenya and globally.
    Our services include trademark and copyright registration, patent applications, and IP litigation.
    Whether you're a tech startup, creative artist, or manufacturing firm, we provide strategic legal advice to protect your brand, content, and inventions from infringement.`,
  },
  {
    id: "tax-laws",
    title: "Tax Laws",
    tagline: "Tax strategy, compliance, and dispute resolution simplified.",
    description: `
    We offer legal tax advisory for individuals and companies navigating Kenya Revenue Authority (KRA) regulations, audits, and disputes.
    Our services cover tax planning, transfer pricing, VAT, PAYE, and capital gains.
    Whether you're under audit or planning corporate restructuring, we ensure tax efficiency while maintaining full legal compliance.
    We also represent clients before the Tax Appeals Tribunal.`,
  },
];
