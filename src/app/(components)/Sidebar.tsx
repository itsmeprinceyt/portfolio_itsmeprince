"use client";
import Image from "next/image";
import { useState } from "react";
import {
    Home,
    User,
    Briefcase,
    BookOpen,
    Code,
    Folder,
    Mail,
    Menu,
    X,
} from "lucide-react";
import { SidebarItem } from "../../types/Sidebar.type";
import ProfilePic from "../../assets/pfp1.jpg";
import AnimatedMultilingualText from "./AnimatedText";

const SIDEBAR_ITEMS: SidebarItem[] = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Briefcase, label: "Experience", href: "/experience" },
    { icon: BookOpen, label: "Education", href: "/education" },
    { icon: Code, label: "Skills", href: "/skills" },
    { icon: Folder, label: "Projects", href: "/projects" },
    { icon: Mail, label: "Contact", href: "/contact" },
];

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const iconSize: number = 20;
    return (
        <>
            {/* Hamburger for Mobile */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                {!isMobileOpen && (
                    <button onClick={() => setIsMobileOpen(true)}>
                        <Menu size={iconSize} />
                    </button>
                )}
            </div>
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white transition-all duration-300 z-40 flex-col space-y-2 py-2 ${isMobileOpen ? "fixed inset-0 w-60" : "hidden md:flex"} ${!isMobileOpen && isExpanded ? "w-60" : ""} ${!isMobileOpen && !isExpanded ? "w-16" : ""} h-full relative`
                }
                style={{
                    position: isMobileOpen ? "fixed" : "relative",
                }}
            >
                {/* Mobile Close */}
                {isMobileOpen && (
                    <div className="flex justify-end p-2">
                        <button onClick={() => setIsMobileOpen(false)}>
                            <X size={iconSize} />
                        </button>
                    </div>
                )}
                <div className="flex items-center justify-start px-4 space-x-4">
                    <Image
                        src={ProfilePic}
                        height={50}
                        width={50}
                        alt="profile pic"
                        className="rounded-full"
                    />
                    {(isExpanded || isMobileOpen) && (
                        Math.random() > 0.5
                            ? <AnimatedMultilingualText text="Mohd Uvaish" />
                            : <AnimatedMultilingualText text="ItsMe Prince" />
                    )}

                </div>
                {/* Sidebar Contents */}
                <div className="flex-1 space-y-2 border-t border-stone-50/20">
                    {SIDEBAR_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`flex items-center ${isExpanded || isMobileOpen ? 'justify-start' : 'justify-center'} px-4 py-3 hover:bg-gray-700 cursor-pointer transition-colors`}
                        >
                            <item.icon size={iconSize - 4} />
                            {(isExpanded || isMobileOpen) && (
                                <span className="ml-4 text-sm">{item.label}</span>
                            )}
                        </a>
                    ))}
                </div>
                {/* Expand/Collapse button desktop only */}
                {!isMobileOpen && (
                    <button
                        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-stone-900 border border-stone-600 rounded-full h-8 w-8 flex items-center justify-center"
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