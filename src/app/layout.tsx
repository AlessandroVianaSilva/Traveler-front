// "use client"

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import 'tailwindcss/tailwind.css'
import "slick-carousel/slick/slick.css";
import "./globals.css";
import AuthContext, { AuthProvider } from "@/data/context/AuthContext";
import { AppProvider } from "@/data/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForcarAutenticacao from "@/components/auth/ForcarAutenticacao";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // <ForcarAutenticacao>
    <AuthProvider>


    <html lang="en">
      <body className="bg-gray-300">
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>

    </AuthProvider>
      // </ForcarAutenticacao>
 
 
    //  <html lang="en">
    //    <body  className="bg-gray-300">
    //      <Header/>
    //      {children}
    //      <Footer/>
    //      </body>
    //  </html>
  );
}


