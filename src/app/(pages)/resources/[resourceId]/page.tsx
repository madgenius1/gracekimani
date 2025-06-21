"use client"


import PageHeadComponent from "@/app/components/ui/PageHeadComponent";


export default function Page() {
    return (
        <main className="dark:bg-white bg-white h-screen">
            <PageHeadComponent
                title="Document Type"
                tagline="Document Tagline"
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <h2 className="text-xl text-gray-950 text-center">List of Document Types</h2>
                </div>
            </div>
        </main>
    )
}