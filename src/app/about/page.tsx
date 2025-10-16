"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import { ContactIcon } from 'lucide-react';
import PageWrapper from "../(components)/PageWrapper";
import { BUTTON_CSS_ORANGE, ProfileInfoTag_Button_CSS } from "../(components)/ProfileRelated/ButtonCSS";
import { CodingProjectsLink, YouTubeLink } from '../../utils/main.util';
import FileList from '../(components)/ResumeFileIcons';
import MailSVG from '../(components)/SVG/Mail';
import dynamic from 'next/dynamic';
import Divider from '../(components)/Components/Divider';

const BirthdayCounter = dynamic(() => import("../(components)/BirthdayCounter"), {
    ssr: false,
    loading: () => (
        <div className="h-[60px] flex items-center justify-center text-white text-lg animate-pulse">
            Loading the magic... 🎉
        </div>
    ),
});
export default function About() {
    const [showDownloadMenu, setShowDownloadMenu] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const downloadMenuRef = useRef<HTMLDivElement | null>(null);
    const emailURL: string = "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=${encodeURIComponent(email)}";
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

    useEffect(() => {
        fetch('/api/mail')
            .then(res => res.json())
            .then(data => setEmail(data.email));
    }, []);

    const handleDownloadMenu = () => {
        setShowDownloadMenu(!showDownloadMenu);
    };

    return (
        <>
            <PageWrapper>
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
                            {/* Resume Download List */}
                            <FileList />
                        </div>
                    </div>
                )}


                {/* Main Div */}
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-start md:items-center gap-2 px-5  text-4xl text-glow-white text-stone-300 w-full">About
                        <Divider />
                    </div>

                    {/* Download CV & Mail */}
                    <div className="flex flex-wrap items-start md:items-center justify-center gap-5 px-5 pulse-slow">
                        {/* Download CV */}
                        <button onClick={handleDownloadMenu} className={`${ProfileInfoTag_Button_CSS} relative flex items-center gap-2 h-9`}>
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
                            </span>
                            Download CV
                        </button>

                        {/* Download CV */}
                        <Link href="/contact" className={`${ProfileInfoTag_Button_CSS} h-9 relative flex items-center gap-2`}>
                            <ContactIcon width={20} height={20} />
                            Contact
                        </Link>

                        {/* Mail */}
                        <div className="hover:scale-105 relative">
                            <button
                                onClick={() => {
                                    if (email) {
                                        window.open(
                                            emailURL,
                                            '_blank'
                                        );
                                    }
                                }}
                                disabled={!email}
                                className={`${ProfileInfoTag_Button_CSS} h-9 ${email ? `opacity-100` : `opacity-20`}`}>
                                <MailSVG />
                                Mail
                            </button>
                        </div>

                    </div>

                    {/* About Section */}
                    <div className="flex flex-col relative text-stone-300 text-start md:text-center">
                        <div className="text-xs max-w-[500px] px-5 pb-5 tracking-widest leading-8">
                            <Divider />
                            <p>{`I'm Mohd Uvaish, a passionate MERN Full Stack & Software Developer.`}</p>
                            <p>{`I also run a `}
                                <Link href={YouTubeLink} target="_blank" rel="noopener noreferrer">
                                    YouTube channel
                                </Link>
                                {` where I'm known as ItsMe Prince where I showcase all kinds of content, from `}
                                <Link href={CodingProjectsLink} target="_blank" rel="noopener noreferrer">
                                    Coding
                                </Link>
                                {` to Gaming.`}
                            </p>
                            <p>{`I'm always honing and perfecting my skillsin tech and staying eager to learn and grow while helping others and staying humble!`}</p>
                            <Divider />
                        </div>

                        <div className="text-xs max-w-[500px] p-5 tracking-widest leading-8">
                            <Divider />
                            <p>{`It all started with me spending hours on 'Plants vs Zombies' and 'GTA Vice City'. What began as gaming fun soon turned into curiosity about how these things were made.`}</p>
                            <p>{`That curiosity evolved into designing websites, solving problems for myself and others, and creating projects I’m proud of.`}</p>
                            <p>{` I’ve always loved learning—and maybe that curiosity is exactly what led me to where I am now.`}</p>
                            <Divider />
                        </div>
                    </div>

                    {/* Offer Section */}
                    <div className="flex flex-col items-center relative text-stone-300 text-center">
                        <span className={`${BUTTON_CSS_ORANGE}`}>{`Here’s what I can offer you`}</span>
                        <div className="text-xs max-w-[500px] p-5 tracking-wide leading-7">
                            <ul className="list-disc pl-5 space-y-1 text-left">
                                <li>Full-Stack Web Development</li>
                                <li>Virtual Assistance</li>
                                <li>Software Engineering Guidance</li>
                                <li>Photo & Video Editing</li>
                                <li className="animate-pulse">More loading in future ...</li>
                            </ul>
                        </div>
                    </div>

                    <Divider />
                    {/* Location & Birthday Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5">

                        {/* Location Card with Emoji */}
                        <div className="relative group z-1">
                            <div className="z-2 absolute -rotate-12 top-0 -left-4 text-6xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:-translate-3 transition-all duration-1000 ease-out">
                                🗺️
                            </div>
                            <div className="z-2 absolute rotate-12 -bottom-2 -right-4 text-6xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-3 transition-all duration-1000 ease-out">
                                📌
                            </div>

                            {/* Card */}
                            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 text-stone-900 p-6 rounded-2xl border border-neutral-700 shadow-xl transition-all duration-300  hover:shadow-2xl hover:shadow-white/20 shadow-white/10 animate-fade-in-up text-center hover:scale-105">
                                <h2 className="text-sm mb-1 tracking-widest leading-7">📍 I&apos;m from India</h2>
                                <p className="text-2xl font-semibold tracking-widest leading-7">Uttar Pradesh</p>
                            </div>
                        </div>

                        {/* Birthday Card with 🍰 🎉 */}
                        <div className="relative group z-1">
                            <div className="z-2 absolute -rotate-12 top-0 left-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:-translate-3 transition-all duration-1000 ease-out">
                                🍰
                            </div>
                            <div className="z-2 absolute rotate-12 bottom-0 right-0 text-6xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-3 transition-all duration-1000 ease-out">
                                🎉
                            </div>

                            {/* Birthday Counter Card */}
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-orange-500/20 shadow-orange-500/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up text-center border border-orange-950">
                                <BirthdayCounter />
                            </div>
                        </div>

                    </div>

                </div>
            </PageWrapper>
        </>
    );
} 