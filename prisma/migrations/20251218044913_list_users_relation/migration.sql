/*
  Warnings:

  - You are about to drop the `_ListToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ListToUser" DROP CONSTRAINT "_ListToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ListToUser" DROP CONSTRAINT "_ListToUser_B_fkey";

-- DropTable
DROP TABLE "_ListToUser";

-- CreateTable
CREATE TABLE "UserLists" (
    "list_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UserLists_pkey" PRIMARY KEY ("list_id","user_id")
);

-- AddForeignKey
ALTER TABLE "UserLists" ADD CONSTRAINT "UserLists_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLists" ADD CONSTRAINT "UserLists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
