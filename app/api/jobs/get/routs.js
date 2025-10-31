import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: "desc" },
    });

    return new Response(JSON.stringify(jobs), { status: 200 });
  } catch (error) {
    console.error("Fetch jobs error:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch jobs" }), { status: 500 });
  }
}
