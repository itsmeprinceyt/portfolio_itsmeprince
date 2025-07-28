import { SkillInterface } from "../types/SkillInterface.type";
import { NOT_WATCHED_ANY_COURSE } from "./utils";

const devTools: SkillInterface[] = [
  {
    name: "/vs-code",
    file: "1.vs-code.svg",
    fullName: "Visual Studio Code",
    SkillInfo: [
      {
        description: "Visual Studio Code is a free, open-source code editor developed by Microsoft, known for its performance, extensions, and built-in Git support. I've used only this for all the projects and I think its the best and most light weight IDE out there.",
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/github",
    file: "2.github.svg",
    fullName: "GitHub",
    SkillInfo: [
      {
        description: "GitHub is a web-based platform for version control and collaboration, allowing developers to manage and share code using Git. You Should probably learn this asap because it'll make your life so easier.",
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/postman",
    file: "3.postman.svg",
    fullName: "Postman",
    SkillInfo: [
      {
        description: "Postman is a powerful collaboration platform for API development, providing tools to test, monitor, and document APIs efficiently. In the beginning, I made the mistake of manually triggering each endpoint in the browser while working on projects with backend functionality. This was not only time-consuming but also led to missed or forgotten routes. Once I discovered Postman, everything changed — I could test all my endpoints in one place, and it saved me a ton of time and effort.",
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/dev-ops",
    file: "4.dev-ops.svg",
    fullName: "DevOps",
    SkillInfo: [
      {
        description: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to streamline development cycles and enable continuous delivery. The best way to learn DevOps is by working on real-world projects and actually deploying them. Many developers struggle with proper deployment — and that alone is a valuable skill. From setting up environments to configuring actions and triggers, it all falls under the DevOps umbrella. So, the more projects you deploy, the more you'll understand the foundational concepts of DevOps.",
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ],
    date: "29-07-2025"
  }
];

export default devTools;
