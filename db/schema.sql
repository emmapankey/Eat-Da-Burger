-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS todolist;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN DEFAULT false,
created_at TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);