"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const practiceAreas = [
    {
        title: "Arbitration & Dispute Resolution",
        link: "/practice-areas/arbitration-dispute-resolution",
        description:
            "Our expert Arbitration & Dispute Resolution services ensure swift and fair settlements for complex legal conflicts, guiding you through mediation and arbitration with precision.",
        image: "/lawfirm-arbitration.jpg",
        size: "large",
    },
    {
        title: "Banking & Investment",
        link: "/practice-areas/banking-investment",
        description:
            "We provide comprehensive legal guidance in Banking & Investment, ensuring compliance, structuring deals, and securing and growing your financial ventures.",
        image: "/lawfirm-banking.jpg",
        size: "small",
    },
    {
        title: "Corporate & Commercial",
        link: "/practice-areas/corporate-commercial",
        description:
            "Our Corporate & Commercial law expertise helps businesses navigate complex regulations, manage transactions, and achieve their strategic commercial goals with confidence.",
        image: "/lawfirm-corporate.jpg",
        size: "small",
    },
    {
        title: "Family Law & Succession",
        link: "/practice-areas/family-law-succession",
        description:
            "Compassionate and expert legal support for family matters including divorce, child custody, and seamless succession planning and estate administration.",
        image: "/lawfirm-family.jpg",
        size: "small",
    },
    {
        title: "Employment and Labor Relations",
        link: "/practice-areas/employment-labor-relations",
        description:
            "We specialize in Employment & Labor law, protecting your rights and fostering fair workplace practices.",
        image: "/lawfirm-employment.jpg",
        size: "large",
    },
    {
        title: "Real Estate & Conveyancing",
        link: "/practice-areas/real-estate-conveyancing",
        description:
            "Specialized services in property transactions, including land acquisition, leases, and dispute resolution, ensuring smooth and secure real estate dealings.",
        image: "/lawfirm-realestate.jpg",
        size: "small",
    },
    {
        title: "Intellectual Property",
        link: "/practice-areas/intellectual-property",
        description:
            "Protecting your innovations and creative works through robust copyright, trademark, and patent registration, and defending your intellectual assets.",
        image: "/lawfirm-ip.jpg",
        size: "medium",
    },
    {
        title: "Tax Laws",
        link: "/practice-areas/tax-laws",
        description:
            "Our Tax law services offer strategic advice to optimize your tax obligations and ensure compliance with regulations.",
        image: "/lawfirm-tax.jpg",
        size: "small",
    },
];

export default function PracticeAreas() {
    return (
        <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 lg:mb-16">
                    <div className="flex items-center space-x-3 mb-4">
                        <hr className="w-12 h-1 bg-gray-950 rounded-full" />
                        <h2 className="text-sm sm:text-base lg:text-lg font-semibold uppercase text-gray-700 tracking-wider">
                            Practice Areas
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-xl lg:max-w-3xl leading-tight text-gray-950">
                            We offer comprehensive services across a wide range of legal
                            practice areas.
                        </h1>
                        <p className="text-base sm:text-lg text-gray-800 lg:max-w-2xl">
                            We combine our industry knowledge and experienced advocates to
                            provide personalized legal solutions tailored to your unique
                            needs.
                        </p>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 
          auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[250px]"
                >
                    {practiceAreas.map((area, index) => (
                        <Link
                            href={area.link}
                            key={index}
                            className={`relative overflow-hidden rounded-lg shadow-lg group
                ${area.size === "large" ? "md:col-span-2 lg:row-span-2 h-auto" : ""}
                ${area.size === "medium" ? "md:col-span-2 h-auto" : ""}
                ${area.size === "small" ? "h-full" : ""}
              `}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${area.image})` }}
                            ></div>

                            <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-60 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight pr-4">
                                        {area.title}
                                    </h3>
                                    <BsArrowRight className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:translate-x-1" />
                                </div>

                                <p className="text-sm sm:text-base leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-24">
                                    {area.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}