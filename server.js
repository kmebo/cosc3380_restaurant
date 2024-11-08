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
    password: '1234',
    port: 5432,
});

app.use(express.static(path.join(__dirname, 'public')));


// Select all attributes from menu table
app.get('/menu', async(req, res) => {
    const {name} = req.body;
    const {price} = req.body;
    try{
        const result = await pool.query('SELECT * FROM T1');
        res.json(result.rows);
    } catch(err){
        console.error(err.message);
        res.sendStatus(500);
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