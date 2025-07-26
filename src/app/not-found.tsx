"use client";
import PageWrapper from "./(components)/PageWrapper";

export default function NotFound() {
    return (
        <>
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
