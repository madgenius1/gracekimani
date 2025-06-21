"use client"


// import { useParams } from "next/navigation";
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import HeaderComponent from "@/app/components/ui/HeaderComponent";
import { practiceAreasList } from "@/app/lib/practiceAreas";

export default function Page() {
    // const { practiceareasId } = useParams();

    return (
        <main className="dark:bg-white bg-white">
            <HeaderComponent
                title="Practice Areas"
                tagline="Fields of Legal Expertise for You."
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {practiceAreasList.map((area, index) => (
                            <Link
                                href={`/practice-areas/${area.practiceareasId}`}
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg group px-4 h-64"
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
                                    <p className="text-sm sm:text-base leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-32 pb-2">
                                        {area.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}