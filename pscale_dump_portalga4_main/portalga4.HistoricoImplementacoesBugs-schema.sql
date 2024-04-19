CREATE TABLE `HistoricoImplementacoesBugs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_registro` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo_implementacao` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descricao` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_hora` datetime(3) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `responsavel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `impacto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `container_id_gtm` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `propriedade_id_ga4` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `solucao` text COLLATE utf8mb4_unicode_ci,
  `data_hora_resolucao` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
