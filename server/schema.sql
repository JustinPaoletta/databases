DROP DATABASE if exists chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  MessageID INT NOT NULL AUTO_INCREMENT,
  Message_text VARCHAR(255),
  Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  Rooms VARCHAR(255),
  UserID INT NOT NULL,
  PRIMARY KEY (MessageID)
);

CREATE TABLE users (
  ID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  PRIMARY KEY(ID)
);

-- ALTER TABLE messages ADD FOREIGN KEY(UserID) REFERENCES users(ID);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

