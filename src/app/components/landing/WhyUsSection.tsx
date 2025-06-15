



const values = [
    {
        title: "Trust & Integrity",
        description: "We operate with unwavering honesty, trustworthiness, and ethical conduct. We honor our commitments and take full accountability for our actions."
    },
    {
        title: "Client Focus & Confidentiality",
        description: "Our commitment is to deliver exceptional client service. We prioritize your needs and uphold the strictest standards of confidentiality at all times."
    },
    {
        title: "Expertise & Collaboration",
        description: "Our advice and insights are built upon a deep understanding of current legal frameworks across our diverse practice areas, ensuring well-informed strategies."
    },
    {
        title: "Commitment to Excellence",
        description: "We relentlessly pursue outstanding results in every endeavor. Our meticulous attention to detail ensures data-backed decisions and superior outcomes."
    }
]

export default function WhyUsSection() { 
    return (
        <section className="bg-gray-100 dark:bg-gray-100 py-12 sm:py-16 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 lg:mb-16">
                    <div className="flex items-center space-x-3 mb-4">
                        <hr className="w-12 h-1 bg-gray-950 rounded-full" />
                        <h2 className="text-sm sm:text-base lg:text-lg font-semibold uppercase text-gray-700 tracking-wider">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-xl lg:max-w-3xl leading-tight text-gray-950">
                            Our values define who we are and how we serve you.
                        </h1>
                        <p className="text-base sm:text-lg text-gray-800 lg:max-w-2xl">
                            Our principles guide everything we do, ensuring you receive exceptional legal service and results.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col gap-4 rounded-lg shadow-lg p-6 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <h3 className="text-xl font-semibold text-gray-950">
                                {value.title}
                            </h3>
                            <p className="text-md text-gray-700 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}