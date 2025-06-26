import { notFound } from "next/navigation";
import PageWrapper from '../../(components)/PageWrapper';
import devSkills from '../../../utility/devSkills';
import personalSoftSkills from '../../../utility/personalSoftSkills';
import creativeTools from '../../../utility/creative-tools';
import devTools from '../../../utility/devTools';

export default async function SkillPage(
  props: {
    params: Promise<{ techStack: string }>
  }
) {
  const { techStack } = await props.params;
  const decodedTechStack: string = decodeURIComponent(techStack);

  const validStacks = [...personalSoftSkills, ...devSkills, ...creativeTools, ...devTools];

  const isValid: boolean = validStacks.some(stack =>
    stack.fullName.toLowerCase() === decodedTechStack.toLowerCase()
  );

  if (!isValid) {
    notFound();
  }

  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center gap-10 text-white">
        <h1 className="text-3xl font-bold">{decodedTechStack}</h1>
        <p className="animate-spin-slow">🍳Cooking 🔥</p>
      </div>
    </PageWrapper>
  );
}