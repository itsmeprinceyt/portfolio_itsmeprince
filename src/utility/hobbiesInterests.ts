import { SkillInterface } from "../types/SkillInterface.type";

const hobbiesInterests: SkillInterface[] = [
  {
    name: "/gardening",
    file: "1.gardening.svg",
    fullName: "Gardening",
    SkillInfo: [
      {
        description: ["I haven't had the chance to do full-scale gardening yet, but I've always dreamed of creating and nurturing my own garden filled with fruits, vegetables, and flowers—a peaceful space where I can live among the plants, care for them, and enjoy the fresh produce they offer."], 
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/stargazing",
    file: "2.star.svg",
    fullName: "Stargazing",
    SkillInfo: [
      {
        description: ["After a long, tiring day, I love lying down and watching the sky as the stars slowly appear and disappear. It reminds me to be grateful for the chance to live and experience moments like these. I could watch the stars for hours and cherish every second of it."],
      }
    ],
    date: "29-07-2025"
  }
];

export default hobbiesInterests;
