import Link from "next/link";
import Image from "next/image";
import LinkLive from "./Link-Live";
import LinkGitHub from "./Link-GitHub";
import LinkYouTube from "./Link-YouTube";
import type { ProjectCard } from '../../types/Project.type'

export default function ProjectCard({project,index}: ProjectCard) {
    return (
        <div
            key={project.id}
            className="relative mb-5 break-inside-avoid bg-white rounded-md shadow-xl/10 hover:shadow-xl/20 shadow-white transition-transform hover:scale-105"
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
            {/* Project Index Numbering */}
            <div className="absolute top-1 left-1 text-[8px] text-gray-400">#{index + 1}</div>
            {/* Project Data */}
            <div className="flex flex-col gap-4 p-4 text-black">
                {/* Name */}
                <div className="text-4xl font-semibold tracking-widest">{project.name}</div>
                {/* Brief Description */}
                <div className="text-xs font-extralight tracking-widest">{project.breif_description}</div>
                {/* Links*/}
                <div className="flex flex-col gap-2 justify-center border border-black/10 bg-black/5
                                        rounded-md shadow-lg/10 p-2">
                    {/* Live Link if exists */}
                    {project.links.live.enabled && (
                        <div className="flex text-xs gap-2 items-center">
                            <Image
                                src="/icons/web.svg"
                                width={20}
                                height={20}
                                alt="Web"
                                loading="lazy"
                            />
                            <span className="text-blue-500">/live:</span>
                            <LinkLive url={project.links.live.url} />
                        </div>
                    )}
                    {/* GitHub Link if exists */}
                    {project.links.github.enabled && (
                        <div className="flex text-xs gap-2 items-center">
                            <Image
                                src="/logo/dev-tools/2.github.svg"
                                width={20}
                                height={20}
                                alt="GitHub"
                                loading="lazy"
                            />
                            <span className="text-purple-500">/github:</span>
                            <LinkGitHub url={project.links.github.url} />
                        </div>
                    )}
                    {/* YouTube Link if exists */}
                    {project.links.youtube.enabled && (
                        <div className="flex text-xs gap-2 items-center">
                            <Image
                                src="/icons/youtube.svg"
                                width={20}
                                height={20}
                                alt="YouTube"
                                loading="lazy"
                            />
                            <span className="text-rose-500">/youtube:</span>
                            <LinkYouTube url={project.links.youtube.url} />
                        </div>
                    )}
                </div>
                {/* Tags Mapping */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, idx: number) => (
                        <span
                            key={idx}
                            className="text-black border border-black/10 bg-black/5
                                                    hover:bg-black shadow-lg/10 hover:shadow-lg/20 hover:text-white
                                                    px-2 py-1 rounded-md tracking-widest text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Photo Banner */}
                {project.banner && (
                    <div className="w-full h-[200px] overflow-hidden relative border border-black/10 rounded-md shadow-lg/20 hover:scale-105">
                        <Image
                            src={project.banner}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            alt="Banner"
                            loading="lazy"
                        />
                    </div>
                )}

            </div>

        </div>
    )
}