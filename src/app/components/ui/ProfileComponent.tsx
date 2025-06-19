
import Image from "next/image"
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniPhone } from "react-icons/hi2";
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import { practiceAreasList } from "@/app/lib/practiceAreas";



// interface ProfileProps {
//     name: string,
//     role: string,
//     experience: string,
//     phone: string,
//     email: string,
//     education: string,
//     work: string
// }


export default function ProfileComponent() {
    return (
        <main>
            {/* Header Section */}
            <section className="lg:flex-row flex md:flex-row flex-col justify-between gap-4 lg:gap-6">
                <div className="lg:py-8 md:py-6 py-4 lg:w-1/3 w-full flex items-center justify-start">
                    <Image
                        src="/lawfirm-grace.jpg"
                        height={300}
                        width={300}
                        alt="grace"
                        className="flex items-center object-cover object-center rounded-xl shadow-lg"
                    />
                </div>
                <div className="lg:py-8 md:py-6 p-4 lg:w-2/3 w-full flex items-center justify-start">
                    <div className="flex flex-col gap-4 space-y-2">
                        <h2 className="text-xl lg:text-3xl font-bold text-gray-950">
                            Grace Wanjiru Kimani
                        </h2>
                        <span className="text-md lg:text-xl font-semibold text-gray-800">
                            Founding Partner
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <HiMiniPhone size={28} className="text-gray-700" />
                            <Link href="tel:+25479566188" className="text-gray-800 text-md font-medium hover:underline">079566188</Link>
                        </span>
                        <span className="flex flex-row gap-2 items-center">
                            <HiOutlineMail size={28} className="text-gray-700" />
                            <Link href="mailto:gk@gracekimaniadvocates.co.ke" className="text-gray-800 text-md font-medium hover:underline">gk@gracekimaniadvocates.co.ke</Link>
                        </span>
                    </div>
                </div>
            </section>
            {/* About Profile */}
            <section className="py-4 lg:py-8 md:py-6">
                <div className="flex flex-col py-4 max-w-4xl">
                    <h2 className="text-lg lg:text-xl text-gray-900 font-medium">Education Background</h2>
                    <p className="text-sm md:text-md leading-loose text-gray-800 py-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="flex flex-col py-4 max-w-4xl">
                    <h2 className="text-lg lg:text-xl text-gray-900 font-medium">Experience</h2>
                    <p className="text-sm md:text-md leading-loose text-gray-800 py-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </section>
            {/* Profile Field */}
            <section className="py-4 lg:py-8 md:py-6">
                <div className="py-4 flex items-center justify-center">
                    <h2 className="text-xl lg:text-2xl font-medium text-center text-gray-950">
                        Grace Wanjiru Kimani advices on the following areas:
                    </h2>
                </div>
                <div className="py-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-6">
                    {practiceAreasList.map((area, index) => (
                        <Link
                            href={area.link}
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
            </section>


        </main>
    )
}