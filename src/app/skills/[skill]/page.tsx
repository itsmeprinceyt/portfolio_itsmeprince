import { Metadata } from "next";
import SkillPage from "../../(components)/Pages/SkillSinglePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ skill: string }>;
}): Promise<Metadata> {
  const { skill } = await params;

  const skillName = skill.replace("-", " ");

  return {
    title: `${skillName} Skill`,
    description: `Detailed overview of my experience and proficiency in ${skillName}, including projects and real-world usage.`,
    alternates: {
      canonical: `/skills/${skill}`,
    },
  };
}

export default async function Skill({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const { skill } = await params;

  return <SkillPage rawSkill={skill} />;
}
