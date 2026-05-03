import ProjectsPage from "../(components)/Pages/ProjectPage";

export const metadata = {
  title: "Projects",
  description:
    "Browse my portfolio projects including full stack applications, Next.js builds, and real-world solutions showcasing my development skills.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
