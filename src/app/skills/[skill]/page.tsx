"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

import PageWrapperNormal from "../../(components)/PageWrapper";
import devSkills from "../../../utils/data/skills/devSkills.util";
import creativeTools from "../../../utils/data/skills/creative-tools.util";
import devTools from "../../../utils/data/skills/devTools.util";
import hobbiesInterests from "../../../utils/data/skills/hobbiesInterests.util";
import personalSoftSkills from "../../../utils/data/skills/personalSoftSkills.util";
import { SkillInterface } from "../../../types/skills.type";

const skillCategories = [
  { name: "dev-skills", data: devSkills },
  { name: "creative-tools", data: creativeTools },
  { name: "dev-tools", data: devTools },
  { name: "hobbies-and-interests", data: hobbiesInterests },
  { name: "personal-soft-skills", data: personalSoftSkills },
];

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

export default function SkillPage({
  params,
}: {
  params: Promise<{ skill: string }>;
}) {
  const { skill: rawSkill } = use(params);
  const [matched, setMatched] = useState<{
    skill: SkillInterface;
    category: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = () => {
      if (!rawSkill) return;
      const decodedSkill = decodeURIComponent(rawSkill)
        .replace(/%2F/g, " ")
        .trim();
      const escapeRegExp = (str: string) =>
        str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escapeRegExp(decodedSkill), "i");
      for (const { name, data } of skillCategories) {
        const found = data.find((item) => regex.test(item.fullName));
        if (found) {
          setMatched({ skill: found, category: name });
          break;
        }
      }
      setLoading(false);
    };
    load();
  }, [rawSkill]);

  if (loading) {
    return (
      <PageWrapperNormal>
        <div className="min-h-screen flex items-center justify-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-700 animate-pulse">
            LOADING
          </span>
        </div>
      </PageWrapperNormal>
    );
  }

  if (!matched) return notFound();

  const isInfoSection =
    matched.category !== "hobbies-interests" &&
    matched.category !== "personal-soft-skills";

  return (
    <PageWrapperNormal>
      <div className="text-white min-h-screen px-6 py-24 max-w-3xl mx-auto select-text">
        {/* ── Header ── */}
        <motion.div {...fadeIn(0)} className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-6">
            <Link
              href="/skills"
              className="flex items-center gap-2 text-[9px] tracking-[0.35em] uppercase text-stone-600 hover:text-stone-400 transition-colors duration-200 mt-1"
            >
              <ArrowLeft size={12} strokeWidth={1} />
              Back to skills
            </Link>

            <div className="flex items-center gap-3">
              {matched.skill.date && (
                <span className="text-[9px] tracking-[0.3em] uppercase text-stone-600">
                  Last Updated {matched.skill.date}
                </span>
              )}
            </div>
          </div>

          <div className="border-l border-stone-950 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src={`/logo/${matched.category}/${matched.skill.file}`}
                  alt={matched.skill.fullName}
                  fill
                  loading="eager"
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase">
                {matched.category.replace(/-/g, " ")}
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-cinzel tracking-wide uppercase leading-none">
              {matched.skill.fullName}
            </h1>
          </div>
        </motion.div>

        {/* ── Skill info ── */}
        {matched.skill.SkillInfo?.map((infoItem, index) => (
          <div key={index} className="flex flex-col gap-12">
            {/* Description */}
            {infoItem.description && (
              <motion.div {...fadeUp(0.15)}>
                <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 mb-6 pb-3 border-b border-stone-800/40">
                  My story with this
                </p>
                <div className="space-y-4">
                  {infoItem.description.map((line, i) => (
                    <p key={i} className="text-sm text-stone-600 leading-loose">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Links */}
            <motion.div {...fadeUp(0.25)}>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
                  Resources
                </p>
                <div className="flex-1 h-px bg-stone-800/40" />
              </div>

              {infoItem.Links && infoItem.Links.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {infoItem.Links.map((link, i) => (
                    <div
                      key={i}
                      className="group border border-stone-950 p-4 hover:border-stone-800 hover:bg-stone-950/50 transition-all duration-150"
                    >
                      {/* Index + Name row */}
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-[10px] text-stone-400 mt-0.5 shrink-0 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-stone-300 leading-snug font-medium">
                          {link.linkName}
                        </p>
                      </div>

                      {/* URL */}
                      {link.linkURL && (
                        <Link
                          href={link.linkURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-[11px] tracking-widest text-blue-600 hover:text-blue-900 transition-colors duration-200 break-all mb-3 ml-7"
                        >
                          {link.linkURL}
                        </Link>
                      )}

                      {/* Note */}
                      {link.note && (
                        <div className="ml-7 mt-2 pl-3 border-l border-stone-700/60">
                          <p className="text-[11px] text-stone-500 leading-relaxed italic">
                            {link.note}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[11px] tracking-[0.2em] uppercase text-stone-700 italic">
                  No resources available
                </p>
              )}
            </motion.div>
          </div>
        ))}

        {/* ── Tips & disclaimer ── */}
        {isInfoSection && (
          <motion.div {...fadeUp(0.35)} className="mt-16 space-y-4">
            <div className="border-l border-stone-800 pl-4 py-2">
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                Disclaimer
              </p>
              <p className="text-sm text-stone-600 leading-loose">
                Most of these resources are ones I&apos;ve personally learned
                from — YouTube videos, books, or courses I found helpful. Some
                come from friends who found something useful and insisted I
                include it. Just sharing what worked for me.
              </p>
            </div>
            <div className="border-l border-stone-800 pl-4 py-2">
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                Pro tip
              </p>
              <p className="text-sm text-stone-600 leading-loose">
                Never limit yourself to a single course, platform, or creator.
                Exploring a variety of resources exposes you to different
                teaching approaches — and that can make all the difference in
                how well you learn.
              </p>
            </div>
          </motion.div>
        )}

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapperNormal>
  );
}
