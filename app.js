require('dotenv').config();
const express = require('express');
const connectToDB = require('./config/db.js');
const router = require('./routes/userRoute.js');


const app = express();
connectToDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router);



module.exports = app;