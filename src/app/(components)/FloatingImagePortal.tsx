"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FloatingImageProps } from "../../types/FloatingImage.type";

export default function FloatingImagePortal({
    src,
    visible,
    getCursorPos,
}: FloatingImageProps) {
    const imageRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<string[]>([src]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (!visible) return;

        const fetchImages = async () => {
            try {
                const match = src.match(/\/projects\/([^/]+)\//);
                const projectId = match ? match[1] : null;

                if (!projectId) {
                    setImages([src]);
                    return;
                }

                const res = await fetch(`/api/getProjectImages?projectId=${projectId}`);
                const data = await res.json();

                if (Array.isArray(data.images) && data.images.length > 0) {
                    setImages(data.images);
                } else {
                    setImages([src]);
                }
            } catch (error) {
                console.error("Failed to fetch project images:", error);
                setImages([src]);
            }
        };

        fetchImages();
    }, [src, visible]);

    useEffect(() => {
        if (visible && images.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 3000);
        } else {
            setCurrentIndex(0);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [visible, images]);

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
            className="fixed z-[9999] aspect-video w-[350px] pointer-events-none rounded-xl overflow-hidden shadow-2xl"
            style={{
                top: 60,
                left: 0,
                transform: "translate(-9999px, -9999px)",
                transition: "transform 0.03s linear",
            }}
        >
            <Image
                src={images[currentIndex]}
                alt="Preview"
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "top",
                }}
            />
        </div>,
        document.body
    );
}
