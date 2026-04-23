"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShimmerLinkProps } from "../../../types/button.type";

const MotionLink = motion.create(Link);

// Shimmer Replacement for <Link><Link/>
export default function ShimmerLinkNormal({
  children,
  className = "",
  onClick,
  animationDelay = 0,
  external,
  ...linkProps
}: ShimmerLinkProps & { external?: boolean }) {
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
    <MotionLink
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`
        group relative
        text-[12px] uppercase tracking-widest
        px-8 py-3
        border border-stone-900
        text-stone-300 hover:text-white hover:border-stone-800
        overflow-hidden
        cursor-pointer
        transition-all duration-150 ease-out
        ${className}
      `}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      {...linkProps}
    >
      <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <span className="relative text-[12px] flex items-center gap-2">
        {children}
      </span>
    </MotionLink>
  );
}
