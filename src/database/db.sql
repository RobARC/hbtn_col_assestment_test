CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

-- create tables

-- users table
CREATE TABLE IF NOT EXISTS users (userid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
username VARCHAR(255),
name VARCHAR(255),
lastname VARCHAR(255),
govid VARCHAR(255) NOT NULL, 
email VARCHAR(255) NOT NULL,
company VARCHAR(255),
password VARCHAR(255) NOT NULL
);

-- shipping table

CREATE TABLE IF NOT EXISTS shipping (shippingid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
address VARCHAR(255),
city VARCHAR(255),
state VARCHAR(255), 
country VARCHAR(255),
cost INT);

-- payment table

CREATE TABLE IF NOT EXISTS payment (paymentid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
type VARCHAR(255),
payment_date DATE,
txnid INT, 
total INT,
status BOOLEAN);

-- orders table

CREATE TABLE IF NOT EXISTS orders (orderid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
order_date DATE,
total INT, 
subtotal INT,
taxes INT,
paid VARCHAR(50),
userid INT,
shippingid INT,
paymentid INT,
FOREIGN KEY (userid) REFERENCES users(userid),
FOREIGN KEY (shippingid) REFERENCES shipping(shippingid),
FOREIGN KEY (paymentid) REFERENCES payment(paymentid)
);

