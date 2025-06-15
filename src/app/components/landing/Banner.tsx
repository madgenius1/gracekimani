

import Link from "next/link"

export default function Banner() {
    return (
        <main className="dark:bg-[#000EEE] bg-[#000EEE]">
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:px-8 lg:py-20 md:px-6 md:py-12 px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-4 lg:justify-between items-center justify-center">
                        <div className="text-white text-center lg:text-left">
                            <h1 className="text-2xl lg:text-4xl font-bold">Your Legal Journey Starts Here</h1>
                            <p className="mt-2 text-lg">Get legal advice at your fingertips.</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <Link href="/contact" className="bg-white text-[#000EEE] px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
                                Request a Personalized Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}