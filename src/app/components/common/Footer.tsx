import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#000EEE] to-[#0A00AA] py-16 sm:py-20 lg:py-24 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 items-start px-4">
                    {/* Company Info Section */}
                    <div className="flex flex-col items-start md:text-left lg:col-span-1">
                        <Link href="/" className="mb-4">
                            <Image
                                src="/logo.jpg"
                                alt="Grace Kimani and Company Advocates Logo"
                                width={180}
                                height={140}
                                className="h-auto object-contain"
                            />
                        </Link>
                        <p className="text-base leading-relaxed max-w-xs">
                            Your trusted full-service law firm in Nairobi, Kenya, dedicated to delivering expert legal solutions.
                        </p>
                    </div>

                    {/* Contact Info Section */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3 flex flex-col">
                            <Link href="tel:+25479566188" className="flex items-center hover:text-gray-200 transition-colors duration-200">
                                <FaPhoneAlt className="mr-3 text-lg" /> 079566188
                            </Link>
                            <Link href="tel:+254716976001" className="flex items-center hover:text-gray-200 transition-colors duration-200">
                                <FaPhoneAlt className="mr-3 text-lg" /> 0716976001
                            </Link>
                            <Link href="mailto:info@gracekimaniadvocates.co.ke" className="flex items-center hover:text-gray-200 transition-colors duration-200">
                                <FaEnvelope className="mr-3 text-lg" /> info@gracekimaniadvocates.co.ke {/* Added a placeholder email */}
                            </Link>
                            <Link href="http://maps.google.com/?q=Githunguri,Nairobi" target='_blank' rel="noopener noreferrer" className="flex items-start hover:text-gray-200 transition-colors duration-200">
                                <FaMapMarkerAlt className="mr-3 text-lg mt-1" /> Githunguri, Nairobi
                            </Link>
                        </div>
                    </div>

                    {/* Company Navigation */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-xl font-bold mb-4 ">Company</h3>
                        <div className="space-y-3 flex flex-col">
                            <Link href="/practice-areas" className="hover:text-gray-200 transition-colors duration-200">
                                Practice Areas
                            </Link>
                            <Link href="/resources" className="hover:text-gray-200 transition-colors duration-200">
                                Resources
                            </Link>
                            <Link href="/about" className="hover:text-gray-200 transition-colors duration-200">
                                About Us
                            </Link>
                            <Link href="/team" className="hover:text-gray-200 transition-colors duration-200">
                                Our Team
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-xl font-bold mb-4 ">Quick Links</h3>
                        <div className="space-y-3 flex flex-col">
                            <Link href="/contact" className="hover:text-gray-200 transition-colors duration-200">
                                Contact Us
                            </Link>
                            <Link href="/terms" className="hover:text-gray-200 transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link href="/privacy" className="hover:text-gray-200 transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/faq" className="hover:text-gray-200 transition-colors duration-200">
                                FAQs
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright and Developer Info */}
                <div className="border-t border-white mt-16 pt-8 text-center text-sm">
                    <p className="mb-2">
                        &copy; {new Date().getFullYear()} **Grace Kimani and Company Advocates**. All rights reserved.
                    </p>
                    <p>
                        Designed and Developed by{' '}
                        <Link href="https://nickjuma.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-gray-200 transition-colors duration-200">
                            Nick Juma
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}