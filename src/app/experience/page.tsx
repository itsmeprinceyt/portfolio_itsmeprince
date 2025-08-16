"use client";
import Link from "next/link";
import PageWrapper from "../(components)/PageWrapper";
import Divider from "../(components)/Components/Divider";

export default function Education() {
    const TagStyleYellow: string = "px-3 py-1 text-xs rounded-full bg-yellow-800/10 border border-yellow-500 text-yellow-500 shadow-md/10 shadow-yellow-500 hover:bg-yellow-500 hover:text-black hover:shadow-md/20";
    const TagStyleBlue: string = "px-3 py-1 text-xs rounded-full bg-blue-800/10 border border-blue-500 text-blue-500 shadow-md/10 shadow-blue-500 hover:bg-blue-500 hover:text-black hover:shadow-md/20";

    return (
        <PageWrapper>
            {/* Main Section */}
            <div className="flex flex-col items-center justify-center gap-8 text-stone-300 p-5">
                <h2 className="text-4xl text-glow-white text-stone-300 font-bold">Experience</h2>
                <Divider />

                {/* Timeline Container */}
                <div className="flex flex-col gap-8 relative w-full max-w-[600px]">

                    {/* RagyaTech Experience */}
                    <div className="border border-blue-500 p-5 rounded-lg tracking-wide leading-6 flex flex-col gap-3 text-sm">
                        {/* Header */}
                        <div>
                            <h3 className="font-bold text-lg text-blue-400">RagyaTech</h3>
                            <p className="italic text-stone-300 text-sm">Full Stack MERN Developer</p>
                            <p className="text-xs text-stone-400">Aug 2025 – Present | On-Site</p>
                        </div>

                        {/* Bullet Points */}
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Maintained and scaled Mazoku Discord Bot with over 10,000 active players.</li>
                            <li>Developed backend using TypeScript, Discord.js, REST APIs, and optimized queries.</li>
                            <li>Enhanced UI/UX while ensuring backend API stability and security.</li>
                        </ul>

                        {/* Links */}
                        <Divider />
                        <div className="flex flex-wrap gap-2 pt-1">
                            <Link href="https://ragyatech.in/" className={TagStyleBlue}>Official Website</Link>
                        </div>
                    </div>

                    {/* Mazoku Bot Developer */}
                    <div className="border border-yellow-500 p-5 rounded-lg tracking-wide leading-6 flex flex-col gap-3 text-sm">
                        {/* Header */}
                        <div>
                            <h3 className="font-bold text-lg text-yellow-400">Mazoku Bot</h3>
                            <p className="italic text-stone-300 text-sm">Bot Developer</p>
                            <p className="text-xs text-stone-400">Mar 2025 – Present | Remote</p>
                        </div>

                        {/* Bullet Points */}
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Developed backend services, commands, and API integrations for Mazoku Bot.</li>
                            <li>Collaborated on design improvements for better player engagement and UI flow.</li>
                            <li>Worked closely with team to ensure scalability and uptime under heavy load.</li>
                        </ul>

                        {/* Links */}
                        <Divider />
                        <div className="flex items-center justify-start gap-2 pt-1">
                            <Link href="https://mazoku.cc/" className={TagStyleYellow}>Mazoku Website</Link>
                            <Link href="https://discord.gg/mazoku" className={TagStyleYellow}>Mazoku Discord Server</Link>
                        </div>
                    </div>

                </div>
            </div>
        </PageWrapper>
    );
}
