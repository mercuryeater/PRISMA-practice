/*
  Warnings:

  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nombreModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_nombreModelId_fkey";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "nombreModel";

-- CreateTable
CREATE TABLE "persons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);
