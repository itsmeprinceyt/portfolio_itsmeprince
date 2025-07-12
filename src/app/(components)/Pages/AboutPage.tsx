"use client";
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from "../PageWrapper";
import TextHighlighter from '../textHighlighter';
import KofiWidget from '../KofiWidget';
import dynamic from 'next/dynamic';
import DynamicIslandProps from '../../../types/DynamicIsland.type';

export default function AboutPage({ scrollTo, refs }: DynamicIslandProps) {
    const BirthdayCounter = dynamic(() => import('../BirthdayCounter'), {
        ssr: false,
        loading: () => (
            <div className="h-[60px] flex items-center justify-center text-white text-lg animate-pulse">
                Loading the magic... 🎉
            </div>
        )
    });

    return (
        <PageWrapper DivID="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4 mt-20 md:mt-0 select-none">
                {/* Profile Image */}
                <Image
                    className="w-[340px] max-w-full rounded-md md:rounded-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-xl/20 hover:shadow-xl/40 shadow-neutral-700"
                    src={"/profile-picture/pfp1.jpg"}
                    width={3000}
                    height={3000}
                    alt="Profile"
                    priority
                    draggable={false}
                />

                {/* About Text */}
                <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
                    <h1 className="text-5xl max-[400px]:text-2xl font-bold animate-pulse bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">
                        About
                    </h1>

                    <div className="flex flex-col gap-5 text-xs w-[90%] max-w-[300px] text-center tracking-widest leading-6 font-extralight">
                        <p>
                            I&apos;m Mohd Uvaish, a passionate <TextHighlighter text="/full-stack" /> & <TextHighlighter text="/software-developer" />.
                        </p>
                        <p>
                            I also run a{' '}
                            <Link href="https://www.youtube.com/@itsmeprinceyt" target="_blank" rel="noopener noreferrer">
                                <TextHighlighter text="/youtube-channel" />
                            </Link>{' '}
                            where I showcase all kinds of content, from{' '}
                            <Link href="https://www.youtube.com/playlist?list=PLiFooJ43_R5SKCLgUOeECaypEXsUv8kEO" target="_blank" rel="noopener noreferrer">
                                <TextHighlighter text="/coding" />
                            </Link>
                            to <TextHighlighter text="/gaming" />
                            .
                        </p>
                        <p>
                            I&apos;m always honing my{' '}
                            <button onClick={() => scrollTo!(refs!.skillsRef!)}>
                                <TextHighlighter text="/skills" /></button> in tech and staying eager to learn and grow while helping others and staying humble!
                        </p>
                    </div>
                </div>
            </div>

            {/* Location & Birthday Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 select-none">

                {/* Location Card with Emoji */}
                <div className="relative group z-1">
                    <div className="z-2 absolute -rotate-12 top-0 left-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 group-hover:-translate-3 transition-all duration-1000 ease-out">
                        🗺️
                    </div>
                    <div className="z-2 absolute rotate-12 -bottom-2 -right-2 text-6xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-3 transition-all duration-1000 ease-out">
                        📌
                    </div>

                    {/* Card */}
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-6 rounded-2xl border border-neutral-700 shadow-xl transition-all duration-300  hover:shadow-2xl hover:shadow-stone-500/20 shadow-stone-500/10 animate-fade-in-up text-center hover:scale-105">
                        <h2 className="text-sm mb-1 tracking-widest leading-7">📍 I&apos;m from India</h2>
                        <p className="text-2xl font-semibold text-white/90 tracking-widest leading-7">Kanpur, Uttar Pradesh</p>
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

            <KofiWidget />
        </PageWrapper>
    );
}