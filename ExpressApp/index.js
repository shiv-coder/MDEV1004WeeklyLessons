//import express
const express = require('express');

//Initialize the express app
const app = express();

//set the port
const port = 3000;

//start the server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});