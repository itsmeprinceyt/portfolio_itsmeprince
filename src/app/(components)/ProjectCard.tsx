import Image from "next/image";
import type { ProjectCard } from "../../types/Project.type";
import LinkShow from "./LinkShow";

export default function ProjectCard({ project, index }: ProjectCard) {
    const tagStyle: string = "text-white border border-stone-500 bg-black shadow-lg shadow-black/20 hover:shadow-black/40 hover:scale-105 transition-all ease-in-out duration-300 px-2 py-1 rounded-md tracking-widest h-[30px]";

    return (
        <div key={project.id} className="w-full max-w-lg mx-auto flex flex-col bg-white relative mb-5 break-inside-avoid rounded-md shadow-xl/10 hover:shadow-xl/20 shadow-white transition-transform">
            {/* Project #Index */}
            <span className="text-[10px] text-gray-600/50 absolute top-1 left-1/2 -translate-x-1/2">
                Project #{index + 1}
            </span>

            <div className="flex flex-col justify-between flex-grow p-4 gap-4 text-black">

                {/* Title & description */}
                <div className="flex flex-col gap-2 relative text-center">
                    <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold tracking-widest">
                        {project.name}
                    </h2>
                    <p className="text-[clamp(0.7rem,1.5vw,0.875rem)] font-extralight tracking-widest">
                        {project.description}
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 justify-start items-center ">
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
                <div className="text-base tracking-widest font-bold text-shadow-lg/10 text-shadow-black text-white p-1 bg-black rounded-md shadow-lg/30 shadow-black">🔮 Tech stack:
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-[12px] bg-white p-2 rounded-sm border-gray-600/20 border">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className={tagStyle}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Banner image (if available) */}
                {project.banner && (
                    <div className="text-base tracking-widest font-bold text-shadow-lg/10 text-shadow-black text-white p-1 bg-black rounded-md shadow-lg/30 shadow-black hover:scale-105">🖼️ Sneak Peak:
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm">
                            <Image
                                src={project.banner}
                                alt="Banner"
                                fill
                                loading="lazy"
                                style={{ objectFit: "cover", objectPosition: "top" }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
