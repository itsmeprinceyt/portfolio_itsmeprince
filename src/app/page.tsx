import { Metadata } from "next";
import HomePage from "./(components)/Pages/HomePage";

export const metadata: Metadata = {
  title: "Mohd Uvaish a.k.a ItsMe Prince Portfolio",
  description:
    "Mohd Uvaish (ItsMe Prince) is a Full Stack Developer skilled in Next.js, TypeScript, and modern web technologies. Explore projects, skills, and professional experience.",
  alternates: {
    canonical: "https://www.itsmeprince.com/",
  },
};

export default function Home() {
  return <HomePage />;
}
