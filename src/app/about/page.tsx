import AboutPage from "../(components)/Pages/AboutPage";

export const metadata = {
  title: "About",
  description:
    "Learn more about Mohd Uvaish (ItsMe Prince), a full stack developer passionate about building scalable web applications and modern user experiences.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return <AboutPage />;
}
