import { FaFileWord, FaFilePdf, FaGoogle, FaMarkdown, FaFileAlt, FaHtml5 } from 'react-icons/fa';
import ResumeFile from '../types/ResumeFile.type';

export const resumeFiles: ResumeFile[] = [
  { href: "/cv/Mohd Uvaish - Resume.pdf", fileTypeName: "/.pdf" },
  { href: "/cv/Mohd Uvaish - Resume.docx", fileTypeName: "/.docx" },
  { href: "/cv/Mohd Uvaish - Resume.gdoc", fileTypeName: "/.gdoc" },
  { href: "/cv/Mohd Uvaish - Resume.md", fileTypeName: "/.md" },
  { href: "/cv/Mohd Uvaish - Resume.txt", fileTypeName: "/.txt" },
  { href: "/cv/MohdUvaishResume.html", fileTypeName: "/.html" },
];

export const fileIcons = resumeFiles.map((file) => {
  let icon;
  switch (file.fileTypeName) {
    case '/.pdf':
      icon = <FaFilePdf />;
      break;
    case '/.docx':
      icon = <FaFileWord />;
      break;
    case '/.gdoc':
      icon = <FaGoogle />;
      break;
    case '/.md':
      icon = <FaMarkdown />;
      break;
    case '/.txt':
      icon = <FaFileAlt />;
      break;
    case '/.html':
      icon = <FaHtml5 />;
      break;
    default:
      icon = <FaFileAlt />;
  }

  return {
    ...file,
    icon,
    label: file.fileTypeName
  };
});

