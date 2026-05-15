"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { GITHUB_USERNAME } from "../../../utils/main.util";
import { LANG_COLORS } from "../../../utils/githubsection.util";
import { GitHubRepo } from "../../../types/githubstats.type";

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-stone-800/50 rounded-sm ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-linear-to-r from-transparent via-stone-700/30 to-transparent" />
    </div>
  );
}

function LangRowSkeleton({ width }: { width: string }) {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="w-2 h-2 rounded-full shrink-0" />
      <Skeleton className="h-3 w-20" />
      <div className="flex-1 h-1 rounded-full bg-stone-800/80">
        <Skeleton className={`h-1 rounded-full ${width}`} />
      </div>
      <Skeleton className="w-4 h-3" />
    </div>
  );
}

const SKELETON_WIDTHS = ["w-full", "w-4/5", "w-3/5", "w-2/5", "w-1/4"];

export default function GitHubTopLanguages() {
  const [topLangs, setTopLangs] = useState<{ name: string; count: number }[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const { data } = await axios.get<GitHubRepo[]>(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        const validRepos = Array.isArray(data) ? data : [];

        const langMap: Record<string, number> = {};

        validRepos.forEach((repo) => {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] ?? 0) + 1;
          }
        });

        const langs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }));

        setTopLangs(langs);
      } catch {
        console.error("Failed to fetch GitHub languages");
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-5 w-full">
        <Skeleton className="h-2.5 w-44" />
        <div className="flex flex-col gap-2.5 w-full">
          {SKELETON_WIDTHS.map((width, i) => (
            <LangRowSkeleton key={i} width={width} />
          ))}
        </div>
      </div>
    );
  }

  if (topLangs.length === 0) return null;

  const max = topLangs[0].count;

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <p className="text-xs tracking-[0.4em] text-stone-600 uppercase">
        GitHub - Top Languages
      </p>

      <div className="flex flex-col gap-2.5 w-full">
        {topLangs.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-center gap-3"
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{
                backgroundColor: LANG_COLORS[lang.name] ?? "#555",
              }}
            />

            <span className="text-xs text-stone-500 w-24 uppercase tracking-wider">
              {lang.name}
            </span>

            <div className="flex-1 h-1 rounded-full bg-stone-800/80 relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.07 }}
                style={{
                  width: `${(lang.count / max) * 100}%`,
                  backgroundColor: LANG_COLORS[lang.name] ?? "#555",
                  transformOrigin: "left",
                }}
                className="absolute top-0 left-0 h-full rounded-full"
              />
            </div>

            <span className="text-xs text-stone-700 w-6 text-right">
              {lang.count}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
