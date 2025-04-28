import Link from "next/link";

export default function DynamicIsland() {
    return (
        <div className="fixed left-1/2 top-10 transform -translate-x-[50%] -translate-y-[50%]
        bg-gradient-to-r from-neutral-900 to-neutral-950 p-1 rounded-full text-neutral-300
        border border-neutral-900 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/40
        text-xs flex gap-1">
            <Link
                className="hover:bg-white hover:text-black border border-neutral-900 hover:border-neutral-700 py-2 px-5 rounded-full"
                href="/">
                /
            </Link>
            <Link
                className="hover:bg-white hover:text-black border border-neutral-900 hover:border-neutral-700 py-2 px-5 rounded-full"
                href="/about">
                /about
            </Link>
            <Link
                className="hover:bg-white hover:text-black border border-neutral-900 hover:border-neutral-700 py-2 px-5 rounded-full"
                href="/skills">
                /skills
            </Link>
            <Link
                className="hover:bg-white hover:text-black border border-neutral-900 hover:border-neutral-700 py-2 px-5 rounded-full"
                href="/projects">
                /projects
            </Link>
        </div>
    )
}