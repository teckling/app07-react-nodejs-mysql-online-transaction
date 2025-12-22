'CREATE TABLE `service_reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(50) NOT NULL,
  `service_summary` varchar(200) NOT NULL,
  `service_completion` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci'