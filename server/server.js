const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Database Connection

connectDB();

// Middleware

app.use(cors());
app.use(express.json());

// Test Route

app.get("/", (req, res) => {

    res.json({
        message: "GharKharcha API Running"
    });

});

// Start Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});