// app/resources/[resourceId]/page.tsx
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { resourceItems } from '@/app/lib/resources';
import { useParams, useRouter } from "next/navigation"; // Import useRouter
import { useCart } from '@/app/context/CartContext'; // Import useCart hook

export default function ResourcePage() {
    const { resourceId } = useParams();
    const router = useRouter(); // Initialize router
    const { addToCart } = useCart(); // Get addToCart function from context

    const resourceItem = resourceItems.find(
        (item) => item.resourceId === resourceId
    );

    if (!resourceItem) {
        return (
            <div className="min-h-screen flex flex-col gap-4 items-center justify-center text-center px-4 bg-white">
                <h1 className="text-2xl font-semibold text-red-600">
                    Resource not found.
                </h1>
                <Link href="/" className="text-xl font-medium hover:underline text-[#000EEE]">Go Home</Link>
            </div>
        );
    }

    const handleAddToCart = (resource: typeof resourceItem['resourceList'][0]) => {
        addToCart({
            resourceId: resourceItem.resourceId,
            documentTitle: resource.documentTitle,
            price: resource.price,
            imageSrc: resource.imageSrc,
        });
        alert(`${resource.documentTitle} added to cart!`);
    };

    const handleCheckoutRedirect = () => {
        router.push('/checkout');
    };

    return (
        <main className="dark:bg-white bg-white min-h-screen">
            <>
                <div className="bg-[#A40606]">
                    <div className="max-w-screen-xl mx-auto py-4">
                        <div className="lg:px-8 lg:py-10 md:px-6 md:py-12 px-4 py-6">
                            <div className="flex flex-col py-4 space-y-4 items-start justify-start">
                                <h2 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl text-white font-semibold text-start">{resourceItem.title}</h2>
                                <h3 className="text-md lg:text-lg text-white">{resourceItem.tagline}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto">
                    <div className="lg:p-8 md:p-6 p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-6 md:gap-4 gap-4 py-4">
                            {resourceItem.resourceList.map((resource, index) => (
                                <div key={index} className="p-4 rounded-md shadow-md border">
                                    <div className="space-y-2 gap-2 flex flex-col py-2">
                                        <span className="text-md font-semibold text-gray-950">
                                            {resource.documentTitle}
                                        </span>
                                        <Image
                                            src={resource.imageSrc}
                                            alt={resource.imageAlt}
                                            height={200}
                                            width={360}
                                            className='flex items-center justify-center blurred rounded-t-md'
                                        />
                                        <p className='text-sm font-medium text-gray-800 leading-relaxed'>
                                            {resource.description}
                                        </p>
                                        <p className='text-lg font-bold text-gray-900'>
                                            Ksh {resource.price.toLocaleString()}
                                        </p>
                                        <button
                                            onClick={() => handleAddToCart(resource)}
                                            className="rounded-md text-center hover:bg-[#099D15] px-6 py-3 bg-[#000EEE] text-white cursor-pointer"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Optional: A button to proceed to checkout from this page */}
                        <div className="mt-8 text-center">
                            <button
                                onClick={handleCheckoutRedirect}
                                className="rounded-md bg-green-600 hover:bg-green-700 px-8 py-4 text-white text-lg font-semibold cursor-pointer"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </>
        </main>
    )
}