"use client";
import { ANNOUNCEMENT_BAR_HIDE_DURATION_MS, ANNOUNCEMENT_BAR_STORAGE_KEY } from "@/utils/main.util";
import { useEffect, useState } from "react";

interface AnnouncementBarProps {
  text?: string;
}

export default function AnnouncementBar({
  text = "",
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedTimestamp = localStorage.getItem(ANNOUNCEMENT_BAR_STORAGE_KEY);

    if (storedTimestamp) {
      const lastDismissedAt = Number(storedTimestamp);

      if (!Number.isNaN(lastDismissedAt)) {
        const shouldRemainHidden =
          Date.now() - lastDismissedAt < ANNOUNCEMENT_BAR_HIDE_DURATION_MS;

        if (shouldRemainHidden) return;
      }
    }

    setIsVisible(true);
  }, []);

  const dismissBar = () => {
    localStorage.setItem(ANNOUNCEMENT_BAR_STORAGE_KEY, String(Date.now()));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-black text-white text-sm py-3 px-4 flex items-center justify-center relative">
      <p className="text-center">{text}</p>

      <button
        type="button"
        onClick={dismissBar}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-300 transition cursor-pointer"
        aria-label="Dismiss announcement"
      >
        ✕
      </button>
    </div>
  );
}
