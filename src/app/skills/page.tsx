import Image from "next/image";
import PageWrapper from "../(components)/PageWrapper";
import MainWindow from "../(components)/MainWindow";
import devSkills from "../../utility/devSkills";
import creativeTools from "../../utility/creative-tools";
import devTools from "../../utility/devTools";
import hobbiesInterests from "../../utility/hobbiesInterests";
import personalSoftSkills from "../../utility/personalSoftSkills";

export default function Skills() {
    return (
        <PageWrapper>
            <MainWindow>
                <div className="flex flex-col gap-5">
                    {/* What I Do? */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 p-12 flex flex-col gap-8 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">What I do?</p>

                        <div className="max-w-[1000px] leading-7 font-extralight text-xs">
                            As a <span className="bg-lime-500 border border-lime-800 text-lime-900 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-lime-500">/full-stack-developer</span> , I craft end-to-end web applications that balance <span className="bg-emerald-500 border border-emerald-800 text-emerald-900 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-emerald-500">/performance</span> , <span className="bg-sky-500 border border-sky-800 text-sky-900 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-sky-500">/scalability</span> , and <span className="bg-rose-500 border border-rose-800 text-rose-100 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-rose-500">/exceptional design.</span> My core expertise lies in the MERN stack, C++, and data structures and algorithms, allowing me to build robust and efficient systems.<br /><br />I bring an additional edge with professional UI/UX design skills in Figma, combined with mastery over TailwindCSS and CSS to deliver pixel-perfect, responsive interfaces. With a future-ready mindset, I consistently integrate modern technologies and industry best practices to drive impactful digital experiences.
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
                        <div className="grid max-[330px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                            {devSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center gap-4 w-32 h-32 p-4 rounded-md bg-white text-black hover:scale-110 transition-transform duration-300 shadow-xl/10 hover:shadow-xl/20 shadow-white"
                                >
                                    <Image
                                        src={`/logo/dev-skills/${skill.file}`}
                                        alt={skill.name}
                                        width={48}
                                        height={48}
                                        className="object-contain rounded-md"
                                    />
                                    <p className="text-xs font-normal text-center">{skill.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    {/* Creative Tools */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Creative Tools</p>
                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                            {creativeTools.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center gap-4 w-32 h-32 p-4 rounded-md bg-white text-black hover:scale-110 transition-transform duration-300 shadow-xl/10 hover:shadow-xl/20 shadow-white"
                                >
                                    <Image
                                        src={`/logo/creative-tools/${skill.file}`}
                                        alt={skill.name}
                                        width={48}
                                        height={48}
                                        className="object-contain rounded-md"
                                    />
                                    <p className="text-xs font-normal text-center">{skill.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Dev Tools */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Dev Tools</p>
                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                            {devTools.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center gap-4 w-32 h-32 p-4 rounded-md bg-white text-black hover:scale-110 transition-transform duration-300 shadow-xl/10 hover:shadow-xl/20 shadow-white"
                                >
                                    <Image
                                        src={`/logo/dev-tools/${skill.file}`}
                                        alt={skill.name}
                                        width={48}
                                        height={48}
                                        className="object-contain rounded-md"
                                    />
                                    <p className="text-xs font-normal text-center">{skill.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Personal Soft Skills */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Personal Soft Skills</p>
                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                            {personalSoftSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center gap-4 w-32 h-32 p-4 rounded-md bg-white text-black hover:scale-110 transition-transform duration-300 shadow-xl/10 hover:shadow-xl/20 shadow-white"
                                >
                                    <Image
                                        src={`/logo/personal-soft-skills/${skill.file}`}
                                        alt={skill.name}
                                        width={48}
                                        height={48}
                                        className="object-contain rounded-md"
                                    />
                                    <p className="text-xs font-normal text-center">{skill.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Hobbies Interests */}
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 shadow-xl/10 hover:shadow-xl/20 shadow-neutral-800 border border-neutral-700 rounded-md m-5 py-12 p-5 flex flex-col gap-14 text-white tracking-widest">

                        <p className="text-3xl tracking-widest max-[400px]:text-2xl text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Hobbies & Interests</p>
                        {/* Mapping */}
                        <div className="grid max-[330px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                            {hobbiesInterests.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center gap-4 w-32 h-32 p-4 rounded-md bg-white text-black hover:scale-110 transition-transform duration-300 shadow-xl/10 hover:shadow-xl/20 shadow-white"
                                >
                                    <Image
                                        src={`/logo/hobbies-interests/${skill.file}`}
                                        alt={skill.name}
                                        width={48}
                                        height={48}
                                        className="object-contain rounded-md"
                                    />
                                    <p className="text-xs font-normal text-center">{skill.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </MainWindow>
        </PageWrapper>
    );
}
