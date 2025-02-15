CREATE TABLE `WarrantyByCategory`(
	`CostofClaims` VARCHAR(10),
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`NumberofWarrantyClaims` VARCHAR(10),
	`OriginalSalesCost` VARCHAR(10),
	`OriginalSalesVolume` VARCHAR(10),
	`ProductCategory` VARCHAR(10),
	`SeqNo` BIGINT AUTO_INCREMENT,
	`SoftDeleteFlag` BOOLEAN,
	PRIMARY KEY(`SeqNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `WarrantyByCategory`
	ADD CONSTRAINT `bb0a58fa0a7119b922e0b0508604f7` UNIQUE KEY(`SeqNo`);
