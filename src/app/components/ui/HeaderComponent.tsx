
interface HeaderProps {
    title: string,
    tagline: string
}

export default function HeaderComponent({ title, tagline }: HeaderProps){
    return (
        <main className="bg-[#000EEE]">
            <div className="max-w-screen-xl mx-auto py-8">
                <div className="lg:px-8 lg:py-12 md:px-6 md:py-12 px-4 py-8">
                    <div className="flex flex-col py-4 space-y-4 items-center justify-center">
                        <h2 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl text-white font-semibold">{title}</h2>
                        <h3 className="text-md lg:text-lg text-white">{tagline}</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}
