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
    password: "1234", // Default 1234
    port: 5432,
});

app.use(express.static(path.join(__dirname, 'public')));

function getAllAvailableMenuItems(type) {
    app.get('/menu', async (req, res) => {
        try {
            const result = await pool.query('SELECT * FROM menu WHERE category=' + type);
            console.log(result.rows);
            res.json(result.rows);
        } catch (err) {
            console.error(err.message);
            res.sendStatus(500);
        }
    });
}



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
app.get('/employee', async (req, res) => {
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
        const result = await pool.query('SELECT * FROM restaurant');
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

// Fetch preorders attributes from database
app.get('/preorder', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM preorder');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});
// Update preorders attributes from database by ID
app.put('/preorder/:obj_id', async (req, res) => {
    const { obj_id } = req.params;
    const { quantity } = req.body;
    try {
        await pool.query('UPDATE preorder SET quantity = $1 WHERE obj_id = $2;', [quantity, obj_id]);
        res.sendStatus(200);
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

// Fetch store id for dropdown
app.get('/stores', async (req, res) => {
    try {
        const result = await pool.query('SELECT store_id, location FROM restaurant');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching stores:', err.message);
        res.sendStatus(500);
    }
});

// Add a new pizza to the database
app.post('/preorder', async (req, res) => {
    const { name, quantity } = req.body;

    // Simple validation
    if (!name || !quantity || quantity < 1 || quantity > 100) {
        return res.status(400).send('Invalid preorder data.');
    }

    try {
        // Insert the pizza into the database, obj_id will be generated automatically
        const result = await pool.query(
            'INSERT INTO preorder (name, quantity) VALUES ($1, $2) RETURNING obj_id', 
            [name, quantity]
        );

        // Get the generated obj_id
        const obj_id = result.rows[0].obj_id;

        // Send a response with the newly created obj_id
        res.status(201).json({ obj_id, name, quantity });
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500); // Internal server error
    }
});

// Delete a employee by ID
app.delete('/employee/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const result = await pool.query('DELETE FROM employee WHERE employee_id = $1', [id]);
        if(result.rowCount === 0){
            return res.sendStatus(404);
        }
        res.sendStatus(200);
    }catch(err){
        console.error(err.message);
        res.sendStatus(500);
    }
});

// Insert a new employee
app.post('/employee/add', async (req, res) => {
    const {ssn, position, firstName, lastName, email, birthDate, hireDate, storeId} = req.body;
    const client = await pool.connect();

    try{
        // Begin the transaction
        await client.query('BEGIN');
        // Insert new values into employee relation
        await client.query('INSERT INTO employee (ssn, position, first_name, last_name, email, birth_date, hire_date, store_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [ssn, position, firstName, lastName, email, birthDate, hireDate, storeId]);
        // Commit the changes if successfull
        await client.query('COMMIT');
        res.sendStatus(200);
    } catch(error){
        // Rollback if an error occurs
        await client.query('ROLLBACK');
        //console.error('Transaction error: ', error.message);
        res.sendStatus(500);
    }finally{
        client.release();
    }
});

// Edit employee data
app.put('/employee/:id', async (req, res) => {
    const {position, email, storeId} = req.body;
    const {id: employeeId} = req.params;
    // This method works, but empty values are applied to the query, setting the table values to blank
    /*try {
        await pool.query('UPDATE employee SET position = $1, email = $2, store_id = $3 WHERE employee_id = $4', [position, email, storeId, employeeId]);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }*/
   // This method ensures that if a value is left blank it will not be applied to the query
    try {
        const updates = [];
        const values = [];
        let query = 'UPDATE employee SET ';
    
        if (position) {
                updates.push('position = $' + (updates.length + 1));
                values.push(position);
        }
        if (email) {
            updates.push('email = $' + (updates.length + 1));
            values.push(email);
        }
         if (storeId) {
            updates.push('store_id = $' + (updates.length + 1));
            values.push(storeId);
        }
        if (updates.length === 0) {
           return res.status(400).json({ message: 'No valid fields to update' });
        }
        query += updates.join(', ') + ' WHERE employee_id = $' + (updates.length + 1);
        values.push(employeeId);
    
        await pool.query(query, values);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.message);
        res.status(500);
    }
});

app.get('/ingredientsAvailable', async (req, res) => {

    const {ingredient, amount} = req.body;

    try {
        // Begin transaction
        await pool.query('BEGIN');

        // Insert new order
        const queryResult = await pool.query('SELECT $1 FROM inventory WHERE item_amount >= $2', [ingredient, amount]);

        // Commit transaction
        await pool.query('COMMIT');
        res.status(200);
        res.json(queryResult.rows);
    } catch (err) {
        // Rollback in case of error
        await pool.query('ROLLBACK');
        console.error(err.message);
        res.status(500);
    }

});

// Orders more inventory
app.put('/inventory/:name', async (req, res) => {
    const {name: item_name} = req.params;
    const {item_amount} = req.body;

    try {
        await pool.query('UPDATE inventory SET item_amount = item_amount + $1, last_restocked = CURRENT_DATE WHERE item_name = $2', [item_amount, item_name]);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.message);
        res.sendStatus(500);
    }
});


app.post('/restaurants', async (req, res) => {
    const { location, open_date, sales, total_customers, owner, manager } = req.body;

    try {
        await pool.query(
            'INSERT INTO restaurant (location, open_date, sales, total_customers, owner, manager) VALUES ($1, $2, $3, $4, $5, $6)',
            [location, open_date, sales, total_customers, owner, manager]
        );
        res.sendStatus(201);
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
