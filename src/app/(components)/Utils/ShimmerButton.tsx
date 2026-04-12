"use client";
import { motion } from "framer-motion";
import { ShimmerButtonProps } from "../../../types/button.type";

// Shimmer Replacement for <button><button/>
export default function ShimmerButton({
  children,
  animationDelay = 0,
  className = "",
  ...motionProps
}: ShimmerButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
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
      {...motionProps}
    >
      {/* Shimmer streak */}
      <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
