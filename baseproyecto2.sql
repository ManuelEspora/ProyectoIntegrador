create schema baseproyecto2;
use baseproyecto2;

CREATE TABLE users (
  id int unsigned NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password_ varchar(500) NOT NULL,
  name varchar(50) NOT NULL,
  avatar varchar(250) DEFAULT NULL,
  birth_date date DEFAULT NULL,
  dni varchar(8) DEFAULT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
); 

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

INSERT INTO users (id, email, password_, name, avatar, birth_date, dni, created_at, updated_at)
VALUES (DEFAULT, 'mati@mail.com', '$2a$10$d6m6Lb3JkOO7.yodHXy1Lul6TlX/9ZP4IueqvBobts0FPTwzJccYe','Home Design' ,'https://www.google.com/
https://i.pinimg.com/474x/0c/7e/fb/0c7efbb0bcc5d3a4845180f1feab5bb2.jpg', '1999-01-01 00:00:00', '40321456', '2020-10-29 05:11:07', '2020-10-29 05:11:07'); 

INSERT INTO users 
VALUES (DEFAULT, 'joey@friends.com', '$2a$10$tIooSzK9dO4R9cGx7EMOyerrKMfPmvX4MYcw5t54GlLIul3wgGpFS', 'Elle Decor', 'https://www.google.com/
https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0012/2566/brand.gif?itok=fDLx17tB', '2003-08-29 00:00:00', '44942112' ,'2020-10-29 15:00:24', '2020-10-29 15:00:24');

INSERT INTO users 
VALUES (DEFAULT, 'chandler@friends.com', '$2a$10$1ZR8bOytWrR7sj1y5/VbNeK6YJYHPQDBecD2cZVsjZ2xVrTNi0gYC', 'Vogel' ,'https://images-platform.99static.com/GgOoFYTBlv4K9GKRkl3Zwaa_AVU=/303x2220:1697x3614/500x500/top/smart/99designs-contests-attachments/93/93516/attachment_93516241', '1995-02-11 00:00:00', '38567233','2020-10-29 16:02:22', '2020-10-29 16:02:22');


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

ALTER TABLE posts
ADD user_id int(11) DEFAULT '1';

INSERT INTO posts (id, users_id, nombre, descripcion, created_at, updated_at, img_url)
VALUES ('1', DEFAULT, 'Img1', 'Casa clásica inglesa','2020-10-27 19:18:42','2020-10-27 19:18:42','https://i.pinimg.com/736x/53/72/43/53724355201e8dfe4e889e70fb65a0da.jpg');

INSERT INTO posts (id, users_id, nombre, descripcion, created_at, updated_at, img_url)
VALUES ('2', DEFAULT, 'Img2', 'Departamento francés','2020-10-27 19:18:42','2020-10-27 19:18:42','https://photos.zillowstatic.com/fp/fefd63bc5a3265e86abbd1114cc805c7-cc_ft_960.jpg');

INSERT INTO posts (id, users_id, nombre, descripcion, created_at, updated_at, img_url)
VALUES ('3', DEFAULT, 'Img3', 'Decoración interiores','2020-10-27 19:18:42','2020-10-27 19:18:42','https://lh5.googleusercontent.com/p/AF1QipPT1R-r1by-RDknQPTdfcLtCC7TAU5YPHc8bbj8=w200-h250-k-no');

INSERT INTO posts (id, users_id, nombre, descripcion, created_at, updated_at, img_url)
VALUES ('4', DEFAULT, 'Img4', 'Art Deco','2020-10-27 19:18:42','2020-10-27 19:18:42','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VMvxn4I3IilcoRb9zDXNA7F67w-FOXGDJ5vu9hUCp8E50UQ9Ys1eTkhRxNgWTS1z9BI&usqp=CAU');

INSERT INTO posts (id, users_id, nombre, descripcion, created_at, updated_at, img_url)
VALUES ('5', DEFAULT, 'Img5', 'Casa en el bosque','2020-10-27 19:18:42','2020-10-27 19:18:42','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhFunHzVEHrtoDGA-1bRWwS8sPEht8MM20B7TSc86--FRV087s9id91cTnCnUGxhIWDI&usqp=CAU');

INSERT INTO posts (id, users_id, nombre, descripcion, created_at, updated_at, img_url)
VALUES ('6', DEFAULT, 'Img6', 'Decoración Indoor','2020-10-27 19:18:42','2020-10-27 19:18:42','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHs4ZM8cPmigRuWRVqWN2ZxiSd7AHzCNV_bg&usqp=CAU');

INSERT INTO posts (id, users_id, nombre, descripcion, created_at, updated_at, img_url)
VALUES ('7', DEFAULT, 'Img7', 'Iphone XR','2020-10-27 19:18:42','2020-10-27 19:18:42','https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone8plus-spacegray?wid=1400&hei=1400&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1564083513793');

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






