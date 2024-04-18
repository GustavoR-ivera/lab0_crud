CREATE DATABASE  IF NOT EXISTS `lab0_crud` ;
USE `lab0_crud`;
--
-- Table structure for table `cabeza_familia`
--

DROP TABLE IF EXISTS `cabeza_familia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cabeza_familia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPersona_cab_fam` int NOT NULL,
  `idPersona_dependiente` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idPersona_cab_fam` (`idPersona_cab_fam`),
  KEY `idPersona_dependiente` (`idPersona_dependiente`),
  CONSTRAINT `cabeza_familia_ibfk_1` FOREIGN KEY (`idPersona_cab_fam`) REFERENCES `persona` (`idPersona`),
  CONSTRAINT `cabeza_familia_ibfk_2` FOREIGN KEY (`idPersona_dependiente`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `habita_vivienda`
--

DROP TABLE IF EXISTS `habita_vivienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `habita_vivienda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPersona_habitante` int NOT NULL,
  `vivienda_idVivienda` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idPersona_habitante` (`idPersona_habitante`),
  KEY `vivienda_idVivienda` (`vivienda_idVivienda`),
  CONSTRAINT `habita_vivienda_ibfk_1` FOREIGN KEY (`idPersona_habitante`) REFERENCES `persona` (`idPersona`),
  CONSTRAINT `habita_vivienda_ibfk_2` FOREIGN KEY (`vivienda_idVivienda`) REFERENCES `vivienda` (`idVivienda`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `municipio`
--

DROP TABLE IF EXISTS `municipio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `municipio` (
  `idMunicipio` int NOT NULL AUTO_INCREMENT,
  `nombre_municipio` varchar(255) NOT NULL,
  `nombre_depto` varchar(255) NOT NULL,
  `fecha_fundacion` date DEFAULT NULL,
  `colores_bandera` varchar(255) DEFAULT NULL,
  `nombre_himno_oficial` varchar(255) DEFAULT NULL,
  `idPersona_gobernante` int NOT NULL,
  PRIMARY KEY (`idMunicipio`),
  KEY `idPersona_gobernante` (`idPersona_gobernante`),
  CONSTRAINT `municipio_ibfk_1` FOREIGN KEY (`idPersona_gobernante`) REFERENCES `persona` (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `idPersona` int NOT NULL AUTO_INCREMENT,
  `doc_identidad` varchar(45) NOT NULL,
  `nombres` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `ocupacion` varchar(45) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `propietario_vivienda`
--

DROP TABLE IF EXISTS `propietario_vivienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propietario_vivienda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPersona_propietaria` int NOT NULL,
  `vivienda_idVivienda` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idPersona_propietaria` (`idPersona_propietaria`),
  KEY `vivienda_idVivienda` (`vivienda_idVivienda`),
  CONSTRAINT `propietario_vivienda_ibfk_1` FOREIGN KEY (`idPersona_propietaria`) REFERENCES `persona` (`idPersona`),
  CONSTRAINT `propietario_vivienda_ibfk_2` FOREIGN KEY (`vivienda_idVivienda`) REFERENCES `vivienda` (`idVivienda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `vivienda`
--

DROP TABLE IF EXISTS `vivienda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vivienda` (
  `idVivienda` int NOT NULL AUTO_INCREMENT,
  `fecha_construccion` date DEFAULT NULL,
  `direccion_primaria` varchar(255) NOT NULL,
  `direccion_secundaria` varchar(255) DEFAULT NULL,
  `num_pisos` int DEFAULT NULL,
  `num_habitaciones` int DEFAULT NULL,
  `num_banos` int DEFAULT NULL,
  `tiene_garage` tinyint(1) DEFAULT NULL,
  `tiene_patio` tinyint(1) DEFAULT NULL,
  `tiene_terraza` tinyint(1) DEFAULT NULL,
  `municipio_idMunicipio` int NOT NULL,
  PRIMARY KEY (`idVivienda`),
  KEY `municipio_idMunicipio` (`municipio_idMunicipio`),
  CONSTRAINT `vivienda_ibfk_1` FOREIGN KEY (`municipio_idMunicipio`) REFERENCES `municipio` (`idMunicipio`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
