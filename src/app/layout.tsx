import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "./(components)/Navbar";
import CustomLoader from "./(components)/Components/CustomLoader";

const SITE_URL: string = "https://portfolio-itsmeprince.vercel.app";
const SITE_NAME: string = "Mohd Uvaish a.k.a ItsMe Prince Portfolio";
const LOGO: string = "/photos-logos/logo2_circle.png";
const LOGO_RECTANGLE: string = "/photos-logos/logo2_rectangle.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Mohd Uvaish | ItsMe Prince - Portfolio",
    template: `%s | Mohd Uvaish`,
  },

  description:
    "Mohd Uvaish (ItsMe Prince) is a Full Stack Developer skilled in Next.js, TypeScript, and modern web technologies. Explore projects, skills, and professional experience.",

  keywords: [
    "Mohd Uvaish",
    "ItsMe Prince",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer India",
    "Portfolio Website",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Frontend Developer",
    "MERN Stack Developer",
  ],

  authors: [{ name: "Mohd Uvaish" }],
  creator: "Mohd Uvaish",
  publisher: "Mohd Uvaish",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Mohd Uvaish | ItsMe Prince - Portfolio",
    description:
      "Explore Portfolio of Mohd Uvaish (ItsMe Prince) whose a Full Stack Developer skilled in Next.js, TypeScript, and modern web technologies. Visit to see projects, skills, and professional experience.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: LOGO_RECTANGLE,
        width: 1200,
        height: 630,
        alt: "Mohd Uvaish Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohd Uvaish | ItsMe Prince - Portfolio",
    description:
      "Explore Portfolio of Mohd Uvaish (ItsMe Prince) whose a Full Stack Developer skilled in Next.js, TypeScript, and modern web technologies. Visit to see projects, skills, and professional experience.",
    images: [LOGO_RECTANGLE],
  },

  icons: {
    icon: LOGO,
    shortcut: LOGO,
    apple: LOGO,
  },

  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="select-none">
        <Suspense fallback={<CustomLoader />}>
          <Navbar />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
