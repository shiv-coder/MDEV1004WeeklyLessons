//import express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Initialize the express app
const app = express();

//MongoDb Atlas connection String
const mongoURI = 'mongodb+srv://user2:user2@cluster0.lsiqq.mongodb.net/';

//Middleware to parseJSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Define a route
app.get('/',(req,res)=>{
    res.send('Welcome to the first program of node js express');
})

//set the port
const port = 3000;

//start the server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});