"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { NAV_ITEMS, STAGGER_DELAYS } from "../../utils/navbar.util";
import { ChevronRight } from "lucide-react";
import ShimmerLink from "./Utils/ShimmerLink";
import { getLenis } from "../../utils/Lenis.util";

export default function CrystalNavbar() {
  const [open, setOpen] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayLenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const pageLenis = getLenis();

    if (open) {
      pageLenis?.stop();

      if (overlayRef.current) {
        overlayLenis.current = new Lenis({
          wrapper: overlayRef.current,
          content: overlayRef.current,
          duration: 1.2,
          smoothWheel: true,
        });

        function raf(time: number) {
          overlayLenis.current?.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      }
    } else {
      overlayLenis.current?.destroy();
      overlayLenis.current = null;
      pageLenis?.start();
    }
  }, [open]);

  return (
    <>
      {/* ── Navbar — only the crystal ball, pinned top-center ── */}
      <nav className="fixed top-0 inset-x-0 z-9999 flex justify-center py-3.5 pointer-events-none">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="group relative pointer-events-auto w-7 h-7 cursor-pointer focus:outline-none"
        >
          {/* Six rings — two bursts of three for double-pulse effect */}
          <span className="pulse-ring" />
          <span className="pulse-ring" />
          <span className="pulse-ring" />

          {/* Crystal ball */}
          <div
            className="
              crystal-ball
              relative w-7 h-7 rounded-full overflow-hidden
              shadow-[0_0_8px_2px_rgba(255,255,255,0.08),0_0_20px_4px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.8)]
              transition-all duration-200 ease-in-out
              group-hover:scale-[1.15]
              group-hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.12),0_0_30px_8px_rgba(80,80,80,0.3),inset_0_1px_2px_rgba(255,255,255,0.22),inset_0_-1px_2px_rgba(0,0,0,0.8)]
            "
          />

          {/* Hint text */}
          <div className="absolute -left-16 top-2 cursor-pointer">
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
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        ref={overlayRef}
        className={`
          fixed inset-0 z-9998
          flex flex-col items-center 
          transition-all duration-400 ease-in-out
          ${open ? "overflow-y-auto" : "overflow-hidden"}
          ${
            open
              ? "bg-black/80 backdrop-blur-sm pointer-events-auto"
              : "bg-transparent pointer-events-none invisible"
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
              <ShimmerLink
                href={href}
                onClick={() => setOpen(false)}
                className="w-full max-w-70 sm:max-w-[320px] md:max-w-50"
              >
                {label}
              </ShimmerLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
