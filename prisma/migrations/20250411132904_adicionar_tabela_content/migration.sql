-- CreateTable
CREATE TABLE `Content` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL DEFAULT '',
    `url` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `position` INTEGER NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Content` ADD CONSTRAINT `Content_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
