"use client"

import { allDocuments } from "@/app/lib/resources";
import Link from 'next/link';

import HeaderComponent from "@/app/components/ui/HeaderComponent";

export default function Page() {
    return (
        <main className="dark:bg-white bg-white">
            <HeaderComponent
                title="Resources"
                tagline="Ready and Available Legal Documents."
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <h2 className="text-xl text-gray-950 font-semibold text-center">List of Legal Documents</h2>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto lg:p-8 md:p-6 p-4 pb-8">
                <div className="grid cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:gap-6 gap-4">
                    {allDocuments.map((doc, index) => (
                        <Link key={index} href={`/resources/${doc.resourceId}`} className="flex flex-col gap-2 space-y-2 p-4 bg-white rounded-md border shadow-md h-auto transition-transform duration-300 hover:scale-105">
                            <h3 className="text-md font-semibold text-gray-900">{doc.title}</h3>
                            <p className="text-sm text-gray-600">{doc.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}