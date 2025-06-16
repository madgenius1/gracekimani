

import HeaderComponent from "@/app/components/ui/HeaderComponent";

export default function Page() {
    return (
        <main className="dark:bg-white bg-white">
            <HeaderComponent
                title="About Us"
                tagline="The Story of Our Journey, So Far."
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <h2 className="text-xl text-gray-950 text-center">About Us</h2>
                </div>
            </div>
        </main>
    )
}