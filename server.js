const express = require('express');
const sql = require('mssql');
const connectToDatabase = require('./db');
const app = express();
const path = require('path');

// Set the view engine to EJS and the views directory 
app.set('view engine', 'ejs'); app.set('views', path.join(__dirname, 'view')); 

// Serve static files from the 'public' directory 
app.use(express.static(path.join(__dirname, 'public')));

// Route trang chu
app.get('/', async (req, res) => {
    try {
        await connectToDatabase();

        const request = new sql.Request();
        const result = await request.query("SELECT * FROM models");

        // console.log(result.recordset);

        // Render the data to the EJS template
        res.render('index.ejs', { data: result.recordset });
    } catch (err) {
        console.error("An error occurred", err);
        res.status(500).send("An error occurred while fetching data");
    }
});

// Route Du An Tieu Bieu
app.get('/duan', async (req, res) => {
    try {
        await connectToDatabase();

        const request = new sql.Request();
        const result = await request.query("SELECT * FROM models");

        // console.log(result.recordset);

        // Render the data to the EJS template
        res.render('duan.ejs', { data: result.recordset });
    } catch (err) {
        console.error("An error occurred", err);
        res.status(500).send("An error occurred while fetching data");
    }
});

// Route Chi Tiet Nha
app.get('/house', async (req, res) => {
    const houseId = req.query.id; // Get the id from query parameters

    try {
        await connectToDatabase();

        const request = new sql.Request();
        const result = await request.query(`SELECT * FROM models WHERE id = '${houseId}'`);

        // console.log(result.recordset);

        // Render the data to the EJS template
        res.render('house', { data: result.recordset });
    } catch (err) {
        console.error("An error occurred", err);
        res.status(500).send("An error occurred while fetching data");
    }
});


app.listen(3000, () => {
    console.log("The server has started on port 3000");
});
