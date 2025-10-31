# 💼 Job Management Platform (Full Stack)

A **Full Stack Job Management Web Application** built with **Next.js (App Router)**, **Prisma ORM**, and **PostgreSQL**.  
This platform allows users to **post, browse, and filter job listings** in real time — designed to replicate a modern job portal like LinkedIn Jobs or Indeed.

---

## 🚀 Features

### 👷‍♂️ For Employers
- **Create Jobs** – Post job openings with title, company, location, salary, and type.
- **Dynamic Form Validation** – Ensures complete and valid job entries before submission.

### 💼 For Job Seekers
- **Browse All Jobs** – View jobs fetched dynamically from a PostgreSQL database.
- **Advanced Filtering** – Filter by role, job type, location, or salary range.
- **Responsive UI** – Built with Tailwind CSS for smooth desktop and mobile experience.

---

## 🧩 Tech Stack

| Layer | Technology | Description |
|-------|-------------|-------------|
| **Frontend** | Next.js 14 (App Router) | Server-side rendering, routing, and UI components |
| **Styling** | Tailwind CSS | Modern and responsive styling |
| **Backend** | Next.js API Routes + Prisma ORM | Handles database logic and API endpoints |
| **Database** | PostgreSQL (Neon / Supabase) | Persistent data storage |
| **ORM** | Prisma | Schema management, migrations, and queries |
| **Hosting** | Vercel | Fast and reliable deployment |
| **Database Hosting** | Neon | Cloud PostgreSQL with SSL support |

---

## ⚙️ How It Works

1. **Database Schema** – Defined using Prisma in `schema.prisma`.
2. **Seed Script** – `seed.js` file populates the database with example job listings.
3. **API Routes** – Located in `/app/api/jobs`:
   - `GET` → Fetch all or filtered jobs.
   - `POST` → Add new job listings.
4. **Frontend Rendering** – The main page (`app/page.jsx`) fetches data using `fetch('/api/jobs')` and displays it with filters.
5. **Filtering Logic** – Handled server-side for accurate and efficient queries.
6. **Deployment** – Hosted on Vercel and connected to Neon PostgreSQL using `DATABASE_URL`.

---

## 🌟 Highlights
- ✅ Built with **Next.js App Router (latest version)**
- 🧠 **Prisma ORM** integration with PostgreSQL
- 🔄 **Reusable Components** – Navbar, Filters, JobCard
- ⚡ **API-first Architecture** – easy to extend for mobile apps
- 💎 **Clean & Production-Ready UI**

---

## 🧠 Learning Outcomes
This project demonstrates:
- End-to-end **full-stack web development**
- Working with **Next.js App Router**
- Managing data with **Prisma ORM**
- Building and deploying APIs
- Cloud deployment via **Vercel** and **Neon PostgreSQL**

---

## 🧑‍💻 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/job-management-platform.git
cd job-management-platform
