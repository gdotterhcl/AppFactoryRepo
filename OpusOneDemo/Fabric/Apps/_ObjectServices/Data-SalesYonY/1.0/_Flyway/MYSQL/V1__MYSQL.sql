CREATE TABLE `SalesYOnY`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Month` VARCHAR(10),
	`SalesAmount` VARCHAR(10),
	`SeqNo` BIGINT AUTO_INCREMENT,
	`SoftDeleteFlag` BOOLEAN,
	`Year` VARCHAR(10),
	PRIMARY KEY(`SeqNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `SalesYOnY`
	ADD CONSTRAINT `27b33508c71b792db3b15543be5be7` UNIQUE KEY(`SeqNo`);
