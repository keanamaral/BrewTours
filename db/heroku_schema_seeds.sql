use dv1tmdzws428gixg;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(127) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT now(),
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ("HamBurger");
INSERT INTO burgers (burger_name) VALUES ("Chicken Burger");
INSERT INTO burgers (burger_name) VALUES ("Turkey Burger");
INSERT INTO burgers (burger_name) VALUES ("Double Cheese Burger");