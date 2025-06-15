"use client"


import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const legalDocuments = [
    {
        title: "Affidavits",
        description: "A sworn written statement of facts, made voluntarily and confirmed under oath.",
        link: "#"
    },
    {
        title: "Contracts",
        description: "A legally enforceable agreement between parties that outlines their mutual duties and rights.",
        link: "#"
    },
    {
        title: "Agreements",
        description: "A mutual understanding between parties about their rights and obligations, which may or may not be legally binding.",
        link: "#"
    },
    {
        title: "Corporate Documents",
        description: "Formal records and filings vital for a company's legal formation, governance, and ongoing operations.",
        link: "#"
    },
    {
        title: "Leases",
        description: "A legal contract detailing the terms for renting property from one party to another for a set period.",
        link: "#"
    },
    {
        title: "Deeds",
        description: "A legal document that officially transfers the ownership of property or an asset.",
        link: "#"
    },
    {
        title: "Intellectual Property",
        description: "Legal instruments like patents, trademarks, and copyrights that protect original creations and grant exclusive ownership rights.",
        link: "#"
    },
    {
        title: "Legal Notices",
        description: "A formal written communication used to inform someone of a legal action, obligation, or intent, often preceding official proceedings.",
        link: "#"
    }
]

export default function LegalInsights() {
    return (
        <section className="bg-gray-100 dark:bg-gray-100 py-12 sm:py-16 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 lg:mb-16">
                    <div className="flex items-center space-x-3 mb-4">
                        <hr className="w-12 h-1 bg-gray-950 rounded-full" />
                        <h2 className="text-sm sm:text-base lg:text-lg font-semibold uppercase text-gray-700 tracking-wider">
                            Resources and Legal Insight
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-xl lg:max-w-3xl leading-tight text-gray-950">
                            We are Your Trusted Partner in Legal Advocacy
                        </h1>
                        <p className="text-base sm:text-lg text-gray-800 lg:max-w-2xl">
                            Get access to ready legal documents that simplify your legal needs.
                        </p>
                    </div>
                </div>
                <div className="grid cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:gap-6 gap-4">
                    {legalDocuments.map((doc, index) => (
                        <Link key={index} href="#" className="flex flex-col gap-2 space-y-2 p-4 bg-white rounded-md shadow-md h-auto">
                            <h3 className="text-md font-semibold text-gray-900">{doc.title}</h3>
                            <p className="text-sm text-gray-600">{doc.description}</p>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center mt-12 sm:mt-16">
                    <Link
                        href="/resources"
                        className="inline-flex items-center px-6 py-4 bg-[#000EEE] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#099D15] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        More Documents
                        <BsArrowRight className="ml-3 text-xl" />
                        {/* Icon Change */}
                    </Link>
                </div>
            </div>
        </section>
    )
}