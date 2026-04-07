"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageWrapper from "../(components)/PageWrapper";
import { motion } from "framer-motion";
import { Download, Home } from "lucide-react";
import resumeDownloaderUtility from "../../utils/resumeDownloader.util";

export default function ResumePage() {
  const router = useRouter();
  useEffect(() => {
    resumeDownloaderUtility();
  }, [router]);

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-4xl tracking-widest text-white uppercase"
        >
          resume
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-24 h-px bg-stone-800 my-4"
        />

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          href="/"
          className="group relative text-[12px] uppercase flex items-center justify-center w-50 tracking-widest mt-2 px-8 py-3 border border-stone-900 text-stone-300 hover:text-white hover:border-stone-800 overflow-hidden transition-colors duration-300 cursor-pointer"
        >
          {/* shimmer streak */}
          <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <span className="relative flex items-center gap-2">
            <span className="inline-block group-hover:translate-y-0.5 transition-transform duration-300">
              <Home strokeWidth={1} size={17} className="mb-0.5" />
            </span>
            Home
          </span>
        </motion.a>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={resumeDownloaderUtility}
          className="group relative text-[12px] uppercase tracking-widest flex items-center justify-center w-50 mt-2 px-8 py-3 border border-stone-900 text-stone-300 hover:text-white hover:border-stone-800 overflow-hidden transition-colors duration-300 cursor-pointer"
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
      </div>
    </PageWrapper>
  );
}
