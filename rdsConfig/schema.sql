CREATE TABLE `GlobalTypes` (
  `typeID` int(16) auto_increment,
  `acctType` varchar(15),
  PRIMARY KEY (`typeID`)
);

CREATE TABLE `User` (
  `userID` varchar(36),
  `globalType` int(16),
  PRIMARY KEY (`userID`),
  FOREIGN KEY (`globalType`) REFERENCES `globalTypes`(`typeID`)
);

CREATE TABLE `GroupTypes` (
  `typeID` int(16) auto_increment,
  `groupType` varchar(15),
  PRIMARY KEY (`typeID`)
);

CREATE TABLE `Group` (
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
  FOREIGN KEY (`membershipType`) REFERENCES `MembershipTypes`(`statusType`)
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

