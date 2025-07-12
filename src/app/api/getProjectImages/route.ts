import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const projectId: string | null = searchParams.get('projectId');

    if (!projectId) {
        return NextResponse.json({ error: 'Missing projectId' }, { status: 400 });
    }

    const projectDir: string = path.join(process.cwd(), 'public', 'projects', projectId);
    const validExtensions: string[] = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'];

    try {
        const files = fs.readdirSync(projectDir);
        const images = files
            .filter(file => validExtensions.includes(path.extname(file).toLowerCase()))
            .sort()
            .map(file => `/projects/${projectId}/${file}`);

        return NextResponse.json({ images });
    } catch (error) {
        console.error('Error reading project images:', error);
        return NextResponse.json({ images: [] });
    }
}
