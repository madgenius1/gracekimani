"use client";

import Link from 'next/link';
import HeaderComponent from "@/app/components/ui/HeaderComponent";
import { FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
    return (
        <main className="bg-white text-gray-900 min-h-screen">
            <HeaderComponent
                title="Connect With Us Today"
                tagline="Your journey to expert legal solutions starts here."
            />

            <div className="py-12 sm:py-16 lg:py-20">
                <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-stretch">

                        <div className="w-full lg:w-1/2 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 transform transition-transform duration-300 hover:scale-[1.01]">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                                Send Us a Message
                            </h3>
                            <form action="#" method="post" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Full Name"
                                        required
                                        className="border border-gray-300 focus:border-[#000EEE] focus:ring-1 focus:ring-[#000EEE] p-3 w-full rounded-lg transition-all duration-300 text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        required
                                        className="border border-gray-300 focus:border-[#000EEE] focus:ring-1 focus:ring-[#000EEE] p-3 w-full rounded-lg transition-all duration-300 text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="sr-only">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject of your inquiry"
                                        className="border border-gray-300 focus:border-[#000EEE] focus:ring-1 focus:ring-[#000EEE] p-3 w-full rounded-lg transition-all duration-300 text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your legal needs..."
                                        required
                                        className="border border-gray-300 focus:border-[#000EEE] focus:ring-1 focus:ring-[#000EEE] p-3 w-full rounded-lg transition-all duration-300 resize-y text-gray-900 placeholder-gray-500"
                                        rows={6}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#000EEE] text-white p-3 rounded-lg font-semibold text-lg hover:bg-[#099D15] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">

                            <div className="p-4  border-t border-gray-600 ">
                                <div className="flex flex-col p-2 space-y-2">
                                    <span className="text-[#000EEE] font-semibold ">
                                        Office Hours
                                    </span>
                                    <span className="text-gray-800 font-medium">
                                        Mon - Fri: 8:00 AM - 5:00 PM
                                    </span>
                                    <span className="text-gray-800 font-medium">
                                        Sat: 9:00 AM - 3:00 PM
                                    </span>
                                </div>
                            </div>
                            <div className="p-4  border-t border-gray-600 ">
                                <div className="flex flex-col p-2 space-y-2">
                                    <span className="text-[#000EEE] font-semibold ">
                                        Email Us
                                    </span>
                                    <Link href="mailto:info@gracekimaniadvocates.co.ke" className="text-gray-800 font-medium hover:underline">
                                        info@gracekimaniadvocates.co.ke
                                    </Link>
                                    <Link href="mailto:gk@gracekimaniadvocates.co.ke" className="text-gray-800 font-medium hover:underline">
                                        gk@gracekimaniadvocates.co.ke
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-600">
                                <div className="flex flex-col p-2 space-y-2">
                                    <span className="text-[#000EEE] font-semibold ">
                                        Call Us
                                    </span>
                                    <Link href="tel:+254795661888" className="text-gray-800 font-medium hover:underline">
                                        +254 795 661 888
                                    </Link>
                                    <Link href="tel:+254716976001" className="text-gray-800 font-medium hover:underline">
                                        +254 716 976 001
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-600">
                                <div className="flex flex-col p-2 space-y-2">
                                    <span className="text-[#000EEE] font-semibold ">
                                        WhatsApp Us
                                    </span>
                                    <Link href="https://wa.me/254795661888" className="text-gray-800 font-medium hover:underline">
                                        +254 795 661 888
                                    </Link>
                                    <Link href="https://wa.me/254716976001" className="text-gray-800 font-medium hover:underline">
                                        +254 716 976 001
                                    </Link>
                                </div>
                            </div>

                            {/* Optional: Add a Location Card with map link */}
                            <div className="md:col-span-2 p-6 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.01]">
                                <div className="p-3 bg-[#000EEE] rounded-full text-white mb-4">
                                    <FiMapPin size={24} />
                                </div>
                                <span className="text-xl font-bold text-gray-900 mb-2">
                                    Our Location
                                </span>
                                <p className="text-gray-700 font-medium text-lg">
                                    Utawala Road, Githunguri Commercial Building
                                </p>
                                <p className="text-gray-700 font-medium text-lg mb-4">
                                    Nairobi, Kenya
                                </p>
                                <Link
                                    href="https://www.google.com/maps/place/Victorias+General+Services/@-1.2832773,36.9907862,3a,15.3y,156h,98.61t/data=!3m7!1e1!3m5!1scn8qFO6BJNkStMrTPkrhHA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-8.608585168246677%26panoid%3Dcn8qFO6BJNkStMrTPkrhHA%26yaw%3D155.99619386535014!7i16384!8i8192!4m6!3m5!1s0x182f6d9f283b5fed:0x1dce7a208aa820eb!8m2!3d-1.2834884!4d36.9908042!16s%2Fg%2F11k0tb2867?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-[#000EEE] text-white font-semibold rounded-lg hover:bg-[#099D15] transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                                >
                                    View on Map
                                    <FiMapPin className="ml-2" />
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}