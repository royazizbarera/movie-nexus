/*
  Warnings:

  - You are about to drop the `MovieDirectors` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MovieDirectors" DROP CONSTRAINT "MovieDirectors_directorId_fkey";

-- DropForeignKey
ALTER TABLE "MovieDirectors" DROP CONSTRAINT "MovieDirectors_movieId_fkey";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "directorId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "MovieDirectors";

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director"("id") ON DELETE SET NULL ON UPDATE CASCADE;
