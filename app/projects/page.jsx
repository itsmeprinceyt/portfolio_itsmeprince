import Footer from "..//(components)/Footer.jsx";
import ProjectCard from "..//(components)/ProjectCard.jsx";

export default function Projects() {
    return (
        <div>
            <div className="">
                <div className="flex justify-center items-center min-h-screen top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-10 pt-[100px] pb-[60px] sm:pt-[80px] sm:pb-[50px]">
                    <div className="bg-neutral-950/30 rounded-md text-white w-max h-max p-3 grid grid-cols-1 gap-2 items-start sm:grid-cols-1 sm:justify-center sm:items-center">
                        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
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
                                ProjectName="Statistics Mean Calculator"
                                ProjectDescription="The online statistics mean calculator, built with HTML, CSS, and JavaScript, efficiently calculates means for individual, discrete, and continuous data sets. It features a user-friendly interface designed for quick and precise calculations."
                                Link1={{ available: true, url: "https://itsmeprinceyt.github.io/StatisticsCalculator/index.html" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: true, url: "https://github.com/itsmeprinceyt/StatisticsCalculator" }}
                                Tags={["HTML", "CSS","Javascript"]}
                            />
                            <ProjectCard
                                ProjectName="ItsMe Prince Discord Bot"
                                ProjectDescription="The Discord bot, built with Node.js and discord.js library, enables seamless interaction within the Discord application. Users can execute commands to perform simple mathematical calculations, making the workspace more productive and stress-free"
                                Link1={{ available: false, url: "" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: true, url: "https://github.com/itsmeprinceyt/itsmeprince-discord-bot-js" }}
                                Tags={["NodeJS"]}
                            />
                            <ProjectCard
                                ProjectName="SOFI Guild Manager"
                                ProjectDescription="The Sofi Guild Manager, developed using Python, streamlines guild management by tracking raid activities and earned rewards for members. It securely monitors withdrawals and elixir balances through encrypted data, ensuring protection and smooth operation within the guild environment."
                                Link1={{ available: false, url: "" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: true, url: "https://github.com/itsmeprinceyt/Sofi_Guild_Manager_Private" }}
                                Tags={["Python"]}
                            />
                            <ProjectCard
                                ProjectName="Currency Exchange"
                                ProjectDescription="The Currency Exchange application, developed with Next.js, allows users to convert currencies using real-time exchange rates from an API. Key features include live currency conversion and dynamic rate fetching via the FreeCurrencyAPI."
                                Link1={{ available: true, url: "https://currency-exchange-lemon-ten.vercel.app/" }}
                                Link2={{ available: true, url: "https://www.youtube.com/watch?v=hXyu8DO7SQ8" }}
                                Link3={{ available: true, url: "https://github.com/itsmeprinceyt/currency_exchange" }}
                                Tags={["NextJS","TailwindCSS","FreecurrencyAPI"]}
                            />
                            <ProjectCard
                                ProjectName="Reflex Time"
                                ProjectDescription="Reflex Time is a fast-paced, interactive game where your goal is to hit the random numbers displayed on the screen within 60 seconds. Try to achieve the highest score possible by clicking on the correct numbers as quickly as you can!"
                                Link1={{ available: true, url: "https://reflex-time.vercel.app/" }}
                                Link2={{ available: false, url: "" }}
                                Link3={{ available: true, url: "https://github.com/itsmeprinceyt/reflex-time" }}
                                Tags={["NextJS","TailwindCSS"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
