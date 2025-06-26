import { RefObject } from "react";

export default interface ScrollToButtonProps {
  scrollRef: RefObject<HTMLElement | null>;
  className?: string;
  imageSrc?: string;
  alt?: string;
}
