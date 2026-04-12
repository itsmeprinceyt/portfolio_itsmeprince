import { SkillInterface } from "../../../types/skills.type";

const database: SkillInterface[] = [
  {
    file: "1.mySQL.svg",
    fullName: "MySQL",
    SkillInfo: [
      {
        description: [
          "MySQL was the first database I learned. I got hands-on with creating schemas, building tables, and performing basic data manipulation — all of which I later integrated into my projects.",
        ],
      },
    ],
    date: "29-07-2025",
  },
  {
    file: "2.mongodb.svg",
    fullName: "MongoDB",
    SkillInfo: [
      {
        description: [
          "MongoDB is a NoSQL, document-based database known for its scalability and flexible data structure. I used it in my very first project, which also happened to be my college project.",
          "While MongoDB is great for quick development and handling unstructured data, its lack of strict relationships between data can sometimes be a drawback. Personally, I prefer MySQL for its relational structure — but both databases have their strengths, so it really depends on the use case. No hard feelings!",
        ],
        Links: [
          {
            linkName: "Learn MongoDB in 1 Hour 🍃",
            linkURL: "https://www.youtube.com/watch?v=c2M-rlkkT5o",
          },
          {
            linkName:
              "Install mongoDB and MongoDB Compass and MongoDB Shell (mongosh) on Windows",
            linkURL: "https://www.youtube.com/watch?v=jvaBaxlTqU8",
          },
          {
            linkName:
              "Let solve this error together. [connect ECONNREFUSED 127.0.0.1:27017]",
            linkURL: "https://www.youtube.com/watch?v=y1l1UI_UdQI",
          },
          {
            linkName:
              "Connecting MongoDB Atlas to Next.js: A Quick Tutorial | 2024",
            linkURL: "https://www.youtube.com/watch?v=FQeKzno-8mU",
          },
          {
            linkName: "Setup MongoDB on cloud with MongoDB Atlas",
            linkURL: "https://www.youtube.com/watch?v=qXEmKQsD6qA",
          },
          {
            linkName: "Complete MongoDB Tutorial #25 - MongoDB Atlas",
            linkURL: "https://www.youtube.com/watch?v=084rmLU1UgA",
          },
          {
            linkName: "Connecting to a Database (Discord.js v14)",
            linkURL: "https://www.youtube.com/watch?v=edeNqzKvj0g",
          },
        ],
      },
    ],
    date: "29-07-2025",
  },
  {
    file: "3.firebase.svg",
    fullName: "Firebase",
    SkillInfo: [
      {
        description: [""],
      },
    ],
  },
];

export default database;
