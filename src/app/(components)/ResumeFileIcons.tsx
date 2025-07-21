"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    FaFileWord,
    FaFilePdf,
    FaGoogle,
    FaMarkdown,
    FaFileAlt,
    FaHtml5,
} from "react-icons/fa";
import { ResumeFile } from "../../types/ResumeFile.type";

const iconMap: Record<string, React.JSX.Element> = {
    ".pdf": <FaFilePdf />,
    ".docx": <FaFileWord />,
    ".gdoc": <FaGoogle />,
    ".md": <FaMarkdown />,
    ".txt": <FaFileAlt />,
    ".html": <FaHtml5 />,
};

export default function FileList() {
    const [files, setFiles] = useState<ResumeFile[]>([]);

    useEffect(() => {
        fetch("/api/resume")
            .then((res) => res.json())
            .then((data) => setFiles(data));
    }, []);

    const colorMap: Record<string, string> = {
        ".docx": "text-blue-500",
        ".gdoc": "text-blue-500",
        ".md": "text-blue-600",
        ".pdf": "text-rose-600",
        ".txt": "text-stone-600",
        ".html": "text-orange-600",
    };

    return (
        <ul className="space-y-5">
            {files.map((file) => (
                <li key={file.href}>
                    <Link
                        href={file.href}
                        download
                        className="flex items-center gap-5 text-black border border-black/10 bg-black/5 hover:bg-black shadow-lg/10 hover:shadow-lg/20 hover:text-white px-4 py-2 rounded-md tracking-widest transition-all"
                    >
                        <span className="text-xl">
                            {iconMap[file.fileTypeName] || <FaFileAlt />}
                        </span>
                        <span className={colorMap[file.fileTypeName] ?? ""}>
                            {file.fileTypeName}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}