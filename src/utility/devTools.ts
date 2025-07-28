import { SkillInterface } from "../types/SkillInterface.type";

const devTools: SkillInterface[] = [
  {
    name: "/vs-code",
    file: "1.vs-code.svg",
    fullName: "Visual Studio Code",
    SkillInfo: [
      {
        description: "Visual Studio Code is a free, open-source code editor developed by Microsoft, known for its performance, extensions, and built-in Git support.",
        Links: [
          {
            linkName: "Download VS Code",
            linkURL: "https://code.visualstudio.com/"
          }
        ]
      }
    ]
  },
  {
    name: "/github",
    file: "2.github.svg",
    fullName: "GitHub",
    SkillInfo: [
      {
        description: "GitHub is a web-based platform for version control and collaboration, allowing developers to manage and share code using Git.",
        Links: [
          {
            linkName: "Visit GitHub",
            linkURL: "https://github.com/"
          }
        ]
      }
    ]
  },
  {
    name: "/postman",
    file: "3.postman.svg",
    fullName: "Postman",
    SkillInfo: [
      {
        description: "Postman is a collaboration platform for API development, offering tools for testing, monitoring, and documenting APIs.",
        Links: [
          {
            linkName: "Explore Postman",
            linkURL: "https://www.postman.com/"
          }
        ]
      }
    ]
  },
  {
    name: "/dev-ops",
    file: "4.dev-ops.svg",
    fullName: "DevOps",
    SkillInfo: [
      {
        description: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten development cycles and ensure continuous delivery.",
        Links: [
          {
            linkName: "What is DevOps?",
            linkURL: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-devops/"
          }
        ]
      }
    ]
  }
];

export default devTools;
