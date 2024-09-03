"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const resumeFiles = [
    { href: "/portfolio/Mohd Uvaish - Resume.docx", fileTypeName: "docx" },
    { href: "/portfolio/Mohd Uvaish - Resume.pdf", fileTypeName: "pdf" },
    { href: "/portfolio/Mohd Uvaish - Resume.gdoc", fileTypeName: "gdoc" },
    { href: "/portfolio/Mohd Uvaish - Resume.md", fileTypeName: "md" },
    { href: "/portfolio/Mohd Uvaish - Resume.txt", fileTypeName: "txt" },
    { href: "/portfolio/MohdUvaishResume.html", fileTypeName: "html" },
  ];


  const [toggle, setToggle] = useState(false);
  const toggleDownloadMenu = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }
  return (
    <div className="">
      <div className="flex justify-center items-center min-h-screen top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  px-10 ">
        {toggle && (
          <div className="absolute z-20 left-0 right-0 bg-black/80 min-h-screen rounded-xl flex justify-center items-center">
            <div className="relative bg-black border-1 border-white/20 text-white flex flex-col justify-center items-center p-10 gap-10 rounded-xl shadow-xl shadow-white/20">
              <button
              onClick={toggleDownloadMenu}
              className="absolute top-5 right-5 hover:scale-125 transition-all ease-in-out">
                <Image src="/cross.png" width={10} height={20} alt="Close"/>
              </button>
              <div className="text-4xl font-bold">CV File Type</div>
              <div className="grid grid-cols-3 gap-5">
                {resumeFiles.map((file, index) => (
                  <Link
                    className="border-2 border-white uppercase hover:text-black hover:bg-white hover:shadow-xl hover:shadow-white/40 hover:scale-110 p-3 rounded-xl text-center text-xs transition-all ease-in-out"
                    key={index}
                    href={file.href}
                    target="_blank"
                    download
                  >
                    {file.fileTypeName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="text-white p-2 flex flex-col gap-10 items-start sm:justify-center sm:items-center">
          <div className="flex flex-col sm:items-center">
            <div className=" text-[80px] font-extrabold leading-[80px] ">
              I&apos;m Mohd Uvaish
            </div>
            <div className="font-extralight ">Also Known as <span className="font-extrabold">ItsMe Prince</span></div>
          </div>
          <button onClick={toggleDownloadMenu} className="bg-black px-6 py-3 rounded-full shadow-2xl border-2 shadow-white/30 hover:bg-white hover:text-black transition-all animate-pulse on-hover-pulse hover:shadow-white/80">Download CV</button>
        </div>
      </div>
    </div>
  );
}
