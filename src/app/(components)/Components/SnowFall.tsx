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
      enable3DRotation
      speed={[0.05, 0.6]} // Very slow drift — barely perceptible movement
      wind={[-0.3, 0.1]} // Slight leftward drift, minimal horizontal push
      radius={[0.3, 0.9]} // Tiny particles — no big obvious flakes
      snowflakeCount={205} // Sparse — real snow at distance looks sparse
      opacity={[0.08, 0.65]} // Very translucent — feels atmospheric, not decorative
      rotationSpeed={[-0.2, 0.2]} // Barely any rotation — small flakes tumble slowly
    />
  );
}
