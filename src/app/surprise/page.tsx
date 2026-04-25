"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { QUOTES } from "../../utils/data/quotes.util";
import PageWrapper from "../(components)/PageWrapper";

export default function SurprisePage() {
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const ref = useRef<HTMLButtonElement>(null);

  const goToNext = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
      setVisible(true);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 7000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const quote = QUOTES[index];

  return (
    <PageWrapper>
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        {/* Quote card */}
        <button
          ref={ref}
          type="button"
          onClick={goToNext}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          aria-label="Next quote"
          className={`
          group 
          relative max-w-xl w-full text-center
          cursor-pointer focus:outline-none
          transition-opacity duration-400 ease-in-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            transition: "transform 0.05s linear, opacity 0.4s ease-in-out",
          }}
        >
          {/* Shimmer border frame */}
          <div className="relative overflow-hidden bg-black/20 border border-stone-900 hover:border-stone-700 transition-colors duration-300 px-8 py-10 sm:px-12 sm:py-14 ">
            {/* Shimmer streak */}
            <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Quote text */}
            <p className="relative text-stone-300 text-base sm:text-lg tracking-wide leading-relaxed font-light">
              &ldquo;{quote.quote}&rdquo;
            </p>

            {/* Author */}
            {quote.author && (
              <p className="relative mt-6 text-[11px] uppercase tracking-[0.3em] text-stone-400">
                — {quote.author}
              </p>
            )}
          </div>

          {/* Click hint */}
          <p
            style={{ animation: "hint-pulse 3s ease-in-out infinite" }}
            className="mt-5 text-[8px] uppercase tracking-[0.3em] text-stone-400"
          >
            click to reveal next or wait.
          </p>
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-2 mt-10">
          {QUOTES.map((_, i) => (
            <span
              key={i}
              className={`
              block rounded-full transition-all duration-300
              ${i === index ? "w-3 h-1 bg-stone-700" : "w-1 h-1 bg-stone-900"}
            `}
            />
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}
