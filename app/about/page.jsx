import Image from "next/image";

export default function Home() {
    return (
        <div className="">
            <div className="flex justify-center items-center min-h-screen top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  px-10 ">
                <div className="text-white p-2 flex flex-col gap-10 items-start sm:justify-center sm:items-center">
                    <div className="flex flex-col sm:items-center">
                        <div className=" text-[80px] font-bold leading-[80px] ">
                            About Me
                        </div>
                        <div className="font-extralight ">Hello! I&apos;m Mohd Uvaish, also known as ItsMe Prince. I'm currently pursuing a Bachelor&apos;s Degree in Computer Applications while honing my Full Stack Development skills. I&apos;m passionate about continuous learning and personal growth. I also run a YouTube channel where I share a diverse range of content, from gaming to coding. Additionally, I have expertise in Adobe Premiere Pro and Photoshop. If you find my work interesting, let&apos;s connect and grow together!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
