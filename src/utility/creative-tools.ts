import { SkillInterface } from "../types/SkillInterface.type";
import { NOT_WATCHED_ANY_COURSE } from "./utils";

const creativeTools: SkillInterface[] = [
  {
    name: "/adobe-photoshop",
    file: "1.photoshop.png",
    fullName: "Adobe Photoshop",
    SkillInfo: [
      {
        description: "I used to make YouTube videos, and in the beginning, I had no idea how to create eye-catching thumbnails. I started out using MS Paint, then moved on to some online thumbnail makers. Eventually, I discovered Adobe Photoshop — and it changed everything. It's incredibly powerful — not just for thumbnails, but also for designing posters, UI/UX layouts, and much more.",
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ]
  },
  {
    name: "/figma",
    file: "2.figma.svg",
    fullName: "Figma",
    SkillInfo: [
      {
        description: "While working on my coding projects, I often needed to create rough UI/UX designs to guide the app’s frontend. Photoshop was too heavy for my laptop, especially since I couldn’t always work on my PC. That’s when I tried Figma — and I quickly realized it’s like Photoshop but made specifically for designers. Since then, I’ve been using Figma regularly for all my UI/UX design needs.",
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ]
  },
  {
    name: "/adobe-preimere-pro",
    file: "3.premiere-pro.png",
    fullName: "Adobe Premiere Pro",
    SkillInfo: [
      {
        description: "Adobe Premiere Pro is a professional video editing application for film, TV, and the web.",
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ]
  },
  {
    name: "/adobe-after-effects",
    file: "4.after-effects.png",
    fullName: "Adobe After Effects",
    SkillInfo: [
      {
        description: "Adobe After Effects is used for motion graphics, visual effects, and compositing for video.",
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ]
  }
];

export default creativeTools;
