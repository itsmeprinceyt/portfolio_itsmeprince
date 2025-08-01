"use client";
import { use, useCallback, useEffect, useRef, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from "../../(components)/PageWrapper";
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from '../../../utility/ProjectData';
import LinkShow from '../../(components)/LinkShow';
import devSkills from '../../../utility/devSkills';
import Divider from '../../(components)/Components/Divider';
import { SpinnerWhite } from '../../(components)/Components/Spinner';


const getProjectById = (id: string) => {
    const allProjects = [...bestProjects, ...majorProjects, ...miniProjects, ...playgroundProjects];
    return allProjects.find(project => project.id === id);
};

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
    const { projectId } = use(params);
    const project = getProjectById(projectId);
    const [images, setImages] = useState<string[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [fullscreen, setFullscreen] = useState<boolean>(false);
    const [loading, setLoader] = useState<boolean>(true);
    const [zoom, setZoom] = useState<number>(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
    const transformRef = useRef<HTMLDivElement>(null);

    const buttonClass: string = "bg-gradient-to-r from-neutral-900 to-neutral-950 px-6 py-3 rounded-lg w-[100px] text-stone-300 border border-stone-600/40 hover:border-stone-700 shadow-xl shadow-stone-700/10 hover:scale-105 hover:shadow-stone-700/20 text-xs";
    const buttonClass2: string = "bg-gradient-to-r from-neutral-900 to-neutral-950 px-6 py-3 rounded-lg  text-stone-300 border border-stone-600/40 hover:border-stone-700 shadow-xl shadow-stone-700/10 hover:scale-105 hover:shadow-stone-700/20 text-xs";
    const baseHeadingBorder: string = "border border-white/10 pb-2 rounded-lg";
    const baseHeading: string = "px-2 py-0.5 text-base tracking-widest font-bold text-shadow-lg/10 text-shadow-black text-black hover:text-shadow-lg/20 bg-white rounded-tr-md rounded-tl-md mb-2 shadow-md/20 shadow-white";

    const ZOOM_MIN: number = 1;
    const ZOOM_MAX: number = 12;
    const ZOOM_STEP: number = 0.5;

    const applyTransform = useCallback((z: number, o: { x: number; y: number }) => {
        const el = transformRef.current;
        if (!el) return;
        el.style.transform = `translate(${o.x}px, ${o.y}px) scale(${z})`;
        el.style.transformOrigin = "center center";
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch(`/api/getProjectImages?projectId=${project?.id}`);
                const data = await res.json();
                setImages(data.images);
            } catch (error) {
                console.error('Failed to fetch images:', error);
            }
        };
        fetchImages();
        setLoader(false);
    }, [project?.id]);

    useEffect(() => {
        if (!fullscreen) return;
        applyTransform(zoom, offset);
    }, [fullscreen, zoom, offset, applyTransform]);

    if (!project) return notFound();

    const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

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
        const nz = 1;
        const no = { x: 0, y: 0 };
        setZoom(nz);
        setOffset(no);
        applyTransform(nz, no);
    };

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();
        const dir = e.deltaY > 0 ? -1 : 1;
        const nz = clamp(zoom + dir * ZOOM_STEP, ZOOM_MIN, ZOOM_MAX);
        setZoom(nz);
        applyTransform(nz, offset);
    };

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length !== 1) return;
        const t = e.touches[0];
        dragStart.current = { x: t.clientX, y: t.clientY, ox: offset.x, oy: offset.y };
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
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
            <div className="p-5 text-stone-300 tracking-widest">
                <div className="flex flex-col max-w-4xl space-y-5">
                    {/* Project Name */}
                    <h1 className="text-2xl sm:text-3xl tracking-widest text-center text-glow-white text-stone-300">
                        {project.name}
                    </h1>
                    <Divider />

                    {/* Image Slider */}
                    {loading ? (
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <div className="flex gap-2 items-center justify-center">
                                <SpinnerWhite />
                                <span className="w-1/2 md:w-full text-center text-xs">
                                    Loading screenshots if available ...
                                </span>
                            </div>
                            <Divider />
                        </div>
                    ) : images.length === 0 ? (
                        <></>
                    ) : (
                        <div className="flex flex-col items-center gap-5">
                            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md">
                                <button onClick={() => setFullscreen(true)} className="w-full h-full">
                                    <Image
                                        src={images[index]}
                                        alt={`${project.name} screenshot`}
                                        fill
                                        className="object-contain"
                                        priority
                                        draggable={false}
                                    />
                                </button>
                            </div>

                            {/* Navigation Buttons Slider */}
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                <button onClick={prevImage} className={buttonClass}>Previous</button>
                                <button onClick={nextImage} className={buttonClass}>Next</button>
                            </div>

                            <div className="text-xs text-stone-300">
                                {index + 1} / {images.length}
                            </div>
                            <Divider />
                        </div>
                    )}

                    <div className="flex flex-col gap-6 text-xs font-extralight tracking-widest">

                        {/* Description */}
                        {project.full_description.intro && <p className="text-start">{project.full_description.intro}</p>}

                        {/* Features */}
                        {project.full_description.features && project.full_description.features?.length > 0 && (
                            <div className={baseHeadingBorder}>
                                <div className={baseHeading}>🔥 Features:</div>
                                <ul className="list-decimal pl-8 space-y-3">
                                    {project.full_description.features.map((f, i) => (
                                        <li key={i}>
                                            <span className="text-orange-400 font-semibold">
                                                <strong>{f.title}:</strong>
                                            </span>
                                            <br />
                                            {f.detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        <div className={baseHeadingBorder}>
                            <div className={baseHeading}>🔮 Tech stack:</div>
                            <ul className="list-disc pl-8 space-y-3">
                                {project.tags.map((tag, i) => {
                                    const matched = devSkills.find((s) => s.name === tag);
                                    return (
                                        <li key={i}>
                                            <Link href={`/skills/${matched?.fullName || tag}`}>
                                                <span className="text-purple-400 font-semibold">
                                                    {matched?.fullName || tag}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Dependencies */}
                        {project.full_description.dependencies && project.full_description.dependencies?.length > 0 && (
                            <div className={baseHeadingBorder}>
                                <div className={baseHeading}>🔑 Dependencies:</div>
                                <ul className="list-disc pl-8 space-y-3">
                                    {project.full_description.dependencies.map((dep, i) => (
                                        <li key={i}>{dep}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Use Case */}
                        {project.full_description.usage_examples && project.full_description.usage_examples?.length > 0 && (
                            <div className={baseHeadingBorder}>
                                <div className={baseHeading}>🤔 Use Cases:</div>
                                <ul className="list-disc pl-8 space-y-3">
                                    {project.full_description.usage_examples.map((example, i) => (
                                        <li key={i}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {project.date && (
                        <div className="text-white/20 text-center text-xs"> Last Updated: {project.date}
                        </div>
                    )}

                    <Divider />
                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <LinkShow url={project.links.live.url} color="blue" disabled={!project.links.live.enabled} />
                        <LinkShow url={project.links.github.url} color="purple" disabled={!project.links.github.enabled} />
                        <LinkShow url={project.links.youtube.url} color="rose" disabled={!project.links.youtube.enabled} />
                    </div>
                </div>
            </div>

            {/* Fullscreen Mode */}
            {fullscreen && (
                <div className="fixed inset-0 z-50 bg-black/95 bg-opacity-90 flex flex-col items-center justify-center space-y-5">
                    <button
                        onClick={() => {
                            setFullscreen(false);
                            resetZoom();
                        }}
                        className="absolute top-5 right-5 text-white text-3xl font-bold z-10 hover:scale-105 transition-transform"
                    >
                        ✕
                    </button>

                    <div
                        className={`relative w-full max-w-6xl aspect-[16/9] max-h-[80vh] overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                        onWheel={handleWheel}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseUp}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div ref={transformRef} className="absolute inset-0 will-change-transform">
                            <Image
                                src={images[index]}
                                alt={`${project.name} fullscreen`}
                                width={3000}
                                height={2000}
                                className="object-contain w-full h-full rounded-md select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                    </div>

                    <Divider />

                    {/* Prev / Next */}
                    <div className="flex flex-wrap items-center justify-center gap-2 z-1">
                        <button onClick={prevImage} className={buttonClass}>Previous</button>
                        <button onClick={nextImage} className={buttonClass}>Next</button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 z-1">
                        <button onClick={zoomOut} className={buttonClass2}>-</button>
                        <button onClick={resetZoom} className={buttonClass2}>Reset [{zoom.toFixed(1)}x]</button>
                        <button onClick={zoomIn} className={buttonClass2}>+</button>
                    </div>

                    <div className="text-xs text-stone-300 z-1">
                        {index + 1} / {images.length}
                    </div>
                </div>
            )}

        </PageWrapper>

    );
}
