"use client";
import Link from "next/link";
import { useState } from "react";
import PageWrapperNormal from "../(components)/PageWrapper";
import YouTubeSVG from "../(components)/SVG/YouTube";
import GitHub from "../(components)/SVG/GitHub";
import LinkedIn from "../(components)/SVG/LinkedIn";
import { LucideShare } from "lucide-react";
import Image from "next/image";
import { GitHubLink, LinkedInLink, ProfilePicture, YouTubeLink } from "../../utility/utils";
import Divider from "../(components)/Components/Divider";

export default function Card() {
    const [copied, setCopied] = useState<boolean>(false);

    const copyUrl = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { }
    };
    return (
        <PageWrapperNormal>
            <div className="flex flex-col items-center justify-center p-5 gap-5 text-stone-300">
                {/* Main Card */}
                <div className="flex flex-col items-center justify-between max-w-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-xl shadow-xl shadow-purple-600/20 border border-purple-300 py-5 hover:scale-105 gap-5">

                    <div className="relative w-30 h-30 rounded-full overflow-hidden shadow-lg shadow-black/20">
                        <Image
                            src={ProfilePicture}
                            alt="ItsMe Prince"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center gap-5 px-5 text-stone-300">
                        <h1 className="text-3xl font-bold tracking-widest">Mohd Uvaish<br /> <span className="text-xs"><span className="text-[8px]">A.K.A</span> ItsMe Prince</span></h1>
                        <p className="text-sm text-stone-200 leading-relaxed">
                            {`I'm Mohd Uvaish, a passionate Full Stack Developer specializing in modern web technologies like React, Next.js, and the MERN stack. I have a strong focus on building efficient, scalable, and user-friendly web applications while constantly enhancing my problem-solving skills.`}
                        </p>
                        <p className="text-sm text-stone-200 leading-relaxed">{` With a continuous drive to learn and improve, I strive to create impactful solutions, stay updated with the latest industry trends, and help others grow along the way.`}</p>
                        <div className="flex gap-5">
                            <Link href={YouTubeLink} target="_blank" >
                                <YouTubeSVG />
                            </Link>
                            <Link href={LinkedInLink} target="_blank">
                                <LinkedIn />
                            </Link>
                            <Link href={GitHubLink} target="_blank">
                                <GitHub />
                            </Link>
                        </div>
                    </div>
                </div>
                <Divider />
                <button onClick={copyUrl} aria-label="Share / Copy URL" className="hover:scale-110 transition">
                    <LucideShare />
                </button>
                {copied && (
                    <>
                        <Divider />
                        <div className="bg-white shadow-xl shadow-white/20 text-black text-xs px-3 py-2 rounded-lg">
                            Copied!
                        </div>
                    </>
                )}
            </div>
        </PageWrapperNormal>
    );
}
