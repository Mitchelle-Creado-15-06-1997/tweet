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
-- Table structure for table `tweets`
--

DROP TABLE IF EXISTS `tweets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tweets` (
  `tweet_id` int(11) NOT NULL AUTO_INCREMENT,
  `post_text` varchar(120) DEFAULT NULL,
  `hashtag` varchar(45) DEFAULT NULL,
  `media` varchar(200) DEFAULT NULL,
  `userhandle` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `likecount` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`tweet_id`),
  FULLTEXT KEY `hashtag` (`hashtag`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tweets`
--

LOCK TABLES `tweets` WRITE;
/*!40000 ALTER TABLE `tweets` DISABLE KEYS */;
INSERT INTO `tweets` VALUES (1,NULL,'dv',NULL,NULL,'2019-08-01 17:49:51','2019-08-01 17:49:51',NULL),(2,NULL,'jnsnncnd',NULL,NULL,'2019-08-01 17:51:37','2019-08-01 17:51:37',NULL),(3,NULL,'dfdf',NULL,NULL,'2019-08-01 17:58:31','2019-08-01 17:58:31',NULL),(4,'r v ckvnndkv','vfdsvfvr',NULL,NULL,'2019-08-01 18:00:17','2019-08-01 18:00:17',NULL),(5,'dnbn','mnjkkk',NULL,NULL,'2019-08-01 18:03:55','2019-08-01 18:03:55',NULL),(6,'vhgjhgjhg','hfgfjg',NULL,NULL,'2019-08-01 18:43:40','2019-08-01 18:43:40',NULL),(7,'bjhb','jknkjnkj',NULL,NULL,'2019-08-02 11:07:43','2019-08-02 11:07:43',NULL),(8,'bjhb','jknkjnkj',NULL,NULL,'2019-08-02 11:57:21','2019-08-02 11:57:21',NULL),(9,'www',NULL,NULL,'poiuyt','2019-08-02 12:53:54','2019-08-02 12:53:54',NULL),(10,'xssaxsax',NULL,NULL,'poiuyt','2019-08-02 14:09:06','2019-08-02 14:09:06',NULL),(11,'xssaxsax',NULL,NULL,'poiuyt','2019-08-02 14:09:16','2019-08-02 14:09:16',NULL),(12,'hello poiuyt',NULL,NULL,'poiuyt','2019-08-02 14:11:21','2019-08-02 14:11:21',NULL),(13,'jhhvjhjbjbh',NULL,NULL,'poiuyt','2019-08-02 14:11:41','2019-08-02 14:11:41',NULL),(14,'b nnknknnnnn',NULL,NULL,'poiuyt','2019-08-02 15:13:07','2019-08-02 15:13:07',NULL),(15,'vvvvvvv',NULL,NULL,'poiuyt','2019-08-02 15:13:27','2019-08-02 15:13:27',NULL),(16,'hello india ',NULL,NULL,'rhea','2019-08-02 16:12:44','2019-08-02 16:12:44',NULL),(17,'djdnidniniend',NULL,NULL,'rhea','2019-08-02 16:14:34','2019-08-02 16:14:34',NULL),(18,'the lion king',NULL,NULL,'poiuyt','2019-08-02 16:28:35','2019-08-02 16:28:35',NULL),(19,'hurray world',NULL,NULL,'poiuyt','2019-08-02 16:28:43','2019-08-02 16:28:43',NULL),(20,'today is #BEAUTIFUL',NULL,NULL,'poiuyt','2019-08-02 18:07:55','2019-08-02 18:07:55',NULL),(21,'hell#iii',NULL,NULL,'poiuyt','2019-08-02 18:08:54','2019-08-02 18:08:54',NULL),(22,'#eeee',NULL,NULL,'poiuyt','2019-08-02 18:10:55','2019-08-02 18:10:55',NULL),(23,'#wer hello',NULL,NULL,'poiuyt','2019-08-02 18:11:08','2019-08-02 18:11:08',NULL),(24,'#hello today is #beautiful',NULL,NULL,'poiuyt','2019-08-02 18:11:44','2019-08-02 18:11:44',NULL),(25,'#wer bcdmbcmbmn #qwerty',NULL,NULL,'poiuyt','2019-08-02 18:16:13','2019-08-02 18:16:13',NULL),(26,'axsxsxs #Eeee',NULL,NULL,'poiuyt','2019-08-02 18:17:55','2019-08-02 18:17:55',NULL),(27,'#abc qqq','abc',NULL,'poiuyt','2019-08-02 18:19:52','2019-08-02 18:19:52',NULL),(28,'#werfcdjnkfcn #mmmm hello','werfcdjnkfcn,mmmm',NULL,'poiuyt','2019-08-02 18:27:55','2019-08-02 18:27:55',NULL),(29,'jhb,mnnn,nm,n,n',NULL,NULL,'poiuyt','2019-08-05 10:49:17','2019-08-05 10:49:17',NULL),(30,'#beautiful day hello#eee',NULL,NULL,'poiuyt','2019-08-05 14:08:35','2019-08-05 14:08:35',NULL),(31,'#beautiful #holidat # rgefgff kjhb,nn',NULL,NULL,'poiuyt','2019-08-05 14:11:18','2019-08-05 14:11:18',NULL),(32,'#beautiful day',NULL,NULL,'poiuyt','2019-08-05 14:16:31','2019-08-05 14:16:31',NULL),(33,'beautiful ',NULL,NULL,'poiuyt','2019-08-05 14:17:11','2019-08-05 14:17:11',NULL),(34,'#jjkkkkb hiih','jjkkkkb',NULL,'poiuyt','2019-08-05 14:19:52','2019-08-05 14:19:52',NULL),(35,'#beautiful #today #mumbai #rains ','beautiful,today,mumbai,rains',NULL,'poiuyt','2019-08-05 14:24:34','2019-08-05 14:24:34',NULL),(36,'#wer jcc #beautiful #mmmm','wer,beautiful,mmmm',NULL,'rhea','2019-08-05 14:34:57','2019-08-05 14:34:57',NULL),(37,'',NULL,'home/tweet_image/','rhea','2019-08-05 15:26:21','2019-08-05 15:26:21',NULL),(38,'',NULL,'home/tweet_image/','rhea','2019-08-05 15:27:24','2019-08-05 15:27:24',NULL),(39,'',NULL,'home/tweet_image/pic01.jpg','rhea','2019-08-05 15:28:55','2019-08-05 15:28:55',NULL),(40,'',NULL,'home/tweet_image/pic01.jpg','rhea','2019-08-05 15:29:18','2019-08-05 15:29:18',NULL),(41,'',NULL,'home/tweet_image/logo.jpg','rhea','2019-08-05 15:31:10','2019-08-05 15:31:10',NULL),(42,'',NULL,'home/profile_image/pic01.jpg','rhea','2019-08-05 15:33:31','2019-08-05 15:33:31',NULL),(43,'',NULL,'home/profile_image/pic01.jpg','rhea','2019-08-05 15:33:34','2019-08-05 15:33:34',NULL),(44,'',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:33:49','2019-08-05 15:33:49',NULL),(45,'',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:35:27','2019-08-05 15:35:27',NULL),(46,'',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:35:32','2019-08-05 15:35:32',NULL),(47,'',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:38:21','2019-08-05 15:38:21',NULL),(48,'',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:38:22','2019-08-05 15:38:22',NULL),(49,'',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:38:40','2019-08-05 15:38:40',NULL),(50,'',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:38:58','2019-08-05 15:38:58',NULL),(51,'',NULL,'home/profile_image/pic01.jpg','rhea','2019-08-05 15:40:44','2019-08-05 15:40:44',NULL),(52,'',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:41:42','2019-08-05 15:41:42',NULL),(53,'',NULL,'home/profile_image/undefined','rhea','2019-08-05 15:49:09','2019-08-05 15:49:09',NULL),(54,'erRqwrqwR',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:59:11','2019-08-05 15:59:11',NULL),(55,'DFaf',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 15:59:42','2019-08-05 15:59:42',NULL),(56,'asdad',NULL,'home/profile_image/logo.jpg','rhea','2019-08-05 16:01:17','2019-08-05 16:01:17',NULL),(57,'',NULL,'home/profile_image/SampleVideo_1280x720_1mb.mp4','rhea','2019-08-05 16:10:48','2019-08-05 16:10:48',NULL),(58,'hi#hello',NULL,'home/profile_image/SampleVideo_1280x720_1mb.mp4','rhea','2019-08-05 17:54:07','2019-08-05 17:54:07',NULL),(59,'hi #hello','hello','home/tweet_image/undefined','rhea','2019-08-05 18:06:31','2019-08-05 18:06:31',NULL),(60,'hi #hello','hello','home/tweet_image/undefined','rhea','2019-08-05 18:13:24','2019-08-05 18:13:24',NULL),(61,'hello #helle','helle','home/profile_image/undefined','rhea','2019-08-05 18:14:31','2019-08-05 18:14:31',NULL),(62,'hr #hello','hello','home/profile_image/undefined','rhea','2019-08-06 12:20:23','2019-08-05 18:15:25','1'),(63,'hi','','home/profile_image/SampleVideo_1280x720_1mb.mp4','rhea','2019-08-06 12:20:13','2019-08-05 18:17:15','1'),(64,'jhvy','','home/profile_image/SampleVideo_1280x720_1mb.mp4','rhea','2019-08-06 12:42:24','2019-08-05 18:18:02','2'),(65,'good morning #morning','morning','home/profile_image/SampleVideo_1280x720_1mb.mp4','mitchelle','2019-08-06 09:51:21','2019-08-06 09:51:21',NULL),(66,'retweet','','home/profile_image/pic01.jpg','mitchelle','2019-08-06 12:45:06','2019-08-06 11:16:55','1');
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

-- Dump completed on 2019-08-06 13:07:32
