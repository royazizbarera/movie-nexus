-- AlterTable
ALTER TABLE "User" ALTER COLUMN "verificationCodeExpired" SET DEFAULT now() + interval '1 day',
ALTER COLUMN "verificationResetPasswordCodeExpired" SET DEFAULT now() + interval '1 day';
