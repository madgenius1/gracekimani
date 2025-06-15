"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full z-50 py-5 bg-white">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between lg:px-8 px-4">
                    <div className="">
                        <Link href="/" >
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={120}
                                height={80}
                                className=" w-auto"
                            /></Link>
                    </div>
                    {/* Finish Responsive Navbar*/}

                    <div className="lg:flex hidden items-center space-x-2 lg:flex-row">
                        {/* Change Practice Areas Link to a drop down */}
                        <Link href="#" className="text-gray-950 uppercase hover:bg-gray-200 p-3 rounded-md font-semibold hover:text-gray-800">Practice Areas</Link>
                        <Link href="/resources" className="text-gray-950 uppercase hover:bg-gray-200 p-3 rounded-md font-semibold hover:text-gray-800">Resources</Link>
                        <Link href="/about" className="text-gray-950 uppercase hover:bg-gray-200 p-3 rounded-md font-semibold hover:text-gray-800">About Us</Link>
                        <Link href="/contact" className="text-gray-950 uppercase hover:bg-gray-200 p-3 rounded-md font-semibold hover:text-gray-800">Contact</Link>
                    </div>
                    <div className="lg:flex flex items-center">
                        <Link href="tel:+254795661888" className="bg-[#000EEE] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#099D15] transition duration-300">Call Us</Link>
                    </div>

                    <div className="hidden flex-col lg:hidden md:hidden px-4 items-center gap-2 space-y-2 rounded-md z-30 bg-white">
                        <Link href="/" className="text-gray-950 uppercase font-semibold">Home</Link>
                        <Link href="/practice-areas" className="text-gray-950 uppercase rounded-md font-semibold">Practice Areas</Link>
                        <Link href="/about" className="text-gray-950 uppercase rounded-md font-semibold">Resources</Link>
                        <Link href="/profile" className="text-gray-950 uppercase rounded-md font-semibold">Profile</Link>
                        <Link href="/about" className="text-gray-950 uppercase rounded-md font-semibold">About</Link>
                        <Link href="/contact" className="text-gray-950 uppercase rounded-md font-semibold">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}