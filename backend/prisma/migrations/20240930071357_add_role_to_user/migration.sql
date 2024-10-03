-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT DEFAULT 'writer',
ALTER COLUMN "provider" SET DEFAULT 'email';
