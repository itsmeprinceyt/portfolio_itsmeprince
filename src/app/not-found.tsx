"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import DynamicIsland from "./(components)/DynamicIsland";
import PageWrapper from "./(components)/PageWrapper";
import { REMOVEHASH_TIMEOUT } from "../utility/utils";

export default function NotFound() {
    const router = useRouter();

    const handleRoute = useCallback((hash?: string) => {
        const base = "/";
        const fullPath = hash ? `${base}#${hash}` : base;
        router.push(fullPath);

        if (hash) {
            setTimeout(() => {
                window.history.replaceState(null, "", base);
            }, REMOVEHASH_TIMEOUT);
        }
    }, [router]);

    const buttons = [
        { label: "/", onClick: () => handleRoute() },
        { label: "/about", onClick: () => handleRoute("about") },
        { label: "/skills", onClick: () => handleRoute("skills") },
        { label: "/projects", onClick: () => handleRoute("projects") },
    ];

    return (
        <>
            <DynamicIsland buttons={buttons} />
            <PageWrapper>
                <div
                    className="flex flex-col items-center justify-center gap-5 h-screen text-center p-4 text-white select-none"
                >
                    <h1
                        id="notfound-title"
                        className="text-5xl font-bold mb-4 animate-spin-slow"
                    >
                        404
                    </h1>
                    <p className="text-sm text-white/70">
                        Oops! The page you are looking for does not exist.
                    </p>
                </div>
            </PageWrapper>
        </>
    );
}
