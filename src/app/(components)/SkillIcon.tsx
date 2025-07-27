"use client";
import Image from "next/image";
import { SkillIconProps } from "../../types/SkillIcon.type";
import { useEffect, useRef, useState } from "react";

export default function SkillIcon({ name, file }: SkillIconProps) {
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const [align, setAlign] = useState<"center" | "left" | "right">("center");

    useEffect(() => {
        const checkPosition = () => {
            if (!tooltipRef.current) return;
            const rect = tooltipRef.current.getBoundingClientRect();
            if (rect.left < 0) setAlign("left");
            else if (rect.right > window.innerWidth) setAlign("right");
            else setAlign("center");
        };
        checkPosition();
        window.addEventListener("resize", checkPosition);
        return () => window.removeEventListener("resize", checkPosition);
    }, []);

    return (
        <div
            className="relative group w-full h-full flex items-center justify-center select-none"
            aria-label={name}
        >
            <Image
                src={`/logo/${file}`}
                alt={name}
                fill
                className="object-contain p-1.5"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Tooltip */}
            <span
                ref={tooltipRef}
                className={`pointer-events-none absolute -top-8 whitespace-nowrap rounded bg-white text-black border border-stone-50/20 shadow-lg shadow-white/50 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-150 animate-bounce
                ${align === "center" ? "left-1/2 -translate-x-1/2" : ""}
                ${align === "left" ? "left-0 translate-x-0" : ""}
                ${align === "right" ? "right-0 translate-x-0" : ""}`}
            >
                {name}
            </span>
        </div>
    );
}
