"use client";
import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from "../../(components)/PageWrapper";
import MainWindow from '../../(components)/MainWindow';
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from '../../../utility/ProjectData';
import LinkLive from '../../(components)/Link-Live';
import LinkGitHub from '../../(components)/Link-GitHub';
import LinkYouTube from '../../(components)/Link-YouTube';

const getProjectById = (id: string) => {
    const allProjects = [...bestProjects, ...majorProjects, ...miniProjects, ...playgroundProjects];
    return allProjects.find(project => project.id === id);
};

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
    const [images, setImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
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

    const openFullscreen = () => setIsFullscreen(true);
    const closeFullscreen = () => setIsFullscreen(false);

    return (
        <PageWrapper>
            <MainWindow>
                {/* Outer Container */}
                <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 mt-20 mb-20 p-12 flex flex-col gap-10 text-white tracking-widest max-w-[1000px]">
                    <div className="flex flex-col gap-6">
                        {/* Project Title */}
                        <div className="text-3xl tracking-widest max-[400px]:text-2xl font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">
                            {project.name}
                        </div>

                        {/* Project Description Section */}
                        <div className="flex flex-col gap-6 text-xs font-extralight tracking-widest">
                            {/* Intro */}
                            {project.full_description?.intro && (
                                <p className="pl-1">{project.full_description.intro}</p>
                            )}

                            {/* Features */}
                            {project.full_description.features && project.full_description.features.length > 0 && (
                                <div className="pl-1">
                                    <div className="text-base tracking-widest font-bold text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">🔥 Features:</div>
                                    <ul className="list-disc pl-4">
                                        {project.full_description.features.map((feature, index) => (
                                            <li key={index}>
                                                <strong>{feature.title}:</strong> {feature.detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Dependencies */}
                            {project.full_description.dependencies && project.full_description.dependencies.length > 0 && (
                                <div className="pl-1">
                                    <div className="text-base tracking-widest font-bold text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">🔑 Dependencies:</div>
                                    <ul className="list-disc pl-4">
                                        {project.full_description.dependencies.map((dep, index) => (
                                            <li key={index}>{dep}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Usage Examples */}
                            {project.full_description?.usage_examples && project.full_description.usage_examples.length > 0 && (
                                <div className="pl-1">
                                    <div className="text-base tracking-widest font-bold text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">🤔 Use Cases:</div>
                                    <ul className="list-disc pl-4">
                                        {project.full_description.usage_examples.map((example, index) => (
                                            <li key={index}>{example}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Tech Tags Section */}
                        <div className="flex max-[700px]:flex-col items-start justify-start gap-2">
                            <div className="text-base tracking-widest font-bold bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">
                                Tech Used:
                            </div>
                            <div className="grid gap-2 max-[400px]:grid-cols-1 max-[600px]:grid-cols-2 grid-cols-4">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-black border border-black/10 bg-white shadow-white shadow-lg/10 hover:shadow-lg/20 hover:scale-105 px-2 py-1 rounded-md tracking-widest text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="flex flex-col gap-2 justify-center border border-black/10 bg-white/5 rounded-md shadow-lg/10 p-2">
                            {/* Live Link */}
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
                                    <LinkLive url={project.links.live.url} />
                                </div>
                            )}

                            {/* GitHub Link */}
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
                                    <LinkGitHub url={project.links.github.url} />
                                </div>
                            )}

                            {/* YouTube Link */}
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
                                    <LinkYouTube url={project.links.youtube.url} />
                                </div>
                            )}
                        </div>

                        {/* Image Slider Section */}
                        {images.length > 0 && (
                            <div className="mt-10 flex flex-col items-center gap-4">
                                <div className="relative w-full max-w-[600px] h-[350px] overflow-hidden rounded-md shadow-lg">
                                    <button onClick={openFullscreen} className="w-full h-full">
                                        <Image
                                            src={images[currentImageIndex]}
                                            alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </button>
                                </div>

                                <div className="flex max-[500px]:flex-col max-[500px]:gap-2 gap-5">
                                    <button
                                        onClick={() =>
                                            setCurrentImageIndex(prev =>
                                                prev === 0 ? images.length - 1 : prev - 1
                                            )
                                        }
                                        className="bg-gradient-to-r from-neutral-900 to-neutral-950 px-6 py-3 rounded-md w-[100px] text-neutral-300 border border-neutral-800 hover:border-neutral-700 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/20 text-xs"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() =>
                                            setCurrentImageIndex(prev =>
                                                prev === images.length - 1 ? 0 : prev + 1
                                            )
                                        }
                                        className="bg-gradient-to-r from-neutral-900 to-neutral-950 px-6 py-3 rounded-md w-[100px] text-neutral-300 border border-neutral-800 hover:border-neutral-700 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/20 text-xs"
                                    >
                                        Next
                                    </button>
                                </div>

                                <div className="text-xs text-neutral-400">
                                    Image {currentImageIndex + 1} of {images.length}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </MainWindow>

{isFullscreen && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
        {/* Close Button */}
        <button
            onClick={closeFullscreen}
            className="absolute top-5 right-5 text-white text-3xl font-bold z-10 hover:scale-110 transition-transform"
        >
            ✕
        </button>

        {/* Image Viewer */}
        <div className="relative w-full max-w-[90vw] h-[70vh] mb-6">
            <Image
                src={images[currentImageIndex]}
                alt={`${project.name} screenshot fullscreen ${currentImageIndex + 1}`}
                fill
                className="object-contain rounded-md"
            />
        </div>

        {/* Navigation Buttons (with original styles) */}
        <div className="flex max-[500px]:flex-col max-[500px]:gap-2 gap-5">
            <button
                onClick={() =>
                    setCurrentImageIndex(prev =>
                        prev === 0 ? images.length - 1 : prev - 1
                    )
                }
                className="bg-gradient-to-r from-neutral-900 to-neutral-950 px-6 py-3 rounded-md w-[100px] text-neutral-300 border border-neutral-800 hover:border-neutral-700 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/20 text-xs"
            >
                Previous
            </button>
            <button
                onClick={() =>
                    setCurrentImageIndex(prev =>
                        prev === images.length - 1 ? 0 : prev + 1
                    )
                }
                className="bg-gradient-to-r from-neutral-900 to-neutral-950 px-6 py-3 rounded-md w-[100px] text-neutral-300 border border-neutral-800 hover:border-neutral-700 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/20 text-xs"
            >
                Next
            </button>
        </div>

        {/* Image Counter */}
        <div className="text-xs text-neutral-400 mt-4">
            Image {currentImageIndex + 1} of {images.length}
        </div>
    </div>
)}



        </PageWrapper>
    );
}
