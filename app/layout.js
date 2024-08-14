import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ItsMe Prince - Portfolio",
  description: "My Person Portfolio showcasing my skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <Navbar/>
        {children}
        </div>
        </body>
    </html>
  );
}
