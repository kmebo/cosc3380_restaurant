CREATE TABLE resturant (
    store_id SERIAL PRIMARY KEY,
    location VARCHAR(20),
    open_date DATE,
    sales FLOAT,
    total_customers FLOAT,
    owner VARCHAR(20),
    manager VARCHAR(20)
);
INSERT INTO resturant (
        location,
        open_date,
        sales,
        total_customers,
        owner,
        manager
    )
VALUES (
        'Houston',
        '2020-01-15',
        100000.00,
        5000,
        'Owner1',
        'Manager1'
    ),
    (
        'Austin',
        '2021-06-10',
        75000.00,
        3000,
        'Owner2',
        'Manager2'
    ),
    (
        'Dallas',
        '2022-03-05',
        90000.00,
        4000,
        'Owner3',
        'Manager3'
    );
SELECT *
FROM resturant;
CREATE TABLE inventory (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(20),
    item_amount INT,
    location VARCHAR(20),
    last_restocked DATE
);
INSERT INTO inventory (item_name, item_amount, location, last_restocked)
VALUES ('Apple', 100, 'Houston', '2024-10-15'),
    ('Banana', 150, 'Austin', '2024-11-01'),
    ('Orange', 80, 'Dallas', '2024-10-20'),
    ('Lemon', 60, 'Houston', '2024-10-25'),
    ('Grapes', 50, 'Austin', '2024-11-03'),
    ('Peach', 70, 'Dallas', '2024-10-30'),
    ('Cherry', 120, 'Houston', '2024-11-05'),
    ('Mango', 90, 'Austin', '2024-10-29'),
    ('Pineapple', 30, 'Dallas', '2024-10-22'),
    ('Watermelon', 20, 'Houston', '2024-11-07');
SELECT *
FROM inventory;
CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    email VARCHAR(255),
    phone VARCHAR(15)
);
INSERT INTO customer (first_name, last_name, email, phone)
VALUES (
        'Isaac',
        'Kapeel',
        'IsaacKapeel@gmail.com',
        '1234567890'
    ),
    (
        'Cameron',
        'Emrie',
        'CameronEmrie@gmail.com',
        '0987654321'
    ),
    (
        'Kevin',
        'Bonilla',
        'KevinBonilla@gmail.com',
        '3126540987'
    ),
    (
        'Ethan',
        'Huynh',
        'EthanHuynh@gmail.com',
        '2135468790'
    ),
    (
        'Carlos',
        'Ordonez',
        'CarlosOrdonez@gmail.com',
        '4561237890'
    );
SELECT *
FROM customer;
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    item_id INT,
    time_ordered TIME,
    server_id INT,
    total_cost FLOAT,
    location VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (item_id) REFERENCES inventory(item_id)
);
INSERT INTO orders (
        customer_id,
        item_id,
        time_ordered,
        server_id,
        total_cost,
        location
    )
VALUES (1, 1, '14:30:00', 3, 45.99, 'Houston'),
    (2, 2, '15:00:00', 4, 32.50, 'Austin'),
    (3, 3, '15:30:00', 2, 58.75, 'Dallas'),
    (4, 4, '16:00:00', 1, 22.99, 'Houston'),
    (5, 5, '16:15:00', 5, 40.00, 'Austin');
SELECT *
FROM orders;
CREATE TABLE employee(
    employee_id SERIAL PRIMARY KEY,
    ssn INT NOT NULL,
    position VARCHAR(10),
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    email VARCHAR(255) NOT NULL,
    birth_date DATE,
    department VARCHAR(15),
    hire_date DATE
);
INSERT INTO employee (
        ssn,
        position,
        first_name,
        last_name,
        email,
        birth_date,
        department,
        hire_date
    )
VALUES (
        123456789,
        'Manager',
        'Alice',
        'Taylor',
        'alice.taylor@email.com',
        '1980-04-22',
        'Management',
        '2015-05-12'
    ),
    (
        987654321,
        'Chef',
        'Bob',
        'Miller',
        'bob.miller@email.com',
        '1985-07-15',
        'Kitchen',
        '2017-09-01'
    ),
    (
        112233445,
        'Waiter',
        'Charlie',
        'Brown',
        'charlie.brown@email.com',
        '1992-01-10',
        'Front Desk',
        '2020-02-25'
    ),
    (
        223344556,
        'Waitress',
        'Diana',
        'White',
        'diana.white@email.com',
        '1993-03-20',
        'Front Desk',
        '2021-03-18'
    ),
    (
        334455667,
        'Sous Chef',
        'Edward',
        'Harris',
        'edward.harris@email.com',
        '1988-11-11',
        'Kitchen',
        '2019-06-30'
    ),
    (
        445566778,
        'Server',
        'Fiona',
        'Clark',
        'fiona.clark@email.com',
        '1995-05-05',
        'Front Desk',
        '2021-07-09'
    ),
    (
        556677889,
        'Dishwasher',
        'George',
        'Walker',
        'george.walker@email.com',
        '2000-02-28',
        'Kitchen',
        '2022-01-15'
    ),
    (
        667788990,
        'Host',
        'Hannah',
        'Lewis',
        'hannah.lewis@email.com',
        '1998-08-14',
        'Front Desk',
        '2021-10-22'
    );
SELECT *
FROM employee;
CREATE TABLE menu(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30),
    description TEXT,
    price FLOAT,
    category VARCHAR(10)
);
INSERT INTO menu(
        item_name,
        description,
        price,
        category
    )
VALUES (
        'Brisket Platter',
        'Slow-smoked beef brisket with BBQ sauce and pickles',
        18.99,
        'Dinner'
    ),
    (
        'BBQ Ribs',
        'Half rack of fall-off-the-bone pork ribs with a smoky glaze',
        22.50,
        'Dinner'
    ),
    (
        'Pulled Pork Plate',
        'Tender pulled pork served with coleslaw and cornbread',
        17.25,
        'Dinner'
    ),
    (
        'BBQ Chicken Sandwich',
        'Grilled chicken breast with BBQ sauce, lettuce, and tomato on a brioche bun',
        10.99,
        'Lunch'
    ),
    (
        'Pulled Pork Sandwich',
        'Pulled pork with coleslaw and tangy BBQ sauce on a bun',
        11.25,
        'Lunch'
    ),
    (
        'BBQ Bacon Burger',
        'Beef patty topped with BBQ sauce, bacon, and cheddar cheese',
        12.50,
        'Lunch'
    ),
    (
        'Peach Cobbler',
        'Warm peach cobbler with a scoop of vanilla ice cream',
        5.99,
        'Dessert'
    ),
    (
        'Pecan Pie',
        'Classic Southern-style pecan pie slice with whipped cream',
        4.50,
        'Dessert'
    ),
    (
        'Chocolate Chip Cookies',
        'Freshly baked chocolate chip cookies, served warm',
        4.00,
        'Dessert'
    ),
    (
        'Sweet Tea',
        'Classic Southern sweet tea with a hint of lemon',
        2.50,
        'Drink'
    ),
    (
        'Lemonade',
        'Refreshing homemade lemonade',
        2.75,
        'Drink'
    ),
    (
        'Fountain Drink',
        'Assorted sodas and soft drinks',
        2.00,
        'Drink'
    ),
    (
        'French Fries',
        'Crispy, golden French fries lightly seasoned',
        3.25,
        'Sides'
    ),
    (
        'Coleslaw',
        'Creamy coleslaw with a tangy flavor',
        2.50,
        'Sides'
    ),
    (
        'Baked Beans',
        'Slow-cooked baked beans with a hint of BBQ sauce',
        3.00,
        'Sides'
    );
SELECT *
FROM menu;