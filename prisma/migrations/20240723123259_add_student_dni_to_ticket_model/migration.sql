/*
  Warnings:

  - Added the required column `student_dni` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tickets" ADD COLUMN     "student_dni" TEXT NOT NULL;
