"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function SuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        // Clear the cart when the user lands on the success page
        clearCart();
    }, [clearCart]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-green-50">
            <h1 className="text-4xl font-bold text-green-700 mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-700 mb-8">Thank you for your purchase. Your documents are being prepared.</p>
            <Link href="/" className="text-xl font-medium text-[#000EEE] hover:underline">
                Go back to Home
            </Link>
        </div>
    );
}