"use client";
import Link from "next/link";
import PageWrapper from "../(components)/PageWrapper";
import Divider from "../(components)/Components/Divider";
import devSkills from "../../utility/devSkills";
import creativeTools from "../../utility/creative-tools";
import devTools from "../../utility/devTools";
import hobbiesInterests from "../../utility/hobbiesInterests";
import personalSoftSkills from "../../utility/personalSoftSkills";
import SkillIcon from "../(components)/SkillIcon";

export default function Skills() {
    const WRAP_CLASS: string = "flex flex-wrap items-center justify-center gap-5";
    const sections = [
        { title: "Development Skills", data: devSkills, prefix: "dev-skills" },
        { title: "Creative Tools", data: creativeTools, prefix: "creative-tools" },
        { title: "Development Tools", data: devTools, prefix: "dev-tools" },
        { title: "Personal Soft Skills", data: personalSoftSkills, prefix: "personal-soft-skills" },
        { title: "Hobbies & Interests", data: hobbiesInterests, prefix: "hobbies-interests" },
    ];

    return (
        <PageWrapper>
            {/* Main Div */}
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center gap-2 px-5">
                    {/* Names */}
                    <div className="text-4xl text-glow-white text-stone-300">Skills</div>
                    <Divider />
                </div>

                <div className="flex flex-col items-center justify-start space-y-5">
                    {/* Top 3 cards */}
                    <div className="flex flex-wrap items-center justify-center gap-5 px-5">
                        {/* MERN Stack Card */}
                        <div className="relative group max-w-[280px] w-full">
                            <div className="z-2 absolute -rotate-25 -top-5 -left-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:-translate-3 transition-all duration-1000 ease-out">
                                🧑‍💻
                            </div>
                            <div className="z-2 absolute rotate-12 -bottom-2 -right-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-3 transition-all duration-1000 ease-out">
                                🚀
                            </div>

                            <div className="bg-gradient-to-r from-lime-500 to-lime-600 border border-lime-700 rounded-md p-6 shadow-xl hover:shadow-lime-500/20 shadow-lime-500/10 hover:shadow-2xl transition-shadow text-neutral-300">
                                <h3 className="text-white text-xl font-semibold mb-2">MERN Full Stack</h3>
                                <ol className="list-disc pl-4 space-y-1 text-lime-900">
                                    <li>Building SPA & web apps</li>
                                    <li>REST APIs are my friend</li>
                                    <li>Optimizing for scale</li>
                                </ol>
                            </div>
                        </div>

                        {/* Data Structures Card */}
                        <div className="relative group max-w-[280px] w-full">
                            <div className="z-2 absolute -rotate-25 -top-2 -left-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:-translate-3 transition-all duration-1000 ease-out">
                                🧮
                            </div>
                            <div className="z-2 absolute rotate-12 -bottom-2 -right-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-3 transition-all duration-1000 ease-out">
                                🔍
                            </div>

                            <div className="bg-gradient-to-r from-rose-500 to-rose-600 border border-rose-700 rounded-md p-6 shadow-xl hover:shadow-rose-500/20 shadow-rose-500/10 hover:shadow-2xl transition-shadow text-neutral-300">
                                <h3 className="text-white text-xl font-semibold mb-2">Data Structures & Algo</h3>
                                <ol className="list-disc pl-4 space-y-1 text-rose-100">
                                    <li>Pick the right model</li>
                                    <li>Optimizing sort & search</li>
                                    <li>Preparing data for date 🍷</li>
                                </ol>
                            </div>
                        </div>

                        {/* Software Dev Card */}
                        <div className="relative group max-w-[280px] w-full">
                            <div className="z-2 absolute -rotate-25 -top-2 -left-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:-translate-3 transition-all duration-1000 ease-out">
                                🛠️
                            </div>
                            <div className="z-2 absolute rotate-12 -bottom-2 -right-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-3 transition-all duration-1000 ease-out">
                                ⚙️
                            </div>

                            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 border border-cyan-700 rounded-md p-6 shadow-xl hover:shadow-cyan-500/20 shadow-cyan-500/10 hover:shadow-2xl transition-shadow text-neutral-300">
                                <h3 className="text-white text-xl font-semibold mb-2">Software Dev</h3>
                                <ol className="list-disc pl-4 space-y-1 text-cyan-900">
                                    <li>Building desktop apps</li>
                                    <li>Writing clean, modular code</li>
                                    <li>Offline softwares are best</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {sections.map(({ title, data, prefix }) => (
                        <section
                            key={title}
                            className="w-full max-w-5xl text-stone-300 space-y-5 p-5"
                        >
                            <Divider />
                            <p className="text-xl text-center text-glow-white">{title}</p>

                            <div className={WRAP_CLASS}>
                                {data.map((skill, i) => (
                                    <Link
                                        key={i}
                                        href={`/skills/${encodeURIComponent(skill.name)}`}
                                    >
                                        <SkillIcon name={skill.name} file={`${prefix}/${skill.file}`} />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
