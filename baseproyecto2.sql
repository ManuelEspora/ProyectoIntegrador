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

ALTER TABLE posts
ADD user_id int(11) DEFAULT '1';



UPDATE posts
SET id=1, users_id= 2, nombre='Img1', descripcion= 'Casa clásica inglesa', created_at='2020-10-27 19:18:42', updated_at='2020-12-09 21:33:35', img_url = 'https://i.pinimg.com/736x/53/72/43/53724355201e8dfe4e889e70fb65a0da.jpg'
WHERE id = 1;

UPDATE posts
SET id=2, users_id= 1, nombre='Img2', descripcion= 'Departamento francés', created_at='2020-08-21 19:12:42', updated_at='2020-09-21 19:12:42', img_url = 'https://photos.zillowstatic.com/fp/fefd63bc5a3265e86abbd1114cc805c7-cc_ft_960.jpg'
WHERE id = 2;

INSERT INTO posts (id, users_id, nombre, descripcion, created_at, updated_at, img_url)
VALUES ('1', DEFAULT, 'Img1', 'Casa clásica inglesa','2020-10-27 19:18:42','2020-10-27 19:18:42','https://i.pinimg.com/736x/53/72/43/53724355201e8dfe4e889e70fb65a0da.jpg');

(1, 'iPhone 8', 'Apple', 600, 8, 1, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone8plus-spacegray?wid=1400&hei=1400&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1564083513793', '2020-10-27 19:18:42', '2020-12-09 21:33:35'),
(2, 'iPhone X', 'Apple', 650, 1, 1, 'https://assets.swappie.com/iPhone-X-64GB-Silver-1-1-1-1.png', '2020-10-27 19:18:42', '2020-11-05 12:09:38'),
(3, 'iPhone XR', 'Apple', 700, 1, 1, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-xr-black-gallery-2020?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1578943274486', '2020-10-27 19:18:42', '2020-11-05 12:09:41'),
(4, 'iPhone XS', 'Apple', 850, 1, 1, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-xs-spacegray?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1579299537066', '2020-10-27 19:18:42', '2020-11-05 12:09:44'),
(5, 'iPhone 11', 'Apple', 1000, 2, 1, 'https://falabella.scene7.com/is/image/FalabellaAR/5157516_1?wid=1500&hei=1500&qlt=70', '2020-10-27 19:18:42', '2020-11-05 12:09:50'),
(6, 'iPhone 11 Pro', 'Apple', 1200, 1, 1, 'https://zetaelectronica.com.ar/wp-content/uploads/2019/10/iphone-11-pro-max-512gb-lte-4g-black-6gb-ram_10036877_3_1568288128.jpg', '2020-10-27 19:18:42', '2020-11-05 14:38:00'),
(7, 'iPhone SE', 'Apple', 700, 4, 1, 'https://zetaelectronica.com.ar/wp-content/uploads/2020/04/iphone-se-2020-dual-sim-esim-64gb-lte-4g-negru-3gb-ram_10066840_2_1587136117.jpg', '2020-10-27 19:18:42', '2020-11-05 12:09:34'),
(8, 'Galaxy Note 20', 'Samsung', 0, 1, 1, 'https://s.fenicio.app/f/haviuy/productos/87-1_1920-1200_1600292355_4bd.jpg', '2020-10-27 19:18:42', '2020-11-05 12:09:27'),
(9, 'Galaxy S20', 'Samsung', 900, 1, 1, 'https://equiposlibres.pe/wp-content/uploads/2020/03/samsung-galaxy-s20-gris-1.jpg', '2020-10-27 19:18:42', '2020-11-05 12:09:22'),
(10, 'Galaxy Z Fold 2', 'Samsung', 2000, 2, 1, 'https://elcomercio.pe/resizer/WutD6-W3TgR3AEK1R14r9hUobOQ=/1200x1200/smart/filters:format(jpeg):quality(75)');


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






