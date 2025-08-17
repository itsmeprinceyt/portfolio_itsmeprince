"use client";
import Link from "next/link";
import { BsPaypal } from "react-icons/bs";
import { SiKofi } from "react-icons/si";
import { BsCash } from "react-icons/bs";
import { useState } from "react";
import { Copy } from "lucide-react";
import Divider from "../(components)/Components/Divider";
import PageWrapperNormal from "../(components)/PageWrapper";
import { UPI_ID } from "../../utility/main.util";

export default function Support() {
    const [showUpi, setShowUpi] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);
    const baseCSS: string = "px-4 p-1 rounded-lg flex gap-1 items-center justify-center shadow-xl";

    const copyUPI = async () => {
        try {
            await navigator.clipboard.writeText(UPI_ID);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { }
    };
    return (
        <PageWrapperNormal>
            {/* Main Div */}
            <div className="flex flex-col items-center justify-center gap-5 text-stone-300 p-5">
                <div className="flex flex-col items-center px-5  text-4xl text-glow-white text-stone-300 w-full">Support Me!
                </div>
                <Divider />
                <div className="flex flex-wrap items-center justify-center gap-5">
                    <Link href="https://paypal.me/itsmeprinceyt" target="_blank" rel="noreferrer noopener" className={`${baseCSS} bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 transition-all ease-in-out duration-300`}>
                        <BsPaypal /> PayPal
                    </Link>
                    <Link href="https://ko-fi.com/itsmeprinceyt" target="_blank" rel="noreferrer noopener" className={`${baseCSS} bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-orange-500/10 hover:shadow-orange-500/20 hover:scale-105 transition-all ease-in-out duration-300`}>
                        <SiKofi /> KoFi
                    </Link>
                    <button onClick={() => setShowUpi(!showUpi)} className={`${baseCSS} bg-gradient-to-r from-green-500 via-green-600 to-green-700 shadow-green-500/10 hover:shadow-green-500/20 hover:scale-105 transition-all ease-in-out duration-300`}>

                        <BsCash /> UPI
                    </button>
                </div>
                {showUpi && (
                    <>
                        <Divider />
                        <div className="text-center">
                            <div className="text-xs">UPI ID:</div>
                            <div className="select-text text-2xl flex items-center gap-2">
                                <button onClick={copyUPI} aria-label="Copy UPI">
                                    <Copy />
                                </button>
                                <div>
                                </div>{UPI_ID}</div>
                        </div>
                    </>
                )}

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