"use client";
import { useEffect, useState } from "react";

export default function useBirthday(birthDate: Date) {
  const [countdown, setCountdown] = useState(() =>
    calculateCountdown(birthDate)
  );

  const age = calculateAge(birthDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(birthDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  return { age, countdown };
}

function calculateAge(birthDate: Date): number {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }

  return age;
}

function calculateCountdown(birthDate: Date): string {
  const today = new Date();

  if (isBirthdayToday(birthDate, today)) {
    return "Happy Birthday to me!";
  }

  const nextBirthday = getNextBirthdayDate(birthDate, today);
  const timeDiff = nextBirthday.getTime() - today.getTime();

  const days = Math.floor(timeDiff / 86400000);
  const hours = Math.floor((timeDiff % 86400000) / 3600000);
  const minutes = Math.floor((timeDiff % 3600000) / 60000);
  const seconds = Math.floor((timeDiff % 60000) / 1000);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);

  return parts.join(" ");
}

function isBirthdayToday(birthDate: Date, today: Date): boolean {
  return (
    birthDate.getMonth() === today.getMonth() &&
    birthDate.getDate() === today.getDate()
  );
}

function getNextBirthdayDate(birthDate: Date, today: Date): Date {
  const nextBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  return nextBirthday;
}
