"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS, STAGGER_DELAYS } from "../../utils/navbar.util";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
              transition-all duration-150 ease-in-out
              group-hover:scale-[1.15]
              group-hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.12),0_0_30px_8px_rgba(80,80,80,0.3),inset_0_1px_2px_rgba(255,255,255,0.22),inset_0_-1px_2px_rgba(0,0,0,0.8)]
            "
          />

          {/* Hint text */}
          <div className="absolute -left-16 top-1 pointer-events-none">
            <span
              style={{ animation: "hint-pulse 3s ease-in-out infinite" }}
              className="text-[9px] tracking-[0.3em] uppercase text-stone-500 whitespace-nowrap flex items-center justify-center"
            >
              {open ? "CLOSE" : "MENU"}{" "}
              <ChevronRight className="mb-0.5 text-stone-700" size={14} />
            </span>
          </div>
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
          flex flex-col items-center 
          transition-all duration-400 ease-in-out
          overflow-y-auto
          ${
            open
              ? "bg-black/60 backdrop-blur-md pointer-events-auto"
              : "bg-transparent pointer-events-none"
          }
        `}
      >
        {/* Container for nav items with top margin instead of center */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-full px-4 my-15 sm:my-24 md:my-32">
          {NAV_ITEMS.map(({ label, href }, i) => (
            <div
              key={label}
              className={`
          transition-all duration-350 ease-out w-full flex justify-center
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
                group
                relative overflow-hidden
                flex items-center justify-center
                w-full max-w-70 sm:max-w-[320px] md:max-w-50
                px-4 sm:px-6 md:px-7
                py-2.5 sm:py-4 md:py-5
                bg-stone-950
                border border-stone-900 hover:border-stone-800
                text-white
                 sm:text-sm md:text-sm
                tracking-widest uppercase
                cursor-pointer hover:scale-110
                transition-all duration-150 ease-in-out
              "
              >
                {/* shimmer streak */}
                <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                <span className="relative text-[12px]">{label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
