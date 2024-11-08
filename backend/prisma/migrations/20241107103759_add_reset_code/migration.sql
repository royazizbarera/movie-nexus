-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verificationResetPasswordCode" TEXT,
ADD COLUMN     "verificationResetPasswordCodeExpired" TIMESTAMP(3) DEFAULT now() + interval '1 day',
ADD COLUMN     "verificationResetPasswordRequestDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "verificationCodeExpired" SET DEFAULT now() + interval '1 day';
