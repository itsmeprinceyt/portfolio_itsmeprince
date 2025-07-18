"use client";
import type DynamicIslandProps from '../../types/DynamicIsland.type';

export default function DynamicIsland({ scrollTo, refs, buttons }: DynamicIslandProps) {
    const baseBtn: string = "border border-neutral-900 py-2 px-5 rounded-full transition-colors hover:bg-white hover:text-black";

    return (
        <div className="z-50 fixed top-0 h-[80px] bg-black/30 w-full flex items-center justify-center">
            <div className="fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-neutral-900 to-neutral-950 p-1 rounded-full text-neutral-300 border border-neutral-800 shadow-xl shadow-neutral-700/10 hover:scale-105 hover:shadow-neutral-700/40 text-xs flex gap-1">
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
                            className={`${baseBtn}`}
                        >
                            /
                        </button>
                        <button
                            onClick={() => refs?.aboutRef && scrollTo?.(refs.aboutRef)}
                            className={`${baseBtn}`}
                        >
                            /about
                        </button>
                        <button
                            onClick={() => refs?.skillsRef && scrollTo?.(refs.skillsRef)}
                            className={`${baseBtn}`}
                        >
                            /skills
                        </button>
                        <button
                            onClick={() => refs?.projectsRef && scrollTo?.(refs.projectsRef)}
                            className={`${baseBtn}`}
                        >
                            /projects
                        </button>
                    </>

                )}
            </div>
        </div>
    );
}
