### Schema

CREATE DATABASE choresApp_db;
USE choresApp_db;

CREATE TABLE chores
(
	id int NOT NULL AUTO_INCREMENT,
	chore varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	points int 10,
	PRIMARY KEY (id)
);

