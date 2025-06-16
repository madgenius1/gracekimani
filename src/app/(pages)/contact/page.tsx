

import HeaderComponent from "@/app/components/ui/HeaderComponent";


export default function Page() {
    return (
        <main className="dark:bg-white bg-white h-screen">
            <HeaderComponent
                title="Contact Us Today"
                tagline="Reach Out To Us for Your Legal Needs."
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <h2 className="text-xl text-gray-950 text-center">Contact Us</h2>
                </div>
            </div>
        </main>
    )
}