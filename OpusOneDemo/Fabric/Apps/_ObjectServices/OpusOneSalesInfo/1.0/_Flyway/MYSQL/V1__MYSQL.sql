CREATE TABLE `SalesInfo`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`idProduct` VARCHAR(20),
	`IsExtendedWarranty` BOOLEAN,
	`ItemWeightlbs` BIGINT,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Manufacturer` VARCHAR(20),
	`ModelNumber` VARCHAR(20),
	`OnlineSale` BOOLEAN,
	`PackageSize` VARCHAR(10),
	`ProductCode` VARCHAR(20),
	`SaleDate` DATETIME(3),
	`SalePrice` BIGINT,
	`SeqNo` BIGINT AUTO_INCREMENT,
	`SerialNumber` VARCHAR(20),
	`SoftDeleteFlag` BOOLEAN,
	`WarehouseLocation` VARCHAR(20),
	`WarrantyExpiryDate` DATETIME(3),
	PRIMARY KEY(`SeqNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `SalesInfo`
	ADD CONSTRAINT `1961a702b50f0f07c6cea0abe91184` UNIQUE KEY(`SeqNo`);
