"use client";
import PageWrapper from "../PageWrapper";
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from "../../../utility/ProjectData";
import ProjectCard from "../ProjectCard";

export default function Skills() {
    const mainProjectDiv = "bg-gradient-to-r from-neutral-900 to-neutral-950 rounded-md w-full max-w-screen-xl mx-auto border border-neutral-700 p-4 sm:p-6 md:p-10 space-y-6";
    const mainHeadText = "text-2xl sm:text-3xl tracking-widest text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20";
    const ProductGridCSS = "flex flex-col gap-5 sm:gap-6";

    return (
        <PageWrapper>
            <div className="flex flex-col gap-10 px-4 sm:px-6 md:px-10 mt-16 mb-16 select-none">
                {/* Best Projects */}
                <div className={mainProjectDiv}>
                    <p className={mainHeadText}>Best Projects</p>
                    <div className={ProductGridCSS}>
                        {bestProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Major Projects */}
                <div className={mainProjectDiv}>
                    <p className={mainHeadText}>Major Projects</p>
                    <div className={ProductGridCSS}>
                        {majorProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Mini Projects */}
                <div className={mainProjectDiv}>
                    <p className={mainHeadText}>Mini Projects</p>
                    <div className={ProductGridCSS}>
                        {miniProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Playground Projects */}
                <div className={mainProjectDiv}>
                    <p className={mainHeadText}>Playground Projects</p>
                    <div className={ProductGridCSS}>
                        {playgroundProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
