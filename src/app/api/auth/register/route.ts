import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return new Response("Missing username or password", { status: 400 });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { username } });

    if (existingUser) {
      return new Response("Username already exists", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return new Response("Registration successful", {
      status: 201,
      headers: {
        Location: "/login",
      },
    });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
