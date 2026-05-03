import { Metadata } from "next";
import ProjectSinglePage from "../../(components)/Pages/ProjectSinglePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;

  const projectName = projectId.replace(/-/g, " ");

  return {
    title: projectName,
    description: `Explore the project "${projectName}" built by Mohd Uvaish (ItsMe Prince), including features, tech stack, and implementation details.`,
    alternates: {
      canonical: `/projects/${projectId}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  return <ProjectSinglePage projectId={projectId} />;
}
