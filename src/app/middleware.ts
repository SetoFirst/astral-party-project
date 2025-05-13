import { NextRequest, NextResponse } from "next/server";

// หน้าที่ต้องการปกป้อง
const protectedRoutes = ["/", "/cards", "/map"];

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("user_email"); // ตรวจสอบว่ามี cookie user_email ไหม
  const pathname = req.nextUrl.pathname;

  // ถ้าเข้าถึง protected route และยังไม่ login
  if (protectedRoutes.includes(pathname) && !cookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ถ้าเข้า /login และ login อยู่แล้ว → redirect ไป /
  if (pathname === "/login" && cookie) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// ระบุ path ที่ middleware ควรทำงาน
export const config = {
  matcher: ["/", "/cards", "/map", "/login"],
};
