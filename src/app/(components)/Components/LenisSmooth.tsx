"use client";
import { useEffect } from "react";
import { initLenis } from "../../../utils/Lenis.util";

export default function LenisSmooth() {
  useEffect(() => {
    initLenis();
  }, []);

  return null;
}
