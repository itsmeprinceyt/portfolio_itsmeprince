"use client";
import Link from "next/link";
import YouTubeSVG from "../SVG/YouTube";
import LocationSVG from "../SVG/Location";
import GitHub from "../SVG/GitHub";
import LinkedIn from "../SVG/LinkedIn";
import { IconName, ProfileInfoTagProps } from "../../../types/ProfileInfoTag.type";

const ICONS: Record<IconName, React.JSX.Element> = {
    Location: <LocationSVG />,
    LinkedIn: <LinkedIn />,
    GitHub: <GitHub />,
    YouTube: <YouTubeSVG />,
};

export const ProfileInfoTag_Button_CSS: string = "bg-black text-stone-200 hover:text-stone-100 shadow-lg shadow-stone-400/10 border border-stone-400/20 p-1.5 px-3 rounded-lg text-xs flex items-center gap-2 hover:scale-105";

export default function ProfileInfoTag({ text, name, href }: ProfileInfoTagProps) {
    const content = (
        <div
            className={ProfileInfoTag_Button_CSS}
        >
            <span className="shrink-0">{ICONS[name]}</span>
            <span>{text}</span>
        </div>
    );

    return href ? (
        <Link href={href} target="_blank" rel="noreferrer noopener">
            {content}
        </Link>
    ) : (
        content
    );
}
