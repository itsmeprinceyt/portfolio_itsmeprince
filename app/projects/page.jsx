import Footer from "..//(components)/Footer.jsx";
import ProjectCard from "..//(components)/ProjectCard.jsx";

export default function Projects() {
    return (
        <>
            <div className="">
                <div className="flex justify-center items-center min-h-screen top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-10 pt-[100px] pb-[60px] sm:pt-[80px] sm:pb-[50px]">
                    <div className="bg-neutral-950/30 rounded-md text-white w-max h-max p-3 grid grid-cols-1 gap-2 items-start sm:grid-cols-1 sm:justify-center sm:items-center">
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                            <ProjectCard
                                ProjectName="Online Sales Admin Portal"
                                ProjectDescription="The online sales admin portal, built with ExpressJS, EJS, and MongoDB, efficiently collects and stores customer purchase information. Admins can view and edit purchase details, including date, cost, payment status, purchase status, and items purchased."
                                Link1={{ available: false, url: "" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: true, url: "https://github.com/itsmeprinceyt/itsmeprince-shop-with-db" }}
                                Tags={["NodeJS","ExpressJS","EJS","MongoDB"]}
                            />
                            <ProjectCard
                                ProjectName="E-Drive"
                                ProjectDescription="This platform offers a sophisticated collection of resources tailored to support your academic journey. You'll find self written notes of BCA IVth Semester as well as the notes that are being taught in the institute that I'm currently studying in!"
                                Link1={{ available: true, url: "https://itsmeprinceyt.github.io/e-drive/index.html" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: true, url: "https://github.com/itsmeprinceyt/e-drive" }}
                                Tags={["HTML", "CSS","Javascript"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />
                            <ProjectCard
                                ProjectName="ABC"
                                ProjectDescription="This is a project"
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: false, url: "" }}
                                Tags={["NextJS", "TailwindCSS"]}
                            />


                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
