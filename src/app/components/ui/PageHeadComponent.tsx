


interface Props {
    title: string,
    tagline: string
}

export default function PageHeadComponent({ title, tagline }: Props) {
    return (
        <div className="bg-[#A40606]">
            <div className="max-w-screen-xl mx-auto py-4">
                <div className="lg:px-8 lg:py-10 md:px-6 md:py-12 px-4 py-6">
                    <div className="flex flex-col py-4 space-y-4 items-start justify-start">
                        <h2 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl text-white font-semibold text-start">{title}</h2>
                        <h3 className="text-md lg:text-lg text-white">{tagline}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}