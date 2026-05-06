"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import PageWrapper from "../PageWrapper";
import {
  bestProjects,
  majorProjects,
  miniProjects,
  playgroundProjects,
} from "../../../utils/data/projects/ProjectData.util";
import { Project } from "../../../types/projects.type";

export const metadata = {
  title: "Projects",
  description:
    "Browse my portfolio projects including full stack applications, Next.js builds, and real-world solutions showcasing my development skills.",
  alternates: {
    canonical: "/projects",
  },
};

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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div {...fadeUp(0.05 * index)}>
      <Link href={`/projects/${project.id}`} className="group block">
        <div
          className={`hover:border-stone-800 hover:bg-stone-950/60 transition-all duration-200`}
        >
          {/* Banner */}
          {project.banner ? (
            <div className="relative w-full aspect-video overflow-hidden border-b border-stone-950 group-hover:border-stone-800 transition-colors duration-200">
              <Image
                src={project.banner}
                alt={project.name}
                loading="eager"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="w-full aspect-video border-b border-stone-950 bg-stone-950/60 flex items-center justify-center">
              <span className="text-[9px] tracking-[0.4em] uppercase text-stone-400">
                No preview
              </span>
            </div>
          )}

          {/* Content */}
          <div className="p-5">
            <p className="text-lg text-stone-300 leading-snug mb-2 tracking-wide">
              {project.name}
            </p>
            <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className="text-[9px] tracking-[0.2em] uppercase text-stone-300 border border-stone-950 p-2"
                >
                  {tag.replace("/", "")}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-xs tracking-[0.2em] uppercase text-stone-300 px-1 py-0.5">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const sections = [
  { title: "Best Projects", data: bestProjects },
  { title: "Major Projects", data: majorProjects },
  { title: "Mini Projects", data: miniProjects },
  { title: "Playground", data: playgroundProjects },
];

const allSearchable = [
  ...majorProjects,
  ...miniProjects,
  ...playgroundProjects,
];

export default function ProjectsPage() {
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    return allSearchable.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          {...fadeIn(0)}
          className="border-l border-stone-950 pl-6 mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            Things I have built
          </p>
          <h1 className="text-5xl md:text-7xl font-cinzel tracking-wide uppercase leading-none">
            Projects
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-stone-700 uppercase mt-3">
            Click a project to view details, source & live demo
          </p>
        </motion.div>

        {/* ── Search ── */}
        <motion.div {...fadeUp(0.1)} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
              Search
            </p>
            <div className="flex-1 h-px bg-stone-950" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, tag, or keyword..."
            className="w-full bg-transparent border border-stone-900 focus:border-stone-700 outline-none px-4 py-3 text-sm text-stone-400 placeholder:text-stone-700 tracking-wide transition-colors duration-200"
          />
        </motion.div>

        {/* ── Search Results ── */}
        {filtered && (
          <motion.div {...fadeUp(0.1)} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
                Results
              </p>
              <div className="flex-1 h-px bg-stone-950" />
              <span className="text-[9px] tracking-[0.3em] uppercase text-stone-700">
                {filtered.length} found
              </span>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-950">
                {filtered.map((project, i) => (
                  <div key={project.id} className="bg-black">
                    <ProjectCard project={project} index={i} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-16">
                <p className="text-[11px] tracking-[0.3em] uppercase text-stone-700 italic">
                  No projects matched your search
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="text-[10px] tracking-[0.3em] uppercase text-stone-600 border border-stone-900 px-4 py-2 hover:border-stone-700 hover:text-stone-400 transition-colors duration-200 cursor-pointer"
                >
                  Clear
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* ── Project Sections ── */}
        {!filtered && (
          <div className="flex flex-col gap-20">
            {sections.map(({ title, data }, si) => (
              <motion.div key={title} {...fadeUp(0.2 + si * 0.07)}>
                <div className="flex items-center gap-4 mb-8">
                  <p className="text-2xl tracking-[0.5em] uppercase text-stone-400 shrink-0">
                    {title}
                  </p>
                  <div className="flex-1 h-px bg-stone-400" />
                  <span className="text-[12px] tracking-[0.3em] uppercase text-stone-400">
                    {data.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-950">
                  {data.map((project, i) => (
                    <div key={project.id} className="bg-black">
                      <ProjectCard project={project} index={i} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapper>
  );
}
