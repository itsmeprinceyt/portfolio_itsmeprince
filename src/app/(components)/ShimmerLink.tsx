"use client";
import Link from "next/link";
import { ShimmerLinkProps } from "../../types/button.type";

// Used for Navbar full screen
export default function ShimmerLink({
  children,
  className = "",
  onClick,
  ...linkProps
}: ShimmerLinkProps) {
  return (
    <Link
      onClick={onClick}
      className={`
        group
        relative overflow-hidden
        flex items-center justify-center
        px-4 sm:px-6 md:px-7
        py-2.5 sm:py-4 md:py-5
        bg-stone-950
        border border-stone-900 hover:border-stone-800
        text-white
        tracking-widest uppercase
        cursor-pointer hover:scale-110
        transition-all duration-150 ease-in-out
        ${className}
      `}
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
