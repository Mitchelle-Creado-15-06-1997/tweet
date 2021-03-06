-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: tweet
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `password_hash` varchar(60) DEFAULT NULL,
  `user_handle` varchar(45) NOT NULL,
  `profile_image` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_handle_UNIQUE` (`user_handle`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'rhea','rhea@test.com','rhea',NULL,'rhea','home/profile_image/pic01.jpg','2019-08-05 17:53:41','2019-07-31 10:50:02'),(3,' abcd','test@test.com','abcdefg',NULL,'abc',NULL,'2019-07-31 10:51:20','2019-07-31 10:50:02'),(4,'qwerty','test@test.com','qwerty','$2b$10$CGP/g048rPdMuXJI4axbF.x7PzOOcYvB2TfyTEq8fBclhVpuPdNKm','qwerty',NULL,'2019-07-31 11:48:08','2019-07-31 11:48:08'),(5,'zxcvbn','zxcvb@test.com','zxcvbn','$2b$10$IhmPBM7BEpi82ALx98kFSuhieybFLQqobhSFlO/fRn4wHEM2p4gbi','zxcvbn',NULL,'2019-07-31 12:18:26','2019-07-31 12:18:26'),(6,'rhea','test@test.com','rhearay','$2b$10$Oxyyl.QycxRdAX93wyYYUufz60kON8cQW.c7oXx1qCpIYbs2wm/.2','rhearay',NULL,'2019-07-31 14:23:42','2019-07-31 14:23:42'),(7,'poiuyt','test@test.com','poiuyt','$2b$10$UD1m7p5flvQHFW4WmX4ce.onD8ofBo7yBPAnJCLIoYmFB.uzKN99G','poiuyt','home/profile_image/pic01.jpg','2019-08-05 11:38:54','2019-07-31 15:14:06'),(8,'poiuyt','test@test.com','poiuyt','$2b$10$qBNvBSH6hMMW7Vzp8pJcO.exFzf9ckDCY72qTI82HQL/VCoLh7UUK','poiuytqwer',NULL,'2019-07-31 15:27:48','2019-07-31 15:27:48'),(9,'abcpoiuy','test@test.com','abcpoiuy','$2b$10$mGoKCFE7VbuG6fj9CliP0e8e3IZKyfiko9LvVukl0VX49vCZVwmXi','abcpoiuy',NULL,'2019-07-31 15:36:20','2019-07-31 15:36:20'),(17,'qwerty','test@test.com','asdfgh','$2b$10$3LZfSzivek1lHQYi8thpB.3ywNuUR/VKoZVyzc9icuwL.ihIrTp0e','jhcbjbdnnd',NULL,'2019-08-01 18:10:16','2019-08-01 18:10:16'),(19,'mitchelle','mitchelle.creado@flexiloans.com','asasasas','asasasas','mitchelle','home/profile_image/pic01.jpg','2019-08-06 10:26:36','2019-08-06 09:49:09'),(21,'alisha','alisha@alisha.com','asasasas','asasasas','alisha',NULL,'2019-08-06 14:15:06','2019-08-06 14:15:06'),(22,'anoop','anoop@anoop.com','asasasas','asasasas','anoop',NULL,'2019-08-06 14:15:39','2019-08-06 14:15:39'),(23,'arushi','arushi@arushi.com','asasasas','asasasas','arushi',NULL,'2019-08-06 14:16:00','2019-08-06 14:16:00'),(24,'eric','eric@eric.com','asasasas','asasasas','eric',NULL,'2019-08-06 14:16:20','2019-08-06 14:16:20'),(25,'melvin','melvin@melvin.com','asasasas','asasasas','melvin',NULL,'2019-08-06 14:16:42','2019-08-06 14:16:42'),(26,'benjo','benjo@benjo.com','asasasas','asasasas','benjo',NULL,'2019-08-06 14:17:09','2019-08-06 14:17:09'),(27,'sonali','sonali@sonali.com','asasasas','asasasas','sonali',NULL,'2019-08-06 14:17:35','2019-08-06 14:17:35'),(28,'chaitanya','chaitanya@chaitanya.com','asasasas','asasasas','chaitanya',NULL,'2019-08-06 14:26:58','2019-08-06 14:26:58'),(29,'lavina','lavina@lavina.com','asasasas','asasasas','lavina',NULL,'2019-08-06 14:29:40','2019-08-06 14:29:40'),(30,'asdasd','asdas@sdada','asasasas','asasasas','asdasd',NULL,'2019-08-06 14:32:52','2019-08-06 14:32:52'),(31,'asdds','asd@sdfsdf','asasasas','asasasas','asdas',NULL,'2019-08-06 14:46:47','2019-08-06 14:46:47');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-08 11:14:06
