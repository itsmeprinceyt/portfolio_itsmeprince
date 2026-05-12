"use client";
import GitHubSection from "../GitHubSection";
import PageWrapper from "../PageWrapper";

export default function GitHubPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center px-6 gap-5 justify-center min-h-screen">
        <GitHubSection />
      </div>
    </PageWrapper>
  );
}
