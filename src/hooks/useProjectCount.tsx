"use client";
import { useMemo } from "react";
import {
  majorProjects,
  miniProjects,
  playgroundProjects,
} from "../utils/data/projects/ProjectData.util";

export default function useProjectCount() {
  const counts = useMemo(() => {
    const major = majorProjects.length;
    const mini = miniProjects.length;
    const playground = playgroundProjects.length;

    return {
      total: major + mini + playground,
    };
  }, []);

  return counts;
}
