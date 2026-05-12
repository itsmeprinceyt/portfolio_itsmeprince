"use client";
import { useCallback, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../../(components)/PageWrapper";
import {
  bestProjects,
  majorProjects,
  miniProjects,
  playgroundProjects,
} from "../../../utils/data/projects/ProjectData.util";
import ShimmerLinkNormal from "../../(components)/Utils/ShimmerLinkNormal";
import axios from "axios";

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

const getProjectById = (id: string) => {
  const all = [
    ...bestProjects,
    ...majorProjects,
    ...miniProjects,
    ...playgroundProjects,
  ];
  return all.find((p) => p.id === id);
};

export default function ProjectSinglePage({
  projectId,
}: {
  projectId: string;
}) {
  const project = getProjectById(projectId);

  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [loadingImages, setLoadingImages] = useState<boolean>(true);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [lightboxDirection, setLightboxDirection] = useState<1 | -1>(1);
  const [sliderDirection, setSliderDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get(
          `/api/getProjectImages?projectId=${project?.id}`
        );
        setImages(data.images ?? []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingImages(false);
      }
    };

    if (project?.id) {
      fetchImages();
    }
  }, [project?.id]);

  const nextImage = useCallback(() => {
    setSliderDirection(1);
    setIndex((p) => (p + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSliderDirection(-1);
    setIndex((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  const lightboxNext = useCallback(() => {
    setLightboxDirection(1);
    setIndex((p) => (p + 1) % images.length);
  }, [images.length]);

  const lightboxPrev = useCallback(() => {
    setLightboxDirection(-1);
    setIndex((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  const openLightbox = useCallback(() => setFullscreen(true), []);
  const closeLightbox = useCallback(() => setFullscreen(false), []);

  useEffect(() => {
    if (!fullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreen, lightboxPrev, lightboxNext, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  if (!project) return notFound();

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
      <div className="text-white min-h-screen px-6 py-24 max-w-3xl mx-auto select-text">
        {/* ── Header ── */}
        <motion.div {...fadeIn(0)} className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-6">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-[9px] tracking-[0.35em] uppercase text-stone-400 hover:text-stone-400 transition-colors duration-200"
            >
              <ChevronLeft
                strokeWidth={2}
                size={12}
                className="group-hover:-translate-x-0.5 transition-transform duration-300"
              />
              Back to projects
            </Link>
            {project.date && (
              <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400">
                Last updated {project.date}
              </span>
            )}
          </div>

          <div className="border-l border-stone-950 pl-6">
            <h1 className="text-4xl md:text-5xl font-cinzel tracking-wide uppercase leading-none mb-4">
              {project.name}
            </h1>
            <p className="text-sm text-stone-400 leading-loose">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* ── Image Slider ── */}
        {loadingImages ? (
          <motion.div
            {...fadeUp(0.1)}
            className="mb-16 flex items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 animate-pulse">
              Loading screenshots
            </span>
          </motion.div>
        ) : (
          images.length > 0 && (
            <motion.div {...fadeUp(0.1)} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
                  Screenshots
                </p>
                <div className="flex-1 h-px bg-stone-950" />
                {images.length > 1 && (
                  <span className="text-[12px] tracking-[0.3em] uppercase text-stone-400">
                    {index + 1} / {images.length}
                  </span>
                )}
              </div>

              {/* Slider */}
              <div
                className="relative w-full aspect-video bg-stone-950 border border-stone-800/60 overflow-hidden mb-2 group cursor-zoom-in"
                onClick={openLightbox}
              >
                <AnimatePresence custom={sliderDirection} mode="popLayout">
                  <motion.div
                    key={images[index]}
                    custom={sliderDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[index]}
                      alt={`${project.name} screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-contain object-top"
                      priority
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-0 top-0 h-full px-4 z-10 text-stone-700 hover:text-stone-300 transition-colors duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                    >
                      <ChevronLeft size={18} strokeWidth={1} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-0 top-0 h-full px-4 z-10 text-stone-700 hover:text-stone-300 transition-colors duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                    >
                      <ChevronRight size={18} strokeWidth={1} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )
        )}

        {/* ── Links ── */}
        <motion.div {...fadeUp(0.15)} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
              Links
            </p>
            <div className="flex-1 h-px bg-stone-950" />
          </div>

          <div className="flex flex-wrap gap-5">
            {project.links.live.enabled && (
              <ShimmerLinkNormal external={true} href={project.links.live.url}>
                Demo / Live
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
              </ShimmerLinkNormal>
            )}
            {project.links.github.enabled && (
              <ShimmerLinkNormal
                external={true}
                href={project.links.github.url}
              >
                GitHub
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
              </ShimmerLinkNormal>
            )}
            {project.links.youtube.enabled && (
              <ShimmerLinkNormal
                external={true}
                href={project.links.youtube.url}
              >
                YouTube
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
              </ShimmerLinkNormal>
            )}
            {!project.links.live.enabled &&
              !project.links.github.enabled &&
              !project.links.youtube.enabled && (
                <p className="text-[11px] tracking-[0.2em] uppercase text-stone-700 italic">
                  No links available
                </p>
              )}
          </div>
        </motion.div>

        {/* ── About ── */}
        <motion.div {...fadeUp(0.2)} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
              About
            </p>
            <div className="flex-1 h-px bg-stone-950" />
          </div>
          <p className="text-sm text-stone-400 leading-loose">
            {project.full_description.intro}
          </p>
        </motion.div>

        {/* ── Features ── */}
        {project.full_description.features &&
          project.full_description.features.length > 0 && (
            <motion.div {...fadeUp(0.25)} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
                  Features
                </p>
                <div className="flex-1 h-px bg-stone-800/40" />
              </div>

              <div className="flex flex-col gap-3">
                {project.full_description.features.map((feature, i) => (
                  <div
                    key={i}
                    className="border border-stone-950 hover:border-stone-800 p-4 transition-colors duration-150"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[10px] text-stone-400 mt-0.5 shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-lg text-stone-300 leading-snug font-medium">
                          {feature.title}
                        </p>
                        <p className="text-sm text-stone-500 leading-relaxed">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        {/* ── Tech Stack ── */}
        <motion.div {...fadeUp(0.3)} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
              Tech Stack
            </p>
            <div className="flex-1 h-px bg-stone-950" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] tracking-[0.2em] uppercase text-stone-400 border border-stone-900 px-3 py-1.5 hover:border-stone-700 hover:text-stone-300 transition-colors duration-200"
              >
                {tag.replace("/", "")}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Dependencies ── */}
        {project.full_description.dependencies &&
          project.full_description.dependencies.length > 0 && (
            <motion.div {...fadeUp(0.35)} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
                  Dependencies
                </p>
                <div className="flex-1 h-px bg-stone-800/40" />
              </div>

              <div className="flex flex-col gap-2">
                {project.full_description.dependencies.map((dep, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-l border-stone-900 pl-4 py-1"
                  >
                    <span className="text-[10px] text-stone-400 mt-0.5 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-stone-400">{dep}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        {/* ── Use Cases ── */}
        {project.full_description.usage_examples &&
          project.full_description.usage_examples.length > 0 && (
            <motion.div {...fadeUp(0.4)} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[10px] tracking-[0.5em] uppercase text-stone-400 shrink-0">
                  Use Cases
                </p>
                <div className="flex-1 h-px bg-stone-950" />
              </div>

              <div className="space-y-3">
                {project.full_description.usage_examples.map((ex, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-stone-400 shrink-0 text-xs mt-0.5">
                      &mdash;
                    </span>
                    <p className="text-sm text-stone-400 leading-loose">{ex}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* ── Fullscreen Lightbox ── */}
      <AnimatePresence>
        {fullscreen && images.length > 0 && (
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
                    key={`lightbox-${images[index]}`}
                    custom={lightboxDirection}
                    variants={lightboxSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[index]}
                      alt={`${project.name} fullscreen ${index + 1}`}
                      fill
                      sizes="100vw"
                      loading="eager"
                      className="object-contain"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Lightbox nav buttons */}
            {images.length > 1 && (
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
                  {index + 1} / {images.length}
                </motion.span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
