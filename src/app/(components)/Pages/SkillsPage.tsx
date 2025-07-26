"use client";
import PageWrapper from "../PageWrapper";
import devSkills from "../../../utility/devSkills";
import creativeTools from "../../../utility/creative-tools";
import devTools from "../../../utility/devTools";
import hobbiesInterests from "../../../utility/hobbiesInterests";
import personalSoftSkills from "../../../utility/personalSoftSkills";
import SkillIcon from '../SkillIcon';

export default function SkillsPage() {
    return (
        <PageWrapper>
            <div className="flex flex-col items-center justify-start mt-16 mb-16 select-none">

                <div className="m-5 max-w-4xl mx-auto">
                    <h2
                        className="text-3xl max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text mb-8">
                        What I can do?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* MERN Stack Card */}
                        <div className="relative group">
                            {/* Emoji 1 */}
                            <div className="z-2 absolute -rotate-25 -top-5 -left-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:-translate-3 transition-all duration-1000 ease-out">
                                🧑‍💻
                            </div>
                            {/* Emoji 2 */}
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
                        <div className="relative group">
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
                        <div className="relative group">
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
                </div>

                {/* Dev Skills */}
                <section className="m-5 w-full max-w-5xl mx-auto rounded-2xl shadow-xl p-6 text-white">
                    <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8 animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text">
                        Dev Skills
                    </h2>

                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                        {devSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center gap-1 p-2 sm:p-3 rounded-xl bg-neutral-800/60 backdrop-blur-sm border border-neutral-700 hover:border-neutral-500 hover:shadow-lg transition-all duration-200 hover:scale-105"
                            >
                                {/* Responsive Icon Container */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 rounded-md shadow-inner">
                                    <SkillIcon name={skill.name} file={`dev-skills/${skill.file}`} />
                                </div>

                                <span className="text-[10px] sm:text-xs text-center text-neutral-300 truncate w-full max-w-[72px]">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Creative tools */}
                <section className="m-5 w-full max-w-5xl mx-auto rounded-2xl shadow-xl p-6 text-white">
                    <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8 animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text">
                        Creative tools
                    </h2>

                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                        {creativeTools.map((skill, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center gap-1 p-2 sm:p-3 rounded-xl bg-neutral-800/60 backdrop-blur-sm border border-neutral-700 hover:border-neutral-500 hover:shadow-lg transition-all duration-200 hover:scale-105"
                            >
                                {/* Responsive Icon Container */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 rounded-md shadow-inner">
                                    <SkillIcon name={skill.name} file={`creative-tools/${skill.file}`} />
                                </div>

                                <span className="text-[10px] sm:text-xs text-center text-neutral-300 truncate w-full max-w-[72px]">
                                    {skill.name}
                                </span>

                            </div>
                        ))}
                    </div>
                </section>

                {/* Dev Tools */}
                <section className="m-5 w-full max-w-5xl mx-auto rounded-2xl shadow-xl p-6 text-white">
                    <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8 animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text">
                        Dev Tools
                    </h2>

                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                        {devTools.map((skill, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center gap-1 p-2 sm:p-3 rounded-xl bg-neutral-800/60 backdrop-blur-sm border border-neutral-700 hover:border-neutral-500 hover:shadow-lg transition-all duration-200 hover:scale-105"
                            >
                                {/* Responsive Icon Container */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 rounded-md shadow-inner">
                                    <SkillIcon name={skill.name} file={`dev-tools/${skill.file}`} />
                                </div>

                                <span className="text-[10px] sm:text-xs text-center text-neutral-300 truncate w-full max-w-[72px]">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Personal Soft Skills */}
                <section className="m-5 w-full max-w-5xl mx-auto rounded-2xl shadow-xl p-6 text-white">
                    <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8 animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text">
                        Personal Soft Skills
                    </h2>

                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                        {personalSoftSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center gap-1 p-2 sm:p-3 rounded-xl bg-neutral-800/60 backdrop-blur-sm border border-neutral-700 hover:border-neutral-500 hover:shadow-lg transition-all duration-200 hover:scale-105"
                            >
                                {/* Responsive Icon Container */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 rounded-md shadow-inner">
                                    <SkillIcon name={skill.name} file={`personal-soft-skills/${skill.file}`} />
                                </div>

                                <span className="text-[10px] sm:text-xs text-center text-neutral-300 truncate w-full max-w-[72px]">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hobbies & Interests */}
                <section className="m-5 w-full max-w-5xl mx-auto rounded-2xl shadow-xl p-6 text-white">
                    <h2 className="text-2xl sm:text-3xl text-center font-bold mb-8 animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text">
                        Hobbies & Interests
                    </h2>

                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                        {hobbiesInterests.map((skill, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center gap-1 p-2 sm:p-3 rounded-xl bg-neutral-800/60 backdrop-blur-sm border border-neutral-700 hover:border-neutral-500 hover:shadow-lg transition-all duration-200 hover:scale-105"
                            >
                                {/* Responsive Icon Container */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 rounded-md shadow-inner">
                                    <SkillIcon name={skill.name} file={`hobbies-interests/${skill.file}`} />
                                </div>

                                <span className="text-[10px] sm:text-xs text-center text-neutral-300 truncate w-full max-w-[72px]">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </PageWrapper>
    );
}