"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, X, LoaderCircle } from "lucide-react";
import axios from "axios";
import PageWrapper from "../PageWrapper";
import { BlogPost, BlogSortOption } from "../../../types/blog/blog.type";
import BlogCard from "../Components/BlogsCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

const SORT_OPTIONS: { label: string; value: BlogSortOption }[] = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Quickest read", value: "quickest-read" },
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sort, setSort] = useState<BlogSortOption>("newest");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await axios.get<BlogPost[]>("/api/admin/blogs");
        if (!cancelled) setBlogs(res.data);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    blogs.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [blogs]);

  const filtered = useMemo(() => {
    let result = blogs;

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (activeTag) {
      result = result.filter((post) => post.tags.includes(activeTag));
    }

    result = [...result].sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sort === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return a.readTime - b.readTime;
    });

    return result;
  }, [blogs, query, activeTag, sort]);

  const hasActiveFilters = query.trim() !== "" || activeTag !== null;

  const clearFilters = () => {
    setQuery("");
    setActiveTag(null);
  };

  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          {...fadeIn(0)}
          className="border-l border-stone-950 pl-6 mb-16"
        >
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            Notes &amp; write-ups
          </p>
          <h1 className="text-5xl md:text-7xl font-cinzel tracking-wide uppercase leading-none">
            Blogs
          </h1>
        </motion.div>

        {/* ── Search + Sort row ── */}
        <motion.div
          {...fadeUp(0.15)}
          className="flex flex-col sm:flex-row gap-4 mb-6"
        >
          <div className="relative flex-1">
            <Search
              size={14}
              strokeWidth={1.5}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-700"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blogs"
              disabled={loading || error}
              className="w-full bg-transparent border-b border-stone-900 focus:border-stone-700 outline-none pl-6 py-2 text-sm text-stone-300 placeholder:text-stone-700 transition-colors duration-200 disabled:opacity-40"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-700 hover:text-stone-400 transition-colors duration-200 cursor-pointer"
              >
                <X size={14} strokeWidth={1.5} />
              </button>
            )}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as BlogSortOption)}
            disabled={loading || error}
            className="bg-transparent border-b border-stone-900 focus:border-stone-700 outline-none py-2 text-[10px] tracking-[0.2em] uppercase text-stone-500 cursor-pointer transition-colors duration-200 disabled:opacity-40"
          >
            {SORT_OPTIONS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-black text-stone-300"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </motion.div>

        {/* ── Tag filters ── */}
        {allTags.length > 0 && (
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-2 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`text-[10px] tracking-[0.3em] uppercase border px-3 py-1 transition-colors duration-200 cursor-pointer ${
                  activeTag === tag
                    ? "border-stone-400 text-stone-200"
                    : "border-stone-800 text-stone-600 hover:text-stone-400 hover:border-stone-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* ── Results meta ── */}
        {!loading && !error && (
          <motion.div
            {...fadeUp(0.25)}
            className="flex items-center justify-between mb-6 pb-3 border-b border-stone-950"
          >
            <p className="text-[9px] tracking-[0.3em] uppercase text-stone-700">
              {filtered.length} {filtered.length === 1 ? "post" : "posts"}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-[9px] tracking-[0.3em] uppercase text-stone-600 hover:text-stone-400 transition-colors duration-200 cursor-pointer"
              >
                Clear filters
              </button>
            )}
          </motion.div>
        )}

        {/* ── Loading state ── */}
        {loading && (
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col items-center justify-center gap-3 text-center py-24 border border-stone-950"
          >
            <LoaderCircle
              size={18}
              strokeWidth={1.5}
              className="text-stone-700 animate-spin"
            />
            <p className="text-[10px] tracking-[0.4em] uppercase text-stone-700">
              Loading posts
            </p>
          </motion.div>
        )}

        {/* ── Error state ── */}
        {!loading && error && (
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col items-center justify-center text-center py-24 border border-stone-950"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-stone-700 mb-2">
              Couldn&apos;t load posts
            </p>
            <p className="text-sm text-stone-600 max-w-sm">
              Something went wrong fetching the blogs. Try refreshing the page.
            </p>
          </motion.div>
        )}

        {/* ── Grid / Empty state ── */}
        {!loading && !error && filtered.length > 0 && (
          <motion.div
            {...fadeUp(0.3)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col items-center justify-center text-center py-24 border border-stone-950"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-stone-700 mb-2">
              {blogs.length === 0 ? "Coming soon" : "No posts found"}
            </p>
            <p className="text-sm text-stone-600 max-w-sm">
              {blogs.length === 0
                ? "Still writing. Check back soon."
                : "Try a different search term or clear your filters."}
            </p>
          </motion.div>
        )}

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapper>
  );
}
