/*
  Warnings:

  - You are about to drop the `_MovieActors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MovieActors" DROP CONSTRAINT "_MovieActors_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieActors" DROP CONSTRAINT "_MovieActors_B_fkey";

-- DropTable
DROP TABLE "_MovieActors";
