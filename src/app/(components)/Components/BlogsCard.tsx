import { BlogPost } from "../../../types/blog/blog.type";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border border-stone-950 p-4 hover:border-stone-800 transition-colors duration-200">
      <p className="text-[9px] tracking-[0.3em] uppercase text-stone-700 mb-2">
        {post.date} · {post.readTime} min read
      </p>
      <p className="text-stone-300 font-medium">{post.title}</p>
      <p className="text-sm text-stone-500 mt-2 line-clamp-2">{post.excerpt}</p>
    </div>
  );
}
