-- MySQL dump 10.13  Distrib 8.3.0, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: lab0_crud
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cabeza_familia`
--

LOCK TABLES `cabeza_familia` WRITE;
/*!40000 ALTER TABLE `cabeza_familia` DISABLE KEYS */;
INSERT INTO `cabeza_familia` VALUES (1,2,1);
/*!40000 ALTER TABLE `cabeza_familia` ENABLE KEYS */;
UNLOCK TABLES;

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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habita_vivienda`
--

LOCK TABLES `habita_vivienda` WRITE;
/*!40000 ALTER TABLE `habita_vivienda` DISABLE KEYS */;
INSERT INTO `habita_vivienda` VALUES (1,2,1),(2,1,1);
/*!40000 ALTER TABLE `habita_vivienda` ENABLE KEYS */;
UNLOCK TABLES;

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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipio`
--

LOCK TABLES `municipio` WRITE;
/*!40000 ALTER TABLE `municipio` DISABLE KEYS */;
INSERT INTO `municipio` VALUES (1,'narnia','narnia_dpto','1997-12-09','blanco-negro','narnia_himno',1),(2,'narnia2','narnia_dpto2','1997-12-09','blanco-negro2','narnia_himno2',1);
/*!40000 ALTER TABLE `municipio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `idPersona` int NOT NULL AUTO_INCREMENT,
  `tipo_doc` varchar(30) DEFAULT NULL,
  `doc_identidad` varchar(45) NOT NULL,
  `nombres` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `ocupacion` varchar(45) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `available` tinyint(1) DEFAULT '1',
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,NULL,'10001212424','gary','grisly','1997-12-09','3223877590','gg@mail.com','estudiante','M',0,NULL),(2,NULL,'4544545455','luna','grisly','1999-12-09','32238745345','lunag@mail.com','empleado','F',0,NULL),(3,NULL,'123456789','fernando','franco','2024-04-15','5446546845','','','',0,NULL),(4,NULL,'1014307953','Gustavo','Rivera','1999-09-06','1234567','griverabyt@gmail.com','Estudiante','M',0,NULL),(5,NULL,' ',' ',' ','2024-04-15','','','','',0,NULL),(6,NULL,' ',' ','  ','2024-04-15','','','','',0,NULL),(7,'Cedula colombiana','1014307953','Gustavo','Rivera','2024-04-16','','','','',0,NULL),(8,'Pasaporte','ABCdef1234','Gustavo','Rivera','2024-04-02','123','griverabyt@gmail.com','Estudiante','M',0,NULL),(9,'Pasaporte','ABCdef1234','f','f','2024-04-17','','','','',0,NULL),(12,'Pasaporte','PASAPORTE1234','cubarsi','limon','2024-04-16','34235345345','c@mail.com','','',0,'2024-04-16'),(13,'Pasaporte','PASAPORTE1234','cubarsi','limon','2024-04-03','3423543534','c@mail2.com','','',0,'2024-04-16'),(15,'Pasaporte','PASAPORTE12345','CubarsiR','LimonR','2024-04-16','123324234','m@m.com2','','',1,NULL),(16,'Cedula colombiana','1014307953','gus','tavo','2024-04-01','','','','',0,'2024-04-16'),(17,'Pasaporte','PASAPORTE1234','gus','riv','2024-04-16','','','','',1,NULL);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propietario_vivienda`
--

LOCK TABLES `propietario_vivienda` WRITE;
/*!40000 ALTER TABLE `propietario_vivienda` DISABLE KEYS */;
/*!40000 ALTER TABLE `propietario_vivienda` ENABLE KEYS */;
UNLOCK TABLES;

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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vivienda`
--

LOCK TABLES `vivienda` WRITE;
/*!40000 ALTER TABLE `vivienda` DISABLE KEYS */;
INSERT INTO `vivienda` VALUES (1,'1997-12-09','carrera 92 73a-54','barrio sta rosita',2,2,2,1,0,0,1),(2,'1997-12-09','carrera 92 73a-54 2','barrio sta rosita 2',2,2,2,1,0,0,1);
/*!40000 ALTER TABLE `vivienda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
