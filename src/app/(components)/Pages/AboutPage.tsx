"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useBirthday from "../../../hooks/useBirthdayCount";
import useProjectCount from "../../../hooks/useProjectCount";
import PageWrapper from "../PageWrapper";
import { BIRTH_DATE, CODING_SINCE } from "../../../utils/main.util";
import useCodingSince from "../../../hooks/useCodingSince";
import confetti from "canvas-confetti";
import { balloons } from "balloons-js";

const fireConfetti = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = (e.target as HTMLElement).getBoundingClientRect();

  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  confetti({
    particleCount: 40,
    spread: 100,
    startVelocity: 25,
    origin: { x, y },
    scalar: 0.7,
  });
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

export default function AboutPage() {
  const { age, countdown } = useBirthday(BIRTH_DATE);
  const { total } = useProjectCount();
  const [photos, setPhotos] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxDirection, setLightboxDirection] = useState<1 | -1>(1);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const load = () => {
      setMounted(true);

      const today = new Date();

      const isBirthday =
        today.getDate() === BIRTH_DATE.getDate() &&
        today.getMonth() === BIRTH_DATE.getMonth();

      if (isBirthday) {
        balloons();
      }
    };

    load();
  }, []);

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

  const lightboxPrev = useCallback(() => {
    setLightboxDirection(-1);
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const lightboxNext = useCallback(() => {
    setLightboxDirection(1);
    setCurrent((c) => (c + 1) % photos.length);
  }, [photos.length]);

  const openLightbox = useCallback(() => {
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, lightboxPrev, lightboxNext, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Auto-advance slider (only when lightbox is closed)
  useEffect(() => {
    if (photos.length <= 1 || lightboxOpen) return;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [photos.length, next, lightboxOpen]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -40, opacity: 0 }),
  };

  const lightboxSlideVariants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir * -60, opacity: 0, scale: 0.98 }),
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
                sizes="(max-width: 768px) 100vw, 50vw"
                loading={"eager"}
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
              <span className="text-stone-300 italic">just kidding. </span> But
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
              {(
                [
                  { label: "Fullstack Software Engineer", href: "/skills" },
                  { label: "Dev Ops", href: "/skills" },
                  { label: "Cyber Security", href: "/skills" },
                  { label: "Side-project paglu", href: "/projects" },
                ] as { label: string; href?: string }[]
              ).map((tag) =>
                tag.href ? (
                  <Link
                    key={tag.label}
                    href={tag.href}
                    className="text-[10px] tracking-[0.3em] uppercase border border-stone-800 text-stone-600 px-3 py-1 hover:text-stone-400 hover:border-stone-700 transition-colors duration-200"
                  >
                    {tag.label}
                  </Link>
                ) : (
                  <span
                    key={tag.label}
                    className="text-[10px] tracking-[0.3em] uppercase border border-stone-800 text-stone-600 px-3 py-1"
                  >
                    {tag.label}
                  </span>
                )
              )}
            </div>

            {/* Inline stats */}
            <div className="grid grid-cols-3 border-t border-stone-950 mt-6 pt-6">
              {[
                {
                  num: `${useCodingSince(CODING_SINCE)}+`,
                  label: "Yrs coding",
                  href: "/experience",
                },
                {
                  num: `${total}+`,
                  label: "Projects built",
                  href: "/projects",
                },
                {
                  num: `Age: ${age}`,
                  label: countdown,
                  isAge: true,
                },
              ].map((s, i) => {
                const inner = (
                  <>
                    <span className="block font-cinzel text-2xl text-white">
                      {s.num}
                    </span>
                    <span className="text-[9px] tracking-[0.25em] uppercase text-stone-600">
                      {mounted ? s.label : ""}
                    </span>
                  </>
                );

                return (
                  <div
                    key={s.label}
                    onClick={s.isAge ? fireConfetti : undefined}
                    className={`
                          ${i < 2 ? "border-r border-stone-950 pr-4" : ""}
                          ${i > 0 ? "pl-4" : ""}
                          ${
                            s.isAge
                              ? "cursor-pointer active:scale-95 transition"
                              : ""
                          }
                        `}
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
                Started with{" "}
                <span className="text-stone-300">
                  &quot;how does a program even work&quot;
                </span>
                , ended up building full-stack web application and questioning
                my life choices at 1:43am. No regrets.{" "}
                <span className="text-stone-300">
                  The curiosity never turned off{" "}
                </span>{" "}
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
            <div
              className="relative w-full aspect-video bg-stone-950 border border-stone-800/60 overflow-hidden mb-4 group cursor-zoom-in"
              onClick={openLightbox}
            >
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
                    sizes="(max-width: 768px) 100vw, 2560px"
                    fill
                    loading="eager"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {photos.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute left-0 top-0 h-full px-4 z-10 text-stone-700 hover:text-stone-300 transition-colors duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                  >
                    <ChevronLeft size={18} strokeWidth={1} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
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
        </motion.div>

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* ── Fullscreen Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && photos.length > 0 && (
          <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-20 text-stone-500 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <X size={20} strokeWidth={1} />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full h-full max-w-[95vw] max-h-[90vh] mx-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <AnimatePresence custom={lightboxDirection} mode="popLayout">
                  <motion.div
                    key={`lightbox-${photos[current]}`}
                    custom={lightboxDirection}
                    variants={lightboxSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={photos[current]}
                      alt={`Setup ${current + 1}`}
                      sizes="100vw"
                      fill
                      loading="eager"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Lightbox nav buttons */}
            {photos.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    lightboxPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-stone-500 hover:text-white transition-colors duration-200 cursor-pointer p-2"
                >
                  <ChevronLeft size={28} strokeWidth={1} />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    lightboxNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-stone-500 hover:text-white transition-colors duration-200 cursor-pointer p-2"
                >
                  <ChevronRight size={28} strokeWidth={1} />
                </motion.button>

                {/* Photo counter */}
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] uppercase text-stone-600"
                >
                  {current + 1} / {photos.length}
                </motion.span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
