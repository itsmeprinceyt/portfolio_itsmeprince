"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ProjectCard } from "../../types/Project.type";
import LinkShow from "./LinkShow";
import FloatingImagePortal from "./FloatingImagePortal";
import BannerImage from "./ProjectBannerImage";

export default function ProjectCard({ project, index }: ProjectCard) {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const bounds = cardRef.current?.getBoundingClientRect();
        if (!bounds) return;
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top + 80;
        mousePos.current = { x, y };
    };

    useEffect(() => {
        let frameId: number;

        const followCursor = () => {
            if (imageRef.current) {
                imageRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
            }
            frameId = requestAnimationFrame(followCursor);
        };
        if (isHovering) frameId = requestAnimationFrame(followCursor);
        return () => cancelAnimationFrame(frameId);
    }, [isHovering]);

    return (
        <div
            id={project.id}
            ref={cardRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            className="w-full max-w-lg border-1 border-white bg-white relative break-inside-avoid rounded-md shadow-xl/10 hover:shadow-xl/20 shadow-white transition-transform overflow-visible">
            {/* Hover Card */}
            {project.banner &&
                <FloatingImagePortal
                    src={project.banner}
                    visible={isHovering}
                    getCursorPos={() => {
                        const bounds = cardRef.current?.getBoundingClientRect();
                        return {
                            x: mousePos.current.x + (bounds?.left ?? 0),
                            y: mousePos.current.y + (bounds?.top ?? 0),
                        };
                    }}
                />
            }

            {/* Image */}
            <BannerImage src={project.banner} alt={`${project.name} banner`}/>

            <div className="relative flex flex-col justify-between flex-grow p-4 gap-4 text-black">
                {/* Project #Index */}
                <span className="text-[8px] text-gray-600/50 absolute left-4 top-1">Project #{index + 1}</span>

                {/* Title & description */}
                <div className="flex flex-col items-start gap-2 relative">
                    <h2 className="text-lg font-semibold tracking-widest">
                        <Link href={`/projects/${project.id}`}>{project.name}</Link>
                        <Link href={`/projects/${project.id}`} className="absolute h-5 w-5 z-1 bg-white p-1 rounded-md  ">
                            <Image
                                src={"/icons/open.png"}
                                height={12}
                                width={12}
                                alt="open"
                            />
                        </Link>
                    </h2>

                    <p
                        className="text-[clamp(0.7rem,1.5vw,0.875rem)] font-extralight tracking-widest line-clamp-2 min-h-[2.5em] text-stone-700/70"
                    >
                        {project.description}
                    </p>

                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 justify-start items-center">
                    <LinkShow url={project.links.live.url} color="blue" disabled={!project.links.live.enabled} />
                    <LinkShow url={project.links.github.url} color="purple" disabled={!project.links.github.enabled} />
                    <LinkShow url={project.links.youtube.url} color="rose" disabled={!project.links.youtube.enabled} />
                    <LinkShow url={`/projects/${project.id}`} color="orange" />
                </div>
            </div>
        </div>
    );
}
