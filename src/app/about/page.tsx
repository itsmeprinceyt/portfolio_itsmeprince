import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../(components)/PageWrapper";
import MainWindow from "../(components)/MainWindow";

export default function About() {
    return (
        <PageWrapper>
            <MainWindow>
                <div className="flex max-[700px]:flex-col items-center justify-center gap-5 text-center p-4 text-white">
                    <Image
                        className="w-[340px] max-[700px]:w-[300px] max-[400px]:w-[250px] max-[300px]:w-[180px] rounded-full max-[700px]:rounded-full hover:scale-110 shadow-xl/20 hover:shadow-xl/40 shadow-neutral-700"
                        src={"/profile-picture/pfp1.jpg"}
                        width={3000}
                        height={3000}
                        loading="lazy"
                        alt="Profile"
                    />
                    <div className="flex flex-col gap-2 text-left p-5 rounded-md">
                        <h1 className="text-5xl max-[400px]:text-2xl max-[700px]:text-center font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">About</h1>
                        <p className="text-xs w-[220px] max-[400px]:w-[220px] max-[300px]:w-[200px] max-[280px]:w-[150px] max-[700px]:text-center tracking-widest leading-6 font-extralight">
                            I&apos;m Mohd Uvaish, a passionate <span className="bg-lime-500 border border-lime-800 text-lime-900 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-lime-500">/full-stack-developer</span>
                            <br /><br />
                            I also run a <Link href="https://www.youtube.com/@itsmeprinceyt"><span className="bg-red-500 border border-red-800 text-red-200 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-red-500">/youtube-channel</span></Link> where I showcase all kinds of content, from <span className="bg-purple-500 border border-purple-800 text-purple-100 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-purple-500">/gaming</span> to <Link href="https://www.youtube.com/playlist?list=PLiFooJ43_R5SKCLgUOeECaypEXsUv8kEO"><span className="bg-blue-500 border border-blue-800 text-blue-100 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-blue-500">/coding</span></Link>
                            <br /><br />
                            I&apos;m always honing my <Link href="/skills"><span className="bg-yellow-500 border border-yellow-800 text-yellow-900 font-normal px-2 rounded-md inline-block hover:scale-125 shadow-lg/10 hover:shadow-lg/20 shadow-yellow-500">/skills</span></Link> in tech and staying eager to learn and grow while helping others and staying humble!</p>
                    </div>
                </div>
            </MainWindow>
        </PageWrapper>
    );
}
