"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../(components)/PageWrapper";
import MainWindow from "../(components)/MainWindow";
import SocialMediaIcons from "../(components)/SocialMediaIcons";
import KofiWidget from "../(components)/KofiWidget";
import BirthdayCounter from "../(components)/BirthdayCounter";
import TextHighlighter from "../(components)/textHighlighter";
import ScrollToButton from "../(components)/ScrollToButton";

export default function About() {
    const Home = useRef<HTMLDivElement | null>(null);
    const SecondPage = useRef<HTMLDivElement | null>(null);
    const ThirdPage = useRef<HTMLDivElement | null>(null);

    const ScrollToSecondPage = (): void => {
        if (SecondPage.current) {
            SecondPage.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const ScrollToThirdPage = (): void => {
        if (ThirdPage.current) {
            ThirdPage.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <PageWrapper>
            <div className="flex flex-col">
                <div ref={Home}>
                    <MainWindow>
                        <div
                            className="flex max-[700px]:flex-col items-center justify-center max-[700px]:mt-20 gap-5 text-center p-4 text-white">
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
                                    I&apos;m Mohd Uvaish, a passionate <TextHighlighter text="/full-stack-developer"/>
                                    <br /><br />
                                    I also run a <Link href="https://www.youtube.com/@itsmeprinceyt" target="_blank" rel="noopener noreferrer"><TextHighlighter text="/youtube-channel"/></Link> where I showcase all kinds of content, from <TextHighlighter text="/gaming"/> to <Link href="https://www.youtube.com/playlist?list=PLiFooJ43_R5SKCLgUOeECaypEXsUv8kEO" target="_blank" rel="noopener noreferrer"><TextHighlighter text="/coding"/></Link>
                                    <br /><br />
                                    I&apos;m always honing my <Link href="/skills"><TextHighlighter text="/skills"/></Link> in tech and staying eager to learn and grow while helping others and staying humble!</p>
                            </div>
                        </div>
                        <button onClick={ScrollToSecondPage} className="absolute left-1/2 max-[700px]:-bottom-[30px] bottom-[30px] transform -translate-x-1/2 px-4 py-2">
                            <Image
                                className="animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
                                src={'/icons/arrow-down.png'}
                                height={50}
                                width={50}
                                alt="arrow"
                            />
                        </button>
                    </MainWindow>
                </div>

                <div ref={SecondPage}>
                    <MainWindow>
                        <div
                            className="flex-col text-center tracking-widest leading-6 font-extralight">
                            <div className="text-2xl mb-5 text-white">Ways to connect</div>
                            <SocialMediaIcons />
                        </div>
                        <button onClick={ScrollToThirdPage}>
                            <Image
                                className="absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out"
                                src={'/icons/arrow-down.png'}
                                height={50}
                                width={50}
                                alt="arrow"
                            />
                        </button>
                    </MainWindow>
                </div>

                <div ref={ThirdPage}>
                    <MainWindow>
                        <div
                            className="flex-col text-center tracking-widest leading-6 font-extralight">
                            <BirthdayCounter />
                        </div>
                        <ScrollToButton scrollRef={Home} />
                    </MainWindow>
                </div>

            </div>
            <KofiWidget />
        </PageWrapper>
    );
}
