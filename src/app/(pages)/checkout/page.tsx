"use client";

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { cart, removeFromCart, updateCartQuantity, getTotalPrice, clearCart } = useCart();
    // const router = useRouter();

    const handleQuantityChange = (itemResourceId: string, itemDocumentTitle: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        updateCartQuantity(itemResourceId, itemDocumentTitle, newQuantity);
    };

    const handleRemoveItem = (itemResourceId: string, itemDocumentTitle: string) => {
        removeFromCart(itemResourceId, itemDocumentTitle);
    };

    const handleProceedToPayment = async () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before proceeding to payment.");
            return;
        }

        // ---> Stripe Integration Starts Here
        // This is a simplified example. In a real application, you'd send
        // cart details to a backend API route to create a Stripe Checkout Session.

        // try {
        //     const response = await fetch('/api/create-checkout-session', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ items: cart }),
        //     });

        //     if (!response.ok) {
        //         const errorData = await response.json();
        //         throw new Error(errorData.message || 'Failed to create checkout session');
        //     }

        //     const session = await response.json();

        //     // Redirect to Stripe Checkout page
        //     window.location.href = session.url; // Stripe returns a URL to redirect to

        // } catch (error: any) {
        //     console.error("Error initiating checkout:", error);
        //     alert(`Error initiating checkout: ${error.message || 'Please try again.'}`);
        // }
        // Stripe Integration Ends Here <---
    };

    return (
        <main className="dark:bg-white bg-white min-h-screen">
            <div className="max-w-screen-xl mx-auto py-8 lg:px-8 md:px-6 px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center py-10">
                        <p className="text-xl text-gray-700">Your cart is empty.</p>
                        <Link href="/" className="mt-4 inline-block text-lg font-medium text-[#000EEE] hover:underline">
                            Purchase Document
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <div className="space-y-4">
                                {cart.map((item, index) => (
                                    <div key={`${item.resourceId}-${item.documentTitle}-${index}`} className="flex items-center gap-4 p-4 border rounded-md shadow-sm bg-white">
                                        
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900">{item.documentTitle}</h3>
                                            <p className="text-sm text-gray-600">Price: Ksh {item.price.toLocaleString()}</p>
                                            <div className="flex items-center mt-2">
                                                <label htmlFor={`quantity-${index}`} className="sr-only">Quantity</label>
                                                <input
                                                    type="number"
                                                    id={`quantity-${index}`}
                                                    value={item.quantity}
                                                    min="1"
                                                    onChange={(e) => handleQuantityChange(item.resourceId, item.documentTitle, e)}
                                                    className="w-20 p-2 border rounded-md text-center"
                                                />
                                                <button
                                                    onClick={() => handleRemoveItem(item.resourceId, item.documentTitle)}
                                                    className="ml-4 text-red-600 hover:text-red-800 font-medium cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/3 bg-gray-50 p-6 rounded-md shadow-md h-fit">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-medium text-gray-700">Total Items:</span>
                                <span className="text-lg font-bold text-gray-900">{cart.length}</span>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl font-semibold text-gray-800">Total Price:</span>
                                <span className="text-xl font-bold text-red-600">Ksh {getTotalPrice().toLocaleString()}</span>
                            </div>
                            <button
                                onClick={handleProceedToPayment}
                                className="w-full rounded-md bg-[#A40606] hover:bg-red-700 px-6 py-3 cursor-pointer text-white text-lg font-semibold"
                            >
                                Proceed to Payment
                            </button>
                            <button
                                onClick={clearCart}
                                className="w-full mt-4 rounded-md border border-gray-300 text-gray-700 cursor-pointer hover:bg-gray-100 px-6 py-3 text-lg font-medium"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}