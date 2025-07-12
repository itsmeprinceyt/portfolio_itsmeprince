"use client";
import { useRouter } from 'next/navigation';
import DynamicIsland from "./(components)/DynamicIsland";
import PageWrapper from "./(components)/PageWrapper";

export default function NotFound() {
    const router = useRouter();
    return (
        <>
            <DynamicIsland
                buttons={[
                    { label: "/", onClick: () => router.push("/") },
                    {
                        label: "/about",
                        onClick: () => {
                            router.push("/#about");
                            setTimeout(() => {
                                window.history.replaceState(null, "", "/");
                            }, 500);
                        },
                    },
                    {
                        label: "/skills",
                        onClick: () => {
                            router.push("/#skills");
                            setTimeout(() => {
                                window.history.replaceState(null, "", "/");
                            }, 500);
                        },
                    },
                    {
                        label: "/projects",
                        onClick: () => {
                            router.push("/#projects");
                            setTimeout(() => {
                                window.history.replaceState(null, "", "/");
                            }, 500);
                        },
                    },
                ]}
            />

            <PageWrapper>
                <div className="flex flex-col items-center justify-center gap-5 h-screen text-center p-4 text-white pointer-events-none">
                    <h1 className="text-5xl font-bold mb-4 animate-spin-slow">4O4</h1>
                    <p className="text-xs mb-8 text-white">
                        Oops! The page you are looking for does not exist.
                    </p>
                </div>
            </PageWrapper>
        </>
    );
}
