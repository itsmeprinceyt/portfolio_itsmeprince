"use client";
import { use, useCallback, useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "../../(components)/PageWrapper";
import {
  bestProjects,
  majorProjects,
  miniProjects,
  playgroundProjects,
} from "../../../utils/data/projects/ProjectData.util";
import ShimmerButton from "../../(components)/Utils/ShimmerButton";
import ShimmerLinkNormal from "../../(components)/Utils/ShimmerLinkNormal";

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

export default function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = use(params);
  const project = getProjectById(projectId);

  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [loadingImages, setLoadingImages] = useState<boolean>(true);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [zoom, setZoom] = useState<number>(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStart = useRef<{
    x: number;
    y: number;
    ox: number;
    oy: number;
  } | null>(null);
  const transformRef = useRef<HTMLDivElement>(null);

  const ZOOM_MIN = 1,
    ZOOM_MAX = 12,
    ZOOM_STEP = 0.5;
  const clamp = (v: number, min: number, max: number) =>
    Math.min(max, Math.max(min, v));

  const applyTransform = useCallback(
    (z: number, o: { x: number; y: number }) => {
      const el = transformRef.current;
      if (!el) return;
      el.style.transform = `translate(${o.x}px, ${o.y}px) scale(${z})`;
      el.style.transformOrigin = "center center";
    },
    []
  );

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `/api/getProjectImages?projectId=${project?.id}`
        );
        const data = await res.json();
        setImages(data.images);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingImages(false);
      }
    };
    if (project?.id) fetchImages();
  }, [project?.id]);

  useEffect(() => {
    if (!fullscreen) return;
    applyTransform(zoom, offset);
  }, [fullscreen, zoom, offset, applyTransform]);

  if (!project) return notFound();

  const nextImage = () => setIndex((p) => (p + 1) % images.length);
  const prevImage = () =>
    setIndex((p) => (p - 1 + images.length) % images.length);

  const zoomIn = () =>
    setZoom((z) => {
      const nz = clamp(z + ZOOM_STEP, ZOOM_MIN, ZOOM_MAX);
      applyTransform(nz, offset);
      return nz;
    });
  const zoomOut = () =>
    setZoom((z) => {
      const nz = clamp(z - ZOOM_STEP, ZOOM_MIN, ZOOM_MAX);
      applyTransform(nz, offset);
      return nz;
    });
  const resetZoom = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    applyTransform(1, { x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const nz = clamp(
      zoom + (e.deltaY > 0 ? -1 : 1) * ZOOM_STEP,
      ZOOM_MIN,
      ZOOM_MAX
    );
    setZoom(nz);
    applyTransform(nz, offset);
  };
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      ox: offset.x,
      oy: offset.y,
    };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart.current) return;
    const { x, y, ox, oy } = dragStart.current;
    const no = { x: ox + (e.clientX - x), y: oy + (e.clientY - y) };
    setOffset(no);
    applyTransform(zoom, no);
  };
  const onMouseUp = () => {
    setIsDragging(false);
    dragStart.current = null;
  };
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    dragStart.current = {
      x: t.clientX,
      y: t.clientY,
      ox: offset.x,
      oy: offset.y,
    };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragStart.current || e.touches.length !== 1) return;
    const t = e.touches[0];
    const { x, y, ox, oy } = dragStart.current;
    const no = { x: ox + (t.clientX - x), y: oy + (t.clientY - y) };
    setOffset(no);
    applyTransform(zoom, no);
  };
  const onTouchEnd = () => {
    dragStart.current = null;
  };

  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-3xl mx-auto select-text">
        {/* ── Header ── */}
        <motion.div {...fadeIn(0)} className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-6">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-[9px] tracking-[0.35em] uppercase text-stone-400 hover:text-stone-400 transition-colors duration-200 mt-1"
            >
              <ArrowLeft size={12} strokeWidth={1} />
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
            <p className="text-sm text-stone-600 leading-loose">
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
                <span className="text-[12px] tracking-[0.3em] uppercase text-stone-400">
                  {index + 1} / {images.length}
                </span>
              </div>

              <button
                onClick={() => setFullscreen(true)}
                className="block w-full overflow-hidden cursor-pointer"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={images[index]}
                    alt={`${project.name} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-contain object-top"
                    priority
                    draggable={false}
                  />
                </div>
              </button>

              {images.length > 1 && (
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={prevImage}
                    className="flex flex-1 items-center justify-center gap-1 border border-stone-950 hover:border-stone-900 px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-400 transition-all duration-200 cursor-pointer"
                  >
                    <ChevronLeft size={16} className="mb-0.5" /> Prev
                  </button>
                  <button
                    onClick={nextImage}
                    className="flex flex-1 items-center justify-center gap-1 border border-stone-950 hover:border-stone-900 px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-400 transition-all duration-200 cursor-pointer"
                  >
                    Next <ChevronRight size={16} className="mb-0.5" />
                  </button>
                </div>
              )}
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

          <div className="flex flex-wrap gap-2">
            {project.links.live.enabled && (
              <ShimmerLinkNormal href={project.links.live.url}>
                Live
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
              </ShimmerLinkNormal>
            )}
            {project.links.github.enabled && (
              <ShimmerLinkNormal href={project.links.github.url}>
                GitHub
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform duration-300"
                />
              </ShimmerLinkNormal>
            )}
            {project.links.youtube.enabled && (
              <ShimmerLinkNormal href={project.links.youtube.url}>
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
          <p className="text-sm text-stone-600 leading-loose">
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
                        <p className="text-sm text-stone-600 leading-relaxed">
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
                className="text-[10px] tracking-[0.2em] uppercase text-stone-600 border border-stone-900 px-3 py-1.5 hover:border-stone-700 hover:text-stone-300 transition-colors duration-200"
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
                    <span className="text-[10px] text-stone-600  mt-0.5 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-stone-600 hover:text-stone-400">
                      {dep}
                    </p>
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
                    <span className="text-stone-600 shrink-0 text-xs mt-0.5">
                      &mdash;
                    </span>
                    <p className="text-sm text-stone-600 leading-loose">{ex}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* ── Fullscreen ── */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6">
          <div className="absolute top-6 right-6">
            <ShimmerButton
              onClick={() => {
                setFullscreen(false);
                resetZoom();
              }}
            >
              Close
            </ShimmerButton>
          </div>
          <div
            className={`relative w-full max-w-6xl aspect-video max-h-[75vh] overflow-hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onWheel={handleWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={transformRef}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src={images[index]}
                alt={`${project.name} fullscreen`}
                fill
                sizes="100vw"
                className="object-contain w-full h-full select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="flex items-center gap-1 border border-stone-950 hover:border-stone-900 px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-400 transition-all duration-200 cursor-pointer"
                >
                  <ChevronLeft size={16} className="mb-0.5" /> Prev
                </button>
                <button
                  onClick={nextImage}
                  className="flex items-center gap-1 border border-stone-950 hover:border-stone-900 px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-400 transition-all duration-200 cursor-pointer"
                >
                  Next <ChevronRight size={16} className="mb-0.5" />
                </button>
              </>
            )}
            <button
              onClick={zoomOut}
              className="border border-stone-950 hover:border-stone-900 px-4 py-2.5 text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-400 transition-all duration-200 cursor-pointer"
            >
              <Minus size={16} />
            </button>
            <button
              onClick={resetZoom}
              className="border border-stone-950 hover:border-stone-900 px-4 py-2.5 text-[12px] tracking-[0.2em] uppercase text-stone-400 hover:text-stone-400 transition-all duration-200 cursor-pointer"
            >
              {zoom.toFixed(1)}×
            </button>
            <button
              onClick={zoomIn}
              className="border border-stone-950 hover:border-stone-900 px-4 py-2.5 text-[10px] tracking-[0.3em] uppercase text-stone-400 hover:text-stone-400 transition-all duration-200 cursor-pointer"
            >
              <Plus size={16} />
            </button>
          </div>

          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-600">
            {index + 1} / {images.length}
          </span>
        </div>
      )}
    </PageWrapper>
  );
}
