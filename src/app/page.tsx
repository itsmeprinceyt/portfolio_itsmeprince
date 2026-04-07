"use client";
import { Download } from "lucide-react";
import downloadResume from "../utils/downloadresume.util";
import PageWrapper from "./(components)/PageWrapper";
import { motion } from "framer-motion";
import ShimmerButton from "./(components)/ShimmerButton";

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

        <ShimmerButton
          animationDelay={0.8}
          onClick={downloadResume}
          className="mt-2"
        >
          <Download
            strokeWidth={1}
            size={17}
            className="group-hover:translate-y-0.5 transition-transform duration-300"
          />
          resume
        </ShimmerButton>

        {/* Subtle glow */}
        <div className="absolute w-75 h-75 bg-white/5 blur-3xl rounded-full -z-10" />
      </div>
    </PageWrapper>
  );
}
