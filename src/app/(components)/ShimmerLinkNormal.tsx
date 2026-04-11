"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShimmerLinkProps } from "../../types/button.type";

const MotionLink = motion.create(Link);

// Shimmer Replacement for <Link><Link/>
export default function ShimmerLinkNormal({
  children,
  className = "",
  onClick,
  animationDelay = 0,
  ...linkProps
}: ShimmerLinkProps) {
  return (
    <MotionLink
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      onClick={onClick}
      className={`
        group relative
        text-[12px] uppercase tracking-widest
        px-8 py-3
        border border-stone-900
        text-stone-300 hover:text-white hover:border-stone-800
        overflow-hidden
        transition-colors duration-300
        cursor-pointer
        ${className}
      `}
      {...linkProps}
    >
      <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <span className="relative text-[12px] flex items-center gap-2">
        {children}
      </span>
    </MotionLink>
  );
}
