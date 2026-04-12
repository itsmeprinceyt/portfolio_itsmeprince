"use client";
import { motion } from "framer-motion";
import PageWrapper from "../(components)/PageWrapper";
import { experiences } from "../../utils/data/experience.util";
import ShimmerLinkNormal from "../(components)/Utils/ShimmerLinkNormal";

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

export default function Experience() {
  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-4xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          {...fadeIn(0)}
          className="border-l border-stone-950 pl-6 mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            Work history
          </p>
          <h1 className="text-5xl md:text-7xl font-cinzel tracking-wide uppercase leading-none">
            Experience
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-stone-700 uppercase mt-3">
            What I&apos;ve shipped and where
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-700" />

          <div className="flex flex-col">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(0.1 + idx * 0.08)}
                className="relative pl-10 pb-16 last:pb-0"
              >
                {/* Dot on the line */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 border border-stone-700 bg-stone-900" />

                {/* Period + mode */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] tracking-[0.35em] uppercase text-stone-400">
                    {exp.period}
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400">
                    &mdash;
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400">
                    {exp.mode}
                  </span>
                </div>

                {/* Company + role */}
                <h2 className="font-cinzel text-xl tracking-wide uppercase text-white mb-1">
                  {exp.company}
                </h2>
                <p className="text-[12px] tracking-[0.3em] uppercase text-stone-400 mb-5">
                  {exp.role}
                </p>

                {/* Description */}
                <ul className="space-y-2 mb-5">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-stone-800 mt-1 shrink-0 text-xs">
                        &mdash;
                      </span>
                      <span className="text-sm text-stone-600 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                {exp.links && exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-5">
                    {exp.links.map((link, i) => (
                      <ShimmerLinkNormal
                        external={true}
                        key={i}
                        href={link.href}
                      >
                        {link.label} &rarr;
                      </ShimmerLinkNormal>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapper>
  );
}
