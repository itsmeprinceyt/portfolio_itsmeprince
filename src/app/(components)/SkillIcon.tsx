"use client";
import Image from "next/image";
import { SkillIconProps } from '../../types/SkillIcon.type';

export default function SkillIcon({ name, file }: SkillIconProps) {
    return (
        <div className="relative group flex flex-col items-center justify-center gap-4 w-16 h-16 p-4 rounded-md bg-white text-black hover:scale-110 transition-transform duration-300 shadow-xl/10 hover:shadow-xl/20 shadow-white">
            <Image
                src={`/logo/${file}`}
                alt={name}
                width={35}
                height={35}
                className="object-contain rounded-md"
            />

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:flex px-2 py-1 bg-black border border-neutral-800 text-white text-[8px] rounded-md whitespace-nowrap z-10">
                {name}
            </div>
        </div>
    );
}