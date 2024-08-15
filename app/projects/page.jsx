import Footer from "..//(components)/Footer.jsx";

export default function Projects() {
    return (
        <>
            <div className="">
                <div className="flex justify-center items-center min-h-screen top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-10 pt-[100px] pb-[60px] sm:pt-[40px] sm:pb-0">
                    <div className="bg-neutral-950/30 rounded-md text-white w-max h-max p-3 grid grid-cols-1 gap-2 items-start sm:grid-cols-1 sm:justify-center sm:items-center">
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-4">

                            <div className="bg-neutral-950 hover:text-black hover:bg-white hover:shadow-white/80 p-4 rounded-md col-span-1 sm:col-span-2 border-2 shadow-2xl shadow-white/20 flex flex-col gap-3">
                                <div className="mb-4">
                                    <h2 className="text-3xl font-bold">Project Name</h2>
                                    <p className="text-[13px] mt-4">This is a project description
                                    </p>
                                </div>
                                <div className="bg-yellow-500 flex justify-start gap-2">
                                    <div>Link</div>
                                    <div>YouTube</div>
                                    <div>GitHub</div>
                                </div>
                                <div className="bg-white rounded-full p-2 flex justify-center items-center gap-2">
                                    <div className="bg-neutral-800 p-2 rounded-full px-3 text-xs" >NextJS</div>
                                    <div className="bg-neutral-800 p-2 rounded-full px-3 text-xs">TailwindCSS</div>
                                    <div className="bg-neutral-800 p-2 rounded-full px-3 text-xs">MongoDB</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
