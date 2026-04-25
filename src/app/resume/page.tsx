"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageWrapper from "../(components)/PageWrapper";
import { motion } from "framer-motion";
import { Download, Home } from "lucide-react";
import resumeDownloaderUtility from "../../utils/resumeDownloader.util";
import ShimmerButton from "../(components)/Utils/ShimmerButton";
import ShimmerLinkNormal from "../(components)/Utils/ShimmerLinkNormal";

export default function ResumePage() {
  const router = useRouter();
  useEffect(() => {
    resumeDownloaderUtility();
  }, [router]);

  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-5 justify-center min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-4xl tracking-widest text-white uppercase"
          onClick={resumeDownloaderUtility}
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

        <ShimmerButton
          animationDelay={0.8}
          onClick={resumeDownloaderUtility}
          className="w-50"
        >
          <Download
            strokeWidth={1}
            size={17}
            className="group-hover:translate-y-0.5 transition-transform duration-300"
          />
          resume
        </ShimmerButton>

        <ShimmerLinkNormal
          animationDelay={0.8}
          href={"/"}
          className="flex items-center justify-center w-50"
        >
          <Home
            strokeWidth={1}
            size={17}
            className="group-hover:translate-y-0.5 transition-transform duration-300"
          />
          home
        </ShimmerLinkNormal>
      </div>
    </PageWrapper>
  );
}
