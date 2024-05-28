CREATE DATABASE `Blog`;

USE `Blog`;

CREATE TABLE `GlobalTypes` (
  `typeID` int(16) auto_increment,
  `acctType` varchar(15),
  PRIMARY KEY (`typeID`)GlobalTypes
);

CREATE TABLE `Users` (
  `userID` varchar(36),
  `globalType` int(16),
  PRIMARY KEY (`userID`),
  FOREIGN KEY (`globalType`) REFERENCES `GlobalTypes`(`typeID`)
);

CREATE TABLE `GroupTypes` (
  `typeID` int(16) auto_increment,
  `groupType` varchar(15),
  PRIMARY KEY (`typeID`)
);

CREATE TABLE `Groups` (
  `groupID` int(16) auto_increment,
  `groupType` int(16),
  `description` varchar(250),
  `name` varchar(25),
  PRIMARY KEY (`groupID`),
  FOREIGN KEY (`groupType`) REFERENCES `GroupTypes`(`typeID`)
);

CREATE TABLE `MembershipTypes` (
  `typeID` int(16) auto_increment,
  `statusType` varchar(15),
  PRIMARY KEY (`typeID`)
);

CREATE TABLE `User_Group` (
  `userID` varchar(36),
  `groupID` int(16),
  `membershipType` int,
  PRIMARY KEY (`userID`, `groupID`),
  FOREIGN KEY (`userID`) REFERENCES `User`(`userID`),
  FOREIGN KEY (`groupID`) REFERENCES `Group`(`groupID`),
  FOREIGN KEY (`membershipType`) REFERENCES `MembershipTypes`(`typeID`)
);

CREATE TABLE `Posts` (
  `postID` int(16) auto_increment,
  `groupID` int(16),
  `userID` varchar(36),
  `title` varchar(25),
  `content` varchar(120),
  PRIMARY KEY (`postID`),
  FOREIGN KEY (`groupID`) REFERENCES `Group`(`groupID`),
  FOREIGN KEY (`userID`) REFERENCES `User`(`userID`)
);

INSERT INTO `GlobalTypes` (acctType) VALUES ('ADMIN'), ('MODERATOR'), ('USER');
SELECT * FROM `GlobalTypes`;

INSERT INTO `GroupTypes` (groupType) VALUES ('PUBLIC'), ('PRIVATE');
SELECT * FROM `GroupTypes`;

INSERT INTO `MembershipTypes` (statusType) VALUES ('ADMIN'), ('MODERATOR'), ('MEMBER'), ('PENDING'), ('REJECTED');
SELECT * FROM `MembershipTypes`;

INSERT INTO `Groups` (`groupType`, `description`, `name`) VALUES (1, 'This is a test group that is public!', 'Test Public Group'), (2, 'This is a test group that is private!', 'Test Private Group'); 
SELECT `Groups`.groupID, `Groups`.`description`, `Groups`.name, `Groups`.groupType AS groupTypeID, GroupTypes.groupType
	FROM `Groups`
	INNER JOIN `GroupTypes` ON `Groups`.groupType=GroupTypes.typeID;



