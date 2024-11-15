const express = require('express');
const morgan = require('morgan');
const connectDB = require('./database/db');
const path = require('path');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();
connectDB();
//Middleware morgan
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/',analyticsRoutes);

//start server

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
