/*
  Warnings:

  - You are about to drop the column `countryId` on the `Actor` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `Award` table. All the data in the column will be lost.
  - You are about to drop the column `Director` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the `_MovieAwards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MovieGenres` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `countryCode` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryCode` to the `Award` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryCode` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posterUrl` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Actor" DROP CONSTRAINT "Actor_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Award" DROP CONSTRAINT "Award_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_countryId_fkey";

-- DropForeignKey
ALTER TABLE "_MovieAwards" DROP CONSTRAINT "_MovieAwards_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieAwards" DROP CONSTRAINT "_MovieAwards_B_fkey";

-- DropForeignKey
ALTER TABLE "_MovieGenres" DROP CONSTRAINT "_MovieGenres_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieGenres" DROP CONSTRAINT "_MovieGenres_B_fkey";

-- AlterTable
ALTER TABLE "Actor" DROP COLUMN "countryId",
ADD COLUMN     "countryCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Award" DROP COLUMN "countryId",
ADD COLUMN     "countryCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "Director",
DROP COLUMN "countryId",
ADD COLUMN     "countryCode" TEXT NOT NULL,
ADD COLUMN     "director" TEXT NOT NULL,
ADD COLUMN     "posterUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "_MovieAwards";

-- DropTable
DROP TABLE "_MovieGenres";

-- CreateTable
CREATE TABLE "MovieGenres" (
    "genreId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "MovieGenres_pkey" PRIMARY KEY ("genreId","movieId")
);

-- CreateTable
CREATE TABLE "MovieAwards" (
    "movieId" INTEGER NOT NULL,
    "awardId" INTEGER NOT NULL,

    CONSTRAINT "MovieAwards_pkey" PRIMARY KEY ("movieId","awardId")
);

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "Country"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actor" ADD CONSTRAINT "Actor_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "Country"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "Country"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieGenres" ADD CONSTRAINT "MovieGenres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieGenres" ADD CONSTRAINT "MovieGenres_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieAwards" ADD CONSTRAINT "MovieAwards_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieAwards" ADD CONSTRAINT "MovieAwards_awardId_fkey" FOREIGN KEY ("awardId") REFERENCES "Award"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
