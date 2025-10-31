import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ✅ POST (Create a new job)
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, company, location, type, salary, experience, description } = body;

    if (!title || !company || !location || !type || !salary) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newJob = await prisma.job.create({
      data: {
        title,
        company,
        location,
        type,
        salary: parseInt(salary),
        experience,
        description,
      },
    });

    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}

// ✅ GET (Fetch all jobs)
export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}
