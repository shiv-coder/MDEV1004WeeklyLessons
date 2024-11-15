const express = require('express');
const morgan = require('morgan');
const connectDB = require('./database/db');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();
connectDB();
//Middleware morgan
app.use(morgan('combined'));

//Routes
app.use('/',analyticsRoutes);

//start server

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
