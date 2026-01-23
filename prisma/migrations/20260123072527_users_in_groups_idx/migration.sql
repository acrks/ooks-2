-- DropForeignKey
ALTER TABLE "users_in_groups" DROP CONSTRAINT "users_in_groups_group_id_fkey";

-- DropForeignKey
ALTER TABLE "users_in_groups" DROP CONSTRAINT "users_in_groups_user_id_fkey";

-- CreateIndex
CREATE INDEX "idx_user_id" ON "users_in_groups"("user_id");

-- CreateIndex
CREATE INDEX "idx_group_id" ON "users_in_groups"("group_id");
