import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    const timestamp = new Date().toISOString();

    return NextResponse.json(
      {
        ok: true,
        message: 'Demo submission received',
        timestamp,
        echo: body,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Invalid request payload',
      },
      { status: 400 }
    );
  }
}
