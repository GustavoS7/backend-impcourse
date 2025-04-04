/*
  Warnings:

  - You are about to drop the column `name` on the `Course` table. All the data in the column will be lost.
  - Added the required column `category` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` DROP COLUMN `name`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
