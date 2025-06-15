


import Link from 'next/link';

export default function ContactComponent() {
    return (
        <section className="mx-auto max-w-screen-xl lg:px-8 md:px-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                <div className="w-full lg:w-1/2 bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Send Us a Message
                    </h3>
                    <form action="#" method="post" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="border border-gray-600 p-3 w-full rounded-md transition-all duration-300 text-gray-900"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="border border-gray-600 p-3 w-full rounded-md transition-all duration-300 text-gray-900"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                required
                                className="border border-gray-600 p-3 w-full rounded-md transition-all duration-300 resize-y text-gray-900"
                                rows={5}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#000EEE] text-white p-3 rounded-md font-semibold text-lg hover:bg-[#099D15] transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:w-1/2 w-full">
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
                                WhatsApp
                            </span>
                            <Link href="https://wa.me/254795661888" className="text-gray-800 font-medium hover:underline">
                                +254 795 661 888
                            </Link>
                            <Link href="https://wa.me/254716976001" className="text-gray-800 font-medium hover:underline">
                                +254 716 976 001
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}