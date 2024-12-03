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
DROP TABLE IF EXISTS preorder;

CREATE TABLE menu(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30),
    description TEXT,
    price FLOAT,
    category VARCHAR(15)
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

CREATE TABLE preorder( 
obj_id SERIAL PRIMARY KEY, 
name VARCHAR(255), 
quantity INT );

INSERT INTO restaurant(
        store_id,
        location,
        open_date,
        sales,
        total_customers,
        owner,
        manager
    )
VALUES (
        1,
        'Houston',
        '2024-11-25',
        0,
        0,
        'Cameron',
        'Isaac'
    ),
    (
        2,
        'Tomball',
        '2024-11-25',
        0,
        0,
        'Isaac',
        'Cameron'
    );
INSERT INTO menu (item_name, description, price, category)
VALUES (
        'Pizza',
        'Classic pizza with mozzarella',
        9.99,
        'Main Course'
    ),
    (
        'Caesar Salad',
        'Crispy romaine with creamy Caesar dressing',
        6.99,
        'Appetizer'
    ),
    (
        'Lasagna',
        'Rich and cheesy lasagna made with in house sauce',
        12.99,
        'Main Course'
    ),
    (
        'Cheesecake',
        'Creamy cheesecake with a graham cracker crust',
        4.99,
        'Dessert'
    ),
    (
        'Gelato',
        'Soft and sweet vanilla gelato',
        3.99,
        'Dessert'
    ),
    (
        'Breadsticks',
        'Fresh and hot breadsticks with butter',
        3.50,
        'Appetizer'
    );
INSERT INTO inventory (item_name, item_amount, store_id, last_restocked)
VALUES ('Cheese', 99, 1, '2024-11-25'),
    ('Sauce', 99, 1, '2024-11-25'),
    ('Dough', 99, 1, '2024-11-25'),
    ('Tomato', 99, 1, '2024-11-25'),
    ('Pasta', 99, 1, '2024-11-25'),
    ('Tomato', 99, 1, '2024-11-25'),
    ('Lettuce', 99, 1, '2024-11-25'),
    ('Dressing', 99, 1, '2024-11-25'),
    ('Tomato', 99, 1, '2024-11-25'),
    ('Cheesecake', 99, 1, '2024-11-25'),
    ('Gelato', 99, 1, '2024-11-25'),
    ('Bread', 99, 1, '2024-11-25'),
    ('Butter', 99, 1, '2024-11-25'),
    ('Beef', 99, 1, '2024-11-25'),
    ('Chicken', 99, 1, '2024-11-25'),
    ('Prosciutto', 99, 1, '2024-11-25'),
    ('Cannoli', 99, 1, '2024-11-25'),
    ('Macaron', 99, 1, '2024-11-25');
INSERT INTO employee (
        ssn,
        position,
        first_name,
        last_name,
        email,
        birth_date,
        hire_date,
        store_id
    )
VALUES (
        '123456789',
        'Owner',
        'Isaac',
        'Kapeel',
        'isaack@example.com',
        '1990-05-15',
        '2022-06-01',
        1
    ),
    (
        '987654321',
        'Manager',
        'Cameron',
        'Emrie',
        'camerone@example.com',
        '1985-09-22',
        '2020-04-15',
        2
    );
SELECT *
FROM menu;
SELECT *
FROM inventory;

