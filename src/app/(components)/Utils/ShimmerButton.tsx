"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ShimmerButtonProps } from "../../../types/button.type";

// Shimmer Replacement for <button><button/>
export default function ShimmerButton({
  children,
  animationDelay = 0,
  className = "",
  ...motionProps
}: ShimmerButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

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
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
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
