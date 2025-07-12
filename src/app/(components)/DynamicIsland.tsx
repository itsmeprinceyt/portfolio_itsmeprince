"use client";
import type DynamicIslandProps from '../../types/DynamicIsland.type';

export default function DynamicIsland({ scrollTo, refs, activeSection, buttons }: DynamicIslandProps) {
    const baseBtn: string = "border border-neutral-900 py-2 px-5 rounded-full transition-colors";

    const getBtnStyle = (section: string) =>
        `${baseBtn} ${activeSection === section
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`;

    return (
        <div className="z-50 fixed left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-neutral-900 to-neutral-950 p-1 rounded-full text-neutral-300 border border-neutral-900 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/40 text-xs flex gap-1">
            {buttons && buttons.length > 0 ? (
                buttons.map((btn, i) => (
                    <button key={i} onClick={btn.onClick} className={`${baseBtn} text-white hover:bg-white hover:text-black`}>
                        {btn.label}
                    </button>
                ))
            ) : (
                <>
                    <button
                        onClick={() => refs?.homeRef && scrollTo?.(refs.homeRef)}
                        className={getBtnStyle("home")}
                    >
                        /
                    </button>
                    <button
                        onClick={() => refs?.aboutRef && scrollTo?.(refs.aboutRef)}
                        className={getBtnStyle("about")}
                    >
                        /about
                    </button>
                    <button
                        onClick={() => refs?.skillsRef && scrollTo?.(refs.skillsRef)}
                        className={getBtnStyle("skills")}
                    >
                        /skills
                    </button>
                    <button
                        onClick={() => refs?.projectsRef && scrollTo?.(refs.projectsRef)}
                        className={getBtnStyle("projects")}
                    >
                        /projects
                    </button>
                </>

            )}
        </div>
    );
}
