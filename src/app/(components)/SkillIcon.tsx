"use client";
import Image from "next/image";
import { SkillIconProps } from '../../types/SkillIcon.type';

export default function SkillIcon({ name, file }: SkillIconProps) {
    return (
        <div className="relative group w-full h-full">
            <Image
                src={`/logo/${file}`}
                alt={name}
                fill
                className="object-contain p-1.5"
            />

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-[10px] text-white bg-black bg-opacity-80 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap">
                {name}
            </div>
        </div>
    );
}
