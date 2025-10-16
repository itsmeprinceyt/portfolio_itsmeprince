import { NextResponse } from 'next/server';

export async function GET() {
    const email = process.env.CONTACT_EMAIL;
    if (!email) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 });
    }
    return NextResponse.json({ email });
}
