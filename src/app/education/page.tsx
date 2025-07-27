"use client";
import Link from "next/link";
import PageWrapper from "../(components)/PageWrapper";
import Divider from '../(components)/Components/Divider';

export default function Education() {

    return (
        <PageWrapper>
            {/* Main Div */}
            <div className="flex flex-col items-center justify-center gap-5 text-stone-300 p-5">
                <div className="flex flex-col items-center px-5  text-4xl text-glow-white text-stone-300 w-full">Education

                </div>
                <Divider />
                {/* Education Section */}
                <div className="flex flex-col items-center gap-5 relative">
                    <div className="text-xs max-w-[500px] border border-stone-600/20 p-5 rounded-lg tracking-widest leading-5">
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
            </div>
        </PageWrapper>
    );
} 