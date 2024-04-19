CREATE TABLE `Identificadores` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gtm` tinyint(1) NOT NULL DEFAULT '0',
  UNIQUE KEY `Identificadores_id_key` (`id`),
  UNIQUE KEY `Identificadores_valor_key` (`valor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
