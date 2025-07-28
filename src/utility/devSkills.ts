import { SkillInterface } from "../types/SkillInterface.type";
import { NOT_WATCHED_ANY_COURSE } from "./utils";

const devSkills: SkillInterface[] = [
  {
    name: "/c",
    file: "1.c.svg",
    fullName: "C",
    SkillInfo: [
      {
        description: "C was the first programming language I ever learned, and it felt incredible — I still remember the excitement of seeing my name printed on the screen for the first time! From simple print statements to writing functions, it laid the foundation for everything that followed.",
        Links: [
          {
            linkName: "🌻 C Programming Tutorial for Beginners",
            linkURL: "https://www.youtube.com/watch?v=KJgsSFOSQv0"
          },
          {
            linkName: "🌻 [Book] \"C Programming\" by Gopal Pathak - Anand Publications Meerut",
          },
          {
            linkName: "🌻 [Book] \"Let Us C \" by Yashavant Kanetkar",
            linkURL: "https://www.amazon.in/Let-Us-Authentic-programming-language/dp/9391392997"
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/c++",
    file: "2.c++.svg",
    fullName: "C++",
    SkillInfo: [
      {
        description: "I learned C++ in the second semester of my college. Having already worked with C and explored various algorithms and sorting techniques, I often felt like something was missing. That gap was filled when I discovered C++ and its Object-Oriented Programming (OOP) concepts—I instantly connected with it. I just knew this was what I had been looking for, and it truly solved the limitations I faced in C. Being a superset of C, C++ made coding feel much more intuitive and efficient.",
        Links: [
          {
            linkName: "🌻 C++ by Saurabh Shukla Sir",
            linkURL: "https://www.youtube.com/watch?v=Iuo9PpGE04Y&list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF"
          },
          {
            linkName: "🌻 [Book] \"Programming in C++ (Object Oriented Programming using C++)\" by Sudhir Goswami, Manoj Kumar - Anand Publications Meerut"
          },
          {
            linkName: "🌻 [Book] OBJECT ORIENTED PROGRAMMING WITH C++, 8TH EDITION",
            linkURL: "https://www.amazon.in/OBJECT-ORIENTED-PROGRAMMING-C-8TH/dp/9389949181"
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/python",
    file: "3.python.svg",
    fullName: "Python",
    SkillInfo: [
      {
        description: "I was drawn to Python for its simplicity and powerful capabilities. Over time, I built several projects with it and found the experience quite enjoyable. Later, I also explored its frameworks, which opened up even more possibilities.",
        Links: [
          {
            linkName: "🌻 Python for Beginners (Full Course)",
            linkURL: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"
          },
          {
            linkName: "🌻 Python Documentation",
            linkURL: "https://www.python.org/doc/",
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/django",
    file: "4.django.svg",
    fullName: "Django",
    SkillInfo: [
      {
        description: "Django is a high-level Python framework designed for building secure, scalable web applications. It was the first framework I learned, and it made a strong impression on me. Django follows the MVT (Model-View-Template) architecture and offers a great developer experience. If you're planning to go all-in with Python, Django is definitely worth learning.",

        Links: [
          {
            linkName: "🌻 A senior once recommended a Django course from a structured learning platform (unfortunately, I don’t recall the name at the moment). It was well-organized and very helpful — I’ll update this if I remember the source."
          },
          {
            linkName: "🌻 Django Documentation",
            linkURL: "https://www.djangoproject.com/"
          },
          {
            linkName: "🌻 Complete Django Course for 2023 - Zero to Hero in Python Django",
            linkURL: "https://www.youtube.com/watch?v=Mezody4yiXw&list=PLVBKjEIdL9bvCdI4l1Emvbezv10GjUaLk&index=1"
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/html",
    file: "5.html.svg",
    fullName: "HTML",
    SkillInfo: [
      {
        description: "I had a lot of ideas brewing in my mind and started thinking about how I could bring them to life — that’s when I decided to dive into the world of development. I began with HTML, and to my surprise, it wasn’t too difficult. Once you understand the difference between semantic and non-semantic tags, you’re pretty much good to go!",
        Links: [
          {
            linkName: "🌻 HTML & CSS Full Course - Beginner to Pro",
            linkURL: "https://www.youtube.com/watch?v=G3e-cpL7ofc"
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/css",
    file: "6.css.svg",
    fullName: "CSS",
    SkillInfo: [
      {
        description: "CSS gave the website its soul, and I dove deep into it early on — especially after realizing that mastering Tailwind CSS requires a solid understanding of plain CSS. So I took it seriously, and oh boy, those Flexbox and Grid layouts really gave me a headache at first! But after all the trial and error… I can finally say: \"I know how to center a div.\"",
        Links: [
          {
            linkName: "🌻 HTML & CSS Full Course - Beginner to Pro",
            linkURL: "https://www.youtube.com/watch?v=G3e-cpL7ofc"
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/javascript",
    file: "7.javascript.svg",
    fullName: "JavaScript",
    SkillInfo: [
      {
        description: "At first, my website looked great — but none of the buttons worked, and it couldn’t actually do anything. That’s when I stumbled into JavaScript. I quickly realized that if I learned it well, I could build real interactivity into my projects and wouldn’t need to dive too deep into Node.js right away. So I rolled up my sleeves, learned the fundamentals, and before long, I was building fully functional projects I could actually host online!",
        Links: [
          {
            linkName: "🌻 JavaScript Tutorial Full Course - Beginner to Pro",
            linkURL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/node.js",
    file: "8.node.svg",
    fullName: "Node.js",
    SkillInfo: [
      {
        description: NOT_WATCHED_ANY_COURSE,
        Links: [
          {
            linkName: "🌼 Sigma Web Development Course",
            linkURL: "https://www.youtube.com/watch?v=NoWRBo3Uf8E&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=85",
          }
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/express.js",
    file: "9.express.svg",
    fullName: "Express.js",
    SkillInfo: [
      {
        description: "At this point, I was ready to dive into real backend development — something that could handle requests, return data, and connect to a database. It was finally time to build my first full-stack web application. And to make that happen, the next step was clear: I needed to learn Express.js.",
        Links: [
          {
            linkName: "🌻 Sigma Web Development Course ( I followed this course up to the part where Express.js was covered )",
            linkURL: "https://www.youtube.com/watch?v=R11tvGM3nDY&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=88"
          },
          {
            linkName: "🌻 Express Middleware",
            linkURL: "https://www.youtube.com/watch?v=n2c0mf1sza4"
          },
          {
            linkName: "🌻 Uploading Files with NodeJS and Multer",
            linkURL: "https://www.youtube.com/watch?v=WqJ0P8JnftI",
          },
        ]
      }
    ],
    date: "29-07-2025"
  },
  {
    name: "/react.js",
    file: "10.react.svg",
    fullName: "React.js",
    SkillInfo: [
      {
        description: "I initially had no intention of learning React.js, but two key realizations completely changed my perspective and pushed me to dive deep into it. First, mastering React significantly levels up your capabilities in Next.js. Since React is primarily a UI library, learning it lays the foundation for working with Next.js, which adds powerful backend features on top—making the transition much smoother and more efficient. Second, React opens the door to app development with React Native. The concepts of state management and component logic are largely shared between the two, making it much easier to switch gears when you're ready to build mobile apps—which is something I’m actively looking forward to.",
        Links: [
          {
            linkName: "🌻 React Full Course for free (2024)",
            linkURL: "https://www.youtube.com/watch?v=CgkZ7MvWUAA"
          },
          {
            linkName: "🌻 Sigma Web Development Course – (After watching the video linked above, I came here to watch his final explanation of React.js to ensure I didn’t miss any important details.)",
            linkURL: "https://www.youtube.com/watch?v=nhSZ4LhIii8&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=105"
          },
          {
            linkName: "🌻 Every React Concept Explained in 12 Minutes",
            linkURL: "https://www.youtube.com/watch?v=wIyHSOugGGw"
          },
          {
            linkName: "🌻 React JS Explained in 10 Minutes",
            linkURL: "https://www.youtube.com/watch?v=s2skans2dP4"
          },
          {
            linkName: "🌻 React js Top 30 Interview Questions and Answers for Beginners",
            linkURL: "https://www.youtube.com/watch?v=b8pAPWsWIE4"
          }
        ]
      }
    ],
    date: "28-07-2025"
  },
  {
    name: "/redux",
    file: "11.redux.svg",
    fullName: "Redux",
    SkillInfo: [
      {
        description: "Add a lockdown feature which will not let anyone access any /skill/skillPage if its turned on in the uhhh utils.ts",
        Links: [
          {
            linkName: "Learn Redux",
            linkURL: "https://redux.js.org/"
          }
        ]
      }
    ]
  },
  {
    name: "/my-sql",
    file: "12.mySQL.svg",
    fullName: "MySQL",
    SkillInfo: [
      {
        description: "MySQL is an open-source relational database system for structured data storage.",
        Links: [
          {
            linkName: "Learn MySQL",
            linkURL: "https://www.mysql.com/"
          }
        ]
      }
    ]
  },
  {
    name: "/mongo-db",
    file: "13.mongo-db.png",
    fullName: "MongoDB",
    SkillInfo: [
      {
        description: "MongoDB is a NoSQL document-based database for scalable and flexible data storage.",
        Links: [
          {
            linkName: "Learn MongoDB",
            linkURL: "https://www.mongodb.com/"
          }
        ]
      }
    ]
  },
  {
    name: "/bootstrap",
    file: "14.bootstrap.svg",
    fullName: "Bootstrap",
    SkillInfo: [
      {
        description: "Bootstrap is a popular CSS framework for responsive and mobile-first design.",
        Links: [
          {
            linkName: "Learn Bootstrap",
            linkURL: "https://getbootstrap.com/"
          }
        ]
      }
    ]
  },
  {
    name: "/tailwind-css",
    file: "15.tailwind.svg",
    fullName: "TailwindCSS",
    SkillInfo: [
      {
        description: "Tailwind CSS is a utility-first framework for rapidly building custom designs.",
        Links: [
          {
            linkName: "Learn TailwindCSS",
            linkURL: "https://tailwindcss.com/"
          }
        ]
      }
    ]
  },
  {
    name: "/next.js",
    file: "16.next.svg",
    fullName: "Next.js",
    SkillInfo: [
      {
        description: "Next.js is a full-stack React framework with features like SSR and static site generation.",
        Links: [
          {
            linkName: "Learn Next.js",
            linkURL: "https://nextjs.org/"
          }
        ]
      }
    ]
  },
  {
    name: "/typescript",
    file: "17.typescript.svg",
    fullName: "Typescript",
    SkillInfo: [
      {
        description: "TypeScript is a typed superset of JavaScript that helps with tooling and type safety.",
        Links: [
          {
            linkName: "Learn TypeScript",
            linkURL: "https://www.typescriptlang.org/"
          }
        ]
      }
    ]
  },
  {
    name: "/electron.js",
    file: "18.electron.svg",
    fullName: "Electron.js",
    SkillInfo: [
      {
        description: "Electron.js is a framework for building cross-platform desktop apps with web technologies.",
        Links: [
          {
            linkName: "Learn Electron.js",
            linkURL: "https://www.electronjs.org/"
          }
        ]
      }
    ]
  }
];

export default devSkills;