"use client";
import { useEffect, useState } from "react";

export default function useCodingSince(codingSinceYear: number) {
  const [yearsSince, setYearsSince] = useState(() =>
    calculateYearsSince(codingSinceYear)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newYears = calculateYearsSince(codingSinceYear);
      if (newYears !== yearsSince) {
        setYearsSince(newYears);
      }
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, [codingSinceYear, yearsSince]);

  return yearsSince;
}

function calculateYearsSince(codingSinceYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - codingSinceYear;
}
