const express = require('express');
const bodyParser = require('body-parser');
const{Pool} = require('pg');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 3000;

// Database connection
// Change as need for your local database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hw4_test',
    password: "cameron18", // Default 1234
    port: 5432,
});

app.use(express.static(path.join(__dirname, 'public')));

// Fetch Menu attributes from database
app.get('/menu', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM menu');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});
// Submit Order to the database
app.post('/submit-order', async (req, res) => {
    const orderData = req.body;

    try {
        // Begin transaction
        await pool.query('BEGIN');

        // Insert new order
        const orderResult = await pool.query('INSERT INTO orders DEFAULT VALUES RETURNING id');
        const orderId = orderResult.rows[0].id;

        // Insert items for the order
        for (let item of orderData) {
            await pool.query(
                'INSERT INTO order_items (order_id, item_id, item_name, quantity, price) VALUES ($1, $2, $3, $4, $5)',
                [orderId, item.item_id, item.item_name, item.quantity, item.price]
            );
        }

        // Commit transaction
        await pool.query('COMMIT');
        res.status(200).json({ message: 'Order submitted successfully' });
    } catch (err) {
        // Rollback in case of error
        await pool.query('ROLLBACK');
        console.error(err.message);
        res.status(500).json({ error: 'Failed to submit order' });
    }
});



// Fetch Employee attributes from database
app.get('/employees', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM employee');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});

// Fetch returant attributes from database
app.get('/restaurants', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM resturant');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});

// Fetch inventory attributes from database
app.get('/inventory', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inventory');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});

// Fetch customer attributes from database
app.get('/customers', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM customer');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});

// Fetch orders attributes from database
app.get('/orders', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM orders');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});

// Testing database connection is successful
pool.connect((err, client, release) => {
    if (err) {
        console.error('Failed to connect to the database:', err.stack);
    } else {
        console.log('Connected successfully to the database');
    }
    // Always release the client back to the pool
    release();
});

// Testing server port connection
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
