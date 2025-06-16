

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
                    <h2 className="text-xl text-gray-950 text-center">Resources List</h2>
                </div>
            </div>
        </main>
    )
}