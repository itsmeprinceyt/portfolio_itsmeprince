import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loader from './(components)/Components/Loader';
import Sidebar from "./(components)/Sidebar";

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-itsmeprince.vercel.app/'),
  title: "Mohd Uvaish - Portfolio | ItsMe Prince",
  description: "Welcome to my personal portfolio! Explore my diverse skills ranging from programming and technical expertise to soft skills. Check out my meticulously crafted projects and get an idea of what I can offer.",
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
      <body className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(80,80,80,0.4),rgba(0,0,0,0))] select-none">
        <Suspense fallback={<Loader />}>
          <div className="flex min-h-screen">
            <div className="min-h-screen">
              <Sidebar />
            </div>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </Suspense>
      </body>
    </html>
  );
}