-- AlterTable
ALTER TABLE "UserLists" ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "primary" BOOLEAN NOT NULL DEFAULT false;
