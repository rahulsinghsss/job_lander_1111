import prisma from "@/lib/prisma";

export async function PUT(req) {
  try {
    const { id, title, company, location, salary, type, description } = await req.json();

    const job = await prisma.job.update({
      where: { id: parseInt(id) },
      data: {
        title,
        company,
        location,
        salary: parseInt(salary),
        type,
        description,
      },
    });

    return new Response(JSON.stringify(job), { status: 200 });
  } catch (error) {
    console.error("Job update error:", error);
    return new Response(JSON.stringify({ message: "Failed to update job" }), { status: 500 });
  }
}
