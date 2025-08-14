import { SkillInterface } from "../types/SkillInterface.type";
import { NOT_WATCHED_ANY_COURSE } from "./utils";

const creativeTools: SkillInterface[] = [
  {
    name: "/adobe-photoshop",
    file: "1.photoshop.png",
    fullName: "Adobe Photoshop",
    SkillInfo: [
      {
        description: ["I used to make YouTube videos, and in the beginning, I had no idea how to create eye-catching thumbnails. I started out using MS Paint, then moved on to some online thumbnail makers. Eventually, I discovered Adobe Photoshop — and it changed everything. It's incredibly powerful — not just for thumbnails, but also for designing posters, UI/UX layouts, and much more."],
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ],
    date: "28-07-2025"
  },
  {
    name: "/figma",
    file: "2.figma.svg",
    fullName: "Figma",
    SkillInfo: [
      {
        description: ["While working on my coding projects, I often needed to create rough UI/UX designs to guide the app’s frontend. Photoshop was too heavy for my laptop, especially since I couldn’t always work on my PC.","That’s when I tried Figma — and I quickly realized it’s like Photoshop but made specifically for designers. Since then, I’ve been using Figma regularly for all my UI/UX design needs."],
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          },
          {
            linkName: "🌻 The Easy Way to Design Top Tier Websites",
            linkURL: "https://www.youtube.com/watch?v=qyomWr_C_jA"
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/adobe-preimere-pro",
    file: "3.premiere-pro.png",
    fullName: "Adobe Premiere Pro",
    SkillInfo: [
      {
        description: ["I started out with Sony Vegas Pro, mainly because my earlier PC setup couldn't handle the heavier Adobe Premiere Pro. Vegas Pro served me well and was my go-to editing tool up until around 2021–2022.","Eventually, I switched to Premiere Pro, and since it offered everything I was used to (and more), the transition was smooth without any issues."],
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ],
    date: "28-07-2025"
  },
  {
    name: "/adobe-after-effects",
    file: "4.after-effects.png",
    fullName: "Adobe After Effects",
    SkillInfo: [
      {
        description: ["Adobe After Effects is obviously essential for tasks that go beyond what Premiere Pro can handle. However, I haven’t had the chance to fully dive into it yet. I’ll update this once I get the time to explore it properly through some tutorials or a crash course."],
        Links: [
          {
            linkName: NOT_WATCHED_ANY_COURSE
          }
        ]
      }
    ],
    date: "28-07-2025"
  }
];

export default creativeTools;
