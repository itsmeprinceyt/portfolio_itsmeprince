import { Project } from '../types/Project.type';
/* ============================================================================= */
/* ============================================================================= */
export const majorProjects: Project[] = [
    {
        id: `file-encrypt-decrypter`,
        name: `File Encrypter / Decrypter Software`,
        description: `A secure and user-friendly file encryption & decryption software built with Electron, alongside CLI-based Python and Node.js script versions for developers.`,
        full_description: {
            intro: `This project offers a complete solution for file encryption and decryption. The main offering is a desktop application built using Electron, providing a simple graphical interface for securely encrypting and decrypting files using AES-GCM encryption. Users can easily select files, set passwords, and choose save locations for secure data handling.`,

            features: [
                {
                    title: "Electron Desktop App",
                    detail: "A polished UI for non-technical users to encrypt/decrypt files locally."
                },
                {
                    title: "AES-GCM Encryption",
                    detail: "Secure, authenticated encryption standard used to ensure both confidentiality and integrity."
                },
                {
                    title: "Cross-Platform Support",
                    detail: "Works on Windows, macOS, and Linux for wide usability."
                },
                {
                    title: "Password-Derived Keys",
                    detail: "Uses SHA-256 hashing to generate strong encryption keys from user-provided passwords."
                },
                {
                    title: "Python & Node.js Scripts",
                    detail: "CLI-based versions for automation, scripting, or headless environments."
                }
            ],

            dependencies: [
                "Node.js Script: [crypto inbuilt module]",
                "Python Script: [cryptography / hashlib]",
            ],

            usage_examples: [
                "Encrypt your `.env` file before pushing to a public repo",
                "Decrypt client-provided files with a shared password",
                "Securely store backups in an encrypted format (.prince)"
            ]
        },

        tags: [`/electron.js`, `/node.js`, `/typescript`, `/next.js`, `/tailwind-css`, `/python`],
        links: {
            live: {
                url: ``,
                enabled: false
            },
            github: {
                url: `https://github.com/itsmeprinceyt/file-encrypt-decrypter`,
                enabled: true
            },
            youtube: {
                url: ``,
                enabled: false
            }
        },
        banner: `/projects/file-encrypt-decrypter/1.png`,
    },
    {
        id: "crafti-nagma",
        name: "Crafti Nagma E-Store",
        description: "A beautifully semi-dynamic e-commerce website designed to elevate experience for crochet, embroidery, and customized crafts using Next.js, TypeScript, and modern frontend tools.",
        full_description: {
            intro:
                "Crafti Nagma is a semi-dynamic e-commerce website designed to showcase and sell crochet, embroidery, and customized crafts with elegance and ease. Built with Next.js, TypeScript, and TailwindCSS, it offers a smooth, responsive shopping experience with seamless WhatsApp checkout integration.",
            features: [
                {
                    title: "Product Listings & Detail Pages",
                    detail: "Showcases products with high-quality images, clear titles, and custom features, variations, and care instructions.",
                },
                {
                    title: "Image Gallery with Fullscreen Support",
                    detail: "Utilizes Swiper.js to provide a modern, responsive carousel and fullscreen preview for product images.",
                },
                {
                    title: "Cart System with WhatsApp Checkout",
                    detail: "Allows users to add products to a cart and checkout directly via WhatsApp with pre-filled cart data.",
                },
                {
                    title: "Persistent Cart via localStorage",
                    detail: "Cart data is saved in localStorage, ensuring it remains even after a page refresh or browser restart.",
                },
                {
                    title: "Discount Feature",
                    detail: "Supports showing discounted prices for select products, encouraging conversions.",
                },
                {
                    title: "Product Search",
                    detail: "Fast, dynamic product search module helps customers find items instantly.",
                },
                {
                    title: "SEO-Friendly",
                    detail: "Clean URLs, dynamic metadata, and well-structured pages for better search engine indexing.",
                },
                {
                    title: "Mobile Responsive",
                    detail: "Optimized layout and interaction patterns for smooth mobile and desktop experiences.",
                },
            ],
            dependencies: [
                "Swiper.js",
                "React Hot Toast",
                "WhatsApp API",
            ],
            usage_examples: [
                "Users can visit the page and browse different products and add them to the cart.",
                "View fullscreen product images using the gallery carousel.",
                "Add products to cart and click 'Checkout' to open WhatsApp with a pre-filled message and talk to the business owner to buy those items.",
            ],
        },
        tags: [`/next.js`, `/tailwind-css`, `/typescript`],
        links: {
            live: { url: `https://crafti-nagma.vercel.app/`, enabled: true },
            github: { url: `https://github.com/itsmeprinceyt/crafti-nagma`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
        banner: "/projects/crafti-nagma/1.png",
    },
    {
        id: `shareaway`,
        name: `Share Away`,
        description: `ShareAway is a thoughtfully crafted platform designed to provide a safe, non-judgmental space where users can openly express their feelings, thoughts, and personal stories.`,
        full_description: {
            intro: `Share Away is a minimalistic blogging platform where users can express their feelings and share thoughts in a judgment-free and supportive environment. It features user authentication, personalized profiles, a centralized post feed, and seamless interactions between users.`,

            features: [
                {
                    title: "User Authentication",
                    detail: "Secure sign-up and login system with JWT tokens to maximize data protection and session integrity."
                },
                {
                    title: "User Profiles",
                    detail: "Each user has a personal profile showcasing their posts, interactions, and basic account information."
                },
                {
                    title: "Post System",
                    detail: "Users can create, edit, and delete posts to share their thoughts and feelings."
                },
                {
                    title: "Like System",
                    detail: "Users can express support by liking ('hearting') posts."
                },
                {
                    title: "Search Functionality",
                    detail: "Regex-based search to find users by their username or email."
                },
                {
                    title: "Responsive UI",
                    detail: "Fully responsive layout that works across mobile and desktop devices."
                },
                {
                    title: "Post Feed",
                    detail: "View a centralized feed with the latest posts from all users in real-time."
                }
            ],

            dependencies: [
                "React Query",
                "bcrypt.js",
                "JWT"
            ],

            usage_examples: [
                "Create a private or public post to share how you feel anonymously or under your username.",
                "Interact with a supportive community through posts and likes.",
                "Search for users to explore their profile and read their shared experiences.",
                "Use the platform on any device without losing out on the UX."
            ]
        }
        ,
        tags: [`/next.js`, `/express.js`, `/my-sql`, `/tailwind-css`, `/typescript`],
        links: {
            live: { url: `https://share-away-prince.vercel.app/`, enabled: true },
            github: { url: `https://share-away-showcase.vercel.app/`, enabled: true },
            youtube: { url: `https://youtube.com/playlist?list=PLiFooJ43_R5SK0wE1LnaBlyWw-B1Uqpwj&si=nro67NPo5rZt-4bF`, enabled: true },
        },
        banner: `/projects/shareaway/1.png`,
    },
    {
        id: `paypal-sofi-wists-calculator`,
        name: `PayPal, SoFi, and Karuta Tickets Fee Calculator`,
        description: `A fee calculator for PayPal, SoFi Wists, Mazoku Bloodstones, and Karuta Tickets transactions.`,
        full_description: {
            intro: `The PayPal, SoFi, Karuta Tickets, and Mazoku Bloodstone Fee Calculator simplifies transaction fee calculations across four different platforms. Whether you're dealing with online payments, gaming currencies, or cross-border transactions, this tool ensures accurate and real-time fee breakdowns in a sleek and responsive interface.`,

            features: [
                {
                    title: "Transaction Fee Calculation",
                    detail: "Instantly calculate fees and net payouts for PayPal, SoFi, Karuta Tickets, and Mazoku Bloodstone transactions based on your input."
                },
                {
                    title: "User-Friendly Interface",
                    detail: "Minimal, clean layout with responsive design makes it easy to use on all screen sizes."
                },
                {
                    title: "Multi-Platform Support",
                    detail: "Switch between PayPal, SoFi, Karuta Tickets, and Mazoku Bloodstone to get platform-specific fee breakdowns."
                },
                {
                    title: "Currency Switching",
                    detail: "Seamlessly toggle between USD and INR for SoFi Wist and Mazoku Bloodstone calculations."
                },
                {
                    title: "Customizable Inputs",
                    detail: "Dynamically adjust transaction values and instantly see updated calculations and results."
                },
                {
                    title: "Optimized Performance",
                    detail: "Fast and efficient front-end built with Next.js for a smooth user experience."
                }
            ],

            usage_examples: [
                "Calculate your PayPal transaction fees before sending or receiving money.",
                "Estimate net payout when converting SoFi Wist or Mazoku Bloodstone to INR.",
                "Check how many Karuta Tickets you'd receive after marketplace fees.",
                "Switch currencies to compare outcomes across USD and INR.",
                "Use it to plan fair trades and purchases involving platform-specific digital currencies."
            ]
        },
        tags: [`/next.js`, `/typescript`, `/tailwind-css`],
        links: {
            live: { url: `https://paypal-and-sofi-wist-fee-calculator.vercel.app/`, enabled: true },
            github: { url: `https://github.com/itsmeprinceyt/paypal_calculator_for_sofi`, enabled: true },
            youtube: { url: `https://youtu.be/TmGlgE4iUN4`, enabled: true },
        },
        banner: `/projects/paypal-sofi-wists-calculator/1.png`,
    },
    {
        id: `pick-and-win`,
        name: `Pick And Win`,
        description: `Easily pick a random giveaway winner by shuffling participant names or spinning the wheel. Customize the experience with a variety of settings and shuffle/spin controls.`,
        full_description: {
            intro: `Pick and Win is a fun and interactive tool for running giveaways. It allows users to input participant names, shuffle them with suspense, and pick a winner using various animated selection modes. Ideal for content creators and online communities, the app ensures fairness and excitement in every draw.`,

            features: [
                {
                    title: "Participant Management",
                    detail: "Add names one by one, in bulk (comma-separated or line-by-line), remove specific entries, or reset the list in one click."
                },
                {
                    title: "Interactive Shuffle System",
                    detail: "Highlight participants in real-time during a suspenseful shuffle animation. Fully customizable shuffle duration."
                },
                {
                    title: "Flexible Settings",
                    detail: "Easily adjust shuffle timers and highlight colors via a built-in settings panel."
                },
                {
                    title: "Winner Selection Modes",
                    detail: "Choose from 'Last One Standing', 'Random Winner', 'Shuffle Mode', or 'Wheel Mode' for unique ways to pick a winner."
                },
                {
                    title: "Winner Announcement",
                    detail: "Displays the winner prominently with a redirect to a dedicated page. Auto-handles final round behavior when only two participants remain."
                },
                {
                    title: "Seamless Navigation",
                    detail: "After winner declaration, easily return to the home screen to manage participants or start a new round."
                }
            ],

            dependencies: [
                "tailwind-scrollbar"
            ],

            usage_examples: [
                "Host Instagram or YouTube giveaways and select a winner fairly.",
                "Run fun mini-games in classrooms or team meetings using the Wheel mode.",
                "Customize the shuffle time to build suspense for important prize draws.",
                "Easily reset and rerun draws for multiple winners or rounds.",
                "Use the app during livestreams or Discord events to engage your audience."
            ]
        },
        tags: [`/next.js`, `/typescript`, `/tailwind-css`],
        links: {
            live: { url: `https://pickandwin-iota.vercel.app/`, enabled: true },
            github: { url: `https://github.com/itsmeprinceyt/pickandwin`, enabled: true },
            youtube: { url: `https://www.youtube.com/watch?v=gBu9qU5doiw`, enabled: true },
        },
        banner: `/projects/pick-and-win/banner.png`,
    },

    {
        id: `online-sales-admin-portal`,
        name: `Online Sales Admin Portal`,
        description: `The online sales admin portal efficiently collects and stores customer purchase information.`,
        full_description: {
            intro: `The Online Sales Admin Portal, built with Express.js, EJS, and MongoDB, efficiently collects and stores customer purchase information. Admins can view and manage all order records, making sales tracking smooth and organized.`,

            features: [
                {
                    title: "Purchase Management",
                    detail: "Admins can view, edit, and track purchase details including buyer name, purchase date, item list, cost, and current status."
                },
                {
                    title: "MongoDB Integration",
                    detail: "Customer and purchase data are stored securely in a MongoDB database with a clear schema structure for easy querying."
                },
                {
                    title: "Admin Dashboard with EJS",
                    detail: "Renders dynamic admin views using EJS templates to provide a clean and intuitive UI for managing records."
                },
                {
                    title: "Status Indicators",
                    detail: "Each purchase includes editable fields for payment status and delivery status, allowing real-time updates."
                },
                {
                    title: "Environment-Based Config",
                    detail: "Utilizes environment variables via dotenv to keep sensitive configuration like DB URI and admin credentials secure."
                },
                {
                    title: "Local Development Support",
                    detail: "Nodemon is included to auto-reload the server during development for rapid testing and updates."
                }
            ],

            dependencies: [
                "ejs.js",
                "dotenv",
                "nodemon"
            ],

            usage_examples: [
                "Manage shop orders in a single interface.",
                "Track customer purchases with status flags like 'Paid' or 'Not Paid'.",
                "Edit orders directly in the admin portal using intuitive EJS-rendered forms.",
                "Use it as a backend skeleton for any e-commerce or custom store-like system.",
                "Run it locally or deploy it to manage sales from your gaming community or small business."
            ]
        },
        tags: [`/node.js`, `/express.js`, `/mongo-db`],
        links: {
            live: { url: ``, enabled: false },
            github: { url: `https://github.com/itsmeprinceyt/itsmeprince-shop-with-db`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
        banner: `/projects/online-sales-admin-portal/1.png`,
    },
    {
        id: `prince-kun`,
        name: `Prince-kun Discord Bot`,
        description: `Prince-kun is a custom-built Discord bot developed with TypeScript to serve as the all-in-one solution for managing my personal Discord server.`,
        full_description: {
            intro: `Prince-kun is a custom TypeScript-based Discord bot developed for managing and enhancing the experience on the ItsMe Prince Discord server. It supports powerful moderation tools, integrates deeply with the ItsMe Prince Shop backend (MySQL), and offers a variety of fun and personal utility commands for server members.`,

            features: [
                {
                    title: "Server Management",
                    detail: "Moderate your server with ease using features like ban/kick, bulk delete (purge), automated update announcements, donation notifications, redeem code sharing, and role assignments."
                },
                {
                    title: "ItsMe Prince Shop Integration",
                    detail: "Fully integrated with the ItsMe Prince Shop’s MySQL backend to manage users, track purchases, edit data, maintain a leaderboard, and let users register, view, and update their purchase profiles."
                },
                {
                    title: "User Roles",
                    detail: "Assign and manage server roles such as Leaker, Mod, Bot Tester, Client, Code Poster, and Shop Manager with precise control."
                },
                {
                    title: "Slash & Prefix Commands",
                    detail: "Supports both slash commands (`/`) and traditional prefix-based commands (`!`, `?`, etc.) for flexible and efficient interactions."
                },
                {
                    title: "Utility & Fun Features",
                    detail: "Packed with interactive commands like avatar display, game ID retrieval, device/PC specs, math operations, and access to personal social links like GitHub, Ko-fi, Instagram, YouTube, WhatsApp, and more."
                }
            ],

            dependencies: [
                "discord.js",
                "dotenv",
                "nodemon"
            ],

            usage_examples: [
                "Moderate Discord servers with ban/kick and purge commands.",
                "Manage and display purchase history from ItsMe Prince Shop via the MySQL database.",
                "Automatically share livestream redeem codes and YouTube promo codes.",
                "Let users check their own shop profile using slash commands.",
                "Access game IDs, device specs, social links, and donation options directly through bot commands.",
                "Assign and manage server roles to users through automated commands.",
                "Use SQL-specific commands to execute MySQL queries through the bot’s CLI."
            ]
        },
        tags: [`/node.js`, `/typescript`, `/my-sql`],
        links: {
            live: { url: `https://prince-kun-website.vercel.app/`, enabled: true },
            github: { url: `https://prince-kun.vercel.app/`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
        banner: `/projects/prince-kun/1.png`,
    },
    {
        id: `e-drive`,
        name: `E-Drive`,
        description: `A collection of academic resources and self-written notes for Bachelor's of Computer Application's IVth Semester.`,
        full_description: {
            intro: `E-DRIVE is a centralized educational resource hub designed to help BCA students—especially those in the IVth semester—access well-organized, self-written notes. This platform also includes notes directly from the institute where I currently study, making it a reliable and updated academic companion.`,

            features: [
                {
                    title: "Institute-Taught Notes",
                    detail: "Includes notes directly based on what is being taught in the classroom at my institute, ensuring real-time relevance for students studying alongside me."
                },
                {
                    title: "Minimal UI",
                    detail: "A clean, distraction-free layout focused on the content, designed for quick access and better reading comfort."
                },
                {
                    title: "Open Access",
                    detail: "The platform is hosted freely and publicly on GitHub Pages so that anyone can browse and benefit from the notes anytime, anywhere."
                }
            ],

            usage_examples: [
                "Visit the platform to study BCA IV semester subjects like Operating Systems, DBMS, and Web Technology.",
                "Use the notes during revision sessions, assignments, or pre-exam preparation.",
                "Share the URL with classmates who missed lectures or need simplified notes.",
                "Bookmark specific sections or notes for repeated study."
            ]
        },
        tags: [`/html`, `/css`, `/javascript`],
        links: {
            live: { url: `https://itsmeprinceyt.github.io/e-drive/index.html`, enabled: true },
            github: { url: `https://github.com/itsmeprinceyt/e-drive`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
        banner: `/projects/e-drive/1.png`,
    },
    {
        id: `statistics-mean-calculator`,
        name: `Statistics Mean Calculator`,
        description: `An online calculator that computes means for individual, discrete, and continuous data sets.`,
        full_description: {
            intro: `The Statistics Mean Calculator is a web application designed to calculate the mean (average) for various types of statistical data. Whether you're a student or a teacher, this tool simplifies complex mean calculations across different data formats.`,

            features: [
                {
                    title: "Individual Data Mean Calculation",
                    detail: "Quickly compute the arithmetic mean of simple, ungrouped individual data values."
                },
                {
                    title: "Discrete Data Mean Calculation",
                    detail: "Enter discrete data with frequencies to get accurate mean results using standard statistical formulas."
                },
                {
                    title: "Continuous Data Mean Calculation",
                    detail: "Supports grouped continuous data inputs with class intervals and frequencies to calculate the mean accurately."
                },
                {
                    title: "Easy-to-Use Interface",
                    detail: "Minimal and clean layout allowing quick input and instant results—great for both beginners and experienced users."
                },
                {
                    title: "Open Source & Transparent",
                    detail: "The underlying logic of the calculator is also available as a C++ implementation for better learning and contribution."
                }
            ],

            usage_examples: [
                "Calculate the mean of a list of individual scores: e.g., [10, 15, 20, 25].",
                "Input frequency tables for discrete data and get the mean.",
                "Provide class intervals and frequencies for continuous grouped data to get the exact mean.",
                "Use in classrooms, homework help, or for quick statistical analysis on-the-go.",
                "Refer to the C++ source code for learning how statistical mean is implemented programmatically."
            ]
        },
        tags: [`/html`, `/css`, `/javascript`],
        links: {
            live: { url: `https://itsmeprinceyt.github.io/StatisticsCalculator/index.html`, enabled: true },
            github: { url: `https://github.com/itsmeprinceyt/StatisticsCalculator`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
        banner: `/projects/statistics-mean-calculator/1.png`,
    },
    {
        id: `karuta-work-discord-bot`,
        name: `Karuta Work Discord Bot`,
        description: `A helpful utility bot built for the Karuta card game on Discord. It simplifies card management, saves time, and helps players stay efficient — with style!`,
        full_description: {
            intro: `Karuta Work is a Discord bot built to enhance the Karuta card game experience by automating and simplifying job board management. Originally designed for personal use, it has evolved into a powerful public tool used by many to save time, increase efficiency, and manage cards with ease.`,

            features: [
                {
                    title: "kkhelp",
                    detail: "Displays a complete list of available commands and a guide on how to use the bot effectively."
                },
                {
                    title: "kkinvite",
                    detail: "Generates an invite link to add Karuta Work to your own Discord server with the required permissions."
                },
                {
                    title: "kkscan",
                    detail: "Analyzes your Karuta job board and highlights which cards are healthy or injured, helping you make quick decisions."
                },
                {
                    title: "kkwork",
                    detail: "Automatically assigns your available cards to the Karuta job board slots, reducing manual labor."
                },
                {
                    title: "kkabout",
                    detail: "Provides information about the bot, its creator, and how you can support the project."
                },
                {
                    title: "Anti-Spam Cooldown",
                    detail: "Implements intelligent cooldown timers to prevent command spamming and ensure fair use."
                }
            ],
            dependencies: [
                "discord.js"
            ],
            usage_examples: [
                "Type `kkwork` to assign all your eligible cards to jobs instantly.",
                "Use `kkscan` to check your job board and identify which cards need replacement.",
                "Run `kkhelp` to get a full list of commands and usage info.",
                "Share `kkinvite` with your friends to let them add the bot to their server.",
                "Execute `kkabout` to understand the purpose of the bot and ways to support its development."
            ]
        },
        tags: [`/node.js`, `/typescript`],
        links: {
            live: { url: ``, enabled: false },
            github: { url: `https://github.com/itsmeprinceyt/karuta-work`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
        banner: `/projects/karuta-work-discord-bot/1.png`,
    },
    {
        id: `itsme-prince-discord-bot`,
        name: `ItsMe Prince Discord Bot (old)`,
        description: `A Discord utility bot for the server that enables seamless interaction and simple math calculations and various commands.`,
        full_description: {
            intro: `The ItsMe Prince Discord Bot is a basic utility bot designed for personal server use. Developed with Node.js and the discord.js library, it offers a collection of interactive commands that improve server functionality and user engagement.`,

            features: [
                {
                    title: "Basic Math Commands",
                    detail: "Perform simple mathematical operations directly in Discord using slash or prefix commands."
                },
                {
                    title: "Utility Tools",
                    detail: "Includes small but useful utilities such as ping checks, server stats, and more to aid server members."
                },
                {
                    title: "Command Handling",
                    detail: "Built with a clean command handler structure, making it easy to maintain and extend."
                },
                {
                    title: "Custom Server Integration",
                    detail: "Tailored specifically to match the needs of the ItsMe Prince Discord server community."
                }
            ],

            dependencies: [
                "discord.js"
            ],
        },
        tags: [`/node.js`],
        links: {
            live: { url: ``, enabled: false },
            github: { url: `https://github.com/itsmeprinceyt/itsmeprince-discord-bot`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
    },
    {
        id: `sofi-guild-manager`,
        name: `SOFI Guild Manager`,
        description: `A Python project for tracking raid activities and member rewards within a Sofi Guild.`,
        full_description: {
            intro: `The SOFI Guild Manager, developed using Python, is a private utility designed to simplify and secure the management of raid activities and reward tracking in a SOFI guild environment. It offers an encrypted system for handling elixir balances and withdrawal tracking.`,

            features: [
                {
                    title: "Raid Tracking",
                    detail: "Monitor and log all raid activity per guild member to ensure active participation and fair reward distribution."
                },
                {
                    title: "Reward Distribution",
                    detail: "Track and manage earned rewards, elixirs, and points accumulated by members over time."
                },
                {
                    title: "Encrypted Withdraw Logs",
                    detail: "Handles member withdrawals securely using encrypted data to prevent tampering and maintain transparency."
                },
                {
                    title: "Balance Management",
                    detail: "Keep track of individual elixir balances for each member, updated dynamically after rewards or withdrawals."
                },
                {
                    title: "Python-based CLI",
                    detail: "A clean and efficient command-line interface built in Python for managing all data and operations."
                }
            ],

            dependencies: [
                "cryptography (for secure encryption)"
            ],

            usage_examples: [
                "Run the script to view current raid contributions and total rewards per member.",
                "Use the encrypted withdraw command to securely deduct elixir from a user’s balance.",
                "Add new raid logs manually or via automation to update guild member activity.",
                "Export and back up encrypted logs for audit or reset purposes."
            ]
        },
        tags: [`/python`],
        links: {
            live: { url: ``, enabled: false },
            github: { url: `https://github.com/itsmeprinceyt/Sofi_Guild_Manager_Private`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
    },
    {
        id: `currency-exchange`,
        name: `Currency Exchange`,
        description: `A Next.js app that allows real-time currency conversions using FreeCurrencyAPI.`,
        full_description: {
            intro: `Currency Exchange by ItsMe Prince is a real-time currency conversion tool built using Next.js. It allows users to convert between various currencies using the latest exchange rates fetched live from the FreeCurrencyAPI. Designed with a responsive layout and smooth UI, this tool ensures a seamless experience across all devices.`,

            features: [
                {
                    title: "Real-time Currency Conversion",
                    detail: "Users can convert between global currencies using accurate and up-to-date exchange rates fetched from an external API."
                },
                {
                    title: "Live Rate Fetching",
                    detail: "The application uses FreeCurrencyAPI to dynamically fetch the most current exchange rates whenever the user performs a conversion."
                },
                {
                    title: "Responsive Design",
                    detail: "Designed using Tailwind CSS, the application adjusts smoothly across mobile, tablet, and desktop devices."
                },
                {
                    title: "Simple User Interface",
                    detail: "The clean and intuitive interface allows users to choose base and target currencies, input the amount, and view conversion results instantly."
                }
            ],

            dependencies: [
                "@everapi/freecurrencyapi-js"
            ],

            usage_examples: [
                "Select USD as base currency and INR as target currency, enter 100, and view the converted value instantly.",
                "Change base or target currency to explore different currency pairs.",
                "Input any amount to get updated conversion based on current market rates."
            ]
        },
        tags: [`/next.js`, `/tailwind-css`],
        links: {
            live: { url: `https://currency-exchange-lemon-ten.vercel.app/`, enabled: true },
            github: { url: `https://github.com/itsmeprinceyt/currency_exchange`, enabled: true },
            youtube: { url: `https://www.youtube.com/watch?v=hXyu8DO7SQ8`, enabled: true },
        },
        banner: `/projects/currency-exchange/1.png`,
    },

];
/* ============================================================================= */
/* ============================================================================= */
export const miniProjects: Project[] = [
    {
        id: `yt-thumbnail-downloader`,
        name: `YouTube Thumbnail Downloader`,
        description: `A sleek web app built with Next.js and Tailwind CSS that allows users to instantly preview and download high-resolution thumbnails from any YouTube video.`,
        full_description: {
            intro: `YouTube Thumbnail Downloader is a simple and efficient web app that allows users to fetch and download high-resolution thumbnails from any valid YouTube video URL. Built with Next.js, React, and Tailwind CSS, it ensures smooth performance and a responsive user experience.`,

            features: [
                {
                    title: "Thumbnail Extraction",
                    detail: "Automatically extract thumbnails from any valid YouTube video link by simply pasting the URL."
                },
                {
                    title: "High-Resolution Support",
                    detail: "Offers high-quality thumbnails including max resolution (maxresdefault) when available."
                },
                {
                    title: "One-Click Download",
                    detail: "Users can directly download thumbnails in one click without any extra steps."
                },
                {
                    title: "Clean UI",
                    detail: "User-friendly and responsive design powered by Tailwind CSS for optimal viewing across all devices."
                }
            ],

            usage_examples: [
                "Paste any YouTube video URL into the input field to preview its thumbnail.",
                "Choose from the available resolutions like maxresdefault, hqdefault, or mqdefault.",
                "Click the download button to save the selected thumbnail locally."
            ]
        },
        tags: [`/next.js`, `/tailwind.css`, `/typescript`],
        links: {
            live: {
                url: `https://yt-thumbnail-downloader-orpin.vercel.app/`,
                enabled: true
            },
            github: {
                url: `https://github.com/itsmeprinceyt/yt-thumbnail-downloader`,
                enabled: true
            },
            youtube: {
                url: ``,
                enabled: false
            }
        },
        banner: `/projects/yt-thumbnail-downloader/1.png`,
    },
    {
        id: `base64-converter`,
        name: `Image to Base64 Converter Tool`,
        description: `A web tool built with Next.js to convert images to Base64 strings, with image compression and download functionality.`,
        full_description: {
            intro: `This project is a responsive image-to-Base64 converter built with Next.js. Users can upload images, convert them to Base64, compress the image using a slider, and download the compressed image in PNG format. The tool offers a clean and mobile-friendly UI for seamless interaction.`,

            features: [
                {
                    title: "Image Upload",
                    detail: "Users can upload PNG, JPG, or JPEG images directly from their device to begin conversion."
                },
                {
                    title: "Base64 Conversion",
                    detail: "Converts uploaded images into Base64-encoded strings that can be copied or used in development."
                },
                {
                    title: "Compression Slider",
                    detail: "Adjustable slider lets users compress images before downloading to reduce file size."
                },
                {
                    title: "Download Compressed Image",
                    detail: "Download the optimized image in PNG format after compression."
                },
                {
                    title: "Responsive Design",
                    detail: "Mobile-friendly layout ensures the tool works flawlessly on both desktop and mobile devices."
                }
            ],

            dependencies: [
                "html-to-image",
                "browser-image-compression"
            ],

            usage_examples: [
                "Upload an image from your device to view its Base64 representation.",
                "Use the compression slider to reduce image quality before downloading.",
                "Copy the Base64 string to use directly in your CSS or HTML.",
                "Download the compressed version of the image in one click."
            ]
        },
        tags: [`/next.js`, `/tailwind-css`],
        links: {
            live: {
                url: `https://base64-image-converter.vercel.app/`,
                enabled: true
            },
            github: {
                url: `https://github.com/itsmeprinceyt/base64-image-converter`,
                enabled: true
            },
            youtube: {
                url: ``,
                enabled: false
            }
        },
        banner: `/projects/base64-converter/1.png`,
    },
    {
        id: `registration-form`,
        name: `Registration Form`,
        description: `A user registration form landing page built with Next.js, React Hook Form, and Tailwind CSS.`,
        full_description: {
            intro: `This is a clean and responsive user registration landing page built with Next.js. It includes form validation, modern styling, and an intuitive layout for capturing user data efficiently. The form demonstrates a real-world example of client-side validation and UI/UX best practices.`,

            features: [
                {
                    title: "User Registration",
                    detail: "Allows users to input details like name, email, and password to simulate account creation."
                },
                {
                    title: "Form Validation",
                    detail: "Utilizes React Hook Form to provide seamless client-side validation and error handling."
                },
                {
                    title: "Responsive Design",
                    detail: "Fully responsive layout optimized for mobile, tablet, and desktop devices using Tailwind CSS."
                },
                {
                    title: "Real-Time Feedback",
                    detail: "Displays validation errors and highlights incorrect fields immediately as users type."
                },
                {
                    title: "Submission Console Output",
                    detail: "On successful form submission, user input data is logged to the browser's console for debugging and preview purposes."
                }
            ],

            dependencies: [
                "React Hook Form"
            ],

            usage_examples: [
                "Open the app at https://registration-form-nextjs.vercel.app/",
                "Fill out your name, email, and password in the registration form.",
                "Try submitting with invalid fields to see validation errors in action.",
                "Open your browser console to inspect the form data after a successful submission."
            ]
        },
        tags: [`/next.js`, `/tailwind-css`],
        links: {
            live: {
                url: `https://registration-form-nextjs.vercel.app/`,
                enabled: true
            },
            github: {
                url: `https://github.com/itsmeprinceyt/registration_form_nextjs`,
                enabled: true
            },
            youtube: {
                url: `https://www.youtube.com/watch?v=M21wITuvN_c`,
                enabled: true
            }
        },
        banner: `/projects/registration-form/1.png`,
    },
    {
        id: `product-landing-page`,
        name: `Product Landing Page`,
        description: `A responsive product landing page built with Next.js and Tailwind CSS.`,
        full_description: {
            intro: `This is a sleek and responsive product landing page built using Next.js and Tailwind CSS. It showcases a fictional product with a focus on clean design, usability, and effective user engagement. The layout includes a feature-rich overview, call-to-action, and a contact form.`,

            features: [
                {
                    title: "Hero Section",
                    detail: "A bold, visually engaging introduction with a headline, subtext, and prominent call-to-action button to immediately capture user attention."
                },
                {
                    title: "Product Features",
                    detail: "Detailed visual sections to highlight key features and benefits, structured for readability and impact."
                },
                {
                    title: "Responsive Design",
                    detail: "Optimized layout for mobile, tablet, and desktop devices using Tailwind CSS."
                },
                {
                    title: "Contact Form",
                    detail: "An easy-to-use form for users to send inquiries, feedback, or requests about the product."
                }
            ],

            usage_examples: [
                "Visit the live page: https://kreomouse-nextjs.vercel.app/",
                "Read through the hero section and explore the product features.",
                "Use the contact form to simulate sending a message or inquiry.",
                "Customize the page for your own product by editing content and styles."
            ]
        },
        tags: [`/next.js`, `/tailwind-css`],
        links: {
            live: {
                url: `https://kreomouse-nextjs.vercel.app/`,
                enabled: true
            },
            github: {
                url: `https://github.com/itsmeprinceyt/kreomouse_nextjs`,
                enabled: true
            },
            youtube: {
                url: `https://www.youtube.com/watch?v=XBjNNUiJzOA`,
                enabled: true
            }
        },
        banner: `/projects/product-landing-page/1.png`,
    },
    {
        id: `food-shop-landing`,
        name: `Food Shop Landing Page`,
        description: `A clean, responsive food shop landing page with product listings and category filters.`,
        full_description: {
            intro: `This is a modern, responsive food shop website built using Next.js and Tailwind CSS. It displays a variety of food items neatly organized into categories like appetizers, main courses, and desserts. The project features a clean design with smooth responsiveness across devices, perfect for showcasing a restaurant or food business online.`,

            features: [
                {
                    title: "Food Menu",
                    detail: "Showcases an array of food items with high-quality images, names, descriptions, and prices categorized into sections such as appetizers, main courses, and desserts."
                },
                {
                    title: "Responsive Design",
                    detail: "Built using Tailwind CSS to ensure the layout is visually appealing and functional across all screen sizes including mobile, tablet, and desktop."
                },
                {
                    title: "Contact and About Us Sections",
                    detail: "Includes informational pages about the food shop’s background, mission, and ways for customers to get in touch easily."
                }
            ],

            usage_examples: [
                "Open the live site: https://food-shop-nextjs.vercel.app/",
                "Browse the food menu to see categorized dishes with prices and descriptions.",
                "Read the About Us and Contact pages to simulate a real-world food business presence.",
                "Run locally using `npm install` and `npm run dev` to explore and modify the project for your needs."
            ]
        },
        tags: [`/next.js`, `/tailwind-css`],
        links: {
            live: {
                url: `https://food-shop-nextjs.vercel.app/`,
                enabled: true
            },
            github: {
                url: `https://github.com/itsmeprinceyt/food_shop_nextjs`,
                enabled: true
            },
            youtube: {
                url: `https://www.youtube.com/watch?v=Qbw3Jb0FTnU`,
                enabled: true
            }
        },
        banner: `/projects/food-shop-landing/1.png`,
    }
];
/* ============================================================================= */
/* ============================================================================= */
export const playgroundProjects: Project[] = [
    {
        id: `reflex-time`,
        name: `Reflex Time`,
        description: `A fast-paced game where players hit numbers as quickly as possible within 60 seconds in the race to make the highest score possible.`,
        full_description: {
            intro: `Reflex Time is a fast-paced, interactive reflex game built with Next.js and Tailwind CSS. The objective is to click the correct random number displayed within a limited time to earn points. It challenges your reflexes and attention to detail, offering a simple yet addictive gameplay experience.`,

            features: [
                {
                    title: "Random Number Display",
                    detail: "A number appears on the screen, and players must quickly click the matching number from a grid of randomized options."
                },
                {
                    title: "60-Second Timer",
                    detail: "Each session lasts 60 seconds, encouraging fast-paced interaction and rapid decision-making."
                },
                {
                    title: "High Score Tracking",
                    detail: "Track and improve your performance by aiming to beat your highest score each time you play."
                }
            ],

            usage_examples: [
                "Visit the live game: https://reflex-time.vercel.app/",
                "Click 'Start' to begin your 60-second challenge.",
                "Click the number that matches the one displayed at the top.",
                "Try to hit as many correct numbers as possible before time runs out.",
                "Monitor your high score and aim to beat it in the next session."
            ]
        },
        tags: [`/next.js`, `/tailwind-css`],
        links: {
            live: { url: `https://reflex-time.vercel.app/`, enabled: true },
            github: { url: `https://github.com/itsmeprinceyt/reflex-time`, enabled: true },
            youtube: { url: ``, enabled: false },
        },
        banner: `/projects/reflex-time/1.png`,
    },
];
/* ============================================================================= */
/* ============================================================================= */
export const bestProjects: Project[] = [
    majorProjects[0],
    majorProjects[2],
    majorProjects[5]
];