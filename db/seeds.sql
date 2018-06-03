/*initialize tables products and departments with some initial data*/

USE brew_db;
INSERT INTO userType (uscreename, upassword, toperator)
VALUES ("kamaral", "pword",false);
INSERT INTO userType (uscreename, upassword, toperator)
VALUES ("chantis", "pword1",false);
INSERT INTO userType (uscreename, upassword, toperator)
VALUES ("tisid", "pword2",false);
INSERT INTO userType (uscreename, upassword, toperator)
VALUES ("aflak", "pword3",true);

USE brew_db;
INSERT INTO userInfo (ufirstname, ulastname, uaddresstype, uaddress1, uaddress2, ucity, ustate, uzipcode, uphonenum1, umobilenum1, uemail, uscreename)
VALUES ("kean", "amaral", "home", "45 smith drive", "", "cedar grove", "nj", "07009", "2012304567", "9174889722", "keanam@email.com", "kamaral");
INSERT INTO userInfo (ufirstname, ulastname, uaddresstype, uaddress1, uaddress2, ucity, ustate, uzipcode, uphonenum1, umobilenum1, uemail, uscreename)
VALUES ("andrew", "flak", "home", "24 jersey ave", "", "edison", "nj", "08820", "2015554567", "6464789662", "aflak@gmail.com", "aflak");
INSERT INTO userInfo (ufirstname, ulastname, uaddresstype, uaddress1, uaddress2, ucity, ustate, uzipcode, uphonenum1, umobilenum1, uemail, uscreename)
VALUES ("tony", "isidris", "work", "45 wall street", "", "new york", "ny", "10005", "2013404567", "9174549722", "tisid@gmail.com", "tisid");

USE brew_db;
INSERT INTO userCC (ucctype, uccaddtype, uccnum, uccexp, ucccvv, uscreename, ubilladdress1, ubilladdress2, ubillcity, ubillstate, ubillzipcode)
VALUES ("visa", "home", "12345533667744557777", "1220", "452", "kamaral", "492 Vector Ct", "", "San Ramon", "CA", "94578");
INSERT INTO userCC (ucctype, uccaddtype, uccnum, uccexp, ucccvv, uscreename, ubilladdress1, ubilladdress2, ubillcity, ubillstate, ubillzipcode)
VALUES ("amex", "work", "8875533447744557777", "1119", "135", "tisid", "45 wall street", "", "new york", "ny", "10005");

USE brew_db;
INSERT INTO tourInfo (tname, tdate, tstart, tend, tphoto, tdesc, taddress1, taddress2, tcity, tstate, tzipcode, tsocmedtype, 
tpickuploc, tpickuptime, tprice, tdiscprice, tquantity)
VALUES ("morrisBeer", "2018-06-23", "140000", "160000", "https://www.icelandbuddy.com/wp-content/uploads/2018/01/bryggjan-beer-038-brewery-tour-6.jpg", 
"Enjoy the undiscovered breweries of Morristown, NJ", "18 Washington St", "", "Morristown", "NJ", "07960", "facebook, twitter, instagram", 
"105 Eisenhower Pkwy, Roseland, NJ 07068", "130000", 89.99, 59.99, 24);
INSERT INTO tourInfo (tname, tdate, tstart, tend, tphoto, tdesc, taddress1, taddress2, tcity, tstate, tzipcode, tsocmedtype, 
tpickuploc, tpickuptime, tprice, tdiscprice, tquantity)
VALUES ("The Chatham Experience", "2018-07-15", "140000", "160000", "http://visualnews-wp-media-prod.s3.amazonaws.com/wp-content/uploads/2015/10/06150000/beer-tour.jpg", 
"Enjoy the undiscovered Twin Elephant and Brave Dog micro-breweries", "13 Watchung Ave", "", "Chatham", "NJ", "07928", "facebook", 
"Chatham Train Station: 42 Fairmount Ave", "130000", 99.99, 69.99, 28);

USE brew_db;
INSERT INTO orderInfo (ufullname, tname, tdate, tstart, tend)
VALUES ("Shawn Seale", "morrisBeer", "2018-06-23", "140000", "160000");
INSERT INTO orderInfo (ufullname, tname, tdate, tstart, tend)
VALUES ("Joe Schmoe", "morrisBeer", "2018-06-23", "140000", "160000");
INSERT INTO orderInfo (ufullname, tname, tdate, tstart, tend)
VALUES ("Shawn Seale", "The Chatham Experience", "2018-07-15", "140000", "160000");
INSERT INTO orderInfo (ufullname, tname, tdate, tstart, tend)
VALUES ("Karl Johnson", "The Chatham Experience", "2018-07-15", "140000", "160000");