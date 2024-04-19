CREATE TABLE `ListaDeCodigos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `evento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `site` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `container1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `container2` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `identificador` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ListaDeCodigos_codigo_key` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=464 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
