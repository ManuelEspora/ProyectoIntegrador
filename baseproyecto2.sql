create schema baseproyecto2;
use baseproyecto2;

CREATE TABLE users (
  id int unsigned NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password_ varchar(500) NOT NULL,name varchar(50) NOT NULL,
  avatar varchar(250) DEFAULT NULL,
  birth_date date DEFAULT NULL,
  dni varchar(8) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
); 

CREATE TABLE posts (
  id int(11) NOT NULL,
  users_id int(11) DEFAULT '1',
  nombre varchar(85) NOT NULL,
  descripcion varchar(85) NOT NULL,
  PRIMARY KEY (id),
  KEY users_id (users_id),
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); 

CREATE TABLE comments (
  id int unsigned NOT NULL AUTO_INCREMENT,
  text varchar(500) DEFAULT NULL,
  posts_id int unsigned DEFAULT NULL,
  users_id int unsigned DEFAULT NULL,
  PRIMARY KEY (id),
  KEY users_id (users_id),
  KEY posts_id (posts_id),
  created_at date DEFAULT NULL,
  updated_at date DEFAULT NULL
);






