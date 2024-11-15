DROP TABLE IF EXISTS restaurant_order_items;
DROP TABLE IF EXISTS feedback;
DROP TABLE IF EXISTS reservation;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS customer_loyalty;
DROP TABLE IF EXISTS restaurant_order;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS restaurant;

CREATE TABLE menu(
item_id SERIAL PRIMARY KEY,
item_name VARCHAR(30),
description TEXT,
price FLOAT,
category VARCHAR(10)
);

CREATE TABLE customer(
customer_id SERIAL PRIMARY KEY,
first_name VARCHAR(20),
last_name VARCHAR(20),
email VARCHAR(40),
phone VARCHAR(15)
);

CREATE TABLE restaurant (
store_id SERIAL PRIMARY KEY,
location VARCHAR(20),
open_date DATE,
sales FLOAT,
total_customers FLOAT,
owner VARCHAR(20),
manager VARCHAR(20)
);

CREATE TABLE inventory (
item_id SERIAL PRIMARY KEY,
item_name VARCHAR(20),
item_amount INT,
store_id INT,
last_restocked DATE,
FOREIGN KEY (store_id) REFERENCES restaurant(store_id)
);

CREATE TABLE employee (
employee_id SERIAL PRIMARY KEY,
ssn INT NOT NULL,
position VARCHAR(10),
first_name VARCHAR(15),
last_name VARCHAR(15),
email VARCHAR(255) NOT NULL,
birth_date DATE,
department VARCHAR(15),
hire_date DATE,
store_id INT,
FOREIGN KEY (store_id) REFERENCES restaurant(store_id)
);

CREATE TABLE restaurant_order(
order_id SERIAL PRIMARY KEY,
customer_id INT,
item_id INT,
time_ordered TIME,
server_id INT,
total_cost FLOAT,
location VARCHAR(20),
FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
FOREIGN KEY (item_id) REFERENCES inventory(item_id),
FOREIGN KEY (server_id) REFERENCES employee(employee_id)
);

CREATE TABLE restaurant_order_items (
id SERIAL PRIMARY KEY,
order_id INTEGER,
item_id INTEGER NOT NULL,
item_name VARCHAR(255),
quantity INTEGER,
price DECIMAL(10, 2),
total DECIMAL(10, 2),
FOREIGN KEY (order_id) REFERENCES restaurant_order(order_id),
FOREIGN KEY (item_id) REFERENCES menu(item_id)
);

CREATE TABLE feedback (
feedback_id SERIAL PRIMARY KEY,
customer_id INT,
store_id INT,
employee_id INT,
menu_item_id INT,
feedback_date DATE,
rating INT,
comments TEXT,
FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
FOREIGN KEY (store_id) REFERENCES restaurant(store_id),
FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
FOREIGN KEY (menu_item_id) REFERENCES menu(item_id)
);

CREATE TABLE reservation (
customer_id SERIAL PRIMARY KEY,
store_id INT,
reservation_time TIME,
reservation_date DATE,
guests INT,
FOREIGN KEY (store_id) REFERENCES restaurant(store_id)
);

CREATE TABLE customer_loyalty(
customer_id SERIAL PRIMARY KEY,
reward_tier INT,
money_spent FLOAT,
join_date DATE,
points INT
);

INSERT INTO menu (item_name, description, price, category) VALUES
('Margherita Pizza', 'Classic pizza with fresh basil and mozzarella', 9.99, 'Food'),
('Caesar Salad', 'Crispy romaine with creamy Caesar dressing', 6.99, 'Food'),
('Espresso', 'Rich and aromatic single shot of espresso', 2.99, 'Drink'),
('Cheesecake', 'Creamy cheesecake with a graham cracker crust', 4.99, 'Dessert'),
('Lemonade', 'Freshly squeezed lemonade', 3.50, 'Drink'
);
