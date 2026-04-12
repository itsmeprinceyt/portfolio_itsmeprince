"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../(components)/PageWrapper";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function About() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    axios
      .get<{ photos: string[] }>("/api/setup-photos")
      .then((res) => setPhotos(res.data.photos))
      .catch(() => setPhotos([]));
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [photos.length, next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -40, opacity: 0 }),
  };

  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-5xl mx-auto">
        {/* ── Name header with left border accent ── */}
        <motion.div
          {...fadeIn(0)}
          className="border-l border-stone-950 pl-6 mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            About me
          </p>
          <h1 className="text-5xl md:text-7xl font-cinzel tracking-wide uppercase leading-none">
            Mohd Uvaish
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-stone-700 uppercase mt-3">
            Also known as itsme prince
          </p>
        </motion.div>

        {/* ── Portrait + bio side by side ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start"
        >
          {/* Portrait */}
          <div>
            <div className="relative aspect-square w-full border border-stone-800/60 bg-stone-950 overflow-hidden">
              <Image
                src="/photos-logos/square.jpg"
                alt="Mohd Uvaish"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-center items-center mt-3 text-[10px] tracking-[0.3em] uppercase text-stone-600 text-center">
              KANPUR, UTTAR PRADESH, INDIA &mdash; EARTH
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 pt-2">
            <p className="text-sm text-stone-500 leading-loose">
              A developer who writes code that works on the first try &mdash;{" "}
              <span className="text-stone-400 italic">just kidding. </span> But
              when it ships, it&apos;s clean and it&apos;s intentional.
            </p>
            <p className="text-sm text-stone-500 leading-loose">
              I&apos;m into building{" "}
              <span className="text-stone-300">clean, fast, purposeful</span>{" "}
              interfaces and backends &mdash; the kind where you feel the effort
              without seeing the chaos. Both the user and whoever reads the code
              later.
            </p>
            <p className="text-sm text-stone-500 leading-loose">
              When I&apos;m not in a codebase, I&apos;m{" "}
              <span className="text-stone-300">
                obsessing over UI/UX details
              </span>{" "}
              or{" "}
              <span className="text-stone-300">
                overengineering the architecture
              </span>{" "}
              of a side project nobody asked for. Scalable, maintainable,
              well-structured &mdash; even if it&apos;s just a todo app.
            </p>
            <p className="text-sm text-stone-500 leading-loose">
              Yes, using an <span className="text-stone-300">em dash</span>{" "}
              doesn&apos;t automatically mean I&apos;m using AI to write.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-3">
              {[
                "Fullstack Software Engineer",
                "Dev Ops",
                "Cyber Security",
                "Side-project paglu",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.3em] uppercase border border-stone-800 text-stone-600 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Inline stats */}
            <div className="grid grid-cols-3 border-t border-stone-950 mt-6 pt-6">
              {[
                { num: "4+", label: "Yrs coding", href: "/experience" },
                { num: "20+", label: "Projects", href: "/projects" },
                { num: "∞", label: "Bugs fixed" },
              ].map((s, i) => {
                const inner = (
                  <>
                    <span className="block font-cinzel text-2xl text-white">
                      {s.num}
                    </span>
                    <span className="text-[9px] tracking-[0.25em] uppercase text-stone-600">
                      {s.label}
                    </span>
                  </>
                );

                return (
                  <div
                    key={s.label}
                    className={`${
                      i < 2 ? "border-r border-stone-950 pr-4" : ""
                    } ${i > 0 ? "pl-4" : ""}`}
                  >
                    {s.href ? (
                      <Link
                        href={s.href}
                        className="block hover:opacity-70 transition-opacity duration-200"
                      >
                        {inner}
                      </Link>
                    ) : (
                      inner
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Bio columns ── */}
        <motion.div {...fadeUp(0.35)} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-stone-950">
            <div className="py-8 md:border-r border-stone-950 md:pr-10">
              <p className="text-[9px] tracking-[0.4em] uppercase text-stone-600 mb-4 pb-3 border-b border-stone-950">
                How I got here
              </p>
              <p className="text-sm text-stone-500 leading-loose">
                Started with &quot;how does a program even work&quot;, ended up
                building full-stack web application and questioning my life
                choices at 1:43am. No regrets. The curiosity never turned off
                &mdash; it just got more expensive in terms of hardware.
              </p>
            </div>
            <div className="py-8 md:pl-10">
              <p className="text-[9px] tracking-[0.4em] uppercase text-stone-700 mb-4 pb-3 border-b border-stone-950">
                What drives me
              </p>
              <p className="text-sm text-stone-500 leading-loose">
                I can&apos;t stop at &quot;it works&quot;. Whether it&apos;s a
                button&apos;s hover state or a full job queue architecture.
                I&apos;m stuck until it actually feels{" "}
                <span className="text-stone-300">right</span>. Most people move
                on. I don&apos;t.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Setup section ── */}
        <motion.div {...fadeUp(0.45)} className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-stone-600 mb-1">
                The battlefield
              </p>
              <h2 className="font-cinzel text-2xl tracking-widest uppercase">
                My Setup
              </h2>
            </div>
            {photos.length > 1 && (
              <span className="text-[9px] tracking-[0.3em] uppercase text-stone-700">
                {current + 1} / {photos.length}
              </span>
            )}
          </div>

          {/* Slider */}
          {photos.length > 0 ? (
            <div className="relative w-full aspect-video bg-stone-950 border border-stone-800/60 overflow-hidden mb-4 group">
              <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                  key={photos[current]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={photos[current]}
                    alt={`Setup ${current + 1}`}
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {photos.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-0 top-0 h-full px-4 z-10 text-stone-700 hover:text-stone-300 transition-colors duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                  >
                    <ChevronLeft size={18} strokeWidth={1} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-0 top-0 h-full px-4 z-10 text-stone-700 hover:text-stone-300 transition-colors duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                  >
                    <ChevronRight size={18} strokeWidth={1} />
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="w-full aspect-video bg-stone-950 border border-stone-800/60 mb-4 animate-pulse" />
          )}

          {/* Dot indicators */}
          {photos.length > 1 && (
            <div className="flex gap-2 mb-6">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-px transition-all duration-300 ${
                    i === current
                      ? "bg-stone-400 w-8"
                      : "bg-stone-800 w-4 hover:bg-stone-600"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapper>
  );
}
