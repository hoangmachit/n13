import { NextResponse } from "next/server";
import { getUserByEmail } from "../../../../../../libraries/prisma/users";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';
import bcrypt from "bcrypt";

function comparePasswords(password, hashedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const { user } = await getUserByEmail(email);
  const error = {
    status: true,
    email: "Tài khoản đăng nhập không đúng",
    password: null
  }
  if (user) {
    try {
      const result = await comparePasswords(password, user.password);
      if (result) {
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
        return NextResponse.json({ authenticated: true });
      }
      return NextResponse.json({
        authenticated: false, error: {
          status: true,
          email: null,
          password: "The password is incorrect."
        }
      });
    } catch (error) {

    }
  }
  return NextResponse.json({
    authenticated: false, error: {
      status: true,
      email: "The login account is incorrect.",
      password: null
    }
  });
}