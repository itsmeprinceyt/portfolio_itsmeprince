import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohd Uvaish | ItsMe Prince - Portfolio",
  description: "My Personal Portfolio showcasing my skills and projects.",
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
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
