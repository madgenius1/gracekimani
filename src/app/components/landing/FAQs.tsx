"use client"

import { useState } from 'react';
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface AccordionItem {
    title: string;
    description: string;
}

const accordionItems: AccordionItem[] = [
    {
        title: "What should I consider before buying or selling land in Kenya?",
        description: "Always conduct a land search at the Ministry of Lands to verify ownership and check for encumbrances. Ensure that all agreements are in writing, witnessed, and registered by a qualified advocate. Engaging a lawyer protects you from fraud and ensures legal compliance in the transaction.",
    },
    {
        title: "How can I recover a debt legally in Kenya?",
        description: "Begin by issuing a formal demand letter to the debtor outlining the amount owed and a repayment timeline. If unresolved, you may pursue recovery through court proceedings or alternative dispute resolution mechanisms. Legal representation ensures your claim is properly documented and enforceable.",
    },
    {
        title: "What should I do if a property sale I was involved in has a dispute?",
        description: "Seek legal counsel immediately to review the sale agreement and identify the source of conflict. Most disputes can be resolved through mediation or arbitration before resorting to court. A lawyer will guide you through your options and protect your financial and legal interests.",
    },
    {
        title: "When is arbitration a better option than going to court?",
        description: "Arbitration is ideal for commercial or contractual disputes that require confidentiality, speed, and flexibility. It often costs less and avoids lengthy court procedures. With legal guidance, arbitration can yield enforceable decisions while preserving business relationships.",
    },
    {
        title: "What legal steps can I take if someone encroaches on my land?",
        description: "Document the encroachment and report it to the local land office or authorities immediately. You can file a civil suit or seek an injunction to stop further trespass. A lawyer will help you assert your property rights and pursue compensation if needed.",
    },
]

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 lg:mb-16 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <hr className="w-16 h-1 bg-gray-950 rounded-full" />
                        <h2 className="text-sm sm:text-base lg:text-lg font-semibold uppercase text-gray-700 tracking-wider">
                            Frequently Asked Questions
                        </h2>
                        <hr className="w-16 h-1 bg-gray-950 rounded-full" />
                    </div>
                </div>
                <div className="lg:px-8 md:px-6">
                    <div className="flex flex-col items-center gap-4 py-2">
                        {accordionItems.map((item: AccordionItem, index: number) => (
                            <div key={index} className={`flex flex-col gap-2 w-full
                                ${index === 0 ? 'border-t' : ''}
                                border rounded-lg border-gray-300 dark:border-gray-700
                                p-4 cursor-pointer`}
                                onClick={() => handleToggle(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-md lg:text-xl md:text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h2>
                                    <svg
                                        className={`w-5 h-5 text-gray-950 transform transition-transform duration-300
                                        ${openIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out p-2
                                    ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm w-full lg:text-md text-gray-800 mb-4">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-12 sm:mt-16">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-6 py-4 bg-[#000EEE] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#099D15] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            Get In Touch
                            <BsArrowRight className="ml-3 text-xl" />{" "}
                            {/* Icon Change */}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}