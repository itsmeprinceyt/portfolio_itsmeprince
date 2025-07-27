"use client";
import Image from "next/image";
import { SkillIconProps } from "../../types/SkillIcon.type";

export default function SkillIconTag({ name, file }: SkillIconProps) {
    return (
        <div className="relative inline-flex items-center gap-2 rounded-md border border-neutral-700/20 bg-white p-2 text-sm text-stone-700 shadow-lg shadow-white/20 transition-all ease-in-out duration-150 group">
            {/* Small logo inside the tag */}
            <span className="relative shrink-0 w-6 h-6">
                <Image
                    src={`/logo/${file}`}
                    alt={name}
                    fill
                    className="object-contain"
                    sizes="20px"
                />
            </span>

            <span className="whitespace-nowrap">{name}</span>

            {/* Big logo on hover */}
            <div className="pointer-events-none bg-white border border-neutral-700/20 p-2 rounded-lg absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-lg shadow-white/20 animate-bounce">
                <div className="relative w-12 h-12">
                    <Image
                        src={`/logo/${file}`}
                        alt={name}
                        fill
                        className="object-contain"
                        sizes="64px"
                    />
                </div>
            </div>
        </div>
    );
}
