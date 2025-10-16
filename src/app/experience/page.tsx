"use client";
import PageWrapper from "../(components)/PageWrapper";
import Divider from "../(components)/Components/Divider";
import ExperienceCard from "../(components)/ExperienceCard";
import { experiences } from "../../utils/Experience.util";

export default function Experience() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center gap-8 text-stone-300 p-5">
        <h2 className="text-4xl text-glow-white text-stone-300">
          Experience
        </h2>
        <Divider />

        <div className="flex flex-col gap-8 relative w-full max-w-[600px]">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
