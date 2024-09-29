/*
  Warnings:

  - You are about to drop the column `birthdate` on the `Actor` table. All the data in the column will be lost.
  - You are about to drop the column `birthdate` on the `Director` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `Director` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Actor" DROP COLUMN "birthdate",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Director" DROP COLUMN "birthdate",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL;
