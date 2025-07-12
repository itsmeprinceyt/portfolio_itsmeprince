"use client";
import { use, useCallback, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PageWrapper from "../../(components)/PageWrapper";
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from '../../../utility/ProjectData';
import LinkShow from '../../(components)/LinkShow';
import devSkills from '../../../utility/devSkills';
import DynamicIsland from '../../(components)/DynamicIsland';
import { useRouter } from 'next/navigation';
import { REMOVEHASH_TIMEOUT } from '../../../utility/utils';


const getProjectById = (id: string) => {
    const allProjects = [...bestProjects, ...majorProjects, ...miniProjects, ...playgroundProjects];
    return allProjects.find(project => project.id === id);
};

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
    const router = useRouter();
    const { projectId } = use(params);
    const project = getProjectById(projectId);

    const [images, setImages] = useState<string[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [fullscreen, setFullscreen] = useState<boolean>(false);

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

    const handleRoute = useCallback((hash?: string) => {
        const base = "/";
        const fullPath = hash ? `${base}#${hash}` : base;
        router.push(fullPath);

        if (hash) {
            setTimeout(() => {
                window.history.replaceState(null, "", base);
            }, REMOVEHASH_TIMEOUT);
        }
    }, [router]);

    if (!project) return notFound();

    const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    const navButtons = [
        { label: "/", onClick: () => handleRoute() },
        { label: "/about", onClick: () => handleRoute("about") },
        { label: "/skills", onClick: () => handleRoute("skills") },
        { label: "/back", onClick: () => handleRoute(`${project.id}`) },
    ];

    const buttonClass: string = "bg-gradient-to-r from-neutral-900 to-neutral-950 px-6 py-3 rounded-md w-[100px] text-neutral-300 border border-neutral-800 hover:border-neutral-700 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/20 text-xs";
    const baseHeading: string = "px-2 py-0.5 text-base tracking-widest font-bold text-shadow-lg/10 text-shadow-black text-black hover:text-shadow-lg/20 bg-white rounded-md mb-2 shadow-md/20 shadow-white";

    return (
        <>
            <DynamicIsland buttons={navButtons} />

            <PageWrapper>
                <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 border border-neutral-700 rounded-md m-5 mt-20 mb-20 p-5 flex flex-col gap-10 text-white tracking-widest max-w-[80vw] md:max-w-[1000px] select-none">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl max-[400px]:text-2xl font-extrabold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-center">
                            {project.name}
                        </h1>

                        <div className="flex flex-col gap-6 text-xs font-extralight tracking-widest">
                            {project.full_description.intro && <p className="text-center">{project.full_description.intro}</p>}

                            {project.full_description.features && project.full_description.features?.length > 0 && (
                                <div>
                                    <div className={baseHeading}>🔥 Features:</div>
                                    <ul className="list-decimal pl-8 space-y-3">
                                        {project.full_description.features.map((f, i) => (
                                            <li key={i}>
                                                <span className="bg-gradient-to-b from-orange-600 via-orange-400 to-yellow-400 text-transparent bg-clip-text font-semibold">
                                                    <strong>{f.title}:</strong>
                                                </span>
                                                <br />
                                                {f.detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div>
                                <div className={baseHeading}>🔮 Tech stack:</div>
                                <ul className="list-disc pl-8 space-y-3">
                                    {project.tags.map((tag, i) => {
                                        const matched = devSkills.find((s) => s.name === tag);
                                        return (
                                            <li key={i}>
                                                <span className="bg-gradient-to-b from-purple-700 via-purple-400 to-purple-300 bg-clip-text text-transparent font-semibold">
                                                    {matched?.fullName || tag}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {project.full_description.dependencies && project.full_description.dependencies?.length > 0 && (
                                <div>
                                    <div className={baseHeading}>🔑 Dependencies:</div>
                                    <ul className="list-disc pl-8 space-y-3">
                                        {project.full_description.dependencies.map((dep, i) => (
                                            <li key={i}>{dep}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.full_description.usage_examples && project.full_description.usage_examples?.length > 0 && (
                                <div>
                                    <div className={baseHeading}>🤔 Use Cases:</div>
                                    <ul className="list-disc pl-8 space-y-3">
                                        {project.full_description.usage_examples.map((example, i) => (
                                            <li key={i}>{example}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Links */}
                        <hr className="opacity-30" />
                        <div className="flex flex-wrap gap-4">
                            {project.links.live.enabled && <LinkShow url={project.links.live.url} color="blue" />}
                            {project.links.github.enabled && <LinkShow url={project.links.github.url} color="purple" />}
                            {project.links.youtube.enabled && <LinkShow url={project.links.youtube.url} color="rose" />}
                        </div>

                        {/* Image Slider */}
                        {images.length > 0 && (
                            <div className="mt-10 flex flex-col items-center gap-4">
                                <div className="relative w-full max-w-[600px] h-[350px] overflow-hidden rounded-md shadow-lg">
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

                                <div className="flex max-[500px]:flex-col max-[500px]:gap-2 gap-5">
                                    <button onClick={prevImage} className={buttonClass}>Previous</button>
                                    <button onClick={nextImage} className={buttonClass}>Next</button>
                                </div>

                                <div className="text-xs text-neutral-400">Image {index + 1} of {images.length}</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Fullscreen Mode */}
                {fullscreen && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
                        <button
                            onClick={() => setFullscreen(false)}
                            className="absolute top-5 right-5 text-white text-3xl font-bold z-10 hover:scale-110 transition-transform"
                        >
                            ✕
                        </button>

                        <div className="relative w-full max-w-[90vw] h-[70vh] mb-6">
                            <Image
                                src={images[index]}
                                alt={`${project.name} fullscreen`}
                                fill
                                className="object-contain rounded-md"
                                draggable={false}
                            />
                        </div>

                        <div className="flex max-[500px]:flex-col max-[500px]:gap-2 gap-5">
                            <button onClick={prevImage} className={buttonClass}>Previous</button>
                            <button onClick={nextImage} className={buttonClass}>Next</button>
                        </div>

                        <div className="text-xs text-neutral-400 mt-4">
                            Image {index + 1} of {images.length}
                        </div>
                    </div>
                )}
            </PageWrapper>
        </>
    );
}
