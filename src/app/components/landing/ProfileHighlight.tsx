"use client"


import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ProfileHighlight() {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 lg:mb-16 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <hr className="w-16 h-1 bg-gray-950 rounded-full" />
                        <h2 className="text-sm sm:text-base lg:text-lg font-semibold uppercase text-gray-700 tracking-wider">
                            Meet Our Founder
                        </h2>
                        <hr className="w-16 h-1 bg-gray-950 rounded-full" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight">
                        Leading with Expertise and Dedication
                    </h1>
                </div>

                {/* Profile Content */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 md:gap-12 lg:gap-16">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full lg:w-1/2 max-w-md lg:max-w-none shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                        <Image
                            src="/lawfirm-grace.jpg"
                            alt="Grace Wanjiru Kimani"
                            width={600}
                            height={450}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-2 leading-tight">
                            Grace Wanjiru Kimani
                        </h3>
                        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
                            Advocate of the High Court & Founding Partner
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-prose">
                            Grace Wanjiru Kimani is a distinguished advocate with over{" "}
                            <strong className="text-gray-800">7 years of experience</strong>{" "}
                            in the legal field. <br />
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-prose">
                            She specializes in{" "}
                            <strong className="text-gray-800">
                                corporate law, family law, and civil litigation
                            </strong>
                            , providing expert legal counsel and achieving favorable outcomes
                            for her clients with unwavering dedication.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-12 sm:mt-16">
                    <Link
                        href="/about"
                        className="inline-flex items-center px-6 py-4 bg-[#000EEE] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#099D15] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        Discover Our Full Team
                        <BsArrowRight className="ml-3 text-xl" />{" "}
                    </Link>
                </div>
            </div>
        </section>
    );
}