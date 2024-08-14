import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="absolute left-1/2 top-[10px] transform -translate-x-1/2 shadow-2xl p-2 flex justify-center items-center">
            <div className="bg-black flex items-center py-1 px-1 gap-2 rounded-full text-white border-gray-300 border-2 shadow-2xl shadow-white/30 hover:shadow-white/80 hover:py-2 hover:px-2 transition-all ease-in-out duration-300">
            <Link 
                className="transition-all ease-in-out duration-200 hover:bg-white hover:text-black p-2 px-5 rounded-full text-xs"
            href="/">
                Home
            </Link>
            <Link 
            className="transition-all ease-in-out duration-200 hover:bg-white hover:text-black p-2 px-5 rounded-full text-xs"
            href="/about">
                About
            </Link>
            <Link 
            className="transition-all ease-in-out duration-200 hover:bg-white hover:text-black p-2 px-5 rounded-full text-xs"
            href="/resume">
                Resume
            </Link>
            <Link 
            className="transition-all ease-in-out duration-200 hover:bg-white hover:text-black p-2 px-5 rounded-full text-xs"
            href="/projects">
                Projects
            </Link>
            <Link 
            className="transition-all ease-in-out duration-200 hover:bg-gray-600 hover:text-black rounded-full p-2"
            href="https://github.com/itsmeprinceyt/portfolio_itsmeprince" target="_blank">
                <Image 
                className="animate-pulse"
                src="/github-mark-white.png" 
                height={15}
                width={15}
                alt="github logo" />
            </Link>
            </div>
        </div>
    );
}