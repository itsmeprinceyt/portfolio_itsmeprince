import { DiscordServer_Link, GitHubLink, InstagramLink, LinkedInLink, X_Link, YouTubeLink } from "@/utility/utils";
import Link from "next/link";

export default function SocialMediaIcons() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-5 px-5">

            {/* YouTube */}
            <div className="relative p-[1px] rounded-lg bg-gradient-to-tr from-red-700 via-red-500 to-red-400 hover:scale-105 w-[120px]">
                <Link
                    className="transition-all ease-in-out flex justify-center items-center gap-2 p-2 px-3 text-xs w-full h-full rounded-md bg-black text-stone-300 shadow-[0_0_6px_rgba(239,68,68,0.3),0_0_20px_rgba(220,38,38,0),0_0_30px_rgba(252,165,165,0.2)] hover:shadow-[0_0_20px_rgba(239,68,68,0.2),0_0_30px_rgba(220,38,38,0.3),0_0_40px_rgba(252,165,165,0.4)] hover:animate-pulse"
                    href={YouTubeLink}
                    target="_blank"
                ><span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 576 512">
                            <path
                                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                    </span>
                    YouTube
                </Link>
            </div>

            {/* LinkedIn */}
            <div className="relative p-[1px] rounded-lg bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-300 hover:scale-105 w-[120px]">
                <Link
                    className="transition-all ease-in-out flex justify-center items-center gap-2 p-2 px-3 text-xs w-full h-full rounded-md bg-black text-stone-300 shadow-[0_0_6px_rgba(59,130,246,0.3),0_0_20px_rgba(37,99,235,0),0_0_30px_rgba(147,197,253,0.25)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2),0_0_30px_rgba(37,99,235,0.2),0_0_40px_rgba(147,197,253,0.4)] hover:animate-pulse"
                    href={LinkedInLink}
                    target="_blank"
                ><span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512">
                            <path
                                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                    </span>
                    LinkedIn
                </Link>
            </div>

            {/* GitHub */}
            <div className="relative p-[1px] rounded-lg bg-gradient-to-tr from-stone-500 via-stone-400 to-stone-300 hover:scale-105 w-[120px]">
                <Link
                    className="transition-all ease-in-out flex justify-center items-center gap-2 p-2 px-3 text-xs w-full h-full rounded-md bg-black text-stone-300 shadow-[0_0_6px_rgba(120,113,108,0.3),0_0_20px_rgba(168,162,158,0),0_0_30px_rgba(214,211,209,0.25)] hover:shadow-[0_0_20px_rgba(120,113,108,0.2),0_0_30px_rgba(168,162,158,0.2),0_0_40px_rgba(214,211,209,0.4)] hover:animate-pulse"
                    href={GitHubLink}
                    target="_blank"
                ><span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 496 512">
                            <path
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </span>
                    GitHub
                </Link>
            </div>

            {/* Discord */}
            <div className="relative p-[1px] rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-400  hover:scale-105 w-[120px]">
                <Link
                    className="transition-all ease-in-out flex justify-center items-center gap-2 p-2 px-3 text-xs w-full h-full rounded-md bg-black text-stone-300 shadow-[0_0_6px_rgba(99,102,241,0.3),0_0_20px_rgba(139,92,246,0),0_0_30px_rgba(129,140,248,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.2),0_0_30px_rgba(139,92,246,0.2),0_0_40px_rgba(129,140,248,0.4)] hover:animate-pulse"
                    href={DiscordServer_Link}
                    target="_blank"
                >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 640 512">
                            <path
                                d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                        </svg>
                    </span>
                    Discord
                </Link>
            </div>

            {/* X */}
            <div className="relative p-[1px] rounded-lg bg-stone-200  hover:scale-105 w-[120px]">
                <Link
                    className="transition-all ease-in-out flex justify-center items-center gap-2 p-2 px-3 text-xs w-full h-full rounded-md bg-black text-stone-300 shadow-[0_0_6px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0),0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1),0_0_25px_rgba(255,255,255,0.2),0_0_40px_rgba(255,255,255,0.4)] hover:animate-pulse"
                    href={X_Link}
                    target="_blank"
                >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        >
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                    </span>
                    Twitter / X
                </Link>
            </div>

            {/* Instagram */}
            <div className="relative p-[1px] rounded-lg bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400  hover:scale-105 w-[120px]">
                <Link
                    className="transition-all ease-in-out flex justify-center items-center gap-2 p-2 px-3 text-xs w-full h-full rounded-md bg-black text-stone-300 shadow-[0_0_6px_rgba(168,85,247,0.3),0_0_20px_rgba(236,72,153,0),0_0_30px_rgba(253,224,71,0.25)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2),0_0_30px_rgba(236,72,153,0.2),0_0_40px_rgba(253,224,71,0.4)] hover:animate-pulse"
                    href={InstagramLink}
                    target="_blank"
                >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </span>
                    Instagram
                </Link>
            </div>

        </div>
    )
}