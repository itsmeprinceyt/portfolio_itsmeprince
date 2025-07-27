"use client";
import PageWrapper from "../(components)/PageWrapper";
import { bestProjects, majorProjects, miniProjects, playgroundProjects } from "../../utility/ProjectData";
import ProjectCard from "../(components)/ProjectCard";
import Divider from "../(components)/Components/Divider";

export default function Projects() {
    const mainProjectDiv: string = "flex flex-wrap items-start justify-center  gap-5 p-5";
    const mainHeadText: string = "text-2xl sm:text-3xl tracking-widest text-center text-glow-white text-stone-300";
    const ProductGridCSS: string = "flex gap-5 sm:gap-6";

    return (
        <PageWrapper>
            <div className="flex flex-col gap-5">
                {/* Best Projects */}
                <p className={mainHeadText}>Best Projects</p>
                <Divider/>
                <div className={mainProjectDiv}>
                    {bestProjects.map((project, index) => (
                        <div className={ProductGridCSS} id={project.id} key={index}>
                            <ProjectCard key={index} project={project} index={index} />
                        </div>
                    ))}

                </div>

                {/* Major Projects */}
                <p className={mainHeadText}>Major Projects</p>
                <Divider/>
                <div className={mainProjectDiv}>
                    {majorProjects.map((project, index) => (
                        <div className={ProductGridCSS} id={project.id} key={index}>
                            <ProjectCard key={index} project={project} index={index} />
                        </div>
                    ))}
                </div>

                {/* Mini Projects */}
                <p className={mainHeadText}>Mini Projects</p>
                <Divider/>
                <div className={mainProjectDiv}>
                    {miniProjects.map((project, index) => (
                        <div className={ProductGridCSS} id={project.id} key={index}>
                            <ProjectCard key={index} project={project} index={index} />
                        </div>
                    ))}
                </div>

                {/* Playground Projects */}
                <p className={mainHeadText}>Playground Projects</p>
                <Divider/>
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
