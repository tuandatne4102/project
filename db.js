const sql = require('mssql');

const config = {
    server: "localhost",
    user: "sa",
    password: "123",
    database: "ecatalog",
    options: {
        encrypt: false
    }
};

const connectToDatabase = async () => {
    try {
        await sql.connect(config);
        console.log("Database connection successful");
    } catch (err) {
        console.error("Database connection failed", err);
        throw err;
    }
};

module.exports = connectToDatabase;
