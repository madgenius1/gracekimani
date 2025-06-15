

import ContactComponent from "../ui/ContactComponent"


export default function ContactSection() {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 lg:mb-16 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <hr className="w-16 h-1 bg-gray-950 rounded-full" />
                        <h2 className="text-sm sm:text-base lg:text-lg font-semibold uppercase text-gray-700 tracking-wider">
                            Contact Us
                        </h2>
                        <hr className="w-16 h-1 bg-gray-950 rounded-full" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight">
                        Reach Out To Us for Legal Assistance
                    </h1>
                </div>
                {/* Bento Grid Contact Component */}
                <ContactComponent />
            </div>
        </section>
    )
}