// "use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css'
import "./globals.css";
import AuthContext, { AuthProvider } from "@/data/context/AuthContext";
import { AppProvider } from "@/data/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <AppProvider>

    <html lang="en">
      <body >
        {children}
        </body>
    </html>
    </AppProvider>
    </AuthProvider>
  );
}


