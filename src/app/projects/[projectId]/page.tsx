"use client";
import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from "../../(components)/PageWrapper";
import MainWindow from '../../(components)/MainWindow';
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from '../../../utility/ProjectData';

const getProjectById = (id: string) => {
    const allProjects = [...bestProjects, ...majorProjects, ...miniProjects, ...playgroundProjects];
    return allProjects.find(project => project.id === id);
};

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
    const [images, setImages] = useState<string[]>([]);
    const { projectId } = use(params);
    const project = getProjectById(projectId);

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
    }, [project?.id]);

    if (!project) {
        return notFound();
    }

    return (
        <PageWrapper>
            <MainWindow>

                <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20
                shadow-neutral-800 border border-neutral-700 rounded-md m-5 p-12 flex flex-col gap-10
                text-white tracking-widest max-w-[1000px]">

                    <div className="flex flex-col gap-6">

                        <div className="text-3xl tracking-widest max-[400px]:text-2xl font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">{project.name}</div>
                        <div className="text-xs font-extralight tracking-widest">{project.full_description}</div>

                        <div className="flex max-[700px]:flex-col items-start justify-start gap-2">

                            <div className="text-md tracking-widest font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Tech Used:</div>

                            <div className="grid gap-2 max-[400px]:grid-cols-1 max-[600px]:grid-cols-2 grid-cols-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-black border border-black/10 bg-white
                                    shadow-white shadow-lg/10 hover:shadow-lg/20 hover:scale-105
                                    px-2 py-1 rounded-md tracking-widest text-xs">{tag}</span>
                                ))}
                            </div>

                        </div>



                        {/* Links */}
                        <div className=" flex flex-col gap-2 justify-center border border-black/10
                            bg-white/5 rounded-md shadow-lg/10 p-2">
                            {/* Live Link if exists */}
                            {project.links.live.enabled && (
                                <div className="flex text-xs gap-2 items-center">
                                    <Image
                                        className="invert"
                                        src="/icons/web.svg"
                                        width={20}
                                        height={20}
                                        alt="Web"
                                        loading="lazy"
                                    />
                                    <span className="text-blue-500">/live:</span>
                                    <Link href={project.links.live.url} target="_blank">
                                        <span className="inline-block max-[550px]:max-w-[14rem] max-[400px]:max-w-[5rem]  max-[470px]:max-w-[10rem] max-[500px]:max-w-[13rem] max-[700px]:max-w-[18rem] max-w-[25rem] overflow-hidden whitespace-nowrap text-ellipsis hover:text-blue-500">
                                            {project.links.live.url}
                                        </span>
                                    </Link>
                                </div>
                            )}
                            {/* GitHub Link if exists */}
                            {project.links.github.enabled && (
                                <div className="flex text-xs gap-2 items-center">
                                    <Image
                                        className="invert"
                                        src="/logo/dev-tools/2.github.svg"
                                        width={20}
                                        height={20}
                                        alt="GitHub"
                                        loading="lazy"
                                    />
                                    <span className="text-purple-500">/github:</span>
                                    <Link href={project.links.github.url} target="_blank">
                                        <span className="inline-block max-[550px]:max-w-[14rem] max-[400px]:max-w-[5rem] max-[470px]:max-w-[10rem] max-[500px]:max-w-[13rem] max-[700px]:max-w-[18rem] max-w-[25rem] overflow-hidden whitespace-nowrap text-ellipsis hover:text-purple-500">
                                            {project.links.github.url}
                                        </span>
                                    </Link>
                                </div>
                            )}
                            {/* YouTube Link if exists */}
                            {project.links.youtube.enabled && (
                                <div className="flex text-xs gap-2 items-center">
                                    <Image
                                        className="invert"
                                        src="/icons/youtube.svg"
                                        width={20}
                                        height={20}
                                        alt="YouTube"
                                        loading="lazy"
                                    />
                                    <span className="text-rose-500">/youtube:</span>
                                    <Link href={project.links.youtube.url} target="_blank">
                                        <span className="inline-block max-[550px]:max-w-[14rem] max-[400px]:max-w-[5rem]  max-[470px]:max-w-[10rem] max-[500px]:max-w-[13rem] max-[700px]:max-w-[18rem] max-w-[25rem] overflow-hidden whitespace-nowrap text-ellipsis hover:text-rose-500">
                                            {project.links.youtube.url}
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Image Gallery */}
                        {images.length > 0 && (
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {images.map((src, index) => (
                                    <Image
                                        key={index}
                                        src={src}
                                        alt={`${project.name} screenshot ${index + 1}`}
                                        width={400}
                                        height={300}
                                        className="rounded shadow-lg object-cover"
                                        priority={index < 2}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                </div>

            </MainWindow>
        </PageWrapper>
    );
}
