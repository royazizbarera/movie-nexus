/*
  Warnings:

  - You are about to drop the column `phone` on the `Country` table. All the data in the column will be lost.
  - Added the required column `photoUrl` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoUrl` to the `Director` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Actor" ADD COLUMN     "photoUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "Director" ADD COLUMN     "photoUrl" TEXT NOT NULL;
