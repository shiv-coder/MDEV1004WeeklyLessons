//import express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Initialize the express app
const app = express();


//connect to mongodb Atlas
mongoose.connect(mongoURI)
.then(()=>{
    console.log('Connected to mongodb');
})
.catch((error)=>{
    console.error('Error connecting to mongoDB',error);
});
//Middleware to parseJSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Define a route
app.get('/',(req,res)=>{
    res.send('Welcome to the first program of node js express');
})

app.post('/submit',(req,res)=>{
    res.send(`Received data:${req.body.data}`)
});

//set the port
const port = 3000;

//start the server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});