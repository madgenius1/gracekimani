"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <main className="relative bg-[url(/lawfirm.jpg)] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
            {/* Semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Company Name / Tagline */}
                    <div className="mb-4 lg:mb-6">
                        <h2 className="text-lg sm:text-xl text-white uppercase font-semibold tracking-wider">
                            Grace Kimani And Company Advocates
                        </h2>
                    </div>

                    {/* Main Headline and Description */}
                    <div className="max-w-3xl mb-4 lg:mb-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight">
                            Your Trusted and Reliable Legal Partner
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-gray-200 font-medium">
                            Providing expert legal services with integrity and dedication.
                        </p>
                    </div>

                    {/* Vision, Mission, Objecives Section */}
                    <div className="py-2 flex flex-row items-center space-x-8">
                        <Link href="/about#Vision" className="hover:underline text-lg font-semibold text-white">Vision</Link>
                        <Link href="/about#Mission" className="hover:underline text-lg font-semibold text-white">Mission</Link>
                        <Link href="/about#Objectives" className="hover:underline text-lg font-semibold text-white">Objectives</Link>
                    </div>

                    {/* Call to Action Button */}
                    <div className="py-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-[#000EEE] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#099D15] transition duration-300 transform hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}