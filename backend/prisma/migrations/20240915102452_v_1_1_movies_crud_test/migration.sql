-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_countryCode_fkey";

-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "countryCode" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_countryCode_fkey" FOREIGN KEY ("countryCode") REFERENCES "Country"("code") ON DELETE SET NULL ON UPDATE CASCADE;
