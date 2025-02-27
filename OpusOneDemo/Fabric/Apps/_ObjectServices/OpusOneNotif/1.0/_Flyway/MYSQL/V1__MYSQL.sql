CREATE TABLE `Notification`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`id` BIGINT NOT NULL AUTO_INCREMENT,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`message` VARCHAR(1024),
	`SoftDeleteFlag` BOOLEAN,
	`title` VARCHAR(128),
	PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `Notification`
	ADD CONSTRAINT `c77bddd2d2d0f6f45f2b37af3cd213` UNIQUE KEY(`id`);
