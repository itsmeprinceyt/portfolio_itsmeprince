import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
}

export function getLenis() {
  return lenis;
}
