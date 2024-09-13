/*
  Warnings:

  - The primary key for the `MovieActors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MovieGenres` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "MovieActors" DROP CONSTRAINT "MovieActors_pkey",
ADD CONSTRAINT "MovieActors_pkey" PRIMARY KEY ("movieId", "actorId");

-- AlterTable
ALTER TABLE "MovieGenres" DROP CONSTRAINT "MovieGenres_pkey",
ADD CONSTRAINT "MovieGenres_pkey" PRIMARY KEY ("movieId", "genreId");
