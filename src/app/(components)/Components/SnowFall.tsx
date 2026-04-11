"use client";
import Snowfall from "react-snowfall";

/**
 * @description Conditionally renders a snowfall animation during the winter festive period.
 * The component displays animated snowflakes only if the current client-side date
 * falls between **December 1st and January 5th** (inclusive).
 *
 * This logic runs exclusively on the client to avoid hydration mismatches caused by
 * date-based rendering differences between server and browser.
 *
 * @workflow
 * 1. Retrieve the current client-side date using `Date`.
 * 2. Extract the month and day values.
 * 3. Determine if the date lies within the allowed winter range:
 *    - December 1 → December 31
 *    - January 1 → January 5
 * 4. If outside the range, return `null` (no render).
 * 5. If inside the range, render the `react-snowfall` animation with controlled motion parameters.
 */
export default function SnowFall() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  const isWinterSeason =
    (month === 11 && day >= 1) || (month === 0 && day <= 5);

  if (!isWinterSeason) return null;

  return (
    <Snowfall
      speed={[0.2, 0.8]}
      wind={[-1, 0.5]}
      radius={[0.3, 1.8]}
      snowflakeCount={350}
      opacity={[0.2, 0.7]}
      rotationSpeed={[-0.5, 0.5]}
    />
  );
}
