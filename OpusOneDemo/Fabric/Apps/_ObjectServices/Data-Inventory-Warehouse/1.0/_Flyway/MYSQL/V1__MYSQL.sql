CREATE TABLE `InventoryWarehouse`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`InventoryCapacity` BIGINT,
	`Inventorypercentage` BIGINT,
	`InventoryQuantity` BIGINT,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`ProductCategory` VARCHAR(30),
	`SeqNo` BIGINT AUTO_INCREMENT,
	`SoftDeleteFlag` BOOLEAN,
	`WarehouseLocation` VARCHAR(30),
	PRIMARY KEY(`SeqNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `InventoryWarehouse`
	ADD CONSTRAINT `cafec1ba8391a273f2b51bea52029b` UNIQUE KEY(`SeqNo`);
