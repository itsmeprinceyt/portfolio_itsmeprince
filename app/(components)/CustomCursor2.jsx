"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const cursor = document.querySelector("#cursorBlob");
        const links = document.querySelectorAll(".nav__link");

        const updateCursor = (e) => {
            const blobWidth = cursor.offsetWidth / 2;
            const blobHeight = cursor.offsetHeight / 2;

            setCursorPos({
                x: e.clientX - blobWidth,
                y: e.clientY + window.scrollY - blobHeight,
            });
        };

        const setCursorHover = () => setHovering(true);
        const removeCursorHover = () => setHovering(false);

        document.addEventListener("mousemove", updateCursor);
        links.forEach((link) => link.addEventListener("mouseover", setCursorHover));
        links.forEach((link) => link.addEventListener("mouseleave", removeCursorHover));

        return () => {
            document.removeEventListener("mousemove", updateCursor);
            links.forEach((link) => link.removeEventListener("mouseover", setCursorHover));
            links.forEach((link) => link.removeEventListener("mouseleave", removeCursorHover));
        };
    }, []);

    return (
        <div
            id="cursorBlob"
            className={`fixed top-0 left-0 bg-black rounded-full pointer-events-none transition-transform duration-100 ease-linear ${hovering ? "scale-150" : ""}`}
            style={{
                width: "10px",
                height: "10px",
                transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
                transition: "transform 0.08s ease-in-out",
            }}
        />
    );
};

export default CustomCursor;
