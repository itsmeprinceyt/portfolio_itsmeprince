"use client";
import Image from "next/image";
import { SkillIconProps } from '../../types/SkillIcon.type';

export default function SkillIcon({ name, file }: SkillIconProps) {
    return (
        <div className="relative group w-full h-full flex items-center justify-center select-none">
            {/* Default Icon */}
            <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200">
                <Image
                    src={`/logo/${file}`}
                    alt={name}
                    fill
                    className="object-contain p-1.5"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Hover Overlay */}
            <div className="bg-white rounded-md p-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center text-center gap-2 z-10">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                    <Image
                        src={`/logo/${file}`}
                        alt={name}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                    />
                </div>
                <p className="mt-1 text-[12px] text-black font-medium break-words w-full px-1">
                    {name}
                </p>
            </div>
        </div>
    );
}
