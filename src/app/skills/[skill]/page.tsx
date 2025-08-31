"use client";
import Image from "next/image";
import Link from "next/link";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FileDown } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { use } from "react";
import { notFound } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";

import PageWrapperNormal from "../../(components)/PageWrapper";
import devSkills from "../../../utility/Skills/devSkills.util";
import creativeTools from "../../../utility/Skills/creative-tools.util";
import devTools from "../../../utility/Skills/devTools.util";
import hobbiesInterests from "../../../utility/Skills/hobbiesInterests.util";
import personalSoftSkills from "../../../utility/Skills/personalSoftSkills.util";
import { SkillInterface } from "../../../types/SkillInterface.type";
import { SpinnerWhite } from "../../(components)/Components/Spinner";
import Divider from "../../(components)/Components/Divider";
import { SKILL_PAGE_LOCKDOWN } from "@/utility/main.util";

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
    const [loading, setLoading] = useState<boolean>(true);

    function removeEmojis(str: string) {
        return str.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDDFF])/g,
            ""
        ).trim();
    }

    const allLinks = useMemo(() => {
        if (!matched?.skill.SkillInfo) return [];
        return matched.skill.SkillInfo.flatMap((infoItem) =>
            infoItem.Links?.map((link) => ({
                name: removeEmojis(link.linkName || "Unnamed"),
                url: link.linkURL || "-",
                description: infoItem.description?.join(" ") || ""
            })) || []
        );
    }, [matched]);

    const handleExport = () => {
        if (!allLinks.length) return;

        const doc = new jsPDF();
        doc.text(matched!.skill.fullName + " - ItsMe Prince Resources", 14, 15);

        const body: (string | { content: string; colSpan: number })[][] = [];

        allLinks.forEach((l, i) => {
            body.push([String(i + 1), l.name, l.url]);

        });

        body.push([{
            content: "Description: " + allLinks[0].description,
            colSpan: 3
        }]);

        body.push([{
            content: `Last Updated Date: ${matched?.skill.date}`,
            colSpan: 3
        }]);

        body.push([{
            content: `Subscribe to support: https://www.youtube.com/@itsmeprinceyt`,
            colSpan: 3
        }]);

        autoTable(doc, {
            head: [["S.No", "Title/Note", "Link/Note"]],
            body,
            startY: 25,
            styles: { fontSize: 10, cellPadding: 2 },
            headStyles: { fillColor: [40, 40, 40] },
            theme: "grid"
        });

        doc.save(`${matched!.skill.fullName}_resources_itsme_prince.pdf`);
    };

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
            <div className="w-full max-w-2xl text-stone-700 p-5 flex flex-col select-text relative">
                {/* Last Updated */}
                {matched.skill.date && (
                    <div className="absolute text-white/20 text-[10px] top-0">
                        Last Updated: {matched.skill.date}
                    </div>
                )}
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

                    <div className="flex items-center gap-3">
                        {/* Showing export button only if links exists */}
                        {allLinks.length > 0 && (
                            <button
                                onClick={handleExport}
                                className="flex items-center gap-1 text-xs bg-stone-200 px-2 py-1 rounded hover:bg-stone-300 transition"
                            >
                                <FileDown size={14} /> Export
                            </button>
                        )}
                        <Link href="/skills" className="p-1">
                            <RiArrowGoBackFill />
                        </Link>
                    </div>
                </div>

                {/* Container */}
                <div className="flex flex-col text-stone-300">
                    {matched.skill.SkillInfo?.map((infoItem, index) => (
                        <div key={index} className="flex flex-col gap-5 border border-stone-50/20 rounded-bl-lg rounded-br-lg p-5 shadow-2xl shadow-white/10 tracking-widest leading-8">

                            {infoItem.description && (
                                <div>
                                    <p className="text-[20px] font-bold">Description | My Story</p>
                                    <p className="text-stone-400 text-xs font-extralight leading-8">
                                        {infoItem.description.map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                {i !== infoItem.description!.length - 1 && (
                                                    <>
                                                        <br />
                                                        <br />
                                                    </>
                                                )}
                                            </span>
                                        ))}
                                    </p>
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
                                                    className="text-xs text-stone-400 border border-white/10 px-4 py-3 rounded-lg my-2 shadow-lg shadow-stone-500/10 hover:shadow-stone-500/20 leading-6"
                                                >
                                                    {link.linkURL ? (
                                                        <>
                                                            <span>{link.linkName}:</span><br />
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
                {matched.category !== 'hobbies-interests' && matched.category !== 'personal-soft-skills' && (
                    <div className="py-5 space-y-5">
                        <Divider />
                        <div className=" p-5 flex flex-col text-stone-400 bg-stone-900/40 border-l-3 border-yellow-500 rounded-tr-lg rounded-br-lg text-xs select-none">
                            {`Pro Tip: Never limit yourself to a single course, platform, or creator. Exploring a variety of resources exposes you to different teaching approaches and ways of thinking — and that can make all the difference in how well you learn.`}
                        </div>
                        <Divider />
                        <div className="p-5 flex flex-col text-stone-400 bg-stone-900/40 border-l-3 border-red-500 rounded-tr-lg rounded-br-lg text-xs select-none">
                            {`Disclaimer: Most of these resources are ones I’ve personally learned from — whether it’s YouTube videos, books, or courses I found helpful along the way. Some may also come from friends or peers who found something awesome and insisted I include it here. I’m just sharing what worked for us, in case it helps you too!`}
                        </div>
                    </div>
                )}
            </div>
        </PageWrapperNormal>
    );
}