"use client";
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from "./(components)/PageWrapper";
import ProfilePic from "../assets/pfp1.jpg";
import ProfileInfoTag from './(components)/ProfileRelated/ProfileInfoTag';
import { CodingProjectsLink, GitHubLink, LinkedInLink, YouTubeLink } from '../utility/utils';
import ProfileSkillInfo from './(components)/ProfileRelated/ProfileSkillInfoTag';
import Divider from './(components)/Components/Divider';

export default function AboutPage() {
  const Title = ({ title, href }: { title: string, href: string }) => {
    return (
      <div className=" text-xl w-full max-w-40 flex gap-2 p-2">
        {title}
        <Link href={href} className="invert">
          <Image
            src="/icons/open.svg"
            height={15}
            width={15}
            alt="Open"
          />
        </Link>
      </div>
    )
  };

  return (
    <>
      <PageWrapper>
        {/* Main Div */}
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center gap-2">
            {/* Image*/}
            <Image
              className="max-w-45 rounded-full hover:scale-105 shadow-xl/20 hover:shadow-xl/40 shadow-neutral-700"
              src={ProfilePic}
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


          <div className="grid grid-cols-1 gap-5 p-5 text-stone-300 font-extralight">
            {/* About Section */}
            <div className="flex relative">
              <Title title="About" href="/about" />
              <div className="text-xs max-w-[500px] p-3 border border-stone-50/20 rounded-lg tracking-widest leading-5">
                <p>{`I'm Mohd Uvaish, a passionate MERN Full Stack Dev & Software Developer`}</p>
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
            <div className="flex relative">
              <Title title="Experience" href="/experience" />
              <div className="text-xs w-[500px] p-3 border border-stone-50/20 rounded-lg tracking-widest leading-5">
                <p>{`I'm Mohd Uvaish, a passionate MERN Full Stack Dev & Software Developer`}</p>
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
            {/* Education Section */}
            <div className="flex relative">
              <Title title="Education" href="/education" />
              <div className="text-xs w-[500px] p-3 border border-stone-50/20 rounded-lg tracking-widest leading-5">
                <h1 className="text-base font-semibold">{`B.C.A ( Bachelor's Of Computer Applcation`}</h1>
                <p className="select-text">{`Signa Institute Of Professional Studies - Uttar Pradesh, Kanpur`}</p>
                <p className="">{`CGPA - 7.80`}</p>
                <ul className="list-disc pl-5 py-2">
                  <li>Developed a Online Sales Adminstrator Portal with CRUD Operations.</li>
                  <li>Developed a full-stack web application using Express.js, MongoDB, and EJS.js</li>
                  <li>Designed UI/UX and implementented a RESTful API for the application.</li>
                  <li>Conducted manual and automated testing to identify and resolve defects.</li>
                </ul>
              </div>
            </div>

            {/* Skills Section */}
            <div className="flex relative">
              <Title title="Skills" href="/skills" />
              <div className="text-xs w-[500px] p-3 border border-stone-50/20 rounded-lg tracking-widest leading-5 space-y-3">
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

                  <ProfileSkillInfo text="React" />
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