"use client";
import { Home } from "lucide-react";
import PageWrapper from "../PageWrapper";
import ShimmerLinkNormal from "../Utils/ShimmerLinkNormal";

export default function BlogsPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-5 justify-center min-h-screen text-white">
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
      </div>
    </PageWrapper>
  );
}
