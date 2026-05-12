import { motion } from "framer-motion";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { useRef } from "react";
import { GitHubRepo } from "../../../types/githubstats.type";
import { LANG_COLORS } from "../../../utils/githubsection.util";

export default function RepoCard({
  repo,
  delay,
}: {
  repo: GitHubRepo;
  delay: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const langColor = repo.language ? LANG_COLORS[repo.language] ?? "#888" : null;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <motion.a
      ref={ref}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      className="group relative flex flex-col gap-3 p-5 border border-stone-800/60 hover:border-stone-700 overflow-hidden transition-colors duration-300 text-left"
    >
      {/* Shimmer streak */}
      <span className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="relative flex items-start justify-between gap-2">
        <span className="text-sm font-medium text-white group-hover:text-stone-300 transition-colors truncate">
          {repo.name}
        </span>
        <ExternalLink
          size={13}
          strokeWidth={1.5}
          className="shrink-0 text-stone-700 group-hover:text-stone-500 transition-colors mt-0.5"
        />
      </div>

      {repo.description && (
        <p className="relative text-xs text-stone-500 leading-relaxed line-clamp-2">
          {repo.description}
        </p>
      )}

      <div className="relative flex items-center gap-4 mt-auto pt-1">
        {langColor && (
          <span className="flex items-center gap-1.5 text-xs text-stone-600">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: langColor }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1 text-xs text-stone-600">
          <Star size={11} strokeWidth={1.5} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1 text-xs text-stone-600">
          <GitFork size={11} strokeWidth={1.5} />
          {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}
