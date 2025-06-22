import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { CartProvider } from "./context/CartContext";
const quickSand = Quicksand({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Grace Kimani and Company Advocates",
  description: "A full-service law firm based in Githunguri, Nairobi, Kenya. We offer a world class experience and high-quality legal services for solutions to clients. We ensure that our clients get the best solutions for their legal and business advisory needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${quickSand.className}  antialiased`}>
        <Navbar />
        <CartProvider>
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
