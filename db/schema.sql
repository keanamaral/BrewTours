-- Project 2: Tour-Booking-Software "Brew" Database

DROP DATABASE IF EXISTS brew_db;
CREATE DATABASE brew_db;
USE brew_db;
CREATE TABLE userType(
    utypeid int NOT NULL AUTO_INCREMENT,
    uscreename VARCHAR(255) NOT NULL,
    upassword VARCHAR(255) NOT NULL,
    toperator BOOLEAN DEFAULT false,
  	loginTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (utypeid)
);
USE brew_db;
CREATE TABLE userInfo(
    uinfoid int NOT NULL AUTO_INCREMENT,
	ufirstname VARCHAR(255) NOT NULL,
	ulastname VARCHAR(255) NOT NULL,
	uaddresstype SET("HOME", "WORK", "OTHER") DEFAULT "HOME",
    uaddress1 VARCHAR(255) NOT NULL,
    uaddress2 VARCHAR(255),
    ucity VARCHAR(255) NOT NULL,
    ustate VARCHAR(2) NOT NULL,
    uzipcode VARCHAR(5) NOT NULL,
    uphonenum1 VARCHAR(10) NOT NULL,
    umobilenum1 VARCHAR(10) NOT NULL,
    uemail VARCHAR(255) NOT NULL,
    uscreename VARCHAR(255) NOT NULL,
  	uinfodate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (uinfoid)
);
USE brew_db;
CREATE TABLE userCC
(
    uccid int NOT NULL AUTO_INCREMENT,
	ucctype SET("Mastercard", "Visa", "Amex") DEFAULT "Visa",
	uccaddtype SET("HOME", "WORK", "OTHER") DEFAULT "HOME",
    uccnum VARCHAR(255) NOT NULL,
    uccexp VARCHAR(4) NOT NULL,
    ucccvv VARCHAR(4) NOT NULL,
    uscreename VARCHAR(255) NOT NULL,
    ubilladdress1 VARCHAR(255) NOT NULL,
    ubilladdress2 VARCHAR(255),
    ubillcity VARCHAR(255) NOT NULL,
    ubillstate VARCHAR(2) NOT NULL,
    ubillzipcode VARCHAR(5) NOT NULL,
  	uccinfodate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (uccid)
);
USE brew_db;
CREATE TABLE tourInfo
(
    tourid int NOT NULL AUTO_INCREMENT,
    tname VARCHAR(255) NOT NULL,
	tdate DATE,
	tstart TIME,
	tend TIME,
    tphoto VARCHAR(255) NOT NULL,
    tdesc VARCHAR(255) NOT NULL,
    taddress1 VARCHAR(255) NOT NULL,
    taddress2 VARCHAR(255),
    tcity VARCHAR(255) NOT NULL,
    tstate VARCHAR(2) NOT NULL,
    tzipcode VARCHAR(5) NOT NULL,
    tsocmedtype VARCHAR(255) NOT NULL,
    tpickuploc VARCHAR(255) NOT NULL,
    tpickuptime TIME NOT NULL,
    tprice FLOAT DEFAULT 0,
    tdiscprice FLOAT DEFAULT 0,
    tquantity INT DEFAULT 0,
    PRIMARY KEY (tourid)
);
USE brew_db;
CREATE TABLE orderInfo
(
    orderid int NOT NULL AUTO_INCREMENT,
	ufullname VARCHAR(255) NOT NULL,
    tname VARCHAR(255) NOT NULL,
	tdate DATE,
	tstart TIME,
	tend TIME,
    PRIMARY KEY (orderid)
);