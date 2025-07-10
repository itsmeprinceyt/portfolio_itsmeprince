import Link from "next/link";
import Image from "next/image";
import type { ProjectCard } from '../../types/Project.type';
import LinkShow from "./LinkShow";

export default function ProjectCard({ project, index }: ProjectCard) {
    const baseURLcss: string = "flex text-xs items-center gap-2 w-full";

    return (
        <div
            key={project.id}
            className="bg-white relative mb-5 break-inside-avoid rounded-md shadow-xl/10 hover:shadow-xl/20 shadow-white transition-transform hover:scale-105 w-full flex flex-col"
        >
            {/* Open project */}
            <Link href={`/projects/${project.id}`}>
                <Image
                    src="/icons/open.png"
                    width={10}
                    height={10}
                    alt="View"
                    loading="lazy"
                    className="absolute top-2 right-2 transition-transform hover:scale-125"
                />
            </Link>

            {/* Project Index */}
            <p className="absolute top-1 left-1 text-[10px] text-gray-600/50">#{index+1}</p>
            {/* Content area */}
            <div className="flex flex-col justify-between flex-grow p-4 text-black gap-2">
                {/* Top content */}
                <div className="flex flex-col gap-5">
                    <div className="text-4xl font-semibold tracking-widest">{project.name}</div>
                    <div className="text-xs font-extralight tracking-widest">{project.description}</div>

                    {/* Links */}
                    <div className="flex flex-col gap-3 justify-center border border-black/10 bg-black/5 rounded-md shadow-lg/10 p-2">
                        {project.links.live.enabled && (
                            <div className={`${baseURLcss}`}>
                                <Image src="/icons/web.svg" width={20} height={20} alt="Web" loading="lazy" />
                                <span className="text-blue-400 shrink-0 min-w-[67px]">/live:</span>
                                <LinkShow url={project.links.live.url} color="blue" />
                            </div>
                        )}
                        {project.links.github.enabled && (
                            <div className={`${baseURLcss}`}>
                                <Image src="/logo/dev-tools/2.github.svg" width={20} height={20} alt="GitHub" loading="lazy" />
                                <span className="text-purple-400 shrink-0 min-w-[67px]">/github:</span>
                                <LinkShow url={project.links.github.url} color="purple" />
                            </div>
                        )}
                        {project.links.youtube.enabled && (
                            <div className={`${baseURLcss}`}>
                                <Image src="/icons/youtube.svg" width={20} height={20} alt="YouTube" loading="lazy" />
                                <span className="text-rose-400 shrink-0 min-w-[67px]">/youtube:</span>
                                <LinkShow url={project.links.youtube.url} color="rose" />
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-5">
                        {project.tags.map((tag: string, idx: number) => (
                            <span
                                key={idx}
                                className="text-black border border-black/10 bg-black/5 hover:bg-black shadow-lg/10 hover:shadow-lg/20 hover:text-white px-2 py-1 rounded-md tracking-widest text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Banner image - takes all remaining space */}
                {project.banner && (
                    <div className="w-full min-h-[200px] flex-grow overflow-hidden relative border border-black/10 rounded-md shadow-lg/20 hover:scale-105 transition-transform mt-4">
                        <Image
                            src={project.banner}
                            fill
                            style={{ objectFit: "cover", objectPosition: "top" }}
                            alt="Banner"
                            loading="lazy"
                        />
                    </div>
                )}
            </div>
        </div>

    );
}
