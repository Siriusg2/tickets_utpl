/*
  Warnings:

  - Added the required column `deleted` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deletedAt` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Nomenclatures" ADD COLUMN     "deleted" BOOLEAN,
ADD COLUMN     "deletedAt" BIGINT;

-- AlterTable
ALTER TABLE "Tickets" ADD COLUMN     "deleted" BOOLEAN NOT NULL,
ADD COLUMN     "deletedAt" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "deleted" BOOLEAN,
ADD COLUMN     "deletedAt" BIGINT;
