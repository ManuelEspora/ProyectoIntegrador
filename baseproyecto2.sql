create schema baseproyecto2;
use baseproyecto2;

CREATE TABLE users (
  id int unsigned NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password_ varchar(500) NOT NULL,name varchar(50) NOT NULL,
  avatar varchar(250) DEFAULT NULL,
  birth_date date DEFAULT NULL,
  dni varchar(8) DEFAULT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
); 

UPDATE users 
SET email = 'marti@mail.com', password_ = '$2a$10$d6m6Lb3JkOO7.yodHXy1Lul6TlX/9ZP4IueqvBobts0FPTwzJccYe', avatar = 'https://p.kindpng.com/picc/s/436-4360731_transparent-elle-logo-png-elle-decoration-png-download.png', birth_date = '25/11/1986', dni = '44567980', created_at = '2020-10-27 19:18:42', updated_at = '2020-12-09 21:33:35'
WHERE id = 1;

UPDATE users 
SET email = 'joey@friends.com', password_ = '$2a$10$ltepFSOVEjIzV/HsZKR9QOI5WmMG15IQzTJeV4pptgscaq19b0CIm', avatar = 'https://images-platform.99static.com/GgOoFYTBlv4K9GKRkl3Zwaa_AVU=/303x2220:1697x3614/500x500/top/smart/99designs-contests-attachments/93/93516/attachment_93516241', birth_date = '05/08/1990', dni = '35678310', created_at = '2021-12-27 19:18:42', updated_at = '2018-12-10 21:33:35'
WHERE id = 2;

ALTER TABLE users
DROP createdAt;

ALTER TABLE users
DROP updatedAt;

ALTER TABLE users
ADD createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users
DROP createdAt;

ALTER TABLE users
ADD created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE users
ADD updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;


1, 'mati', 'mati@mail.com', '2020-10-29 05:11:07', '2020-10-29 05:11:07', '$2a$10$d6m6Lb3JkOO7.yodHXy1Lul6TlX/9ZP4IueqvBobts0FPTwzJccYe'),
(2, 'joey', 'joey@friends.com', '2020-10-29 14:58:31', '2020-10-29 14:58:31', '$2a$10$ltepFSOVEjIzV/HsZKR9QOI5WmMG15IQzTJeV4pptgscaq19b0CIm'),
(3, 'chandler', 'chandler@friends.com', '2020-10-29 14:59:01', '2020-10-29 14:59:01', '$2a$10$tIooSzK9dO4R9cGx7EMOyerrKMfPmvX4MYcw5t54GlLIul3wgGpFS'),
(4, 'monica', 'monica@friends.com', '2020-10-29 14:59:31', '2020-10-29 14:59:31', '$2a$10$K7C8sY1F22vVUkaQZyhek..vvUcPo.2yyCCksG6dilkXGo9TbpwOi'),
(5, 'rachel', 'rachel@friends.com', '2020-10-29 14:59:50', '2020-10-29 14:59:50', '$2a$10$toNl3UWvMhoQgNJb78igqeXr7DuzNzgh0JGypWPS5KkH3W.rDKl..'),
(6, 'ross', 'ross@friends.com', '2020-10-29 15:00:08', '2020-10-29 15:00:08', '$2a$10$nv31IQoQQYJkN6DiMuYFQ.lsEjC6YM9CMGuKfmAPkwJOQ8bo9Mii.'),
(7, 'pheobe', 'pheobe@friends.com', '2020-10-29 15:00:24', '2020-10-29 15:00:24', '$2a$10$gZjKBGTW/Uk.4hbxXM7wRO2hCnL2c7Og5ximGIDin/Z6l8lpVxQzG'),
(8, 'butcher', 'butcher@theBoys.com', '2020-10-29 15:05:50', '2020-10-29 15:05:50', '$2a$10$tGGI4Ff5/UZheit1gws/Su6tAMWv4lkBI.uz2Mh7s0jfYjSNYm3jy'),
(9, 'frenchie', 'frenchie@theBoys.comm', '2020-10-29 15:06:04', '2020-10-29 15:06:04', '$2a$10$1ZR8bOytWrR7sj1y5/VbNeK6YJYHPQDBecD2cZVsjZ2xVrTNi0gYC'),
(10, 'ale', 'ale@mail.com', '2020-10-29 16:02:22', '2020-10-29 16:02:22', '$2a$10$YPw5jhZFiMNvWP0bBQPo9OS2kapCOheAfg8ZGwaSx19.b9wbHQxkO');


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

ALTER TABLE posts
DROP created_at;
ALTER TABLE posts
DROP updatedAt;

ALTER TABLE posts
ADD created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE posts
ADD updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;



CREATE TABLE comments (
  id int unsigned NOT NULL AUTO_INCREMENT,
  text varchar(500) DEFAULT NULL,
  posts_id int unsigned DEFAULT NULL,
  users_id int unsigned DEFAULT NULL,
  PRIMARY KEY (id),
  KEY users_id (users_id),
  KEY posts_id (posts_id),
  createdAt date DEFAULT NULL,
  updatedAt date DEFAULT NULL
);


ALTER TABLE posts
ADD img_url text (500);


DROP TABLE IF EXISTS comments;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS users;

ALTER TABLE comments
DROP createdAT;

ALTER TABLE comments
DROP updatedAt;

ALTER TABLE comments
ADD created_at date DEFAULT NULL;

ALTER TABLE comments
ADD updated_at date DEFAULT NULL;






