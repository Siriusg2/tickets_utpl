/*
  Warnings:

  - Added the required column `active` to the `Period` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority_id` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Period" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Tickets" ADD COLUMN     "priority_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Priority" (
    "priority_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "Priority_pkey" PRIMARY KEY ("priority_id")
);

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_priority_id_fkey" FOREIGN KEY ("priority_id") REFERENCES "Priority"("priority_id") ON DELETE RESTRICT ON UPDATE CASCADE;
