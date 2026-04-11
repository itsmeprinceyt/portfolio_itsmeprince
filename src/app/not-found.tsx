"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => setToggle((t) => !t), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
        404
      </p>
      <h1 className="text-white text-xl font-light tracking-widest uppercase">
        {toggle ? "page not found" : "this page doesn't exist"}
      </h1>
      <div className="h-px w-16 bg-stone-800" />

      <motion.a
        href="/"
        className="group relative text-[12px] uppercase flex items-center justify-center w-50 tracking-widest mt-2 px-8 py-3 border border-stone-900 text-stone-300 hover:text-white hover:border-stone-800 overflow-hidden transition-colors duration-300 cursor-pointer"
      >
        <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <span className="relative flex items-center gap-2">
          <span className="inline-block group-hover:translate-y-0.5 transition-transform duration-300">
            <Home strokeWidth={1} size={17} className="mb-0.5" />
          </span>
          Home
        </span>
      </motion.a>
    </main>
  );
}
