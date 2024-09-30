/*
  Warnings:

  - Added the required column `backdropUrl` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoUrl` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "backdropUrl" TEXT NOT NULL,
ADD COLUMN     "videoUrl" TEXT NOT NULL;
