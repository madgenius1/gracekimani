//This goes to /landing/#PracticeAreasList
export const practiceAreasList = [
  {
    title: "Arbitration & Dispute Resolution",
    practiceareasId: "arbitration-and-dispute-resolution",
    description:
      "Our expert Arbitration & Dispute Resolution services ensure swift and fair settlements for complex legal conflicts, guiding you through mediation and arbitration with precision.",
    image: "/lawfirm-arbitration.jpg",
    size: "large",
  },
  {
    title: "Banking & Investment",
    practiceareasId: "banking-and-investment",
    description:
      "We provide comprehensive legal guidance in Banking & Investment, ensuring compliance, structuring deals, and securing and growing your financial ventures.",
    image: "/lawfirm-banking.jpg",
    size: "small",
  },
  {
    title: "Corporate & Commercial",
    practiceareasId: "corporate-and-commercial",
    description:
      "Our Corporate & Commercial law expertise helps businesses navigate complex regulations, manage transactions, and achieve their strategic commercial goals with confidence.",
    image: "/lawfirm-corporate.jpg",
    size: "small",
  },
  {
    title: "Family Law & Succession",
    practiceareasId: "family-law-and-succession",
    description:
      "Compassionate and expert legal support for family matters including divorce, child custody, and seamless succession planning and estate administration.",
    image: "/lawfirm-family.jpg",
    size: "small",
  },
  {
    title: "Employment and Labor Relations",
    practiceareasId: "employment-and-labor-relations",
    description:
      "We specialize in Employment & Labor law, protecting your rights and fostering fair workplace practices.",
    image: "/lawfirm-employment.jpg",
    size: "large",
  },
  {
    title: "Real Estate & Conveyancing",
    practiceareasId: "real-estate-and-conveyancing",
    description:
      "Specialized services in property transactions, including land acquisition, leases, and dispute resolution, ensuring smooth and secure real estate dealings.",
    image: "/lawfirm-realestate.jpg",
    size: "small",
  },
  {
    title: "Intellectual Property",
    practiceareasId: "intellectual-property",
    description:
      "Protecting your innovations and creative works through robust copyright, trademark, and patent registration, and defending your intellectual assets.",
    image: "/lawfirm-ip.jpg",
    size: "medium",
  },
  {
    title: "Tax Laws",
    practiceareasId: "tax-laws",
    description:
      "Our Tax law services offer strategic advice to optimize your tax obligations and ensure compliance with regulations.",
    image: "/lawfirm-tax.jpg",
    size: "small",
  },
];

export interface PracticeArea {
  practiceareasId: string;
  title: string;
  tagline: string;
  descriptionOne: string;
  descriptionTwo: string;
}

//This goes to /[practiceareasId]/page.tsx

export const practiceAreas: PracticeArea[] = [
  {
    practiceareasId: "arbitration-and-dispute-resolution",
    title: "Arbitration & Dispute Resolution",
    tagline:
      "Resolving conflicts through fair, binding alternatives to litigation.",
    descriptionOne: `
    We offer comprehensive arbitration and alternative dispute resolution (ADR) services for clients seeking timely and cost-effective conflict resolution.
    Our approach prioritizes confidentiality, neutrality, and enforceable outcomes that preserve business and personal relationships.`,
    descriptionTwo:`Whether it's commercial, employment, or contractual disputes, our team guides you through every stage of mediation or arbitration.
    We are experienced in both domestic and international dispute forums and align every step with Kenyan and regional legal standards.`,
  },
  {
    practiceareasId: "banking-and-investment",
    title: "Banking & Investment",
    tagline:
      "Protecting financial transactions and investor interests across East Africa.",
    descriptionOne: `
    We provide legal advisory and compliance services to banks, microfinance institutions, investment firms, and private investors.
    Our expertise spans credit structuring, secured lending, financial regulations, and due diligence.`,
    descriptionTwo:`
    Whether you're navigating CBK regulations or structuring a cross-border investment, we ensure your transactions are legally sound and strategically protected.
    We also assist in litigation related to fraud, loan recovery, and regulatory enforcement.`,
  },
  {
    practiceareasId: "corporate-and-commercial",
    title: "Corporate & Commercial",
    tagline:
      "From business setup to strategic partnerships — we've got you covered.",
    descriptionOne: `
    We assist local and international businesses with company formation, shareholder agreements, mergers & acquisitions, and contract drafting.
    Our goal is to align your corporate strategy with the legal framework, reducing risks and enabling growth.`,
    descriptionTwo:`
    Our legal counsel covers everything from startups to listed corporations. We provide practical, industry-specific advice tailored to Kenya’s regulatory and business environment.`,
  },
  {
    practiceareasId: "family-law-and-succession",
    title: "Family Law & Succession",
    tagline:
      "Supporting families through sensitive transitions and inheritance planning.",
    descriptionOne: `
    Our family law services address divorce, child custody, maintenance, domestic violence, and matrimonial property rights with discretion and compassion.
    We work to protect your rights while prioritizing the welfare of children and dependents.`,
    descriptionTwo:`
    In matters of succession, we offer legal support for will drafting, probate applications, and inheritance disputes.
    We help clients preserve family harmony and ensure rightful distribution of estates under Kenyan succession law.`,
  },
  {
    practiceareasId: "employment-and-labor-relations",
    title: "Employment and Labor Relations",
    tagline: "Balancing employer-employee rights with legal compliance.",
    descriptionOne: `
    We represent both employers and employees in matters related to employment contracts, unfair dismissal, workplace discrimination, redundancy, and labor disputes.
    Our firm ensures compliance with Kenya's Employment Act and industrial court procedures.`,
    descriptionTwo:`
    We draft employment policies and conduct internal disciplinary guidance for HR teams, offering proactive legal frameworks that reduce litigation and foster ethical labor practices.`,
  },
  {
    practiceareasId: "real-estate-and-conveyancing",
    title: "Real Estate & Conveyancing",
    tagline: "Secure property transactions with legal precision.",
    descriptionOne: `
    We manage the full scope of land transactions — including purchases, leases, transfers, subdivisions, and developments — with thorough due diligence and registration support.
    Our conveyancing services safeguard against fraud, encumbrances, and defective titles.`,
    descriptionTwo:`
    We work with individuals, developers, SACCOs, and real estate firms to ensure all documentation is accurate and enforceable.
    We also handle land dispute resolution and court representation where needed.`,
  },
  {
    practiceareasId: "intellectual-property",
    title: "Intellectual Property",
    tagline: "Safeguard your creative and commercial innovations.",
    descriptionOne: `
    We help individuals and businesses secure and enforce intellectual property rights in Kenya and globally.
    Our services include trademark and copyright registration, patent applications, and IP litigation.`,
    descriptionTwo:`
    Whether you're a tech startup, creative artist, or manufacturing firm, we provide strategic legal advice to protect your brand, content, and inventions from infringement.`,
  },
  {
    practiceareasId: "tax-laws",
    title: "Tax Laws",
    tagline: "Tax strategy, compliance, and dispute resolution simplified.",
    descriptionOne: `
    We offer legal tax advisory for individuals and companies navigating Kenya Revenue Authority (KRA) regulations, audits, and disputes.
    Our services cover tax planning, transfer pricing, VAT, PAYE, and capital gains.`,
    descriptionTwo:`
    Whether you're under audit or planning corporate restructuring, we ensure tax efficiency while maintaining full legal compliance.
    We also represent clients before the Tax Appeals Tribunal.`,
  },
];
