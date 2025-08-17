"use client";
import PageWrapper from "../(components)/PageWrapper";
import Divider from "../(components)/Components/Divider";
import ExperienceCard from "../(components)/ExperienceCard";
import { getTagStyle } from "../../utility/ExperienceCSS.util";

export default function Education() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center gap-8 text-stone-300 p-5">
        <h2 className="text-4xl text-glow-white text-stone-300 font-bold">
          Experience
        </h2>
        <Divider />

        <div className="flex flex-col gap-8 relative w-full max-w-[600px]">
          <ExperienceCard
            company="RagyaTech"
            role="Full Stack MERN Developer"
            period="Aug 2025 – Present"
            mode="On-Site"
            colorClass="border-blue-500"
            titleColor="text-blue-400"
            tagStyle={getTagStyle("blue")}
            description={[
              "Developed and deployed end-to-end full stack applications to meet client and service requirements.",
              "Managed the entire project lifecycle, from database design and migrations to scalable deployment.",
              "Designed and implemented user-friendly, high-performance UI/UX that balances aesthetics with speed and efficiency.",
            ]}
            links={[
              { label: "Official Website", href: "https://ragyatech.in/" },
            ]}
          />

          <ExperienceCard
            company="Mazoku Bot"
            role="Bot Developer"
            period="Mar 2025 – Present"
            mode="Remote"
            colorClass="border-yellow-500"
            titleColor="text-yellow-400"
            tagStyle={getTagStyle("yellow")}
            description={[
              "Developed backend services, commands, and API integrations for Mazoku Bot.",
              "Collaborated on design improvements for better player engagement and UI flow.",
              "Worked closely with team to ensure scalability and uptime under heavy load.",
            ]}
            links={[
              { label: "Mazoku Website", href: "https://mazoku.cc/" },
              { label: "Mazoku Discord Server", href: "https://discord.gg/mazoku" },
            ]}
          />

        </div>
      </div>
    </PageWrapper>
  );
}
