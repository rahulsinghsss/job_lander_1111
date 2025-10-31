import prisma from "@/lib/prisma";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await prisma.job.delete({
      where: { id: parseInt(id) },
    });

    return new Response(JSON.stringify({ message: "Job deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Job delete error:", error);
    return new Response(JSON.stringify({ message: "Failed to delete job" }), { status: 500 });
  }
}
