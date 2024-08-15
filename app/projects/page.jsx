import Footer from "..//(components)/Footer.jsx";
import ProjectCard from "..//(components)/ProjectCard.jsx";

export default function Projects() {
    return (
        <>
            <div className="">
                <div className="flex justify-center items-center min-h-screen top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-10 pt-[100px] pb-[60px] sm:pt-[40px] sm:pb-0">
                    <div className="bg-neutral-950/30 rounded-md text-white w-max h-max p-3 grid grid-cols-1 gap-2 items-start sm:grid-cols-1 sm:justify-center sm:items-center">
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-4">
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: false, url: "" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS", "MongoDB"]}
                            />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
