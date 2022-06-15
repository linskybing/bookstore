-- --------------------------------------------------------
-- 主機:                           127.0.0.1
-- 伺服器版本:                        10.4.21-MariaDB - mariadb.org binary distribution
-- 伺服器作業系統:                      Win64
-- HeidiSQL 版本:                  12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- 傾印 secondhandmarket 的資料庫結構
CREATE DATABASE IF NOT EXISTS `secondhandmarket` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `secondhandmarket`;

-- 傾印  資料表 secondhandmarket.announcement 結構
CREATE TABLE IF NOT EXISTS `announcement` (
  `AnnouncementId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '公告編號',
  `Title` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '公告標題',
  `Content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '公告標題',
  `Admin` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '管理員帳號',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`AnnouncementId`),
  KEY `announcement_admin_foreign` (`Admin`),
  CONSTRAINT `announcement_admin_foreign` FOREIGN KEY (`Admin`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.announcement 的資料：~1 rows (近似值)
REPLACE INTO `announcement` (`AnnouncementId`, `Title`, `Content`, `Admin`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, '退款說明', '如果我收到買家的退貨要求，我該怎麼處理？&#13;&#10;STEP 1. 當您收到退貨退款申請時，建議您先與買家聯繫了解退貨退款原因，許多退貨退款申請都可以先透過溝通順利解決&#13;&#10;&#13;&#10;STEP 2. 當買家提出退貨退款申請，您需於三日內主動回應是否同意買家的退貨／退款申請。如果您不同意買家的退貨／退款申請，您可以向蝦皮提出爭議。&#13;&#10;&#13;&#10;STEP 3. 在您同意買家的退貨退款申請後，買家會根據需求選擇欲使用的退貨物流。&#13;&#10;&#1', 'Account', '2022-06-16 00:28:06', '2022-06-16 00:28:06', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.category 結構
CREATE TABLE IF NOT EXISTS `category` (
  `CategoryId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '種類編號',
  `Tag` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '種類名稱',
  `Color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`CategoryId`),
  UNIQUE KEY `UNIQUE` (`Tag`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.category 的資料：~21 rows (近似值)
REPLACE INTO `category` (`CategoryId`, `Tag`, `Color`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, '文學小說', '#264653', '2022-05-23 17:39:30', '2022-05-23 17:39:30', '0000-00-00 00:00:00'),
	(2, '商業理財', '#2A9D8F', '2022-05-23 17:39:44', '2022-05-23 17:39:44', '2022-06-06 23:05:26'),
	(3, '藝術設計', '#E9C46A', '2022-05-23 17:39:52', '2022-05-23 17:39:52', '0000-00-00 00:00:00'),
	(4, '人文史地', '#F4A261', '2022-05-23 17:40:01', '2022-05-23 17:40:01', '0000-00-00 00:00:00'),
	(5, '社會科學', '#E76F51', '2022-05-23 17:40:08', '2022-05-23 17:40:08', '0000-00-00 00:00:00'),
	(6, '自然科普', '#3A86FF', '2022-05-23 17:40:34', '2022-05-23 17:40:34', '0000-00-00 00:00:00'),
	(7, '心理勵志', '#FFBE0B', '2022-05-23 17:40:52', '2022-05-23 17:40:52', '0000-00-00 00:00:00'),
	(8, '醫療保健', '#FB5607', '2022-05-23 17:40:58', '2022-05-23 17:40:58', '0000-00-00 00:00:00'),
	(9, '飲食', '#FF006E', '2022-05-23 17:41:02', '2022-05-23 17:41:02', '0000-00-00 00:00:00'),
	(10, '生活風格', '#8338EC', '2022-05-23 17:41:08', '2022-05-23 17:41:08', '0000-00-00 00:00:00'),
	(11, '旅遊', '#606C38', '2022-05-23 17:41:12', '2022-05-23 17:41:12', '0000-00-00 00:00:00'),
	(12, '宗教命理', '#283618', '2022-05-23 17:41:19', '2022-05-23 17:41:19', '0000-00-00 00:00:00'),
	(13, '親子教養', '#DDA15E', '2022-05-23 17:41:24', '2022-05-23 17:41:24', '0000-00-00 00:00:00'),
	(14, '童書/青少年文學', '#BC6C25', '2022-05-23 17:41:35', '2022-05-23 17:41:35', '0000-00-00 00:00:00'),
	(15, '影視偶像', '#003049', '2022-05-23 17:42:15', '2022-05-23 17:42:15', '0000-00-00 00:00:00'),
	(16, '輕小說', '#D62828', '2022-05-23 17:42:21', '2022-05-23 17:42:21', '0000-00-00 00:00:00'),
	(17, '漫畫/圖書文', '#F77F00', '2022-05-23 17:42:29', '2022-05-23 17:42:29', '0000-00-00 00:00:00'),
	(18, '語言學習', '#FCBF49', '2022-05-23 17:42:36', '2022-05-23 17:42:36', '0000-00-00 00:00:00'),
	(19, '考試用書', '#EAE2B7', '2022-05-23 17:42:41', '2022-05-23 17:42:41', '0000-00-00 00:00:00'),
	(20, '電腦資訊', '#03071E', '2022-05-23 17:42:47', '2022-05-23 17:42:47', '0000-00-00 00:00:00'),
	(21, '專業/教科書/政府出版品', '#2EC4B6', '2022-05-23 17:43:00', '2022-06-06 22:25:08', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.chatroom 結構
CREATE TABLE IF NOT EXISTS `chatroom` (
  `RoomId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '聊天室編號',
  `Seller` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家',
  `User` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`RoomId`),
  KEY `chatroom_seller_foreign` (`Seller`),
  KEY `chatroom_user_foreign` (`User`),
  CONSTRAINT `chatroom_seller_foreign` FOREIGN KEY (`Seller`) REFERENCES `users` (`Account`),
  CONSTRAINT `chatroom_user_foreign` FOREIGN KEY (`User`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.chatroom 的資料：~1 rows (近似值)
REPLACE INTO `chatroom` (`RoomId`, `Seller`, `User`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, 'Account', 'test5', '2022-06-15 23:47:09', '2022-06-15 23:47:09', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.dealmessage 結構
CREATE TABLE IF NOT EXISTS `dealmessage` (
  `MessageId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '訊息編號',
  `RecordId` int(10) unsigned NOT NULL COMMENT '紀錄編號',
  `Content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '留言內容',
  `Creator` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '留言者',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`MessageId`),
  KEY `dealmessage_recordid_foreign` (`RecordId`),
  KEY `dealmessage_creator_foreign` (`Creator`),
  CONSTRAINT `dealmessage_creator_foreign` FOREIGN KEY (`Creator`) REFERENCES `users` (`Account`),
  CONSTRAINT `dealmessage_recordid_foreign` FOREIGN KEY (`RecordId`) REFERENCES `recorddeal` (`RecordId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.dealmessage 的資料：~0 rows (近似值)

-- 傾印  資料表 secondhandmarket.dealreview 結構
CREATE TABLE IF NOT EXISTS `dealreview` (
  `ReviewId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '評價編號',
  `RecordId` int(10) unsigned NOT NULL COMMENT '交易編號',
  `CustomerScore` int(11) DEFAULT NULL COMMENT '顧客評價分數',
  `CustomerReview` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '顧客評價內容',
  `CustomerTime` datetime DEFAULT NULL COMMENT '顧客評價時間',
  `SellerScore` int(11) DEFAULT NULL COMMENT '賣家評價分數',
  `SellerReview` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '賣家評價內容',
  `SellerTime` datetime NOT NULL COMMENT '賣家評價時間',
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`ReviewId`),
  KEY `dealreview_recordid_foreign` (`RecordId`),
  CONSTRAINT `dealreview_recordid_foreign` FOREIGN KEY (`RecordId`) REFERENCES `recorddeal` (`RecordId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.dealreview 的資料：~5 rows (近似值)
REPLACE INTO `dealreview` (`ReviewId`, `RecordId`, `CustomerScore`, `CustomerReview`, `CustomerTime`, `SellerScore`, `SellerReview`, `SellerTime`, `DeletedAt`) VALUES
	(1, 1, 5, '書籍品質、賣家服務態度良好', '2022-06-15 22:45:41', 5, '買家讚', '2022-06-15 22:45:56', '0000-00-00 00:00:00'),
	(2, 3, 5, '讚', '2022-06-15 23:53:18', 5, '買家很讚', '2022-06-15 23:53:18', '0000-00-00 00:00:00'),
	(3, 4, 5, '讚', '2022-06-16 00:08:07', 5, '讚', '2022-06-16 00:08:17', '0000-00-00 00:00:00'),
	(4, 6, 5, '讚', '2022-06-16 00:43:23', 5, '讚', '2022-06-16 00:43:23', '0000-00-00 00:00:00'),
	(5, 7, 5, '讚', '2022-06-16 00:52:01', 5, '讚', '2022-06-16 00:52:09', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.deposits 結構
CREATE TABLE IF NOT EXISTS `deposits` (
  `DepositId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '存款編號',
  `User` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者',
  `BankId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '銀行編號',
  `DepositAccount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '存款帳戶',
  `State` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '未驗證' COMMENT '存款帳戶狀態',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`DepositId`),
  KEY `deposits_user_foreign` (`User`),
  CONSTRAINT `deposits_user_foreign` FOREIGN KEY (`User`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.deposits 的資料：~1 rows (近似值)
REPLACE INTO `deposits` (`DepositId`, `User`, `BankId`, `DepositAccount`, `State`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, 'Account', '508', '74687678678876', '未驗證', '2022-05-10 17:19:40', '2022-05-10 17:21:36', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.functionlist 結構
CREATE TABLE IF NOT EXISTS `functionlist` (
  `FunctionId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '功能編號',
  `FunctionName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '功能名稱',
  `CreatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`FunctionId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.functionlist 的資料：~5 rows (近似值)
REPLACE INTO `functionlist` (`FunctionId`, `FunctionName`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, '公告管理', '2022-05-23 17:33:17', '2022-05-23 17:33:17', '0000-00-00 00:00:00'),
	(2, '商品種類管理', '2022-05-23 17:33:34', '2022-05-23 17:33:34', '0000-00-00 00:00:00'),
	(3, '權限管理', '2022-05-23 17:33:51', '2022-05-23 17:33:51', '0000-00-00 00:00:00'),
	(4, '問題回報', '2022-05-23 17:34:31', '2022-05-23 17:34:31', '0000-00-00 00:00:00'),
	(5, '報表分析', '2022-06-06 16:02:46', '2022-06-06 16:02:46', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.problemlist 結構
CREATE TABLE IF NOT EXISTS `problemlist` (
  `ProblemId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '問題編號',
  `Title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '問題標題',
  `Content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '問題內容',
  `PostUser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '上傳者',
  `State` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '未解決' COMMENT '問題狀態',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`ProblemId`),
  KEY `problemlist_postuser_foreign` (`PostUser`),
  CONSTRAINT `problemlist_postuser_foreign` FOREIGN KEY (`PostUser`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.problemlist 的資料：~0 rows (近似值)

-- 傾印  資料表 secondhandmarket.problemreply 結構
CREATE TABLE IF NOT EXISTS `problemreply` (
  `ProblemReply` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '回覆編號',
  `ProblemId` int(10) unsigned NOT NULL COMMENT '問題編號',
  `Reply` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '回覆內容',
  `ReplyUser` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '回覆者',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`ProblemReply`),
  KEY `problemreply_problemid_foreign` (`ProblemId`),
  KEY `problemreply_replyuser_foreign` (`ReplyUser`),
  CONSTRAINT `problemreply_problemid_foreign` FOREIGN KEY (`ProblemId`) REFERENCES `problemlist` (`ProblemId`),
  CONSTRAINT `problemreply_replyuser_foreign` FOREIGN KEY (`ReplyUser`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.problemreply 的資料：~0 rows (近似值)

-- 傾印  資料表 secondhandmarket.product 結構
CREATE TABLE IF NOT EXISTS `product` (
  `ProductId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品編號',
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品名稱',
  `Description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品描述',
  `Price` int(11) NOT NULL COMMENT '價格',
  `Inventory` int(11) NOT NULL COMMENT '庫存',
  `State` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'on' COMMENT '商品狀態',
  `Seller` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家',
  `Watch` int(11) NOT NULL DEFAULT 0,
  `Rent` tinyint(4) NOT NULL DEFAULT 0,
  `MaxRent` int(11) NOT NULL DEFAULT 0,
  `RentPrice` int(11) NOT NULL DEFAULT 0,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`ProductId`),
  KEY `product_seller_foreign` (`Seller`),
  CONSTRAINT `product_seller_foreign` FOREIGN KEY (`Seller`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.product 的資料：~16 rows (近似值)
REPLACE INTO `product` (`ProductId`, `Name`, `Description`, `Price`, `Inventory`, `State`, `Seller`, `Watch`, `Rent`, `MaxRent`, `RentPrice`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, '刺客正傳系列套書【二十五週年紀念．限量典藏插畫精裝書盒版】', '作者羅蘋．荷布：「二十五年來，蜚滋從一個五歲的小屁孩，成長為一個刺客高手，再到歷經滄桑的六十歲男人。朋友、伙伴來來去去，他經歷過困苦和孤寂，享受過安詳和滿足。一本接著一本書，我和讀者一直陪伴著他……衷心感激你，在心靈騰出一個空間，給了我的人物角色一個家。」', 1999, 50, 'on', 'Account', 0, 0, 0, 0, '2022-06-14 22:59:46', '2022-06-14 22:59:46', '0000-00-00 00:00:00'),
	(2, '艾笛的永生契約', '亞馬遜網路書店年度20大推薦書、美國獨立書商協會選書、邦諾書店選書&#13;&#10;每月一書俱樂部年度好書決選入圍&#13;&#10;《出版人週刊》、《柯克斯書評》、《書單》、《圖書館期刊》星號佳評&#13;&#10;歐普拉雜誌、芝加哥論壇報、娛樂週刊、美國國家廣播電台、CNN、Medium、Bustle、PopSugar、BuzzFeed、io9、Literary Hub、Book Riot推薦選書', 411, 50, 'on', 'Account', 0, 0, 0, 0, '2022-06-14 23:02:35', '2022-06-16 00:31:21', '0000-00-00 00:00:00'),
	(3, '貝加爾湖隱居札記', '　　兩隻狗、一座燒柴鍋爐，以及一扇面湖的窗戶，這是戴松僅有的東西。他靠自己的雙手將小木屋內部打造成像梵谷在亞爾小鎮那間黃房子，自然明亮且毫不矯飾。他每天的生活逐漸簡化成幾個行為：砍柴、釣魚、煮飯；而陪伴他的只有書籍、伏特加與雪茄。', 284, 50, 'on', 'Account', 0, 0, 0, 0, '2022-06-14 23:03:50', '2022-06-16 00:33:22', '0000-00-00 00:00:00'),
	(4, '在自己房間裡的旅行', '　　雖然困居一室之內，但只要能把這段日子看作是個旅程，那不僅可以讓自己脫離空間的桎梏，奔放於這個旅程，還可以強化自己的感覺能力，讓以前麻木的變敏銳，以前的自大翻轉成謙卑。&#13;&#10;&#13;&#10;　　因決鬥被判禁足四十二天，又適逢熱鬧的嘉年華會如火如荼展開，對一位血氣方剛的二十七歲軍官來說，無疑是最大的懲罰。軍令、屋牆固然可禁錮身體的移動，卻無法禁止一顆活躍心靈上天入地、穿梭古今；何況還有善良忠僕和愛犬，加上書冊畫作陪伴。想像力獲得最大釋放，帶領青年自由翱翔，讓原本鬱悶不堪的禁足，脫胎成一趟', 198, 50, 'on', 'Account', 0, 0, 0, 0, '2022-06-14 23:04:41', '2022-06-15 22:43:40', '0000-00-00 00:00:00'),
	(5, '銀之夜', '　　千鶴的婚姻是攤靜止的死水。丈夫外遇，夜不歸戶，但她不嫉妒也不戳破，因為她「需要」婚姻帶來的安穩。可是明明已經這麼孤單了，還是會害怕物理上孤身一人，千鶴對這樣的自己感到困惑。', 300, 48, 'on', 'Account', 0, 0, 0, 0, '2022-06-15 09:53:14', '2022-06-16 00:34:21', '0000-00-00 00:00:00'),
	(6, '彼岸花盛開之島【日本原版書封】', '　　李琴峰醞釀多年，揉合歷史與文化思索、西洋「烏托邦」與東方「桃花源」意象，突破而大膽的語言實驗、宗教與傳說、性別與酷兒，編織出一則溫柔又充滿詩意的奇幻寓言。', 273, 50, 'on', 'Account', 0, 1, 56, 10, '2022-06-15 09:54:50', '2022-06-15 09:54:50', '0000-00-00 00:00:00'),
	(7, '好好再見 不負遇見', '　　曾經孤獨的少年，遇上了另一個孤獨的靈魂，兩個孤單的人看似完整了彼此的寂寞。然而，孤獨從未因此消失，只是被藏進心中，埋藏在人際往來的喧囂背後。', 300, 2, 'on', 'Account', 0, 1, 50, 5, '2022-06-15 09:55:46', '2022-06-15 23:51:10', '0000-00-00 00:00:00'),
	(8, '建築物室內裝修工程管理乙級學術科技能檢定考照祕笈', '　　根據勞動部技能檢定中心的統計資料(100~109年)，報考「建築物室內裝修工程管理」職類人數累計達50706人，平均每年約有五千多人的報考。且合格通過率也由5%及11%，逐年增加至39%左右(近40%)。在術科考題也由過去的A、B、C、D四卷且範圍較亂，在民國108年起改為A、B、C三卷且範圍較明確。', 498, 50, 'on', 'Account', 0, 1, 180, 3, '2022-06-15 09:58:31', '2022-06-15 10:43:51', '0000-00-00 00:00:00'),
	(9, '2022金融基測／銀行招考題庫套書', '　　2021年起，因金融基測不再公布試題，且各大公股行庫招考之試題也不再對非考生公開。使得對未來有意參加銀行考試、投身金融業的準考生而言，少了重要考古資料下，容易陷入備考上無所適從、抓不到重點的困境。', 672, 50, 'on', 'Account', 0, 1, 30, 5, '2022-06-15 10:04:55', '2022-06-15 10:04:55', '0000-00-00 00:00:00'),
	(10, '2022細說金融基測／銀行招考套書', '　　最新題庫完全攻略：本版特與民間各銀行招考讀書會合作，透過廣大考生們考後的無私分享，除陸續將各大公股行庫招考試題收錄外，也逐漸歸納整理出金融基測FIT的命題輪廓。第一部分收錄各大公股行庫招考與其他相關考試試題、第二部分則針對金融基測命題方向，設計仿真模擬試題。試題數量充足、題題均附詳盡解析。一書在手，最新試題情報全部掌握。', 1699, 50, 'on', 'Account', 0, 1, 60, 6, '2022-06-15 10:06:37', '2022-06-15 10:09:27', '0000-00-00 00:00:00'),
	(11, '貓哲學：貓與生命意義', '　　人這種動物，只要活著就經常感到不安與憂懼，無論是人跟世界的關係，或是人跟自己的關係，總是充滿痛苦折磨。人類的哲學思想，有大半在討論人為何會痛苦，該怎麼避免痛苦，如何在充滿變動與失落的世界安身，如何過得幸福快樂。&#13;&#10; &#13;&#10;　　貓卻不同。貓不追求幸福，因為幸福就是牠們的預設狀態。這本書的主題是貓的天性，以及我們可以從中學到什麼。我們能夠從貓身上學到的，或許比過往的偉大思想家更多。', 252, 49, 'on', 'Account', 0, 1, 30, 2, '2022-06-15 10:41:33', '2022-06-15 22:44:04', '0000-00-00 00:00:00'),
	(12, '一次戰勝新制多益TOEIC必考核心單字', '　　本書按照多益官方頒訂的13大情境所規劃，依照這些情境延伸出20個單元，所有單字及例句完全符合多益考試必考情境，讓你用最寶貴的時間學到最必要的單字！', 336, -72, 'on', 'Account', 0, 1, 180, 3, '2022-06-15 10:52:39', '2022-06-15 22:46:43', '0000-00-00 00:00:00'),
	(13, '前進滿分GEPT全民英檢初級試題解析+單字大全', '　　為幫助讀者用更便利的方式收聽書中音檔，特別取得「Youtor有它外語」授權使用「VRP虛擬點讀筆」專利設計。只要下載專屬App，即可隨時利用手機掃描書中的QR Code，馬上聽取本書的字彙英文發音、中文解釋。不用花錢購買「點讀筆」，也能享有和「點讀筆」一樣的功能。', 299, 49, 'on', 'Account', 0, 0, 0, 0, '2022-06-15 10:58:42', '2022-06-16 00:07:07', '0000-00-00 00:00:00'),
	(14, 'IELTS 雅思致勝寶典：圖解聽說讀寫攻略+ 4回完勝 模擬試題', '　　Global ELT是英國專門出版針對國際認證ELT（English Language Teaching）測驗的模擬試題及準備用書的權威出版社，產品種類包括：雅思、托福、多益、劍橋國際英語認證……等。除了考試書籍，Global ELT也出版許多英語學習書籍，如文法、聽說讀寫、字彙、ELT字典、慣用語與動詞片語、英語學習主教材及各類分級讀本等。', 567, 50, 'on', 'Account', 0, 1, 180, 7, '2022-06-15 11:04:17', '2022-06-15 11:04:17', '0000-00-00 00:00:00'),
	(15, '史上最強NEW GEPT全民英檢中級單字+文法(附文法教學影片', '　　《史上最強全民英檢中級單字＋文法》，一次給你&#13;&#10;　　最強的必考單字！&#13;&#10;　　以官方字表為基礎，收錄近2700個必考單字。&#13;&#10; &#13;&#10;　　最強的學習內容！&#13;&#10;　　單字中英文、近反義字、片語、衍生字等全收錄。&#13;&#10; &#13;&#10;　　最強的文法解說！&#13;&#10;　　重點文法解說，搭配真人講解文法影片，&#13;&#10;　　學單字還可以學文法！&#13;&#10; &#13;&#10;　　要背就要背會', 276, 46, 'on', 'Account', 0, 0, 0, 0, '2022-06-15 11:06:06', '2022-06-16 00:49:16', '0000-00-00 00:00:00'),
	(16, '大數據驅動商業決策：13 個 RapidMiner 商業預測操作實務', '　　手搖飲競爭對手在哪裡？超市商品之間是否有關連性？推薦什麼電影給客戶？客戶是否下單買保險？電信業的客戶是否跳槽？公司未來營收可能是多少…公司從草創到轉型的過程中，會遇到很多的問題。但是，現在你有了解決方案！', 498, 50, 'on', 'Account', 0, 0, 0, 0, '2022-06-15 11:07:10', '2022-06-15 11:07:10', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.productimage 結構
CREATE TABLE IF NOT EXISTS `productimage` (
  `ImageId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品圖片編號',
  `ProductId` int(10) unsigned NOT NULL COMMENT '商品編號',
  `Image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品圖片',
  `CreatedAt` datetime NOT NULL,
  PRIMARY KEY (`ImageId`),
  KEY `productimage_productid_foreign` (`ProductId`),
  CONSTRAINT `productimage_productid_foreign` FOREIGN KEY (`ProductId`) REFERENCES `product` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.productimage 的資料：~16 rows (近似值)
REPLACE INTO `productimage` (`ImageId`, `ProductId`, `Image`, `CreatedAt`) VALUES
	(1, 1, 'MQ.webp', '2022-06-14 23:01:41'),
	(2, 2, 'Mg.webp', '2022-06-14 23:03:05'),
	(3, 3, 'Mw.webp', '2022-06-14 23:04:06'),
	(4, 4, 'NA.webp', '2022-06-14 23:04:52'),
	(5, 5, 'NQ.webp', '2022-06-15 09:53:39'),
	(6, 6, 'Ng.webp', '2022-06-15 09:55:02'),
	(7, 7, 'Nw.webp', '2022-06-15 09:56:16'),
	(8, 8, 'OA.webp', '2022-06-15 10:03:15'),
	(9, 9, 'OQ.webp', '2022-06-15 10:05:13'),
	(10, 10, 'MTA.webp', '2022-06-15 10:06:53'),
	(11, 11, 'MTE.webp', '2022-06-15 10:41:47'),
	(12, 12, 'MTI.webp', '2022-06-15 10:53:09'),
	(13, 13, 'MTM.webp', '2022-06-15 10:59:07'),
	(14, 14, 'MTQ.webp', '2022-06-15 11:04:34'),
	(15, 15, 'MTU.webp', '2022-06-15 11:06:26'),
	(16, 16, 'MTY.webp', '2022-06-15 11:07:38');

-- 傾印  資料表 secondhandmarket.productquestion 結構
CREATE TABLE IF NOT EXISTS `productquestion` (
  `QuestionId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '問題編號',
  `ProductId` int(10) unsigned NOT NULL COMMENT '商品編號',
  `Content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '問題內容',
  `PostTime` datetime NOT NULL COMMENT '上傳時間',
  `Customer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '買家',
  `Reply` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '回應內容',
  `ReplyTime` datetime DEFAULT NULL COMMENT '回應時間',
  `Seller` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '賣家',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`QuestionId`),
  KEY `productquestion_productid_foreign` (`ProductId`),
  KEY `productquestion_customer_foreign` (`Customer`),
  KEY `productquestion_seller_foreign` (`Seller`),
  CONSTRAINT `productquestion_customer_foreign` FOREIGN KEY (`Customer`) REFERENCES `users` (`Account`),
  CONSTRAINT `productquestion_productid_foreign` FOREIGN KEY (`ProductId`) REFERENCES `product` (`ProductId`),
  CONSTRAINT `productquestion_seller_foreign` FOREIGN KEY (`Seller`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.productquestion 的資料：~0 rows (近似值)

-- 傾印  資料表 secondhandmarket.recordchat 結構
CREATE TABLE IF NOT EXISTS `recordchat` (
  `ChatId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '聊天訊息編號',
  `RoomId` int(10) unsigned NOT NULL COMMENT '聊天室編號',
  `Creator` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '留言者',
  `Message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '對話內容',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`ChatId`),
  KEY `recordchat_roomid_foreign` (`RoomId`),
  KEY `recordchat_creator_foreign` (`Creator`),
  CONSTRAINT `recordchat_creator_foreign` FOREIGN KEY (`Creator`) REFERENCES `users` (`Account`),
  CONSTRAINT `recordchat_roomid_foreign` FOREIGN KEY (`RoomId`) REFERENCES `chatroom` (`RoomId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.recordchat 的資料：~4 rows (近似值)
REPLACE INTO `recordchat` (`ChatId`, `RoomId`, `Creator`, `Message`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, 1, 'test5', '好好再見 不負遇見，書齡是多少呢', '2022-06-15 23:47:56', '2022-06-15 23:47:56', '0000-00-00 00:00:00'),
	(2, 1, 'test5', '?', '2022-06-15 23:48:41', '2022-06-15 23:48:41', '0000-00-00 00:00:00'),
	(3, 1, 'Account', '大約只有1年基本全新', '2022-06-15 23:50:34', '2022-06-15 23:50:34', '0000-00-00 00:00:00'),
	(4, 1, 'test5', '好的謝謝', '2022-06-15 23:50:47', '2022-06-15 23:50:47', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.recorddeal 結構
CREATE TABLE IF NOT EXISTS `recorddeal` (
  `RecordId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '交易編號',
  `ShoppingId` int(10) unsigned NOT NULL COMMENT '商品清單編號',
  `State` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '交易狀態',
  `DealMethod` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '交易方式',
  `SentAddress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '寄送地址',
  `Phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DealType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '交易類型',
  `StartTime` datetime DEFAULT NULL COMMENT '起始時間',
  `EndTime` datetime DEFAULT NULL COMMENT '歸還時間',
  `Seller_Agree` tinyint(4) DEFAULT NULL,
  `SellerContent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Customer_Agree` tinyint(4) DEFAULT NULL,
  `CustomerContent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  `ReturnTime` datetime DEFAULT NULL,
  PRIMARY KEY (`RecordId`),
  KEY `recorddeal_shoppingid_foreign` (`ShoppingId`),
  CONSTRAINT `recorddeal_shoppingid_foreign` FOREIGN KEY (`ShoppingId`) REFERENCES `shoppinglist` (`ShoppingId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.recorddeal 的資料：~7 rows (近似值)
REPLACE INTO `recorddeal` (`RecordId`, `ShoppingId`, `State`, `DealMethod`, `SentAddress`, `Phone`, `DealType`, `StartTime`, `EndTime`, `Seller_Agree`, `SellerContent`, `Customer_Agree`, `CustomerContent`, `CreatedAt`, `UpdatedAt`, `DeletedAt`, `ReturnTime`) VALUES
	(1, 2, '完成交易', '貨到付款', '404台中市北區三民路三段129號', '0906307318', 'Rent', '2022-06-15 22:44:56', '2022-06-16 22:44:56', NULL, NULL, NULL, NULL, '2022-06-15 22:44:29', '2022-06-15 22:45:56', '0000-00-00 00:00:00', '2022-06-15 22:45:07'),
	(2, 3, '未歸還', '貨到付款', '404台中市北區三民路三段129號', '0906307318', 'Rent', '2022-06-15 23:52:15', '2022-10-15 23:52:15', NULL, NULL, NULL, NULL, '2022-06-15 22:47:00', '2022-06-15 23:52:15', '0000-00-00 00:00:00', NULL),
	(3, 4, '完成交易', '貨到付款', '台中科技大學', '0906307318', 'Rent', '2022-06-15 23:52:04', '2022-08-02 23:52:04', NULL, NULL, NULL, NULL, '2022-06-15 23:51:24', '2022-06-15 23:53:18', '0000-00-00 00:00:00', '2022-06-15 23:52:07'),
	(4, 5, '完成交易', '面交', '台中科大', '0906307318', 'Buy', NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-16 00:07:34', '2022-06-16 00:08:18', '0000-00-00 00:00:00', NULL),
	(5, 6, '已取消', '貨到付款', '台中科技大學', '0906307318', 'Buy', NULL, NULL, 1, NULL, 1, '買錯', '2022-06-16 00:29:40', '2022-06-16 00:31:21', '0000-00-00 00:00:00', NULL),
	(6, 8, '完成交易', '面交', '台中科技大學', '0906307318', 'Buy', NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-16 00:37:01', '2022-06-16 00:43:23', '0000-00-00 00:00:00', NULL),
	(7, 9, '完成交易', '貨到付款', '台中科技大學', '0906307318', 'Buy', NULL, NULL, NULL, NULL, NULL, NULL, '2022-06-16 00:50:23', '2022-06-16 00:52:09', '0000-00-00 00:00:00', NULL);

-- 傾印  資料表 secondhandmarket.role 結構
CREATE TABLE IF NOT EXISTS `role` (
  `RoleId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '角色編號',
  `RoleName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '角色名稱',
  `CreatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `UpdatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`RoleId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.role 的資料：~3 rows (近似值)
REPLACE INTO `role` (`RoleId`, `RoleName`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, '超級管理員', '2022-05-23 17:35:00', '2022-06-07 14:07:06', '0000-00-00 00:00:00'),
	(2, '財務管理', '2022-06-07 11:19:57', '2022-06-07 11:19:57', '2022-06-07 11:31:27'),
	(3, '財務管理', '2022-06-07 11:38:29', '2022-06-15 23:08:03', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.rolepermissions 結構
CREATE TABLE IF NOT EXISTS `rolepermissions` (
  `PermissionId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '權限編號',
  `RoleId` int(10) unsigned NOT NULL COMMENT '功能編號',
  `FunctionId` int(10) unsigned NOT NULL COMMENT '功能名稱',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`PermissionId`),
  KEY `rolepermissions_functionid_foreign` (`FunctionId`),
  KEY `rolepermissions_roleid_foreign` (`RoleId`),
  CONSTRAINT `rolepermissions_functionid_foreign` FOREIGN KEY (`FunctionId`) REFERENCES `functionlist` (`FunctionId`),
  CONSTRAINT `rolepermissions_roleid_foreign` FOREIGN KEY (`RoleId`) REFERENCES `role` (`RoleId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.rolepermissions 的資料：~8 rows (近似值)
REPLACE INTO `rolepermissions` (`PermissionId`, `RoleId`, `FunctionId`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(2, 1, 2, '2022-05-23 17:36:36', '2022-05-23 17:36:36', '0000-00-00 00:00:00'),
	(3, 1, 3, '2022-05-23 17:36:47', '2022-05-23 17:36:47', '0000-00-00 00:00:00'),
	(4, 1, 4, '2022-05-23 17:36:47', '2022-05-23 17:36:47', '0000-00-00 00:00:00'),
	(6, 1, 1, '2022-06-07 10:29:22', '2022-06-07 10:29:22', '0000-00-00 00:00:00'),
	(7, 2, 5, '2022-06-07 11:19:58', '2022-06-07 11:19:58', '0000-00-00 00:00:00'),
	(8, 3, 5, '2022-06-07 11:38:30', '2022-06-07 11:38:30', '0000-00-00 00:00:00'),
	(10, 1, 5, '2022-06-07 14:07:07', '2022-06-07 14:07:07', '0000-00-00 00:00:00'),
	(11, 3, 2, '2022-06-15 23:08:03', '2022-06-15 23:08:03', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.shoppingcart 結構
CREATE TABLE IF NOT EXISTS `shoppingcart` (
  `CartId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '購物車編號',
  `Member` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者編號',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`CartId`),
  KEY `shoppingcart_member_foreign` (`Member`),
  CONSTRAINT `shoppingcart_member_foreign` FOREIGN KEY (`Member`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.shoppingcart 的資料：~2 rows (近似值)
REPLACE INTO `shoppingcart` (`CartId`, `Member`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(2, 'Account', '2022-05-10 10:46:22', '2022-05-10 10:46:22', '0000-00-00 00:00:00'),
	(3, 'test5', '2022-06-07 14:12:43', '2022-06-07 14:12:43', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.shoppinglist 結構
CREATE TABLE IF NOT EXISTS `shoppinglist` (
  `ShoppingId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '購物編號',
  `CartId` int(10) unsigned NOT NULL COMMENT '購物車編號',
  `ProductId` int(10) unsigned NOT NULL COMMENT '商品編號',
  `Count` int(11) NOT NULL COMMENT '商品數量',
  `Type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Buy',
  `State` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '未結帳' COMMENT '清單狀態',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`ShoppingId`),
  KEY `shoppinglist_cartid_foreign` (`CartId`),
  KEY `shoppinglist_productid_foreign` (`ProductId`),
  CONSTRAINT `shoppinglist_cartid_foreign` FOREIGN KEY (`CartId`) REFERENCES `shoppingcart` (`CartId`),
  CONSTRAINT `shoppinglist_productid_foreign` FOREIGN KEY (`ProductId`) REFERENCES `product` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.shoppinglist 的資料：~7 rows (近似值)
REPLACE INTO `shoppinglist` (`ShoppingId`, `CartId`, `ProductId`, `Count`, `Type`, `State`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(2, 3, 11, 30, 'Rent', '下訂單', '2022-06-15 22:44:04', '2022-06-15 22:44:30', '0000-00-00 00:00:00'),
	(3, 3, 12, 122, 'Rent', '下訂單', '2022-06-15 22:46:43', '2022-06-15 22:47:01', '0000-00-00 00:00:00'),
	(4, 3, 7, 48, 'Rent', '下訂單', '2022-06-15 23:51:10', '2022-06-15 23:51:24', '0000-00-00 00:00:00'),
	(5, 3, 13, 1, 'Buy', '下訂單', '2022-06-16 00:07:07', '2022-06-16 00:07:35', '0000-00-00 00:00:00'),
	(6, 2, 2, 2, 'Buy', '下訂單', '2022-06-16 00:29:20', '2022-06-16 00:29:40', '0000-00-00 00:00:00'),
	(8, 3, 5, 2, 'Buy', '下訂單', '2022-06-16 00:34:21', '2022-06-16 00:37:01', '0000-00-00 00:00:00'),
	(9, 3, 15, 4, 'Buy', '下訂單', '2022-06-16 00:49:16', '2022-06-16 00:50:23', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.taglist 結構
CREATE TABLE IF NOT EXISTS `taglist` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `CategoryId` int(10) unsigned NOT NULL COMMENT '種類編號',
  `ProductId` int(10) unsigned NOT NULL COMMENT '商品編號',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `taglist_categoryid_foreign` (`CategoryId`),
  KEY `taglist_productid_foreign` (`ProductId`),
  CONSTRAINT `taglist_categoryid_foreign` FOREIGN KEY (`CategoryId`) REFERENCES `category` (`CategoryId`),
  CONSTRAINT `taglist_productid_foreign` FOREIGN KEY (`ProductId`) REFERENCES `product` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.taglist 的資料：~16 rows (近似值)
REPLACE INTO `taglist` (`Id`, `CategoryId`, `ProductId`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, 1, 4, '2022-06-15 09:52:00', '2022-06-15 09:52:00', '0000-00-00 00:00:00'),
	(2, 1, 3, '2022-06-15 09:52:07', '2022-06-15 09:52:07', '0000-00-00 00:00:00'),
	(3, 1, 2, '2022-06-15 09:52:14', '2022-06-15 09:52:14', '0000-00-00 00:00:00'),
	(4, 1, 1, '2022-06-15 09:52:21', '2022-06-15 09:52:21', '0000-00-00 00:00:00'),
	(5, 1, 6, '2022-06-15 09:55:07', '2022-06-15 09:55:07', '0000-00-00 00:00:00'),
	(6, 1, 7, '2022-06-15 09:56:51', '2022-06-15 09:56:51', '0000-00-00 00:00:00'),
	(7, 19, 8, '2022-06-15 10:03:21', '2022-06-15 10:03:21', '0000-00-00 00:00:00'),
	(8, 19, 9, '2022-06-15 10:05:19', '2022-06-15 10:05:19', '0000-00-00 00:00:00'),
	(9, 19, 10, '2022-06-15 10:07:00', '2022-06-15 10:07:00', '0000-00-00 00:00:00'),
	(10, 18, 12, '2022-06-15 10:53:32', '2022-06-15 10:53:32', '0000-00-00 00:00:00'),
	(11, 4, 11, '2022-06-15 10:57:30', '2022-06-15 10:57:30', '0000-00-00 00:00:00'),
	(12, 18, 13, '2022-06-15 10:58:54', '2022-06-15 10:58:54', '0000-00-00 00:00:00'),
	(13, 18, 14, '2022-06-15 11:04:58', '2022-06-15 11:04:58', '0000-00-00 00:00:00'),
	(14, 20, 16, '2022-06-15 11:07:59', '2022-06-15 11:07:59', '0000-00-00 00:00:00'),
	(15, 18, 15, '2022-06-16 00:56:29', '2022-06-16 00:56:29', '0000-00-00 00:00:00'),
	(16, 1, 5, '2022-06-16 00:56:38', '2022-06-16 00:56:38', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.userrole 結構
CREATE TABLE IF NOT EXISTS `userrole` (
  `UserRoleId` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '使用者角色編號',
  `User` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者',
  `RoleId` int(10) unsigned NOT NULL COMMENT '角色編號',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`UserRoleId`),
  KEY `userrole_user_foreign` (`User`),
  KEY `userrole_roleid_foreign` (`RoleId`),
  CONSTRAINT `userrole_roleid_foreign` FOREIGN KEY (`RoleId`) REFERENCES `role` (`RoleId`),
  CONSTRAINT `userrole_user_foreign` FOREIGN KEY (`User`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.userrole 的資料：~2 rows (近似值)
REPLACE INTO `userrole` (`UserRoleId`, `User`, `RoleId`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	(1, 'Account', 1, '2022-05-23 17:38:00', '2022-05-23 17:38:00', '0000-00-00 00:00:00'),
	(3, 'test5', 3, '2022-06-15 23:33:43', '2022-06-15 23:33:43', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.users 結構
CREATE TABLE IF NOT EXISTS `users` (
  `Account` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者帳號',
  `Password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者編號',
  `Name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '姓名',
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '電子信箱',
  `EmailVerifiedAt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '信箱驗證時間',
  `AuthCode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '驗證碼',
  `Money` int(11) NOT NULL DEFAULT 0 COMMENT '帳戶餘額',
  `Balance` tinyint(1) NOT NULL DEFAULT 0 COMMENT '保證金',
  `Address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '地址',
  `Image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '大頭貼',
  `Active` tinyint(4) DEFAULT 0,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `DeletedAt` datetime NOT NULL,
  PRIMARY KEY (`Account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.users 的資料：~2 rows (近似值)
REPLACE INTO `users` (`Account`, `Password`, `Name`, `Email`, `EmailVerifiedAt`, `AuthCode`, `Money`, `Balance`, `Address`, `Image`, `Active`, `CreatedAt`, `UpdatedAt`, `DeletedAt`) VALUES
	('Account', '9dc68d2ca96897f90619ad3ce5ddb2fa5f9e91814b6b1a7a1ffa92dcc1a2df7c', '管理員兼賣家', 'linskybing@gmail.com', NULL, '', 2245, 1, 'asdf', 'YXNkZmFzZGY.jpg', 1, '2022-05-09 09:45:27', '2022-06-16 00:52:09', '0000-00-00 00:00:00'),
	('test5', '9dc68d2ca96897f90619ad3ce5ddb2fa5f9e91814b6b1a7a1ffa92dcc1a2df7c', '買家', 'linskybing@gmail.com', NULL, '', 336, 1, NULL, '6LK35a62.jpg', 1, '2022-06-07 14:12:42', '2022-06-15 23:33:32', '0000-00-00 00:00:00');

-- 傾印  資料表 secondhandmarket.usertoken 結構
CREATE TABLE IF NOT EXISTS `usertoken` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Account` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '使用者',
  `Token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LastAccessAt` datetime NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `ExpiredAt` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `usertoken_account_foreign` (`Account`),
  CONSTRAINT `usertoken_account_foreign` FOREIGN KEY (`Account`) REFERENCES `users` (`Account`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 正在傾印表格  secondhandmarket.usertoken 的資料：~2 rows (近似值)
REPLACE INTO `usertoken` (`Id`, `Account`, `Token`, `LastAccessAt`, `CreatedAt`, `UpdatedAt`, `ExpiredAt`) VALUES
	(1, 'Account', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50IjoiQWNjb3VudCIsIk5hbWUiOiLnrqHnkIblk6Hlhbzos6PlrrYiLCJSb2xlSWQiOjEsIkNhcnRJZCI6MiwiSW1hZ2UiOiJZWE5rWm1GelpHWS5qcGciLCJpYXQiOjE2NTUyNTkyMjIsImV4cCI6MTY1NTM0NTYyMn0.ZPZrBVFABy1cVRpTq3fPSPt48hopycIXdyfs3qKblZ', '2022-06-15 10:13:42', '2022-06-15 10:13:42', '2022-06-15 10:13:42', '2022-06-16 10:13:42'),
	(2, 'test5', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50IjoidGVzdDUiLCJOYW1lIjoi6LK35a62IiwiUm9sZUlkIjpudWxsLCJDYXJ0SWQiOjMsIkltYWdlIjoiNkxLMzVhNjIud2VicCIsImlhdCI6MTY1NTMwNDE0MSwiZXhwIjoxNjU1MzkwNTQxfQ.vtSztftr7s9B1SaedA4dkr0d4q315v9xiysSjQve7S0', '2022-06-15 23:33:32', '2022-06-15 22:42:21', '2022-06-15 23:33:32', '2022-06-16 22:42:21');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
