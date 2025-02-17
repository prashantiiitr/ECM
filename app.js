const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes=require('./routes/captain.route')

connectToDb();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.use('/users', userRoutes); 
app.use('/captains', userRoutes); 

module.exports = app;