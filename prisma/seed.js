// prisma/seed.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing jobs
  await prisma.job.deleteMany();

  // Sample job data
  const jobs = [
    {
      title: "Frontend Developer",
      company: "TechNova Pvt Ltd",
      location: "Bangalore",
      type: "Full-Time",
      salary: 600000,
      description: "Work on modern web technologies like React and Next.js.",
      experience: "0-2 years",
    },
    {
      title: "Backend Engineer",
      company: "InnoSoft Solutions",
      location: "Pune",
      type: "Remote",
      salary: 750000,
      description: "Build and optimize backend services using Node.js and Prisma.",
      experience: "1-3 years",
    },
    {
      title: "Data Analyst",
      company: "DataMinds Analytics",
      location: "Hyderabad",
      type: "Full-Time",
      salary: 550000,
      description: "Analyze business data and generate actionable insights.",
      experience: "0-1 years",
    },
    {
      title: "DevOps Engineer",
      company: "CloudStack Systems",
      location: "Gurugram",
      type: "Hybrid",
      salary: 850000,
      description: "Automate deployments and manage CI/CD pipelines.",
      experience: "2-4 years",
    },
  ];

  // Insert data into the Job table
  for (const job of jobs) {
    await prisma.job.create({ data: job });
  }

  console.log("✅ Seeding completed successfully!");
}

// Run the seed function
main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
