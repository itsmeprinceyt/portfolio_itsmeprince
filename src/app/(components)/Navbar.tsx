"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS, STAGGER_DELAYS } from "../../utils/navbar.util";
import Link from "next/link";

export default function CrystalNavbar() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── Navbar — only the crystal ball, pinned top-center ── */}
      <nav className="fixed top-0 inset-x-0 z-9999 flex justify-center pt-3.5 pointer-events-none">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="group relative pointer-events-auto w-5 h-5 cursor-pointer focus:outline-none"
        >
          {/* Three staggered pulse rings */}
          <span className="pulse-ring" />
          <span className="pulse-ring" />
          <span className="pulse-ring" />

          {/* Crystal ball */}
          <div
            className="
              crystal-ball
              relative w-5 h-5 rounded-full overflow-hidden
              shadow-[0_0_8px_2px_rgba(255,255,255,0.08),0_0_20px_4px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.8)]
              transition-[transform,box-shadow] duration-200 ease-out
              group-hover:scale-[1.15]
              group-hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.12),0_0_30px_8px_rgba(80,80,80,0.3),inset_0_1px_2px_rgba(255,255,255,0.22),inset_0_-1px_2px_rgba(0,0,0,0.8)]
            "
          />
        </button>
      </nav>

      {/* ── Full-screen overlay ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        className={`
          fixed inset-0 z-9998
          flex flex-col items-center justify-center gap-3
          transition-all duration-400 ease-in-out
          ${
            open
              ? "bg-black/60 backdrop-blur-md pointer-events-auto"
              : "bg-transparent pointer-events-none"
          }
        `}
      >
        {/* Nav item list */}
        {NAV_ITEMS.map(({ label, href }, i) => (
          <div
            key={label}
            className={`
             transition-all duration-350 ease-out
              ${STAGGER_DELAYS[i]}
              ${
                open
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-0 scale-100"
              }
            `}
          >
            <Link
              href={href}
              onClick={() => setOpen(false)}
              className="
                flex items-center justify-center
                w-50 px-7 py-5
                rounded-md
                bg-stone-950 hover:bg-white
                border border-stone-900
                text-white hover:text-black
                text-sm tracking-widest uppercase
                 cursor-pointer hover:scale-110
                 transition-all duration-150 ease-in-out
              "
            >
              {label}
            </Link>
          </div>
        ))}

        {/* Dismiss hint */}
        <p
          className={`
            fixed bottom-8 left-1/2 -translate-x-1/2
            text-[10px] tracking-widest text-center uppercase text-white/20
            pointer-events-none select-none
            transition-opacity duration-400 ease-in-out
            ${open ? "opacity-100 delay-500" : "opacity-0"}
          `}
        >
          press esc or
          <br /> click outside to close
        </p>
      </div>
    </>
  );
}
