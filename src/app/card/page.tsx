"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { LucideShare, LucideDownload } from "lucide-react";
import { toPng } from 'html-to-image';
import PageWrapperNormal from "../(components)/PageWrapper";
import YouTubeSVG from "../(components)/SVG/YouTube";
import GitHub from "../(components)/SVG/GitHub";
import LinkedIn from "../(components)/SVG/LinkedIn";
import { GitHubLink, LinkedInLink, ProfilePicture, YouTubeLink } from "../../utility/utils";
import Divider from "../(components)/Components/Divider";

export default function Card() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState<boolean>(false);

    const handleShare = async () => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const shareData = {
            title: 'Mohd Uvaish – Full Stack Developer',
            text: 'Check out my digital card!',
            url: window.location.href,
        };

        if (isMobile && navigator.share) {
            try {
                await navigator.share(shareData);
                return;
            } catch (err) {
                console.warn("Sharing failed or was canceled, falling back to copy: ", err);
            }
        }

        try {
            if (document.hasFocus()) {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            } else {
                console.warn("Document not focused — skipping copy fallback.");
            }
        } catch (clipboardErr) {
            console.error("Clipboard fallback failed:", clipboardErr);
        }
    };

    const handleDownload = async () => {
        if (!cardRef.current) return;

        const dataUrl = await toPng(cardRef.current, {
            pixelRatio: 3,
        });
        const link = document.createElement('a');
        link.download = 'mohd-uvaish-itsme-prince-card.png';
        link.href = dataUrl;
        link.click();
    };
    return (
        <PageWrapperNormal>
            <div className="flex flex-col items-center justify-center px-5 gap-5 text-stone-300">
                {/* Main Card */}
                <div ref={cardRef} className="flex flex-col items-center justify-between max-w-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-xl shadow-xl shadow-purple-600/20 border border-purple-300 py-5 hover:scale-105 gap-5">

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
                        <div className="flex flex-wrap items-center justify-center text-xs gap-5">
                            <Link href={YouTubeLink} target="_blank" className="flex flex-col md:flex-row items-center justify-center gap-2 break-all">
                                <YouTubeSVG /> {YouTubeLink}
                            </Link>
                            <Link href={LinkedInLink} target="_blank" className="flex flex-col md:flex-row items-center justify-center gap-2 break-all">
                                <LinkedIn /> {LinkedInLink}
                            </Link>
                            <Link href={GitHubLink} target="_blank" className="flex flex-col md:flex-row items-center justify-center gap-2 break-all">
                                <GitHub /> {GitHubLink}
                            </Link>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="flex items-center justify-center flex-wrap gap-5 text-stone-900">
                    {/* Share Button */}
                    <button onClick={handleShare} aria-label="Share" className="hover:scale-110 transition flex gap-2 p-2 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 border border-amber-300">
                        <LucideShare /> Share
                    </button>
                    {/* Download Button */}
                    <button
                        onClick={handleDownload}
                        className="hover:scale-110 transition flex gap-2 p-2 px-4 rounded-lg bg-gradient-to-r from-lime-500 to-lime-600 shadow-lg shadow-lime-500/10 hover:shadow-lime-500/20 border border-lime-300"
                    >
                        <LucideDownload /> Download
                    </button>
                </div>
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
