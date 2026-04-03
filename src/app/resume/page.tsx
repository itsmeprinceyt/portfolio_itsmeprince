"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/cv/Mohd_Uvaish_Resume.pdf";
    link.download = "Mohd_Uvaish_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    router.push("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg">Downloading resume...</p>
    </div>
  );
}
