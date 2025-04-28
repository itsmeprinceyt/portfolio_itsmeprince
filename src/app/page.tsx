"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from "./(components)/PageWrapper";
import MainWindow from "./(components)/MainWindow";
import { fileIcons } from "../utility/resumeFiles";

export default function Home() {
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const downloadMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(target)) {
        setShowDownloadMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownloadMenu = () => {
    setShowDownloadMenu(!showDownloadMenu);
  }

  return (
    <PageWrapper>
      <MainWindow>

        {showDownloadMenu && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">

            <div ref={downloadMenuRef} className="relative z-20 bg-white rounded-md p-5 flex flex-col gap-5">

              <p className="text-xs tracking-widest px-2">Download CV in . . .</p>

              <button
                className="absolute top-2 right-2 hover:scale-125"
                onClick={handleDownloadMenu}>
                <Image
                  className="invert w-[10px]"
                  src={'/icons/cross.png'}
                  width={50}
                  height={50}
                  alt="cross"
                />
              </button>

              {fileIcons.map((file) => (
                <Link
                  key={file.fileTypeName}
                  href={file.href}
                  download
                  className="flex items-center gap-5 text-black hover:bg-black hover:text-white px-4 py-1 rounded-md tracking-widest"
                >
                  {file.icon}
                  <span>{file.label}</span>
                </Link>
              ))}
              
            </div>

          </div>
        )}

        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col items-center text-cneter">
            <p className="shine-effect text-8xl max-[780px]:text-6xl max-[600px]:text-5xl max-[420px]:text-4xl text-center font-bold bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 text-transparent bg-clip-text text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">I&apos;m Mohd Uvaish</p>
            <p className="text-xl max-[600px]:text-xs font-extralight text-white text-shadow-lg/10 text-shadow-white hover:text-shadow-lg/20">Also known as <span className="text-shadow-neutral-500 font-bold bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500 text-transparent bg-clip-text">ItsMe Prince</span></p>
          </div>
          <button onClick={handleDownloadMenu} className="pulse-slow bg-gradient-to-r from-neutral-800 to-neutral-900 px-4 py-2 rounded-full text-neutral-300 border border-neutral-700 hover:border-neutral-400 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/20">
            Download CV
          </button>
        </div>
      </MainWindow>
    </PageWrapper>
  );
}
