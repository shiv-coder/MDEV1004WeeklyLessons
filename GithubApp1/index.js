require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { getRepositories} = require('./controllers/repoController');

const app = express();
const PORT = process.env.PORT ||3000;

//connect to MONGODB

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log('Connected to MongoDB'))
.catch((error)=>console.error('MongoDB Connection error',error));


//Define routes
app.get('/fetch-repositories',getRepositories);

//Start server
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});