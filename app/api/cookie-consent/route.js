import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    const responseBody = {
      ok: true,
      receivedAt: new Date().toISOString(),
      consent: Boolean(body?.consent),
      locale: body?.locale || 'unknown',
      metadata: body || null,
    };

    return NextResponse.json(responseBody, { status: 200 });
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
