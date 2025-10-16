"use client";
import { useState } from "react";
import Image from "next/image";
import { SpinnerStone } from "./Components/Spinner";
import { ProjectDefaultImage } from "../../utils/main.util";
import { BannerImageProps } from "../../types/ProjectBannerImage.type";

export default function BannerImage({
    src,
    alt,
    fallback = ProjectDefaultImage
}: BannerImageProps) {
    const [loaded, setLoaded] = useState(false);

    const finalSrc = Array.isArray(src) ? src[0] : src || fallback;
    const positionClass = finalSrc === fallback ? "object-center" : "object-top";

    return (
        <div className="relative w-full h-56 rounded-tr-md rounded-tl-md overflow-hidden bg-white">
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <SpinnerStone />
                </div>
            )}

            <Image
                src={finalSrc}
                alt={alt}
                width={3000}
                height={2000}
                onLoad={() => setLoaded(true)}
                className={`object-cover ${positionClass} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 768px) 100vw, 600px"
            />
        </div>
    );
}
