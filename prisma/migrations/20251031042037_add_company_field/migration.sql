/*
  Warnings:

  - You are about to drop the column `adminId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `applicationDeadline` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `companyName` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `jobType` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `requirements` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `responsibilities` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `salaryRange` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `company` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salary` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Job" DROP CONSTRAINT "Job_adminId_fkey";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "adminId",
DROP COLUMN "applicationDeadline",
DROP COLUMN "companyName",
DROP COLUMN "jobType",
DROP COLUMN "requirements",
DROP COLUMN "responsibilities",
DROP COLUMN "salaryRange",
DROP COLUMN "updatedAt",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "experience" TEXT NOT NULL,
ADD COLUMN     "salary" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Admin";
