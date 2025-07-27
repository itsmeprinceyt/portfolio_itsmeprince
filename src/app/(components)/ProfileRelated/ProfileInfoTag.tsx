"use client";
import Link from "next/link";
import YouTubeSVG from "../SVG/YouTube";
import LocationSVG from "../SVG/Location";
import GitHub from "../SVG/GitHub";
import LinkedIn from "../SVG/LinkedIn";
import { ProjectorIcon } from "lucide-react";
import { IconName, ProfileInfoTagProps } from "../../../types/ProfileInfoTag.type";
import { ProfileInfoTag_Button_CSS } from "./ButtonCSS";

const ICONS: Record<IconName, React.JSX.Element> = {
    Location: <LocationSVG />,
    LinkedIn: <LinkedIn />,
    GitHub: <GitHub />,
    YouTube: <YouTubeSVG />,
    Other: <ProjectorIcon />,
};

export default function ProfileInfoTag({ text, name, href }: ProfileInfoTagProps) {
    const content = (
        <div
            className={ProfileInfoTag_Button_CSS}
        >
            <span className="shrink-0">{ICONS[name]}</span>
            <span>{text}</span>
        </div>
    );

    if (name === 'Other') {
        return href ? (
            <Link href={href}>
                {content}
            </Link>
        ) : (
            content
        );
    }

    return href ? (
        <Link href={href} target="_blank" rel="noreferrer noopener">
            {content}
        </Link>
    ) : (
        content
    );
}
