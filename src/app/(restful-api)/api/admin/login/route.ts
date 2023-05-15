import { NextResponse } from "next/server";
import { getUserById } from "../../../../../../libraries/prisma/users";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export async function POST(request: Request) {
  const body = await request.json();
  const { user } = await getUserById();
  console.log("user=", user);
  if (user) {
    const token = await jwt.sign({ userId: user.id }, "user", {
      expiresIn: "1h",
    });
    cookies().set({
      name: "next-token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: true,
      maxAge: 60 * 60,
    });
  }
  return NextResponse.json({ user: user});
}
