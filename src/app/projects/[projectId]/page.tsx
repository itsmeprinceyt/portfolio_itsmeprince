"use client";
import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PageWrapper from "../../(components)/PageWrapper";
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from '../../../utility/ProjectData';

const getProjectById = (id: string) => {
    const allProjects = [...bestProjects, ...majorProjects, ...miniProjects, ...playgroundProjects];
    return allProjects.find(project => project.id === id);
};

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
    const [images, setImages] = useState<string[]>([]);
    const { projectId } = use(params); // 👈 unwrap the params Promise
    const project = getProjectById(projectId);
    console.log(params);
    console.log(project?.id);

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
        console.log(project?.id);
        fetchImages();
    }, [project?.id]);

    if (!project) {
        return notFound();
    }



    return (
        <PageWrapper>
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 text-white">
                <h1 className="text-5xl font-bold mb-8 animate-pulse">Projects</h1>

                <div className="p-8">
                    <h2 className="text-3xl font-bold">{project.name}</h2>
                    <p className="mt-4">{project.full_description}</p>

                    <div className="flex gap-2 mt-4 flex-wrap justify-center">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-gray-200 text-black rounded px-2 py-1 text-sm">{tag}</span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 mt-6 justify-center">
                        {project.links.live.enabled && (
                            <a href={project.links.live.url} target="_blank" rel="noopener noreferrer">
                                Live
                            </a>
                        )}
                        {project.links.github.enabled && (
                            <a href={project.links.github.url} target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        )}
                        {project.links.youtube.enabled && (
                            <a href={project.links.youtube.url} target="_blank" rel="noopener noreferrer">
                                YouTube
                            </a>
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
        </PageWrapper>
    );
}
