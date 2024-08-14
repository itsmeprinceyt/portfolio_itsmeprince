import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className=" flex gap-4 justify-center items-center">
            <div className="bg-slate-500">
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/resume">
                Resume
            </Link>
            <Link href="https://github.com/itsmeprinceyt/portfolio_itsmeprince" target="_blank">
                <Image src="/github-mark-white.png" 
                height={15}
                width={15}
                alt="github logo" />
            </Link>
            </div>
        </div>
    );
}