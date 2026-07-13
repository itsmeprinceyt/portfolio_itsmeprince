export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: number;
  slug: string;
  coverImage?: string;
}

export type BlogSortOption = "newest" | "oldest" | "quickest-read";

export interface BlogFilterState {
  query: string;
  tag: string | null;
  sort: BlogSortOption;
}
