"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { GITHUB_USERNAME } from "../../../utils/main.util";
import { LANG_COLORS } from "../../../utils/githubsection.util";
import { GitHubRepo } from "../../../types/githubstats.type";

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
          .map(([name, count]) => ({
            name,
            count,
          }));

        setTopLangs(langs);
      } catch {
        console.error("Failed to fetch GitHub languages");
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  if (loading || topLangs.length === 0) return null;

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
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.07,
                }}
                style={{
                  width: `${(lang.count / max) * 100}%`,
                  backgroundColor: LANG_COLORS[lang.name] ?? "#555",
                  transformOrigin: "left",
                }}
                className="absolute top-0 left-0 h-full opacity-70 rounded-full"
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
