-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: twitter
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
-- Table structure for table `tweets`
--

DROP TABLE IF EXISTS `tweets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tweets` (
  `tweet_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_text` varchar(120) DEFAULT NULL,
  `hashtag` varchar(45) DEFAULT NULL,
  `media` varchar(45) DEFAULT NULL,
  `userhandle` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tweet_id`),
  FULLTEXT KEY `hashtag` (`hashtag`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tweets`
--

LOCK TABLES `tweets` WRITE;
/*!40000 ALTER TABLE `tweets` DISABLE KEYS */;
INSERT INTO `tweets` VALUES (1,NULL,'dv',NULL,NULL,'2019-08-01 17:49:51','2019-08-01 17:49:51'),(2,NULL,'jnsnncnd',NULL,NULL,'2019-08-01 17:51:37','2019-08-01 17:51:37'),(3,NULL,'dfdf',NULL,NULL,'2019-08-01 17:58:31','2019-08-01 17:58:31'),(4,'r v ckvnndkv','vfdsvfvr',NULL,NULL,'2019-08-01 18:00:17','2019-08-01 18:00:17'),(5,'dnbn','mnjkkk',NULL,NULL,'2019-08-01 18:03:55','2019-08-01 18:03:55'),(6,'vhgjhgjhg','hfgfjg',NULL,NULL,'2019-08-01 18:43:40','2019-08-01 18:43:40'),(7,'bjhb','jknkjnkj',NULL,NULL,'2019-08-02 11:07:43','2019-08-02 11:07:43'),(8,'bjhb','jknkjnkj',NULL,NULL,'2019-08-02 11:57:21','2019-08-02 11:57:21'),(9,'www',NULL,NULL,'poiuyt','2019-08-02 12:53:54','2019-08-02 12:53:54'),(10,'xssaxsax',NULL,NULL,'poiuyt','2019-08-02 14:09:06','2019-08-02 14:09:06'),(11,'xssaxsax',NULL,NULL,'poiuyt','2019-08-02 14:09:16','2019-08-02 14:09:16'),(12,'hello poiuyt',NULL,NULL,'poiuyt','2019-08-02 14:11:21','2019-08-02 14:11:21'),(13,'jhhvjhjbjbh',NULL,NULL,'poiuyt','2019-08-02 14:11:41','2019-08-02 14:11:41'),(14,'b nnknknnnnn',NULL,NULL,'poiuyt','2019-08-02 15:13:07','2019-08-02 15:13:07'),(15,'vvvvvvv',NULL,NULL,'poiuyt','2019-08-02 15:13:27','2019-08-02 15:13:27'),(16,'hello india ',NULL,NULL,'rhea','2019-08-02 16:12:44','2019-08-02 16:12:44'),(17,'djdnidniniend',NULL,NULL,'rhea','2019-08-02 16:14:34','2019-08-02 16:14:34'),(18,'the lion king',NULL,NULL,'poiuyt','2019-08-02 16:28:35','2019-08-02 16:28:35'),(19,'hurray world',NULL,NULL,'poiuyt','2019-08-02 16:28:43','2019-08-02 16:28:43'),(20,'today is #BEAUTIFUL',NULL,NULL,'poiuyt','2019-08-02 18:07:55','2019-08-02 18:07:55'),(21,'hell#iii',NULL,NULL,'poiuyt','2019-08-02 18:08:54','2019-08-02 18:08:54'),(22,'#eeee',NULL,NULL,'poiuyt','2019-08-02 18:10:55','2019-08-02 18:10:55'),(23,'#wer hello',NULL,NULL,'poiuyt','2019-08-02 18:11:08','2019-08-02 18:11:08'),(24,'#hello today is #beautiful',NULL,NULL,'poiuyt','2019-08-02 18:11:44','2019-08-02 18:11:44'),(25,'#wer bcdmbcmbmn #qwerty',NULL,NULL,'poiuyt','2019-08-02 18:16:13','2019-08-02 18:16:13'),(26,'axsxsxs #Eeee',NULL,NULL,'poiuyt','2019-08-02 18:17:55','2019-08-02 18:17:55'),(27,'#abc qqq','abc',NULL,'poiuyt','2019-08-02 18:19:52','2019-08-02 18:19:52'),(28,'#werfcdjnkfcn #mmmm hello','werfcdjnkfcn,mmmm',NULL,'poiuyt','2019-08-02 18:27:55','2019-08-02 18:27:55'),(29,'jhb,mnnn,nm,n,n',NULL,NULL,'poiuyt','2019-08-05 10:49:17','2019-08-05 10:49:17'),(30,'#beautiful day hello#eee',NULL,NULL,'poiuyt','2019-08-05 14:08:35','2019-08-05 14:08:35'),(31,'#beautiful #holidat # rgefgff kjhb,nn',NULL,NULL,'poiuyt','2019-08-05 14:11:18','2019-08-05 14:11:18'),(32,'#beautiful day',NULL,NULL,'poiuyt','2019-08-05 14:16:31','2019-08-05 14:16:31'),(33,'beautiful ',NULL,NULL,'poiuyt','2019-08-05 14:17:11','2019-08-05 14:17:11'),(34,'#jjkkkkb hiih','jjkkkkb',NULL,'poiuyt','2019-08-05 14:19:52','2019-08-05 14:19:52'),(35,'#beautiful #today #mumbai #rains ','beautiful,today,mumbai,rains',NULL,'poiuyt','2019-08-05 14:24:34','2019-08-05 14:24:34'),(36,'#wer jcc #beautiful #mmmm','wer,beautiful,mmmm',NULL,'rhea','2019-08-05 14:34:57','2019-08-05 14:34:57');
/*!40000 ALTER TABLE `tweets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-05 14:42:04
