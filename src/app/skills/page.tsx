"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../(components)/PageWrapper";
import devSkills from "../../utils/data/skills/devSkills.util";
import creativeTools from "../../utils/data/skills/creative-tools.util";
import devTools from "../../utils/data/skills/devTools.util";
import personalSoftSkills from "../../utils/data/skills/personalSoftSkills.util";
import hobbiesInterests from "../../utils/data/skills/hobbiesInterests.util";
import database from "../../utils/data/skills/database.util";
import aiTools from "../../utils/data/skills/ai-tools.util";
import devOps from "../../utils/data/skills/dev-ops.util";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

const sections = [
  { title: "Development Skills", data: devSkills, prefix: "dev-skills" },
  { title: "Database", data: database, prefix: "database" },
  { title: "AI Tools", data: aiTools, prefix: "ai-tools" },
  { title: "DevOps", data: devOps, prefix: "dev-ops" },
  { title: "Development Tools", data: devTools, prefix: "dev-tools" },
  { title: "Creative Tools", data: creativeTools, prefix: "creative-tools" },
  {
    title: "Personal Skills",
    data: personalSoftSkills,
    prefix: "personal-skills",
  },
  {
    title: "Hobbies and Interests",
    data: hobbiesInterests,
    prefix: "hobbies-and-interests",
  },
];

function SkillTag({
  name,
  file,
  fullName,
  prefix,
}: {
  name: string;
  file: string;
  fullName: string;
  prefix: string;
}) {
  return (
    <Link href={`/skills/${fullName}`} className="group relative">
      {/* Hover popup */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
        <div className="bg-stone-950 border border-stone-600 p-2">
          <div className="relative w-15 h-15">
            <Image
              src={`/logo/${prefix}/${file}`}
              alt={name}
              loading="eager"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
        </div>
        <div className="w-px h-2 bg-stone-600 mx-auto" />
      </div>

      {/* Tag itself */}
      <div className="flex items-center gap-2 border border-stone-900 px-2 p-2 text-stone-400 hover:text-stone-300 hover:border-stone-600 transition-all duration-200">
        <span className="relative shrink-0 w-7 h-7">
          <Image
            src={`/logo/${prefix}/${file}`}
            alt={name}
            loading="eager"
            fill
            className="object-contain"
            sizes="16px"
          />
        </span>
        <span className="text-sm tracking-widest capitalize whitespace-nowrap">
          {name}
        </span>
      </div>
    </Link>
  );
}

export default function Skills() {
  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          {...fadeIn(0)}
          className="border-l border-stone-950 pl-6 mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            What I know
          </p>
          <h1 className="text-5xl md:text-7xl font-cinzel tracking-wide uppercase leading-none">
            Skills
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-stone-700 uppercase mt-3">
            Click a tag to explore my notes & resources
          </p>
        </motion.div>

        {/* ── Highlight cards ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid grid-cols-1 md:grid-cols-3 border border-stone-950 mb-20"
        >
          {[
            {
              title: "FullStack",
              points: [
                "Building SPAs & Web apps",
                "REST APIs are my friend",
                "Optimizing for scale",
                "Let's not forget cyber security",
              ],
            },
            {
              title: "DSA & System Design",
              points: [
                "Pick the right model",
                "Building architecture first",
                "Optimizing sort & search",
                "Preparing data for a serving",
              ],
            },
            {
              title: "UI/uX",
              points: [
                "Building beautiful desktop apps",
                "Writing clean, modular code",
                "Offline softwares is best",
                "I like building buttons xD",
              ],
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`p-8 ${
                i < 2
                  ? "border-b md:border-b-0 md:border-r border-stone-950"
                  : ""
              }`}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-4 pb-3 border-b border-stone-800/40">
                {card.title}
              </p>
              <ul className="space-y-2">
                {card.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-stone-500 shrink-0 text-xs mt-0.5">
                      &mdash;
                    </span>
                    <span className="text-sm text-stone-600 leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* ── Skill sections ── */}
        <div className="flex flex-col gap-16">
          {sections.map(({ title, data, prefix }, si) => (
            <motion.div key={title} {...fadeUp(0.25 + si * 0.07)}>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[9px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
                  {title}
                </p>
                <div className="flex-1 h-px bg-stone-950" />
              </div>

              <div className="flex flex-wrap gap-5">
                {data.map((skill, i) => (
                  <SkillTag
                    key={i}
                    name={skill.fullName}
                    file={skill.file}
                    fullName={skill.fullName}
                    prefix={prefix}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapper>
  );
}
