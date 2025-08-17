"use client";
import Link from "next/link";
import Divider from "../(components)/Components/Divider";
import { ExperienceCardProps } from "../../types/Experience.type";


export default function ExperienceCard({
    company,
    role,
    period,
    mode,
    colorClass,
    titleColor,
    tagStyle,
    description,
    links,
}: ExperienceCardProps) {
    return (
        <div
            className={`border ${colorClass} p-5 rounded-lg tracking-wide leading-6 flex flex-col gap-3 text-sm`}
        >
            {/* Header */}
            <div>
                <h3 className={`font-bold text-lg ${titleColor}`}>{company}</h3>
                <p className="italic text-stone-300 text-sm">{role}</p>
                <p className="text-xs text-stone-400">{period} | {mode}</p>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc pl-5 space-y-2">
                {description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            {/* Optional Links */}
            {links && links.length > 0 && (
                <>
                    <Divider />
                    <div className="flex flex-wrap gap-2 pt-1">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className={tagStyle}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
