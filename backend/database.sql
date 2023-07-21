CREATE TABLE IF NOT EXISTS `task` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
);

INSERT INTO user(email, password) VALUES ("todolist@gmail.com", 'password');