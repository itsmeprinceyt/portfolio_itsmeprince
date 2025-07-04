import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Loader from './(components)/Loader';
import DynamicIsland from "./(components)/DynamicIsland";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohd Uvaish - Portfolio | ItsMe Prince",
  description: "Welcome to my personal portfolio! Explore my diverse skills ranging from programming and technical expertise to soft skills. Check out my meticulously crafted projects and get a glimpse of what I can offer.",
  icons: {
    icon: "/profile-picture/pfp1.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={<Loader />}>
          <DynamicIsland />
          {children}
          <div className="fixed text-white text-[10px] left-1/2 bottom-1 transform -translate-x-[50%] -translate-y-[50%] text-center">© 2025 ItsMe Prince.</div>
        </Suspense>
      </body>
    </html>
  );
}