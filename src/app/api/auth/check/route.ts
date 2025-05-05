import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // ในกรณีนี้สมมติว่า token คือ user ID
  // คุณสามารถ query จากฐานข้อมูลจริง ๆ ได้
  return new Response(
    JSON.stringify({
      authenticated: true,
      user: { username: "User123" }, // ควรดึงจากฐานข้อมูลจริงในอนาคต
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
