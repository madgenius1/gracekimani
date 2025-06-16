


import HeaderComponent from "@/app/components/ui/HeaderComponent";

// interface PageProps {
//   params: {
//     pageId: string;
//   };
// }

export default function Page() {
    return (
        <main className="dark:bg-white bg-white">
            <HeaderComponent
                title="Practice Areas"
                tagline="Fields of Legal Expertise for You."
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <h2 className="text-xl text-gray-950 text-center">Practice Areas Id</h2>
                </div>
            </div>
        </main>
    )
}