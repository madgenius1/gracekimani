//This leads to /#legalInsightsSection
export const legalDocuments = [
  {
    title: "Affidavits",
    resourceId: "affidavits",
    description:
      "A sworn written statement of facts, made voluntarily and confirmed under oath.",
  },
  {
    title: "Contracts",
    resourceId: "contracts",
    description:
      "A legally enforceable agreement between parties that outlines their mutual duties and rights.",
  },
  {
    title: "Agreements",
    resourceId: "agreements",
    description:
      "A mutual understanding between parties about their rights and obligations, which may or may not be legally binding.",
  },
  {
    title: "Corporate Documents",
    resourceId: "corporate-documents",
    description:
      "Formal records and filings vital for a company's legal formation, governance, and ongoing operations.",
  },
  {
    title: "Leases",
    resourceId: "leases",
    description:
      "A legal contract detailing the terms for renting property from one party to another for a set period.",
  },
  {
    title: "Deeds",
    resourceId: "deeds",
    description:
      "A legal document that officially transfers the ownership of property or an asset.",
  },
  {
    title: "Intellectual Property",
    resourceId: "intellectual-property",
    description:
      "Legal instruments like patents, trademarks, and copyrights that protect original creations and grant exclusive ownership rights.",
  },
  {
    title: "Legal Notices",
    resourceId: "legal-notices",
    description:
      "A formal written communication used to inform someone of a legal action, obligation, or intent, often preceding official proceedings.",
  },
];

//This leads to /resources/page.tsx
export const allDocuments = [
  {
    title: "Affidavits",
    resourceId: "affidavits",
    description:
      "A sworn written statement of facts, made voluntarily and confirmed under oath.",
  },
  {
    title: "Contracts",
    resourceId: "contracts",
    description:
      "A legally enforceable agreement between parties that outlines their mutual duties and rights.",
  },
  {
    title: "Agreements",
    resourceId: "agreements",
    description:
      "A mutual understanding between parties about their rights and obligations, which may or may not be legally binding.",
  },
  {
    title: "Corporate Documents",
    resourceId: "corporate-documents",
    description:
      "Formal records and filings vital for a company's legal formation, governance, and ongoing operations.",
  },
  {
    title: "Leases",
    resourceId: "leases",
    description:
      "A legal contract detailing the terms for renting property from one party to another for a set period.",
  },
  {
    title: "Deeds",
    resourceId: "deeds",
    description:
      "A legal document that officially transfers the ownership of property or an asset.",
  },
  {
    title: "Intellectual Property",
    resourceId: "intellectual-property",
    description:
      "Legal instruments like patents, trademarks, and copyrights that protect original creations and grant exclusive ownership rights.",
  },
  {
    title: "Legal Notices",
    resourceId: "legal-notices",
    description:
      "A formal written communication used to inform someone of a legal action, obligation, or intent, often preceding official proceedings.",
  },
];

//This leads to /resources/[resourcesId]/page.tsx

export interface ResourceItem {
  resourceId: string;
  title: string;
  tagline: string;
  resourceList: {
    documentTitle: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    price: number;
  }[];
}

export const resourceItems: ResourceItem[] = [
  {
    title: "Affidavits",
    resourceId: "affidavits",
    tagline:
      "A sworn written statement of facts, made voluntarily and confirmed under oath.",
    resourceList: [
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
    ],
  },
  {
    title: "Contracts",
    resourceId: "contracts",
    tagline:
      "A legally enforceable agreement between parties that outlines their mutual duties and rights.",
    resourceList: [
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
    ],
  },
  {
    title: "Agreements",
    resourceId: "agreements",
    tagline:
      "A mutual understanding between parties about their rights and obligations, which may or may not be legally binding.",
    resourceList: [
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
    ],
  },
  {
    title: "Corporate Documents",
    resourceId: "corporate-documents",
    tagline:
      "Formal records and filings vital for a company's legal formation, governance, and ongoing operations.",
    resourceList: [
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
    ],
  },
  {
    title: "Leases",
    resourceId: "leases",
    tagline:
      "A legal contract detailing the terms for renting property from one party to another for a set period.",
    resourceList: [
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
    ],
  },
  {
    title: "Deeds",
    resourceId: "deeds",
    tagline:
      "A legal document that officially transfers the ownership of property or an asset.",
    resourceList: [
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
    ],
  },
  {
    title: "Intellectual Property",
    resourceId: "intellectual-property",
    tagline:
      "Legal instruments like patents, trademarks, and copyrights that protect original creations and grant exclusive ownership rights.",
    resourceList: [
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
    ],
  },
  {
    title: "Legal Notices",
    resourceId: "legal-notices",
    tagline:
      "A formal written communication used to inform someone of a legal action, obligation, or intent, often preceding official proceedings.",
    resourceList: [
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
      {
        documentTitle: "Heart of Algebra",
        imageSrc: "/image.png",
        imageAlt: "image",
        description: "Affidavit for Item One",
        price: 1500,
      },
    ],
  },
];
