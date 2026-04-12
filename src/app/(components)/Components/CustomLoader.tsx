"use client";
import { motion } from "framer-motion";
import PageWrapper from "../PageWrapper";

export default function CustomLoader() {
  return (
    <PageWrapper>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Outer Glow */}
        <div className="absolute w-40 h-40 bg-white/5 blur-3xl rounded-full" />

        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-12 h-12 border-2 border-stone-700 border-t-white rounded-full"
        />

        {/* Optional Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          className="absolute mt-24 text-xs tracking-[0.4em] text-stone-400 uppercase"
        >
          loading
        </motion.p>
      </div>
    </PageWrapper>
  );
}
