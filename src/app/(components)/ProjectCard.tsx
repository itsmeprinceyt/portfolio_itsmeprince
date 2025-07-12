"use client";
import { useEffect, useRef, useState } from "react";
import type { ProjectCard } from "../../types/Project.type";
import LinkShow from "./LinkShow";
import FloatingImagePortal from "./FloatingImagePortal";

export default function ProjectCard({ project, index }: ProjectCard) {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    const tagStyle = "text-white border border-stone-500 bg-black shadow-lg shadow-black/20 hover:shadow-black/40 hover:scale-105 transition-all ease-in-out duration-300 px-2 py-1 rounded-md tracking-widest h-[30px] flex items-center";

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
            className="w-full max-w-lg mx-auto flex flex-col bg-white relative mb-5 break-inside-avoid rounded-md shadow-xl/10 hover:shadow-xl/20 shadow-white transition-transform overflow-visible">
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

            {/* Project #Index */}
            <span className="text-[10px] text-gray-600/50 absolute top-1 left-1/2 -translate-x-1/2">Project #{index + 1}</span>

            <div className="flex flex-col justify-between flex-grow p-4 gap-4 text-black">
                {/* Title & description */}
                <div className="flex flex-col gap-2 relative text-center">
                    <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold tracking-widest">{project.name}</h2>
                    <p className="text-[clamp(0.7rem,1.5vw,0.875rem)] font-extralight tracking-widest">{project.description}</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 justify-start items-center">
                    {project.links.live.enabled && (
                        <LinkShow url={project.links.live.url} color="blue" />
                    )}
                    {project.links.github.enabled && (
                        <LinkShow url={project.links.github.url} color="purple" />
                    )}
                    {project.links.youtube.enabled && (
                        <LinkShow url={project.links.youtube.url} color="rose" />
                    )}
                    <LinkShow url={`/projects/${project.id}`} color="orange" />
                </div>

                {/* Tags */}
                <div className="text-base tracking-widest font-bold text-shadow-lg/10 text-shadow-black text-white p-1 bg-black rounded-md shadow-lg/30 shadow-black">
                    🔮 Tech stack:
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-[12px] bg-white p-2 rounded-sm border-gray-600/20 border">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className={tagStyle}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
