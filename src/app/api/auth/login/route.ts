import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 400 }
    );

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid)
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 400 }
    );

  // ✅ เพิ่ม: สร้าง response และตั้งค่า cookie
  const response = NextResponse.json({
    success: true,
    redirectUrl: "/",
  });

  // 🍪 เซ็ต cookie ชื่อ user_email
  response.cookies.set("user_email", user.email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // ใน production ควรใช้ HTTPS
    maxAge: 60 * 60 * 24 * 7, // 7 วัน
    path: "/",
  });

  return response;
}
