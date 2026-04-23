"use client";
import { motion } from "framer-motion";
import PageWrapper from "../(components)/PageWrapper";
import services from "../../utils/data/services.util";
import ShimmerLinkNormal from "../(components)/Utils/ShimmerLinkNormal";
import { ChevronRight } from "lucide-react";

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

export default function Services() {
  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-4xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          {...fadeIn(0)}
          className="border-l border-stone-950 pl-6 mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            What I offer
          </p>
          <h1 className="text-5xl md:text-7xl font-cinzel tracking-wide uppercase leading-none">
            Services
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-stone-700 uppercase mt-3">
            Code, builds, and real talk
          </p>
        </motion.div>

        {/* ── Services ── */}
        <div className="flex flex-col border-t border-stone-950 mb-20">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.15 + i * 0.1)}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 py-12 border-b border-stone-950"
            >
              {/* Left */}
              <div className="flex flex-col gap-3">
                <s.icon size={18} strokeWidth={1} className="text-stone-600" />
                <p className="text-xs tracking-[0.3em] uppercase text-stone-400">
                  {s.label}
                </p>
              </div>

              {/* Right */}
              <div className="space-y-4">
                <p className="text-sm text-stone-500 leading-loose">
                  {s.description}
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-700 border-l border-stone-800 pl-3">
                  {s.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div>
            <p className="text-[11px] tracking-[0.5em] uppercase text-stone-600 mb-3">
              Interested?
            </p>
            <p className="text-sm text-stone-500 leading-loose max-w-sm">
              If any of this sounds like what you need, just reach out through
              the contact page. No forms, no fluff &mdash; just a message.
            </p>
          </div>

          <ShimmerLinkNormal animationDelay={0.8} href={"/contact"}>
            Contact
            <ChevronRight
              strokeWidth={1}
              size={17}
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </ShimmerLinkNormal>
        </motion.div>

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapper>
  );
}
