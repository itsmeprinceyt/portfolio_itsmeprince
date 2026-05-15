"use client";
import { Home } from "lucide-react";
import PageWrapper from "../PageWrapper";
import ShimmerLinkNormal from "../Utils/ShimmerLinkNormal";
import { motion } from "framer-motion";

export default function BlogsPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center px-6 gap-5 justify-center min-h-screen">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-5 py-24 max-w-5xl text-white"
        >
          Coming soon
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
        </motion.section>
      </div>
    </PageWrapper>
  );
}
