"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import PageWrapper from "./(components)/PageWrapper";
import ProfileInfoTag from './(components)/ProfileRelated/ProfileInfoTag';
import { ProfileInfoTag_Button_CSS } from "./(components)/ProfileRelated/ButtonCSS";
import { CodingProjectsLink, GitHubLink, LinkedInLink, ProfilePicture, YouTubeLink } from '../utility/main.util';
import ProfileSkillInfo from './(components)/ProfileRelated/ProfileSkillInfoTag';
import Divider from './(components)/Components/Divider';
import SectionTitle from './(components)/ProfileRelated/SectionTitle';
import FileList from './(components)/ResumeFileIcons';
import MailSVG from './(components)/SVG/Mail';
import { experiences } from "../utility/Experience.util";

export default function AboutPage() {
  const [showDownloadMenu, setShowDownloadMenu] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const downloadMenuRef = useRef<HTMLDivElement | null>(null);
  const emailURL: string = "https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=${encodeURIComponent(email)}";

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

  useEffect(() => {
    fetch('/api/mail')
      .then(res => res.json())
      .then(data => setEmail(data.email));
  }, []);

  const handleDownloadMenu = () => {
    setShowDownloadMenu(!showDownloadMenu);
  };

  return (
    <>
      <PageWrapper>
        {/* Download CV Menu */}
        {showDownloadMenu && (
          <div className="fixed z-20 top-0 left-0 w-screen h-screen bg-black/80 flex items-center justify-center">
            <div ref={downloadMenuRef} className="relative bg-white rounded-md p-5 flex flex-col gap-5 max-h-[80vh] overflow-y-auto">
              <p className="text-xs tracking-widest p-2 rounded-md hover:scale-105 animate-pulse select-none">/download-cv-in . . .</p>
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
              {/* Resume Download List */}
              <FileList />
            </div>
          </div>
        )}


        {/* Main Div */}
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center gap-2">
            {/* Image*/}
            <Image
              className="max-w-45 rounded-full hover:scale-105 shadow-xl/20 hover:shadow-xl/40 shadow-neutral-700"
              src={ProfilePicture}
              width={3000}
              height={3000}
              alt="Profile"
              priority
              draggable={false}
            />

            {/* Names */}
            <div className="flex-col flex items-center text-white font-extralight">
              <span className="text-4xl text-glow-white">Mohd Uvaish</span>
              <div>
                <span className="text-[10px] animate-pulse text-glow-white">A.K.A</span>
                <span className="pl-4 text-glow-white">ItsMe Prince</span>
              </div>
            </div>

          </div>
          {/* Profile Info Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ProfileInfoTag text="Uttar Pradesh, India" name="Location" />
            <ProfileInfoTag text="LinkedIn" name="LinkedIn" href={LinkedInLink} />
            <ProfileInfoTag text="GitHub" name="GitHub" href={GitHubLink} />
            <ProfileInfoTag text="YouTube" name="YouTube" href={YouTubeLink} />
          </div>
          <Divider />
          {/* Download CV & Mail */}
          <div className="flex flex-wrap items-center justify-center gap-5 pulse-slow">

            {/* Download CV */}
            <button onClick={handleDownloadMenu} className={`${ProfileInfoTag_Button_CSS} h-9 relative flex items-center gap-2`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
              </span>
              Download CV
            </button>

            {/* Mail */}
            <div className="hover:scale-105 relative">
              <button
                onClick={() => {
                  if (email) {
                    window.open(
                      emailURL,
                      '_blank'
                    );
                  }
                }}
                disabled={!email}
                className={`${ProfileInfoTag_Button_CSS} h-9 ${email ? `opacity-100` : `opacity-20`}`}>
                <MailSVG />
                Mail
              </button>
            </div>

          </div>

          <Divider />

          <div className="grid grid-cols-1 gap-10 p-5 text-stone-300 font-extralight">
            {/* About Section */}
            <div className="flex flex-col md:flex-row relative">
              <SectionTitle title="About" href="/about" />
              <div className="text-xs max-w-[500px] p-3 border border-stone-50/20 rounded-lg tracking-widest leading-8">
                <p>{`I'm Mohd Uvaish, a passionate MERN Full Stack & Software Developer.`}</p>
                <Divider />
                <p>{`I also run a `}
                  <Link href={YouTubeLink} target="_blank" rel="noopener noreferrer">
                    YouTube channel
                  </Link>
                  {` where I showcase all kinds of content, from `}
                  <Link href={CodingProjectsLink} target="_blank" rel="noopener noreferrer">
                    Coding
                  </Link>
                  {` to Gaming.`}
                </p>
              </div>
            </div>

            {/* Experience Section */}
            {true && (
              <div className="flex flex-col md:flex-row relative">
                <SectionTitle title="Experience" href="/experience" />

                <div className="flex flex-col p-5 gap-5 w-full border rounded-lg border-stone-50/20">
                  {experiences.slice(0, 3).map((exp, idx) => (
                    <Link
                      key={idx}
                      href="/experience"
                      className="flex justify-between items-start text-stone-300"
                    >
                      {/* Left Side: Company + Role */}
                      <div className="flex flex-col flex-1 min-w-0">
                        <h3 className="text-sm truncate">
                          {exp.company} - {exp.role}
                        </h3>
                        <p className="text-stone-500 text-xs font-extralight">{exp.mode}</p>
                      </div>

                      {/* Right Side: Period */}
                      <span className="text-stone-400 text-xs whitespace-nowrap ml-2">
                        {exp.period}
                      </span>
                    </Link>
                  ))}

                  {experiences && experiences.length > 3 ? (
                    <div className="text-xs">
                      <Link
                        href="/experience"
                        className="text-cyan-500 hover:text-cyan-700 transition"
                        aria-label={`View the remaining ${experiences.length - 3} experiences`}
                      >
                        View the remaining {experiences.length - 3} experiences &raquo;
                      </Link>
                    </div>
                  ) : null}

                </div>
              </div>
            )}

            {/* Education Section */}
            <div className="flex flex-col md:flex-row relative">
              <SectionTitle title="Education" href="/education" />
              <div className="text-xs max-w-[500px] p-3 border border-stone-50/20 rounded-lg tracking-widest leading-5">
                <p className="text-base font-semibold">{`B.C.A ( Bachelor's Of Computer Applcation`}</p>
                <p className="select-text text-[10px]">{`Signa Institute Of Professional Studies - Uttar Pradesh, India`}</p>
                <p className="text-emerald-500 text-[10px]">{`CGPA - 7.80`}</p>
                <ul className="list-disc pl-5 py-2 space-y-3">
                  <li>Developed a <Link href={`/projects/online-sales-admin-portal`}><span className="text-amber-300">{`Online Sales Adminstrator Portal`}</span></Link> with CRUD Operations.</li>
                  <li>Developed a full-stack web application using Express.js, MongoDB, and EJS.js</li>
                  <li>Designed UI/UX and implementented a RESTful API for the application.</li>
                  <li>Conducted manual to identify and resolve bugs and improved the application.</li>
                </ul>
              </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col md:flex-row relative">
              <SectionTitle title="Skills" href="/skills" />
              <div className="text-xs max-w-[500px] p-3 border border-stone-50/20 rounded-lg tracking-widest leading-5 space-y-3">
                <div className="font-bold flex flex-wrap items-center gap-2">
                  <span >Language:</span>
                  <ProfileSkillInfo text="C" />
                  <ProfileSkillInfo text="C++" />
                  <ProfileSkillInfo text="Python" />
                  <ProfileSkillInfo text="Typescript" />
                </div>
                <Divider />
                <div className="font-bold flex flex-wrap items-center gap-2">
                  <span >Frontend:</span>

                  <ProfileSkillInfo text="React.js" />
                  <ProfileSkillInfo text="Bootstrap" />
                  <ProfileSkillInfo text="TailwindCSS" />
                </div>
                <Divider />
                <div className="font-bold flex flex-wrap items-center gap-2">
                  <span >Backend:</span>

                  <ProfileSkillInfo text="Express.js" />
                  <ProfileSkillInfo text="Next.js" />
                </div>
                <Divider />
                <div className="font-bold flex flex-wrap items-center gap-2">
                  <span >Database:</span>

                  <ProfileSkillInfo text="MySQL" />
                  <ProfileSkillInfo text="MongoDB" />
                </div>
                <Divider />
                <div className="font-bold flex flex-wrap items-center gap-2">
                  <span >Tools:</span>

                  <ProfileSkillInfo text="Figma" />
                  <ProfileSkillInfo text="Adobe Photoshop" />
                  <ProfileSkillInfo text="VS Code" />
                  <ProfileSkillInfo text="Postman" />
                  <ProfileSkillInfo text="Git" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </PageWrapper>
    </>
  );
}