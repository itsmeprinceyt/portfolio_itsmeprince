import fs from 'fs';
import path from 'path';
import { ResumeFile } from '../../../types/ResumeFile.type';

export async function GET() {
  const dir = path.join(process.cwd(), 'public/cv');
  const files = fs.readdirSync(dir);

  const resumeFiles: ResumeFile[] = files
    .filter(name => !name.startsWith('.'))
    .map(name => {
      const ext = path.extname(name);
      return {
        href: `/cv/${name}`,
        fileTypeName: ext,
        name,
      }
    });
  if (resumeFiles) {
    return Response.json(resumeFiles);

  }
  return Response.json(
    { error: "Internal Server Error" },
    { status: 404 }
  );
}
