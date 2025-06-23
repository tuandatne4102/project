const mongoose = require("mongoose");
const MONGODB_URL = "mongodb+srv://admin:taolaadmin@cluster0.n8sy2eg.mongodb.net/Project?retryWrites=true&w=majority&appName=Cluster0"


const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connection successful");
    } catch (err) {
        console.error("Database connection failed", err);
        throw err;
    }
};

module.exports = connectToDatabase;
