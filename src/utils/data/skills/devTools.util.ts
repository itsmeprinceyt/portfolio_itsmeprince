import { SkillInterface } from "../../../types/skills.type";
import { NOT_WATCHED_ANY_COURSE } from "../../main.util";

const devTools: SkillInterface[] = [
  {
    file: "1.vs-code.svg",
    fullName: "Visual Studio Code",
    SkillInfo: [
      {
        description: [
          "Visual Studio Code is a free, open-source code editor developed by Microsoft, known for its performance, extensions, and built-in Git support. I've used only this for all the projects and I think its the best and most light weight IDE out there.",
        ],
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE,
          },
        ],
      },
    ],
    date: "29-07-2025",
  },
  {
    file: "2.github.svg",
    fullName: "GitHub",
    SkillInfo: [
      {
        description: [
          "GitHub is a web-based platform for version control and collaboration, allowing developers to manage and share code using Git. You Should probably learn this asap because it'll make your life so easier.",
        ],
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE,
          },
        ],
      },
    ],
    date: "29-07-2025",
  },
  {
    file: "3.git.svg",
    fullName: "Git",
    SkillInfo: [
      {
        description: [""],
      },
    ],
  },
  {
    file: "4.postman.svg",
    fullName: "Postman",
    SkillInfo: [
      {
        description: [
          "Postman is a powerful collaboration platform for API development, providing tools to test, monitor, and document APIs efficiently. In the beginning, I made the mistake of manually triggering each endpoint in the browser while working on projects with backend functionality.",
          "This was not only time-consuming but also led to missed or forgotten routes. Once I discovered Postman, everything changed — I could test all my endpoints in one place, and it saved me a ton of time and effort.",
        ],
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE,
          },
        ],
      },
    ],
    date: "29-07-2025",
  },
  {
    file: "5.markdown.svg",
    fullName: "Markdown",
    SkillInfo: [
      {
        description: [""],
      },
    ],
  },
];

export default devTools;
