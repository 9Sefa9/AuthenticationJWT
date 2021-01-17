const express = require('express');
const router = require('./routes/auth');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Importing routes:
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//environment setup
dotenv.config();




//connect to database:
//model needed.
mongoose.connect(process.env.DB_CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (error)=>{console.log("DB CONNECTION ESTABLISHED")});


//Middleware
app.use(express.json());

//Route middleware: when access to /api/user. do "authRoute". 
//in this case, the requests or responses are taken from auth.js  
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, ()=>console.log("Server started"));


