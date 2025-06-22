import Link from 'next/link';

export default function CancelPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-red-50">
            <h1 className="text-4xl font-bold text-red-700 mb-4">Payment Canceled!</h1>
            <p className="text-xl text-gray-700 mb-8">Your payment was not completed. You can try again.</p>
            <Link href="/checkout" className="text-xl font-medium text-[#000EEE] hover:underline mr-4">
                Back to Cart
            </Link>
            <Link href="/resources" className="text-xl font-medium text-[#000EEE] hover:underline">
                Go back to Resources
            </Link>
        </div>
    );
}