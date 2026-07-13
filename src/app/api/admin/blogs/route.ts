import { NextResponse } from "next/server";
import { BlogPost } from "../../../../types/blog/blog.type";

export async function GET() {
  const blogs: BlogPost[] = [];
  return NextResponse.json(blogs);
}
