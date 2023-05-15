import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from "jsonwebtoken";
export async function POST(request: Request) {
  const { token } = await request.json();
  let authenticated = false;
  if (token) {
    try {
      await jwt.verify(token, 'user', async function (error, decoded) {
        const { userId } = decoded;
        if (userId) {
          const prisma = new PrismaClient();
          const user = await prisma.user.findUnique({
            where: {
              id: userId
            }
          });
          if (user) {
            authenticated = true;
          }
        }
      });
    } catch (error) {
      authenticated = false;
    }
  }
  return await NextResponse.json({ authenticated: authenticated });
}