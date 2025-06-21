"use client"

import Link from "next/link";
import { practiceAreas } from "@/app/lib/practiceAreas";
import { useParams } from "next/navigation";

export default function PracticeAreaPage() {
    const { practiceareasId } = useParams();


    const practiceArea = practiceAreas.find(
        (area) => area.practiceareasId === practiceareasId
    );

    if (!practiceArea) {
        return (
            <div className="min-h-screen flex flex-col gap-4 items-center justify-center text-center px-4 bg-white">
                <h1 className="text-2xl font-semibold text-red-600">
                    Practice area not found.
                </h1>
                <Link href="/" className="text-xl font-medium hover:underline text-[#000EEE]">Go Home</Link>
            </div>
        );
    }

    return (
        <main className="dark:bg-white bg-white">
            <>
                <div className="bg-[#A40606]">
                    <div className="max-w-screen-xl mx-auto py-4">
                        <div className="lg:px-8 lg:py-10 md:px-6 md:py-12 px-4 py-6">
                            <div className="flex flex-col py-4 space-y-4 items-start justify-start">
                                <h2 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl text-white font-semibold text-start">{practiceArea.title}</h2>
                                <h3 className="text-md lg:text-lg text-white">{practiceArea.tagline}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto lg:py-12 md:py-12 py-8">
                    <div className="lg:p-8 md:p-6 p-4">
                        <div className="space-y-2 flex flex-col gap-2 max-w-4xl py-2">
                            <p className="lg:leading-12 md:leading-10 sm:leading-7 text-md lg:text-lg md:text-md text-gray-950 font-medium space-y-2">
                                {practiceArea.descriptionOne}
                            </p>
                            <p className="lg:leading-12 md:leading-10 sm:leading-7 text-md lg:text-lg md:text-md text-gray-800 space-y-2">
                                {practiceArea.descriptionTwo}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto lg:py-8 md:py-6 p-4">
                    <div className="p-4 flex flex-col gap-4 items-center space-y-2">
                        <span className="text-2xl font-medium text-[#000EEE]">Call Us Today</span>
                        <Link href="tel:+254795661888" className="text-xl font-bold hover:underline text-gray-800">0795661888</Link>
                    </div>
                </div>
            </>
        </main>
    );
}