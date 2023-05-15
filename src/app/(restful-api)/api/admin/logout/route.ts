import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
export async function POST(request: Request) {
  cookies().set({
    name: 'next-token',
    value: null,
    httpOnly: true,
    path: '/',
    secure: true,
    maxAge: -1,
  });
  return NextResponse.json({ status: true });
}