import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";

  if (host.includes("vercel.app")) {
    const response = NextResponse.next();

    response.headers.set("X-Robots-Tag", "noindex, nofollow");

    return response;
  }

  return NextResponse.next();
}
