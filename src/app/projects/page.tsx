"use client";
import { useRef } from "react";
import PageWrapper from "../(components)/PageWrapper";
import MainWindow from "../(components)/MainWindow";
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from "../../utility/ProjectData";
import ScrollToButton from "../(components)/ScrollToButton";
import ProjectCard from "../(components)/ProjectCard";

export default function Skills() {
    const Home = useRef<HTMLDivElement | null>(null);
    const ProductGridCSS: string = "grid grid-cols-2 max-[800px]:grid-cols-1 gap-5"
    return (
        <PageWrapper>
            <MainWindow>
                <div ref={Home} className="flex flex-col gap-5 mt-16 mb-16">

                    {/* Best Projects */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md mt-5 p-5 max-[400px]:pt-12 max-[400px]:p-3 flex flex-col gap-10 text-white tracking-widest max-w-[90vw] md:max-w-[1000px]">
                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Best Projects</p>
                        {/* Grid Container */}
                        <div className={`${ProductGridCSS}`}>
                            {/* Projects Mapping */}
                            {bestProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Major Projects */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md mt-5 p-12 max-[400px]:pt-12 max-[400px]:p-3 flex flex-col gap-10 text-white tracking-widest max-w-[90vw] md:max-w-[1000px]">
                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Major Projects</p>
                        {/* Grid Container */}
                        <div className={`${ProductGridCSS}`}>
                            {/* Projects Mapping */}
                            {majorProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mini Projects */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md mt-5 p-12 max-[400px]:pt-12 max-[400px]:p-3 flex flex-col gap-10 text-white tracking-widest max-w-[90vw] md:max-w-[1000px]">
                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Mini Projects</p>
                        {/* Grid Container */}
                        <div className={`${ProductGridCSS}`}>
                            {/* Projects Mapping */}
                            {miniProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Playground Projects */}
                    <div className=" bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md mt-5 p-12 max-[400px]:pt-12 max-[400px]:p-3 flex flex-col gap-10 text-white tracking-widest max-w-[90vw] md:max-w-[1000px]">
                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Playground Projects</p>
                        {/* Grid Container */}
                        <div className={`${ProductGridCSS}`}>
                            {/* Projects Mapping */}
                            {playgroundProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>

                </div>
                <ScrollToButton scrollRef={Home} />
            </MainWindow>
        </PageWrapper>
    );
}
