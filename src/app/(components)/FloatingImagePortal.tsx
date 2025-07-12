"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FloatingImageProps } from "../../types/FloatingImage.type";

export default function FloatingImagePortal({ src, visible, getCursorPos }: FloatingImageProps) {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frameId: number;

        const animate = () => {
            const { x, y } = getCursorPos();
            if (imageRef.current) {
                imageRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
            }
            frameId = requestAnimationFrame(animate);
        };

        if (visible) frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [visible, getCursorPos]);

    if (!visible) return null;

    return createPortal(
        <div
            ref={imageRef}
            className="fixed z-[9999] aspect-video w-[400px] sm:w-[500px] md:w-[600px] pointer-events-none rounded-xl overflow-hidden shadow-2xl"
            style={{
                top: 120,
                left: 0,
                transform: "translate(-9999px, -9999px)",
                transition: "transform 0.03s linear",
            }}
        >
            <Image
                src={src}
                alt="Preview"
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "top"
                }}
            />
        </div>,
        document.body
    );
}
