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

    if (!matched) return notFound();

    return (
        <PageWrapperNormal>
            <div className="w-full max-w-2xl text-stone-700 p-5 select-text">
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
                {/* Header */}
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
                                    <div className="flex flex-col gap-2">
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
        </PageWrapperNormal>
    );
}