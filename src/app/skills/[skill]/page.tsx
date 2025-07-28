"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { use } from "react";
import { notFound } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";
import PageWrapperNormal from "../../(components)/PageWrapper";

import devSkills from "../../../utility/devSkills";
import creativeTools from "../../../utility/creative-tools";
import devTools from "../../../utility/devTools";
import hobbiesInterests from "../../../utility/hobbiesInterests";
import personalSoftSkills from "../../../utility/personalSoftSkills";
import { SkillInterface } from "../../../types/SkillInterface.type";
import { SpinnerWhite } from "../../(components)/Components/Spinner";
import Divider from "../../(components)/Components/Divider";
import { SKILL_PAGE_LOCKDOWN } from "@/utility/utils";

const skillCategories = [
    { name: "dev-skills", data: devSkills },
    { name: "creative-tools", data: creativeTools },
    { name: "dev-tools", data: devTools },
    { name: "hobbies-interests", data: hobbiesInterests },
    { name: "personal-soft-skills", data: personalSoftSkills }
];

export default function SkillPage({ params }: { params: Promise<{ skill: string }> }) {
    const { skill: rawSkill } = use(params);
    const [matched, setMatched] = useState<{
        skill: SkillInterface;
        category: string;
    } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!rawSkill) return;

        const decodedSkill = decodeURIComponent(rawSkill).replace(/%2F/g, " ").trim();
        const escapeRegExp = (str: string) =>
            str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        const regex = new RegExp(escapeRegExp(decodedSkill), "i");
        for (const { name, data } of skillCategories) {
            const found = data.find((item) => regex.test(item.fullName));
            if (found) {
                setMatched({ skill: found, category: name });
                break;
            }
        }

        setLoading(false);
    }, [rawSkill]);

    if (loading) {
        return (
            <PageWrapperNormal>
                <div className="flex flex-col gap-5 items-center justify-center">
                    <div className="flex gap-2 items-center justify-center">
                        <SpinnerWhite />
                        <span className="w-1/2 md:w-full text-center text-xs text-white">
                            Loading ...
                        </span>
                    </div>
                </div>
            </PageWrapperNormal>
        );
    }

    if (SKILL_PAGE_LOCKDOWN) {
        return (
            <PageWrapperNormal>
                <div className="flex flex-col gap-5 items-center justify-center">
                    <div className="flex gap-2 items-center justify-center">
                        <span className="w-1/2 md:w-full text-center text-xs text-white">
                            You cannot access any resources right now.
                        </span>
                    </div>
                </div>
            </PageWrapperNormal>
        )
    }

    if (!matched) return notFound();

    return (
        <PageWrapperNormal>
            <div className="w-full max-w-2xl text-stone-700 p-5 flex flex-col gap-5 select-text relative">
                {/* Last Updated */}
                {matched.skill.date && (
                    <div className="absolute text-white/20 text-[10px] top-0"> Last Updated: {matched.skill.date}
                    </div>
                )}
                {/* Main Body */}
                <div>
                    {/* Header */}
                    <div className="flex items-center justify-between text-lg bg-white py-1 rounded-tr-lg rounded-tl-lg shadow-lg shadow-white/10 hover:shadow-white/20 select-none text-center px-5">
                        <div className="flex items-center justify-center gap-2">
                            <Image
                                src={`/logo/${matched.category}/${matched.skill.file}`}
                                width={500}
                                height={500}
                                alt={matched.skill.fullName}
                                className="w-6 h-6"
                            />
                            <span>{matched.skill.fullName}</span>
                        </div>
                        <Link href="/skills">
                            <RiArrowGoBackFill />
                        </Link>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col text-stone-300">
                        {matched.skill.SkillInfo?.map((infoItem, index) => (
                            <div key={index} className="flex flex-col gap-5 border border-stone-50/20 rounded-bl-lg rounded-br-lg p-5 shadow-2xl shadow-white/10 tracking-widest leading-8">
                                {infoItem.description && (
                                    <div>
                                        <p className="text-[20px] font-bold">Description | My Story</p>
                                        <p className="text-stone-400 text-xs font-extralight">{infoItem.description}</p>
                                    </div>
                                )}

                                {infoItem.Links && infoItem.Links.length > 0 && (
                                    <>
                                        <Divider />
                                        <div className="flex flex-col gap-5">
                                            <div className="text-[10px]">
                                                {`🌻: Resources I've personally have learned from and found valuable.`}<br />
                                                {`🌼: Resources recommended by others that they've found helpful in their learning journey.`}
                                            </div>
                                            <Divider />
                                            <ul className="list-disc pl-5 flex flex-col">
                                                {infoItem.Links.map((link, linkIndex) => (
                                                    <li
                                                        key={linkIndex}
                                                        className="text-xs text-stone-400 border border-white/10 p-2 rounded-lg my-2 shadow-lg shadow-stone-500/10 hover:shadow-stone-500/20"
                                                    >
                                                        {link.linkURL ? (
                                                            <>
                                                                <span>{link.linkName}:</span>{' '}
                                                                <Link
                                                                    href={link.linkURL}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-blue-400 text-[10px] break-all"
                                                                >
                                                                    {link.linkURL}
                                                                </Link>
                                                            </>
                                                        ) : (
                                                            link.linkName
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
                <Divider />
                <div className="p-5 flex flex-col text-stone-400 bg-stone-900/40 border-l-3 border-yellow-500 rounded-tr-lg rounded-br-lg text-xs select-none">
                    {`Pro Tip: Never limit yourself to a single course, platform, or creator. Exploring a variety of resources exposes you to different teaching approaches and ways of thinking — and that can make all the difference in how well you learn.`}
                </div>
                <Divider />
                <div className="p-5 flex flex-col text-stone-400 bg-stone-900/40 border-l-3 border-red-500 rounded-tr-lg rounded-br-lg text-xs select-none">
                    {`Disclaimer: Most of these resources are ones I’ve personally learned from — whether it’s YouTube videos, books, or courses I found helpful along the way. Some may also come from friends or peers who found something awesome and insisted I include it here. I’m just sharing what worked for us, in case it helps you too!`}
                </div>

            </div>
        </PageWrapperNormal>
    );
}