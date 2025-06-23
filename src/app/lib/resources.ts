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
    details: string;
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
        documentTitle: "Affidavit for a lost Log Book",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle:
          "Affidavit for Lost Certificate of Incorporation of a Trust",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit for Lost Deed Plan",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit of Marriage",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit to Affirm Name",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit for Surrender of Share",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit for Lost Passport",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit for No Impediment to Marriage",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit of Lost KCPE and KCSE Certificate",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit of Lost Number Plate",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit for Forced Fransfer of Motor Vehicle",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Affidavit for Financial Support for Student Visa",
        details: "Content abc d content abcd content abcd",
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
        documentTitle: "Cleaning Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Daycare Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "DJ Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Independent Contract Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Manager Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Nanny Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Painting Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Performance Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Work for Hire Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Asset Sale Contract",
        details: "Content abc d content abcd content abcd",
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
        documentTitle: "Loan Agreement Template",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Concession Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "At Will Employment Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Consulting Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Employment Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Internship Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Non-Disclosure Agreement Template",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Agreement for Sale and Purchase of Goods",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Loan Agreement Secured by an Asset",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Joint Venture Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Agreement for Production of Agricultural Products",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Convertible Loan Agreement",
        details: "Content abc d content abcd content abcd",
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
        documentTitle: "Corporate Deed of Guarantee in Favour of a Company",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Corporate Guarantee issued by an Individual",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Limited Liability Partnership Deed",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Partnership Deed",
        details: "Content abc d content abcd content abcd",
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
        documentTitle: "Commercial Lease",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Agricultural Lease Between an Individual and A Company Pro Lessee",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Agricultural Lease Between an Individual and A Company Pro Lessor",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Agricultural Lease Between Two Individuals Pro Lessee",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Agricultural Lease Between Two Individuals Pro Lessor",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Asset Management Lease",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Maintenance Contract",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Commercial Lease (Short Term) between two individuals – Pro Lessee",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Commercial Lease (Short Term) Between Two Individuals – Pro Lessor",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Commercial Lease (Long Term) between two Companies (Pro Lessor)",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Commercial Lease (Long Term) between Two companies (Pro Lessee)",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Machinery Lease (Owner)",
        details: "Content abc d content abcd content abcd",
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
        documentTitle: "Deed Of Adherence to Shareholder’s Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Deed of Trust over Shares",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Deed of Trust over Property",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Deed of Variation for Sale of an Apartment",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Deed of Consent for Payment in Installments",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle:
          "Deed of Settlement and Acknowledgement of loan-Company and Individual",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle:
          "Deed of Settlement and Acknowledgement of Loan-Individual and Individual",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle:
          "Deed of Settlement and Acknowledgement of receipt of Funds",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle:
          "License of Storage Space between Company and Individual-Pro-Licensor",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Deed poll - Married Woman",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Deed poll - Adult",
        details: "Content abc d content abcd content abcd",
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
        documentTitle: "IP License Agreement",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Share Distribution Document",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Royalty Sharing Partnership",
        details: "Content abc d content abcd content abcd",
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
        documentTitle: "Notice for Virtual Extra General Meeting",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Notice of Call on Shares",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Notice of Forfeiture",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Notice of Intended Forfeiture",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Consent to Short Notice for a physical Board Meeting",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Notice for Physical Annual General Meeting",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle: "Notice for Virtual Annual General Meeting",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
      {
        documentTitle:
          "Consent to Short Notice for a Physical Annual General Meeting",
        details: "Content abc d content abcd content abcd",
        price: 1500,
      },
    ],
  },
];
