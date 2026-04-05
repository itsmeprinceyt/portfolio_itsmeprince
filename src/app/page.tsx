"use client";
import { Download } from "lucide-react";
import downloadResume from "../utils/downloadresume.util";
import PageWrapper from "./(components)/PageWrapper";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <PageWrapper>
      <div className="text-white min-h-screen flex flex-col items-center justify-center text-center px-6 uppercase">
        {/* Top subtle intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.5em] text-stone-500 mb-4"
        >
          I AM
        </motion.p>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-cinzel tracking-wide"
        >
          Mohd Uvaish
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-24 h-px bg-stone-800 my-4"
        />

        {/* AKA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6 }}
          className="text-sm tracking-[0.4em] text-stone-500"
        >
          ALSO KNOWN AS
        </motion.p>

        {/* Alias */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-4xl tracking-widest mt-2 mb-14"
        >
          itsme prince
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={downloadResume}
          className="group relative text-[12px] uppercase tracking-widest mt-2 px-8 py-3 border border-stone-900 text-stone-300 hover:text-white hover:border-stone-800 overflow-hidden transition-colors duration-300 cursor-pointer"
        >
          {/* shimmer streak */}
          <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <span className="relative flex items-center gap-2">
            <span className="inline-block group-hover:translate-y-0.5 transition-transform duration-300">
              <Download strokeWidth={1} size={17} className="mb-0.5" />
            </span>
            resume
          </span>
        </motion.button>

        {/* Subtle glow */}
        <div className="absolute w-75 h-75 bg-white/5 blur-3xl rounded-full -z-10" />
      </div>
    </PageWrapper>
  );
}
