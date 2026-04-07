import { type LinkProps } from "next/link";
import { type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export interface ShimmerButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  animationDelay?: number;
  className?: string;
}

export interface ShimmerLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
