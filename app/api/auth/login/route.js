import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.password);

    if (!isValid) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
    }

    return new Response(JSON.stringify({ message: "Login successful", admin }), { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
