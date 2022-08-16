create table client(
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
nit VARCHAR(30) NOT NULL,
name_location VARCHAR(30) NOT NULL,
name_team VARCHAR(50),
city VARCHAR(20),
promoter VARCHAR(20),
rtc VARCHAR(20),
cap_user VARCHAR(20),
ip VARCHAR(13)
)