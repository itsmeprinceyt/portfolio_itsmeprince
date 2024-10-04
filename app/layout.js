import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from './(components)/CustomCursor';
import Navbar from "./(components)/Navbar.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohd Uvaish - Portfolio | ItsMe Prince",
  description: "Welcome to my personal portfolio! Explore my diverse skills ranging from programming and technical expertise to soft skills. Check out my meticulously crafted projects and get a glimpse of what I can offer.",
  icons: {
    icon: "/assets/Profile.jpg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Mohd Uvaish, ItsMe Prince, Portfolio, Web Developer, Next.js, Tailwind CSS, Full Stack Developer" />
        <meta name="author" content="Mohd Uvaish" />
      </head>
      <body className={`${inter.className} relative`}>
        <CustomCursor />
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
