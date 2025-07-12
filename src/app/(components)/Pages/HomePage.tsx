'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '../PageWrapper';
import SocialMediaIcons from '../SocialMediaIcons';
import AnimatedText from '../AnimatedText';
import { fileIcons } from "../../../utility/resumeFiles";

export default function HomePage() {
    const [showDownloadMenu, setShowDownloadMenu] = useState<boolean>(false);
    const downloadMenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (downloadMenuRef.current && !downloadMenuRef.current.contains(target)) {
                setShowDownloadMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDownloadMenu = () => {
        setShowDownloadMenu(!showDownloadMenu);
    };

    return (
        <PageWrapper DivID="home">
            {/* Download CV Menu */}
            {showDownloadMenu && (
                <div className="fixed z-20 top-0 left-0 w-screen h-screen bg-black/80 flex items-center justify-center">
                    <div ref={downloadMenuRef} className="relative bg-white rounded-md p-5 flex flex-col gap-5 max-h-[80vh] overflow-y-auto">
                        <p className="text-xs tracking-widest p-2 rounded-md hover:scale-105 animate-pulse select-none">/download-cv-in . . .</p>
                        <button
                            className="absolute top-2 right-2 hover:scale-125"
                            onClick={handleDownloadMenu}>
                            <Image
                                className="invert w-[10px]"
                                src={'/icons/cross.png'}
                                width={50}
                                height={50}
                                alt="cross"
                            />
                        </button>
                        {fileIcons.map((file) => (
                            <Link
                                key={file.fileTypeName}
                                href={file.href}
                                download
                                className="flex items-center gap-5 text-black border border-black/10 bg-black/5 hover:bg-black shadow-lg/10 hover:shadow-lg/20 hover:text-white px-4 py-2 rounded-md tracking-widest">
                                {file.icon}
                                <span>{file.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Text Main Container */}
            <div className="flex flex-col justify-center items-center gap-5 select-none">
                {/* Text */}
                <div className="flex flex-col  justify-end items-center text-center h-[100px] border-white/50">
                    <p className="shine-effect text-8xl max-[780px]:text-6xl max-[600px]:text-5xl max-[420px]:text-4xl text-center font-bold bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">
                        I&apos;m <AnimatedText text="Mohd Uvaish" />
                    </p>
                    <p className="text-xm max-[600px]:text-xs font-extralight text-white text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">
                        Also known as <span className="text-shadow-neutral-500 font-bold bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text"><AnimatedText text="ItsMe Prince" /></span>
                    </p>
                </div>

                {/* Social Media Icons*/}
                <div className="border-t border-white pt-5">
                    <SocialMediaIcons />
                </div>

                {/* Download CV Button */}
                <button onClick={handleDownloadMenu} className="pulse-slow bg-gradient-to-r from-neutral-900 to-neutral-950 px-6 py-3 rounded-full text-neutral-300 border border-neutral-200 hover:border-neutral-100 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/20 text-xs">
                    /download-cv
                </button>
            </div>
        </PageWrapper>
    );
}
