CREATE TABLE T1(
    item_id int,
    name varchar(255),
    price float
);
INSERT INTO T1 VALUES
    (1, 'Apple', 1.00),
    (2, 'Banana', 1.50),
    (3, 'Orange', 2.00),
    (4, 'Lemon', 2.50),
    (5, 'Grapes', 3.00),
    (6, 'Peach', 3.50),
    (7, 'Cherry', 4.00),
    (8, 'Mango', 4.50),
    (9, 'Pineapple', 5.00),
    (10, 'Watermelon', 5.50);
ALTER TABLE T1
ADD CONSTRAINT pk_id PRIMARY KEY (item_id);
SELECT *
FROM T1;


CREATE TABLE employee(
    employee_id INT,
    ssn INT,
    position VARCHAR(10),
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    email VARCHAR(255) NOT NULL UNIQUE,
    birth_date DATE,
    department VARCHAR(15),
    hire_date DATE
);
/* 
Where:
employee_id INT PK,
position VARCHAR(10) FK,
department VARCHAR(15) FK,
*/
ALTER TABLE employee
ADD CONSTRAINT employee_pk_id PRIMARY KEY (employee_id);

INSERT INTO employee (employee_id, ssn, position, first_name, last_name, email, birth_date, department, hire_date)
VALUES
(1, 123456789, 'Manager', 'Alice', 'Taylor', 'alice.taylor@email.com', '1980-04-22', 'Management', '2015-05-12'),
(2, 987654321, 'Chef', 'Bob', 'Miller', 'bob.miller@email.com', '1985-07-15', 'Kitchen', '2017-09-01'),
(3, 112233445, 'Waiter', 'Charlie', 'Brown', 'charlie.brown@email.com', '1992-01-10', 'Front Desk', '2020-02-25'),
(4, 223344556, 'Waitress', 'Diana', 'White', 'diana.white@email.com', '1993-03-20', 'Front Desk', '2021-03-18'),
(5, 334455667, 'Sous Chef', 'Edward', 'Harris', 'edward.harris@email.com', '1988-11-11', 'Kitchen', '2019-06-30'),
(6, 445566778, 'Server', 'Fiona', 'Clark', 'fiona.clark@email.com', '1995-05-05', 'Front Desk', '2021-07-09'),
(7, 556677889, 'Dishwasher', 'George', 'Walker', 'george.walker@email.com', '2000-02-28', 'Kitchen', '2022-01-15'),
(8, 667788990, 'Host', 'Hannah', 'Lewis', 'hannah.lewis@email.com', '1998-08-14', 'Front Desk', '2021-10-22');

SELECT * FROM employee;