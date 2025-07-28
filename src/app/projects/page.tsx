"use client";
import { useState, useMemo } from "react";
import PageWrapper from "../(components)/PageWrapper";
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from "../../utility/ProjectData";
import ProjectCard from "../(components)/ProjectCard";
import Divider from "../(components)/Components/Divider";
import { GrClearOption } from "react-icons/gr";

export default function Projects() {
    const [query, setQuery] = useState("");

    const allProjects = [...majorProjects, ...miniProjects, ...playgroundProjects];

    const filtered = useMemo(() => {
        if (!query.trim()) return null;
        const q = query.toLowerCase();
        return allProjects.filter(project => project.name.toLowerCase().includes(q));
    }, [query]);

    const mainProjectDiv: string = "flex flex-wrap items-start justify-center  gap-5 p-5";
    const mainHeadText: string = "text-2xl sm:text-3xl tracking-widest text-center text-glow-white text-stone-300";
    const ProductGridCSS: string = "flex gap-5 sm:gap-6";

    return (
        <PageWrapper>
            <div className="flex flex-col gap-5">

                {/* Search Input */}
                <div className="flex justify-center p-5">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search project by name..."
                        className="px-4 py-2 rounded-md border border-stone-600 bg-neutral-900 text-stone-300 text-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-stone-500"
                    />
                </div>

                {/* Search Result Section */}
                {filtered && (
                    <>
                        <p className={mainHeadText}>Search Result</p>
                        <Divider />
                        <div className={mainProjectDiv}>
                            {filtered.length > 0 ? (
                                filtered.map((project, index) => (
                                    <div className={ProductGridCSS} id={project.id} key={index}>
                                        <ProjectCard key={index} project={project} index={index} />
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-5">
                                    <span className="text-sm text-center text-stone-400 italic">No projects found.</span>
                                    <button onClick={() => setQuery("")} className="flex gap-2 items-center justify-center text-black bg-white p-1 px-3 rounded-lg shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105 cursor-pointer">
                                        <GrClearOption /> Clear Input
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Best Projects */}
                <p className={mainHeadText}>Best Projects</p>
                <Divider />
                <div className={mainProjectDiv}>
                    {bestProjects.map((project, index) => (
                        <div className={ProductGridCSS} id={project.id} key={index}>
                            <ProjectCard key={index} project={project} index={index} />
                        </div>
                    ))}

                </div>

                {/* Major Projects */}
                <p className={mainHeadText}>Major Projects</p>
                <Divider />
                <div className={mainProjectDiv}>
                    {majorProjects.map((project, index) => (
                        <div className={ProductGridCSS} id={project.id} key={index}>
                            <ProjectCard key={index} project={project} index={index} />
                        </div>
                    ))}
                </div>

                {/* Mini Projects */}
                <p className={mainHeadText}>Mini Projects</p>
                <Divider />
                <div className={mainProjectDiv}>
                    {miniProjects.map((project, index) => (
                        <div className={ProductGridCSS} id={project.id} key={index}>
                            <ProjectCard key={index} project={project} index={index} />
                        </div>
                    ))}
                </div>

                {/* Playground Projects */}
                <p className={mainHeadText}>Playground Projects</p>
                <Divider />
                <div className={mainProjectDiv}>
                    {playgroundProjects.map((project, index) => (
                        <div className={ProductGridCSS} id={project.id} key={index}>
                            <ProjectCard key={index} project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
