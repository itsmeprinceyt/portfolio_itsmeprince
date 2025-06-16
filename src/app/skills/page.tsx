import Image from "next/image";
import PageWrapper from "../(components)/PageWrapper";
import MainWindow from "../(components)/MainWindow";
import devSkills from "../../utility/devSkills";
import creativeTools from "../../utility/creative-tools";
import devTools from "../../utility/devTools";
import hobbiesInterests from "../../utility/hobbiesInterests";
import personalSoftSkills from "../../utility/personalSoftSkills";
import TextHighlighter from "../(components)/textHighlighter";
import SkillIcon from '../(components)/SkillIcon';

export default function Skills() {
    return (
        <PageWrapper>
            <MainWindow>
                <div className="flex flex-col gap-5 mt-16 mb-16">
                    {/* What I Do? */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 p-12 flex flex-col gap-8 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">What I do?</p>

                        <div className="max-w-[1000px] leading-7 font-extralight text-xs">
                            As a <TextHighlighter text="/full-stack-developer" /> , I craft end-to-end web applications that balance <TextHighlighter text="/performance" /> , <TextHighlighter text="/scalability" /> , and <TextHighlighter text="/exceptional design." /> My core expertise lies in the MERN stack, C++, and <TextHighlighter text="/data-structures-&-algorithms" /> , allowing me to build robust and efficient systems.<br /><br />I bring an additional edge with professional UI/UX design skills in Figma, combined with mastery over TailwindCSS and CSS to deliver pixel-perfect, responsive interfaces. With a future-ready mindset, I consistently integrate modern technologies and industry best practices to drive impactful digital experiences.
                        </div>
                        {/* Audio Player */}
                        <div className="mt-3 flex justify-center">
                            <audio
                                controls
                                className="w-full max-w-md h-[40px] rounded-md bg-white border border-neutral-700 shadow-xl/10 shadow-white focus:outline-none"
                            >
                                <source src="/audio/what-i-do.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>

                    </div>

                    {/* Dev Skills */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Dev skills</p>

                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center">
                            {devSkills.map((skill, index) => (
                                <SkillIcon key={index} name={skill.name} file={`dev-skills/${skill.file}`} />
                            ))}
                        </div>

                    </div>

                    {/* Creative Tools */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Creative tools</p>

                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center">
                            {creativeTools.map((skill, index) => (
                                <SkillIcon key={index} name={skill.name} file={`creative-tools/${skill.file}`} />
                            ))}
                        </div>

                    </div>

                    {/* Dev Tools */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Dev tools</p>

                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center">
                            {devTools.map((skill, index) => (
                                <SkillIcon key={index} name={skill.name} file={`dev-tools/${skill.file}`} />
                            ))}
                        </div>

                    </div>

                    {/* Personal Soft Skills */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Personal soft skills</p>

                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center">
                            {personalSoftSkills.map((skill, index) => (
                                <SkillIcon key={index} name={skill.name} file={`personal-soft-skills/${skill.file}`} />
                            ))}
                        </div>

                    </div>

                    {/* Hobbies Interests */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Hobbies & Interests</p>

                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center">
                            {hobbiesInterests.map((skill, index) => (
                                <SkillIcon key={index} name={skill.name} file={`hobbies-interests/${skill.file}`} />
                            ))}
                        </div>

                    </div>

                </div>
            </MainWindow>
        </PageWrapper>
    );
}
