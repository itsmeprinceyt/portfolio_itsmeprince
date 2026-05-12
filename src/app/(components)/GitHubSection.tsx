"use client";
import { useEffect, useState } from "react";
import { GitHubRepo, GitHubUser } from "../../types/githubstats.type";
import { GITHUB_USERNAME } from "../../utils/main.util";
import { motion } from "framer-motion";
import StatCard from "./Components/GitHubSection.Stats";
import {
  Binary,
  BookOpen,
  Code2,
  ExternalLink,
  Star,
  Users,
} from "lucide-react";
import { LANG_COLORS } from "../../utils/githubsection.util";
import RepoCard from "./Components/GitHubSection.Repo";
import ShimmerLinkNormal from "./Utils/ShimmerLinkNormal";
import axios from "axios";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

export default function GitHubSection({
  skills = true,
  projects = true,
}: {
  skills?: boolean;
  projects?: boolean;
}) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [topLangs, setTopLangs] = useState<{ name: string; count: number }[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const headers = {
          Accept: "application/vnd.github+json",
        };

        const [userResponse, reposResponse] = await Promise.all([
          axios.get<GitHubUser>(
            `https://api.github.com/users/${GITHUB_USERNAME}`,
            { headers }
          ),

          axios.get<GitHubRepo[]>(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            { headers }
          ),
        ]);

        const userData = userResponse.data;
        const reposData = reposResponse.data;

        setUser(userData);

        const validRepos: GitHubRepo[] = Array.isArray(reposData)
          ? reposData
          : [];

        const stars = validRepos.reduce(
          (sum, repo) => sum + repo.stargazers_count,
          0
        );

        setTotalStars(stars);

        // top pinned-style: sort by stars
        const sorted = [...validRepos].sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );

        setRepos(sorted.slice(0, 12));

        // language frequency
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
        console.error("GitHub API Error");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (error) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-start gap-16 py-24 max-w-3xl"
    >
      {/* Section header */}
      {loading ? null : (
        <motion.div {...fadeIn(0)} className="border-l border-stone-950 pl-6">
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            My
          </p>
          <h1 className="text-5xl md:text-7xl text-white font-cinzel tracking-wide uppercase leading-none">
            GitHub Activity
          </h1>
        </motion.div>
      )}
      {loading ? (
        <div className="flex gap-3 items-center text-stone-700 text-sm tracking-widest uppercase">
          <span className="w-1 h-1 rounded-full bg-stone-700 animate-pulse" />
          <span className="w-1 h-1 rounded-full bg-stone-700 animate-pulse delay-150" />
          <span className="w-1 h-1 rounded-full bg-stone-700 animate-pulse delay-300" />
        </div>
      ) : (
        <>
          {/* Stat pills */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <StatCard
              label="Public Repositories"
              value={user?.public_repos ?? 0}
              icon={<BookOpen size={16} strokeWidth={1} />}
              delay={0}
            />
            <StatCard
              label="Total Stars"
              value={totalStars}
              icon={<Star size={16} strokeWidth={1} />}
              delay={0.05}
            />
            <StatCard
              label="Followers"
              value={user?.followers ?? 0}
              icon={<Users size={16} strokeWidth={1} />}
              delay={0.1}
            />
          </div>

          {/* Top Languages */}
          {topLangs.length > 0 && (
            <div className="flex flex-col items-center gap-5 w-full ">
              <p className="text-xs tracking-[0.4em] text-stone-600 uppercase">
                Top Languages
              </p>
              <div className="flex flex-col gap-2.5 w-full">
                {(() => {
                  const max = topLangs[0].count;
                  return topLangs.map((lang, i) => (
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
                          className="absolute top-0 left-0 h-full opacity-70 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-stone-700 w-6 text-right">
                        {lang.count}
                      </span>
                    </motion.div>
                  ));
                })()}
              </div>
            </div>
          )}

          {/* Top repos grid */}
          {repos.length > 0 && (
            <div className="w-full flex flex-col gap-5">
              <p className="text-xs tracking-[0.4em] text-stone-600 uppercase text-center">
                Top Repositories
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {repos.map((repo, i) => (
                  <RepoCard key={repo.id} repo={repo} delay={i * 0.06} />
                ))}
              </div>
            </div>
          )}

          {/* GitHub link */}
          <div className="flex flex-col gap-5">
            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs tracking-[0.4em] text-stone-600 uppercase hover:text-stone-400 transition-colors duration-300"
            >
              github.com/{GITHUB_USERNAME}
              <ExternalLink size={11} strokeWidth={1.5} />
            </motion.a>
            {(skills || projects) && (
              <div className="flex flex-wrap items-center justify-center gap-5">
                {projects && (
                  <ShimmerLinkNormal animationDelay={0.8} href={"/projects"}>
                    <Code2
                      strokeWidth={1}
                      size={17}
                      className="group-hover:translate-y-0.5 transition-transform duration-300"
                    />
                    Projects
                  </ShimmerLinkNormal>
                )}
                {skills && (
                  <ShimmerLinkNormal animationDelay={0.8} href={"/skills"}>
                    <Binary
                      strokeWidth={1}
                      size={17}
                      className="group-hover:translate-y-0.5 transition-transform duration-300"
                    />
                    Skills
                  </ShimmerLinkNormal>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </motion.section>
  );
}
