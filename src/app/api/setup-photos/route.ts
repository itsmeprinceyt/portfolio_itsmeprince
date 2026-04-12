import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const folderPath = path.join(
    process.cwd(),
    "public",
    "photos-logos",
    "setup"
  );

  try {
    const files = fs.readdirSync(folderPath);

    const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

    const photos = files
      .filter((file) =>
        allowedExtensions.includes(path.extname(file).toLowerCase())
      )
      .map((file) => `/photos-logos/setup/${file}`);

    return NextResponse.json({ photos });
  } catch {
    return NextResponse.json({ photos: [] }, { status: 200 });
  }
}
