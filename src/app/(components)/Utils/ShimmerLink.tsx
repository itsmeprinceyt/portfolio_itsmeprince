"use client";
import Link from "next/link";
import { useRef } from "react";
import { ShimmerLinkProps } from "../../../types/button.type";

// Used for Navbar full screen
export default function ShimmerLink({
  children,
  className = "",
  onClick,
  ...linkProps
}: ShimmerLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <Link
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        group
        relative overflow-hidden
        flex items-center justify-center
        px-4 sm:px-6 md:px-7
        py-4.5 sm:py-4 md:py-5
        bg-stone-950
        border border-stone-900 hover:border-stone-800
        text-white
        tracking-widest uppercase
        cursor-pointer
        transition-all duration-150 ease-out
        ${className}
      `}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      {...linkProps}
    >
      {/* Shimmer streak */}
      <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <span className="relative text-[12px] flex items-center gap-2">
        {children}
      </span>
    </Link>
  );
}
