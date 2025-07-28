"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
    Home,
    User,
    BookOpen,
    Code,
    Folder,
    Mail,
    Menu,
    X,
    DollarSign,
    Star,
    IdCard
} from "lucide-react";
//import { Briefcase } from "lucide-react";
import { SidebarItem } from "../../types/Sidebar.type";
import AnimatedMultilingualText from "./AnimatedText";
import { ProfilePicture } from "../../utility/utils";

const SIDEBAR_ITEMS: SidebarItem[] = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    //{ icon: Briefcase, label: "Experience", href: "/experience" },
    { icon: BookOpen, label: "Education", href: "/education" },
    { icon: Code, label: "Skills", href: "/skills" },
    { icon: Folder, label: "Projects", href: "/projects" },
    { icon: Mail, label: "Contact", href: "/contact" },
    { icon: IdCard, label: "Card", href: "/card"},
    { icon: DollarSign, label: "Support", href: "/support" },
    { icon: Star, label: "Surprise", href: "/quote"}
];

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const iconSize: number = 20;

    const pathname = usePathname();
    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <>
            {/* Hamburger for Mobile */}
            <div className="md:hidden fixed top-4 right-4 z-50 invert">
                {!isMobileOpen && (
                    <button onClick={() => setIsMobileOpen(true)}>
                        <Menu size={iconSize} />
                    </button>
                )}
            </div>
            {/* Sidebar */}
            <div
                className={`bg-gradient-to-b from-neutral-900 to-neutral-950 text-white transition-all duration-300 z-40 flex-col space-y-5 py-5 shadow-xl shadow-stone-50/10 border-r border-stone-50/10 ${isMobileOpen ? "fixed inset-0 w-60" : "hidden md:flex"
                    } ${!isMobileOpen && isExpanded ? "w-60" : ""} ${!isMobileOpen && !isExpanded ? "w-16" : ""
                    } h-full relative`}
                style={{
                    position: isMobileOpen ? "fixed" :"relative",
                }}
            >
                {/* Close button in the top-right corner */}
                {isMobileOpen && (
                    <button onClick={() => setIsMobileOpen(false)} className="fixed top-4 right-4">
                        <X size={iconSize - 2} />
                    </button>
                )}
                {/* Close button in Sidebar */}
                {isMobileOpen && (
                    <button onClick={() => setIsMobileOpen(false)} className="absolute -right-10 top-5 bg-stone-950 border border-stone-600/50 rounded-full h-8 w-8 flex items-center justify-center">
                        <X size={iconSize - 2} />
                    </button>
                )}
                <Link href="/" className="flex items-center justify-start px-4 space-x-4">
                    <Image
                        src={ProfilePicture}
                        height={50}
                        width={50}
                        alt="profile pic"
                        className="rounded-full"
                    />
                    {(isExpanded || isMobileOpen) && (
                        Math.random() > 0.5 ? (
                            <AnimatedMultilingualText text="Mohd Uvaish" />
                        ) : (
                            <AnimatedMultilingualText text="ItsMe Prince" />
                        )
                    )}
                </Link>
                {/* Sidebar Contents */}
                <div className="flex-1 space-y-2">
                    {SIDEBAR_ITEMS.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center ${isExpanded || isMobileOpen ? "justify-start" : "justify-center"} px-4 py-3 m-2 border-1 border-stone-50/10 rounded-lg transition-colors ${active
                                    ? "bg-white text-black shadow-lg shadow-white/20"
                                    : "hover:bg-white/10 shadow-lg shadow-stone-600/10"
                                    }`}
                            >
                                <item.icon size={iconSize - 4} />
                                {(isExpanded || isMobileOpen) && (
                                    <span className="ml-4 text-sm">{item.label}</span>
                                )}
                            </Link>
                        )
                    })}

                    {/*
                    ============================
                    Theme Switch Mode Button 
                    ============================
                    For Future Dev
                    ============================
                    <button
                        onClick={toggleTheme}
                        className={`box-border flex items-center w-full px-4 py-3 m-2 border-1 border-stone-50/10 dark:border-stone-500/20 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors ${isExpanded || isMobileOpen ? "justify-start max-w-56" : "justify-center max-w-12"
                            }`}
                        aria-label="Toggle dark/light mode"
                        type="button"
                    >
                        {theme === "dark" ? (
                            <Moon size={iconSize - 4} />
                        ) : (
                            <Sun size={iconSize - 4} />
                        )}
                        {(isExpanded || isMobileOpen) && <span className="ml-4 text-sm select-none">Switch Mode</span>}
                    </button>
                    
                    */}

                </div>
                {/* Expand/Collapse button desktop only */}
                {!isMobileOpen && (
                    <button
                        className="absolute -right-10 top-5 bg-stone-950 border border-stone-600/50 rounded-full h-8 w-8 flex items-center justify-center"
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-label="Expand sidebar"
                    >
                        {isExpanded ? "<" : ">"}
                    </button>
                )}
            </div>
        </>
    );
}