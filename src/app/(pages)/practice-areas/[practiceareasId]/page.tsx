"use client"

import React from "react";
import PageHeadComponent from "@/app/components/ui/PageHeadComponent";

export default function PracticeAreaPage() {


    // if (!area) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center text-center px-4">
    //             <h1 className="text-2xl font-semibold text-red-600">
    //                 Practice area not found.
    //             </h1>
    //         </div>
    //     );
    // }

    return (
        <main className="dark:bg-white bg-white">
            <PageHeadComponent
                title="{area.title}"
                tagline="{area.tagline}"
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <p className="text-md lg:text-lg text-gray-800 leading-relaxed space-y-2">Item</p>
                </div>
            </div>
        </main>
    );
}
