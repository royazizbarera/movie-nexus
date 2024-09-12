/*
  Warnings:

  - You are about to drop the column `approval_status` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `release_date` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `approvalStatus` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `releaseDate` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "approval_status",
DROP COLUMN "release_date",
ADD COLUMN     "approvalStatus" BOOLEAN NOT NULL,
ADD COLUMN     "releaseDate" TIMESTAMP(3) NOT NULL;
