
import ContactComponent from "@/app/components/ui/ContactComponent";
import HeaderComponent from "@/app/components/ui/HeaderComponent";


export default function Page() {
    return (
        <main className="dark:bg-white bg-white h-screen">
            <HeaderComponent
                title="Contact Us Today"
                tagline="Reach Out To Us for Your Legal Needs."
            />
            <div className="lg:py-8 md:py-6 py-4">
                <ContactComponent />
            </div>
        </main>
    )
}